"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OctagonAlertIcon, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";

const formSchema = z
  .object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Ingresa un email válido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export const SignUpView = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setIsLoading(true);

    try {
      await authClient.signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: () => {
            router.push("/");
          },
          onError: ({ error }) => {
            setError(error.message || "Error al crear la cuenta");
            setIsLoading(false);
          },
        }
      );
    } catch (err) {
      console.error("Error al crear cuenta:", err);
      setError("Error inesperado al crear la cuenta");
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: "google" | "github") => {
    setError(null);
    setLoadingProvider(provider);

    try {
      await authClient.signIn.social(
        {
          provider,
          callbackURL: `${window.location.origin}/`,
        },
        {
          onSuccess: () => {
            router.push("/");
          },
          onError: ({ error }) => {
            const errorMessages: Record<string, string> = {
              access_denied: "Acceso denegado por el usuario",
              invalid_request: "Solicitud inválida",
              unauthorized: "No autorizado",
              server_error: "Error del servidor",
              temporarily_unavailable: "Servicio temporalmente no disponible",
              invalid_client: "Cliente no válido",
              unsupported_response_type: "Tipo de respuesta no soportado",
            };

            const friendlyMessage =
              errorMessages[error.code] ||
              `Error al registrarse con ${
                provider === "google" ? "Google" : "GitHub"
              }`;

            setError(friendlyMessage);
            setLoadingProvider(null);
          },
        }
      );
    } catch (err) {
      console.error(`Error with ${provider} sign in:`, err);
      setError(
        `Error inesperado al registrarse con ${
          provider === "google" ? "Google" : "GitHub"
        }`
      );
      setLoadingProvider(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Crear Cuenta
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Únete a nuestra plataforma
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Nombre completo
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Juan Pérez"
                          className="h-12 px-4 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Correo electrónico
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          className="h-12 px-4 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Contraseña
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-12 px-4 pr-12 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Confirmar contraseña
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-12 px-4 pr-12 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                {error && (
                  <Alert className="bg-red-50 border-red-200">
                    <OctagonAlertIcon className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-700 text-sm">
                      {error}
                    </AlertTitle>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg disabled:opacity-50"
                  disabled={isLoading || loadingProvider !== null}
                >
                  {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                </Button>

                <div className="text-center pt-4">
                  <span className="text-gray-600 text-sm">
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                      href="/sign-in"
                      className="text-green-600 hover:text-green-700 font-medium hover:underline"
                    >
                      Inicia sesión aquí
                    </Link>
                  </span>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-4 text-gray-500">
                        O continúa con
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      className="h-12 border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
                      disabled={isLoading || loadingProvider !== null}
                      onClick={() => handleSocialSignIn("google")}
                    >
                      {loadingProvider === "google" ? (
                        <div className="w-5 h-5 mr-2 border-2 border-gray-300 border-t-green-600 rounded-full animate-spin" />
                      ) : (
                        <FcGoogle className="w-5 h-5 mr-2" />
                      )}
                      Google
                    </Button>

                    <Button
                      variant="outline"
                      type="button"
                      className="h-12 border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
                      disabled={isLoading || loadingProvider !== null}
                      onClick={() => handleSocialSignIn("github")}
                    >
                      {loadingProvider === "github" ? (
                        <div className="w-5 h-5 mr-2 border-2 border-gray-300 border-t-green-600 rounded-full animate-spin" />
                      ) : (
                        <VscGithubInverted className="w-5 h-5 mr-2 text-gray-800" />
                      )}
                      GitHub
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>

          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-900 relative hidden md:flex flex-col gap-y-6 items-center justify-center p-8">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <div className="relative z-10 flex flex-col items-center gap-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 shadow-2xl">
                  <svg
                    className="h-[92px] w-[92px] text-white drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-white text-2xl font-bold tracking-wide mb-2">
                  COGNIMEET
                </h2>
                <p className="text-white/80 text-sm font-medium">
                  Conecta • Colabora • Crece
                </p>
              </div>

              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>

            <div className="absolute top-1/2 left-8 w-2 h-2 bg-white/30 rounded-full animate-ping delay-500"></div>
            <div className="absolute top-1/3 right-12 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1500"></div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-gray-500 text-sm">
        Desarrollado por{" "}
        <a
          href="https://felipesanchezdev.site"
          className="text-green-600 hover:text-green-700 font-medium hover:underline"
        >
          Felipe Reyes Sanchez
        </a>
      </div>
    </div>
  );
};
