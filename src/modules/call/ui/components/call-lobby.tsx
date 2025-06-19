import { Sparkles, VideoIcon } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

interface Props {
  onJoin: () => void;
}

const DisabledVideoPreview = () => {
  const { data } = authClient.useSession();

  return (
    <DefaultVideoPlaceholder
      participant={
        {
          name: data?.user.name ?? "Usuario",
          image:
            data?.user.image ??
            generateAvatarUri({
              seed: data?.user.name ?? "Usuario",
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
    <div className="relative">
      <DefaultVideoPlaceholder
        participant={
          {
            name: data?.user.name ?? "Usuario",
            image:
              data?.user.image ??
              generateAvatarUri({
                seed: data?.user.name ?? "Usuario",
                variant: "initials",
              }),
          } as StreamVideoParticipant
        }
      />
    </div>
  );
};

export const CallLobby = ({ onJoin }: Props) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const { data } = authClient.useSession();

  const { status: micStatus } = useMicrophoneState();
  const { status: cameraStatus } = useCameraState();
  // const { hasBrowserPermissions: hasMicPermissions } = useMicrophoneState();
  // const { hasBrowserPermissions: hasCameraPermissions } = useCameraState();

  const hasBrowserMediaPermission =
    micStatus === "enabled" && cameraStatus === "enabled";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sidebar-accent to-sidebar w-full p-4">
      <div className="py-4 px-8 flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
          <div className="flex flex-col gap-y-2 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Sparkles className="size-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    ¡Hola, {data?.user.name ?? "Usuario"}!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Configura tu audio y video antes de unirte
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-gray-800">
              <VideoPreview
                DisabledVideoPreview={
                  hasBrowserMediaPermission
                    ? DisabledVideoPreview
                    : AllowBrowserPermissions
                }
              />

              <div className="absolute top-2 right-2">
                <Badge
                  variant={hasBrowserMediaPermission ? "default" : "secondary"}
                  className={`text-xs ${
                    hasBrowserMediaPermission
                      ? "bg-green-100 text-green-700 border-green-200"
                      : "bg-yellow-100 text-yellow-700 border-yellow-200"
                  }`}
                >
                  <div
                    className={`size-1.5 rounded-full mr-1 ${
                      hasBrowserMediaPermission
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  {hasBrowserMediaPermission ? "Listo" : "Configurando"}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <ToggleAudioPreviewButton />
            <ToggleVideoPreviewButton />
          </div>

          <div className="flex flex-col justify-between w-full gap-2">
            <Button
              onClick={onJoin}
              disabled={!hasBrowserMediaPermission}
              className="gap-2 cursor-pointer"
            >
              <VideoIcon className="size-4" />
              Unirse a la llamada
            </Button>
            <Button asChild variant="ghost">
              <Link href="/meetings" className="flex items-center gap-2">
                Cancelar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
