"use client";

import { authClient } from "@/lib/auth-client";

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div>
        <p className="text-lg">Cargando sesión...</p>
      </div>
    );
  }

  return <div></div>;
};
