import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BanIcon,
  VideoIcon,
  ClockIcon,
  SparklesIcon,
  PlayIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  meetingId: string;
  onCancelMeeting: () => void;
  isCancelling?: boolean;
}

export const UpcomingState = ({
  meetingId,
  onCancelMeeting,
  isCancelling,
}: Props) => {
  return (
    <div className="min-h-[500px] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-xl border-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-25 animate-pulse" />
            <div className="relative p-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl">
              <ClockIcon className="size-10 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="gap-x-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border-yellow-200 dark:from-yellow-950/50 dark:to-amber-950/50 dark:text-yellow-300 dark:border-yellow-800"
            >
              <CalendarIcon className="size-4" />
              Reunión Programada
            </Badge>

            <h2 className="text-3xl font-bold text-foreground">
              ¡Tu reunión está lista!
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Todo está configurado para tu reunión con el agente IA. Puedes
              iniciarla cuando estés listo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 w-full max-w-md py-4">
            <div className="flex flex-col items-center gap-y-3">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-xl border border-blue-200 dark:border-blue-800">
                <SparklesIcon className="size-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                IA Avanzada
              </span>
            </div>

            <div className="flex flex-col items-center gap-y-3">
              <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-xl border border-purple-200 dark:border-purple-800">
                <VideoIcon className="size-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Video HD
              </span>
            </div>

            <div className="flex flex-col items-center gap-y-3">
              <div className="p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <CheckCircleIcon className="size-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Listo para usar
              </span>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 w-full pt-2">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "w-full sm:w-auto gap-x-2 font-medium transition-all hover:shadow-md",
                "hover:bg-red-50 hover:border-red-200 hover:text-red-700",
                "dark:hover:bg-red-950/20 dark:hover:border-red-800 dark:hover:text-red-300",
                isCancelling && "opacity-50 cursor-not-allowed"
              )}
              onClick={onCancelMeeting}
              disabled={isCancelling}
            >
              <BanIcon className="size-4" />
              {isCancelling ? "Cancelando..." : "Cancelar"}
            </Button>

            <Button
              size="lg"
              disabled={isCancelling}
              asChild
              className={cn(
                "w-full sm:w-auto gap-x-2 font-semibold shadow-lg hover:shadow-xl",
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                "transform hover:scale-105 transition-all duration-200",
                isCancelling && "opacity-50 cursor-not-allowed hover:scale-100"
              )}
            >
              <Link href={`/call/${meetingId}`}>
                <PlayIcon className="size-4" />
                Iniciar reunión
              </Link>
            </Button>
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
