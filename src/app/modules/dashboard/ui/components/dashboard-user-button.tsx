import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ChevronDownIcon,
  CreditCardIcon,
  Github,
  Instagram,
  Linkedin,
  LogOutIcon,
  MessageCircle,
  UserIcon,
  MailIcon,
  ShieldIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  const getProviderIcon = () => {
    if (data?.user?.image?.includes("googleusercontent.com")) {
      return <MailIcon className="h-4 w-4 text-red-500" />;
    }
    if (data?.user?.image?.includes("github")) {
      return <Github className="h-4 w-4" />;
    }
    return <ShieldIcon className="h-4 w-4 text-blue-500" />;
  };

  const getProviderName = () => {
    if (data?.user?.image?.includes("googleusercontent.com")) {
      return "Google";
    }
    if (data?.user?.image?.includes("github")) {
      return "GitHub";
    }
    return "Credenciales";
  };

  if (isPending || !data?.user) {
    return (
      <div className="rounded-lg border border-border/10 p-3 w-full flex items-center gap-3 bg-white/5 animate-pulse">
        <div className="h-8 w-8 bg-white/10 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-white/10 rounded mb-1"></div>
          <div className="h-3 bg-white/10 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20">
        <Avatar className="h-8 w-8">
          <AvatarImage src={data.user.image || ""} alt={data.user.name || ""} />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
            {data.user.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start text-left flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {data.user.name || "Usuario"}
          </p>
          <p className="text-xs text-gray-400 truncate">{data.user.email}</p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0 text-gray-400" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="right" className="w-80 p-0">
        <DropdownMenuLabel className="p-4 pb-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={data.user.image || ""}
                alt={data.user.name || ""}
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
                {data.user.name?.charAt(0)?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base truncate">
                {data.user.name}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {data.user.email}
              </p>
              <div className="flex items-center gap-2 mt-1">
                {getProviderIcon()}
                <span className="text-xs text-muted-foreground font-bold">
                  Conectado con {getProviderName()}
                </span>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <div className="p-2">
          <DropdownMenuItem className="cursor-pointer flex items-center gap-3 p-3 rounded-md">
            <UserIcon className="h-4 w-4" />
            <span>Mi Perfil</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer flex items-center gap-3 p-3 rounded-md">
            <CreditCardIcon className="h-4 w-4" />
            <span>Facturación</span>
          </DropdownMenuItem>
        </div>
        <div className="p-2">
          <DropdownMenuItem
            onClick={onLogout}
            className="cursor-pointer flex items-center gap-3 p-3 rounded-md text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOutIcon className="h-4 w-4" />
            <span>Cerrar Sesión</span>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />

        <div className="p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Sígueme en:
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/felipesanchez_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 group"
              title="Instagram"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://wa.me/57102452542"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/felipereyessa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/felipesanchez-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 group"
              title="GitHub"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        <div className="border-t p-3 bg-gray-50/50">
          <a
            href="https://felipesanchezdev.site"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center group"
          >
            <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              © {new Date().getFullYear()} Felipe Reyes Sanchez
            </p>
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};