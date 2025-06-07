"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      {JSON.stringify(data, null, 2)}
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
