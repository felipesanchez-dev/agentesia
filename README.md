# 🤖 Agentesia

_Plataforma Avanzada de Agentes IA Inteligentes_

Una aplicación web de última generación construida con Next.js 15 para la gestión, interacción y colaboración con agentes de inteligencia artificial especializados. Conecta con expertos virtuales, gestiona reuniones y experimenta el futuro de la comunicación IA.

![Agentesia Banner](https://img.shields.io/badge/Agentesia-v0.3.0-green?style=for-the-badge&logo=react)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![tRPC](https://img.shields.io/badge/tRPC-11.0+-398CCB?style=flat&logo=trpc)](https://trpc.io/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=flat&logo=drizzle)](https://orm.drizzle.team/)

## 📋 Tabla de Contenidos

- [🤖 Agentesia](#-agentesia)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Características Principales](#-características-principales)
  - [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
  - [🛠️ Stack Tecnológico Completo](#️-stack-tecnológico-completo)
  - [📱 Diagramas de Flujo Avanzados](#-diagramas-de-flujo-avanzados)
  - [🔄 Sistema tRPC y API](#-sistema-trpc-y-api)
  - [🎨 Sistema de UI/UX Avanzado](#-sistema-de-uiux-avanzado)
  - [⚙️ Prerequisitos del Entorno](#️-prerequisitos-del-entorno)
  - [🚀 Configuración del Proyecto](#-configuración-del-proyecto)
  - [🎨 Sistema de Autenticación](#-sistema-de-autenticación)
  - [🖥️ Dashboard y Componentes](#️-dashboard-y-componentes)
  - [📊 Sistema de Gestión de Reuniones](#-sistema-de-gestión-de-reuniones)
  - [📱 Sistema Responsive Avanzado](#-sistema-responsive-avanzado)
  - [🎨 Diseño y UI](#-diseño-y-ui)
  - [🔧 Comandos Útiles](#-comandos-útiles)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🔐 Configuración de Seguridad](#-configuración-de-seguridad)
  - [🔄 Estados de la Aplicación](#-estados-de-la-aplicación)
  - [🎨 Sistema de Componentes](#-sistema-de-componentes)
  - [🐛 Solución de Problemas](#-solución-de-problemas)
  - [📈 Roadmap 2025](#-roadmap-2025)
  - [🤝 Contribución](#-contribución)
  - [📄 Licencia](#-licencia)
  - [👨‍💻 Desarrollador](#-desarrollador)

## 🎯 Características Principales

### ✅ **Sistema Completo Implementado v0.3.0**

#### 🤖 **Gestión Avanzada de Agentes IA**
- **CRUD Completo** - Crear, leer, actualizar y eliminar agentes con validación
- **Avatares Dinámicos** - Generación automática con iconos contextuales
- **Sistema de Categorización** - Detección inteligente de tipos de agente
- **Estados de Carga Inmersivos** - Animaciones durante eliminación
- **Notificaciones Toast** - Feedback completo con Sonner
- **Confirmación de Acciones** - Modal de confirmación con variantes
- **Conteo de Reuniones** - Tracking dinámico por agente
- **Búsqueda en Tiempo Real** - Filtrado instant por nombre

#### 📊 **Sistema de Reuniones Completo**
- **Gestión Completa de Meetings** - CRUD con formularios avanzados
- **Selector de Agentes** - CommandSelect con búsqueda y avatares
- **Programación de Videollamadas** - Sistema de agendamiento
- **Estados de Reunión** - Tracking de estados y progreso
- **Filtros Avanzados** - Sistema de filtrado múltiple
- **Paginación Inteligente** - Navegación eficiente con contadores

#### 🎨 **Sistema de UI/UX Avanzado**
- **Diseño Glassmorphism** - Efectos de cristal y transparencias
- **Paginador Moderno** - Controles intuitivos con animaciones
- **Estados de Carga Espaciales** - Loader inmersivo con astronauta
- **Notificaciones Toast** - Sistema completo con Sonner
- **Modales Responsivos** - Adaptación desktop/móvil
- **Gradientes Dinámicos** - Paleta de colores moderna
- **Animaciones Fluidas** - Transiciones suaves en toda la app

#### 🔐 **Autenticación y Seguridad**
- **Sistema de Autenticación Completo** - Email/contraseña y OAuth
- **Protección de Rutas** - Middleware de autenticación
- **Gestión de Sesiones** - BetterAuth v1.2.8
- **Validación Robusta** - Zod en formularios y API
- **Estados de Error** - Manejo elegante de errores

#### 📱 **Experiencia Responsive**
- **Design System Completo** - Shadcn/UI components
- **Sidebar Inteligente** - Detección automática móvil/desktop
- **Data Tables Responsivas** - TanStack Table con adaptación
- **Modal Móvil Avanzado** - Swipe gestures y animaciones
- **Navegación Adaptativa** - UX optimizada por dispositivo

### 🆕 **Características Avanzadas v0.3.0**

#### 🚀 **Performance y Optimización**
- **Server-Side Prefetching** - Optimización de carga inicial
- **React Query Integration** - Cache inteligente y sincronización
- **Suspense Boundaries** - Loading states granulares
- **Error Boundaries** - Manejo robusto de errores
- **Type Safety 100%** - TypeScript full coverage
- **Bundle Optimization** - Código optimizado para producción

#### 🎯 **Funcionalidades Específicas**
- **Confirmación con useConfirm Hook** - Sistema reutilizable
- **Command Select Component** - Selector avanzado con búsqueda
- **Avatar Generation System** - Generación automática contextual
- **Meeting Counter System** - Badges dinámicos con contadores
- **Search & Filter System** - Búsqueda instant con debounce
- **Toast Notification System** - Notificaciones elegantes

### 🔄 **En Desarrollo - Roadmap 2025**

- **Videollamadas en Vivo** (Q1 2025) - Integración con WebRTC
- **Chat en Tiempo Real** (Q1 2025) - Mensajería instantánea
- **Agentes Especializados** (Q2 2025) - IA por categorías
- **Integraciones API** (Q2 2025) - Conectores externos
- **Analytics Dashboard** (Q3 2025) - Métricas y reportes
- **Mobile App** (Q4 2025) - Aplicación nativa

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

- **[Next.js](https://nextjs.org/)** v15.3.2 - Framework React con App Router y Turbopack
- **[TypeScript](https://www.typescriptlang.org/)** v5+ - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** v4+ - Framework CSS utilitario
- **[Shadcn/UI](https://ui.shadcn.com/)** - Biblioteca de componentes modernos
- **[TanStack Table](https://tanstack.com/table)** - Tabla de datos avanzada
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificaciones toast
- **[Lucide React](https://lucide.dev/)** - Iconos SVG optimizados
- **[React Hook Form](https://react-hook-form.com/)** - Manejo avanzado de formularios
- **[React Error Boundary](https://github.com/bvaughn/react-error-boundary)** - Manejo de errores

### Backend & API

- **[tRPC](https://trpc.io/)** v11+ - Type-safe API con TypeScript
- **[React Query](https://tanstack.com/query)** v5+ - Server state management
- **[Zod](https://zod.dev/)** - Validación de esquemas TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Neon](https://neon.com)** - Hosting PostgreSQL serverless
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first

### Autenticación & Seguridad

- **[BetterAuth](https://www.better-auth.com/)** v1.2.8 - Sistema de autenticación moderno
- **OAuth Providers** - Google y GitHub integrados
- **Session Management** - Manejo seguro de sesiones
- **Route Protection** - Middleware de protección

### UI/UX & Performance

- **Glassmorphism Effects** - Efectos de vidrio esmerilado
- **CSS Animations** - Animaciones fluidas y transiciones
- **Loading States** - Estados de carga inmersivos
- **Toast Notifications** - Sistema de notificaciones elegante
- **Responsive Design** - Mobile-first con adaptación completa
- **Performance Optimization** - Server-side prefetching y caching
- **Avatar Generation** - Sistema automático de avatares
- **Command Components** - Selectores avanzados con búsqueda

## 📱 Diagramas de Flujo Avanzados

### Flujo Completo de Gestión de Agentes

```mermaid
flowchart TD
    A[Usuario accede a /agents] --> B[Server Prefetch]
    B --> C[tRPC agents.getMany con paginación]
    C --> D[Database Query con LIMIT/OFFSET + COUNT]
    D --> E[Hydrated State + Pagination Data]

    E --> F[Render Data Table]
    F --> G[Generate Dynamic Avatars]
    F --> H[Display Meeting Count Badges]
    F --> I[Render Pagination Controls]

    G --> J[Category Detection Algorithm]
    J --> K[Icon Selection by Name Analysis]
    K --> L[Color Assignment by Hash]
    L --> M[Responsive Avatar Rendering]

    H --> N[SQL COUNT Aggregation]
    N --> O[Badge with Meeting Counter]
    O --> P[Video Icon + Count Display]

    I --> Q[Page Navigation Controls]
    I --> R[Page Size Selection]
    I --> S[Total Records Display]
    I --> T[Smart Navigation Logic]

    F --> U[Real-time Search System]
    U --> V[Debounced Search Input]
    V --> W[Filter by Agent Name]
    W --> X[Update Query with Search Params]
    X --> Y[Instant Results Update]

    F --> Z[Agent Management Actions]
    Z --> AA[Create New Agent]
    Z --> AB[Edit Existing Agent]
    Z --> AC[Delete Agent]

    AA --> AD[Agent Form Modal]
    AD --> AE[Validation with Zod]
    AE --> AF{Form Valid?}
    AF -->|No| AG[Show Validation Errors]
    AF -->|Yes| AH[tRPC agents.create]

    AH --> AI[Database Insert]
    AI --> AJ[Invalidate React Query Cache]
    AJ --> AK[Auto-refresh Table Data]
    AK --> AL[Success Toast Notification]

    AC --> AM[useConfirm Hook]
    AM --> AN[Confirmation Modal with Variants]
    AN --> AO{User Confirms?}
    AO -->|No| AP[Cancel Action]
    AO -->|Yes| AQ[Loading Toast]

    AQ --> AR[tRPC agents.remove]
    AR --> AS[Database Delete]
    AS --> AT[Success Toast + Navigation]
    AT --> AU[Redirect to Agents List]

    AG --> AD
    AP --> F

    style A fill:#059669
    style C fill:#398CCB
    style G fill:#ff9800
    style H fill:#9c27b0
    style AA fill:#4caf50
    style AC fill:#f44336
    style AL fill:#2196f3
    style AM fill:#e91e63
```

### Flujo de Sistema de Reuniones

```mermaid
flowchart TD
    A[Usuario accede a /meetings] --> B[Server Prefetch Meetings]
    B --> C[tRPC meetings.getMany + Agent Data]
    C --> D[Populate Meeting List with Agents]

    D --> E[Meetings List Header]
    E --> F[Create Meeting Button]
    F --> G[New Meeting Dialog]

    G --> H[Meeting Form Component]
    H --> I[Agent Selection System]
    I --> J[Command Select Component]

    J --> K[Load Available Agents]
    K --> L[Search Agents in Real-time]
    L --> M[Display Agent Cards with Avatars]
    M --> N[Select Agent for Meeting]

    H --> O[Meeting Details Form]
    O --> P[Title Input]
    O --> Q[Description Input]
    O --> R[Date/Time Picker]
    O --> S[Meeting Type Selection]

    O --> T[Form Validation]
    T --> U{All Fields Valid?}
    U -->|No| V[Show Validation Errors]
    U -->|Yes| W[Submit Meeting Creation]

    W --> X[tRPC meetings.create]
    X --> Y[Database Insert with Agent Relation]
    Y --> Z[Update Agent Meeting Count]
    Z --> AA[Invalidate Queries]
    AA --> AB[Success Toast Notification]
    AB --> AC[Close Dialog]
    AC --> AD[Refresh Meetings List]

    D --> AE[Meetings Data Table]
    AE --> AF[Meeting Status Badges]
    AE --> AG[Agent Information Display]
    AE --> AH[Meeting Actions]

    AH --> AI[Edit Meeting]
    AH --> AJ[Delete Meeting]
    AH --> AK[Start Videocall]

    AI --> AL[Update Meeting Dialog]
    AL --> AM[Pre-filled Form]
    AM --> AN[tRPC meetings.update]

    AJ --> AO[Confirmation Dialog]
    AO --> AP[tRPC meetings.delete]
    AP --> AQ[Update Agent Count]

    AK --> AR[Redirect to Videocall]
    AR --> AS[WebRTC Integration] 

    V --> O

    style A fill:#059669
    style G fill:#398CCB
    style J fill:#ff9800
    style X fill:#4caf50
    style AO fill:#f44336
    style AS fill:#9c27b0
```

### Flujo de Notificaciones y Estados

```mermaid
flowchart LR
    subgraph "Toast Notification System"
        A[Action Trigger] --> B{Action Type}
        
        B -->|Loading| C[Loading Toast]
        B -->|Success| D[Success Toast]
        B -->|Error| E[Error Toast]
        B -->|Warning| F[Warning Toast]

        C --> G[Spinner + Message]
        D --> H[Success Icon + Action Button]
        E --> I[Error Icon + Retry Option]
        F --> J[Warning Icon + Details]

        G --> K[Auto Dismiss on Complete]
        H --> L[Manual Dismiss or Auto]
        I --> M[Manual Dismiss + Retry]
        J --> L
    end

    subgraph "Confirmation System"
        N[Destructive Action] --> O[useConfirm Hook]
        O --> P[Confirmation Modal]
        P --> Q[Dynamic Variant Styling]
        
        Q --> R{User Choice}
        R -->|Confirm| S[Execute Action]
        R -->|Cancel| T[Cancel Action]
        
        S --> U[Show Loading Toast]
        U --> V[Action Result]
        V --> W[Success/Error Toast]
    end

    subgraph "Loading States"
        X[Component Mount] --> Y{Data Available?}
        Y -->|No| Z[Suspense Boundary]
        Y -->|Yes| AA[Render Content]
        
        Z --> BB[Space Loader Component]
        BB --> CC[Astronaut Animation]
        BB --> DD[Loading Message]
        
        CC --> EE[Floating Animation]
        CC --> FF[Helmet Reflection]
        CC --> GG[Space Environment]
    end

    style A fill:#059669
    style O fill:#e91e63
    style BB fill:#ff9800
    style S fill:#4caf50
    style E fill:#f44336
```

## 🔄 Sistema tRPC y API

### Arquitectura tRPC Completa

```mermaid
graph TB
    subgraph "Client Side"
        A[React Component] --> B[tRPC Client]
        B --> C[React Query Hooks]
        C --> D[useSuspenseQuery]
        C --> E[useMutation]
        C --> F[Pagination State]

        G[TypeScript Types] --> A
        G --> B
        G --> H[Zod Schemas]
    end

    subgraph "Network Layer"
        I[HTTP Request] --> J[Next.js API Route /api/trpc]
        J --> K[tRPC Handler]
        K --> L[Request Validation]
    end

    subgraph "Server Side Routers"
        L --> M[Root tRPC Router]
        M --> N[Agents Router]
        M --> O[Meetings Router]
        M --> P[Users Router]
        M --> Q[Auth Router]

        N --> N1[agents.getMany - Paginated]
        N --> N2[agents.getOne]
        N --> N3[agents.create]
        N --> N4[agents.update]
        N --> N5[agents.remove]

        O --> O1[meetings.getMany - Paginated]
        O --> O2[meetings.create]
        O --> O3[meetings.update]
        O --> O4[meetings.delete]
    end

    subgraph "Database Operations"
        N1 --> R[Drizzle Query Builder]
        R --> S[SELECT with LIMIT/OFFSET]
        R --> T[COUNT for Total Records]
        R --> U[JOIN with Meetings for Count]
        
        O1 --> V[Meeting Queries]
        V --> W[JOIN with Agents Table]
        V --> X[Status Filtering]
        V --> Y[Date Range Queries]
    end

    subgraph "Type Safety & Validation"
        Z[Shared Types] --> AA[Client Types]
        Z --> BB[Server Types]
        Z --> CC[Database Schema Types]
        Z --> DD[Validation Schemas]

        H --> EE[Input Validation]
        H --> FF[Output Validation]
        H --> GG[Error Handling]
    end

    subgraph "Caching & Performance"
        HH[React Query Cache] --> II[Per-Page Caching]
        HH --> JJ[Background Refetch]
        HH --> KK[Optimistic Updates]
        HH --> LL[Stale While Revalidate]

        MM[Server Prefetch] --> NN[Initial Data Hydration]
        MM --> OO[No Loading State]
        MM --> PP[Instant Navigation]
    end

    B --> I
    U --> R
    R --> L
    L --> K
    K --> J
    J --> I
    I --> B

    Z --> G
    Z --> M
    HH --> C
    MM --> A

    style B fill:#398CCB
    style M fill:#398CCB
    style R fill:#047857
    style Z fill:#ff9800
    style HH fill:#9c27b0
    style MM fill:#4caf50
```

## 🎨 Sistema de UI/UX Avanzado

### Componente de Paginación Mejorado

```mermaid
graph TB
    subgraph "DataPagination Component"
        A[Pagination Props] --> B[Page Number Generation]
        B --> C[Smart Navigation Logic]
        C --> D[Responsive Layout]

        B --> E[calculatePageNumbers Algorithm]
        E --> F[Show First Page]
        E --> G[Add Dots if Gap]
        E --> H[Show Pages Around Current]
        E --> I[Add Dots if Gap]
        E --> J[Show Last Page]

        D --> K[Desktop Layout]
        D --> L[Mobile Layout]

        K --> M[Full Navigation Controls]
        M --> N[First/Previous Buttons]
        M --> O[Page Number Buttons]
        M --> P[Next/Last Buttons]
        M --> Q[Page Info Display]

        L --> R[Compact Controls]
        R --> S[Previous/Next Only]
        R --> T[Current Page Indicator]
        R --> U[Mobile-Optimized Spacing]

        O --> V[Current Page Highlight]
        V --> W[Scale Animation]
        V --> X[Color Gradient]
        V --> Y[Shadow Effect]

        Q --> Z[Information Display]
        Z --> AA["Page X of Y"]
        Z --> BB[Total Records Count]
    end

    subgraph "Loading & Error States"
        CC[Loading State] --> DD[Skeleton Pagination]
        EE[Error State] --> FF[Error Message]
        FF --> GG[Retry Button]
    end

    subgraph "Accessibility Features"
        HH[ARIA Labels] --> II[Screen Reader Support]
        JJ[Keyboard Navigation] --> KK[Tab Order]
        LL[Focus States] --> MM[Visual Indicators]
    end

    style A fill:#059669
    style E fill:#398CCB
    style V fill:#ff9800
    style Z fill:#9c27b0
    style HH fill:#4caf50
```

### Sistema de Confirmación Avanzado

```mermaid
graph TB
    subgraph "useConfirm Hook System"
        A[useConfirm Hook Call] --> B[Hook Parameters]
        B --> C[Title]
        B --> D[Description]
        B --> E[Variant Type]

        E --> F{Variant Selection}
        F -->|destructive| G[Red Theme + Trash Icon]
        F -->|warning| H[Yellow Theme + Warning Icon]
        F -->|default| I[Blue Theme + Check Icon]

        A --> J[Return Array]
        J --> K[ConfirmationDialog Component]
        J --> L[confirm Function]

        L --> M[Promise-based Confirmation]
        M --> N[User Interaction]
        N --> O{User Choice}
        O -->|Confirm| P[Resolve true]
        O -->|Cancel| Q[Resolve false]

        K --> R[Responsive Dialog]
        R --> S[Animated Icon Circle]
        R --> T[Dynamic Content]
        R --> U[Action Buttons]

        S --> V[Icon Animation]
        V --> W[Zoom-in Effect]
        V --> X[Color Transition]
        V --> Y[Gradient Background]

        U --> Z[Cancel Button]
        U --> AA[Confirm Button]
        AA --> BB[Variant-specific Styling]
        AA --> CC[Icon + Text]
        AA --> DD[Hover Effects]
    end

    subgraph "Integration Examples"
        EE[Agent Deletion] --> FF["destructive variant"]
        FF --> GG[Red styling + Trash icon]
        
        HH[Unsaved Changes] --> II["warning variant"]
        II --> JJ[Yellow styling + Alert icon]
        
        KK[General Action] --> LL["default variant"]
        LL --> MM[Blue styling + Check icon]
    end

    style A fill:#059669
    style F fill:#398CCB
    style G fill:#f44336
    style H fill:#ff9800
    style I fill:#2196f3
    style S fill:#9c27b0
```



## ⚙️ Prerequisitos del Entorno

Antes de comenzar, asegúrate de tener instalado:

- **[Node.js](https://nodejs.org/)** >= 18.18 (recomendado 20+)
- **[npm](https://www.npmjs.com/)** >= 9.0 (incluido con Node.js)
- **[Git](https://git-scm.com/)** para control de versiones
- **[PostgreSQL](https://www.postgresql.org/)** 14+ (o cuenta en Neon)
- **[VS Code](https://code.visualstudio.com/)** (recomendado)

### Extensiones Recomendadas para VS Code

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "drizzle-team.drizzle-vscode"
  ]
}
```

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

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de Datos PostgreSQL (Neon recomendado)
DATABASE_URL="postgresql://username:password@hostname:port/database?sslmode=require"

# BetterAuth - Clave secreta (mínimo 32 caracteres)
BETTER_AUTH_SECRET="your_very_long_and_secure_secret_key_here_minimum_32_chars"

# URL de la aplicación
BETTER_AUTH_URL="http://localhost:3000"

# OAuth - Google (Opcional)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# OAuth - GitHub (Opcional)
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# URL pública de la aplicación
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Configuración de Base de Datos

```bash
# Aplicar esquema a la base de datos
npm run db:push

# Verificar conexión con Drizzle Studio
npm run db:studio
```

### 4. Configuración OAuth (Opcional)

#### Google OAuth Setup
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la Google+ API
4. Crea credenciales OAuth 2.0
5. Agrega `http://localhost:3000/api/auth/callback/google` a URIs de redirección

#### GitHub OAuth Setup
1. Ve a [GitHub Settings > Developer settings](https://github.com/settings/developers)
2. Crea una nueva OAuth App
3. Agrega `http://localhost:3000/api/auth/callback/github` como Authorization callback URL

## 🎨 Sistema de Autenticación

### Arquitectura de Autenticación Completa

```mermaid
graph TB
    subgraph "Auth Components"
        A[SignInView] --> E[AuthClient]
        B[SignUpView] --> E
        C[Dashboard] --> E
        D[Route Protection] --> E
    end

    subgraph "BetterAuth Core"
        E --> F[Email/Password Provider]
        E --> G[Google OAuth Provider]
        E --> H[GitHub OAuth Provider]
        E --> I[Session Manager]
        E --> J[Route Middleware]
    end

    subgraph "Database Schema"
        I --> K[(User Table)]
        I --> L[(Session Table)]
        I --> M[(Account Table)]
        I --> N[(Verification Table)]
    end

    subgraph "Provider Detection System"
        O[getProviderIcon] --> P{Image URL Analysis}
        O --> Q[getProviderName]
        P -->|"googleusercontent.com"| R[Google Icon]
        P -->|"github"| S[GitHub Icon]
        P -->|"default"| T[Shield Icon]
        P -->|"email"| U[Mail Icon]
    end

    subgraph "Security Features"
        V[Input Validation] --> W[Zod Schemas]
        X[CSRF Protection] --> Y[Built-in BetterAuth]
        Z[Session Security] --> AA[Secure Cookies]
        BB[Rate Limiting] --> CC[API Endpoints]
    end

    style E fill:#16a34a
    style I fill:#059669
    style P fill:#047857
    style V fill:#398CCB
```

### Características de Autenticación Implementadas

- ✅ **Registro completo** con validación de email único
- ✅ **Inicio de sesión** con remember me option
- ✅ **OAuth integrado** (Google, GitHub)
- ✅ **Validación robusta** con Zod en tiempo real
- ✅ **Estados de carga** con spinners elegantes
- ✅ **Manejo de errores** contextual y amigable
- ✅ **Toggle de contraseña** para visibilidad
- ✅ **Confirmación de contraseña** en registro
- ✅ **Redirección inteligente** - Previene acceso a auth si ya está logueado
- ✅ **Detección de providers** automática por avatar
- ✅ **Protección de rutas** con middleware
- ✅ **Gestión de sesiones** segura
- ✅ **Logout completo** con limpieza de estado

## 🖥️ Dashboard y Componentes

### Arquitectura del Dashboard Avanzada

```mermaid
graph TB
    subgraph "Dashboard Layout System"
        A[layout.tsx] --> B[SidebarProvider Context]
        B --> C[DashboardSidebar]
        B --> D[Main Content Area]

        D --> E[DashboardNavbar]
        D --> F[Page Content Wrapper]

        C --> G[Navigation Links]
        C --> H[User Section]
        C --> I[Footer Section]
        C --> J[Collapse Controls]

        H --> K{Screen Detection}
        K -->|Desktop ≥768px| L[DashboardUserButton]
        K -->|Mobile <768px| M[DashboardUserMobileMenu]

        F --> N[Suspense Boundary]
        N --> O[Error Boundary]
        O --> P[View Component]

        F --> Q[Loading States]
        Q --> R[Space Loader Animation]

        F --> S[Error States]
        S --> T[Error Component with Retry]

        P --> U[Data Table System]
        P --> V[Pagination Controls]
        P --> W[Search & Filter System]
        P --> X[CRUD Operations]
    end

    subgraph "Data Management Layer"
        Y[tRPC Server Prefetch] --> Z[React Query Cache]
        Z --> P

        AA[useSuspenseQuery] --> BB[Type-safe Data]
        BB --> CC[UI Components]
        BB --> DD[Paginated Results]
        BB --> EE[Real-time Updates]

        FF[Mutations] --> GG[Optimistic Updates]
        GG --> HH[Cache Invalidation]
        HH --> II[Background Refetch]
    end

    subgraph "Component Interactions"
        JJ[Agent Creation] --> KK[Form Validation]
        KK --> LL[Success Feedback]
        LL --> MM[Table Refresh]

        NN[Agent Deletion] --> OO[Confirmation Modal]
        OO --> PP[Loading State]
        PP --> QQ[Success Toast]
        QQ --> RR[Navigation]

        SS[Search Input] --> TT[Debounced Query]
        TT --> UU[Filtered Results]
        UU --> VV[Table Update]
    end

    style A fill:#059669
    style P fill:#4caf50
    style R fill:#ff9800
    style Y fill:#398CCB
    style U fill:#e91e63
    style JJ fill:#9c27b0
```

### Componentes del Dashboard Implementados

```tsx
// Componentes principales del dashboard:
✅ DashboardLayout - Layout principal con providers
✅ DashboardSidebar - Sidebar responsivo con navegación
✅ DashboardUserButton - Dropdown de usuario (desktop)
✅ DashboardUserMobileMenu - Modal de usuario (móvil)
✅ SidebarProvider - Context para estado del sidebar
✅ ProtectedRoute - Middleware de protección
✅ LoadingBoundary - Suspense con loader espacial
✅ ErrorBoundary - Manejo de errores con retry
✅ ToastProvider - Sistema de notificaciones global
```

## 📊 Sistema de Gestión de Reuniones

### Arquitectura de Reuniones

```mermaid
graph TB
    subgraph "Meetings Management System"
        A[Meetings Page] --> B[MeetingsListHeader]
        A --> C[MeetingsView]
        A --> D[Meeting Components]

        B --> E[Create Meeting Button]
        B --> F[Filters Section]
        E --> G[NewMeetingDialog]

        G --> H[MeetingForm Component]
        H --> I[Agent Selection System]
        H --> J[Meeting Details Form]
        H --> K[Form Validation]

        I --> L[CommandSelect Component]
        L --> M[Agent Search & Filter]
        L --> N[Agent Cards Display]
        L --> O[Avatar Integration]

        J --> P[Title Input]
        J --> Q[Description Textarea]
        J --> R[Date/Time Picker]
        J --> S[Meeting Type Select]

        C --> T[Meetings Data Table]
        T --> U[Meeting Status Column]
        T --> V[Agent Information Column]
        T --> W[Actions Column]
        T --> X[Date/Time Column]

        W --> Y[Edit Meeting]
        W --> Z[Delete Meeting]
        W --> AA[Start Videocall]
        W --> BB[View Details]

        Y --> CC[UpdateMeetingDialog]
        Z --> DD[Confirmation Modal]
        AA --> EE[Videocall Redirect]
    end

    subgraph "Data Flow"
        FF[tRPC meetings.getMany] --> GG[Paginated Results]
        GG --> HH[JOIN with Agents]
        HH --> II[Meeting Status Filter]
        II --> JJ[Date Range Filter]

        KK[Meeting Creation] --> LL[Validation]
        LL --> MM[Agent Relation]
        MM --> NN[Database Insert]
        NN --> OO[Counter Update]
        OO --> PP[Cache Invalidation]
    end

    subgraph "UI Features"
        QQ[Status Badges] --> RR[Scheduled]
        QQ --> SS[In Progress]
        QQ --> TT[Completed]
        QQ --> UU[Cancelled]

        VV[Agent Display] --> WW[Avatar + Name]
        VV --> XX[Meeting Count]
        VV --> YY[Agent Type Badge]

        ZZ[Actions Menu] --> AAA[Quick Actions]
        ZZ --> BBB[Dropdown Menu]
        ZZ --> CCC[Mobile Optimized]
    end

    style A fill:#059669
    style H fill:#398CCB
    style L fill:#ff9800
    style T fill:#e91e63
    style QQ fill:#9c27b0
    style KK fill:#4caf50
```

### Características del Sistema de Reuniones

- ✅ **CRUD Completo de Reuniones** - Crear, leer, actualizar, eliminar
- ✅ **Selector de Agentes Avanzado** - CommandSelect con búsqueda
- ✅ **Formularios Inteligentes** - Validación en tiempo real
- ✅ **Estados de Reunión** - Scheduled, In Progress, Completed, Cancelled
- ✅ **Filtros Avanzados** - Por estado, fecha, agente
- ✅ **Integración con Agentes** - Relación y contadores
- ✅ **Programación de Videollamadas** - Sistema de agendamiento
- ✅ **Notificaciones de Estado** - Toast feedback completo
- ✅ **Vista de Calendario** - Próximamente
- ✅ **Recordatorios Automáticos** - En desarrollo

## 📱 Sistema Responsive Avanzado

### Breakpoints y Comportamiento Detallado

```css
/* Sistema de breakpoints implementado con Tailwind */
Mobile:     < 640px   - Stack layout, sidebar colapsado, tabla cards
Tablet:     640px - 1024px - Layout híbrido, sidebar adaptativo
Desktop:    > 1024px  - Layout completo, todas las funciones
Large:      > 1280px  - Layout expandido, más contenido visible

/* Implementación específica */
.sm:hidden        /* Oculto en tablet+, visible en móvil */
.hidden.md:block  /* Oculto en móvil, visible en tablet+ */
.lg:table-cell    /* Columnas solo en desktop */
.xl:w-full        /* Ancho completo en pantallas grandes */
```

### Sistema de Sidebar Inteligente

```mermaid
graph TB
    subgraph "Sidebar System"
        A[SidebarProvider] --> B[useSidebar Hook]
        B --> C[State Management]
        C --> D[isMobile Detection]
        C --> E[isExpanded State]
        C --> F[toggleSidebar Function]

        D --> G{Screen Size Check}
        G -->|< 768px| H[Mobile Mode]
        G -->|≥ 768px| I[Desktop Mode]

        H --> J[Overlay Sidebar]
        H --> K[Swipe Gestures]
        H --> L[Mobile Navigation]

        I --> M[Fixed Sidebar]
        I --> N[Collapse/Expand]
        I --> O[Desktop Navigation]

        J --> P[Backdrop Click Close]
        J --> Q[Escape Key Close]
        J --> R[Focus Trap]

        M --> S[Persistent State]
        M --> T[Hover Expand]
        M --> U[Icon-only Mode]
    end

    subgraph "Responsive Features"
        V[Mobile First Design] --> W[Touch Optimized]
        V --> X[Gesture Support]
        V --> Y[Compact Layout]

        Z[Desktop Enhanced] --> AA[Keyboard Shortcuts]
        Z --> BB[Mouse Interactions]
        Z --> CC[Extended Features]

        DD[Adaptive Content] --> EE[Content Reflow]
        DD --> FF[Priority Content]
        DD --> GG[Progressive Enhancement]
    end

    style A fill:#059669
    style G fill:#398CCB
    style V fill:#ff9800
    style DD fill:#9c27b0
```

## 🎨 Diseño y UI

### Sistema de Design Tokens

```css
/* Color Palette Implementada */
Primary: #059669 (emerald-600)
Primary Hover: #047857 (emerald-700)
Secondary: #6b7280 (gray-500)
Accent: #f59e0b (amber-500)
Success: #10b981 (emerald-500)
Warning: #f59e0b (amber-500)
Error: #ef4444 (red-500)
Info: #3b82f6 (blue-500)

/* Typography Scale */
Display: 3.75rem (60px) - Hero headings
Heading 1: 2.25rem (36px) - Page titles
Heading 2: 1.875rem (30px) - Section titles
Heading 3: 1.5rem (24px) - Component titles
Body Large: 1.125rem (18px) - Important text
Body: 1rem (16px) - Default text
Body Small: 0.875rem (14px) - Secondary text
Caption: 0.75rem (12px) - Helper text

/* Spacing System */
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)

/* Border Radius */
sm: 0.125rem (2px)
md: 0.375rem (6px)
lg: 0.5rem (8px)
xl: 0.75rem (12px)
2xl: 1rem (16px)
full: 9999px (circle)

/* Shadows */
sm: 0 1px 2px rgba(0, 0, 0, 0.05)
md: 0 4px 6px rgba(0, 0, 0, 0.07)
lg: 0 10px 15px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px rgba(0, 0, 0, 0.1)
2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

### Efectos Visuales Implementados

```mermaid
graph TB
    subgraph "Visual Effects System"
        A[Glassmorphism] --> B[backdrop-blur-sm]
        A --> C[backdrop-blur-md]
        A --> D[backdrop-blur-lg]
        A --> E[Semi-transparent Backgrounds]

        F[Gradient System] --> G[Linear Gradients]
        F --> H[Radial Gradients]
        F --> I[Conic Gradients]
        F --> J[Animated Gradients]

        K[Animation System] --> L[CSS Keyframes]
        K --> M[Tailwind Animations]
        K --> N[Custom Transitions]
        K --> O[Micro-interactions]

        P[Loading Animations] --> Q[Space Loader]
        P --> R[Skeleton Loading]
        P --> S[Spinner Variants]
        P --> T[Progress Indicators]

        U[Interactive States] --> V[Hover Effects]
        U --> W[Focus States]
        U --> X[Active States]
        U --> Y[Disabled States]
    end

    subgraph "Component Styling"
        Z[Buttons] --> AA[Solid Variants]
        Z --> BB[Outline Variants]
        Z --> CC[Ghost Variants]
        Z --> DD[Link Variants]

        EE[Cards] --> FF[Elevated Cards]
        EE --> GG[Outlined Cards]
        EE --> HH[Glass Cards]
        EE --> II[Gradient Cards]

        JJ[Tables] --> KK[Striped Rows]
        JJ --> LL[Hover Rows]
        JJ --> MM[Selected States]
        JJ --> NN[Responsive Design]
    end

    style A fill:#059669
    style F fill:#398CCB
    style K fill:#ff9800
    style P fill:#9c27b0
    style Z fill:#4caf50
```

## 🔧 Comandos Útiles

### Comandos de Desarrollo

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo (Turbopack)
npm run build            # Build de producción
npm run start            # Servidor de producción

# Base de Datos
npm run db:push          # Aplicar cambios de esquema
npm run db:studio        # Abrir Drizzle Studio
npm run db:migrate       # Ejecutar migraciones
npm run db:generate      # Generar migraciones
npm run db:reset         # Reset completo de DB (desarrollo)

```

## 📁 Estructura del Proyecto

```
agentesia/
├── 📁 src/
│   ├── 📁 app/                    # App Router de Next.js
│   │   ├── 📁 (auth)/            # Grupo de rutas de autenticación
│   │   │   ├── 📁 sign-in/       # Página de inicio de sesión
│   │   │   └── 📁 sign-up/       # Página de registro
│   │   ├── 📁 (dashboard)/       # Grupo de rutas del dashboard
│   │   │   ├── 📁 agents/        # Gestión de agentes
│   │   │   │   └── 📁 [id]/      # Página individual de agente
│   │   │   ├── 📁 meetings/      # Gestión de reuniones
│   │   │   └── 📁 upgrade/       # Página de upgrade
│   │   ├── 📁 api/               # API Routes
│   │   │   └── 📁 trpc/          # Endpoint tRPC
│   │   ├── 📄 globals.css        # Estilos globales
│   │   ├── 📄 layout.tsx         # Layout raíz
│   │   └── 📄 page.tsx           # Página de inicio
│   ├── 📁 components/            # Componentes reutilizables
│   │   ├── 📁 ui/                # Componentes base (Shadcn)
│   │   ├── 📄 error-state.tsx    # Estado de error
│   │   ├── 📄 loading-state.tsx  # Estado de carga
│   │   ├── 📄 space-loader.tsx   # Loader espacial
│   │   └── 📄 responsive-dialog.tsx # Dialog responsivo
│   ├── 📁 modules/               # Módulos de funcionalidad
│   │   ├── 📁 agents/            # Módulo de agentes
│   │   │   ├── 📁 ui/            # Componentes UI de agentes
│   │   │   │   ├── 📁 components/ # Componentes específicos
│   │   │   │   └── 📁 views/     # Vistas de página
│   │   │   └── 📁 types/         # Tipos TypeScript
│   │   ├── 📁 meetings/          # Módulo de reuniones
│   │   │   ├── 📁 ui/            # Componentes UI de reuniones
│   │   │   └── 📁 types/         # Tipos TypeScript
│   │   └── 📁 auth/              # Módulo de autenticación
│   ├── 📁 server/                # Lógica del servidor
│   │   ├── 📁 api/               # Definiciones de API
│   │   │   ├── 📁 routers/       # Routers tRPC
│   │   │   │   ├── 📄 agents.ts  # Router de agentes
│   │   │   │   ├── 📄 meetings.ts # Router de reuniones
│   │   │   │   └── 📄 users.ts   # Router de usuarios
│   │   │   ├── 📄 root.ts        # Router raíz
│   │   │   └── 📄 trpc.ts        # Configuración tRPC
│   │   └── 📁 db/                # Configuración de base de datos
│   │       ├── 📄 index.ts       # Conexión DB
│   │       └── 📄 schema.ts      # Esquemas Drizzle
│   ├── 📁 trpc/                  # Cliente tRPC
│   │   ├── 📄 client.ts          # Cliente React
│   │   ├── 📄 react.tsx          # Provider React
│   │   └── 📄 server.ts          # Servidor tRPC
│   ├── 📁 lib/                   # Utilidades y configuración
│   │   ├── 📄 auth.ts            # Configuración BetterAuth
│   │   ├── 📄 utils.ts           # Utilidades generales
│   │   └── 📄 validations.ts     # Esquemas Zod
│   ├── 📁 hooks/                 # Hooks personalizados
│   │   ├── 📄 use-confirm.tsx    # Hook de confirmación
│   │   └── 📄 use-sidebar.tsx    # Hook del sidebar
│   └── 📁 types/                 # Tipos TypeScript globales
├── 📁 public/                    # Archivos estáticos
│   ├── 📄 favicon.ico
│   └── 📄 logo.svg
├── 📄 package.json               # Dependencias y scripts
├── 📄 tsconfig.json              # Configuración TypeScript
├── 📄 tailwind.config.ts         # Configuración Tailwind
├── 📄 next.config.js             # Configuración Next.js
├── 📄 drizzle.config.ts          # Configuración Drizzle
├── 📄 .env.local                 # Variables de entorno
└── 📄 README.md                  # Documentación
```

## 🔐 Configuración de Seguridad

### Generación de Claves Seguras

```bash
# Generar BETTER_AUTH_SECRET (mínimo 32 caracteres)
openssl rand -base64 32

# O con Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

```

### Buenas Prácticas de Seguridad Implementadas

- ✅ **Validación de entrada** con Zod en todas las rutas tRPC
- ✅ **Procedimientos protegidos** requieren autenticación
- ✅ **Sanitización de datos** antes de inserción en BD
- ✅ **SQL Injection protection** con Drizzle ORM prepared statements
- ✅ **XSS protection** con escape automático de React
- ✅ **CSRF protection** integrado en BetterAuth
- ✅ **Headers de seguridad** configurados en Next.js
- ✅ **Variables de entorno** para todos los datos sensibles
- ✅ **Sesiones seguras** con cookies httpOnly y secure
- ✅ **Rate limiting** en endpoints críticos (próximamente)
- ✅ **Input validation** en cliente y servidor
- ✅ **Error handling** sin exposición de información sensible



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

