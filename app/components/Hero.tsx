import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/data/siteConfig";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-6 md:grid-cols-2 md:py-10">
        {/* Text side */}
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Everything Your Family Needs, Delivered to Your Door
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            Quality clothing, laces &amp; strollers. Order easily on WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#categories"
              className="rounded-full bg-gray-900 px-6 py-3 text-sm text-white hover:bg-gray-700"
            >
              Shop Now
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              className="rounded-full border border-green-600 px-6 py-3 text-sm text-green-700 hover:bg-green-50"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-200">
          <Image
            src="/store-hero.jpg"
            alt="Featured products"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}