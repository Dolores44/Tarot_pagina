import Link from "next/link";
import { TarotCardFace } from "@/components/catalog/TarotCardFace";
import { ContentText } from "@/components/ui/ContentText";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { productPath } from "@/services/catalog.service";
import type { Product } from "@/types/catalog";

type Props = {
  product: Product;
  headingLevel?: "h2" | "h3";
  showCategory?: boolean;
};

/**
 * Carta de un producto: frente de tarot + nombre, precio discreto y dos
 * acciones en texto (detalle y WhatsApp). Se usa en Inicio, catálogo y detalle.
 */
export function ProductCard({ product, headingLevel: Heading = "h3", showCategory = false }: Props) {
  const href = productPath(product);

  return (
    <article className="group mx-auto flex h-full w-full max-w-sm flex-col items-center text-center">
      {/* La carta es un atajo visual; para teclado y lectores el link es el título */}
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="block w-full max-w-[15rem] transition duration-500 group-hover:-translate-y-1.5 sm:max-w-[17rem]"
      >
        <TarotCardFace
          product={product}
          number={product.cardNumber}
          className="transition-shadow duration-500 group-hover:shadow-glow-magenta"
        />
      </Link>

      {showCategory && (
        <p className="mt-7 font-display text-[0.68rem] tracking-label text-champagne/80 uppercase">
          {product.categoryName}
        </p>
      )}
      <Heading className={`${showCategory ? "mt-2" : "mt-7"} text-lg uppercase sm:text-xl`}>
        <Link href={href} className="transition-colors hover:text-lilac">
          {product.name}
        </Link>
      </Heading>
      <p className="mt-1.5 font-display text-base tracking-display text-champagne">{formatPrice(product.price)}</p>
      <ContentText text={product.shortDescription} className="mt-3 max-w-xs text-[1.02rem]" />

      <div className="mt-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1 pt-5">
        <Link
          href={href}
          aria-label={`Ver detalle de ${product.name}`}
          className="inline-flex min-h-11 items-center gap-2 font-display text-[0.75rem] tracking-label text-lilac uppercase transition-colors hover:text-cream"
        >
          Ver detalle <span aria-hidden="true">→</span>
        </Link>
        <a
          href={buildWhatsAppUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar por WhatsApp por ${product.name} (abre WhatsApp)`}
          className="inline-flex min-h-11 items-center gap-2 font-display text-[0.75rem] tracking-label text-champagne uppercase transition-colors hover:text-cream"
        >
          <WhatsAppIcon className="size-4" />
          Consultar
        </a>
      </div>
    </article>
  );
}
