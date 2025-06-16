"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MeetingGetMany } from "@/modules/meetings/types";
import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import humanizeDuration from "humanize-duration";
import {
  CircleCheckIcon,
  CircleXIcon,
  ClockArrowUpIcon,
  ClockIcon,
  CornerDownRightIcon,
  LoaderIcon,
  MoreHorizontalIcon,
  PlayIcon,
  EditIcon,
  TrashIcon,
  CalendarIcon,
  VideoIcon,
  UserIcon,
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
    className: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-300",
    animate: false,
  },
  activo: {
    icon: LoaderIcon,
    label: "Activo",
    className: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300",
    animate: true,
  },
  finalizado: {
    icon: CircleCheckIcon,
    label: "Finalizado",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300",
    animate: false,
  },
  encurso: {
    icon: PlayIcon,
    label: "En Curso",
    className: "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-500/20 dark:text-rose-300",
    animate: true,
  },
  cancelado: {
    icon: CircleXIcon,
    label: "Cancelado",
    className: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/20 dark:text-gray-300",
    animate: false,
  },
};

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Reunión",
    cell: ({ row }) => {
      const meeting = row.original;
      
      return (
        <div className="flex flex-col gap-y-2 min-w-[250px]">
          {/* Título de la reunión */}
          <div className="flex items-center gap-x-2">
            <VideoIcon className="size-4 text-primary shrink-0" />
            <span className="font-semibold text-foreground truncate">
              {meeting.name}
            </span>
          </div>
          
          {/* Información del agente */}
          <div className="flex items-center gap-x-2">
            <CornerDownRightIcon className="size-3 text-muted-foreground shrink-0" />
            <AgentAvatar 
              name={meeting.agent.name} 
              size="sm" 
              className="shrink-0"
            />
            <span className="text-sm text-muted-foreground truncate">
              {meeting.agent.name || "Sin agente asignado"}
            </span>
          </div>
          
          {/* Fecha programada */}
          {meeting.startedAt && (
            <div className="flex items-center gap-x-2 text-xs text-muted-foreground">
              <CalendarIcon className="size-3 shrink-0" />
              <span>
                {format(meeting.startedAt, "PPP 'a las' p", { locale: es })}
              </span>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status as keyof typeof statusConfig;
      const config = statusConfig[status];
      const Icon = config.icon;
      
      return (
        <Badge
          variant="outline"
          className={cn(
            "gap-x-2 font-medium",
            config.className
          )}
        >
          <Icon 
            className={cn(
              "size-3",
              config.animate && "animate-spin"
            )}
          />
          {config.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "duration",
    header: "Duración",
    cell: ({ row }) => {
      const meeting = row.original;
      
      return (
        <div className="flex flex-col gap-y-1">
          <Badge
            variant="outline"
            className="gap-x-2 text-xs w-fit"
          >
            <ClockIcon className="size-3 text-blue-600" />
            {meeting.duration ? formatDuration(meeting.duration) : "Sin definir"}
          </Badge>
          
          {/* Tiempo relativo si está en curso o finalizada */}
          {meeting.startedAt && (
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(meeting.startedAt, { 
                addSuffix: true,
                locale: es 
              })}
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "agent",
    header: "Agente",
    cell: ({ row }) => {
      const agent = row.original.agent;
      
      return (
        <div className="flex items-center gap-x-3 min-w-[150px]">
          <AgentAvatar 
            name={agent.name} 
            size="md"
            className="shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-medium text-sm truncate">
              {agent.name}
            </span>
            <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
              <UserIcon className="size-3" />
              <span>Especialista IA</span>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "started_at",
    header: "started_at",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-y-1 text-sm">
          <span className="font-medium">
            {format(row.original.startedAt, "dd/MM/yyyy")}
          </span>
          <span className="text-xs text-muted-foreground">
            {format(row.original.startedAt, "HH:mm")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "ended_at",
    header: "ended_at",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-y-1 text-sm">
          <span className="font-medium">
            {format(row.original.endedAt, "dd/MM/yyyy")}
          </span>
          <span className="text-xs text-muted-foreground">
            {format(row.original.endedAt, "HH:mm")}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const meeting = row.original;
      const isActive = meeting.status === "activo" || meeting.status === "encurso";
      const canStart = meeting.status === "pendiente";
      const canEdit = meeting.status !== "finalizado" && meeting.status !== "cancelado";
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0 hover:bg-muted"
            >
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {/* Iniciar reunión */}
            {canStart && (
              <DropdownMenuItem className="gap-x-2">
                <PlayIcon className="size-4 text-green-600" />
                Iniciar reunión
              </DropdownMenuItem>
            )}
            
            {/* Unirse si está activa */}
            {isActive && (
              <DropdownMenuItem className="gap-x-2">
                <VideoIcon className="size-4 text-blue-600" />
                Unirse a reunión
              </DropdownMenuItem>
            )}
            
            {/* Editar */}
            {canEdit && (
              <DropdownMenuItem className="gap-x-2">
                <EditIcon className="size-4 text-blue-600" />
                Editar reunión
              </DropdownMenuItem>
            )}
            
            <DropdownMenuSeparator />
            
            {/* Eliminar */}
            <DropdownMenuItem className="gap-x-2 text-red-600 focus:text-red-600">
              <TrashIcon className="size-4" />
              Eliminar reunión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];