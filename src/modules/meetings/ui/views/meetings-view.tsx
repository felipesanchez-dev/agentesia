"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { DataTable } from "@/components/data-table";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingsFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "@/components/data-pagination";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [filters, setFilters] = useMeetingsFilters();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="No hay Reuniones"
          description="No has creado ninguna reunión aún. Haz clic en el botón de crear reunión."
        />
      )}
    </div>
  );
};

export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Cargando reuniones"
      description="Estamos cargando tus reuniones. Por favor, espera un momento."
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="No se pudieron cargar las reuniones"
      description="Ocurrió un error al intentar cargar las reuniones. Verifica tu conexión a internet o contacta al soporte si el problema persiste."
    />
  );
};
