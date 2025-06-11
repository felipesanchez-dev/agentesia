"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "../components/data-pagination";

export const AgentsView = () => {
  const [filters, setFilters] = useAgentsFilters();

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.items} columns={columns} />
      <DataPagination
      page={filters.page}
      totalPages={data.totalPages}
      onPageChange={(page) => setFilters({page})}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="No hay agentes"
          description="No has creado ningún agente aún. Haz clic en el botón de abajo para crear uno nuevo."
        />
      )}
    </div>
  );
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Cargando agentes"
      description="Estamos cargando tus agentes. Por favor, espera un momento."
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="No se pudieron cargar los agentes"
      description="Ocurrió un error al intentar cargar los agentes. Verifica tu conexión a internet o contacta al soporte si el problema persiste."
    />
  );
};
