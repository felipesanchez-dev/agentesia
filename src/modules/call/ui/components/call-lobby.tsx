import { VideoIcon } from "lucide-react";
import {
  DefaultVideoPlaceholder,
  StreamVideoParticipant,
  ToggleAudioPreviewButton,
  ToggleVideoPreviewButton,
  useCallStateHooks,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { generateAvatarUri } from "@/lib/avatar";

interface Props {
  onJoin: () => void;
}

const DisabledVideoPreview = () => {
  const { data } = authClient.useSession();

  return (
    <DefaultVideoPlaceholder
      participant={
        {
          name: data?.user.name ?? "",
          image:
            data?.user.image ??
            generateAvatarUri({
              seed: data?.user.name ?? "",
              variant: "initials",
            }),
        } as StreamVideoParticipant
      }
    />
  );
};

const AllowBrowserPermissions = () => {
  const { data } = authClient.useSession();

  return (
    <>
      <DefaultVideoPlaceholder
        participant={
          {
            name: data?.user.name ?? "",
            image:
              data?.user.image ??
              generateAvatarUri({
                seed: data?.user.name ?? "",
                variant: "initials",
              }),
          } as StreamVideoParticipant
        }
      />
    </>
  );
};

export const CallLobby = ({ onJoin }: Props) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();

  const { status: micStatus } = useMicrophoneState();
  const { status: cameraStatus } = useCameraState();
  // const { hasBrowserPermissions: hasMicPermissions } = useMicrophoneState();
  // const { hasBrowserPermissions: hasCameraPermissions } = useCameraState();

  const hasBrowserMediaPermission =
    micStatus === "enabled" && cameraStatus === "enabled";

  return (
    <div className="flex flex-col items-center justify-center h-full bg-radial from-sidebar-accent to-sidebar">
      <div className="py-4 px-8 flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
          <div className="flex flex-col gap-y-2 text-center">
            <h6 className="text-lg font-medium">Unirse a la llamada</h6>
            <p className="text-sm">Configura tu llamada antes de unirte</p>
          </div>

          <VideoPreview
            DisabledVideoPreview={
              hasBrowserMediaPermission
                ? DisabledVideoPreview
                : AllowBrowserPermissions
            }
          />

          <div className="flex gap-4">
            <ToggleAudioPreviewButton />
            <ToggleVideoPreviewButton />
          </div>

          <div className="flex flex-col justify-between w-full gap-2">
            <Button asChild variant="ghost">
              <Link href="/meetings" className="flex items-center gap-2">
                Cancelar
              </Link>
            </Button>
            <Button onClick={onJoin} className="gap-2">
              <VideoIcon className="size-4" />
              Unirse a la llamada
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
