"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      {/* Illustration */}
      <div className="text-8xl mb-6 select-none" aria-hidden="true">
        ♻️
      </div>

      {/* Titre */}
      <h1 className="text-5xl font-extrabold text-[#1a5c28] mb-3 text-center">
        404
      </h1>
      <p className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Page introuvable
      </p>
      <p className="text-gray-500 text-center max-w-md mb-10">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Pas de panique, on va vous remettre sur la bonne route&nbsp;!
      </p>

      {/* Bouton principal */}
      <button
        onClick={() => router.push("/")}
        className="inline-block bg-[#f5b800] hover:bg-yellow-500 text-[#1a5c28] font-bold text-lg px-8 py-3 rounded-full shadow-md transition-colors duration-200 mb-10"
      >
        ← Retour à l&apos;accueil
      </button>

      {/* Liens utiles */}
      <div className="w-full max-w-sm">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center mb-4">
          Liens utiles
        </p>
        <nav className="grid grid-cols-2 gap-3">
          {[
            { href: "/", label: "🏠 Accueil" },
            { href: "/services", label: "⚙️ Services" },
            { href: "/tarifs", label: "💶 Tarifs" },
            { href: "/contact", label: "📞 Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-center gap-1 border-2 border-[#1a5c28] text-[#1a5c28] font-semibold rounded-xl py-2 px-3 text-sm hover:bg-[#1a5c28] hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
