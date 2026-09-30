"use client";

import { useEffect, useState } from "react";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exitIntentShown");
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setVisible(true);
        sessionStorage.setItem("exitIntentShown", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-8 relative text-center">
        <button
          onClick={() => setVisible(false)}
          aria-label="Fermer"
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none"
        >
          ×
        </button>

        <div className="text-4xl mb-3">♻️</div>
        <h2 id="exit-intent-title" className="text-2xl font-bold text-gray-900 mb-2">
          Avant de partir...
        </h2>
        <p className="text-gray-600 mb-6">
          Obtenez votre devis gratuit sous 24h
        </p>

        <a
          href="tel:0322930286"
          className="flex items-center justify-center gap-2 bg-[#1a5c28] hover:bg-[#14471f] text-white font-bold text-xl px-6 py-4 rounded-xl transition-colors w-full"
        >
          📞 03 22 93 02 86
        </a>

        <p className="text-gray-400 text-xs mt-3">Lun–Ven 8h–12h / 13h–16h30</p>
      </div>
    </div>
  );
}
