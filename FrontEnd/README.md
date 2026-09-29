# Paola Tarot — Web

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

La definición visual y la arquitectura están en [`../Docs/FASE-1-Definicion.md`](../Docs/FASE-1-Definicion.md).

## Requisitos
- Node.js 20.9 o superior (instalado: 24 LTS)

## Primer uso
```bash
cp .env.example .env.local   # completar valores
npm install
npm run dev                  # http://localhost:3000
```

## Scripts
| Comando | Uso |
|---|---|
| `npm run dev` | Desarrollo con recarga |
| `npm run build` | Build de producción (también valida tipos) |
| `npm run start` | Servir el build |
| `npm run lint` | ESLint |

## Dónde editar
| Qué | Archivo |
|---|---|
| Nombre, Instagram, navegación, logo | `src/config/site.ts` |
| Número de WhatsApp / URL del sitio | `.env.local` |
| Colores y tipografías (tokens) | `src/app/globals.css` (`@theme`) |
| Mensaje de WhatsApp | `src/lib/whatsapp.ts` |

## Estructura
```
src/
├── app/          rutas, layout, metadata, íconos
├── components/   UI (desde Fase 3)
├── config/       configuración de la marca
├── lib/          env, formato de precios, links de WhatsApp
├── services/     acceso a datos del catálogo (interfaz + implementaciones)
├── types/        DTO públicos
└── validation/   esquemas Zod para datos no confiables
```
