import type { NextConfig } from "next";

/*
 * Headers de seguridad básicos para todo el sitio.
 * La Content-Security-Policy completa se define en la Fase 10
 * (revisión final de seguridad y SEO).
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  /*
   * Solo desarrollo: permite abrir `npm run dev` desde el celular por la IP de la red local
   * (ej. http://192.168.1.12:3000). Sin esto Next bloquea sus recursos de desarrollo
   * para otros orígenes y la página no se hidrata. No afecta a producción.
   */
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
