import Link from "next/link";
import { ProductBadges } from "@/components/catalog/ProductBadges";
import { ProductVisual } from "@/components/catalog/ProductVisual";
import { WhatsAppIcon } from "@/components/ui/icons";
import { catalogTexts } from "@/content/catalog-texts";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getCardNumber, getCategoryName, productPath } from "@/services/catalog.service";
import type { Product } from "@/types/catalog";

type Props = {
  product: Product;
  headingLevel?: "h2" | "h3";
  showCategory?: boolean;
  priority?: boolean;
};

/**
 * Pieza del catálogo: banner real en marco de carta + nombre, texto breve,
 * insignias (combo / descuento real) y las dos acciones. Sin precios.
 * Se usa en Inicio, catálogo y detalle.
 */
export function ProductCard({ product, headingLevel: Heading = "h3", showCategory = false, priority }: Props) {
  const href = productPath(product);
  const { card } = catalogTexts;

  return (
    <article className="group mx-auto flex h-full w-full max-w-md flex-col items-center text-center">
      <div className="relative w-full max-w-[22rem]">
        {/* La imagen es un atajo visual; para teclado y lectores el link es el título */}
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block transition duration-500 group-hover:-translate-y-1.5">
          <ProductVisual
            product={product}
            cardNumber={getCardNumber(product)}
            variant="card"
            sizes="(min-width: 1280px) 22rem, (min-width: 640px) 45vw, 90vw"
            priority={priority}
            className="transition-shadow duration-500 group-hover:shadow-glow-magenta"
          />
        </Link>
        <ProductBadges product={product} className="absolute -top-3.5 left-1/2 -translate-x-1/2" />
      </div>

      {showCategory && (
        <p className="mt-7 font-display text-label tracking-label text-champagne/85 uppercase">
          {getCategoryName(product.categorySlug)}
        </p>
      )}
      <Heading className={`${showCategory ? "mt-2" : "mt-7"} text-xl leading-snug uppercase sm:text-[1.4rem]`}>
        <Link href={href} className="transition-colors hover:text-lilac">
          {product.name}
        </Link>
      </Heading>
      {product.subtitle && (
        <p className="mt-2 font-body text-lg text-lilac italic">{product.subtitle}</p>
      )}
      <p className="mt-3 max-w-sm">{product.shortDescription}</p>

      <div className="mt-auto flex w-full flex-col items-center gap-2 pt-6">
        <a
          href={buildWhatsAppUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${card.whatsapp}: ${product.name} (abre WhatsApp)`}
          className="inline-flex min-h-13 w-full max-w-[22rem] items-center justify-center gap-2.5 rounded-sm border border-champagne/80 px-5 font-display text-button tracking-[0.1em] text-champagne uppercase transition duration-300 hover:bg-champagne hover:text-night"
        >
          <WhatsAppIcon className="size-5 shrink-0" />
          {card.whatsapp}
        </a>
        <Link
          href={href}
          aria-label={`${card.detail}: ${product.name}`}
          className="inline-flex min-h-12 items-center gap-2 font-display text-button tracking-[0.12em] text-lilac uppercase transition-colors hover:text-cream"
        >
          {card.detail} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
