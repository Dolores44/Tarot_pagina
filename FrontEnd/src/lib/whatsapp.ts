import { siteConfig } from "@/config/site";
import { publicEnv } from "@/lib/env";
import type { Product } from "@/types/catalog";

/** "Hola! Quisiera consultar por la Vela de limpieza de 3 días." (sin precio) */
export function buildProductMessage(product: Pick<Product, "whatsappSubject">): string {
  return `Hola! Quisiera consultar por ${product.whatsappSubject}.`;
}

/**
 * Único punto donde se construyen los links de WhatsApp.
 * El número sale de la variable de entorno; el texto se codifica para URL.
 * Se usa desde Server Components: los de cliente reciben el link ya armado.
 */
export function buildWhatsAppUrl(product?: Pick<Product, "whatsappSubject">): string {
  const message = product ? buildProductMessage(product) : siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${publicEnv.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
