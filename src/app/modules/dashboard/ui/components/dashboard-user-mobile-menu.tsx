import React, { useState, useRef, useEffect } from "react";
import {
  CreditCardIcon,
  LogOutIcon,
  UserIcon,
  ChevronDownIcon,
  X,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface DashboardUserMobileMenuProps {
  user: User;
  onLogout: () => void;
  getProviderIcon: () => React.JSX.Element;
  getProviderName: () => string;
}

export const DashboardUserMobileMenu = ({
  user,
  onLogout,
  getProviderIcon,
  getProviderName,
}: DashboardUserMobileMenuProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);

  const openModal = () => {
    setShowMobileMenu(true);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 50);
  };

  const handleLogout = () => {
    closeModal();
    setTimeout(() => onLogout(), 400);
  };

  const handleMenuItemClick = () => {
    closeModal();
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowMobileMenu(false);
      setIsClosing(false);
      setIsAnimating(false);
      setDragOffset(0);
    }, 400);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
    currentY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    currentY.current = e.touches[0].clientY;
    const diff = currentY.current - startY.current;

    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = currentY.current - startY.current;

    if (diff > 100) {
      closeModal();
    } else {
      setDragOffset(0);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startY.current = e.clientY;
    currentY.current = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    currentY.current = e.clientY;
    const diff = currentY.current - startY.current;

    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = currentY.current - startY.current;

    if (diff > 100) {
      closeModal();
    } else {
      setDragOffset(0);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      currentY.current = e.clientY;
      const diff = currentY.current - startY.current;
      if (diff > 0) {
        setDragOffset(diff);
      }
    };

    const handleGlobalMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const diff = currentY.current - startY.current;
      if (diff > 100) {
        closeModal();
      } else {
        setDragOffset(0);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <div
        onClick={openModal}
        className="rounded-lg border border-border/10 p-3 w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer md:hidden"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.image || ""} alt={user.name || ""} />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start text-left flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {user.name || "Usuario"}
          </p>
          <p className="text-xs text-gray-400 truncate">{user.email}</p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0 text-gray-400" />
      </div>

      {showMobileMenu && (
        <>
          <div
            className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
              isClosing || isAnimating ? "bg-black/0" : "bg-black/60"
            }`}
            onClick={closeModal}
          />

          <div className="fixed inset-x-0 bottom-0 z-50">
            <div
              ref={modalRef}
              className={`bg-white shadow-2xl max-h-[85vh] overflow-y-auto border-t border-gray-100 ${
                isClosing
                  ? "animate-slide-down-out"
                  : isAnimating
                  ? "animate-slide-up-initial"
                  : "animate-slide-up-in"
              }`}
              style={{
                transform: `translateY(${dragOffset}px)`,
                transition: isDragging ? "none" : undefined,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <div className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
                <div
                  className={`w-12 h-1.5 rounded-full transition-all duration-300 ease-out ${
                    isDragging ? "bg-gray-400 w-16" : "bg-gray-300"
                  }`}
                />
              </div>

              <div className="flex justify-between items-center px-6 py-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Mi Cuenta
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 mx-4 rounded-xl mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 ring-2 ring-white shadow-lg">
                    <AvatarImage src={user.image || ""} alt={user.name || ""} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-semibold">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-lg text-gray-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {user.email}
                    </p>
                    <div className="flex items-center gap-2 mt-2 bg-white/70 rounded-full px-3 py-1 w-fit">
                      {getProviderIcon()}
                      <span className="text-xs text-gray-700 font-medium">
                        Conectado con {getProviderName()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="bg-gray-50 rounded-xl p-2">
                  <button
                    onClick={handleMenuItemClick}
                    className="w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-sm text-left group"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                      <UserIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-medium text-gray-900">
                        Mi Perfil
                      </span>
                      <p className="text-sm text-gray-500">
                        Gestiona tu información personal
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={handleMenuItemClick}
                    className="w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-sm text-left group"
                  >
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-200">
                      <CreditCardIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-medium text-gray-900">
                        Facturación
                      </span>
                      <p className="text-sm text-gray-500">
                        Ver planes y pagos
                      </p>
                    </div>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-red-50 text-left group border border-red-100"
                  >
                    <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors duration-200">
                      <LogOutIcon className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-medium text-red-600">
                        Cerrar Sesión
                      </span>
                      <p className="text-sm text-red-400">Salir de tu cuenta</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 p-4 bg-gray-50/80">
                <a
                  href="https://felipesanchezdev.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center group"
                >
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors font-medium">
                    © {new Date().getFullYear()} Felipe Reyes Sanchez
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Desliza hacia abajo para cerrar
                  </p>
                </a>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes slide-up-initial {
              0% {
                transform: translateY(100%);
                opacity: 0;
                border-radius: 8px 8px 0 0;
              }
              100% {
                transform: translateY(100%);
                opacity: 0;
                border-radius: 8px 8px 0 0;
              }
            }

            @keyframes slide-up-in {
              0% {
                transform: translateY(100%);
                opacity: 0;
                border-radius: 8px 8px 0 0;
              }
              50% {
                opacity: 0.8;
                border-radius: 16px 16px 0 0;
              }
              100% {
                transform: translateY(0%);
                opacity: 1;
                border-radius: 24px 24px 0 0;
              }
            }

            @keyframes slide-down-out {
              0% {
                transform: translateY(0%);
                opacity: 1;
                border-radius: 24px 24px 0 0;
              }
              50% {
                opacity: 0.5;
                border-radius: 16px 16px 0 0;
              }
              100% {
                transform: translateY(100%);
                opacity: 0;
                border-radius: 8px 8px 0 0;
              }
            }

            .animate-slide-up-initial {
              animation: slide-up-initial 0.1s ease-out forwards;
            }

            .animate-slide-up-in {
              animation: slide-up-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                forwards;
            }

            .animate-slide-down-out {
              animation: slide-down-out 0.4s
                cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
            }
          `}</style>
        </>
      )}
    </>
  );
};
