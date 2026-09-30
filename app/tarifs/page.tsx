import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tarifs Location Benne Somme 2026 | Vilbert Recyclage Beauval",
  description:
    "Benne 8m³ à 180 €, déchets verts 25 €/T, concassé 12,50 €/T. Tarifs tout compris dans la Somme. Devis gratuit 24h — Vilbert Recyclage Beauval (80).",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/tarifs",
  },
  openGraph: {
    title: "Tarifs Location Benne Somme 2026 | Vilbert Recyclage Beauval",
    description:
      "Benne 8m³ à 180 €, déchets verts 25 €/T, concassé 12,50 €/T. Tarifs tout compris dans la Somme. Devis gratuit 24h — Vilbert Recyclage Beauval (80).",
    url: "https://www.vilbert-recyclage.fr/tarifs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function TarifsPage() {
  return (
    <main>
      <Breadcrumb crumbs={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]} />

      {/* Hero */}
      <section className="bg-[#1a5c28] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarifs &amp; Devis</h1>
          <p className="text-lg md:text-xl text-green-200">
            Fourchettes indicatives — Devis gratuit personnalisé sous 24h
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* Section 1 : Location de bennes */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-2">Location de bennes</h2>
          <p className="text-sm text-gray-600 mb-4">
            Tarifs tout compris : dépose, reprise de la benne et traitement des déchets.
          </p>

          {/* Exemple concret mis en avant */}
          <div className="bg-[#f5b800]/15 border-l-4 border-[#f5b800] rounded-xl p-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-base">
                Exemple — Benne 8 m³ béton non ferraillé, rayon 20 km
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Dépose + reprise + traitement des déchets inclus
              </p>
            </div>
            <span className="text-3xl font-extrabold text-[#1a5c28] whitespace-nowrap">180 €</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1a5c28] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Volume</th>
                  <th className="px-4 py-3 text-left font-semibold">Usage recommandé</th>
                  <th className="px-4 py-3 text-left font-semibold">À partir de</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-[#f5b800]/10">
                  <td className="px-4 py-3 font-semibold">8 m³ — béton non ferraillé</td>
                  <td className="px-4 py-3 text-gray-600">Démolition béton, gravats inertes</td>
                  <td className="px-4 py-3 text-[#1a5c28] font-bold">180 € (rayon 20 km)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">5 à 8 m³</td>
                  <td className="px-4 py-3 text-gray-600">Particuliers, petite rénovation, jardinage</td>
                  <td className="px-4 py-3 text-[#1a5c28] font-semibold">À partir de 150 €</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">10 à 15 m³</td>
                  <td className="px-4 py-3 text-gray-600">Rénovation, chantiers artisans, démolition partielle</td>
                  <td className="px-4 py-3 text-[#1a5c28] font-semibold">À partir de 250 €</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">20 à 30 m³</td>
                  <td className="px-4 py-3 text-gray-600">Gros chantiers BTP, démolition, terrassement</td>
                  <td className="px-4 py-3 text-[#1a5c28] font-semibold">À partir de 380 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Location à l'année */}
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-2xl">📅</span>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Location à l&apos;année (entrepôts &amp; professionnels)</p>
              <p className="text-sm text-gray-500">Rotations planifiées selon vos besoins</p>
            </div>
            <span className="text-xl font-extrabold text-[#1a5c28] whitespace-nowrap">2 €/jour</span>
          </div>

          <p className="text-xs text-gray-500 mt-3 italic">
            * Tarifs variables selon type de déchets, distance et durée. Prix TTC indicatifs, rayon 20 km.
          </p>
        </section>

        {/* Section 2 : Apport en déchetterie pro */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">Apport en déchetterie professionnelle</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1a5c28] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Type de déchet</th>
                  <th className="px-4 py-3 text-left font-semibold">Tarification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Déchets inertes (béton, gravats, tuiles)", "Prix à la tonne — sur devis"],
                  ["Bois (palettes, charpente, menuiseries)", "Prix à la tonne — sur devis"],
                  ["Plâtre (plaques BA13, enduits)", "Prix à la tonne — sur devis"],
                  ["DIB — Déchets Industriels Banals", "Prix à la tonne — sur devis"],
                ].map(([type, tarif]) => (
                  <tr key={type} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{type}</td>
                    <td className="px-4 py-3 text-gray-600">{tarif}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 : Valobat PMCB */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">Déchets PMCB — Filière Valobat</h2>
          <div className="bg-[#00A651]/10 border border-[#00A651] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="bg-[#00A651] text-white font-extrabold text-lg px-4 py-2 rounded-lg whitespace-nowrap">
              GRATUIT*
            </span>
            <div>
              <p className="font-semibold text-gray-800">
                Collecte des déchets de Produits et Matériaux de Construction du Bâtiment (PMCB) gratuite pour les professionnels éligibles.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                * Gratuit dans le cadre de la filière REP PMCB (éco-organisme Valobat). Sous conditions d'éligibilité professionnelle. Contactez-nous pour vérifier votre éligibilité.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <Link href="/services/valobat-pmcb" className="text-[#1a5c28] font-semibold hover:underline text-sm">
              En savoir plus sur Valobat →
            </Link>
          </div>
        </section>

        {/* Section 4 : Broyage sur chantier */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">Broyage sur chantier</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Déchets verts &amp; bois — tarif à la tonne</p>
              <p className="text-sm text-gray-500 mt-1">
                Déchets verts, bois de démolition, branchages... Notre broyeur mobile vient directement sur site.
                Intervention sur toute la Somme et départements limitrophes.
              </p>
            </div>
            <span className="text-2xl font-extrabold text-[#1a5c28] whitespace-nowrap">25 €/T</span>
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">* Tarif déchets verts selon volume. Devis personnalisé pour les gros volumes.</p>
        </section>

        {/* Section 5 : Vente matériaux recyclés */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">Vente de matériaux recyclés</h2>

          {/* Exemple concret concassé béton */}
          <div className="bg-[#1a5c28]/8 border-l-4 border-[#1a5c28] rounded-xl p-5 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-gray-900">Concassé béton 0/40</p>
              <p className="text-gray-600 text-sm mt-1">Remblais, sous-fondations, plateformes — granulat recyclé issu de notre concassage</p>
            </div>
            <span className="text-2xl font-extrabold text-[#1a5c28] whitespace-nowrap">12,50 €/T</span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-gray-700 mb-3 font-medium">Autres matériaux disponibles — prix variables selon stocks :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "GNT recyclée (0/20, 0/31,5, 0/63)", detail: "Voiries, allées, plateformes" },
                { label: "Compost NF U44-051", detail: "Amendement agricole, paysagisme" },
                { label: "Copeaux de bois", detail: "Paillage, biomasse, litière" },
                { label: "Sables recyclés (0/4, 0/6)", detail: "Remblais, nivellement" },
              ].map((mat) => (
                <div key={mat.label} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-gray-100">
                  <span className="text-[#1a5c28] mt-0.5">♻️</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">{mat.label}</p>
                    <p className="text-xs text-gray-500">{mat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">Stocks variables — appelez pour les disponibilités du moment.</p>
          </div>
        </section>
      </div>

      {/* Grille tarifaire complète */}
      <div className="max-w-4xl mx-auto px-4 pb-6">
        <div className="bg-[#1a5c28] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">📋 Grille tarifaire complète disponible sur demande</p>
            <p className="text-green-200 text-sm mt-1">
              Envoyez-nous un email et nous vous transmettrons notre grille de tarifs détaillée sous 24h.
            </p>
          </div>
          <a
            href="mailto:recyclage@groupe-vilbert.fr?subject=Demande%20grille%20tarifaire"
            className="bg-[#f5b800] hover:bg-[#ffd44d] text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm"
          >
            ✉️ Demander la grille tarifaire
          </a>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Obtenez votre devis gratuit</h2>
          <p className="text-gray-800 mb-8">Réponse sous 24h — Sans engagement</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="flex items-center justify-center gap-2 bg-[#1a5c28] hover:bg-[#14471f] text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <a
              href="mailto:recyclage@groupe-vilbert.fr"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl transition-colors border border-gray-200"
            >
              ✉️ recyclage@groupe-vilbert.fr
            </a>
          </div>
          <p className="text-gray-700 text-sm mt-4">Lun–Ven 8h–12h / 13h–16h30</p>
        </div>
      </section>
    </main>
  );
}
