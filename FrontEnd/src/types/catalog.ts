/**
 * Tipos del catálogo local. Los datos viven en src/content/catalog.ts.
 * No hay precios: cada producto se consulta por WhatsApp.
 */

export type Category = {
  slug: string;
  name: string;
  /** Texto opcional bajo el título de la categoría */
  description?: string;
};

export type CatalogImage = {
  /** Ruta dentro de /public */
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Dato breve para la caja "Información" del detalle (ej. Duración: 30 minutos) */
export type ProductDetail = {
  label: string;
  value: string;
};

/**
 * Bloque especial del detalle:
 * - "spread": posiciones numeradas de una tirada (Amor en Conexión)
 * - "list": lista de nombres (ej. los 7 chakras)
 */
export type ProductSection = {
  title: string;
  style: "spread" | "list";
  items: string[];
};

/**
 * Parte de un combo. Si apunta a otro producto (`productSlug`), el detalle
 * reutiliza su información y enlaza a él: el contenido no se duplica.
 * Si no existe como producto propio (ej. la vela abre caminos), se describe acá.
 */
export type ComboPart =
  | { productSlug: string }
  | { title: string; subtitle?: string; highlights: string[] };

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  subtitle?: string;
  /** Texto breve de la card */
  shortDescription: string;
  /** Párrafo opcional del detalle */
  description?: string;
  /** Lista principal del detalle (los puntos del banner) */
  highlights: string[];
  /** Frase destacada con tratamiento especial */
  quote?: string;
  details?: ProductDetail[];
  sections?: ProductSection[];
  includes?: ComboPart[];
  /** Banner real del producto. Sin imagen: carta ornamental */
  image?: CatalogImage;
  /** Insignia de combo */
  isCombo?: boolean;
  /**
   * Descuento SOLO si figura en el material real (ej. "20% OFF").
   * Nunca inventarlo ni calcularlo.
   */
  discount?: string;
  /** Enlace a un video explicativo (se muestra solo si está cargado) */
  videoUrl?: string;
  featured?: boolean;
  /** Nebulosa de fondo en el detalle (solo visual; ej. el fucsia del banner de Amor en Conexión) */
  nebula?: "fuchsia";
  /**
   * Cómo se nombra el producto en el mensaje de WhatsApp:
   * "Hola! Quisiera consultar por {whatsappSubject}."
   */
  whatsappSubject: string;
};

export type CategoryWithCount = Category & {
  productCount: number;
};
