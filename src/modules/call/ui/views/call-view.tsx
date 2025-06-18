"use client";
import { ErrorState } from "@/components/error-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CallProvider } from "../components/call-provider";

interface Props {
  meetingId: string;
}
export const CallView = ({ meetingId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  if (data.status === "finalizado") {
    return (
      <div className="flex h-screen items-center justify-center">
        <ErrorState
          title="La reunión ha finalizado"
          description="No puedes unirte a una reunión que ha finalizado."
        />
      </div>
    );
  }

  return <CallProvider meetingId={meetingId} meetingName={data.name} />;
};
