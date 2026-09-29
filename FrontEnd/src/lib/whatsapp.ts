import { siteConfig } from "@/config/site";
import { publicEnv } from "@/lib/env";
import { formatPrice } from "@/lib/format";

type WhatsAppProduct = {
  name: string;
  price: number;
};

/** Mensaje prearmado: "Hola! Quisiera consultar por la Lectura de pareja de $5.000." */
export function buildProductMessage(product: WhatsAppProduct): string {
  return `Hola! Quisiera consultar por la ${product.name} de ${formatPrice(product.price)}.`;
}

/**
 * Único punto donde se construyen los links de WhatsApp.
 * El número sale de la variable de entorno; el texto se codifica para URL.
 * Se usa desde Server Components: los de cliente reciben el link ya armado.
 */
export function buildWhatsAppUrl(product?: WhatsAppProduct): string {
  const message = product ? buildProductMessage(product) : siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${publicEnv.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
