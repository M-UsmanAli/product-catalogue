import Link from "next/link";
import { siteConfig } from "@/app/data/siteConfig";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-gray-600">
            Home
          </Link>
          <Link href="#products" className="text-sm hover:text-gray-600">
            Products
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            className="rounded-full bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}