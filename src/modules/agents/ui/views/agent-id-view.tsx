"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AgentAvatar } from "@/modules/agents/ui/components/agent-avatar";
import { AgentIdViewHeader } from "@/modules/agents/ui/components/agent-id-view";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { VideoIcon, SparklesIcon, BrainIcon } from "lucide-react";

interface Props {
  agentId: string;
}

export const AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );

  return (
    <div className="flex-1 py-6 px-4 md:px-8 flex flex-col gap-6 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      <AgentIdViewHeader
        agentId={agentId}
        agentName={data.name}
        onEdit={() => {}}
        onRemove={() => {}}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <AgentAvatar
                  name={data.name}
                  size="xl"
                  showIcon={true}
                  showInitials={false}
                  className="border-4 border-white shadow-lg ring-2 ring-primary/10"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {data.name}
                  </h1>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
                  >
                    <SparklesIcon className="w-3 h-3 mr-1" />
                    IA Agent
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm">
                  Agente especializado • Activo • Listo para conversar
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* <div className="flex flex-wrap gap-3">
              <Button size="lg" className="flex-1 min-w-[150px] bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                <VideoIcon className="w-5 h-5 mr-2" />
                Iniciar Videollamada
              </Button>
              <Button variant="outline" size="lg" className="flex-1 min-w-[150px] border-2 hover:bg-primary/5">
                <MessageSquareIcon className="w-5 h-5 mr-2" />
                Chat de Texto
              </Button>
            </div> */}

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BrainIcon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Prompt del Agente
                </h3>
              </div>

              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  {data.instructions ||
                    "Sin instrucciones específicas configuradas para este agente."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100/30">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <VideoIcon className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Estadísticas</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">
                  {data.meetingCount || 0}
                </div>
                <p className="text-blue-700 text-sm">
                  {data.meetingCount === 1
                    ? "Reunión realizada"
                    : "Reuniones realizadas"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100/30">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-900">Acciones Rápidas</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="ghost" size="sm" className="w-full justify-start text-green-700 hover:bg-green-100">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Programar Reunión
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-green-700 hover:bg-green-100">
                <ClockIcon className="w-4 h-4 mr-2" />
                Ver Historial
              </Button>
            </CardContent>
          </Card> */}

          {/* Agent Status Card */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100/30">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-purple-900">
                  Estado del Agente
                </h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-black">En línea</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const AgentIdViewLoading = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      <LoadingState
        title="Cargando agente"
        description="Estamos cargando la información de tu agente. Por favor, espera un momento."
      />
    </div>
  );
};

export const AgentIdViewError = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      <ErrorState
        title="No se pudo cargar el agente"
        description="Ocurrió un error al intentar cargar la información del agente. Verifica tu conexión a internet o contacta al soporte si el problema persiste."
      />
    </div>
  );
};
