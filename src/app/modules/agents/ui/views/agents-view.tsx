"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions({}));

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.items} columns={columns} />
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
