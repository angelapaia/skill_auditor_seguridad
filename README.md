# 🛡️ Auditoría de Seguridad Maestra (SecOps v2.0)

Skill que convierte tu asistente de IA en un **Arquitecto de Seguridad Senior (AppSec)** para auditar código antes de cada commit o despliegue a producción.

> Basado en el trabajo original de [JefferCB1](https://github.com/JefferCB1/skill_auditor_seguridad).

---

## 🚀 Instalación

Ejecuta este comando en la raíz de tu proyecto:

```bash
npx github:angelapaia/skill_auditor_seguridad
```

El instalador crea automáticamente `.agent/skills/auditor_seguridad/SKILL.md` en tu proyecto con todas las instrucciones para el asistente de IA.

---

## ⚙️ Cómo activarla

Una vez instalada, invoca la skill con cualquiera de estos triggers:

```
@auditar-seguridad
```
```
Revisa la seguridad del código
```

La IA ejecutará la auditoría completa antes de continuar con otras tareas.

---

## 🔍 Los 10 Vectores que Audita

| # | Vector | Qué detecta |
|---|--------|-------------|
| 1 | **Hardcoding de Secretos** | API Keys, tokens, URIs de BD en texto plano |
| 2 | **Endpoints Expuestos** | Rutas sin middleware de autenticación |
| 3 | **Falta de Validación** | Inputs sin Zod/Joi antes de tocar la BD |
| 4 | **Sin Rate Limiting** | Rutas públicas sin límite de peticiones |
| 5 | **Errores Silenciosos** | Llamadas externas sin try/catch |
| 6 | **Prompt Injection** | Input de usuario mezclado con System Prompt |
| 7 | **XSS** | innerHTML / dangerouslySetInnerHTML sin sanitizar |
| 8 | **Privilegios Excesivos** | Consultas sin filtro WHERE por usuario |
| 9 | **Dependencias Riesgosas** | Versiones `*` en librerías de auth/crypto |
| 10 | **Fuga en Logs** | console.log con objetos de usuario o tokens |

---

## 📋 Formato del Reporte

La skill genera un reporte tabular antes de corregir nada:

```
🛡️ REPORTE DE AUDITORÍA DE SEGURIDAD
Estado General: [Aprobado ✅ / Alerta ⚠️ / Crítico 🚨]
```

| 📄 Archivo | 🚨 Nivel | 🔍 Vector | 🐞 Problema | 🛠️ Solución |
|---|---|---|---|---|
| `auth.js` | CRÍTICO | 1 | API Key en texto plano | Mover a `.env` |

Al terminar, la IA pregunta si deseas que aplique las correcciones archivo por archivo.

---

## 🔗 Recursos relacionados

- [Manual de Seguridad para Desarrollo con IA](https://github.com/angelapaia/manual-seguridad-ia) — Los 10 riesgos con ejemplos de código y prompts preventivos

---

## 📄 Licencia

MIT © [angelapaia](https://github.com/angelapaia)

> Skill original creada por [Jefferson CB](https://github.com/JefferCB1). Mantenida y extendida por angelapaia.
