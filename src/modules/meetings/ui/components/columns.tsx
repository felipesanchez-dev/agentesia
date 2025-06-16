"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { MeetingGetMany } from "@/modules/meetings/types";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import humanizeDuration from "humanize-duration";
import {
  CircleCheckIcon,
  CircleXIcon,
  ClockArrowUpIcon,
  LoaderIcon,
  VideoIcon,
  SparklesIcon,
  TimerIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AgentAvatar } from "@/modules/agents/ui/components/agent-avatar";

function formatDuration(seconds: number) {
  return humanizeDuration(seconds * 1000, {
    largest: 2,
    round: true,
    units: ["h", "m", "s"],
    language: "es",
    fallbacks: ["en"],
  });
}

const statusConfig = {
  pendiente: {
    icon: ClockArrowUpIcon,
    label: "Pendiente",
    className:
      "bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border-yellow-200 dark:from-yellow-950/50 dark:to-amber-950/50 dark:text-yellow-300 dark:border-yellow-800",
    animate: false,
  },
  activo: {
    icon: VideoIcon,
    label: "Activo",
    className:
      "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-blue-200 dark:from-blue-950/50 dark:to-cyan-950/50 dark:text-blue-300 dark:border-blue-800",
    animate: false,
  },
  finalizado: {
    icon: CircleCheckIcon,
    label: "Finalizado",
    className:
      "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 dark:from-emerald-950/50 dark:to-green-950/50 dark:text-emerald-300 dark:border-emerald-800",
    animate: false,
  },
  encurso: {
    icon: LoaderIcon,
    label: "En Curso",
    className:
      "bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 border-rose-200 dark:from-rose-950/50 dark:to-pink-950/50 dark:text-rose-300 dark:border-rose-800",
    animate: true,
  },
  cancelado: {
    icon: CircleXIcon,
    label: "Cancelado",
    className:
      "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border-gray-200 dark:from-gray-950/50 dark:to-slate-950/50 dark:text-gray-300 dark:border-gray-800",
    animate: false,
  },
};

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const meeting = row.original;

      return (
        <div className="flex flex-col gap-y-3 min-w-[280px] py-2">
          <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border">
            <div className="flex items-start gap-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shrink-0">
                <VideoIcon className="size-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                  {meeting.name}
                </h3>
                <div className="flex items-center gap-x-2">
                  <AgentAvatar
                    name={meeting.agent.name}
                    size="sm"
                    className="size-6 shrink-0 ring-2 ring-background"
                  />
                  <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
                    <SparklesIcon className="size-3" />
                    <span className="truncate">{meeting.agent.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status as keyof typeof statusConfig;
      const config = statusConfig[status];
      const Icon = config.icon;

      return (
        <Badge
          variant="outline"
          className={cn(
            "gap-x-2 font-medium px-3 py-1.5 shadow-sm",
            config.className
          )}
        >
          <Icon className={cn("size-3.5", config.animate && "animate-spin")} />
          {config.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "duration",
    cell: ({ row }) => {
      const meeting = row.original;

      return (
        <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border min-w-[120px]">
          <div className="flex items-center gap-x-2 mb-1">
            <TimerIcon className="size-4 text-purple-600" />
            <span className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Duración
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">
            {meeting.duration
              ? formatDuration(meeting.duration)
              : "No definida"}
          </p>
          {meeting.startedAt && (
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
              {formatDistanceToNow(meeting.startedAt, {
                addSuffix: true,
                locale: es,
              })}
            </p>
          )}
        </div>
      );
    },
  },
];
