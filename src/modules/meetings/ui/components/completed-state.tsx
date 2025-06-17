import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircleIcon,
  FileTextIcon,
  CalendarPlusIcon,
  StarIcon,
  ClockIcon,
  TrendingUpIcon,
} from "lucide-react";
import Link from "next/link";

export const CompletedState = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-2xl border-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950/20 dark:via-background dark:to-green-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/20 to-emerald-100/20 rounded-full blur-2xl" />

        <CardContent className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full blur-xl opacity-25" />
            <div className="relative p-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-2xl ring-4 ring-white/20 dark:ring-black/20">
              <CheckCircleIcon className="size-12 text-white drop-shadow-lg" />
            </div>
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="gap-x-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 dark:from-emerald-950/50 dark:to-green-950/50 dark:text-emerald-300 dark:border-emerald-800 shadow-sm"
            >
              <StarIcon className="size-4 text-emerald-600" />
              Reunión Completada
            </Badge>

            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              ¡Reunión finalizada!
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Tu reunión con el agente IA se ha completado exitosamente. Puedes
              revisar el resumen y descargar los recursos generados.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full max-w-md py-4">
            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm group-hover:shadow-md transition-shadow">
                <CheckCircleIcon className="size-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Finalizada
              </span>
            </div>

            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm group-hover:shadow-md transition-shadow">
                <FileTextIcon className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Resumen listo
              </span>
            </div>

            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm group-hover:shadow-md transition-shadow">
                <TrendingUpIcon className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Datos guardados
              </span>
            </div>
          </div>

          <div className="w-full max-w-md bg-emerald-50/50 dark:bg-emerald-950/10 rounded-lg p-3 border border-emerald-100 dark:border-emerald-900/20">
            <div className="flex items-center justify-center gap-x-2 text-sm">
              <ClockIcon className="size-4 text-emerald-600" />
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                Duración: 45 minutos
              </span>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Button
              variant="ghost"
              size="sm"
              className="gap-x-2 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/meetings">
                <CalendarPlusIcon className="size-4" />
                Programar nueva reunión
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-x-2 text-sm bg-emerald-50/50 dark:bg-emerald-950/10 rounded-full px-4 py-2 border border-emerald-100 dark:border-emerald-900/20">
            <div className="flex items-center gap-x-2">
              <div className="size-3 bg-emerald-500 rounded-full shadow-sm" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                Completada exitosamente
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
