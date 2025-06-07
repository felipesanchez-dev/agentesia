# 🚀 COGNIMEET
 - Plataforma de Agentes IA Inteligentes

Una aplicación web moderna construida con Next.js para la gestión, interacción y colaboración con agentes de inteligencia artificial especializados. Conecta con expertos virtuales en videollamadas y experimenta el futuro de la comunicación IA.

![COGNIMEET Banner](https://img.shields.io/badge/COGNIMEET-v1.0.0-green?style=for-the-badge&logo=react)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

## 📋 Tabla de Contenidos

- [🚀 COGNIMEET - Plataforma de Agentes IA Inteligentes](#-cognimeet---plataforma-de-agentes-ia-inteligentes)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Características Principales](#-características-principales)
  - [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
  - [🛠️ Stack Tecnológico](#️-stack-tecnológico)
  - [📱 Diagramas de Flujo](#-diagramas-de-flujo)
  - [⚙️ Prerequisitos del Entorno](#️-prerequisitos-del-entorno)
  - [🚀 Configuración del Proyecto](#-configuración-del-proyecto)
  - [🎨 Sistema de Autenticación](#-sistema-de-autenticación)
  - [🖥️ Dashboard y Componentes](#️-dashboard-y-componentes)
  - [📱 Sistema Responsive Avanzado](#-sistema-responsive-avanzado)
  - [🎨 Diseño y UI](#-diseño-y-ui)
  - [🔧 Comandos Útiles](#-comandos-útiles)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🔐 Configuración de Seguridad](#-configuración-de-seguridad)
  - [🐛 Solución de Problemas](#-solución-de-problemas)
  - [📈 Roadmap 2025](#-roadmap-2025)
  - [🤝 Contribución](#-contribución)
  - [📄 Licencia](#-licencia)
  - [👨‍💻 Desarrollador](#-desarrollador)

## 🎯 Características Principales

- ✅ **Sistema de Autenticación Completo** - Email/contraseña y OAuth (Google, GitHub)
- ✅ **Dashboard Interactivo** - Panel de control moderno con sidebar navegacional
- ✅ **Botón de Usuario Avanzado** - Dropdown y modal móvil con información detallada
- ✅ **Detección de Proveedores** - Identificación automática del método de autenticación
- ✅ **Diseño Responsive Completo** - Desktop y móvil con animaciones nativas
- ✅ **Modal Móvil Avanzado** - Swipe-to-close con animaciones fluidas
- ✅ **UI Moderna** - Componentes elegantes con Shadcn/UI y efectos glassmorphism
- ✅ **Validación de Formularios** - Validación robusta con Zod y React Hook Form
- ✅ **Manejo de Estados** - Estados de carga, errores y animaciones
- ✅ **Seguridad Avanzada** - Autenticación segura con BetterAuth
- ✅ **Base de Datos Escalable** - PostgreSQL con Drizzle ORM
- ✅ **Redirección Inteligente** - Protección de rutas y redirección automática
- ✅ **Componentes Modulares** - Arquitectura escalable y mantenible
- 🔄 **Videollamadas con IA** (En desarrollo)
- 🔄 **Agentes Especializados** (En desarrollo)

## 🏗️ Arquitectura del Sistema

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Next.js App Router] --> B[Auth Pages]
        A --> C[Dashboard Layout]
        A --> D[Home Page]
        
        B --> B1[SignIn View]
        B --> B2[SignUp View]
        
        C --> C1[Desktop Sidebar]
        C --> C2[Desktop User Button]
        C --> C3[Mobile User Menu]
        C --> C4[Protected Routes]
    end
    
    subgraph "Authentication Layer"
        E[BetterAuth] --> F[Email/Password]
        E --> G[Google OAuth]
        E --> H[GitHub OAuth]
        E --> I[Session Management]
    end
    
    subgraph "Database Layer"
        J[PostgreSQL/Neon] --> K[Drizzle ORM]
        K --> L[User Schema]
        K --> M[Session Schema]
    end
    
    subgraph "UI Components"
        N[Shadcn/UI] --> O[Form Components]
        N --> P[Layout Components]
        N --> Q[Navigation Components]
    end
    
    A --> E
    E --> J
    A --> N
    
    style A fill:#059669
    style E fill:#16a34a
    style J fill:#047857
    style N fill:#15803d
```

## 🛠️ Stack Tecnológico

### Frontend
- **[Next.js](https://nextjs.org/)** v15.3.2 - Framework de React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[Shadcn/UI](https://ui.shadcn.com/)** - Biblioteca de componentes modernos
- **[Lucide React](https://lucide.dev/)** - Iconos SVG optimizados
- **[React Hook Form](https://react-hook-form.com/)** - Manejo avanzado de formularios

### Backend & Base de Datos
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Neon](https://neon.com)** - Hosting de PostgreSQL serverless
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first
- **[Postgres.js](https://github.com/porsager/postgres)** - Cliente de PostgreSQL

### Autenticación
- **[BetterAuth](https://www.better-auth.com/)** - Sistema de autenticación moderno
- **OAuth Providers** - Google y GitHub integrados
- **Validación** - Zod para validación de esquemas

### UI/UX
- **Glassmorphism** - Efectos de vidrio esmerilado
- **Animaciones CSS Avanzadas** - Keyframes personalizados y transiciones
- **Componentes Modulares** - Arquitectura escalable
- **Design System** - Paleta de colores consistente
- **Responsive Design** - Desktop-first con adaptación móvil

## 📱 Diagramas de Flujo

### Flujo de Autenticación

```mermaid
flowchart TD
    A[Usuario accede a la app] --> B{¿Tiene sesión activa?}
    B -->|Sí| C[Redirigir a Dashboard]
    B -->|No| D[Mostrar Home]
    
    D --> E[Clic en Sign In/Sign Up]
    E --> F{¿Ya está autenticado?}
    F -->|Sí| C
    F -->|No| G[Mostrar formulario]
    
    G --> H{Tipo de autenticación}
    H -->|Email/Password| I[Validar formulario]
    H -->|OAuth Google| J[Redirect a Google]
    H -->|OAuth GitHub| K[Redirect a GitHub]
    
    I --> L{¿Válido?}
    L -->|No| M[Mostrar errores]
    L -->|Sí| N[Crear sesión]
    
    J --> O[Callback OAuth]
    K --> O
    O --> N
    
    M --> G
    N --> C
    
    style A fill:#e1f5fe
    style C fill:#c8e6c9
    style N fill:#c8e6c9
    style M fill:#ffcdd2
```

### Flujo del Dashboard Responsive

```mermaid
flowchart LR
    A[Dashboard Load] --> B{Detectar dispositivo}
    
    B -->|Desktop ≥768px| C[Mostrar Sidebar]
    B -->|Mobile <768px| D[Ocultar Sidebar]
    
    C --> E[Desktop User Button]
    D --> F[Mobile User Button]
    
    E --> G[Dropdown Menu]
    F --> H[Modal con Swipe]
    
    G --> I[Acciones Desktop]
    H --> J[Acciones Mobile]
    
    subgraph "Desktop Experience"
        C
        E
        G
        I
    end
    
    subgraph "Mobile Experience"
        D
        F
        H
        J
    end
    
    style C fill:#4caf50
    style D fill:#2196f3
    style G fill:#4caf50
    style H fill:#2196f3
```

### Componente Mobile Menu - Estados y Animaciones

```mermaid
stateDiagram-v2
    [*] --> Closed
    
    Closed --> Opening : onClick()
    Opening --> Open : Animation Complete (600ms)
    
    Open --> Dragging : onTouchStart/onMouseDown
    Dragging --> Open : Drag < 100px
    Dragging --> Closing : Drag > 100px
    
    Open --> Closing : Close Button / Backdrop Click
    Closing --> Closed : Animation Complete (400ms)
    
    note right of Opening : animate-slide-up-initial → animate-slide-up-in
    note right of Closing : animate-slide-down-out
    note right of Dragging : Real-time transform: translateY(${dragOffset}px)
```

## ⚙️ Prerequisitos del Entorno

Antes de comenzar, asegúrate de tener instalado:

- **[Node.js](https://nodejs.org/)** >= 18.18
- **[npm](https://www.npmjs.com/)** (incluido con Node.js)
- **[Git](https://git-scm.com/)** para control de versiones
- **[PostgreSQL](https://www.postgresql.org/)** (o cuenta en Neon)

## 🚀 Configuración del Proyecto

### 1. Clonación e Instalación

```bash
# Clonar el repositorio
git clone https://github.com/felipesanchez-dev/agentesia.git
cd agentesia

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 2. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto basado en `env.example.txt`:

```env
# Base de Datos PostgreSQL (Neon)
DATABASE_URL="postgresql://username:password@hostname:port/database"

# BetterAuth - Clave secreta (mínimo 32 caracteres)
BETTER_AUTH_SECRET="tu_clave_secreta_muy_larga_y_segura_de_32_caracteres_minimo"

# URL de la aplicación
BETTER_AUTH_URL="http://localhost:3000"

# OAuth - Google (Opcional)
GOOGLE_CLIENT_ID="tu_google_client_id"
GOOGLE_CLIENT_SECRET="tu_google_client_secret"

# OAuth - GitHub (Opcional)
GITHUB_CLIENT_ID="tu_github_client_id"
GITHUB_CLIENT_SECRET="tu_github_client_secret"

# URL pública de la aplicación
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Configuración de Base de Datos

```bash
# Instalar dependencias de base de datos
npm install postgres drizzle-orm drizzle-kit

# Ejecutar migraciones
npm run db:push

# Abrir Drizzle Studio (opcional)
npm run db:studio
```

### 4. Configuración de Autenticación

El sistema de autenticación está completamente configurado con:

- **Email/Contraseña** - Registro e inicio de sesión tradicional
- **Google OAuth** - Autenticación con Google
- **GitHub OAuth** - Autenticación con GitHub
- **Detección automática** de proveedores por imagen de usuario

## 🎨 Sistema de Autenticación

### Arquitectura de Autenticación

```mermaid
graph LR
    subgraph "Auth Components"
        A[SignInView] --> D[AuthClient]
        B[SignUpView] --> D
        C[Dashboard] --> D
    end
    
    subgraph "BetterAuth Core"
        D --> E[Email/Password Provider]
        D --> F[Google OAuth Provider]
        D --> G[GitHub OAuth Provider]
        D --> H[Session Manager]
    end
    
    subgraph "Database"
        H --> I[(Users Table)]
        H --> J[(Sessions Table)]
    end
    
    subgraph "Provider Detection"
        K[getProviderIcon] --> L{Image URL Analysis}
        K --> M[getProviderName]
        L -->|googleusercontent.com| N[Google Icon]
        L -->|github| O[GitHub Icon]
        L -->|default| P[Shield Icon]
    end
    
    style D fill:#16a34a
    style H fill:#059669
    style L fill:#047857
```

### Características Implementadas

- ✅ **Registro de usuarios** (`/sign-up`)
- ✅ **Inicio de sesión** (`/sign-in`)
- ✅ **Autenticación OAuth** (Google, GitHub)
- ✅ **Validación de formularios** con Zod
- ✅ **Manejo de errores** amigable al usuario
- ✅ **Estados de carga** con spinners animados
- ✅ **Toggle de contraseña** para mostrar/ocultar
- ✅ **Validación de confirmación** de contraseña
- ✅ **Redirección inteligente** - Evita acceso a auth si ya está logueado
- ✅ **Detección automática de proveedores** por imagen de perfil

### Componentes de Autenticación

#### SignInView & SignUpView
```tsx
// Características avanzadas:
✅ Formularios con validación en tiempo real usando React Hook Form + Zod
✅ Estados de carga independientes por proveedor OAuth
✅ Manejo de errores específicos y contextuales
✅ Diseño glassmorphism con efectos visuales
✅ Redirección automática post-autenticación
✅ Protección contra acceso con sesión activa
✅ Validación de contraseña con confirmación en registro
✅ Toggle para mostrar/ocultar contraseñas
```

### Manejo de Errores Avanzado

```typescript
// Sistema completo de manejo de errores OAuth:
const errorMessages: Record<string, string> = {
  "access_denied": "Acceso denegado por el usuario",
  "invalid_request": "Solicitud inválida",
  "unauthorized": "No autorizado",
  "server_error": "Error del servidor",
  "temporarily_unavailable": "Servicio temporalmente no disponible",
  "invalid_client": "Cliente no válido",
  "unsupported_response_type": "Tipo de respuesta no soportado",
};

// Estados de carga granulares:
- isGoogleLoading: boolean
- isGithubLoading: boolean  
- isEmailLoading: boolean
```

## 🖥️ Dashboard y Componentes

### Arquitectura del Dashboard

```mermaid
graph TB
    subgraph "Dashboard Layout"
        A[layout.tsx] --> B[DashboardSidebar]
        A --> C[Main Content Area]
        
        B --> D[Navigation Links]
        B --> E[User Section]
        B --> F[Footer]
        
        E --> G{Screen Size}
        G -->|Desktop ≥768px| H[DashboardUserButton]
        G -->|Mobile <768px| I[DashboardUserMobileMenu]
        
        H --> J[Dropdown Menu]
        I --> K[Modal with Swipe]
        
        subgraph "User Button Features"
            J --> J1[User Info Card]
            J --> J2[Menu Items]
            J --> J3[Social Links]
            J --> J4[Footer]
            
            K --> K1[Animated Modal]
            K --> K2[Swipe to Close]
            K --> K3[Touch/Mouse Support]
            K --> K4[Same Content as Desktop]
        end
    end
    
    style A fill:#059669
    style H fill:#16a34a
    style I fill:#2196f3
    style K fill:#1976d2
```

### DashboardSidebar - Características

```tsx
// Estructura de navegación:
const firstSection = [
  { icon: VideoIcon, label: "Reuniones", href: "/meetings" },
  { icon: BotIcon, label: "Agentes IA", href: "/agents" },
];

const secondSection = [
  { icon: StarIcon, label: "Mejorar IA", href: "/upgrade" },
];

// Características implementadas:
✅ Header con logo y branding corporativo
✅ Separadores visuales entre secciones
✅ Estados activos con indicadores visuales
✅ Efectos hover con transiciones suaves
✅ Footer con información del desarrollador
✅ Enlaces a redes sociales integrados
✅ Responsive: oculto en móviles (<768px)
```

### DashboardUserButton - Sistema Avanzado

```mermaid
flowchart TD
    A[DashboardUserButton] --> B{Screen Detection}
    
    B -->|Desktop ≥768px| C[Dropdown Menu]
    B -->|Mobile <768px| D[Mobile Modal]
    
    subgraph "Desktop Experience"
        C --> C1[Shadcn DropdownMenu]
        C1 --> C2[User Info Header]
        C1 --> C3[Action Items]
        C1 --> C4[Social Links]
        C1 --> C5[Footer Copyright]
    end
    
    subgraph "Mobile Experience"
        D --> D1[Animated Modal]
        D1 --> D2[Swipe Handle]
        D1 --> D3[Touch/Mouse Events]
        D1 --> D4[Slide Animations]
        
        D4 --> D5[slide-up-in: 600ms]
        D4 --> D6[slide-down-out: 400ms]
        
        D3 --> D7[Swipe Down > 100px = Close]
    end
    
    subgraph "Shared Features"
        E[Provider Detection]
        E --> E1[Google: googleusercontent.com]
        E --> E2[GitHub: github domain]
        E --> E3[Credentials: default]
        
        F[User Information]
        F --> F1[Avatar with Fallback]
        F --> F2[Name and Email]
        F --> F3[Provider Badge]
    end
    
    C --> E
    C --> F
    D --> E
    D --> F
    
    style C fill:#4caf50
    style D fill:#2196f3
    style D4 fill:#1976d2
    style E fill:#ff9800
```

### DashboardUserMobileMenu - Características Avanzadas

```tsx
// Estados y animaciones:
✅ showMobileMenu: boolean - Control de visibilidad
✅ isDragging: boolean - Estado de arrastre activo
✅ dragOffset: number - Offset en tiempo real del drag
✅ isClosing: boolean - Estado de cierre con animación
✅ isAnimating: boolean - Control de animación inicial

// Eventos de touch y mouse:
✅ handleTouchStart/Move/End - Soporte táctil nativo
✅ handleMouseDown/Move/Up - Soporte desktop para testing
✅ Global event cleanup - Limpieza adecuada de listeners
✅ Threshold de cierre: 100px de deslizamiento hacia abajo

// Animaciones CSS personalizadas:
✅ slide-up-initial: Estado inicial (0.1s)
✅ slide-up-in: Entrada suave (0.6s cubic-bezier)
✅ slide-down-out: Salida rápida (0.4s cubic-bezier)
✅ Handle dinámico: Se agranda al arrastrar
✅ Backdrop fade: Transición de 500ms

// Características UX:
✅ Header con título "Mi Cuenta"
✅ Botón X para cierre manual
✅ User info card con gradiente
✅ Menu items con iconos coloridos
✅ Social links con efectos hover
✅ Footer con copyright y mensaje de instrucción
```

## 📱 Sistema Responsive Avanzado

### Breakpoints y Comportamiento

```css
/* Sistema de breakpoints */
Mobile:     < 768px   - Stack vertical, sidebar oculto, modal móvil
Tablet:     768px - 1024px - Sidebar adaptativo, dropdown desktop
Desktop:    > 1024px  - Layout completo, todas las características

/* Implementación con Tailwind */
.md:hidden        /* Oculto en desktop, visible en móvil */
.hidden.md:block  /* Oculto en móvil, visible en desktop */
```

### Detección de Dispositivo

```tsx
// Hook personalizado para detección de pantalla:
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);

// Renderizado condicional:
{!isMobile && <DesktopDropdown />}
{isMobile && <MobileModal />}
```

### Animaciones Responsivas

```mermaid
sequenceDiagram
    participant U as Usuario
    participant B as Button
    participant M as Modal
    participant A as Animations
    
    U->>B: Click/Touch
    B->>M: setShowMobileMenu(true)
    M->>A: animate-slide-up-initial (0.1s)
    A->>A: animate-slide-up-in (0.6s)
    A->>M: Modal visible
    
    U->>M: Swipe Down
    M->>M: Update dragOffset
    M->>A: Real-time transform
    
    alt Swipe > 100px
        M->>A: animate-slide-down-out (0.4s)
        A->>M: Modal hidden
    else Swipe < 100px
        M->>A: Return to position
        A->>M: Modal remains open
    end
```

## 🎨 Diseño y UI

### Paleta de Colores Actualizada

```css
/* Colores principales de la marca */
:root {
  --primary-green: #16a34a;      /* green-600 - Color principal */
  --primary-green-hover: #15803d; /* green-700 - Hover states */
  --primary-green-light: #22c55e; /* green-500 - Elementos destacados */
  
  /* Gradientes dinámicos */
  --gradient-start: #059669;      /* green-600 */
  --gradient-mid: #047857;        /* green-700 */
  --gradient-end: #064e3b;        /* green-900 */
  
  /* Estados de error y validación */
  --error-bg: #fef2f2;           /* red-50 */
  --error-border: #fecaca;       /* red-200 */
  --error-text: #b91c1c;         /* red-700 */
  --success-bg: #f0fdf4;         /* green-50 */
  --success-border: #bbf7d0;     /* green-200 */
  --success-text: #15803d;       /* green-700 */
  
  /* Sidebar y Dashboard */
  --sidebar-bg: rgba(0, 0, 0, 0.8);
  --sidebar-hover: rgba(255, 255, 255, 0.1);
  --white-translucent: rgba(255, 255, 255, 0.05);
  
  /* Modal móvil */
  --modal-backdrop: rgba(0, 0, 0, 0.6);
  --modal-bg: #ffffff;
  --modal-border: rgba(0, 0, 0, 0.1);
}
```

### Componentes UI Avanzados

#### Glassmorphism Cards
```tsx
// Efectos implementados en auth cards:
✅ Fondo semi-transparente: bg-white/95
✅ Backdrop blur: backdrop-blur-sm
✅ Gradientes dinámicos animados
✅ Sombras profundas multicapa: shadow-2xl
✅ Bordes translúcidos: border-white/20
✅ Efectos hover suaves: hover:bg-white/98
```

#### Sistema de Animaciones CSS

```css
/* Keyframes personalizados para mobile modal */
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

/* Cubic-bezier curves para naturalidad */
.animate-slide-up-in {
  animation: slide-up-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-slide-down-out {
  animation: slide-down-out 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
}
```

### Micro-interacciones y Efectos

```tsx
// Efectos implementados:
✅ Handle dinámico: Crece de w-12 a w-16 al arrastrar
✅ Iconos con scale: group-hover:scale-110
✅ Botones con efectos de color progresivos
✅ Cursors contextuales: cursor-grab, cursor-grabbing
✅ Estados de loading con spinners animados
✅ Transiciones de 200-300ms para fluidez
✅ Estados focus con ring-2 ring-white/20
```

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo
npm run build            # Construir para producción
npm run start            # Iniciar servidor de producción
npm run lint             # Ejecutar linting

# Base de Datos
npm run db:push          # Aplicar cambios de esquema
npm run db:studio        # Abrir Drizzle Studio
npm run db:generate      # Generar migraciones

# Utilidades
npm run type-check       # Verificar tipos TypeScript
npm run format           # Formatear código con Prettier
npm run clean            # Limpiar cache y builds

# Shadcn/UI Components (ejemplos)
npx shadcn-ui@latest add button
npx shadcn-ui@latest add form
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add avatar
```

## 📁 Estructura del Proyecto

```
agentesia/
├── src/
│   ├── app/
│   │   ├── modules/                    # Módulos de la aplicación
│   │   │   ├── auth/
│   │   │   │   └── ui/views/
│   │   │   │       ├── sign-in-view.tsx    # Vista de inicio de sesión
│   │   │   │       └── sign-up-view.tsx    # Vista de registro
│   │   │   ├── dashboard/
│   │   │   │   └── ui/components/
│   │   │   │       ├── dashboard-sidebar.tsx           # Sidebar desktop
│   │   │   │       ├── dashboard-user-button.tsx       # Botón usuario principal
│   │   │   │       └── dashboard-user-mobile-menu.tsx  # Modal móvil avanzado
│   │   │   └── home/
│   │   │       └── ui/view/
│   │   │           └── home-view.tsx       # Vista de landing
│   │   ├── (auth)/                     # Rutas de autenticación
│   │   │   ├── sign-in/page.tsx
│   │   │   ├── sign-up/page.tsx
│   │   │   └── layout.tsx              # Layout auth con redirección
│   │   ├── (dashboard)/                # Rutas protegidas del dashboard
│   │   │   ├── layout.tsx              # Layout con sidebar
│   │   │   ├── agents/page.tsx         # Página de agentes IA
│   │   │   ├── meetings/page.tsx       # Página de reuniones
│   │   │   └── upgrade/page.tsx        # Página de mejoras
│   │   ├── api/                        # API Routes
│   │   │   └── auth/                   # Endpoints de BetterAuth
│   │   ├── globals.css                 # Estilos globales
│   │   ├── layout.tsx                  # Layout raíz
│   │   └── page.tsx                    # Página de inicio
│   ├── components/
│   │   └── ui/                         # Componentes Shadcn/UI
│   │       ├── button.tsx
│   │       ├── form.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── avatar.tsx
│   │       └── ...
│   ├── db/
│   │   ├── index.ts                    # Configuración de Drizzle
│   │   └── schema.ts                   # Esquemas de base de datos
│   ├── lib/
│   │   ├── auth.ts                     # Configuración BetterAuth
│   │   ├── auth-client.ts              # Cliente de autenticación
│   │   └── utils.ts                    # Utilidades generales
│   └── styles/                         # Estilos adicionales
├── public/
│   ├── logo.png                        # Logo principal
│   └── logo-simple.png                 # Logo simplificado
├── .env.local                          # Variables de entorno
├── env.example.txt                     # Plantilla de variables
├── drizzle.config.ts                   # Configuración Drizzle
├── tailwind.config.ts                  # Configuración Tailwind
├── next.config.js                      # Configuración Next.js
└── package.json                        # Dependencias del proyecto
```

## 🔐 Configuración de Seguridad

### Variables de Entorno Seguras
```bash
# Generar clave secreta segura (mínimo 32 caracteres)
BETTER_AUTH_SECRET=$(openssl rand -base64 32)

# O usar Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Configuración OAuth Actualizada

#### Google OAuth
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+ (Google Identity)
4. Ve a "Credenciales" > "Crear credenciales" > "ID de cliente OAuth 2.0"
5. Configura las URLs de redirección:
   - Desarrollo: `http://localhost:3000/api/auth/callback/google`
   - Producción: `https://tudominio.com/api/auth/callback/google`

#### GitHub OAuth
1. Ve a GitHub Settings > Developer settings > OAuth Apps
2. Crea nueva OAuth App con:
   - Application name: `COGNIMEET`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
3. Copia Client ID y Client Secret

### Protección de Rutas Implementada
```tsx
// En layout de dashboard:
✅ Verificación de sesión en cada carga
✅ Redirección automática a /sign-in si no hay sesión
✅ Loading states durante verificación
✅ Manejo de errores de sesión

// En páginas de auth:
✅ Verificación de sesión existente
✅ Redirección automática a dashboard si ya está logueado
✅ Prevención de acceso dual
```

## 🐛 Solución de Problemas

### Error: "postgres" no encontrado
```bash
npm install postgres @types/pg
# O si usas yarn:
yarn add postgres @types/pg
```

### Error: Variables de entorno faltantes
```bash
# Verificar que .env.local existe y contiene:
✅ DATABASE_URL - URL de PostgreSQL
✅ BETTER_AUTH_SECRET - Clave de 32+ caracteres
✅ BETTER_AUTH_URL - URL de la aplicación
✅ Variables OAuth (opcionales pero recomendadas)

# Ejemplo de verificación:
cat .env.local | grep -E "(DATABASE_URL|BETTER_AUTH_SECRET|BETTER_AUTH_URL)"
```

### Error: Modal móvil no responde al swipe
```bash
# Verificar:
1. Eventos touch están configurados correctamente
2. Estados isDragging y dragOffset funcionan
3. useEffect para cleanup de eventos está presente
4. Transform CSS se aplica correctamente

# Debug en DevTools:
console.log('Touch events:', { isDragging, dragOffset, currentY: currentY.current });
```

### Error: Animaciones no fluidas
```bash
# Verificar:
1. CSS keyframes están definidos correctamente
2. Cubic-bezier curves son válidos
3. Clases de animación se aplican en el momento correcto
4. No hay conflictos con transition: 'none' durante drag

# Optimización de performance:
will-change: transform;
transform: translateZ(0); /* Hardware acceleration */
```

### Problemas de autenticación OAuth
```bash
# Verificar configuración:
1. URLs de callback coinciden exactamente
2. Client ID y Secret son correctos
3. APIs están habilitadas (Google+ para Google)
4. Dominios están autorizados en proveedores

# Debug de errores OAuth:
- Revisar URL params en callback
- Verificar logs de BetterAuth
- Comprobar CORS y headers
```

## 📈 Roadmap 2025

### Q1 2025 - Funcionalidades Core
- [ ] **Sistema de Videollamadas** - Integración con WebRTC/Jitsi
- [ ] **Agentes IA Especializados** - Psicología, educación, tecnología
- [ ] **Chat en Tiempo Real** - Comunicación previa a videollamadas
- [ ] **Historial de Sesiones** - Registro y replay de interacciones
- [ ] **Configuración de Perfil** - Edición completa de datos de usuario

### Q2 2025 - UX y Performance
- [ ] **Sistema de Notificaciones** - Push notifications y alertas
- [ ] **Tema Oscuro/Claro** - Toggle completo de modo de visualización
- [ ] **Internacionalización** - Soporte multi-idioma (ES, EN, FR)
- [ ] **PWA Completa** - App instalable con service workers
- [ ] **Optimización Mobile** - Mejoras adicionales para UX móvil

### Q3 2025 - Escalabilidad
- [ ] **API REST Completa** - Endpoints para integraciones externas
- [ ] **Dashboard Analytics** - Métricas de uso y engagement
- [ ] **Sistema de Pagos** - Planes premium con Stripe
- [ ] **Multi-tenancy** - Soporte para organizaciones
- [ ] **Admin Panel** - Panel de administración completo

### Q4 2025 - IA Avanzada
- [ ] **IA Avanzada** - Integración con GPT-4, Claude, Gemini
- [ ] **Voice AI** - Procesamiento de voz en tiempo real
- [ ] **Tests Automatizados** - Suite completa E2E con Playwright
- [ ] **Documentación API** - Swagger/OpenAPI completo
- [ ] **Aplicación Móvil** - React Native para iOS/Android

### Mejoras Técnicas Continuas
- [ ] **Micro-frontends** - Arquitectura modular avanzada
- [ ] **Caching Inteligente** - Redis para performance
- [ ] **CI/CD Pipeline** - GitHub Actions completo
- [ ] **Monitoring** - Sentry + Analytics detallados
- [ ] **Security Audit** - Auditoría de seguridad profesional

## 🤝 Contribución

### Cómo Contribuir

1. **Fork el proyecto**
2. **Crea tu rama de característica**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit tus cambios**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push a la rama**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abre un Pull Request**

### Estándares de Código

```bash
# Herramientas utilizadas:
✅ TypeScript estricto habilitado
✅ ESLint para linting automático
✅ Prettier para formateo consistente
✅ Husky para pre-commit hooks
✅ Conventional Commits para mensajes

# Estructura de commits:
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o modificar tests
chore: cambios en build/tools
```

### Guías de Desarrollo

```tsx
// Componentes deben seguir:
✅ Tipado estricto con TypeScript
✅ Props interface bien definida
✅ Comentarios JSDoc para funciones complejas
✅ Separación de lógica y presentación
✅ Manejo de estados con hooks
✅ Cleanup de efectos y listeners
✅ Responsive design por defecto
✅ Accesibilidad (ARIA labels, keyboard nav)
```

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo `LICENSE` para más detalles.

```
MIT License

Copyright (c) 2025 Felipe Reyes Sanchez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

## 👨‍💻 Desarrollador

<div align="center">
  <img src="https://github.com/felipesanchez-dev.png" width="120" height="120" style="border-radius: 50%; border: 3px solid #16a34a;" alt="Felipe Reyes Sanchez" />
  
  **Felipe Reyes Sanchez**  
  *Full Stack Developer & UI/UX Enthusiast*
</div>


<div align="center">
  
[![Website](https://img.shields.io/badge/Website-felipesanchezdev.site-green?style=for-the-badge&logo=safari)](https://felipesanchezdev.site)
[![Email](https://img.shields.io/badge/Email-felipe@felipesanchezdev.site-red?style=for-the-badge&logo=gmail)](mailto:felipe@felipesanchezdev.site)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Felipe_Reyes_Sanchez-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/felipereyessa)
[![GitHub](https://img.shields.io/badge/GitHub-@felipesanchez--dev-black?style=for-the-badge&logo=github)](https://github.com/felipesanchez-dev)
[![Instagram](https://img.shields.io/badge/Instagram-@felipesanchez__dev-purple?style=for-the-badge&logo=instagram)](https://www.instagram.com/felipesanchez_dev)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+57_3102_452542-green?style=for-the-badge&logo=whatsapp)](https://wa.me/57102452542)

</div>

### 🛠️ Tecnologías y Expertise

```
Frontend:    React, Next.js, TypeScript, Tailwind CSS, Shadcn/UI
Backend:     Node.js, Express, PostgreSQL, Drizzle ORM
Auth:        BetterAuth, OAuth (Google, GitHub), JWT
Tools:       Git, Docker, Vercel, Neon, VS Code
Design:      Figma, Glassmorphism, Responsive Design
```

### 📊 Estadísticas del Proyecto

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/felipesanchez-dev/agentesia?style=social)
![GitHub Forks](https://img.shields.io/github/forks/felipesanchez-dev/agentesia?style=social)
![GitHub Issues](https://img.shields.io/github/issues/felipesanchez-dev/agentesia)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/felipesanchez-dev/agentesia)

</div>

---

<div align="center">
  <h3>🚀 COGNIMEET - Conecta • Colabora • Crece</h3>
  <p><strong>Desarrollado por Felipe Reyes Sanchez</strong></p>
  <p><em>"El futuro de la comunicación IA está aquí"</em></p>
  
  <br>
  
  <img src="https://img.shields.io/badge/Made_with-Love_and_Code-red?style=for-the-badge" alt="Made with Love and Code" />
  <img src="https://img.shields.io/badge/Powered_by-Next.js_&_TypeScript-blue?style=for-the-badge" alt="Powered by Next.js & TypeScript" />
  <img src="https://img.shields.io/badge/Designed_for-Future_of_AI-green?style=for-the-badge" alt="Designed for Future of AI" />
  
  <br><br>
  
  **⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**
</div>