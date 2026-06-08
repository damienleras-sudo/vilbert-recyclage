"use client";
import { useState } from "react";

const travaux = [
  { label: "Démolition cloison (plâtre)", volume: 0.3, unit: "m²" },
  { label: "Carrelage / dallage", volume: 0.05, unit: "m²" },
  { label: "Gravats / béton", volume: 1.5, unit: "tonne" },
  { label: "Terre / déblais", volume: 1.2, unit: "m³" },
  { label: "Bois / menuiseries", volume: 0.5, unit: "m³" },
  { label: "Plâtre (plaques BA13)", volume: 0.08, unit: "m²" },
];

const bennes = [
  { label: "Petite benne", volume: 5, desc: "Rénovation légère, nettoyage" },
  { label: "Benne moyenne", volume: 10, desc: "Travaux de second œuvre" },
  { label: "Grande benne", volume: 15, desc: "Gros œuvre, démolition" },
  { label: "Très grande benne", volume: 20, desc: "Chantier professionnel" },
];

export default function VolumeCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const totalVolume = Object.entries(quantities).reduce((acc, [label, qty]) => {
    const item = travaux.find((t) => t.label === label);
    return acc + (item ? item.volume * qty : 0);
  }, 0);

  const recommendedBenne = bennes.find((b) => b.volume >= totalVolume) || bennes[bennes.length - 1];

  const updateQty = (label: string, value: string) => {
    const num = parseFloat(value) || 0;
    setQuantities((prev) => ({ ...prev, [label]: num }));
  };

  return (
    <section className="py-16 bg-[#1a5c28]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Quelle benne pour mon chantier ?
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
          <p className="text-green-200">
            Estimez le volume de vos déchets et trouvez la benne adaptée en quelques secondes.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8">
          <h3 className="font-bold text-gray-900 mb-6 text-lg">
            Saisissez vos quantités de déchets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {travaux.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    {item.label}
                  </label>
                  <span className="text-xs text-gray-400">{item.unit}</span>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="0"
                  className="w-20 border border-gray-300 rounded-lg px-3 py-2 text-center text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]"
                  onChange={(e) => updateQty(item.label, e.target.value)}
                />
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Volume estimé</p>
                <p className="text-4xl font-black text-[#1a5c28]">
                  {totalVolume.toFixed(1)} m³
                </p>
              </div>
              <div className="flex-1 bg-[#1a5c28] text-white rounded-xl p-5">
                <p className="text-green-200 text-xs uppercase tracking-wide mb-1">
                  Benne recommandée
                </p>
                <p className="font-black text-xl">{recommendedBenne.label}</p>
                <p className="text-green-200 text-sm mt-1">
                  {recommendedBenne.volume} m³ — {recommendedBenne.desc}
                </p>
                <a
                  href="tel:0322930286"
                  className="mt-4 block text-center bg-[#f5b800] text-gray-900 font-bold px-4 py-2 rounded hover:bg-[#ffd44d] transition-colors text-sm"
                >
                  Demander cette benne → 03 22 93 02 86
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              * Estimation indicative. Notre équipe affine le dimensionnement lors du devis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
