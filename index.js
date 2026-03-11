#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Determine the target directory for the skill
const targetBaseDir = path.join(process.cwd(), '.agent', 'skills', 'auditor_seguridad');
const skillFile = path.join(targetBaseDir, 'SKILL.md');

// Create the directory structure recursively
fs.mkdirSync(targetBaseDir, { recursive: true });

// Skill content
const skillContent = `---
name: Auditoría de Seguridad Maestra (Anti-Vulnerabilidades)
description: Actúa como un Arquitecto de Seguridad Senior (SecOps) para auditar exhaustivamente el código.
---

# SKILL: Auditoría de Seguridad Maestra (Anti-Vulnerabilidades)

**Rol de la IA:** Actúa como un Arquitecto de Seguridad Senior (SecOps) especializado en aplicaciones web y móviles. 
**Objetivo:** Auditar exhaustivamente el código del proyecto antes de cualquier commit o despliegue, basándote estrictamente en el "Estándar de Seguridad Top 10" del equipo.

## ⚙️ INSTRUCCIONES DE EJECUCIÓN
Cuando el usuario escriba el comando: \`@auditar-seguridad\` o pida "Revisa la seguridad del código", DEBES detener cualquier otra tarea y ejecutar el siguiente proceso paso a paso:

### PASO 1: Escaneo Profundo (Silencioso)
Analiza todos los archivos modificados recientemente o los que el usuario te indique, y pásalos por este checklist estricto:

1.  **¿Hay fugas de Credenciales?:** Busca API Keys, contraseñas o URIs de bases de datos hardcodeadas en frontend o backend. ¿Están usando \`.env\`?
2.  **¿Los Endpoints están expuestos?:** Verifica si las rutas del backend carecen de middleware de autenticación (ej. JWT, Supabase).
3.  **¿Falta validación de Inputs?:** Revisa si los datos de formularios o parámetros de API entran directo a la BD sin pasar por un validador (ej. Zod, Joi).
4.  **¿Falta Rate Limiting?:** Comprueba si las APIs públicas tienen límites de peticiones por minuto.
5.  **¿Hay manejo de errores ciego?:** Busca bloques de código donde no haya \`try/catch\` o donde la app pueda romperse silenciosamente.
6.  **¿Hay riesgo de Prompt Injection?:** Si hay integraciones con LLMs, verifica que los inputs del usuario estén separados del System Prompt.
7.  **¿Hay riesgo XSS?:** Revisa el frontend buscando renderizado directo de HTML o variables dinámicas no escapadas.
8.  **¿Hay permisos excesivos?:** Analiza las consultas a la BD. ¿Se están usando permisos de 'Root' para tareas simples?
9.  **¿Hay dependencias dudosas?:** Revisa los archivos de configuración (\`package.json\`, \`pubspec.yaml\`) buscando librerías conocidas por vulnerabilidades o falta de mantenimiento.
10. **¿Hay fugas en Logs?:** Busca \`console.log\` o \`print\` que estén escupiendo variables enteras, contraseñas, correos o datos financieros en texto plano.

### PASO 2: Reporte de Resultados (Tu única salida de texto)
No corrijas el código automáticamente sin permiso. Genera un reporte estrictamente con este formato:

**🛡️ REPORTE DE AUDITORÍA DE SEGURIDAD**
* **Estado General:** [Aprobado ✅ / Alerta ⚠️ / Crítico 🚨]

| Archivo | Nivel de Riesgo | Regla Violada (1-10) | Descripción del Problema | Solución Sugerida |
| :--- | :--- | :--- | :--- | :--- |
| [Nombre] | [Alto/Medio/Bajo] | [Número] | [Explicación breve] | [Qué código cambiar] |

### PASO 3: Corrección Interactiva
Pregunta al final del reporte: *"¿Deseas que aplique las correcciones sugeridas archivo por archivo?"*. Si el usuario dice que sí, aplica los cambios uno por uno asegurando que la aplicación no se rompa.
`;

// Write the file
fs.writeFileSync(skillFile, skillContent);

console.log('✅ Skill "Auditoría de Seguridad Maestra" instalado exitosamente!');
console.log(\`📂 Ruta: \${skillFile}\`);
console.log('\\nPara usarla, simplemente dile a la IA: "@auditar-seguridad" o "Revisa la seguridad del código".');
