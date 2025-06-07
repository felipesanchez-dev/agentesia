"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useState } from "react";

export const AgentsListHeader = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Mis Agentes 🤖</h1>
          <Button className="cursor-pointer" onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            Crear Agente
          </Button>
        </div>
      </div>
    </>
  );
};
