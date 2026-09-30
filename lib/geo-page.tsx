import Link from "next/link";

interface GeoPageProps {
  city: string;
  postalCode: string;
  department: string;
  distance: string;
  intro: string;
  specificContent: string;
}

export function GeoPageContent({
  city,
  postalCode,
  department,
  distance,
  intro,
  specificContent,
}: GeoPageProps) {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            📍 {city} ({postalCode})
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Location de benne à <span className="text-[#f5b800]">{city}</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            {intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded text-lg hover:bg-white hover:text-[#1a5c28] transition-colors">
              Devis gratuit →
            </Link>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* CONTENU */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-[#1a5c28] mb-3">
                Vilbert Recyclage intervient à {city}
              </h2>
              <div className="w-12 h-1 bg-[#f5b800] mb-5" />
              <p className="text-gray-700 leading-relaxed">{specificContent}</p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: "🏗️", label: "Location de benne à " + city },
                { icon: "🚛", label: "Collecte sur chantier à " + city },
                { icon: "🔄", label: "Transport depuis " + city },
                { icon: "♻️", label: "Traitement & valorisation" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-sm font-semibold text-gray-800">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Déchets */}
            <div>
              <h3 className="text-xl font-black text-[#1a5c28] mt-8 mb-4">
                Déchets acceptés depuis {city}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {["Terres & Gravats", "Plâtres", "Béton & Briques", "Bois & Menuiseries", "Plastiques & PVC", "Métaux", "DIB Chantier"].map(d => (
                  <div key={d} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[#1a5c28] font-bold">✓</span>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f5b800] rounded-xl p-6 mt-6">
              <h3 className="font-black text-gray-900 mb-2">Demandez votre devis gratuit à {city}</h3>
              <p className="text-gray-700 text-sm mb-4">
                Notre site de Beauval est à {distance} de {city}. Devis personnalisé sous 24h.
              </p>
              <a href="tel:0322930286" className="inline-block bg-gray-900 text-white font-bold px-6 py-3 rounded hover:bg-gray-800 transition-colors">
                📞 03 22 93 02 86
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-[#1a5c28] text-white rounded-xl p-6">
              <h3 className="font-black mb-4">Vilbert Recyclage</h3>
              <address className="not-italic space-y-2 text-green-100 text-sm">
                <p>📍 Route nationale, 80630 Beauval</p>
                <p>📞 <a href="tel:0322930286" className="hover:text-white font-bold">03 22 93 02 86</a></p>
                <p>✉️ <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white">recyclage@groupe-vilbert.fr</a></p>
                <div className="border-t border-green-700 pt-3 mt-3">
                  <p className="font-bold text-white">Lun – Ven</p>
                  <p>8h00 – 12h00 / 13h00 – 16h30</p>
                </div>
              </address>
              <Link href="/contact" className="mt-4 block text-center bg-[#f5b800] text-gray-900 font-bold px-4 py-3 rounded hover:bg-[#ffd44d] transition-colors text-sm">
                Demander un devis
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Autres villes desservies</h4>
              <ul className="space-y-1 text-sm">
                {[
                  { label: "Amiens", slug: "amiens" },
                  { label: "Abbeville", slug: "abbeville" },
                  { label: "Albert", slug: "albert" },
                  { label: "Doullens", slug: "doullens" },
                  { label: "Péronne", slug: "peronne" },
                  { label: "Arras", slug: "arras" },
                  { label: "Lens", slug: "lens" },
                  { label: "Cambrai", slug: "cambrai" },
                  { label: "Saint-Quentin", slug: "saint-quentin" },
                  { label: "Compiègne", slug: "compiegne" },
                ].filter(v => v.label !== city).map(v => (
                  <li key={v.slug}>
                    <Link href={`/location-benne-${v.slug}`} className="text-[#1a5c28] hover:underline">
                      Location benne {v.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
