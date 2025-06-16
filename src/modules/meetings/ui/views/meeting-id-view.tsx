"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { MeetingIdViewHeader } from "../components/meeting-id-view-header";
import { useRouter } from "next/navigation";
import { useConfirm } from "@/hooks/use-confirm";
import { UpdateMeetingDialog } from "../components/update-meeting-dialog";
import { useState } from "react";

interface Props {
  meetingId: string;
}

export const MeetingIdView = ({ meetingId }: Props) => {
  const trpc = useTRPC();
  const route = useRouter();
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  const [RemoveConfirmation, confirmRemove] = useConfirm(
    "Eliminar reunión",
    "¿Estás seguro de que deseas eliminar esta reunión?",
  );

  const [updateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false);

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        route.push("/meetings");
      },
    })
  );

  const handleRemoveMeeting = async () => {
    const ok = await confirmRemove();
    if (!ok) return;
    await removeMeeting.mutateAsync({id: meetingId});
  }

  return (
    <>
    <RemoveConfirmation />
    <UpdateMeetingDialog
      open={updateMeetingDialogOpen}
      onOpenChange={setUpdateMeetingDialogOpen}
      initialValues={data}
    />
      <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <MeetingIdViewHeader
          meetingId={meetingId}
          meetingName={data?.name}
          onEdit={() => setUpdateMeetingDialogOpen(true)}
          onRemove={handleRemoveMeeting}
        />
        {JSON.stringify(data, null, 2)}
      </div>
    </>
  );
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
