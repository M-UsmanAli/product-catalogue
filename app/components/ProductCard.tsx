import Image from "next/image";
import { siteConfig } from "@/app/data/siteConfig";
import type { Product } from "@/app/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const message = encodeURIComponent(
    `Hi! I want to order: ${product.name} (Rs. ${product.price})`
  );

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">
          Rs. {product.price.toLocaleString("en-PK")}
        </p>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
          target="_blank"
          className="mt-3 block rounded-full bg-green-600 px-3 py-2 text-center text-sm text-white hover:bg-green-700"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}