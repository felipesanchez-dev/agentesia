"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, XIcon, CalendarIcon, FilterIcon } from "lucide-react";
import { NewMeetingDialog } from "./new-meeting-dialog";
import { useState } from "react";
import { MeetingsSearchFilter } from "./meeting-search-filter";
import { StatusFilter } from "./status-filter";
import { AgentIdFilter } from "./agent-id-filter";
import { useMeetingsFilters } from "../../hooks/use-agents-filters";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filters, setFilters] = useMeetingsFilters();

  const isAnyFilterModified =
    !!filters.status || !!filters.search || !!filters.agentId;

  const activeFiltersCount = [
    filters.status,
    filters.search,
    filters.agentId,
  ].filter(Boolean).length;

  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: "",
      search: "",
      page: 1,
    });
  };

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="bg-background border-b">
        <div className="py-6 px-4 md:px-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <CalendarIcon className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Mis Reuniones
                </h1>
                <p className="text-sm text-muted-foreground">
                  Gestiona y organiza todas tus reuniones con agentes IA
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="gap-x-2 font-semibold shadow-sm"
              onClick={() => setIsDialogOpen(true)}
            >
              <PlusIcon className="size-4" />
              Crear Reunión
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-x-2">
              <FilterIcon className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Filtros:
              </span>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="gap-x-1 text-xs">
                  <div className="size-2 bg-primary rounded-full" />
                  {activeFiltersCount} activo{activeFiltersCount > 1 ? "s" : ""}
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 flex-1">
              <MeetingsSearchFilter />
              <StatusFilter />
              <AgentIdFilter />

              {isAnyFilterModified && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClearFilters}
                  className="gap-x-2 text-muted-foreground hover:text-foreground"
                >
                  <XIcon className="size-4" />
                  Limpiar Filtros
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
