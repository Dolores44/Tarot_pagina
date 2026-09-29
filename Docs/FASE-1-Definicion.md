# FASE 1 — Análisis visual y definición del proyecto

**Marca:** Paola Tarot
**Referencias analizadas:** `IMAGEN GUIA/` (feed de reels, portada "The Lovers", logo, 2 flyers del catálogo de WhatsApp Business)

---

## 1. Análisis de las referencias

### Lo que realmente muestra la identidad

| Aspecto | Observación en las imágenes |
|---|---|
| **Color dominante** | Negro con tinte violeta (`#06020E`–`#0E0620`). Nunca negro puro salvo el "suelo" donde se asoma el gato. |
| **Segundo color** | Violeta / púrpura profundo en nubes-nebulosa (`#360956`–`#480869`) y un lila luminoso para títulos (`#C08BDD`). |
| **Dorado** | Es un **champagne cálido** (`#D9C29A`) en textos secundarios ("ENFOCADAS EN TU PAREJA ACTUAL", "TURNOS CON RESERVA PREVIA") y un **dorado viejo/bronce** en los marcos de cartas (portada The Lovers). No es un dorado amarillo brillante. |
| **Fucsia / magenta** | **Casi no aparece.** Solo como brillo rosado en algunas estrellas (`#E3A6C4`). Ver decisión en §2. |
| **Blanco** | Crema cálido (`#F6EFE4`) en títulos principales; gris lavanda en textos largos. |
| **Tipografía** | Cinzel (y su variante decorativa) en mayúsculas para títulos de reels. En flyers: títulos en mayúsculas romanas, cuerpo en serif humanista, y un script caligráfico puntual ("1 hora"). |
| **Composición** | Siempre **centrada y simétrica**. Título en dos tonos (línea crema + línea lila), subtítulo champagne con estrellas a los lados. |
| **Marco** | Rieles verticales punteados en los bordes izquierdo/derecho con estrellas de 4 puntas, rombos y lunas pequeñas. Sol en línea fina arriba-izquierda, luna creciente arriba-derecha. |
| **Texturas** | Campo de estrellas finas + nebulosa violeta en los laterales e inferior. Sin ruido ni grunge. |
| **Firma visual** | **Gato negro asomándose** desde abajo con ojos amarillos, apoyado sobre una franja negra. Aparece en logo, portada y flyers: es el elemento más reconocible. |
| **Cartas** | Ilustración detallada, marcos ornamentales finos (dorado o lila), números romanos, nombre de la carta abajo, rosas/flores violetas. |
| **Cajas de info** | Rectángulo redondeado, fondo casi negro, **borde violeta fino con glow leve**, divisor punteado interno, iconos en badge circular con aro. |
| **Ornamentos** | Filigrana fina con luna creciente centrada como cierre inferior. |
| **Iluminación** | Glow suave violeta alrededor de títulos y bordes. Nada neón. |

### Diferencias con lo que decía el brief

1. **El logo no es "un gato con estrellas"**: es un **emblema circular** con tres cartas (XIX El Sol, XVIII La Luna, XVII La Estrella) y el texto "Paola TAROT". El gato es un **elemento aparte** (silueta que se asoma). El archivo `logo gato.png` es una composición vertical completa (941×1672), no un logo recortado.
2. **El fucsia no es protagonista** en el material real; el acento cálido es el champagne/dorado.

---

## 2. Paleta definitiva

Basada en la paleta acordada (negro, violeta, fucsia, dorado, blanco cálido), **ajustada a los tonos medidos** en las imágenes.

| Token | Hex | Uso | Contraste s/ `night` |
|---|---|---|---|
| `night` | `#06020E` | Fondo base de toda la web | — |
| `surface` | `#0E0620` | Cards, header, cajas | — |
| `raised` | `#170A2E` | Hover de cards, dropdowns, acordeón abierto | — |
| `line` | `#692D88` | Bordes finos de cajas/cards (como los flyers) | decorativo |
| `nebula` | `#3A0A5C` | Nebulosas, fondos de sección alternos, glow | decorativo |
| `violet` | `#8E5BB5` | Iconos, rieles, estrellas, ornamentos | 4.2 (no texto chico) |
| `lilac` | `#C08BDD` | 2ª línea de títulos, links, estado activo del sidebar | 7.8 ✅ |
| `champagne` | `#D9C29A` | Subtítulos, precios, labels, focus ring | 11.9 ✅ |
| `gold` | `#B8925A` | Marcos ornamentales de cartas, divisores, bordes de CTA | 7.1 ✅ |
| `rose` | `#E3A6C4` | Brillo de estrellas, detalle puntual | 10.3 ✅ |
| `magenta` | `#D6479A` | **Solo** glow de hover, badge "Destacado", indicador | 5.1 ✅ |
| `cream` | `#F6EFE4` | Títulos principales, texto de botones | 18.0 ✅ |
| `muted` | `#BDB3C9` | Texto largo / párrafos | 10.2 ✅ |
| `cat-eye` | `#E8D44A` | Ojos del gato (único amarillo de la web) | decorativo |

**Decisión sobre el fucsia:** se mantiene en la paleta pero como **acento mínimo** (hover/glow/destacado), porque en el feed real casi no está. Si se usa más, la web deja de parecerse al Instagram.

**Reglas:**
- El negro violáceo domina (≈75% de la superficie), violeta ≈15%, acentos ≈10%.
- Gradientes solo en nebulosas y en el glow; nunca en botones ni en cards completas.
- El glow siempre es violeta (`nebula`/`violet`) con opacidad baja; magenta solo en hover.

### Botones
- **Primario ("Ver lecturas")**: fondo `violet`→ más oscuro `#5B2A86`, texto `cream` (contraste 8.7), borde `lilac` 1px, glow violeta al hover.
- **WhatsApp ("Consultar por WhatsApp")**: contorno `champagne`, texto `champagne`, icono WhatsApp; al hover fondo `champagne` con texto `night`. *No* usar el verde de WhatsApp: rompe la paleta (el flyer también lo muestra en violeta).
- **Terciario ("Ver detalles")**: texto `lilac` con subrayado ornamental animado.

---

## 3. Tipografía

| Rol | Fuente | Detalle |
|---|---|---|
| Títulos, nav, precios, nombres de servicios | **Cinzel** 400/600 | Mayúsculas nativas, `letter-spacing: 0.06em`. Números alineados, sirve para precios ($8.000). |
| Títulos hero muy grandes (opcional) | **Cinzel Decorative** 400 | Solo el H1 del hero, como en los reels. |
| Cuerpo, descripciones, FAQ | **Crimson Pro** 400/500 | Serif humanista, muy parecida al cuerpo de los flyers y legible en celular. Base 18px. |
| Acento caligráfico | *(no en v1)* | El script de "1 hora" se puede sumar después, solo para palabras sueltas. |

Todas desde `next/font/google` (auto-hosting, sin request a Google en runtime, sin layout shift).

**Escala (mobile → desktop):**
- H1 hero: 40 → 72px · H2 sección: 28 → 44px · H3 card: 18 → 22px · Precio: 22 → 26px · Cuerpo: 17 → 18px · Label: 13px Cinzel, tracking 0.12em

**Patrón de título de marca** (sacado de los flyers):
```
      ✦  SUBTÍTULO CHAMPAGNE  ✦       ← Cinzel 13px, champagne
         TÍTULO EN CREMA               ← Cinzel, cream
         SEGUNDA LÍNEA LILA            ← Cinzel, lilac, glow leve
            ——— ☾ ———                  ← ornamento, gold
```

---

## 4. Elementos gráficos reutilizables

Todos como **SVG inline propios** (livianos, recoloreables con los tokens):

1. `StarSparkle` — estrella de 4 puntas (violet/champagne/rose).
2. `SideRails` — rieles verticales punteados con estrellas, rombos y lunas. Van en los bordes del hero y de las cajas grandes. **Se ocultan en mobile**.
3. `SunLine` / `CrescentMoon` — sol y luna en línea fina para esquinas del hero.
4. `OrnamentDivider` — filigrana con luna creciente para separar secciones.
5. `PeekingCat` — el gato que se asoma, con ojos amarillos. Aparece **al pie del hero** y **encima del footer**. Parpadeo muy ocasional (cada ~8s), desactivado con `prefers-reduced-motion`.
6. `StarField` — fondo de estrellas estático en CSS/SVG, con un titileo sutil en unas pocas.
7. `Nebula` — nube violeta difusa (imagen WebP optimizada o gradiente radial) en laterales.

El **logo original** se usa como imagen, sin redibujar. El gato del hero/footer es un recurso gráfico aparte, no el logo.

---

## 5. Layout por página

### Header (todas las páginas)
```
┌──────────────────────────────────────────────────────────────┐
│ (◉) PAOLA TAROT            INICIO   CATÁLOGO   PREG. FRECUENTES │
└──────────────────────────────────────────────────────────────┘
```
- Fondo `surface` con 85% de opacidad + blur; línea inferior `line` de 1px con glow leve. Sticky.
- Emblema circular 44px + "PAOLA TAROT" en Cinzel.
- Link activo: `lilac` + estrella de 4 puntas debajo.
- **Mobile:** emblema + hamburguesa. El menú es un panel a pantalla completa con fondo `night`, estrellas, links grandes (Cinzel 24px), botón WhatsApp abajo y el gato asomándose al pie.

### Inicio (`/`)
1. **Hero** (100vh desktop, ~90svh mobile)
   - Fondo: cielo `night` + campo de estrellas + nebulosas laterales (como el logo).
   - Esquinas: sol (sup-izq) y luna creciente (sup-der) en línea fina. Rieles laterales.
   - Centro: **emblema circular grande** (280–380px) con glow violeta.
   - Debajo: frase corta (a definir) en Crimson Pro italic, color `muted`.
   - CTAs: [Ver lecturas] primario + [Consultar por WhatsApp] contorno champagne.
   - Base: **franja negra + gato asomándose**. Conecta directamente con los flyers.
2. **Presentación**: patrón de título de marca + 2–3 párrafos (texto a proveer) + ornamento.
3. **Qué tipo de lecturas hago**: 3–4 columnas con icono en badge circular (amor/pareja, preguntas puntuales, sesión libre, expareja), como las cajas de los flyers.
4. **Lecturas destacadas**: 3 cards (las `featured` de la base) + link "Ver todo el catálogo".
5. **Banner CTA al catálogo**: caja con borde `line`, rieles, "ABRÍ LAS PUERTAS A LAS RESPUESTAS" (frase del flyer).
6. **FAQ resumidas**: 3–4 acordeones + link a la página completa.
7. **CTA final WhatsApp**: "TURNOS CON RESERVA PREVIA" + botón grande + gato.

### Catálogo (`/catalogo`, `/catalogo/[categoria]`)
```
┌────────────┬──────────────────────────────────────────────┐
│ ✦ CATEGORÍAS│  LECTURAS                                    │
│            │  ┌────────┐ ┌────────┐ ┌────────┐            │
│ ▸ Todo     │  │ imagen │ │ imagen │ │ imagen │            │
│ ▸ Lecturas │  │  3:4   │ │        │ │        │            │
│ ▸ Velas    │  │NOMBRE  │ │        │ │        │            │
│            │  │$ 5.000 │ │        │ │        │            │
│  ☾         │  │[detalle][WA]       │ │        │            │
│ (gato)     │  └────────┘ └────────┘ └────────┘            │
└────────────┴──────────────────────────────────────────────┘
```
- **Sidebar** (260px, sticky): caja estilo flyer con borde `line` y riel punteado interno. Cada categoría con estrella; la activa en `lilac` con glow. Categorías sin productos activos → se muestran atenuadas con "Próximamente" (o se ocultan; es configurable).
- Los filtros son **links reales** (`/catalogo/lecturas`), no estado JS: se pueden compartir por WhatsApp y los indexa Google.
- **Grilla:** 3 col (≥1280px), 2 col (tablet), 1 col (mobile).
- **Mobile:** el sidebar pasa a una barra de chips horizontales (con scroll) debajo del título, o un desplegable "Filtrar: Lecturas ▾".
- Estado vacío: "Muy pronto habrá velas disponibles ✦" + CTA WhatsApp.

### Card de producto — **estilo carta de tarot**
- Proporción de imagen **3:4** (igual que los flyers del catálogo de WhatsApp).
- Marco doble: borde exterior `gold` 1px + borde interior `line`, esquinas con pequeños ornamentos (como las cartas de los reels).
- Badge de categoría arriba en Cinzel 11px champagne; badge "Destacado" con punto magenta.
- Nombre en Cinzel `cream`, descripción corta en `muted` (2 líneas máx.), precio en Cinzel `champagne`.
- Hover: sube 4px, el borde pasa a `lilac` y aparece un glow violeta/magenta leve.
- Botones: [Ver detalles] (texto) + [WhatsApp] (icono + texto en desktop, ancho completo en mobile).

### Detalle (`/catalogo/[categoria]/[producto]`)
- Desktop: 2 columnas → izquierda imagen grande en marco de carta; derecha breadcrumb, categoría, nombre (H1), precio, descripción completa, caja de "Información importante" (duración, modalidad, reserva previa) con badges circulares como en los flyers, botón WhatsApp grande.
- Mobile: imagen arriba, contenido abajo y **botón WhatsApp fijo en la parte inferior**.
- Abajo: "Otras lecturas" (3 cards de la misma categoría).

### Preguntas frecuentes (`/preguntas-frecuentes`)
- Patrón de título + acordeones con `<details>/<summary>` o `button` con `aria-expanded`.
- Cada ítem: borde inferior punteado `line`, estrella que rota al abrir, respuesta en Crimson Pro.
- Respuestas en un archivo de contenido editable (`content/faq.ts`), con placeholders `[COMPLETAR]` donde no hay datos. Lo único confirmado por las imágenes: **"Turnos con reserva previa"**.
- Cierre: "¿Te quedó alguna duda?" + WhatsApp.

### Footer
- Franja negra (la del gato) con el gato asomándose desde el borde superior.
- 3 columnas: emblema + "Paola Tarot" · navegación · Instagram / WhatsApp.
- Línea final: ornamento con luna + © año Paola Tarot.

---

## 6. Animaciones (lista cerrada)
| Efecto | Dónde | Detalle |
|---|---|---|
| Fade + subida 12px al entrar | Secciones, cards | Intersection Observer, una sola vez |
| Titileo de estrellas | Hero, 8–12 estrellas | opacidad 0.4↔1, 3–6s, desfasadas |
| Glow en hover | Botones, cards | transición 250ms |
| Parpadeo del gato | Hero, footer | cada ~8s |
| Rotación de la estrella | Acordeón FAQ | 45° al abrir |

Todo se desactiva con `prefers-reduced-motion`. Sin parallax, sin partículas en movimiento continuo, sin librerías de animación pesadas (CSS + un hook chico).

---

## 7. Arquitectura

**Stack:** Next.js (App Router) + React + TypeScript + Tailwind CSS + Supabase (PostgreSQL). Es el stack pedido y es el adecuado: páginas renderizadas en el servidor (SEO y velocidad desde Instagram), sin backend separado que mantener, y Supabase da base de datos, storage de imágenes y auth para el futuro `/admin`.

### Mapeo a las carpetas existentes
```
Tarot pagina/
├── FrontEnd/            → App Next.js (incluye el código de servidor: la "API" vive aquí)
├── SQL/                 → Migraciones, políticas RLS, seed inicial
├── Backend/             → Reservado: futura sincronización con Meta (Edge Function / script)
├── Docs/                → Documentación por fase
└── IMAGEN GUIA/         → Referencias (no se despliega)
```

### Estructura de `FrontEnd/`
```
src/
├── app/
│   ├── layout.tsx                 # fuentes, header, footer, metadata base
│   ├── page.tsx                   # Inicio
│   ├── catalogo/
│   │   ├── page.tsx               # todo el catálogo
│   │   ├── [categoria]/page.tsx
│   │   └── [categoria]/[producto]/page.tsx
│   ├── preguntas-frecuentes/page.tsx
│   ├── sitemap.ts · robots.ts · not-found.tsx · opengraph-image
│   └── (admin)/                   # futuro, protegido
├── components/
│   ├── layout/    Header, MobileMenu, Footer
│   ├── home/      Hero, Intro, ReadingTypes, FeaturedProducts, CtaBanner, FaqPreview
│   ├── catalog/   CategorySidebar, CategoryChips, ProductGrid, ProductCard, ProductDetail
│   ├── faq/       FaqAccordion
│   ├── ui/        Button, WhatsAppButton, SectionTitle, Badge, TarotFrame
│   └── ornaments/ StarSparkle, SideRails, SunLine, CrescentMoon, OrnamentDivider, PeekingCat, StarField
├── lib/
│   ├── config.ts        # SITE_NAME, WHATSAPP_NUMBER, INSTAGRAM_URL (desde env)
│   ├── whatsapp.ts      # buildWhatsAppUrl(product?) → encodeURIComponent
│   ├── format.ts        # formatPrice → "$5.000" (es-AR)
│   └── supabase/server.ts   # cliente solo servidor ("server-only")
├── services/
│   ├── catalog.repository.ts  # interfaz: getCategories, getProducts, getProductBySlug, getFeatured
│   ├── catalog.mock.ts        # Fase 4
│   └── catalog.supabase.ts    # Fase 6
├── types/        catalog.ts (Category, Product — solo campos públicos)
├── validation/   schemas con Zod (slugs, ids, precios)
├── content/      faq.ts, home.ts (textos editables)
└── database/     tipos generados de Supabase
```

### Flujo de datos y seguridad
```
Navegador ──► Next.js Server Component ──► services/ (repositorio) ──► Supabase (RLS)
                (sin datos sensibles al cliente; solo DTO públicos)
```
- El catálogo público se lee **desde el servidor**. El navegador nunca habla con la base.
- **RLS en Supabase:** el rol anónimo solo puede `SELECT` productos/categorías con `active = true`. Sin permisos de escritura.
- `SUPABASE_SERVICE_ROLE_KEY` y los futuros tokens de Meta viven **solo** en variables de entorno del servidor; `import "server-only"` impide que lleguen al bundle del cliente.
- Parámetros de URL (`[categoria]`, `[producto]`) validados con Zod (regex de slug y largo máximo) → 404 si no son válidos.
- Consultas siempre con el query builder de Supabase (parametrizado), sin SQL concatenado.
- Los DTO públicos excluyen `created_at`, `updated_at` e ids internos que no hagan falta.
- Headers de seguridad (CSP, X-Frame-Options, Referrer-Policy) en `next.config`.
- CSRF: no aplica al sitio público (no hay formularios ni mutaciones). Para `/admin` se usarán Server Actions (que traen protección de origen incluida) + Supabase Auth.
- Caché: ISR (`revalidate`) para que la web siga funcionando rápido y sin depender de la base en cada visita.

### Modelo de datos (Fase 5)
Se implementa el modelo del brief (Category 1—N Product) con estos agregados mínimos:
- `price` como `integer` en pesos (sin decimales), con `CHECK (price >= 0)`.
- `slug` único con `CHECK` de formato.
- `category.sort_order` para ordenar el sidebar.
- `product.details jsonb` opcional para la "información importante" (duración, modalidad), así no hay que tocar el esquema para cada tipo de producto.
- `product.image_alt` para accesibilidad.
- `product.external_id` nullable → preparado para una futura importación desde Meta sin duplicar productos.

### WhatsApp
- Una única variable `NEXT_PUBLIC_WHATSAPP_NUMBER` (es pública por naturaleza: aparece en el link). Formato internacional sin `+`.
- Número confirmado: +54 9 3765 01-2537 → **`5493765012537`**.
- Mensaje: `Hola! Quisiera consultar por la ${nombre} de ${precio}.` → `encodeURIComponent`.

---

## 8. Catálogo de WhatsApp Business — análisis preliminar

> Esta sección es preliminar. La verificación detallada contra la documentación actual de Meta se hace antes de la Fase 8, como pide el brief.

- No se va a hacer **scraping** de la app.
- El acceso oficial a catálogos existe a través de la **Graph API de Meta**, sobre catálogos de **Commerce Manager** vinculados a una cuenta de **WhatsApp Business Platform (Cloud API)**. Requiere Business Manager verificado, una app de Meta, un system user token y permisos del tipo `catalog_management` / `business_management` / `whatsapp_business_management`.
- El catálogo armado desde la **app móvil de WhatsApp Business** no necesariamente está expuesto por API. Hay que verificarlo.
- **Contexto práctico:** hoy el catálogo tiene 5 servicios y cada uno es un **flyer con el texto dentro de la imagen**. Una sincronización automática traería imágenes y poco texto estructurado. Cargarlos a mano en la base toma minutos.

**Recomendación:** la base propia es la fuente de verdad desde el día 1. La columna `external_id` y la carpeta `Backend/` quedan preparadas para una importación futura. La web nunca depende de Meta para funcionar.

---

## 9. Observaciones sobre las imágenes de productos

- Los flyers del catálogo (`catalogo1`, `catalogo2`) son 3:4 y **tienen precio y teléfono escritos en la imagen**. Si el precio cambia en la base pero no en el flyer, van a quedar inconsistentes.
  - Recomendación: para la web usar versiones **sin precio ni teléfono** (solo título/ilustración), o ilustraciones de cartas como las de los reels.
- Relación flyer ↔ servicio: "5 preguntas para tu relación — $8.000" = *Lectura sobre tu relación*; "Sesión de tarot 1 hora — $18.000" = *Lectura de 1 hora*. Faltan imágenes de las otras 3 lecturas (se usará un placeholder con marco de carta).
- `catalogo1.txt` en realidad es un JPEG (versión en alta del flyer de 5 preguntas). Conviene renombrarlo a `.jpg`.

---

## 10. Datos confirmados

| Dato | Valor |
|---|---|
| Logo circular | `IMAGEN GUIA/logocircular.jpeg` (1254×1254, fondo negro sin transparencia). Se aplicará una máscara circular para que las esquinas negras no se vean sobre el fondo violáceo; el arte del logo no se modifica. |
| WhatsApp | +54 9 3765 01-2537 → `WHATSAPP_NUMBER=5493765012537` |
| Instagram | `tarotpaola25` → https://www.instagram.com/tarotpaola25/ |
| Precios | **Solo en la base de datos**, editables sin tocar el código. Las imágenes son informativas. |

## 11. Pendientes (no bloquean)

| # | Pendiente | Cuándo se necesita |
|---|---|---|
| 1 | Textos: presentación, frase del hero, descripciones completas de las 5 lecturas, respuestas FAQ | Se usan placeholders `[COMPLETAR]` |
| 2 | Imágenes para las 3 lecturas sin flyer | Placeholder con marco de carta |
| 3 | Dominio previsto | Fase 10 (SEO, sitemap, Open Graph) |
