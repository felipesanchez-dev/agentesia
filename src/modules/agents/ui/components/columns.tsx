"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AgentAvatar } from "./agent-avatar";
import { Badge } from "@/components/ui/badge";
import { AgentGetMany } from "../../types";
import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import {
  VideoIcon,
  ClockIcon,
  SparklesIcon,
  TrendingUpIcon,
  CalendarIcon,
  StarIcon,
  BrainIcon,
  CheckCircleIcon,
  ActivityIcon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const getPerformanceConfig = (meetingCount: number) => {
  if (meetingCount >= 20) {
    return {
      label: "Experto",
      className:
        "bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-200 dark:from-purple-950/50 dark:to-indigo-950/50 dark:text-purple-300 dark:border-purple-800",
      icon: StarIcon,
    };
  } else if (meetingCount >= 10) {
    return {
      label: "Avanzado",
      className:
        "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-blue-200 dark:from-blue-950/50 dark:to-cyan-950/50 dark:text-blue-300 dark:border-blue-800",
      icon: TrendingUpIcon,
    };
  } else if (meetingCount >= 5) {
    return {
      label: "Experimentado",
      className:
        "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 dark:from-emerald-950/50 dark:to-green-950/50 dark:text-emerald-300 dark:border-emerald-800",
      icon: CheckCircleIcon,
    };
  } else if (meetingCount >= 1) {
    return {
      label: "Activo",
      className:
        "bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border-yellow-200 dark:from-yellow-950/50 dark:to-amber-950/50 dark:text-yellow-300 dark:border-yellow-800",
      icon: ActivityIcon,
    };
  } else {
    return {
      label: "Nuevo",
      className:
        "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border-gray-200 dark:from-gray-950/50 dark:to-slate-950/50 dark:text-gray-300 dark:border-gray-800",
      icon: SparklesIcon,
    };
  }
};

export const columns: ColumnDef<AgentGetMany[number]>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const agent = row.original;

      return (
        <div className="flex flex-col gap-y-3 min-w-[300px] py-2">
          <div className="flex items-start gap-x-3">
            <div className="relative">
              <AgentAvatar
                name={agent.name}
                size="lg"
                className="ring-2 ring-background shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <BrainIcon className="size-3 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-x-2 mb-2">
                <h3 className="font-bold text-lg text-foreground capitalize">
                  {agent.name}
                </h3>
                <Badge
                  variant="outline"
                  className="gap-x-1 text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50"
                >
                  <SparklesIcon className="size-3" />
                  IA
                </Badge>
              </div>

              <div className="flex items-center gap-x-2 mb-2">
                <UserIcon className="size-3 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">
                  ID: {agent.id.slice(0, 8)}...
                </span>
              </div>

              {agent.instructions ? (
                <div className="p-3 bg-muted/40 rounded-lg border-l-4 border-l-primary">
                  <div className="flex items-center gap-x-2 mb-1">
                    <FileTextIcon className="size-3 text-primary" />
                    <span className="text-xs font-medium text-primary">
                      Instrucciones
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {agent.instructions.length > 70
                      ? `${agent.instructions.slice(0, 70)}...`
                      : agent.instructions}
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-dashed">
                  <div className="flex items-center gap-x-2 text-muted-foreground">
                    <FileTextIcon className="size-3" />
                    <span className="text-sm italic">
                      Sin instrucciones configuradas
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "performance",
    cell: ({ row }) => {
      const agent = row.original;
      const config = getPerformanceConfig(agent.meetingCount);
      const Icon = config.icon;

      return (
        <div className="flex flex-col gap-y-3 min-w-[180px]">
          <Badge
            variant="outline"
            className={cn(
              "gap-x-2 font-semibold px-3 py-2 text-sm shadow-sm w-fit",
              config.className
            )}
          >
            <Icon className="size-4" />
            {config.label}
          </Badge>

          <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border">
            <div className="flex items-center gap-x-2 mb-2">
              <VideoIcon className="size-4 text-blue-600" />
              <span className="font-medium text-sm text-blue-700 dark:text-blue-300">
                Reuniones
              </span>
            </div>
            <div className="flex items-baseline gap-x-2">
              <span className="text-2xl font-bold text-foreground">
                {agent.meetingCount}
              </span>
              <span className="text-sm text-muted-foreground">
                {agent.meetingCount === 1 ? "reunión" : "reuniones"}
              </span>
            </div>

            <div className="mt-2">
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(100, (agent.meetingCount / 20) * 100)}%`,
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {agent.meetingCount < 20
                  ? `${20 - agent.meetingCount} reuniones para nivel Experto`
                  : "Nivel máximo alcanzado"}
              </p>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "timestamps",
    cell: ({ row }) => {
      const agent = row.original;
      const createdAt = new Date(agent.createdAt);
      const updatedAt = new Date(agent.updatedAt);
      const wasRecentlyUpdated = updatedAt.getTime() !== createdAt.getTime();

      return (
        <div className="flex flex-col gap-y-3 min-w-[180px]">
          <div className="p-3 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border">
            <div className="flex items-center gap-x-2 mb-2">
              <CalendarIcon className="size-4 text-emerald-600" />
              <span className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
                Creado
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                {format(createdAt, "dd/MM/yyyy")}
              </p>
              <p className="text-xs text-muted-foreground">
                {format(createdAt, "HH:mm 'hrs'")}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                {formatDistanceToNow(createdAt, {
                  addSuffix: true,
                  locale: es,
                })}
              </p>
            </div>
          </div>

          {wasRecentlyUpdated && (
            <div className="p-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <div className="flex items-center gap-x-2 mb-1">
                <ClockIcon className="size-3 text-blue-600" />
                <span className="font-medium text-xs text-blue-700 dark:text-blue-300">
                  Actualizado
                </span>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                {formatDistanceToNow(updatedAt, {
                  addSuffix: true,
                  locale: es,
                })}
              </p>
            </div>
          )}

          <div className="flex items-center gap-x-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Disponible
            </span>
          </div>
        </div>
      );
    },
  },
];
