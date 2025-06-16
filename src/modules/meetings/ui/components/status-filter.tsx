import {
  CircleXIcon,
  CircleCheckIcon,
  ClockArrowUpIcon,
  VideoIcon,
  LoaderIcon,
} from "lucide-react";
import { CommandSelect } from "@/components/command-select";
import { MeetingStatus } from "../../types";
import { useMeetingsFilters } from "../../hooks/use-agents-filters";
import { cn } from "@/lib/utils";

const statusConfig = {
  [MeetingStatus.Upcoming]: {
    icon: ClockArrowUpIcon,
    label: "Pendiente",
    className: "text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20",
  },
  [MeetingStatus.Active]: {
    icon: VideoIcon,
    label: "Activo",
    className: "text-blue-600 bg-blue-50 dark:bg-blue-950/20",
  },
  [MeetingStatus.Processing]: {
    icon: LoaderIcon,
    label: "En Curso",
    className: "text-rose-600 bg-rose-50 dark:bg-rose-950/20",
    animate: true,
  },
  [MeetingStatus.Completed]: {
    icon: CircleCheckIcon,
    label: "Finalizado",
    className: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20",
  },
  [MeetingStatus.Cancelled]: {
    icon: CircleXIcon,
    label: "Cancelado",
    className: "text-gray-600 bg-gray-50 dark:bg-gray-950/20",
  },
};

const options = [
  {
    id: MeetingStatus.Upcoming,
    value: MeetingStatus.Upcoming,
    children: (
      <div className="flex items-center gap-x-3 p-2">
        <div className={cn(
          "p-1.5 rounded-md",
          statusConfig[MeetingStatus.Upcoming].className
        )}>
          <ClockArrowUpIcon className="size-4" />
        </div>
        <span className="font-medium">
          {statusConfig[MeetingStatus.Upcoming].label}
        </span>
      </div>
    ),
  },
  {
    id: MeetingStatus.Active,
    value: MeetingStatus.Active,
    children: (
      <div className="flex items-center gap-x-3 p-2">
        <div className={cn(
          "p-1.5 rounded-md",
          statusConfig[MeetingStatus.Active].className
        )}>
          <VideoIcon className="size-4" />
        </div>
        <span className="font-medium">
          {statusConfig[MeetingStatus.Active].label}
        </span>
      </div>
    ),
  },
  {
    id: MeetingStatus.Processing,
    value: MeetingStatus.Processing,
    children: (
      <div className="flex items-center gap-x-3 p-2">
        <div className={cn(
          "p-1.5 rounded-md",
          statusConfig[MeetingStatus.Processing].className
        )}>
          <LoaderIcon className="size-4 animate-spin" />
        </div>
        <span className="font-medium">
          {statusConfig[MeetingStatus.Processing].label}
        </span>
      </div>
    ),
  },
  {
    id: MeetingStatus.Completed,
    value: MeetingStatus.Completed,
    children: (
      <div className="flex items-center gap-x-3 p-2">
        <div className={cn(
          "p-1.5 rounded-md",
          statusConfig[MeetingStatus.Completed].className
        )}>
          <CircleCheckIcon className="size-4" />
        </div>
        <span className="font-medium">
          {statusConfig[MeetingStatus.Completed].label}
        </span>
      </div>
    ),
  },
  {
    id: MeetingStatus.Cancelled,
    value: MeetingStatus.Cancelled,
    children: (
      <div className="flex items-center gap-x-3 p-2">
        <div className={cn(
          "p-1.5 rounded-md",
          statusConfig[MeetingStatus.Cancelled].className
        )}>
          <CircleXIcon className="size-4" />
        </div>
        <span className="font-medium">
          {statusConfig[MeetingStatus.Cancelled].label}
        </span>
      </div>
    ),
  },
];

export const StatusFilter = () => {
  const [filters, setFilters] = useMeetingsFilters();

  return (
    <CommandSelect
      placeholder="Filtrar por estado"
      className="h-10 min-w-[160px]"
      options={options}
      onSelect={(value) => setFilters({ status: value as MeetingStatus })}
      value={filters.status ?? ""}
    />
  );
};