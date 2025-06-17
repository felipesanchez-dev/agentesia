import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  XCircleIcon,
  InfoIcon,
  ClockIcon,
  BanIcon,
  CalendarPlusIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CancelledState = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-2xl border-0 bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-950/20 dark:via-background dark:to-red-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100/30 to-gray-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100/20 to-red-100/20 rounded-full blur-2xl" />

        <CardContent className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-red-500 rounded-full blur-xl opacity-25" />
            <div className="relative p-6 bg-gradient-to-r from-gray-500 to-red-500 rounded-full shadow-2xl ring-4 ring-white/20 dark:ring-black/20">
              <XCircleIcon className="size-12 text-white drop-shadow-lg" />
            </div>
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="gap-x-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-red-50 to-gray-50 text-red-700 border-red-200 dark:from-red-950/50 dark:to-gray-950/50 dark:text-red-300 dark:border-red-800 shadow-sm"
            >
              <BanIcon className="size-4" />
              Reunión Cancelada
            </Badge>

            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Reunión cancelada
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Esta reunión ha sido cancelada. Puedes programar una nueva reunión
              o revisar otras reuniones disponibles.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full max-w-md py-4">
            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/50 dark:to-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                <InfoIcon className="size-6 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Sin actividad
              </span>
            </div>

            <div className="group flex flex-col items-center gap-y-3 transition-all duration-200 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 rounded-xl border border-red-200 dark:border-red-800 shadow-sm group-hover:shadow-md transition-shadow">
                <ClockIcon className="size-6 text-red-600 dark:text-red-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Tiempo expirado
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2">
            <Button
              size="lg"
              className={cn(
                "w-full sm:w-auto gap-x-2 font-semibold shadow-lg hover:shadow-xl",
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                "transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
              )}
              asChild
            >
              <Link href="/meetings">
                <CalendarPlusIcon className="size-4" />
                Volver a reuniones
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-x-2 text-sm bg-red-50/50 dark:bg-red-950/10 rounded-full px-4 py-2 border border-red-100 dark:border-red-900/20">
            <div className="flex items-center gap-x-2">
              <div className="size-3 bg-red-500 rounded-full shadow-sm" />
              <span className="text-red-600 dark:text-red-400 font-medium">
                Cancelada permanentemente
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
