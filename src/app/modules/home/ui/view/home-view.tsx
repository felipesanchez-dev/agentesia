"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Cargando sesión...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Ya estás registrado</h1>
      <p className="mt-2">Bienvenido, {session.user.name} !</p>
      <Button
        onClick={() =>
          authClient.signOut({ fetchOptions: { 
            onSuccess: () => router.push("/sign-in"), 
        }})
        }
        className="mt-4"
      >
        Cerrar sesión
      </Button>
    </div>
  );
};
