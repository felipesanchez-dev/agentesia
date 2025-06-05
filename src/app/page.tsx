"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: sesion } = authClient.useSession();

  if (sesion) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Ya estás registrado</h1>
        <p className="mt-2">Bienvenido, {sesion.user.name}!</p>
        <Button onClick={() => authClient.signOut()} className="mt-4">
          Cerrar sesión
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <h1>Hola</h1>
    </div>
  );
}
