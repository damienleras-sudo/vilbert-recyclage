import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nos Réalisations Chantiers | Vilbert Recyclage — Déchets BTP Somme",
  description:
    "Concassage béton, broyage sur chantier, collecte PMCB : découvrez les réalisations de Vilbert Recyclage à Beauval (Somme). Expertise BTP depuis plus de 30 ans.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/realisations",
  },
  openGraph: {
    title: "Nos Réalisations Chantiers | Vilbert Recyclage — Déchets BTP Somme",
    description:
      "Concassage béton, broyage sur chantier, collecte PMCB : découvrez les réalisations de Vilbert Recyclage à Beauval (Somme). Expertise BTP depuis plus de 30 ans.",
    url: "https://www.vilbert-recyclage.fr/realisations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const gallery = [
  {
    src: "/concassage.jpg",
    title: "Production de granulats recyclés",
    description:
      "Concassage de béton de démolition pour production de GNT recyclée 0/100 — chantiers de voirie et remblai",
    volume: "Plusieurs milliers de tonnes/an",
  },
  {
    src: "/vue-aerienne.jpg",
    title: "Vue aérienne du site de Beauval",
    description:
      "Notre plateforme de 80630 Beauval, équipée pour recevoir tous types de déchets BTP",
    volume: "Site de 5+ hectares",
  },
  {
    src: "/entree-dechetterie.jpg",
    title: "Déchetterie professionnelle",
    description:
      "Accueil des professionnels et particuliers, pesée, tri et orientation vers les filières adaptées",
    volume: "Lun–Ven 8h–16h30",
  },
  {
    src: "/plateforme-inerte.jpg",
    title: "Plateforme matériaux inertes",
    description:
      "Stockage et valorisation des matériaux inertes : béton, gravats, tuiles, céramiques",
    volume: "Capacité importante",
  },
  {
    src: "/massification-platre.jpg",
    title: "Massification du plâtre",
    description:
      "Tri et stockage des plaques de plâtre avant orientation vers la filière de recyclage gypse",
    volume: "Flux continu",
  },
  {
    src: "/batiment-recyclage.jpg",
    title: "Centre de recyclage",
    description:
      "Notre bâtiment équipé de panneaux solaires photovoltaïques pour alimenter nos machines",
    volume: "Énergie renouvelable",
  },
];

const stats = [
  { value: "2 000+", label: "Clients servis" },
  { value: "+30 ans", label: "D'expérience" },
  { value: "6", label: "Départements couverts" },
  { value: ">92%", label: "Recyclage menuiseries" },
];

const chantiers = [
  {
    titre: "Rénovation résidence HLM — Amiens",
    detail: "45 tonnes de menuiseries PVC et aluminium collectées, démantèlement sur site, taux de recyclage 92%.",
    annee: "2023",
  },
  {
    titre: "Démolition maçonnerie — Albert (80)",
    detail: "120 tonnes de gravats et béton de démolition transformés en GNT recyclée 0/100 pour remblai de voirie.",
    annee: "2023",
  },
  {
    titre: "Entretien espaces verts — Collectivité Doullens",
    detail: "Collecte et broyage des déchets verts sur plusieurs sites, production de compost et copeaux valorisés localement.",
    annee: "2024",
  },
  {
    titre: "Chantier terrassement — Zone industrielle Beauval",
    detail: "Réception et traitement de 300 tonnes de terres inertes et matériaux de démolition, tri et valorisation sur plateforme.",
    annee: "2024",
  },
];

export default function RealisationsPage() {
  return (
    <main>
      <Breadcrumb
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Nos réalisations" }]}
      />

      {/* Hero */}
      <section className="bg-[#1a5c28] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nos réalisations</h1>
          <p className="text-lg md:text-xl text-green-200">
            Quelques exemples de chantiers traités et de notre centre de Beauval
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-3xl font-extrabold text-[#1a5c28] mb-1">{s.value}</div>
              <div className="text-sm text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a5c28] mb-8 text-center">
            Galerie photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <span className="inline-block bg-[#1a5c28]/10 text-[#1a5c28] text-xs font-semibold px-3 py-1 rounded-full">
                    {item.volume}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chantiers représentatifs */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a5c28] mb-8 text-center">
            Quelques chantiers représentatifs
          </h2>
          <div className="space-y-4">
            {chantiers.map((c) => (
              <div
                key={c.titre}
                className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="flex-shrink-0 bg-[#1a5c28] text-white text-xs font-bold px-3 py-1 rounded-lg h-fit">
                  {c.annee}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.titre}</h3>
                  <p className="text-sm text-gray-600">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Un projet à nous confier ?
          </h2>
          <p className="text-gray-800 mb-8">
            Contactez-nous pour un devis gratuit sous 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="flex items-center justify-center gap-2 bg-[#1a5c28] hover:bg-[#14471f] text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl transition-colors border border-gray-200"
            >
              Demander un devis →
            </Link>
          </div>
          <p className="text-gray-700 text-sm mt-4">Lun–Ven 8h–12h / 13h–16h30</p>
        </div>
      </section>
    </main>
  );
}
