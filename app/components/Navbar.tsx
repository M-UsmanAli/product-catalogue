"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/app/data/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm hover:text-gray-600">
            Home
          </Link>

          <div className="group relative">
            <Link href="#products" className="text-sm hover:text-gray-600">
              Products ▾
            </Link>

            <div className="invisible absolute left-0 top-full z-10 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {siteConfig.categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            className="rounded-full bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-2xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 top-full z-10 w-full border-t border-gray-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm"
          >
            Home
          </Link>

          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex w-full items-center justify-between py-2 text-sm"
          >
            Products <span>{productsOpen ? "▴" : "▾"}</span>
          </button>

          {productsOpen && (
            <div className="pl-4">
              {siteConfig.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-gray-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            className="mt-3 block rounded-full bg-green-600 px-4 py-2 text-center text-sm text-white"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
