import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

interface Props {
    meetingId: string;
};

export const MeetingIdView = ({ meetingId }: Props) => {
    return (
        <>
        <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
            <h1>Meeting ID: {meetingId}</h1>
        </div>
        </>
    )
};

export const MeetingIdViewLoading = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      <LoadingState
        title="Cargando reunión"
        description="Estamos cargando la información de tu reunión. Por favor, espera un momento."
      />
    </div>
  );
};

export const MeetingIdViewError = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      <ErrorState
        title="No se pudo cargar la reunión"
        description="Ocurrió un error al intentar cargar la información de la reunión. Verifica tu conexión a internet o contacta al soporte si el problema persiste."
      />
    </div>
  );
};
