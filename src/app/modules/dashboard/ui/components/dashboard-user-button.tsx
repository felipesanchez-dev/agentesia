import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { useState, useEffect } from "react";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          setIsSheetOpen(false);
        },
      },
    });
  };

  const handleProfileClick = () => {
    console.log("Navegando a perfil...");
    setIsSheetOpen(false);
  };

  const handleBillingClick = () => {
    console.log("Navegando a facturación...");
    setIsSheetOpen(false);
  };

  const getProviderIcon = () => {
    if (data?.user?.image?.includes("googleusercontent.com")) {
      return <MailIcon className="h-4 w-4 text-red-500 flex-shrink-0" />;
    }
    if (data?.user?.image?.includes("github")) {
      return <Github className="h-4 w-4 flex-shrink-0" />;
    }
    return <ShieldIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />;
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
      <div className="rounded-lg border border-border/10 p-2 sm:p-3 w-full flex items-center gap-2 sm:gap-3 bg-white/5 animate-pulse">
        <div className="h-6 w-6 sm:h-8 sm:w-8 bg-white/10 rounded-full flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <div className="h-3 sm:h-4 bg-white/10 rounded mb-1"></div>
          <div className="h-2 sm:h-3 bg-white/10 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  const UserContent = () => (
    <>
      <div className="p-4 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 flex-shrink-0">
            <AvatarImage
              src={data.user.image || ""}
              alt={data.user.name || ""}
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
              {data.user.name?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base truncate">{data.user.name}</p>
            <p className="text-sm text-muted-foreground truncate">
              {data.user.email}
            </p>
            <div className="flex items-center gap-2 mt-1">
              {getProviderIcon()}
              <span className="text-xs text-muted-foreground font-bold truncate">
                Conectado con {getProviderName()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t" />

      <div className="p-2">
        <Button
          variant="ghost"
          className="w-full justify-start h-12 px-4 text-sm font-medium hover:bg-gray-100 transition-colors"
          onClick={handleProfileClick}
        >
          <UserIcon className="h-4 w-4 mr-3 flex-shrink-0" />
          Mi Perfil
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start h-12 px-4 text-sm font-medium hover:bg-gray-100 transition-colors"
          onClick={handleBillingClick}
        >
          <CreditCardIcon className="h-4 w-4 mr-3 flex-shrink-0" />
          Facturación
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start h-12 px-4 text-red-600 hover:text-red-700 hover:bg-red-50 text-sm font-medium transition-colors"
          onClick={onLogout}
        >
          <LogOutIcon className="h-4 w-4 mr-3 flex-shrink-0" />
          Cerrar Sesión
        </Button>
      </div>

      <div className="border-t" />

      <div className="p-4">
        <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider text-center">
          Sígueme en:
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://www.instagram.com/felipesanchez_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 group touch-manipulation"
            title="Instagram"
            onClick={() => console.log("Instagram clicked")}
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://wa.me/57102452542"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full hover:bg-green-50 hover:text-green-600 transition-all duration-200 group touch-manipulation"
            title="WhatsApp"
            onClick={() => console.log("WhatsApp clicked")}
          >
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipereyessa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group touch-manipulation"
            title="LinkedIn"
            onClick={() => console.log("LinkedIn clicked")}
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/felipesanchez-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 group touch-manipulation"
            title="GitHub"
            onClick={() => console.log("GitHub clicked")}
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      <div className="border-t p-3 bg-gray-50/50">
        <a
          href="https://felipesanchezdev.site"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center group touch-manipulation"
        >
          <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            © {new Date().getFullYear()} Felipe Reyes Sanchez
          </p>
        </a>
      </div>
    </>
  );

  const UserTrigger = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="rounded-lg border border-border/10 p-2 sm:p-3 w-full flex items-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 touch-manipulation"
    >
      <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
        <AvatarImage src={data.user.image || ""} alt={data.user.name || ""} />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold">
          {data.user.name?.charAt(0)?.toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start text-left flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-medium text-white truncate w-full">
          {data.user.name || "Usuario"}
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400 truncate w-full">
          {data.user.email}
        </p>
      </div>
      <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-gray-400" />
    </button>
  );

  if (isMobile) {
    return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <UserTrigger />
        </SheetTrigger>
        <SheetContent 
          side="bottom" 
          className="h-[85vh] rounded-t-2xl border-0 p-0"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Menú de usuario</SheetTitle>
            <SheetDescription>
              Opciones de cuenta y configuración
            </SheetDescription>
          </SheetHeader>
          
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />
          
          <div className="overflow-y-auto h-full pb-6">
            <UserContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserTrigger />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="right"
        className="w-80 p-0 max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <UserContent />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};