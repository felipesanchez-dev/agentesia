"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
  return <div>{JSON.stringify(data)}</div>;
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
