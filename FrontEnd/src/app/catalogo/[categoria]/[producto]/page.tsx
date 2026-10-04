import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/catalog/ProductDetail";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getAllProducts, getProduct, getRelatedProducts, productPath } from "@/services/catalog.service";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ categoria: product.categorySlug, producto: product.slug }));
}

export async function generateMetadata(props: PageProps<"/catalogo/[categoria]/[producto]">): Promise<Metadata> {
  const { categoria, producto } = await props.params;
  const product = getProduct(categoria, producto);
  if (!product) return {};

  const description = `${product.shortDescription} Consultá por WhatsApp.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: productPath(product) },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description,
      url: productPath(product),
      images: product.image ? [{ url: product.image.src, alt: product.image.alt }] : undefined,
    },
    // Sin esto heredaría la tarjeta de marca del layout en vez de la del producto
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description,
      images: product.image ? [{ url: product.image.src, alt: product.image.alt }] : undefined,
    },
  };
}

export default async function ProductPage(props: PageProps<"/catalogo/[categoria]/[producto]">) {
  const { categoria, producto } = await props.params;

  // Ambos slugs se validan en el servicio antes de buscar
  const product = getProduct(categoria, producto);
  if (!product) notFound();

  return (
    <ProductDetail product={product} related={getRelatedProducts(product)} whatsappUrl={buildWhatsAppUrl(product)} />
  );
}
