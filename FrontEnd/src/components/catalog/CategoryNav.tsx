import Link from "next/link";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { WhatsAppIcon } from "@/components/ui/icons";
import { catalogTexts } from "@/content/catalog-texts";
import { reveal } from "@/lib/reveal";
import type { CategoryWithCount } from "@/types/catalog";

type Props = {
  categories: CategoryWithCount[];
  /** null = "Todo el catálogo" */
  activeSlug: string | null;
  totalCount: number;
  whatsappUrl: string;
};

type Item = { key: string; label: string; href: string; count: number; active: boolean };

function buildItems({ categories, activeSlug, totalCount }: Omit<Props, "whatsappUrl">): Item[] {
  return [
    { key: "all", label: catalogTexts.nav.all, href: "/catalogo", count: totalCount, active: activeSlug === null },
    ...categories.map((c) => ({
      key: c.slug,
      label: c.name,
      href: `/catalogo/${c.slug}`,
      count: c.productCount,
      active: c.slug === activeSlug,
    })),
  ];
}

/**
 * Navegación de categorías. Son links reales (no estado de JS):
 * cada filtro tiene su URL, se puede compartir y lo indexa Google.
 *
 * - Desktop: caja estilo flyer, fija al hacer scroll.
 * - Mobile: fila de pestañas con scroll horizontal propio.
 */
export function CategoryNav(props: Props) {
  const items = buildItems(props);

  return (
    <>
      {/* Mobile / tablet */}
      <nav aria-label={catalogTexts.nav.title} className="lg:hidden">
        <ul className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:justify-center">
          {items.map((item) => (
            <li key={item.key} className="shrink-0 snap-start">
              <Link
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`inline-flex min-h-12 items-center gap-2 rounded-full border px-5 font-display text-label tracking-[0.12em] uppercase transition-colors ${
                  item.active
                    ? "border-lilac/80 bg-violet-deep/40 text-cream"
                    : "border-line/70 text-muted hover:border-lilac/60 hover:text-cream"
                }`}
              >
                {item.active && <StarSparkle className="size-2.5 text-lilac" />}
                {item.label}
                <span className="text-champagne/80">{item.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop */}
      <aside className="hidden lg:block">
        <nav {...reveal("left")} aria-label={catalogTexts.nav.title} className="flyer-box sticky top-28 px-6 py-8">
          <p className="flex items-center justify-center gap-3 font-display text-label tracking-label text-champagne uppercase">
            <StarSparkle className="size-3 text-violet" />
            {catalogTexts.nav.title}
            <StarSparkle className="size-3 text-violet" />
          </p>
          <OrnamentDivider className="mx-auto mt-4 h-4 w-36 text-gold/60" />

          <ul className="mt-6 space-y-1">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={`group flex min-h-12 items-center gap-3 rounded-sm px-3 py-2 font-display text-nav tracking-[0.1em] uppercase transition-colors ${
                    item.active ? "bg-violet-deep/30 text-lilac" : "text-muted hover:text-cream"
                  }`}
                >
                  <StarSparkle
                    className={`size-3 shrink-0 transition-colors ${
                      item.active ? "text-lilac" : "text-violet/50 group-hover:text-violet"
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-label text-champagne/80">{item.count}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-dashed border-line/60 pt-6 text-center">
            <p className="text-base leading-snug">{catalogTexts.sidebarNote}</p>
            <a
              href={props.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-12 items-center gap-2 font-display text-button tracking-[0.12em] text-champagne uppercase transition-colors hover:text-cream"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
