import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  LoaderIcon,
  ClockIcon,
  CpuIcon,
  CalendarPlusIcon,
  BrainIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ProcessingState = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-2xl border-0 bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-orange-950/20 dark:via-background dark:to-purple-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/20 to-orange-100/20 rounded-full blur-2xl animate-pulse" />

        <CardContent className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative p-6 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full shadow-2xl ring-4 ring-white/20 dark:ring-black/20 animate-pulse">
              <LoaderIcon className="size-12 text-white drop-shadow-lg animate-spin" />
            </div>
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="gap-x-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-50 to-purple-50 text-orange-700 border-orange-200 dark:from-orange-950/50 dark:to-purple-950/50 dark:text-orange-300 dark:border-orange-800 shadow-sm animate-pulse"
            >
              <CpuIcon className="size-4 animate-pulse" />
              Procesando Reunión
            </Badge>

            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Reunión en procesamiento
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              La IA está procesando y analizando tu reunión. Este proceso puede
              tomar unos minutos. Te notificaremos cuando esté completo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full max-w-md py-4">
            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 rounded-xl border border-orange-200 dark:border-orange-800 shadow-sm group-hover:shadow-md transition-shadow">
                <BrainIcon className="size-6 text-orange-600 dark:text-orange-400 animate-pulse" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                IA Analizando
              </span>
            </div>

            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm group-hover:shadow-md transition-shadow">
                <Zap className="size-6 text-purple-600 dark:text-purple-400 animate-bounce" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Generando
              </span>
            </div>

            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm group-hover:shadow-md transition-shadow">
                <ClockIcon className="size-6 text-blue-600 dark:text-blue-400 animate-pulse" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                En progreso
              </span>
            </div>
          </div>

          <div className="w-full max-w-md space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progreso del análisis</span>
              <span className="animate-pulse">●●●</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-pulse w-3/4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2">
            <Button
              size="lg"
              className={cn(
                "w-full sm:w-auto gap-x-2 font-semibold shadow-lg hover:shadow-xl",
                "bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700",
                "transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
              )}
              asChild
            >
              <Link href="/meetings">
                <CalendarPlusIcon className="size-4" />
                Ver otras reuniones
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-x-2 text-sm bg-orange-50/50 dark:bg-orange-950/10 rounded-full px-4 py-2 border border-orange-100 dark:border-orange-900/20">
            <div className="flex items-center gap-x-2">
              <div className="size-3 bg-orange-500 rounded-full shadow-sm animate-ping" />
              <span className="text-orange-600 dark:text-orange-400 font-medium">
                Procesando activamente
              </span>
            </div>
          </div>

          <div className="pt-6 w-full">
            <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
