"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "Déchets Acceptés", href: "/services#dechets" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a5c28] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <span>
            📞{" "}
            <a href="tel:0322930286" className="hover:text-[#f5b800] transition-colors">
              03 22 93 02 86
            </a>
          </span>
          <span>
            ✉️{" "}
            <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-[#f5b800] transition-colors">
              recyclage@groupe-vilbert.fr
            </a>
          </span>
          <span className="hidden sm:block">
            🕐 Lun–Ven : 8h–12h / 13h–16h30
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="text-[#1a5c28] font-black text-2xl leading-none flex items-center gap-1">
              <span className="text-[#f5b800] text-3xl">♻</span>
              <span>VILBERT</span>
            </div>
            <div className="text-xs font-bold tracking-widest text-gray-600 mt-1">
              RECYCLAGE
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-[#1a5c28] transition-colors text-sm uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
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
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
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
