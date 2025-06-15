"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AgentAvatar } from "./agent-avatar";
import { Badge } from "@/components/ui/badge";
import { MeetingGetMany } from "@/modules/meetings/types";
import { format } from "date-fns";
import humanizeDuration from "humanize-duration";
import {
  CircleCheckIcon,
  CircleXIcon,
  ClockArrowUpIcon,
  ClockFadingIcon,
  CornerDownRightIcon,
  LoaderIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

function formatDuration(seconds: number) {
  return humanizeDuration(seconds * 1000, {
    largest: 1,
    round: true,
    units: ["h", "m", "s"],
  });
}

const statusIconMap = {
  pendiente: ClockArrowUpIcon,
  activo: LoaderIcon,
  finalizado: CircleCheckIcon,
  encurso: ClockFadingIcon,
  cancelado: CircleXIcon,
};

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <AgentAvatar name={row.original.name} className="size-6" />
            <span className="font-semibold capitalize">
              {row.original.name}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <CornerDownRightIcon className="size-3 text-muted-foreground" />
            <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">
              {row.original.instructions || "No description available"}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="flex items-center gap-x-2 [&>svg]:size-4"
      >
        <VideoIcon className="text-blue-700" />
        {row.original.meetingCount}{" "}
        {row.original.meetingCount === 1 ? "Reunión" : "Reuniones"}
      </Badge>
    ),
  },
];
