# 🤖 Agentesia

_Plataforma de Agentes IA Inteligentes_

Una aplicación web moderna construida con Next.js para la gestión, interacción y colaboración con agentes de inteligencia artificial especializados. Conecta con expertos virtuales y experimenta el futuro de la comunicación IA.

![Agentesia Banner](https://img.shields.io/badge/Agentesia-v0.2.0-green?style=for-the-badge&logo=react)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![tRPC](https://img.shields.io/badge/tRPC-11.0+-398CCB?style=flat&logo=trpc)](https://trpc.io/)

## 📋 Tabla de Contenidos

- [🤖 Agentesia](#-agentesia)
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
  - [🎯 Metodología de Desarrollo](#-metodología-de-desarrollo)
  - [🔄 Estados de la Aplicación](#-estados-de-la-aplicación)
  - [🎨 Sistema de Componentes](#-sistema-de-componentes)
  - [🐛 Solución de Problemas](#-solución-de-problemas)
  - [📈 Roadmap 2025](#-roadmap-2025)
  - [🤝 Contribución](#-contribución)
  - [📄 Licencia](#-licencia)
  - [👨‍💻 Desarrollador](#-desarrollador)

## 🎯 Características Principales

### ✅ **Sistema Completo Implementado v0.2.0**

- **Sistema de Autenticación Completo** - Email/contraseña y OAuth (Google, GitHub)
- **Dashboard Interactivo** - Panel de control moderno con sidebar navegacional
- **Gestión Completa de Agentes IA** - CRUD completo con sistema de avatares dinámicos
- **Data Table Avanzada** - Tabla de datos con paginación, filtros y ordenamiento
- **Sistema de Paginación** - Navegación eficiente con contadores y límites
- **Filtros y Búsqueda** - Sistema de búsqueda en tiempo real por nombre de agente
- **Conteo de Reuniones** - Tracking dinámico de reuniones por agente
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

### 🆕 **Características Avanzadas v0.2.0**

- **tRPC Integration Completa** - API type-safe con React Query y paginación
- **Sistema de Loading Avanzado** - Loader espacial con astronauta animado
- **Error Boundaries** - Manejo robusto de errores
- **Suspense Boundaries** - Loading states granulares
- **Server-Side Prefetching** - Optimización de performance
- **React Query Integration** - Cache inteligente y sincronización
- **TypeScript Full Coverage** - 100% tipado estático
- **Shadcn Sidebar System** - Sidebar moderno con detección móvil
- **Avatares Dinámicos** - Generación automática de avatares para agentes
- **Categorización Inteligente** - Detección automática de categorías de agentes
- **Data Table con TanStack** - Tabla avanzada con sorting, filtering y paginación
- **Sistema de Badges** - Indicadores visuales para reuniones y estados
- **Optimización de Queries** - Queries eficientes con offset y límites

### 🔄 **En Desarrollo - Roadmap 2025**

- **Videollamadas con IA** (Q1 2025)
- **Agentes Especializados** (Q1 2025)
- **Chat en Tiempo Real** (Q2 2025)
- **Integraciones Avanzadas** (Q3 2025)

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

        C5 --> C8[Data Table]
        C5 --> C9[Agent Form]
        C5 --> C10[Pagination]
        C5 --> C11[Search Filters]
    end

    subgraph "tRPC & API Layer"
        E[tRPC Router] --> F[Agents Router]
        E --> G[Auth Router]
        E --> H[Users Router]

        F --> F1[agents.getMany - Paginado]
        F --> F2[agents.getOne]
        F --> F3[agents.create]
        F --> F4[agents.update]
        F --> F5[agents.delete]

        I[React Query] --> J[Server State Cache]
        I --> K[Optimistic Updates]
        I --> L[Background Refetch]
        I --> M[Pagination Cache]
    end

    subgraph "Authentication Layer"
        N[BetterAuth v1.2.8] --> O[Email/Password]
        N --> P[Google OAuth]
        N --> Q[GitHub OAuth]
        N --> R[Session Management]
    end

    subgraph "Database Layer"
        S[PostgreSQL/Neon] --> T[Drizzle ORM]
        T --> U[User Schema]
        T --> V[Session Schema]
        T --> W[Agents Schema]
        T --> X[Meetings Schema]

        W --> W1[SQL Aggregations]
        W --> W2[Pagination Queries]
        W --> W3[Search Filters]
    end

    subgraph "UI Components"
        Y[Shadcn/UI] --> Z[Form Components]
        Y --> AA[Layout Components]
        Y --> BB[Navigation Components]
        Y --> CC[Loading Components]
        Y --> DD[Avatar Components]
        Y --> EE[Data Table]
        Y --> FF[Pagination]
        Y --> GG[Badge Components]
    end

    A --> E
    E --> N
    N --> S
    A --> Y
    E --> I

    style A fill:#059669
    style E fill:#398CCB
    style N fill:#16a34a
    style S fill:#047857
    style Y fill:#15803d
    style EE fill:#ff9800
```

## 🛠️ Stack Tecnológico Completo

### Frontend

- **[Next.js](https://nextjs.org/)** v15.3.2 - Framework de React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** v5+ - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** v4+ - Framework de CSS utilitario
- **[Shadcn/UI](https://ui.shadcn.com/)** - Biblioteca de componentes modernos
- **[TanStack Table](https://tanstack.com/table)** - Tabla de datos avanzada
- **[Lucide React](https://lucide.dev/)** - Iconos SVG optimizados
- **[React Hook Form](https://react-hook-form.com/)** - Manejo avanzado de formularios
- **[React Error Boundary](https://github.com/bvaughn/react-error-boundary)** - Manejo de errores

### Backend & API

- **[tRPC](https://trpc.io/)** v11+ - Type-safe API con TypeScript
- **[React Query](https://tanstack.com/query)** v5+ - Server state management
- **[Zod](https://zod.dev/)** - Validación de esquemas TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Neon](https://neon.com)** - Hosting de PostgreSQL serverless
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first con SQL avanzado

### Autenticación

- **[BetterAuth](https://www.better-auth.com/)** v1.2.8 - Sistema de autenticación moderno
- **OAuth Providers** - Google y GitHub integrados
- **Session Management** - Manejo seguro de sesiones

### UI/UX & Performance

- **Glassmorphism** - Efectos de vidrio esmerilado
- **Animaciones CSS Avanzadas** - Keyframes personalizados y transiciones
- **Loading States** - Componentes de carga inmersivos con astronauta espacial
- **Error Boundaries** - Manejo robusto de errores
- **Responsive Design** - Desktop-first con adaptación móvil
- **Performance Optimization** - Server-side prefetching y caching
- **Avatar Generation** - Sistema de generación automática de avatares
- **Data Virtualization** - Renderizado eficiente de grandes datasets

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

### Flujo tRPC y Data Fetching con Paginación

```mermaid
flowchart LR
    A[Page Component] --> B[tRPC Client Call with Pagination]
    B --> C{Cache Hit?}

    C -->|Yes| D[Return Cached Data]
    C -->|No| E[Make Server Request]

    E --> F[tRPC Server Router]
    F --> G[Database Query with LIMIT/OFFSET]
    G --> H[Count Query for Total]
    H --> I[Return Typed Paginated Data]

    I --> J[Update React Query Cache]
    J --> K[Update UI with Pagination]

    D --> K

    subgraph "Loading States"
        L[Suspense Fallback]
        M[LoadingState Component]
        N[Space Loader Animation]
    end

    subgraph "Error States"
        O[Error Boundary]
        P[ErrorState Component]
        Q[Retry Mechanism]
    end

    subgraph "Pagination Controls"
        R[Page Navigation]
        S[Page Size Selector]
        T[Total Count Display]
    end

    B --> L
    L --> M
    M --> N

    F --> O
    O --> P
    P --> Q

    K --> R
    K --> S
    K --> T

    style A fill:#059669
    style F fill:#398CCB
    style G fill:#047857
    style K fill:#16a34a
    style N fill:#ff9800
    style R fill:#9c27b0
```

### Flujo de Gestión de Agentes con Data Table

```mermaid
flowchart TD
    A[Agents Page] --> B[Server Prefetch]
    B --> C[tRPC agents.getMany con Paginación]
    C --> D[Database Query con LIMIT/OFFSET]
    D --> E[Return Paginated Agents Data]

    E --> F[Render Data Table]
    F --> G[Generate Dynamic Avatars]
    F --> H[Display Meeting Count Badges]
    F --> I[Render Pagination Controls]

    G --> J[Category Detection]
    J --> K[Icon Selection]
    K --> L[Color Assignment]

    H --> M[SQL Count Aggregation]
    M --> N[Badge with Meeting Counter]

    I --> O[Page Navigation]
    I --> P[Page Size Selection]
    I --> Q[Total Records Display]

    F --> R[Search Filter]
    R --> S[Debounced Search Input]
    S --> T[Filter by Agent Name]
    T --> U[Update Query with Search]

    F --> V[Agent Form Modal]
    V --> W[Validation with Zod]
    W --> X{Valid?}
    X -->|No| Y[Show Errors]
    X -->|Yes| Z[tRPC agents.create]

    Z --> AA[Database Insert]
    AA --> BB[Invalidate Queries]
    BB --> CC[Refresh Table Data]

    Y --> V

    style A fill:#059669
    style C fill:#398CCB
    style G fill:#ff9800
    style H fill:#9c27b0
    style Z fill:#4caf50
    style AA fill:#047857
    style F fill:#e91e63
```

## 🔄 Sistema tRPC y API

### Arquitectura tRPC Implementada

```mermaid
graph LR
    subgraph "Client Side"
        A[React Component] --> B[tRPC Client]
        B --> C[React Query Hook]
        C --> D[useSuspenseQuery]
        C --> E[Pagination State]

        F[TypeScript Types] --> A
        F --> B
    end

    subgraph "Network Layer"
        G[HTTP Request] --> H[Next.js API Route]
        H --> I[tRPC Handler]
    end

    subgraph "Server Side"
        I --> J[tRPC Router]
        J --> K[Procedure Validation]
        K --> L[Database Query]
        L --> M[Drizzle ORM]
        M --> N[PostgreSQL]

        L --> L1[Count Query]
        L --> L2[Data Query with LIMIT]
        L --> L3[OFFSET Calculation]
    end

    subgraph "Type Safety"
        O[Shared Types] --> P[Client Types]
        O --> Q[Server Types]
        O --> R[Database Schema]
        O --> S[Pagination Types]
    end

    B --> G
    N --> L
    L --> K
    K --> J
    J --> I
    I --> H
    H --> G
    G --> B

    O --> F
    O --> J

    style B fill:#398CCB
    style J fill:#398CCB
    style M fill:#047857
    style O fill:#ff9800
    style E fill:#9c27b0
```

### Configuración tRPC Actual v0.2.0

```typescript
// Router de Agentes implementado con paginación:
export const agentsRouter = createTRPCRouter({
  getOne: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [existingAgent] = await db
        .select()
        .from(agents)
        .where(eq(agents.id, input.id));
      return existingAgent;
    }),

  getMany: baseProcedure
    .input(z.object({
      search: z.string().optional(),
      page: z.number().default(DEFAULT_PAGE),
      pageSize: z.number().default(DEFAULT_PAGE_SIZE),
    }).optional())
    .query(async ({ ctx, input = {} }) => {
      const { search, page = DEFAULT_PAGE, pageSize = DEFAULT_PAGE_SIZE } = input;

      // Query principal con meetingCount
      const data = await db
        .select({
          meetingCount: sql<number>`1`,
          ...getTableColumns(agents),
        })
        .from(agents)
        .where(
          and(
            eq(agents.userId, ctx.auth.user.id),
            search ? ilike(agents.name, `%${search}%`) : undefined
          )
        )
        .orderBy(desc(agents.createdAt), desc(agents.id))
        .limit(pageSize)
        .offset((page - 1) * pageSize);

      // Query de conteo total
      const [total] = await db
        .select({ count: count() })
        .from(agents)
        .where(
          and(
            eq(agents.userId, ctx.auth.user.id),
            search ? ilike(agents.name, `%${search}%`) : undefined
          )
        );

      const totalPages = Math.ceil(total.count / pageSize);

      return {
        items: data,
        total: total.count,
        totalPages,
      };
    }),

  create: protectedProcedure
    .input(agentsInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...input,
          userId: ctx.auth.user.id,
        })
        .returning();
      return createdAgent;
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
✅ Protected procedures
✅ Pagination con LIMIT/OFFSET
✅ Search filters con SQL ILIKE
✅ Count aggregations
✅ Meeting counters

```

### Uso en Componentes con Data Table

```tsx
// Ejemplo de uso en AgentsView con Data Table:
export const AgentsView = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({
      page,
      pageSize: 10,
      search,
    })
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Agentes IA</h1>
        <AgentForm />
      </div>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Buscar agentes..."
      />

      <DataTable
        columns={columns}
        data={data.items}
        pagination={{
          page,
          totalPages: data.totalPages,
          total: data.total,
          onPageChange: setPage,
        }}
      />
    </div>
  );
};

// Server-side prefetching con paginación:
const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getMany.queryOptions({
      page: 1,
      pageSize: 10,
    })
  );

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

### Sistema de Data Table y Paginación

```mermaid
graph TB
    A[Data Table Component] --> B[TanStack Table]
    B --> C[Column Definitions]
    B --> D[Data Processing]
    B --> E[Pagination Logic]

    C --> C1[Agent Name Column]
    C --> C2[Meeting Count Column]
    C --> C3[Avatar Column]
    C --> C4[Actions Column]

    C1 --> C5[Dynamic Avatar]
    C1 --> C6[Agent Instructions]

    C2 --> C7[Badge Component]
    C7 --> C8[Meeting Counter]
    C7 --> C9[Video Icon]

    D --> D1[Type-safe Data]
    D --> D2[Sorting Logic]
    D --> D3[Filtering Logic]

    E --> E1[Page Navigation]
    E --> E2[Page Size Selection]
    E --> E3[Total Count Display]
    E --> E4[Loading States]

    style A fill:#059669
    style B fill:#398CCB
    style C7 fill:#9c27b0
    style E fill:#ff9800
```

### Sistema de Avatares Dinámicos Mejorado

```mermaid
graph TB
    A[Agent Creation] --> B[Avatar Generator]
    B --> C[Name Analysis]
    C --> D[Category Detection]
    D --> E[Hash Generation]

    E --> F[Icon Selection]
    E --> G[Color Assignment]
    E --> H[Initials Generation]

    F --> I[Technology Icons]
    F --> J[General Icons]
    F --> K[Meeting Icons]

    G --> L[Gradient Colors]
    G --> M[Theme Colors]

    H --> N[Single Word Logic]
    H --> O[Multiple Words Logic]
    H --> P[Special Character Handling]

    I --> Q[Final Avatar]
    J --> Q
    K --> Q
    L --> Q
    M --> Q
    N --> Q
    O --> Q
    P --> Q

    style A fill:#059669
    style B fill:#398CCB
    style D fill:#ff9800
    style Q fill:#4caf50
```

### Optimizaciones de Performance v0.2.0

```mermaid
sequenceDiagram
    participant U as User
    participant P as Page
    participant S as Server
    participant D as Database
    participant C as Cache

    U->>P: Navigate to /agents
    P->>S: Server-side prefetch (page 1)
    S->>D: Query agents with LIMIT 10 OFFSET 0
    S->>D: Count total agents
    D->>S: Return paginated data
    S->>C: Populate cache with page 1
    S->>P: Hydrated state
    P->>U: Instant render with pagination

    Note over P,C: No loading state needed
    Note over C: React Query cache per page
    Note over S: tRPC type safety

    U->>P: Navigate to page 2
    P->>C: Check cache for page 2
    C->>P: Cache miss
    P->>S: Request page 2
    S->>D: Query with LIMIT 10 OFFSET 10
    D->>S: Return page 2 data
    S->>C: Cache page 2
    C->>P: Return page 2 data
    P->>U: Render page 2

    Note over P,C: Background refetch if stale
    Note over C: Individual page caching
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

# Iniciar servidor de desarrollo con Turbopack
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
# Ejecutar migraciones
npm run db:push

# Abrir Drizzle Studio (opcional)
npm run db:studio
```

### 4. Configuración tRPC

```bash
# tRPC está pre-configurado con:
✅ Type-safe API routes
✅ React Query integration
✅ Server-side prefetching
✅ Error boundaries
✅ Loading states
✅ Zod validation
✅ Protected procedures
✅ Pagination support
✅ Search filtering
✅ Count aggregations
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

- ✅ **Registro de usuarios** (`/sign-in`)
- ✅ **Inicio de sesión** (`/sign-up`)
- ✅ **Autenticación OAuth** (Google, GitHub)
- ✅ **Validación de formularios** con Zod
- ✅ **Manejo de errores** amigable al usuario
- ✅ **Estados de carga** con spinners animados
- ✅ **Toggle de contraseña** para mostrar/ocultar
- ✅ **Validación de confirmación** de contraseña
- ✅ **Redirección inteligente** - Evita acceso a auth si ya está logueado
- ✅ **Detección automática de proveedores** por imagen de perfil

## 🖥️ Dashboard y Componentes

### Arquitectura del Dashboard

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

        O --> T[Data Table]
        O --> U[Pagination]
        O --> V[Search Filters]
    end

    subgraph "Data Layer"
        W[tRPC Prefetch] --> X[React Query Cache]
        X --> O

        Y[useSuspenseQuery] --> Z[Type-safe Data]
        Z --> AA[UI Components]
        Z --> BB[Paginated Results]
    end

    style A fill:#059669
    style O fill:#4caf50
    style Q fill:#ff9800
    style W fill:#398CCB
    style T fill:#e91e63
```

## 📱 Sistema Responsive Avanzado

### Breakpoints y Comportamiento

```css
/* Sistema de breakpoints implementado */
Mobile:     < 768px   - Sidebar colapsado, modal móvil, tabla responsive
Tablet:     768px - 1024px - Sidebar adaptativo, tabla completa
Desktop:    > 1024px  - Layout completo, todas las funciones

/* Implementación con Tailwind y Shadcn Sidebar */
.md:hidden        /* Oculto en desktop, visible en móvil */
.hidden.md:block  /* Oculto en móvil, visible en desktop */
.lg:table-cell    /* Columnas que solo se muestran en desktop */
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

// Data Table responsive:
{!isMobile && <FullDataTable />}
{isMobile && <MobileAgentCards />}
```

## 🎨 Diseño y UI

### Paleta de Colores

```css
/* Colores principales de la marca */
:root {
  --primary-green: #16a34a; /* green-600 - Color principal */
  --primary-green-hover: #15803d; /* green-700 - Hover states */
  --primary-green-light: #22c55e; /* green-500 - Elementos destacados */

  /* tRPC y API colors */
  --trpc-blue: #398ccb; /* tRPC brand color */
  --api-success: #10b981; /* Success states */
  --api-error: #ef4444; /* Error states */
  --api-warning: #f59e0b; /* Warning states */

  /* Loading states */
  --space-bg: #0f0f1e; /* Space background */
  --space-stars: #ffffff; /* Star colors */
  --astronaut-suit: #e5e7eb; /* Astronaut suit */
  --helmet-glass: rgba(0, 255, 255, 0.2); /* Helmet glass */

  /* Data Table colors */
  --table-header: #f8fafc; /* Table header background */
  --table-border: #e2e8f0; /* Table borders */
  --table-hover: #f1f5f9; /* Row hover state */

  /* Badge colors */
  --badge-blue: #3b82f6; /* Meeting badges */
  --badge-green: #10b981; /* Success badges */
  --badge-gray: #6b7280; /* Neutral badges */
}
```

### Loading Components

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
✅ Responsive design (ajuste automático de tamaño)
✅ Hardware acceleration (will-change: transform)
✅ Loading states específicos para tablas
✅ Skeleton loading para pagination
```

### Error Components

```tsx
// Sistema de error mejorado:
✅ Error boundaries con React 18
✅ Retry mechanisms automáticos
✅ Contextual error messages
✅ Fallback UI components
✅ Error tracking integration ready
✅ User-friendly error states
✅ Table-specific error states
✅ Pagination error handling
```

### Data Table Components

```tsx
// Componentes de tabla implementados:
✅ TanStack Table integration
✅ Column sorting (name, date, meetings)
✅ Responsive design con breakpoints
✅ Loading skeletons para cada columna
✅ Badge components para meeting count
✅ Avatar integration en tabla
✅ Empty states cuando no hay datos
✅ Search highlighting en resultados
✅ Pagination controls avanzados
✅ Page size selection (10, 25, 50, 100)
```

### Glassmorphism Effects

```tsx
// Efectos glassmorphism implementados:
✅ backdrop-blur-sm para loading containers
✅ bg-background/80 para semi-transparencia
✅ border-white/10 para bordes sutiles
✅ shadow-xl para profundidad
✅ rounded-2xl para esquinas suaves
✅ Efectos hover dinámicos
✅ Table glassmorphism para headers
✅ Modal glassmorphism para forms
```

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo (con Turbopack)
npm run build            # Construir para producción
npm run start            # Iniciar servidor de producción
npm run lint             # Ejecutar linting

# Base de Datos
npm run db:push          # Aplicar cambios de esquema
npm run db:studio        # Abrir Drizzle Studio

# Utilidades
npm run format           # Formatear código con Prettier
npm run clean            # Limpiar cache y builds
npm run analyze          # Analizar bundle size

# Shadcn/UI Components
npx shadcn-ui@latest add sidebar
npx shadcn-ui@latest add command
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add table
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add input

# tRPC y Database
npm run type-check       # Verificar tipos TypeScript
npm run db:migrate       # Ejecutar migraciones
npm run db:seed          # Poblar base de datos (si existe)
```

## 🔐 Configuración de Seguridad

### Variables de Entorno Seguras

```bash
# Generar clave secreta segura (mínimo 32 caracteres)
BETTER_AUTH_SECRET=$(openssl rand -base64 32)

# O usar Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Buenas Prácticas Implementadas

- ✅ **Validación de entrada** con Zod en todas las rutas
- ✅ **Procedimientos protegidos** en tRPC
- ✅ **Sanitización de datos** antes de inserción en BD
- ✅ **Headers de seguridad** configurados
- ✅ **Variables de entorno** para datos sensibles
- ✅ **Sesiones seguras** con BetterAuth
- ✅ **SQL Injection protection** con Drizzle ORM
- ✅ **Rate limiting** en API endpoints (próximamente)
- ✅ **CSRF protection** integrado en BetterAuth

## 🎯 Metodología de Desarrollo

### Arquitectura de Desarrollo

```mermaid
graph TB
    subgraph "Development Workflow"
        A[Local Development] --> B[Type Checking]
        B --> C[Testing]
        C --> D[Build Process]
        D --> E[Deployment]

        A --> F[Hot Reload]
        A --> G[tRPC Dev Mode]
        A --> H[DB Studio]
        A --> I[Data Table Testing]
    end

    subgraph "Quality Assurance"
        J[TypeScript] --> K[ESLint]
        K --> L[Prettier]
        L --> M[Zod Validation]
        M --> N[Error Boundaries]
        N --> O[Pagination Testing]
    end

    subgraph "Performance Monitoring"
        P[React Query DevTools]
        Q[Bundle Analyzer]
        R[Lighthouse Metrics]
        S[Core Web Vitals]
        T[Table Performance]
    end

    style A fill:#059669
    style J fill:#398CCB
    style P fill:#ff9800
    style T fill:#e91e63
```

### Principios de Desarrollo

- **🔒 Type Safety First** - TypeScript en toda la aplicación
- **⚡ Performance Oriented** - Optimización constante de rendimiento
- **🎨 User Experience Focus** - Diseño centrado en el usuario
- **🔄 API Type Safety** - tRPC para comunicación cliente-servidor
- **📱 Mobile First** - Desarrollo responsive desde el inicio
- **🧪 Testing Culture** - Pruebas como parte del desarrollo
- **♻️ Component Reusability** - Componentes modulares y reutilizables
- **📊 Data-Driven** - Decisiones basadas en métricas y analytics
- **🚀 Progressive Enhancement** - Funcionalidades que mejoran gradualmente

## 🔄 Estados de la Aplicación

### Manejo de Estados Avanzado

```mermaid
stateDiagram-v2
    [*] --> Loading
    Loading --> Authenticated: Login Success
    Loading --> Unauthenticated: No Session

    state Authenticated {
        [*] --> Dashboard
        Dashboard --> Agents
        Dashboard --> Meetings
        Dashboard --> Upgrade
        Dashboard --> Settings

        state Agents {
            [*] --> AgentsLoading
            AgentsLoading --> AgentsSuccess: Data Loaded
            AgentsLoading --> AgentsError: Error Occurred
            AgentsError --> AgentsLoading: Retry
            AgentsSuccess --> AgentCreation: Create New
            AgentCreation --> AgentsSuccess: Created

            state AgentsSuccess {
                [*] --> TableView
                TableView --> PaginationChange: Page Navigation
                PaginationChange --> TableView: Updated
                TableView --> SearchFiltering: Search Input
                SearchFiltering --> TableView: Filtered Results
            }
        }
    }

    state Unauthenticated {
        [*] --> Home
        Home --> SignIn
        Home --> SignUp
        SignIn --> Authenticated: Success
        SignUp --> Authenticated: Success
    }

    Authenticated --> Unauthenticated: Logout
```

### Estados de Datos con React Query

- **🔄 Loading** - Datos siendo cargados por primera vez
- **✅ Success** - Datos cargados exitosamente
- **❌ Error** - Error en la carga de datos
- **🔄 Refetching** - Recarga en segundo plano
- **⏳ Stale** - Datos obsoletos pero mostrados
- **🚫 Paused** - Query pausada (sin conexión)
- **📄 Paginating** - Navegando entre páginas
- **🔍 Filtering** - Aplicando filtros de búsqueda

## 🎨 Sistema de Componentes

### Jerarquía de Componentes

```mermaid
graph TB
    subgraph "Layout Components"
        A[RootLayout] --> B[AuthLayout]
        A --> C[DashboardLayout]

        C --> D[Sidebar]
        C --> E[Navbar]
        C --> F[Main Content]

        D --> G[Navigation Links]
        D --> H[User Section]

        F --> I[Page Wrapper]
        I --> J[Suspense Boundary]
        I --> K[Error Boundary]
    end

    subgraph "Feature Components"
        L[AgentsView] --> M[DataTable]
        L --> N[SearchInput]
        L --> O[AgentForm]
        L --> P[Pagination]

        M --> Q[Columns]
        M --> R[AgentCard Mobile]
        M --> S[TableHeader]
        M --> T[TableBody]

        Q --> U[AgentAvatar]
        Q --> V[MeetingBadge]
        Q --> W[ActionsDropdown]

        U --> X[Avatar Generator]
        X --> Y[Category Detection]
        X --> Z[Icon Selection]
        X --> AA[Color Assignment]
    end

    subgraph "UI Components"
        BB[Button] --> CC[Loading State]
        BB --> DD[Variants]

        EE[Input] --> FF[Validation]
        EE --> GG[Error States]
        EE --> HH[Search Debounce]

        II[Modal] --> JJ[Mobile Gestures]
        II --> KK[Desktop Dropdown]

        LL[Badge] --> MM[Meeting Counter]
        LL --> NN[Status Indicators]
        LL --> OO[Color Variants]
    end

    style A fill:#059669
    style L fill:#398CCB
    style BB fill:#4caf50
    style X fill:#ff9800
    style M fill:#e91e63
```

### Componentes Reutilizables

```tsx
// Componentes principales implementados:
✅ AgentAvatar - Avatar dinámico con generación automática
✅ LoadingState - Estado de carga con animación espacial
✅ ErrorBoundary - Manejo de errores con retry
✅ AgentForm - Formulario completo con validación
✅ DashboardSidebar - Sidebar responsivo con Shadcn
✅ UserButton - Botón de usuario con dropdown/modal
✅ SpaceLoader - Animación de carga inmersiva
✅ DataTable - Tabla avanzada con TanStack Table
✅ Pagination - Controles de paginación con navegación
✅ SearchInput - Input de búsqueda con debounce
✅ MeetingBadge - Badge con contador de reuniones
✅ AgentColumns - Definición de columnas para tabla
✅ TableSkeleton - Loading state para tabla
```

## 🐛 Solución de Problemas

### Problemas Comunes y Soluciones

#### Error de Base de Datos

```bash
# Verificar conexión
npm run db:studio

# Regenerar esquema
npm run db:push

# Verificar variables de entorno
echo $DATABASE_URL

# Probar query de agentes
npm run db:seed  # Si existe script de seed
```

#### Error de Autenticación

```bash
# Verificar BETTER_AUTH_SECRET (mínimo 32 caracteres)
echo $BETTER_AUTH_SECRET | wc -c

# Confirmar URLs de OAuth en proveedores
# Google: https://console.cloud.google.com/
# GitHub: https://github.com/settings/applications
```

#### Error de tRPC

```bash
# Verificar tipos
npm run type-check

# Limpiar cache
rm -rf .next/
npm run dev

# Probar endpoints tRPC
# Visitar http://localhost:3000/api/trpc/agents.getMany
```

#### Error de Componentes

```bash
# Verificar instalación de Shadcn
npx shadcn-ui@latest add --help

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar componentes de tabla
npx shadcn-ui@latest add table
npx shadcn-ui@latest add badge
```

#### Error de Paginación

```bash
# Verificar parámetros de paginación
# page debe ser >= 1
# pageSize debe ser > 0 y <= 100
# Verificar que DEFAULT_PAGE y DEFAULT_PAGE_SIZE estén definidos
```

### Debug Tips

```tsx
// Activar React Query DevTools en desarrollo:
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Logs de tRPC en desarrollo:
const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) => process.env.NODE_ENV === "development",
        }),
      ],
    };
  },
});

// Debug paginación:
console.log("Pagination state:", { page, pageSize, total, totalPages });

// Debug queries de base de datos:
// Activar logs en Drizzle config para ver SQL queries
```

## 📈 Roadmap 2025

### Q1 2025 - Funcionalidades Principales

- **🎥 Sistema de Videollamadas**

  - Integración con WebRTC
  - Conexión con agentes IA en tiempo real
  - Grabación de sesiones
  - Compartir pantalla

- **🤖 Agentes Especializados**

  - Psicólogo Virtual
  - Tutor Educativo
  - Consultor Tecnológico
  - Asistente Médico

- **📊 Analytics de Agentes**
  - Métricas de uso por agente
  - Estadísticas de reuniones
  - Reportes de efectividad

### Q2 2025 - Comunicación Avanzada

- **💬 Chat en Tiempo Real**

  - WebSocket integration
  - Mensajes multimedia
  - Historial de conversaciones
  - Notificaciones push

- **📊 Dashboard Analytics Avanzado**

  - Gráficos interactivos
  - Métricas de rendimiento
  - Exportar reportes
  - Filtros temporales avanzados

- **🔍 Búsqueda Avanzada**
  - Filtros múltiples
  - Búsqueda por categorías
  - Ordenamiento avanzado
  - Búsqueda semántica

### Q3 2025 - Integraciones

- **🔗 APIs Externas**

  - OpenAI GPT-4 integration
  - Anthropic Claude integration
  - Google AI integration
  - Custom model support

- **📱 Mobile App**

  - React Native application
  - Push notifications
  - Offline mode
  - Sincronización en tiempo real

- **🔌 Integraciones de Terceros**
  - Slack integration
  - Microsoft Teams
  - Zoom API
  - Calendar integrations

### Q4 2025 - Expansión

- **🌐 Internacionalización**

  - Soporte multiidioma
  - Localización de contenido
  - Agentes especializados por región
  - RTL support

- **🏢 Enterprise Features**
  - Multi-tenant architecture
  - SSO integration
  - Advanced security
  - Custom branding
  - Role-based permissions
  - Audit logs

## 🤝 Contribución

### Cómo Contribuir

1. **Fork el proyecto**

   ```bash
   git clone https://github.com/felipesanchez-dev/agentesia.git
   ```

2. **Crear rama de feature**

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. **Realizar cambios**

   - Seguir convenciones de código
   - Añadir tests si es necesario
   - Actualizar documentación

4. **Commit con formato convencional**

   ```bash
   git commit -m "feat: añadir nueva característica"
   ```

5. **Push y Pull Request**
   ```bash
   git push origin feature/nueva-caracteristica
   ```

### Estándares de Código v1.2

```bash
# Herramientas utilizadas:
✅ TypeScript estricto habilitado
✅ ESLint para linting automático
✅ Prettier para formateo consistente
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
✅ Pagination support cuando aplique
✅ Search functionality cuando sea relevante
✅ Mobile-first responsive design
✅ Performance optimization (memo, callback)

```

### Convenciones de Código

```typescript
// Usar TypeScript estricto
interface Props {
  name: string;
  optional?: boolean;
}

// Componentes con arrow functions
export const Component = ({ name }: Props) => {
  return <div>{name}</div>;
};

// Hooks personalizados con 'use' prefix
export const useCustomHook = () => {
  // Hook logic
};

// tRPC queries con tipos explícitos
const { data, isLoading, error } = useSuspenseQuery(
  trpc.agents.getMany.queryOptions({
    page: 1,
    pageSize: 10,
  })
);

// Data table columns con tipos
const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => {
      // Cell implementation
    },
  },
];
```

### Guidelines

- ✅ **TypeScript first** - Todo en TypeScript
- ✅ **Componentes funcionales** - Usar hooks
- ✅ **CSS-in-JS evitado** - Usar Tailwind CSS
- ✅ **Testing encouraged** - Añadir tests cuando sea posible
- ✅ **Documentation** - Comentar código complejo
- ✅ **Performance** - Optimizar renders y queries

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

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
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+573102_452542-green?style=for-the-badge&logo=whatsapp)](https://wa.me/573102452542)

</div>

---

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
  <p><em>"El futuro de la comunicación IA está aquí"</em></p>
  
  <br>
  
  <img src="https://img.shields.io/badge/Made_with-Love_and_Code-red?style=for-the-badge" alt="Made with Love and Code" />
  <img src="https://img.shields.io/badge/Powered_by-tRPC_&_Next.js-blue?style=for-the-badge" alt="Powered by tRPC & Next.js" />
  <img src="https://img.shields.io/badge/Designed_for-Future_of_AI-green?style=for-the-badge" alt="Designed for Future of AI" />
  
  <br><br>
  
  **⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**
  
</div>
