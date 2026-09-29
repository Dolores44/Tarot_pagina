import Link from "next/link";
import { PageBand } from "@/components/catalog/PageBand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { TarotCardFace } from "@/components/catalog/TarotCardFace";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentText } from "@/components/ui/ContentText";
import { HourglassIcon, WhatsAppIcon } from "@/components/ui/icons";
import { catalogContent } from "@/content/catalog";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/catalog";

type Props = {
  product: Product;
  related: Product[];
  whatsappUrl: string;
};

const TIME_LABELS = ["duración", "sesión"];

/** Ícono del badge circular según el dato (como los badges de los flyers). */
function DetailBadge({ label }: { label: string }) {
  const isTime = TIME_LABELS.includes(label.toLowerCase());
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-night">
      {isTime ? <HourglassIcon className="size-5 text-lilac" /> : <StarSparkle className="size-3.5 text-lilac" />}
    </span>
  );
}

export function ProductDetail({ product, related, whatsappUrl }: Props) {
  const { detail } = catalogContent;
  const categoryHref = `/catalogo/${product.categorySlug}`;

  return (
    <>
      <PageBand seed={product.cardNumber * 13} className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <nav aria-label="Ruta de navegación">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-[0.68rem] tracking-label uppercase">
            <li>
              <Link href="/catalogo" className="inline-block py-2 text-muted transition-colors hover:text-cream">
                Catálogo
              </Link>
            </li>
            <li aria-hidden="true" className="text-violet">✦</li>
            <li>
              <Link href={categoryHref} className="inline-block py-2 text-muted transition-colors hover:text-cream">
                {product.categoryName}
              </Link>
            </li>
            <li aria-hidden="true" className="text-violet">✦</li>
            <li aria-current="page" className="py-2 text-champagne">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-[minmax(0,20rem)_1fr] lg:mt-14 lg:grid-cols-[minmax(0,23rem)_1fr] lg:gap-20">
          <div className="animate-rise mx-auto w-full max-w-[17rem] md:sticky md:top-28 md:max-w-none">
            <TarotCardFace product={product} number={product.cardNumber} />
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <p className="flex items-center gap-3 font-display text-xs tracking-label text-champagne uppercase">
              <StarSparkle className="size-3 text-violet" />
              {product.categoryName}
            </p>
            <h1 className="mt-4 text-3xl uppercase sm:text-4xl lg:text-[2.75rem]">{product.name}</h1>
            <p className="mt-4 font-display text-2xl tracking-display text-champagne sm:text-[1.7rem]">
              {formatPrice(product.price)}
            </p>
            <OrnamentDivider className="mt-6 h-5 w-44 text-gold/70" />

            <ContentText text={product.description} className="mt-7 max-w-prose text-[1.1rem] leading-relaxed sm:text-[1.15rem]" />

            <section aria-labelledby="product-info-title" className="flyer-box mt-10 max-w-lg px-5 py-6 sm:px-7">
              <h2 id="product-info-title" className="font-display text-xs tracking-label text-champagne uppercase">
                {detail.infoTitle}
              </h2>
              <dl className="mt-4 divide-y divide-dashed divide-line/60">
                <div className="flex items-center gap-4 py-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-night font-display text-lg text-lilac">
                    $
                  </span>
                  <dt className="font-display text-[0.78rem] tracking-label text-lilac uppercase">{detail.priceLabel}</dt>
                  <dd className="ml-auto font-display text-champagne">{formatPrice(product.price)}</dd>
                </div>
                {product.details.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 py-3.5">
                    <DetailBadge label={item.label} />
                    <dt className="font-display text-[0.78rem] tracking-label text-lilac uppercase">{item.label}</dt>
                    <dd className="ml-auto text-right">
                      <ContentText as="span" text={item.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <ButtonLink
                href={whatsappUrl}
                variant="whatsapp"
                className="w-full sm:w-auto sm:px-9"
                ariaLabel={`${detail.cta}: ${product.name} (abre WhatsApp)`}
              >
                {detail.cta}
              </ButtonLink>
              <ButtonLink href="/catalogo" variant="text">
                {detail.back}
              </ButtonLink>
            </div>
          </div>
        </div>
      </PageBand>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section-nebula px-4 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <h2 id="related-title" className="text-2xl uppercase sm:text-3xl">
                {detail.related}
              </h2>
              <OrnamentDivider className="mt-5 h-5 w-44 text-gold/70" />
            </div>
            <ul className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.id} className="reveal">
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Barra fija de contacto en mobile: el CTA siempre a mano */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line/50 bg-night/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-[0.72rem] tracking-[0.08em] text-cream uppercase">{product.name}</p>
            <p className="font-display text-sm text-champagne">{formatPrice(product.price)}</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${detail.cta}: ${product.name} (abre WhatsApp)`}
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm border border-champagne/80 bg-champagne px-4 font-display text-[0.72rem] tracking-label text-night uppercase"
          >
            <WhatsAppIcon className="size-5" />
            Consultar
          </a>
        </div>
      </div>
      {/* Espacio para que la barra fija no tape el final de la página */}
      <div aria-hidden="true" className="h-20 bg-void md:hidden" />
    </>
  );
}
