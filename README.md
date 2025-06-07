# 🚀 COGNIMEET
*Plataforma de Agentes IA Inteligentes*

Una aplicación web moderna construida con Next.js para la gestión, interacción y colaboración con agentes de inteligencia artificial especializados. Conecta con expertos virtuales en videollamadas y experimenta el futuro de la comunicación IA.

![COGNIMEET Banner](https://img.shields.io/badge/COGNIMEET-v1.2.0-green?style=for-the-badge&logo=react)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![tRPC](https://img.shields.io/badge/tRPC-11.0+-398CCB?style=flat&logo=trpc)](https://trpc.io/)

## 📋 Tabla de Contenidos

- [🚀 COGNIMEET](#-cognimeet)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Características Principales](#-características-principales)
  - [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
  - [🛠️ Stack Tecnológico Completo](#️-stack-tecnológico-completo)
  - [📱 Diagramas de Flujo](#-diagramas-de-flujo)
  - [🔄 Sistema tRPC y API](#-sistema-trpc-y-api)
  - [🎨 Sistema de Loading y Estados](#-sistema-de-loading-y-estados)
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

### ✅ **Sistema Completo Implementado**
- **Sistema de Autenticación Completo** - Email/contraseña y OAuth (Google, GitHub)
- **Dashboard Interactivo** - Panel de control moderno con sidebar navegacional
- **Botón de Usuario Avanzado** - Dropdown y modal móvil con información detallada
- **Detección de Proveedores** - Identificación automática del método de autenticación
- **Diseño Responsive Completo** - Desktop y móvil con animaciones nativas
- **Modal Móvil Avanzado** - Swipe-to-close con animaciones fluidas
- **UI Moderna** - Componentes elegantes con Shadcn/UI y efectos glassmorphism
- **Validación de Formularios** - Validación robusta con Zod y React Hook Form
- **Manejo de Estados** - Estados de carga, errores y animaciones
- **Seguridad Avanzada** - Autenticación segura con BetterAuth
- **Base de Datos Escalable** - PostgreSQL con Drizzle ORM
- **Redirección Inteligente** - Protección de rutas y redirección automática
- **Componentes Modulares** - Arquitectura escalable y mantenible

### 🆕 **Nuevas Características v1.2.0**
- **tRPC Integration** - API type-safe con React Query
- **Sistema de Loading Avanzado** - Loader espacial con astronauta animado
- **Error Boundaries** - Manejo robusto de errores
- **Suspense Boundaries** - Loading states granulares
- **Server-Side Prefetching** - Optimización de performance
- **React Query Integration** - Cache inteligente y sincronización
- **TypeScript Full Coverage** - 100% tipado estático

### 🔄 **En Desarrollo**
- **Videollamadas con IA** (Q1 2025)
- **Agentes Especializados** (Q1 2025)
- **Chat en Tiempo Real** (Q2 2025)

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
        
        C4 --> C5[Agents Page]
        C4 --> C6[Meetings Page]
        C4 --> C7[Upgrade Page]
    end
    
    subgraph "tRPC & API Layer"
        E[tRPC Router] --> F[Agents Router]
        E --> G[Auth Router]
        E --> H[Users Router]
        
        F --> F1[agents.getMany]
        F --> F2[agents.getById]
        F --> F3[agents.create]
        
        I[React Query] --> J[Server State Cache]
        I --> K[Optimistic Updates]
        I --> L[Background Refetch]
    end
    
    subgraph "Authentication Layer"
        M[BetterAuth] --> N[Email/Password]
        M --> O[Google OAuth]
        M --> P[GitHub OAuth]
        M --> Q[Session Management]
    end
    
    subgraph "Database Layer"
        R[PostgreSQL/Neon] --> S[Drizzle ORM]
        S --> T[User Schema]
        S --> U[Session Schema]
        S --> V[Agents Schema]
    end
    
    subgraph "UI Components"
        W[Shadcn/UI] --> X[Form Components]
        W --> Y[Layout Components]
        W --> Z[Navigation Components]
        W --> AA[Loading Components]
    end
    
    A --> E
    E --> M
    M --> R
    A --> W
    E --> I
    
    style A fill:#059669
    style E fill:#398CCB
    style M fill:#16a34a
    style R fill:#047857
    style W fill:#15803d
```

## 🛠️ Stack Tecnológico Completo

### Frontend
- **[Next.js](https://nextjs.org/)** v15.3.2 - Framework de React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[Shadcn/UI](https://ui.shadcn.com/)** - Biblioteca de componentes modernos
- **[Lucide React](https://lucide.dev/)** - Iconos SVG optimizados
- **[React Hook Form](https://react-hook-form.com/)** - Manejo avanzado de formularios

### Backend & API
- **[tRPC](https://trpc.io/)** v11.0+ - Type-safe API con TypeScript
- **[React Query](https://tanstack.com/query)** - Server state management
- **[Zod](https://zod.dev/)** - Validación de esquemas TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Neon](https://neon.com)** - Hosting de PostgreSQL serverless
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first

### Autenticación
- **[BetterAuth](https://www.better-auth.com/)** - Sistema de autenticación moderno
- **OAuth Providers** - Google y GitHub integrados
- **Session Management** - Manejo seguro de sesiones

### UI/UX & Performance
- **Glassmorphism** - Efectos de vidrio esmerilado
- **Animaciones CSS Avanzadas** - Keyframes personalizados y transiciones
- **Loading States** - Componentes de carga inmersivos
- **Error Boundaries** - Manejo robusto de errores
- **Responsive Design** - Desktop-first con adaptación móvil
- **Performance Optimization** - Server-side prefetching y caching

## 📱 Diagramas de Flujo

### Flujo de Autenticación Completo

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
    
    C --> P[Dashboard Layout]
    P --> Q[Prefetch Data]
    Q --> R[Render Content]
    
    style A fill:#e1f5fe
    style C fill:#c8e6c9
    style N fill:#c8e6c9
    style M fill:#ffcdd2
    style P fill:#e8f5e8
    style Q fill:#398CCB
```

### Flujo tRPC y Data Fetching

```mermaid
flowchart LR
    A[Page Component] --> B[tRPC Client Call]
    B --> C{Cache Hit?}
    
    C -->|Yes| D[Return Cached Data]
    C -->|No| E[Make Server Request]
    
    E --> F[tRPC Server Router]
    F --> G[Database Query]
    G --> H[Return Typed Data]
    
    H --> I[Update React Query Cache]
    I --> J[Update UI]
    
    D --> J
    
    subgraph "Loading States"
        K[Suspense Fallback]
        L[LoadingState Component]
        M[Space Loader Animation]
    end
    
    subgraph "Error States"
        N[Error Boundary]
        O[ErrorState Component]
        P[Retry Mechanism]
    end
    
    B --> K
    K --> L
    L --> M
    
    F --> N
    N --> O
    O --> P
    
    style A fill:#059669
    style F fill:#398CCB
    style G fill:#047857
    style J fill:#16a34a
    style M fill:#ff9800
```

### Arquitectura de Páginas y Estados

```mermaid
flowchart TD
    A[Page.tsx] --> B[HydrationBoundary]
    B --> C[Suspense]
    C --> D[ErrorBoundary]
    D --> E[View Component]
    
    A --> F[Server Prefetch]
    F --> G[queryClient.prefetchQuery]
    G --> H[tRPC.agents.getMany]
    
    C --> I[Loading Fallback]
    I --> J[AgentsViewLoading]
    J --> K[LoadingState]
    K --> L[Space Loader]
    
    D --> M[Error Fallback]
    M --> N[AgentsViewError]
    N --> O[ErrorState]
    
    E --> P[useSuspenseQuery]
    P --> Q[Cached Data]
    Q --> R[Render Content]
    
    subgraph "Loading Animation"
        L --> L1[Astronaut Animation]
        L --> L2[Space Environment]
        L --> L3[Progress Bar]
        L --> L4[Loading Text]
    end
    
    style A fill:#059669
    style H fill:#398CCB
    style L fill:#ff9800
    style O fill:#f44336
    style R fill:#4caf50
```

## 🔄 Sistema tRPC y API

### Arquitectura tRPC Implementada

```mermaid
graph LR
    subgraph "Client Side"
        A[React Component] --> B[tRPC Client]
        B --> C[React Query Hook]
        C --> D[useSuspenseQuery]
        
        E[TypeScript Types] --> A
        E --> B
    end
    
    subgraph "Network Layer"
        F[HTTP Request] --> G[Next.js API Route]
        G --> H[tRPC Handler]
    end
    
    subgraph "Server Side"
        H --> I[tRPC Router]
        I --> J[Procedure Validation]
        J --> K[Database Query]
        K --> L[Drizzle ORM]
        L --> M[PostgreSQL]
    end
    
    subgraph "Type Safety"
        N[Shared Types] --> O[Client Types]
        N --> P[Server Types]
        N --> Q[Database Schema]
    end
    
    B --> F
    M --> K
    K --> J
    J --> I
    I --> H
    H --> G
    G --> F
    F --> B
    
    N --> E
    N --> I
    
    style B fill:#398CCB
    style I fill:#398CCB
    style L fill:#047857
    style N fill:#ff9800
```

### Configuración tRPC

```typescript
// Router de Agentes implementado:
export const agentsRouter = router({
  getMany: publicProcedure
    .query(async () => {
      // Lógica para obtener agentes
      return await db.select().from(agents);
    }),
    
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // Lógica para obtener agente por ID
      return await db.select().from(agents).where(eq(agents.id, input.id));
    }),
    
  create: protectedProcedure
    .input(agentCreateSchema)
    .mutation(async ({ input, ctx }) => {
      // Lógica para crear agente
      return await db.insert(agents).values(input);
    }),
});

// Características implementadas:
✅ Type-safe API calls
✅ Automatic TypeScript inference
✅ Input validation with Zod
✅ Server-side prefetching
✅ React Query integration
✅ Optimistic updates
✅ Error handling
✅ Loading states
```

### Uso en Componentes

```tsx
// Ejemplo de uso en AgentsView:
export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

// Server-side prefetching:
const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading />}>
        <ErrorBoundary fallback={<AgentsViewError />}>
          <AgentsView />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
};
```

## 🎨 Sistema de Loading y Estados

### Componente LoadingState Avanzado

```mermaid
graph TB
    A[LoadingState Component] --> B[Glass Container]
    B --> C[Space Loader]
    B --> D[Text Content]
    
    C --> E[Astronaut Animation]
    C --> F[Space Environment]
    C --> G[Loading Progress]
    
    E --> E1[Floating Animation]
    E --> E2[Helmet Reflection]
    E --> E3[Body Movements]
    E --> E4[LED Indicators]
    
    F --> F1[Rotating Stars]
    F --> F2[Flying Meteors]
    F --> F3[Floating Planets]
    F --> F4[Space Background]
    
    G --> G1[Progress Bar]
    G --> G2[Loading Text]
    G --> G3[Animated Dots]
    
    D --> D1[Dynamic Title]
    D --> D2[Context Description]
    
    style A fill:#059669
    style C fill:#ff9800
    style E fill:#2196f3
    style F fill:#9c27b0
    style G fill:#4caf50
```

### Estados de Error y Loading

```tsx
// Sistema completo de estados:

// Loading States
<LoadingState 
  title="Cargando agentes"
  description="Estamos preparando tus agentes IA especializados..."
/>

// Error States  
<ErrorState
  title="Error al cargar agentes"
  description="No pudimos cargar los agentes. Verifica tu conexión."
  action={() => window.location.reload()}
  actionLabel="Reintentar"
/>

// Características implementadas:
✅ Animación espacial inmersiva
✅ Textos contextuales dinámicos
✅ Progress indicators animados
✅ Glassmorphism effects
✅ Responsive design
✅ Hardware accelerated animations
✅ Smooth transitions
✅ Corporate color scheme integration
```

### Optimizaciones de Performance

```mermaid
sequenceDiagram
    participant U as User
    participant P as Page
    participant S as Server
    participant D as Database
    participant C as Cache
    
    U->>P: Navigate to /agents
    P->>S: Server-side prefetch
    S->>D: Query agents data
    D->>S: Return data
    S->>C: Populate cache
    S->>P: Hydrated state
    P->>U: Instant render
    
    Note over P,C: No loading state needed
    Note over C: React Query cache
    Note over S: tRPC type safety
    
    U->>P: Navigate away & back
    P->>C: Check cache
    C->>P: Return cached data
    P->>U: Instant render
    
    Note over P,C: Background refetch if stale
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

### 4. Configuración tRPC

```bash
# Instalar dependencias tRPC
npm install @trpc/server @trpc/client @trpc/next @trpc/react-query
npm install @tanstack/react-query

# tRPC está pre-configurado con:
✅ Type-safe API routes
✅ React Query integration
✅ Server-side prefetching
✅ Error boundaries
✅ Loading states
✅ Zod validation
```

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

## 🖥️ Dashboard y Componentes

### Arquitectura del Dashboard Actualizada

```mermaid
graph TB
    subgraph "Dashboard Layout"
        A[layout.tsx] --> B[SidebarProvider]
        B --> C[DashboardSidebar]
        B --> D[Main Content]
        
        D --> E[DashboardNavbar]
        D --> F[Page Content]
        
        C --> G[Navigation Links]
        C --> H[User Section]
        C --> I[Footer]
        
        H --> J{Screen Size}
        J -->|Desktop ≥768px| K[DashboardUserButton]
        J -->|Mobile <768px| L[DashboardUserMobileMenu]
        
        F --> M[Suspense Boundary]
        M --> N[Error Boundary]
        N --> O[View Component]
        
        F --> P[Loading States]
        P --> Q[Space Loader]
        
        F --> R[Error States]
        R --> S[Error Component]
    end
    
    subgraph "Data Layer"
        T[tRPC Prefetch] --> U[React Query Cache]
        U --> O
        
        V[useSuspenseQuery] --> W[Type-safe Data]
        W --> X[UI Components]
    end
    
    style A fill:#059669
    style O fill:#4caf50
    style Q fill:#ff9800
    style T fill:#398CCB
```

### DashboardSidebar con Sidebar UI

```tsx
// Nueva implementación con Shadcn Sidebar:
export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground">
        <div className="flex items-center gap-3 px-3 py-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-lg">COGNIMEET</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};

// Características implementadas:
✅ Shadcn/UI Sidebar components
✅ Responsive behavior
✅ Active state indicators
✅ Collapsible functionality
✅ User button integration
✅ Modern design system
```

### DashboardNavbar Mejorado

```tsx
// Navbar con Command palette:
export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background w-full">
        <Button 
          variant="outline" 
          size="icon"
          onClick={toggleSidebar}
          className="md:hidden"
        >
          <MenuIcon className="size-4" />
        </Button>
        
        <div className="flex-1" />
        
        <Button
          variant="outline"
          onClick={() => setCommandOpen(true)}
          className="gap-2"
        >
          <SearchIcon className="size-4" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </nav>
    </>
  );
};

// Características implementadas:
✅ Command palette integration
✅ Keyboard shortcuts (⌘K)
✅ Responsive toggle button
✅ Search functionality
✅ Modern design
```

## 📱 Sistema Responsive Avanzado

### Breakpoints y Comportamiento

```css
/* Sistema de breakpoints actualizado */
Mobile:     < 768px   - Sidebar colapsado, navbar simplificado
Tablet:     768px - 1024px - Sidebar adaptativo, command palette
Desktop:    > 1024px  - Layout completo, todas las características

/* Implementación con Tailwind y Shadcn Sidebar */
.md:hidden        /* Oculto en desktop, visible en móvil */
.hidden.md:block  /* Oculto en móvil, visible en desktop */
```

### Detección de Dispositivo con Shadcn

```tsx
// Hook useSidebar para estado del sidebar:
const { state, toggleSidebar, isMobile } = useSidebar();

// Estados del sidebar:
- "expanded" | "collapsed" - Desktop states
- isMobile - Boolean para detección móvil
- toggleSidebar() - Función para alternar estado

// Renderizado condicional mejorado:
{isMobile && <MobileNavToggle />}
{!isMobile && <DesktopSidebar />}
```

## 🎨 Diseño y UI

### Paleta de Colores Actualizada

```css
/* Colores principales de la marca v1.2 */
:root {
  --primary-green: #16a34a;      /* green-600 - Color principal */
  --primary-green-hover: #15803d; /* green-700 - Hover states */
  --primary-green-light: #22c55e; /* green-500 - Elementos destacados */
  
  /* tRPC y API colors */
  --trpc-blue: #398CCB;          /* tRPC brand color */
  --api-success: #10b981;        /* Success states */
  --api-error: #ef4444;          /* Error states */
  --api-warning: #f59e0b;        /* Warning states */
  
  /* Loading states */
  --space-bg: #0f0f1e;           /* Space background */
  --space-stars: #ffffff;        /* Star colors */
  --astronaut-suit: #e5e7eb;     /* Astronaut suit */
  --helmet-glass: rgba(0, 255, 255, 0.2); /* Helmet glass */
  
  /* Sidebar colors */
  --sidebar-bg: var(--background);
  --sidebar-border: var(--border);
  --sidebar-foreground: var(--foreground);
}
```

### Componentes UI Avanzados v1.2

#### Loading Components
```tsx
// Space Loader con animaciones CSS optimizadas:
✅ Astronauta animado con movimientos realistas
✅ Entorno espacial con estrellas rotando
✅ Meteoros animados
✅ Planetas flotantes
✅ Barra de progreso animada
✅ Texto de carga contextual
✅ Efectos de reflexión en el casco
✅ Indicadores LED parpadeantes
✅ Responsive design (150px en móvil, 200px en desktop)
✅ Hardware acceleration (will-change: transform)
```

#### Error Components
```tsx
// Sistema de error mejorado:
✅ Error boundaries con React 18
✅ Retry mechanisms automáticos
✅ Contextual error messages
✅ Fallback UI components
✅ Error tracking integration ready
✅ User-friendly error states
```

#### Glassmorphism Effects v2
```tsx
// Efectos glassmorphism mejorados:
✅ backdrop-blur-sm para loading containers
✅ bg-background/80 para semi-transparencia
✅ border-white/10 para bordes sutiles
✅ shadow-xl para profundidad
✅ rounded-2xl para esquinas suaves
✅ Efectos hover dinámicos
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

# tRPC
npm run type-check       # Verificar tipos TypeScript
npm run build:trpc       # Build tRPC types
npm run dev:trpc         # Desarrollo con tRPC watch mode

# Utilidades
npm run format           # Formatear código con Prettier
npm run clean            # Limpiar cache y builds
npm run analyze          # Analizar bundle size

# Shadcn/UI Components
npx shadcn-ui@latest add sidebar
npx shadcn-ui@latest add command
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add scroll-area
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
│   │   │   ├── agents/                     # Módulo de agentes IA
│   │   │   │   └── ui/views/
│   │   │   │       └── agents-view.tsx     # Vista principal de agentes
│   │   │   ├── dashboard/
│   │   │   │   └── ui/components/
│   │   │   │       ├── dashboard-sidebar.tsx           # Sidebar con Shadcn
│   │   │   │       ├── dashboard-navbar.tsx            # Navbar con command
│   │   │   │       ├── dashboard-command.tsx           # Command palette
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
│   │   │   ├── layout.tsx              # Layout con SidebarProvider
│   │   │   ├── agents/
│   │   │   │   └── page.tsx            # Página de agentes con tRPC
│   │   │   ├── meetings/page.tsx       # Página de reuniones
│   │   │   └── upgrade/page.tsx        # Página de mejoras
│   │   ├── api/                        # API Routes
│   │   │   ├── auth/                   # Endpoints de BetterAuth
│   │   │   └── trpc/[trpc]/route.ts    # tRPC handler
│   │   ├── globals.css                 # Estilos globales
│   │   ├── layout.tsx                  # Layout raíz con providers
│   │   └── page.tsx                    # Página de inicio
│   ├── components/
│   │   ├── ui/                         # Componentes Shadcn/UI
│   │   │   ├── sidebar.tsx             # Sidebar components
│   │   │   ├── command.tsx             # Command palette
│   │   │   ├── button.tsx
│   │   │   ├── form.tsx
│   │   │   └── ...
│   │   ├── loader.tsx                  # Space loader component
│   │   ├── loader.module.css           # Loader styles
│   │   └── loading-state.tsx           # Loading state wrapper
│   ├── trpc/                           # tRPC configuration
│   │   ├── client.tsx                  # Client-side tRPC
│   │   ├── server.ts                   # Server-side tRPC
│   │   ├── routers/                    # tRPC routers
│   │   │   ├── agents.ts               # Agents router
│   │   │   └── index.ts                # Root router
│   │   └── providers.tsx               # React Query provider
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

### Configuración tRPC Segura

```typescript
// Procedimientos protegidos implementados:
export const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  
  return next({
    ctx: {
      ...ctx,
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

// Validación de entrada con Zod:
export const agentCreateSchema = z.object({
  name: z.string().min(1).max(100),
  type: z.enum(['psychology', 'education', 'technology']),
  description: z.string().min(10).max(500),
});

// Características de seguridad:
✅ Input validation con Zod
✅ Protected procedures para autenticación
✅ Type-safe database queries
✅ SQL injection prevention
✅ XSS protection automática
✅ CSRF protection integrada
```

## 🐛 Solución de Problemas

### Error: tRPC not working
```bash
# Verificar instalación:
npm install @trpc/server @trpc/client @trpc/next @trpc/react-query
npm install @tanstack/react-query

# Verificar configuración en next.config.js:
experimental: {
  serverComponentsExternalPackages: ['@trpc/server']
}
```

### Error: React Query hydration mismatch
```bash
# Verificar HydrationBoundary setup:
<HydrationBoundary state={dehydrate(queryClient)}>
  <YourComponent />
</HydrationBoundary>

# Verificar prefetching en server:
void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
```

### Error: Sidebar not responsive
```bash
# Verificar SidebarProvider:
<SidebarProvider>
  <DashboardSidebar />
  <main>...</main>
</SidebarProvider>

# Verificar breakpoints:
.md:hidden    # Mobile-only
.hidden.md:block  # Desktop-only
```

### Error: Space loader not animating
```bash
# Verificar CSS Modules:
1. loader.module.css existe
2. Importación correcta: import styles from './loader.module.css'
3. Clases aplicadas: className={styles.spaceLoader}

# Verificar animaciones CSS:
will-change: transform;
animation: float 3s ease-in-out infinite;
```

## 📈 Roadmap 2025

### Q1 2025 - Funcionalidades Core
- [ ] **Sistema de Videollamadas** - Integración con WebRTC/Jitsi
- [ ] **Agentes IA Especializados** - Psicología, educación, tecnología
- [ ] **Chat en Tiempo Real** - Comunicación previa a videollamadas
- [ ] **Historial de Sesiones** - Registro y replay de interacciones
- [ ] **Configuración de Perfil** - Edición completa de datos de usuario
- [ ] **tRPC Subscriptions** - Real-time updates con WebSockets

### Q2 2025 - UX y Performance
- [ ] **Sistema de Notificaciones** - Push notifications y alertas
- [ ] **Tema Oscuro/Claro** - Toggle completo de modo de visualización
- [ ] **Internacionalización** - Soporte multi-idioma (ES, EN, FR)
- [ ] **PWA Completa** - App instalable con service workers
- [ ] **Optimización Mobile** - Mejoras adicionales para UX móvil
- [ ] **Command Palette Avanzado** - Búsqueda global y shortcuts

### Q3 2025 - Escalabilidad
- [ ] **API REST Completa** - Endpoints para integraciones externas
- [ ] **Dashboard Analytics** - Métricas de uso y engagement
- [ ] **Sistema de Pagos** - Planes premium con Stripe
- [ ] **Multi-tenancy** - Soporte para organizaciones
- [ ] **Admin Panel** - Panel de administración completo
- [ ] **Redis Cache** - Caching avanzado para performance

### Q4 2025 - IA Avanzada
- [ ] **IA Avanzada** - Integración con GPT-4, Claude, Gemini
- [ ] **Voice AI** - Procesamiento de voz en tiempo real
- [ ] **Tests Automatizados** - Suite completa E2E con Playwright
- [ ] **Documentación API** - Swagger/OpenAPI completo
- [ ] **Aplicación Móvil** - React Native para iOS/Android
- [ ] **AI Analytics** - Métricas avanzadas de IA

### Mejoras Técnicas Continuas v1.3+
- [ ] **Micro-frontends** - Arquitectura modular avanzada
- [ ] **Edge Functions** - Optimización con Vercel Edge
- [ ] **CI/CD Pipeline** - GitHub Actions completo
- [ ] **Monitoring** - Sentry + Analytics detallados
- [ ] **Security Audit** - Auditoría de seguridad profesional
- [ ] **Performance Optimization** - Core Web Vitals perfectos

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

### Estándares de Código v1.2

```bash
# Herramientas utilizadas:
✅ TypeScript estricto habilitado
✅ ESLint para linting automático
✅ Prettier para formateo consistente
✅ Husky para pre-commit hooks
✅ Conventional Commits para mensajes
✅ tRPC para type safety
✅ Zod para validación de schemas

# Estructura de commits:
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o modificar tests
chore: cambios en build/tools
trpc: cambios en API tRPC
ui: cambios en componentes UI
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
✅ tRPC integration para data fetching
✅ Error boundaries para error handling
✅ Loading states para UX
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

### 🛠️ Tecnologías y Expertise v1.2

```
Frontend:    React, Next.js, TypeScript, Tailwind CSS, Shadcn/UI
Backend:     tRPC, React Query, Zod, Node.js, PostgreSQL
Database:    Drizzle ORM, Neon, SQL
Auth:        BetterAuth, OAuth (Google, GitHub), JWT
Tools:       Git, Docker, Vercel, VS Code, Drizzle Studio
Design:      Figma, Glassmorphism, Responsive Design, CSS Animations
API:         Type-safe APIs, Server-side prefetching, Real-time updates
```

### 📊 Estadísticas del Proyecto

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/felipesanchez-dev/agentesia?style=social)
![GitHub Forks](https://img.shields.io/github/forks/felipesanchez-dev/agentesia?style=social)
![GitHub Issues](https://img.shields.io/github/issues/felipesanchez-dev/agentesia)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/felipesanchez-dev/agentesia)
![Lines of Code](https://img.shields.io/tokei/lines/github/felipesanchez-dev/agentesia)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trpc/client)

</div>

### 🏆 Logros Técnicos v1.2

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat&logo=typescript)
![Performance](https://img.shields.io/badge/Performance-95+-green?style=flat&logo=lighthouse)
![Accessibility](https://img.shields.io/badge/Accessibility-AA-green?style=flat&logo=accessibility)
![Security](https://img.shields.io/badge/Security-A+-green?style=flat&logo=security)
![SEO](https://img.shields.io/badge/SEO-Optimized-green?style=flat&logo=google)

</div>

---

<div align="center">
  <h3>🚀 COGNIMEET v1.2.0 - Conecta • Colabora • Crece</h3>
  <p><strong>Desarrollado por Felipe Reyes Sanchez</strong></p>
  <p><em>"El futuro de la comunicación IA está aquí - Ahora con tRPC & Type Safety"</em></p>
  
  <br>
  
  <img src="https://img.shields.io/badge/Made_with-Love_and_Code-red?style=for-the-badge" alt="Made with Love and Code" />
  <img src="https://img.shields.io/badge/Powered_by-tRPC_&_Next.js-blue?style=for-the-badge" alt="Powered by tRPC & Next.js" />
  <img src="https://img.shields.io/badge/Designed_for-Future_of_AI-green?style=for-the-badge" alt="Designed for Future of AI" />
  
  <br><br>
  
  **⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**
  
  <br>
  
  **🔄 v1.2.0 - Nueva actualización con tRPC, React Query y Shadcn Sidebar**
</div>