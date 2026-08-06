"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Location de bennes", href: "/services/location-benne" },
  { label: "Broyage sur chantier", href: "/services/broyage-chantier" },
  { label: "Valobat — PMCB gratuits", href: "/services/valobat-pmcb" },
  { label: "Démantèlement menuiseries", href: "/services/dementelement-menuiseries" },
  { label: "Compostage déchets verts", href: "/services/compostage" },
  { label: "Espèces invasives", href: "/services/especes-invasives" },
  { label: "Vente matériaux recyclés", href: "/services/vente-materiaux" },
  { label: "Traitement & Valorisation", href: "/services/traitement-valorisation" },
  { label: "Destruction d'archives", href: "/services/destruction-archives" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a5c28] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span>
              📞{" "}
              <a href="tel:0322930286" className="hover:text-[#f5b800] transition-colors font-semibold">
                03 22 93 02 86
              </a>
            </span>
            <span className="hidden md:inline">
              ✉️{" "}
              <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-[#f5b800] transition-colors">
                recyclage@groupe-vilbert.fr
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="hidden sm:block">
              🕐 Lun–Ven : 8h–12h / 13h–16h30
            </span>
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded hover:bg-[#ffd44d] transition-colors"
            >
              Groupe Vilbert →
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Vilbert Recyclage — Accueil">
          <Image
            src="/logo.png"
            alt="Vilbert Recyclage — Location de bennes et collecte déchets BTP"
            width={220}
            height={80}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
          >
            Accueil
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Nos Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-gray-100 min-w-[260px] py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a5c28] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-bold text-[#1a5c28] hover:bg-gray-50 transition-colors"
                  >
                    Tous nos services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/tarifs"
            className="text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
          >
            Tarifs
          </Link>

          <Link
            href="/a-propos"
            className="text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
          >
            À propos
          </Link>

          <Link
            href="/blog"
            className="text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
          >
            Contact
          </Link>

          <a
            href="https://vilbertrecyclage.okapia-os.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-2 border-[#1a5c28] text-[#1a5c28] font-bold px-4 py-1.5 rounded hover:bg-[#1a5c28] hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Espace Client
          </a>

          <a
            href="/contact"
            className="bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors text-sm"
          >
            Demander un devis
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white">
          <Link
            href="/"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            Accueil
          </Link>

          {/* Mobile services toggle */}
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-menu"
            aria-label={mobileServicesOpen ? "Fermer le sous-menu Nos Services" : "Ouvrir le sous-menu Nos Services"}
          >
            <span>Nos Services</span>
            <svg
              className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div id="mobile-services-menu" className="bg-gray-50 border-b border-gray-100">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block pl-8 pr-4 py-2.5 text-sm text-gray-600 hover:text-[#1a5c28] border-b border-gray-100 last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
              <Link
                href="/services"
                className="block pl-8 pr-4 py-2.5 text-sm font-bold text-[#1a5c28] hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Tous nos services →
              </Link>
            </div>
          )}

          <Link
            href="/tarifs"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            Tarifs
          </Link>

          <Link
            href="/a-propos"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            À propos
          </Link>

          <Link
            href="/blog"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <a
            href="https://vilbertrecyclage.okapia-os.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-[#1a5c28] font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Espace Client
          </a>

          <div className="px-4 py-3">
            <a
              href="/contact"
              className="block text-center bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
