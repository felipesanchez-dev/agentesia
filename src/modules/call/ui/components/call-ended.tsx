import { Sparkles, Calendar, Home, Users } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallEnded = () => {
  const { data } = authClient.useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sidebar-accent to-sidebar w-full p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 rounded-2xl p-6 mb-6 border border-emerald-100/50 dark:border-emerald-900/30">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full shadow-lg">
                      <Sparkles className="size-6 text-white animate-pulse" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-center">
                    <h1 className="font-bold text-foreground text-xl mb-2">
                      ¡Reunión finalizada!
                    </h1>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span className="font-medium text-foreground">
                        {data?.user.name ?? "Usuario"}
                      </span>
                      ,
                      <br />
                      tu reunión ha terminado exitosamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Button
                asChild
                className="w-full h-12 font-medium text-base shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Link
                  href="/meetings"
                  className="flex items-center justify-center gap-3"
                >
                  <Calendar className="size-5" />
                  Ver mis reuniones
                </Link>
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 font-medium border-2 hover:bg-muted/50 transition-all duration-200"
                >
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    <Home className="size-4" />
                    Inicio
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 font-medium border-2 hover:bg-muted/50 transition-all duration-200"
                >
                  <Link
                    href="/meetings"
                    className="flex items-center justify-center gap-2"
                  >
                    <Users className="size-4" />
                    Nueva
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground leading-relaxed">
                ¿Necesitas ayuda?{" "}
                <Link
                  href="/"
                  className="text-primary hover:text-primary/80 underline underline-offset-2 font-medium transition-colors duration-200"
                >
                  Contáctanos aquí
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
