import Link from "next/link";
import { PageBand } from "@/components/catalog/PageBand";
import { ProductBadges } from "@/components/catalog/ProductBadges";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductVisual } from "@/components/catalog/ProductVisual";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HourglassIcon, WhatsAppIcon } from "@/components/ui/icons";
import { catalogTexts } from "@/content/catalog-texts";
import { reveal, stagger } from "@/lib/reveal";
import { getCardNumber, getCategoryName, getProductBySlug, productPath } from "@/services/catalog.service";
import type { ComboPart, Product, ProductSection } from "@/types/catalog";

type Props = {
  product: Product;
  related: Product[];
  whatsappUrl: string;
};

const labelClass = "font-display text-label tracking-label text-champagne uppercase";

function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <StarSparkle className="mt-1.5 size-3.5 shrink-0 text-lilac" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Tirada de Amor en Conexión: cada posición como una pequeña carta numerada. */
function SpreadSection({ section }: { section: ProductSection }) {
  return (
    <section aria-labelledby="spread-title" className="mt-10">
      <h2 id="spread-title" className={labelClass}>
        {section.title}
      </h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {section.items.map((item, index) => (
          <li
            key={item}
            {...reveal("up", stagger(index, 80))}
            className="flex items-center gap-4 rounded-md border border-line/60 bg-surface/70 px-3 py-2.5"
          >
            <span className="flex h-14 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/60 bg-night font-display text-xl text-champagne shadow-glow-sm">
              {index + 1}
            </span>
            <span className="text-cream">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ListSection({ section }: { section: ProductSection }) {
  return (
    <section aria-labelledby={`list-${section.title}`} className="mt-10">
      <h2 id={`list-${section.title}`} className={labelClass}>
        {section.title}
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line/80 bg-surface/70 px-4 py-1.5 font-display text-label tracking-[0.1em] text-lilac uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Parte de un combo: reutiliza la información del producto incluido (sin duplicarla). */
function ComboPartBlock({ part }: { part: ComboPart }) {
  const linked = "productSlug" in part ? getProductBySlug(part.productSlug) : null;
  const title = linked ? linked.name : "title" in part ? part.title : "";
  const subtitle = linked ? linked.subtitle : "subtitle" in part ? part.subtitle : undefined;
  const highlights = linked ? linked.highlights : "highlights" in part ? part.highlights : [];

  return (
    <div className="flyer-box px-5 py-6 sm:px-7">
      <h3 className="text-xl uppercase sm:text-2xl">{title}</h3>
      {subtitle && <p className="mt-1 text-lilac italic">{subtitle}</p>}
      <div className="mt-4">
        <HighlightList items={highlights} />
      </div>
      {linked && (
        <Link
          href={productPath(linked)}
          className="mt-5 inline-flex min-h-11 items-center gap-2 font-display text-button tracking-[0.12em] text-lilac uppercase transition-colors hover:text-cream"
        >
          {catalogTexts.detail.includesLink} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

/** Frase destacada: tratamiento de "cita" con ornamentos, como en los banners. */
function Quote({ text }: { text: string }) {
  return (
    <figure {...reveal("blur", 120)} className="mt-12 flex flex-col items-center text-center">
      <OrnamentDivider className="h-5 w-40 text-gold/70" />
      <blockquote className="mt-5 max-w-lg font-display text-[1.45rem] leading-snug tracking-[0.04em] text-champagne uppercase sm:text-[1.7rem]">
        {text}
      </blockquote>
      <OrnamentDivider className="mt-5 h-5 w-40 rotate-180 text-gold/70" />
    </figure>
  );
}

export function ProductDetail({ product, related, whatsappUrl }: Props) {
  const { detail } = catalogTexts;
  const categoryName = getCategoryName(product.categorySlug);
  const categoryHref = `/catalogo/${product.categorySlug}`;
  const cardNumber = getCardNumber(product);

  return (
    <>
      <PageBand seed={cardNumber * 13} nebula={product.nebula} className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <nav {...reveal("up")} aria-label="Ruta de navegación">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-label tracking-[0.12em] uppercase">
            <li>
              <Link href="/catalogo" className="inline-block py-2 text-muted transition-colors hover:text-cream">
                Catálogo
              </Link>
            </li>
            <li aria-hidden="true" className="text-violet">✦</li>
            <li>
              <Link href={categoryHref} className="inline-block py-2 text-muted transition-colors hover:text-cream">
                {categoryName}
              </Link>
            </li>
            <li aria-hidden="true" className="text-violet">✦</li>
            <li aria-current="page" className="py-2 text-champagne">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[minmax(0,27rem)_1fr] lg:gap-16">
          <div {...reveal("scale", 80)} className="relative mx-auto w-full max-w-md">
            <ProductVisual
              product={product}
              cardNumber={cardNumber}
              variant="full"
              sizes="(min-width: 1024px) 27rem, (min-width: 640px) 28rem, 90vw"
              priority
            />
            <ProductBadges product={product} className="absolute -top-3.5 left-1/2 -translate-x-1/2" />
          </div>

          <div>
            <p {...reveal("up", 160)} className={`flex items-center gap-3 ${labelClass}`}>
              <StarSparkle className="size-3.5 text-violet" />
              {categoryName}
            </p>
            <h1 {...reveal("blur", 240)} className="mt-4 text-[2.1rem] leading-tight uppercase sm:text-5xl">
              {product.name}
            </h1>
            {product.subtitle && (
              <p {...reveal("up", 320)} className="mt-3 text-xl text-lilac italic sm:text-2xl">
                {product.subtitle}
              </p>
            )}
            <OrnamentDivider {...reveal("scale", 380)} className="mt-6 h-5 w-44 text-gold/70" />

            <p {...reveal("up", 440)} className="mt-7 max-w-prose text-[1.2rem] leading-relaxed text-cream/90 sm:text-[1.3rem]">
              {product.description ?? product.shortDescription}
            </p>

            {product.highlights.length > 0 && (
              <div {...reveal("up", 120)} className="mt-8 max-w-prose text-[1.15rem] sm:text-[1.2rem]">
                <HighlightList items={product.highlights} />
              </div>
            )}

            {product.sections?.map((section) =>
              section.style === "spread" ? (
                <SpreadSection key={section.title} section={section} />
              ) : (
                <ListSection key={section.title} section={section} />
              ),
            )}

            {product.includes && product.includes.length > 0 && (
              <section {...reveal("up", 120)} aria-labelledby="includes-title" className="mt-10">
                <h2 id="includes-title" className={labelClass}>
                  {detail.includesTitle}
                </h2>
                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                  {product.includes.map((part, index) => (
                    <ComboPartBlock key={index} part={part} />
                  ))}
                </div>
              </section>
            )}

            {product.details && product.details.length > 0 && (
              <section {...reveal("up", 120)} aria-labelledby="info-title" className="flyer-box mt-10 max-w-lg px-5 py-5 sm:px-7">
                <h2 id="info-title" className={labelClass}>
                  {detail.infoTitle}
                </h2>
                <dl className="mt-3 divide-y divide-dashed divide-line/60">
                  {product.details.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 py-3.5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-night">
                        {item.label === "Duración" ? (
                          <HourglassIcon className="size-5 text-lilac" />
                        ) : (
                          <StarSparkle className="size-3.5 text-lilac" />
                        )}
                      </span>
                      <div>
                        <dt className="font-display text-label tracking-[0.12em] text-lilac uppercase">{item.label}</dt>
                        <dd className="text-cream">{item.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {product.videoUrl && (
              <a
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flyer-box mt-8 flex max-w-lg items-center gap-4 px-5 py-4 transition-colors hover:border-lilac"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-champagne/70 text-champagne">
                  ▶
                </span>
                <span>
                  <span className={`block ${labelClass}`}>{detail.videoTitle}</span>
                  <span className="text-lilac">{detail.videoLink}</span>
                </span>
              </a>
            )}

            {product.quote && <Quote text={product.quote} />}

            <div {...reveal("up", 120)} className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8">
              <ButtonLink
                href={whatsappUrl}
                variant="whatsapp"
                className="w-full sm:w-auto sm:px-10"
                ariaLabel={`${detail.cta}: ${product.name} (abre WhatsApp)`}
              >
                {detail.cta}
              </ButtonLink>
              <ButtonLink href="/catalogo" variant="text" className="self-center">
                {detail.back}
              </ButtonLink>
            </div>
          </div>
        </div>
      </PageBand>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section-nebula relative isolate overflow-clip px-4 py-20 sm:px-8 lg:py-24">
          <CelestialBackground seed={cardNumber * 7} density="low" constellations={0} />
          <div className="relative mx-auto max-w-6xl">
            <div {...reveal("blur")} className="flex flex-col items-center text-center">
              <h2 id="related-title" className="text-[1.9rem] uppercase sm:text-[2.4rem]">
                {detail.related}
              </h2>
              <OrnamentDivider className="mt-5 h-5 w-44 text-gold/70" />
            </div>
            <ul className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-20">
              {related.map((item, index) => (
                <li key={item.slug} {...reveal("scale", stagger(index, 120))} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)]">
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Barra fija de contacto en mobile: el CTA siempre a mano */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line/50 bg-night/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <p className="min-w-0 flex-1 truncate font-display text-label tracking-[0.08em] text-cream uppercase">
            {product.name}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${detail.cta}: ${product.name} (abre WhatsApp)`}
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm border border-champagne/80 bg-champagne px-4 font-display text-button tracking-[0.1em] text-night uppercase"
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
