"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewMeetingDialog } from "./new-meeting-dialog";
import { useState } from "react";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Mis Reuniones 📅</h1>
          <Button
            className="cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            <PlusIcon />
            Crear Reunión
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">Todos los filtros</div>
      </div>
    </>
  );
};
