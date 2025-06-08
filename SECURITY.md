# Security Policy

## 🛡️ Versiones Soportadas

Ofrecemos soporte activo con actualizaciones de seguridad para las siguientes versiones de Agentesia:

| Versión | Soportada          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

## 🚨 Reportar una Vulnerabilidad

Tomamos la seguridad de Agentesia muy en serio. Si crees que has encontrado una vulnerabilidad de seguridad, por favor repórtala siguiendo el proceso descrito a continuación.

### Proceso de Reporte

**Por favor NO reportes vulnerabilidades de seguridad a través de issues públicos de GitHub.**

En su lugar, repórtalas por correo electrónico a: **felipe@felipesanchezdev.site**

Incluye la siguiente información en tu reporte:

- **Tipo de problema** (ej. desbordamiento de buffer, inyección SQL, cross-site scripting, etc.)
- **Rutas completas de los archivos fuente** relacionados con la manifestación del problema
- **La ubicación del código fuente afectado** (tag/branch/commit o URL directa)
- **Cualquier configuración especial** requerida para reproducir el problema
- **Instrucciones paso a paso** para reproducir el problema
- **Prueba de concepto o código exploit** (si es posible)
- **Impacto del problema**, incluyendo cómo un atacante podría explotar el problema

### Cronograma de Respuesta

- **Respuesta Inicial**: Dentro de 48 horas de recibir tu reporte
- **Actualización de Estado**: Dentro de 7 días con una respuesta más detallada
- **Resolución**: Nuestro objetivo es resolver vulnerabilidades críticas dentro de 30 días

### Política de Divulgación

- Seguimos un enfoque de **divulgación coordinada**
- Reconoceremos tu contribución en nuestros avisos de seguridad (a menos que prefieras permanecer anónimo)
- No tomaremos acción legal contra investigadores de seguridad que sigan esta política

## 🔒 Medidas de Seguridad

### Autenticación y Autorización

- **BetterAuth v1.2.8** para autenticación segura
- **OAuth 2.0** integración con Google y GitHub
- **Gestión segura de sesiones** con cookies httpOnly
- **Protección CSRF** habilitada por defecto
- **Limitación de velocidad** en endpoints de autenticación

### Protección de Datos

- **Validación de entrada** usando esquemas Zod en todos los endpoints
- **Prevención de inyección SQL** a través de consultas parametrizadas con Drizzle ORM
- **Protección XSS** mediante el escape integrado de React
- **Cabeceras seguras** configuradas en producción
- **Variables de entorno** para datos sensibles

### Seguridad de API

- **APIs type-safe** con tRPC
- **Validación de solicitudes** en todos los endpoints
- **Procedimientos protegidos** para acciones autenticadas
- **Configuración CORS** para solicitudes cross-origin
- **Sanitización de errores** para prevenir filtración de información

### Seguridad de Infraestructura

- **Aplicación de HTTPS** en producción
- **Configuración segura de cookies** (Secure, SameSite)
- **Cabeceras de Política de Seguridad de Contenido** (CSP)
- **Cifrado de conexión a base de datos**
- **Actualizaciones regulares de dependencias**

## 🔧 Configuración de Seguridad

### Variables de Entorno

Asegúrate de que estas variables de entorno relacionadas con seguridad estén configuradas correctamente:

```env
# Requerido - Debe tener al menos 32 caracteres
BETTER_AUTH_SECRET="tu-secreto-aleatorio-seguro-de-32-caracteres"

# Conexión a base de datos con SSL
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require"

# URLs seguras en producción
BETTER_AUTH_URL="https://tudominio.com"
NEXT_PUBLIC_APP_URL="https://tudominio.com"
```

### Lista de Verificación de Seguridad en Producción

- [ ] Usar cifrado HTTPS/TLS
- [ ] Configurar cabeceras seguras (HSTS, CSP, etc.)
- [ ] Habilitar limitación de velocidad
- [ ] Auditorías de seguridad regulares
- [ ] Monitorear actividad sospechosa
- [ ] Mantener dependencias actualizadas
- [ ] Usar secretos fuertes y únicos
- [ ] Habilitar conexiones SSL de base de datos
- [ ] Configurar políticas CORS apropiadas
- [ ] Implementar logging y monitoreo

## 🛠️ Mejores Prácticas de Seguridad para Contribuidores

### Seguridad de Código

- **Nunca hacer commit de secretos** al repositorio
- **Usar variables de entorno** para configuración
- **Validar todas las entradas** con esquemas Zod
- **Sanitizar salidas** para prevenir XSS
- **Usar consultas parametrizadas** via Drizzle ORM
- **Seguir el modo estricto de TypeScript**

### Dependencias

- Ejecutar `npm audit` regularmente para verificar vulnerabilidades
- Mantener dependencias actualizadas a las últimas versiones seguras
- Revisar nuevas dependencias por problemas de seguridad
- Usar `npm ci` en producción para builds reproducibles

### Autenticación

- Nunca almacenar contraseñas en texto plano
- Usar gestión segura de sesiones
- Implementar funcionalidad de logout apropiada
- Validar tokens en cada solicitud
- Usar HTTPS para todos los flujos de autenticación

## 🔍 Pruebas de Seguridad

Alentamos las pruebas de seguridad y damos la bienvenida a la divulgación responsable. Al probar:

- **Solo prueba contra tus propias instancias**
- **No accedas a datos de otros usuarios**
- **No realices pruebas destructivas**
- **Respeta los límites de velocidad y recursos del servidor**
- **Sigue prácticas de divulgación responsable**

## 📋 Recursos de Seguridad

### Recursos Internos

- [Guía de Configuración de Desarrollo](README.md#🚀-configuración-del-proyecto)
- [Configuración de Entorno](README.md#2-variables-de-entorno)
- [Documentación de API](README.md#🔄-sistema-trpc-y-api)

### Recursos Externos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mejores Prácticas de Seguridad Node.js](https://nodejs.org/en/docs/guides/security/)
- [Cabeceras de Seguridad Next.js](https://nextjs.org/docs/advanced-features/security-headers)
- [Seguridad BetterAuth](https://www.better-auth.com/docs/concepts/security)

## 🚨 Consideraciones de Seguridad Conocidas

### Limitaciones Actuales

- **Modo de Desarrollo**: Información adicional de debugging puede estar expuesta
- **Mensajes de Error**: Pueden contener stack traces en desarrollo
- **Limitación de Velocidad**: Actualmente implementación básica
- **Logging de Auditoría**: Logging limitado de acciones de usuario

### Mejoras Planificadas

- Mejora de limitación de velocidad y protección DDoS
- Sistema integral de logging de auditoría
- Detección avanzada de amenazas
- Optimización de cabeceras de seguridad
- Escaneo automatizado de seguridad

## 📞 Información de Contacto

<div align="center">
  <img src="https://github.com/felipesanchez-dev.png" width="120" height="120" style="border-radius: 50%; border: 3px solid #16a34a;" alt="Felipe Reyes Sanchez" />
  
  **Felipe Reyes Sánchez**  
  *Desarrollador Full Stack & Entusiasta UI/UX*
</div>

<div align="center">
  
[![Sitio Web](https://img.shields.io/badge/Sitio_Web-felipesanchezdev.site-green?style=for-the-badge&logo=safari)](https://felipesanchezdev.site)
[![Email](https://img.shields.io/badge/Email-felipe@felipesanchezdev.site-red?style=for-the-badge&logo=gmail)](mailto:felipe@felipesanchezdev.site)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Felipe_Reyes_Sanchez-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/felipereyessa)
[![GitHub](https://img.shields.io/badge/GitHub-@felipesanchez--dev-black?style=for-the-badge&logo=github)](https://github.com/felipesanchez-dev)
[![Instagram](https://img.shields.io/badge/Instagram-@felipesanchez__dev-purple?style=for-the-badge&logo=instagram)](https://www.instagram.com/felipesanchez_dev)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+573102_452542-green?style=for-the-badge&logo=whatsapp)](https://wa.me/573102452542)

</div>

---

**Última Actualización**: Junio 2025  
**Versión**: 1.2  
**Cronograma de Revisión**: Trimestral