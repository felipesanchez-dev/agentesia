import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AlertTriangle, Trash2, CheckCircle, X } from "lucide-react";

export const useConfirm = (
  title: string,
  description: string,
  variant: "default" | "destructive" | "warning" = "default"
): [() => JSX.Element, () => Promise<boolean>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise<boolean>((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "destructive":
        return {
          iconColor: "text-red-500",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          icon: Trash2,
          confirmButton: "destructive" as const,
          confirmText: "Eliminar",
        };
      case "warning":
        return {
          iconColor: "text-yellow-500",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          icon: AlertTriangle,
          confirmButton: "default" as const,
          confirmText: "Continuar",
        };
      default:
        return {
          iconColor: "text-blue-500",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          icon: CheckCircle,
          confirmButton: "default" as const,
          confirmText: "Confirmar",
        };
    }
  };

  const ConfirmationDialog = () => {
    const styles = getVariantStyles();
    const IconComponent = styles.icon;

    return (
      <ResponsiveDialog
        open={promise !== null}
        onOpenChange={handleClose}
        title=""
        description=""
      >
        <div className="flex flex-col items-center text-center space-y-6 p-6">
          <div
            className={`
            relative w-20 h-20 rounded-full ${styles.bgColor} ${styles.borderColor} border-2
            flex items-center justify-center shadow-lg
            animate-in zoom-in-50 duration-300
          `}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
            <IconComponent
              className={`w-10 h-10 ${styles.iconColor} relative z-10`}
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground leading-tight">
              {title}
            </h2>

            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col-reverse gap-3 w-full max-w-xs sm:flex-row sm:gap-4">
            <Button
              onClick={handleCancel}
              variant="outline"
              className="
                flex-1 transition-all duration-200 
                hover:bg-muted/50 border-2 
                focus:ring-2 focus:ring-muted focus:ring-offset-2
                group
              "
            >
              <X className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Cancelar
            </Button>

            <Button
              onClick={handleConfirm}
              variant={styles.confirmButton}
              className={`
                flex-1 transition-all duration-200 
                focus:ring-2 focus:ring-offset-2
                shadow-lg hover:shadow-xl
                group
                ${
                  variant === "destructive"
                    ? "focus:ring-red-500"
                    : "focus:ring-primary"
                }
              `}
            >
              <IconComponent className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              {styles.confirmText}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/70 mt-2">
            Esta acción requiere confirmación
          </p>
        </div>
      </ResponsiveDialog>
    );
  };

  return [ConfirmationDialog, confirm];
};
