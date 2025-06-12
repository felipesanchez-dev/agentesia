"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { Badge } from "@/components/ui/badge";
import { AgentAvatar } from "@/modules/agents/ui/components/agent-avatar";
import { AgentIdViewHeader } from "@/modules/agents/ui/components/agent-id-view";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { VideoIcon } from "lucide-react";

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
        onRemove={() => {}}
      />
      <div className="bg-white rounded-lg border">
        <div className="px-4 py-5 gap-y-5 flex flex-col col-span-5">
          <div className="flex items-center gap-x-3">
            <AgentAvatar
              name={data.name}
              size="lg"
              showIcon={true}
              showInitials={false}
              className="border-2 border-gray-200"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-foreground">
                {data.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {data.instructions || "Sin descripción disponible"}
              </p>
            </div>
            <Badge
              variant="outline"
              className="flex items-center gap-x-2 [&>svg]:size-4"
            >
              <VideoIcon />
              {data.meetingCount}
            </Badge>
          </div>
        </div>
      </div>
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
