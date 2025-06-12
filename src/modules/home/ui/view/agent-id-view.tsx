"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { AgentIdViewHeader } from "@/modules/agents/ui/components/agent-id-view";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  agentId: string;
}

export const AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );

  return (
    <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
      <AgentIdViewHeader
        agentId={agentId}
        agentName={data.name}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
};

export const AgentIdViewLoading = () => {
  return (
    <LoadingState
      title="Cargando agente"
      description="Estamos cargando tu agente. Por favor, espera un momento."
    />
  );
};

export const AgentIdViewError = () => {
  return (
    <ErrorState
      title="No se pudo cargar el agente"
      description="Ocurrió un error al intentar cargar el agente. Verifica tu conexión a internet o contacta al soporte si el problema persiste."
    />
  );
};
