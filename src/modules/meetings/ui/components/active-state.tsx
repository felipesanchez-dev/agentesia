import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { VideoIcon, PlayIcon, UsersIcon, WifiIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  meetingId: string;
}

export const ActiveState = ({ meetingId }: Props) => {
  return (
    <div className="min-h-[500px] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-xl border-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950/20 dark:via-background dark:to-blue-950/20">
        <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative p-5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-xl animate-pulse">
              <VideoIcon className="size-10 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="gap-x-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 dark:from-green-950/50 dark:to-emerald-950/50 dark:text-green-300 dark:border-green-800 animate-pulse"
            >
              <div className="size-2 bg-green-500 rounded-full animate-ping" />
              Reunión en Vivo
            </Badge>

            <h2 className="text-3xl font-bold text-foreground">
              ¡Reunión activa!
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Tu reunión con el agente IA está actualmente en progreso. Únete
              ahora para continuar la conversación.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full max-w-md py-4">
            <div className="flex flex-col items-center gap-y-3">
              <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 rounded-xl border border-green-200 dark:border-green-800">
                <UsersIcon className="size-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                En línea
              </span>
            </div>

            <div className="flex flex-col items-center gap-y-3">
              <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-xl border border-purple-200 dark:border-purple-800">
                <WifiIcon className="size-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Conectado
              </span>
            </div>
          </div>

          <div className="flex justify-center w-full pt-2">
            <Button
              size="lg"
              asChild
              className={cn(
                "w-full sm:w-auto gap-x-2 font-semibold shadow-lg hover:shadow-xl",
                "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700",
                "transform hover:scale-105 transition-all duration-200 animate-pulse"
              )}
            >
              <Link href={`/call/${meetingId}`}>
                <PlayIcon className="size-4" />
                Unirse a la reunión
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-x-2 text-sm">
            <div className="flex items-center gap-x-2">
              <div className="size-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600 dark:text-green-400 font-medium">
                Conectado y listo
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-muted/20 w-full">
            <div className="flex items-center justify-center gap-x-2">
              <span className="text-xs text-muted-foreground">
                ID de reunión:
              </span>
              <Badge variant="secondary" className="font-mono text-xs">
                {meetingId.slice(0, 8)}...
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
