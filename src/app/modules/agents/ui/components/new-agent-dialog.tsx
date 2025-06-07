import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewAgentDialog = ({ open, onOpenChange }: NewAgentDialogProps) => {
  return (
    <ResponsiveDialog
      title="Crear Agente"
      description="Crea un nuevo agente a tu medida."
      open={open}
      onOpenChange={onOpenChange}
    >
      Formulario de creación.
    </ResponsiveDialog>
  );
};
