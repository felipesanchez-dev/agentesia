# Security Policy

## 🛡️ Supported Versions

We actively support the following versions of Agentesia with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

## 🚨 Reporting a Vulnerability

We take the security of Agentesia seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Reporting Process

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **felipe@felipesanchez.site**

Include the following information in your report:

- **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths of source file(s)** related to the manifestation of the issue
- **The location of the affected source code** (tag/branch/commit or direct URL)
- **Any special configuration** required to reproduce the issue
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit the issue

### Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Status Update**: Within 7 days with a more detailed response
- **Resolution**: We aim to resolve critical vulnerabilities within 30 days

### Disclosure Policy

- We follow a **coordinated disclosure** approach
- We will acknowledge your contribution in our security advisories (unless you prefer to remain anonymous)
- We will not take legal action against security researchers who follow this policy

## 🔒 Security Measures

### Authentication & Authorization

- **BetterAuth v1.2.8** for secure authentication
- **OAuth 2.0** integration with Google and GitHub
- **Secure session management** with httpOnly cookies
- **CSRF protection** enabled by default
- **Rate limiting** on authentication endpoints

### Data Protection

- **Input validation** using Zod schemas on all endpoints
- **SQL injection prevention** through Drizzle ORM parameterized queries
- **XSS protection** via React's built-in escaping
- **Secure headers** configured in production
- **Environment variables** for sensitive data

### API Security

- **Type-safe APIs** with tRPC
- **Request validation** on all endpoints
- **Protected procedures** for authenticated actions
- **CORS configuration** for cross-origin requests
- **Error sanitization** to prevent information leakage

### Infrastructure Security

- **HTTPS enforcement** in production
- **Secure cookie settings** (Secure, SameSite)
- **Content Security Policy** (CSP) headers
- **Database connection encryption**
- **Regular dependency updates**

## 🔧 Security Configuration

### Environment Variables

Ensure these security-related environment variables are properly configured:

```env
# Required - Must be at least 32 characters
BETTER_AUTH_SECRET="your-secure-random-32-char-secret"

# Database connection with SSL
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require"

# Secure URLs in production
BETTER_AUTH_URL="https://yourdomain.com"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

### Production Security Checklist

- [ ] Use HTTPS/TLS encryption
- [ ] Configure secure headers (HSTS, CSP, etc.)
- [ ] Enable rate limiting
- [ ] Regular security audits
- [ ] Monitor for suspicious activity
- [ ] Keep dependencies updated
- [ ] Use strong, unique secrets
- [ ] Enable database SSL connections
- [ ] Configure proper CORS policies
- [ ] Implement logging and monitoring

## 🛠️ Security Best Practices for Contributors

### Code Security

- **Never commit secrets** to the repository
- **Use environment variables** for configuration
- **Validate all inputs** with Zod schemas
- **Sanitize outputs** to prevent XSS
- **Use parameterized queries** via Drizzle ORM
- **Follow TypeScript strict mode**

### Dependencies

- Run `npm audit` regularly to check for vulnerabilities
- Keep dependencies updated to latest secure versions
- Review new dependencies for security issues
- Use `npm ci` in production for reproducible builds

### Authentication

- Never store passwords in plain text
- Use secure session management
- Implement proper logout functionality
- Validate tokens on every request
- Use HTTPS for all authentication flows

## 🔍 Security Testing

We encourage security testing and welcome responsible disclosure. When testing:

- **Only test against your own instances**
- **Do not access other users' data**
- **Do not perform destructive testing**
- **Respect rate limits and server resources**
- **Follow responsible disclosure practices**

## 📋 Security Resources

### Internal Resources

- [Development Setup Guide](README.md#🚀-configuración-del-proyecto)
- [Environment Configuration](README.md#2-variables-de-entorno)
- [API Documentation](README.md#🔄-sistema-trpc-y-api)

### External Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
- [BetterAuth Security](https://www.better-auth.com/docs/concepts/security)

## 🚨 Known Security Considerations

### Current Limitations

- **Development Mode**: Additional debugging information may be exposed
- **Error Messages**: May contain stack traces in development
- **Rate Limiting**: Currently basic implementation
- **Audit Logging**: Limited user action logging

### Planned Improvements

- Enhanced rate limiting and DDoS protection
- Comprehensive audit logging system
- Advanced threat detection
- Security headers optimization
- Automated security scanning

## 📞 Contact Information

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

**Last Updated**: June 2025  
**Version**: 1.0  
**Review Schedule**: Quarterly