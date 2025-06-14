import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewMeetingDialog = ({
  open,
  onOpenChange,
}: NewMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="Crear Reunión"
      description="Crea una nueva reunión a tu medida."
      open={open}
      onOpenChange={onOpenChange}
    >
      TODO: Implementar el formulario de reunión aquí.
    </ResponsiveDialog>
  );
};
