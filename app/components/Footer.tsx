import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { siteConfig } from "@/app/data/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        
          <div>
            <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
              <FaMapMarkerAlt className="mt-1 text-md shrink-0" />
              <span>{siteConfig.address}</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                aria-label="Instagram"
                className="text-2xl hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                aria-label="Facebook"
                className="text-2xl hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                aria-label="WhatsApp"
                className="text-2xl hover:text-green-600"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
