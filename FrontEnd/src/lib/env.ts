import { z } from "zod";

/**
 * Variables de entorno PÚBLICAS (prefijo NEXT_PUBLIC_).
 * Se validan al iniciar: si falta o está mal un valor, la app falla en build
 * en lugar de generar links rotos.
 *
 * Los secretos (claves de Supabase con permisos, tokens de Meta) NUNCA van acá:
 * se leen solo desde módulos marcados con `import "server-only"`.
 */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z
    .string()
    .regex(/^\d{10,15}$/, "Formato internacional, solo dígitos y sin '+' (ej: 5493765012537)"),
});

// Acceso explícito a cada variable: Next.js solo inyecta en el cliente
// las variables NEXT_PUBLIC_ referenciadas literalmente.
export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
});
