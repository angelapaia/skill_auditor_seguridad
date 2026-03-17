# 🛡️ SecOps Maestro — Auditoría de Seguridad Total (v3.0)

Skill que convierte tu asistente de IA en un **Arquitecto de Seguridad de Aplicaciones (AppSec) nivel Principal** para auditar, configurar y generar código seguro en cada etapa del desarrollo.

> Basado en el trabajo original de [JefferCB1](https://github.com/JefferCB1/skill_auditor_seguridad).

---

## 🚀 Instalación

Ejecuta este comando en la raíz de tu proyecto:

```bash
npx github:angelapaia/skill_auditor_seguridad
```

El instalador crea automáticamente `.agent/skills/auditor_seguridad/SKILL.md` en tu proyecto con todas las instrucciones para el asistente de IA.

---

## ⚙️ 5 Modos de Operación

### Modo 1 — Auditoría Completa
```
@auditar-seguridad
```
Escanea todo el proyecto con los 20 vectores de ataque. Detecta el stack automáticamente, genera un reporte tabular con severidad, código vulnerable, corrección exacta y Security Score de 0 a 100.

### Modo 2 — Setup de Entorno Seguro
```
@setup-seguridad
```
Configura `.gitignore`, `.env.example`, hooks de Claude Code para detección automática de secrets, y scripts de auditoría en `package.json`.

### Modo 3 — Generación Segura de Código
```
@generar-seguro [descripción de lo que quieres]
```
Genera el módulo solicitado con todas las restricciones de seguridad aplicadas desde el inicio. Incluye auto-auditoría post-generación.

### Modo 4 — Emergencia
```
@emergencia
```
Protocolo de crisis para cuando se expuso una credencial. Pasos ordenados: revocar en 30 segundos, limpiar historial de git, verificar acceso no autorizado, post-mortem.

### Modo 5 — Explicar Riesgo
```
@riesgo [1-20]
```
Explica en detalle cualquier vector: qué es, por qué la IA lo genera, analogía del mundo real, ejemplo vulnerable, ejemplo seguro, prompt preventivo y comando de detección.

---

## 🔍 Los 20 Vectores que Audita

### Vectores Clásicos (1-10)

| # | Vector | Qué detecta | Severidad |
|---|--------|-------------|-----------|
| 1 | **Hardcoding de Secretos** | API Keys, tokens, URIs de BD en texto plano | CRÍTICO |
| 2 | **Endpoints Sin Autenticación** | Rutas POST/PUT/DELETE sin middleware de auth | CRÍTICO |
| 3 | **Inputs Sin Validación** | req.body/query usados sin Zod/Joi/Pydantic | ALTO |
| 4 | **Sin Rate Limiting** | Rutas públicas sin límite de peticiones | ALTO |
| 5 | **Manejo Ciego de Errores** | Llamadas externas sin try/catch, stack traces al cliente | ALTO |
| 6 | **Prompt Injection** | Input de usuario mezclado con System Prompt de LLMs | CRÍTICO |
| 7 | **XSS** | innerHTML / dangerouslySetInnerHTML sin sanitizar | CRÍTICO |
| 8 | **Privilegios Excesivos** | Queries sin filtro WHERE por usuario autenticado | CRÍTICO |
| 9 | **Dependencias Riesgosas** | Versiones `*` en librerías de auth/crypto, CVEs conocidos | MEDIO-ALTO |
| 10 | **Fuga en Logs** | console.log con objetos de usuario, tokens o PII | MEDIO |

### Vectores Avanzados IA (11-20)

| # | Vector | Qué detecta | Severidad |
|---|--------|-------------|-----------|
| 11 | **IDOR** | Acceso a recursos de otros usuarios cambiando el ID en URL | CRÍTICO |
| 12 | **CSRF** | Formularios sin token CSRF, CORS con `origin: '*'` | ALTO |
| 13 | **SQL/NoSQL Injection** | Queries por concatenación de strings sin prepared statements | CRÍTICO |
| 14 | **Exposición de Datos en Frontend** | API responses con campos internos (password, hash, adminFlags) | ALTO |
| 15 | **JWT Inseguro** | Sin expiración, algoritmo `none`, en localStorage | ALTO-CRÍTICO |
| 16 | **File Upload Sin Restricciones** | Sin validación de tipo, sin límite de tamaño, nombres sin sanitizar | CRÍTICO |
| 17 | **SSRF** | fetch/axios a URLs provenientes del input del usuario | CRÍTICO |
| 18 | **Insecure Deserialization** | JSON.parse/eval sobre datos no confiables, pickle.loads | ALTO |
| 19 | **Secrets en Variables del Frontend** | NEXT_PUBLIC_ / VITE_ / REACT_APP_ con claves privadas | CRÍTICO |
| 20 | **Dependencias IA Sin Versión Fija** | openai/anthropic/langchain con `*`, prompts con datos sensibles | MEDIO |

---

## 📋 Formato del Reporte (Modo 1)

```
🛡️ REPORTE DE AUDITORÍA SECOPS v3.0
Estado General: [🟢 APROBADO / 🟡 ALERTA / 🔴 CRÍTICO]

🏆 Security Score: XX/100
```

| # | 📄 Archivo | 📍 Línea | 🚨 Severidad | 🔍 Vector | 🐞 Problema | 🛠️ Corrección |
|---|-----------|---------|-------------|-----------|-------------|--------------|
| 1 | `auth.js` | L:42 | CRÍTICO | V1-Secrets | API key hardcodeada | Mover a `process.env.OPENAI_KEY` |

Al terminar, la IA ofrece aplicar las correcciones archivo por archivo o todas de una vez.

---

## 🔗 Recursos relacionados

- [Manual de Seguridad para Desarrollo con IA](https://github.com/angelapaia/manual-seguridad-ia) — Los 20 riesgos con ejemplos de código y prompts preventivos

---

## 📄 Licencia

MIT © [angelapaia](https://github.com/angelapaia)

> Skill original creada por [Jefferson CB](https://github.com/JefferCB1). Mantenida y extendida por angelapaia.
