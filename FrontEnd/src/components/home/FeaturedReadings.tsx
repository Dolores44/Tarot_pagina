import { ProductCard } from "@/components/catalog/ProductCard";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";
import { reveal, stagger } from "@/lib/reveal";
import type { Product } from "@/types/catalog";

type Props = {
  products: Product[];
};

/**
 * Destacados de Inicio (featured: true en src/content/catalog.ts),
 * presentados como piezas del universo visual de Paola, no como fichas de tienda.
 */
export function FeaturedReadings({ products }: Props) {
  const { featured } = homeContent;
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="featured-title" className="relative isolate overflow-clip bg-night px-4 py-20 sm:px-8 lg:py-28">
      <CelestialBackground seed={31} density="low" constellations={0} />
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          id="featured-title"
          eyebrow={featured.eyebrow}
          titleTop={featured.titleTop}
          titleBottom={featured.titleBottom}
          emphasis="bottom"
        />

        <ul className="mt-14 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <li key={product.slug} {...reveal("scale", stagger(index, 110))}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <div {...reveal("up")} className="mt-16 flex justify-center">
          <ButtonLink href="/catalogo">{featured.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
