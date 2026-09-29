import { ProductCard } from "@/components/catalog/ProductCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";
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

        <ul className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {products.map((product) => (
            <li key={product.id} className="reveal">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <div className="reveal mt-16 flex justify-center">
          <ButtonLink href="/catalogo">{featured.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
