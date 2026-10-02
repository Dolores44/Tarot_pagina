import Image from "next/image";
import { TarotCardFace } from "@/components/catalog/TarotCardFace";
import type { Product } from "@/types/catalog";

type Props = {
  product: Pick<Product, "name" | "image">;
  cardNumber: number;
  /** "card": marco 4:5 uniforme para la grilla · "full": banner completo en su proporción */
  variant: "card" | "full";
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Imagen de un producto dentro del marco de carta (dorado + violeta).
 *
 * Los banners de Paola tienen proporciones distintas y texto importante en toda
 * su superficie, así que NO se recortan: en la card se muestran completos
 * (object-contain) sobre una versión desenfocada del mismo banner que rellena el marco.
 */
export function ProductVisual({ product, cardNumber, variant, sizes, priority, className }: Props) {
  const { image } = product;
  const frame = `tarot-frame relative overflow-hidden rounded-md bg-surface ${className ?? ""}`;

  if (!image) {
    return (
      <div className={`${frame} aspect-[4/5]`}>
        <TarotCardFace name={product.name} number={cardNumber} />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={frame}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className={`${frame} aspect-[4/5]`}>
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        fill
        sizes={sizes}
        className="scale-110 object-cover opacity-45 blur-2xl"
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
