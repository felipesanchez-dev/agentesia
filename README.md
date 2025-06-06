# 🚀 COGNIMEET
 - Plataforma de Agentes IA Inteligentes

Una aplicación web moderna construida con Next.js para la gestión, interacción y colaboración con agentes de inteligencia artificial especializados. Conecta con expertos virtuales en videollamadas y experimenta el futuro de la comunicación IA.

## 📋 Tabla de Contenidos

- [🚀 COGNIMEET - Plataforma de Agentes IA Inteligentes](#-cognimeet---plataforma-de-agentes-ia-inteligentes)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Características Principales](#-características-principales)
  - [🛠️ Stack Tecnológico](#️-stack-tecnológico)
    - [Frontend](#frontend)
    - [Backend \& Base de Datos](#backend--base-de-datos)
    - [Autenticación](#autenticación)
    - [UI/UX](#uiux)
  - [⚙️ Prerequisitos del Entorno](#️-prerequisitos-del-entorno)
  - [🚀 Configuración del Proyecto](#-configuración-del-proyecto)
    - [1. Clonación e Instalación](#1-clonación-e-instalación)
    - [2. Variables de Entorno](#2-variables-de-entorno)
    - [3. Configuración de Base de Datos](#3-configuración-de-base-de-datos)
    - [4. Configuración de Autenticación](#4-configuración-de-autenticación)
  - [🎨 Sistema de Autenticación](#-sistema-de-autenticación)
    - [Características Implementadas](#características-implementadas)
    - [Componentes de Autenticación](#componentes-de-autenticación)
    - [Manejo de Errores Avanzado](#manejo-de-errores-avanzado)
  - [🖥️ Dashboard y Sidebar](#️-dashboard-y-sidebar)
    - [Características del Dashboard](#características-del-dashboard)
    - [Componente Sidebar](#componente-sidebar)
    - [Botón de Usuario Avanzado](#botón-de-usuario-avanzado)
  - [🎨 Diseño y UI](#-diseño-y-ui)
    - [Paleta de Colores](#paleta-de-colores)
    - [Componentes UI Avanzados](#componentes-ui-avanzados)
    - [Efectos Visuales](#efectos-visuales)
  - [📱 Responsive Design](#-responsive-design)
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
- ✅ **Botón de Usuario Avanzado** - Dropdown con información detallada y redes sociales
- ✅ **Detección de Proveedores** - Identificación automática del método de autenticación
- ✅ **Diseño Responsive** - Adaptable a todos los dispositivos
- ✅ **UI Moderna** - Componentes elegantes con Shadcn/UI y efectos glassmorphism
- ✅ **Validación de Formularios** - Validación robusta con Zod y React Hook Form
- ✅ **Manejo de Estados** - Estados de carga, errores y animaciones
- ✅ **Seguridad Avanzada** - Autenticación segura con BetterAuth
- ✅ **Base de Datos Escalable** - PostgreSQL con Drizzle ORM
- ✅ **Redirección Inteligente** - Protección de rutas y redirección automática
- 🔄 **Videollamadas con IA** (En desarrollo)
- 🔄 **Agentes Especializados** (En desarrollo)

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
- **Animaciones CSS** - Transiciones suaves y efectos hover
- **Componentes Modulares** - Arquitectura escalable
- **Design System** - Paleta de colores consistente

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
git clone https://github.com/tu-usuario/agentesia.git
cd agentesia

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 2. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Base de Datos PostgreSQL (Neon)
DATABASE_URL="postgresql://username:password@hostname:port/database"

# BetterAuth - Clave secreta (mínimo 32 caracteres)
BETTER_AUTH_SECRET="tu_clave_secreta_muy_larga_y_segura_de_32_caracteres_minimo"

# OAuth - Google (Opcional)
GOOGLE_CLIENT_ID="tu_google_client_id"
GOOGLE_CLIENT_SECRET="tu_google_client_secret"

# OAuth - GitHub (Opcional)
GITHUB_CLIENT_ID="tu_github_client_id"
GITHUB_CLIENT_SECRET="tu_github_client_secret"

# URL de la aplicación
BETTER_AUTH_URL="http://localhost:3000"
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

### Componentes de Autenticación

#### SignInView & SignUpView
```tsx
// Características avanzadas:
- Formularios con validación en tiempo real
- Estados de carga independientes por proveedor OAuth
- Manejo de errores específicos y contextuales
- Diseño glassmorphism con efectos visuales
- Redirección automática post-autenticación
- Protección contra acceso con sesión activa
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

## 🖥️ Dashboard y Sidebar

### Características del Dashboard

- ✅ **Layout responsive** con sidebar colapsible
- ✅ **Navegación intuitiva** entre secciones
- ✅ **Rutas protegidas** con verificación de sesión
- ✅ **Estados de carga** y manejo de errores

### Componente Sidebar

```tsx
// Secciones principales:
const firstSection = [
  { icon: VideoIcon, label: "Reuniones", href: "/meetings" },
  { icon: BotIcon, label: "Agentes IA", href: "/agents" },
];

const secondSection = [
  { icon: StarIcon, label: "Mejorar IA", href: "/upgrade" },
];

// Características:
- Header con logo y branding
- Separadores visuales entre secciones
- Estados activos con indicadores visuales
- Footer con información del desarrollador
- Redes sociales integradas
```

### Botón de Usuario Avanzado

```tsx
// Características del DashboardUserButton:
- Avatar con fallback inteligente
- Detección automática del proveedor de autenticación
- Dropdown con información completa del usuario
- Enlaces a redes sociales con efectos hover
- Opción de logout con confirmación
- Footer con copyright y enlace al portafolio

// Detección de proveedores:
- Google: Detecta "googleusercontent.com" en imagen
- GitHub: Detecta "github" en imagen  
- Credenciales: Por defecto para registro email/password
```

## 🎨 Diseño y UI

### Paleta de Colores

```css
/* Colores principales */
--primary-green: #16a34a;      /* green-600 */
--primary-green-hover: #15803d; /* green-700 */
--gradient-start: #059669;      /* green-600 */
--gradient-mid: #047857;        /* green-700 */
--gradient-end: #064e3b;        /* green-900 */

/* Colores de estado */
--error-bg: #fef2f2;           /* red-50 */
--error-border: #fecaca;       /* red-200 */
--error-text: #b91c1c;         /* red-700 */

/* Sidebar y Dashboard */
--sidebar-bg: rgba(0, 0, 0, 0.8);
--sidebar-hover: rgba(255, 255, 255, 0.1);
--white-translucent: rgba(255, 255, 255, 0.05);
```

### Componentes UI Avanzados

#### Card Layout Glassmorphism
```tsx
// Efectos implementados:
- Fondo semi-transparente con blur
- Gradientes dinámicos animados
- Sombras profundas multicapa
- Bordes translúcidos
- Efectos hover suaves
```

#### Elementos Decorativos Animados
```tsx
// Características visuales:
- Círculos con blur y animación flotante
- Puntos decorativos con efecto ping
- Gradientes de fondo en movimiento
- Transiciones suaves (300ms)
- Efectos de escala en hover
```

### Efectos Visuales

- **Glassmorphism Avanzado** - Efectos de vidrio esmerilado con múltiples capas
- **Animaciones Fluidas** - Transiciones de 200-300ms para todas las interacciones
- **Micro-interacciones** - Feedback visual en botones y enlaces
- **Estados Hover** - Cambios de color y escala contextuales
- **Loading States** - Spinners animados y skeletons

## 📱 Responsive Design

```css
/* Breakpoints utilizados */
- Mobile: < 768px (Stack vertical, sidebar oculto)
- Tablet: 768px - 1024px (Sidebar adaptativo)
- Desktop: > 1024px (Layout completo con sidebar)

/* Características responsive */
- Sidebar colapsible en móviles
- Grid adaptativo para cards
- Tipografía escalable
- Espaciado responsivo
- Touch-friendly en móviles
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
```

## 📁 Estructura del Proyecto

```
agentesia/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   └── ui/views/
│   │   │   │       ├── sign-in-view.tsx
│   │   │   │       └── sign-up-view.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── ui/components/
│   │   │   │       ├── dashboard-sidebar.tsx
│   │   │   │       └── dashboard-user-button.tsx
│   │   │   └── home/
│   │   │       └── ui/view/
│   │   │           └── home-view.tsx
│   │   ├── (auth)/
│   │   │   ├── sign-in/page.tsx
│   │   │   └── sign-up/page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── agents/
│   │   │   ├── meetings/
│   │   │   └── upgrade/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/              # Componentes Shadcn/UI
│   ├── db/
│   │   ├── index.ts         # Configuración de Drizzle
│   │   └── schema.ts        # Esquemas de base de datos
│   ├── lib/
│   │   ├── auth.ts          # Configuración BetterAuth
│   │   ├── auth-client.ts   # Cliente de autenticación
│   │   └── utils.ts         # Utilidades generales
│   └── styles/
├── public/
│   ├── logo.png
│   └── logo-simple.png
├── .env.local
├── drizzle.config.ts
├── tailwind.config.ts
└── package.json
```

## 🔐 Configuración de Seguridad

### Variables de Entorno Seguras
```bash
# Generar clave secreta segura
BETTER_AUTH_SECRET=$(openssl rand -base64 32)
```

### Configuración OAuth Actualizada

#### Google OAuth
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+
4. Configura las URLs de redirección:
   - Desarrollo: `http://localhost:3000/api/auth/callback/google`
   - Producción: `https://tudominio.com/api/auth/callback/google`

#### GitHub OAuth
1. Ve a GitHub Settings > Developer settings > OAuth Apps
2. Crea nueva OAuth App
3. Configura las URLs:
   - Homepage URL: `http://localhost:3000`
   - Callback URL: `http://localhost:3000/api/auth/callback/github`

### Protección de Rutas
```tsx
// Implementado en páginas de autenticación:
- Verificación de sesión existente
- Redirección automática si ya está logueado
- Protección de rutas privadas del dashboard
```

## 🐛 Solución de Problemas

### Error: "postgres" no encontrado
```bash
npm install postgres @types/pg
```

### Error: Variables de entorno faltantes
```bash
# Verificar archivo .env.local existe y contiene:
- DATABASE_URL
- BETTER_AUTH_SECRET
- Variables OAuth (opcionales)
```

### Error: Sidebar no se muestra
```bash
# Verificar importaciones de componentes UI
# Verificar que Shadcn/UI está instalado correctamente
npx shadcn-ui@latest add sidebar
```

### Problemas de autenticación
```bash
# Verificar configuración BetterAuth
# Verificar URLs de callback OAuth
# Verificar que la sesión se está manejando correctamente
```

## 📈 Roadmap 2025

### Q1 2025
- [ ] **Sistema de Videollamadas** - Integración con WebRTC
- [ ] **Agentes IA Especializados** - Psicología, educación, tecnología
- [ ] **Chat en Tiempo Real** - Comunicación previa a videollamadas
- [ ] **Historial de Sesiones** - Registro de interacciones

### Q2 2025
- [ ] **Configuración de Perfil** - Edición completa de datos
- [ ] **Sistema de Notificaciones** - Alertas y recordatorios
- [ ] **Tema Oscuro/Claro** - Toggle de modo de visualización
- [ ] **Internacionalización** - Soporte multi-idioma

### Q3 2025
- [ ] **API REST Completa** - Endpoints para integraciones
- [ ] **Dashboard Analytics** - Métricas de uso y engagement
- [ ] **Sistema de Pagos** - Planes premium y suscripciones
- [ ] **Aplicación Móvil** - React Native o PWA

### Q4 2025
- [ ] **IA Avanzada** - Integración con GPT-4 y Claude
- [ ] **Tests Automatizados** - Suite completa de pruebas
- [ ] **Optimización Performance** - Mejoras de velocidad
- [ ] **Documentación API** - Swagger/OpenAPI

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- **TypeScript** estricto habilitado
- **ESLint** para linting
- **Prettier** para formateo
- **Conventional Commits** para mensajes
- **Components modulares** siguiendo atomic design

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollador

**Felipe Reyes Sanchez**
- 🌐 Website: [felipesanchezdev.site](https://felipesanchezdev.site)
- 📧 Email: [felipe@felipesanchezdev.site](mailto:felipe@felipesanchezdev.site)
- 💼 LinkedIn: [Felipe Reyes Sanchez](https://www.linkedin.com/in/felipereyessa)
- 🐙 GitHub: [@felipesanchez-dev](https://github.com/felipesanchez-dev)
- 📱 Instagram: [@felipesanchez_dev](https://www.instagram.com/felipesanchez_dev)
- 💬 WhatsApp: [+57 102 452542](https://wa.me/57102452542)

---

<div align="center">
  <p><strong>COGNIMEET</strong> - Conecta • Colabora • Crece</p>
  <p>Desarrollado por Felipe Reyes Sanchez</p>
  <p><em>"El futuro de la comunicación IA está aquí"</em></p>
</div>