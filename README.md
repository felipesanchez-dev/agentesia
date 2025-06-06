# 🚀 AGENTESIA - Plataforma de Colaboración IA

Una aplicación web moderna construida con Next.js para la gestión y colaboración con agentes de inteligencia artificial. Conecta, colabora y crece con tecnología de vanguardia.

## 📋 Tabla de Contenidos

- [🚀 AGENTESIA - Plataforma de Colaboración IA](#-agentesia---plataforma-de-colaboración-ia)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Características Principales](#-características-principales)
  - [🛠️ Stack Tecnológico](#️-stack-tecnológico)
    - [Frontend](#frontend)
    - [Backend \& Base de Datos](#backend--base-de-datos)
    - [Autenticación](#autenticación)
    - [Herramientas de Desarrollo](#herramientas-de-desarrollo)
  - [⚙️ Prerequisitos del Entorno](#️-prerequisitos-del-entorno)
  - [🚀 Configuración del Proyecto](#-configuración-del-proyecto)
    - [1. Clonación e Instalación](#1-clonación-e-instalación)
    - [2. Variables de Entorno](#2-variables-de-entorno)
    - [3. Configuración de Base de Datos](#3-configuración-de-base-de-datos)
    - [4. Configuración de Autenticación](#4-configuración-de-autenticación)
  - [🎨 Sistema de Autenticación](#-sistema-de-autenticación)
    - [Características Implementadas](#características-implementadas)
    - [Componentes de Autenticación](#componentes-de-autenticación)
    - [Manejo de Errores](#manejo-de-errores)
    - [Estados de Carga](#estados-de-carga)
  - [🎨 Diseño y UI](#-diseño-y-ui)
    - [Paleta de Colores](#paleta-de-colores)
    - [Componentes UI](#componentes-ui)
    - [Características de Diseño](#características-de-diseño)
  - [📱 Responsive Design](#-responsive-design)
  - [🔧 Comandos Útiles](#-comandos-útiles)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🔐 Configuración de Seguridad](#-configuración-de-seguridad)
  - [🐛 Solución de Problemas](#-solución-de-problemas)
  - [📈 Próximas Características](#-próximas-características)
  - [🤝 Contribución](#-contribución)
  - [📄 Licencia](#-licencia)
  - [👨‍💻 Desarrollador](#-desarrollador)

## 🎯 Características Principales

- ✅ **Sistema de Autenticación Completo** - Email/contraseña y OAuth (Google, GitHub)
- ✅ **Diseño Responsive** - Adaptable a todos los dispositivos
- ✅ **UI Moderna** - Componentes elegantes con Shadcn/UI
- ✅ **Validación de Formularios** - Validación robusta con Zod
- ✅ **Manejo de Estados** - Estados de carga y errores
- ✅ **Seguridad** - Autenticación segura con BetterAuth
- ✅ **Base de Datos** - PostgreSQL con Drizzle ORM
- 🔄 **Dashboard Interactivo** (En desarrollo)
- 🔄 **Gestión de Agentes IA** (En desarrollo)

## 🛠️ Stack Tecnológico

### Frontend
- **[Next.js](https://nextjs.org/)** v15.3.2 - Framework de React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[Shadcn/UI](https://ui.shadcn.com/)** - Biblioteca de componentes modernos
- **[Lucide React](https://lucide.dev/)** - Iconos SVG optimizados

### Backend & Base de Datos
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Neon](https://neon.com)** - Hosting de PostgreSQL serverless
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first
- **[Postgres.js](https://github.com/porsager/postgres)** - Cliente de PostgreSQL

### Autenticación
- **[BetterAuth](https://www.better-auth.com/)** - Sistema de autenticación moderno
- **OAuth Providers** - Google y GitHub integrados
- **Validación** - Zod para validación de esquemas

### Herramientas de Desarrollo
- **[ESLint](https://eslint.org/)** - Linting de código
- **[React Hook Form](https://react-hook-form.com/)** - Manejo de formularios
- **[Zod](https://zod.dev/)** - Validación de esquemas TypeScript

## ⚙️ Prerequisitos del Entorno

Antes de comenzar, asegúrate de tener instalado:

- **[Node.js](https://nodejs.org/)** >= 18.18
- **[npm](https://www.npmjs.com/)** (incluido con Node.js)
- **[Git](https://git-scm.com/)** para control de versiones

## 🚀 Configuración del Proyecto


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

### Componentes de Autenticación

#### SignInView (`/src/app/modules/auth/ui/views/sign-in-view.tsx`)
```tsx
// Características:
- Formulario de email y contraseña
- Botones OAuth para Google y GitHub
- Validación con Zod
- Estados de carga independientes
- Manejo de errores específicos
- Toggle de contraseña
- Diseño responsive
```

#### SignUpView (`/src/app/modules/auth/ui/views/sign-up-view.tsx`)
```tsx
// Características:
- Formulario completo de registro
- Confirmación de contraseña
- Validación de coincidencia de contraseñas
- Botones OAuth integrados
- Manejo de errores mejorado
- Estados de carga por proveedor
```

### Manejo de Errores

```typescript
// Errores OAuth manejados:
const errorMessages: Record<string, string> = {
  "access_denied": "Acceso denegado por el usuario",
  "invalid_request": "Solicitud inválida",
  "unauthorized": "No autorizado",
  "server_error": "Error del servidor",
  "temporarily_unavailable": "Servicio temporalmente no disponible",
  "invalid_client": "Cliente no válido",
  "unsupported_response_type": "Tipo de respuesta no soportado",
};
```

### Estados de Carga

- **Estados independientes** para cada proveedor OAuth
- **Spinners animados** durante las operaciones
- **Botones deshabilitados** durante cargas
- **Mensajes contextuales** de estado

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
```

### Componentes UI

#### Card Layout
- **Diseño de dos columnas** en desktop
- **Formulario izquierdo** - Interacciones del usuario
- **Panel derecho** - Branding y elementos visuales
- **Gradiente animado** con efectos glassmorphism

#### Elementos Decorativos
```tsx
// Efectos visuales implementados:
- Círculos con blur animados
- Puntos decorativos con animación ping
- Gradientes de fondo dinámicos
- Efectos hover con transiciones suaves
- Logo SVG con animaciones
```

### Características de Diseño

- **Glassmorphism** - Efectos de vidrio esmerilado
- **Animaciones suaves** - Transiciones de 300ms
- **Efectos hover** - Interacciones visuales
- **Sombras profundas** - `shadow-2xl` para elevación
- **Bordes redondeados** - `rounded-lg` para modernidad

## 📱 Responsive Design

```css
/* Breakpoints utilizados */
- Mobile: < 768px (Stack vertical)
- Tablet: 768px - 1024px (Adaptación de espacios)
- Desktop: > 1024px (Layout de dos columnas)

/* Clases responsive clave */
- `md:grid-cols-2` - Grid de dos columnas en desktop
- `hidden md:flex` - Panel derecho solo en desktop
- `p-4 md:p-8` - Padding adaptativo
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
npm run format           # Formatear código
```

## 📁 Estructura del Proyecto

```
agentesia/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   └── auth/
│   │   │       └── ui/
│   │   │           └── views/
│   │   │               ├── sign-in-view.tsx
│   │   │               └── sign-up-view.tsx
│   │   ├── (auth)/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   └── layout.tsx
│   ├── components/
│   │   └── ui/           # Componentes Shadcn/UI
│   ├── db/
│   │   ├── index.ts      # Configuración de Drizzle
│   │   └── schema.ts     # Esquemas de base de datos
│   ├── lib/
│   │   ├── auth.ts       # Configuración BetterAuth
│   │   ├── auth-client.ts # Cliente de autenticación
│   │   └── utils.ts      # Utilidades generales
│   └── styles/
│       └── globals.css   # Estilos globales
├── public/               # Archivos estáticos
├── .env.local           # Variables de entorno
├── drizzle.config.ts    # Configuración Drizzle
├── tailwind.config.ts   # Configuración Tailwind
└── package.json
```

## 🔐 Configuración de Seguridad

### Variables de Entorno Seguras
```bash
# Generar clave secreta segura
BETTER_AUTH_SECRET=$(openssl rand -base64 32)
```

### Configuración OAuth

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

## 🐛 Solución de Problemas

### Error: "postgres" no encontrado
```bash
# Solución
npm install postgres @types/pg
```

### Error: Variables de entorno faltantes
```bash
# Verificar archivo .env.local existe
# Verificar que todas las variables requeridas están definidas
```

### Error: Base de datos no conecta
```bash
# Verificar URL de conexión
# Verificar que la base de datos esté activa
npm run db:studio  # Probar conexión
```

### Problemas de OAuth
- Verificar client IDs y secrets
- Verificar URLs de callback
- Verificar configuración de dominios permitidos

## 📈 Próximas Características

- [ ] **Dashboard Principal** - Panel de control del usuario
- [ ] **Gestión de Agentes IA** - CRUD de agentes
- [ ] **Chat Interactivo** - Comunicación con agentes
- [ ] **Historial de Conversaciones** - Persistencia de chats
- [ ] **Configuración de Perfil** - Edición de datos de usuario
- [ ] **Notificaciones** - Sistema de alertas
- [ ] **Tema Oscuro** - Toggle de modo oscuro
- [ ] **Internacionalización** - Soporte multi-idioma
- [ ] **API REST** - Endpoints para integraciones
- [ ] **Tests Automatizados** - Suite de pruebas completa

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

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollador

**Felipe Reyes Sanchez**
- 🌐 Website: [felipesanchezdev.site](https://felipesanchezdev.site)
- 📧 Email: [contacto@felipesanchezdev.site](mailto:contacto@felipesanchezdev.site)
- 💼 LinkedIn: [Felipe Reyes Sanchez](https://linkedin.com/in/felipesanchezdev)
- 🐙 GitHub: [@felipesanchezdev](https://github.com/felipesanchezdev)

---

<div align="center">
  <p><strong>COGNIMEET</strong> - Conecta • Colabora • Crece</p>
  <p>Desarrollado por: por Felipe Reyes Sanchez</p>
</div>