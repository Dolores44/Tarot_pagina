import Link from "next/link";
import { TarotCardFace } from "@/components/catalog/TarotCardFace";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentText } from "@/components/ui/ContentText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/catalog";

type Props = {
  products: Product[];
};

/**
 * Lecturas destacadas (featured = true en el catálogo), presentadas como
 * cartas de un mazo y no como fichas de tienda: el precio es un detalle,
 * no el protagonista.
 */
export function FeaturedReadings({ products }: Props) {
  const { featured } = homeContent;
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="featured-title" className="bg-night px-4 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          id="featured-title"
          eyebrow={featured.eyebrow}
          titleTop={featured.titleTop}
          titleBottom={featured.titleBottom}
          className="reveal"
        />

        <ul className="mt-14 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((product, index) => {
            const href = `/catalogo/${product.categorySlug}/${product.slug}`;
            return (
              <li key={product.id} className="reveal">
                <article className="group mx-auto flex max-w-sm flex-col items-center text-center">
                  <Link
                    href={href}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block w-full max-w-[15rem] transition sm:max-w-[18rem] duration-500 group-hover:-translate-y-1.5"
                  >
                    <TarotCardFace
                      product={product}
                      number={index + 1}
                      className="transition-shadow duration-500 group-hover:shadow-glow-magenta"
                    />
                  </Link>

                  <h3 className="mt-7 text-lg uppercase sm:text-xl">
                    <Link href={href} className="transition-colors hover:text-lilac">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1.5 font-display text-base tracking-display text-champagne">
                    {formatPrice(product.price)}
                  </p>
                  <ContentText text={product.shortDescription} className="mt-3 max-w-xs text-[1.02rem]" />
                  <ButtonLink href={href} variant="text" className="mt-4" ariaLabel={`Ver detalle de ${product.name}`}>
                    Ver detalle
                  </ButtonLink>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="reveal mt-16 flex justify-center">
          <ButtonLink href="/catalogo">{featured.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
