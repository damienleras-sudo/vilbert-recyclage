import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Traitement et valorisation déchets BTP — Beauval (80) | Vilbert Recyclage",
  description:
    "Traitement et valorisation maximale de vos déchets BTP à Beauval : concassage, criblage, massification plâtre. Site équipé panneaux solaires. Taux valorisation maximal.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/traitement-valorisation",
  },
};

const faqs = [
  {
    q: "Quel est votre taux de valorisation des déchets BTP ?",
    a: "Notre taux de valorisation dépasse 90% pour les déchets inertes (béton, briques, gravats). La quasi-totalité des matières est orientée vers des filières de recyclage et de réutilisation, seule une infime part allant en enfouissement.",
  },
  {
    q: "Produisez-vous des granulats recyclés certifiés ?",
    a: "Oui. Notre concasseur produit des granulats recyclés conformes aux normes NF EN 13242 utilisables en sous-couche de voirie, remblais et fondations. Les certificats de conformité sont disponibles sur demande.",
  },
  {
    q: "Comment l'énergie solaire réduit-elle votre impact environnemental ?",
    a: "Nos panneaux photovoltaïques alimentent tout ou partie de nos installations (concasseur, cribleur, éclairage, bureaux). Cela réduit notre consommation du réseau électrique national et notre empreinte carbone opérationnelle de manière significative.",
  },
  {
    q: "Êtes-vous enregistrés sur la plateforme Trackdéchets ?",
    a: "Oui. Vilbert Recyclage est référencé sur Trackdéchets, la plateforme nationale de dématérialisation des BSD. Vous pouvez générer et suivre vos bordereaux de suivi directement depuis votre compte Trackdéchets.",
  },
  {
    q: "Quels déchets n'acceptez-vous pas sur votre site ?",
    a: "Nous n'acceptons pas les déchets dangereux (amiante, PCB, hydrocarbures, peintures, solvants), les déchets radioactifs, les ordures ménagères et les déchets médicaux. En cas de doute sur un déchet, contactez-nous avant votre venue.",
  },
];

const filieres = [
  { matiere: "Béton, gravats, briques", filiere: "Concassage → granulats recyclés NF EN 13242" },
  { matiere: "Plâtre / BA13", filiere: "Massification → recycleur plâtre" },
  { matiere: "Bois de construction", filiere: "Panneau bois ou biomasse énergie" },
  { matiere: "Métaux ferreux", filiere: "Tri magnétique → fonderie" },
  { matiere: "Métaux non ferreux (alu, cuivre)", filiere: "Tri → métallurgie spécialisée" },
  { matiere: "Plastiques de chantier", filiere: "Tri → recycleur plastique" },
  { matiere: "Déchets verts", filiere: "Compostage ou broyage valorisation énergétique" },
];

export default function TraitementValorisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traitement et valorisation déchets BTP",
            serviceType: "Traitement, tri et valorisation de déchets du bâtiment et travaux publics",
            description:
              "Centre de traitement et valorisation des déchets BTP à Beauval (Somme). Taux de valorisation supérieur à 90%. Concassage et criblage sur site, granulats recyclés NF EN 13242, massification plâtre, filières dédiées par matière. Site équipé de panneaux solaires. Traçabilité Trackdéchets.",
            provider: {
              "@type": "LocalBusiness",
              name: "Vilbert Recyclage",
              url: "https://www.vilbert-recyclage.fr",
              telephone: "+33322930286",
              email: "recyclage@groupe-vilbert.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Route nationale",
                addressLocality: "Beauval",
                postalCode: "80630",
                addressRegion: "Hauts-de-France",
                addressCountry: "FR",
              },
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Hauts-de-France" },
              { "@type": "AdministrativeArea", name: "Somme" },
              { "@type": "AdministrativeArea", name: "Pas-de-Calais" },
              { "@type": "AdministrativeArea", name: "Oise" },
              { "@type": "AdministrativeArea", name: "Aisne" },
              { "@type": "AdministrativeArea", name: "Nord" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Filières de traitement et valorisation BTP",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Concassage béton et gravats",
                    description: "Production de granulats recyclés NF EN 13242 sur site — valorisation > 90%",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Criblage et tri par granulométrie",
                    description: "Séparation des granulats en fractions commercialisables",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Massification plâtre / BA13",
                    description: "Regroupement et orientation vers recycleur plâtre spécialisé",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tri métaux ferreux et non ferreux",
                    description: "Tri magnétique ferreux, séparation aluminium et cuivre vers fonderies",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Traçabilité Trackdéchets",
                    description: "BSD dématérialisés via Trackdéchets pour tous les flux de déchets",
                  },
                },
              ],
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceType: "Téléphone",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+33322930286",
                contactType: "customer service",
                availableLanguage: "French",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                },
              },
            },
            termsOfService: "Protocole MASE — acceptation préalable obligatoire avant tout apport sur site. Déchets dangereux (amiante, PCB, hydrocarbures) non acceptés. BSD et bon de pesée fournis à chaque opération.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Traitement & valorisation" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Traitement et valorisation des déchets BTP
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Site équipé de panneaux solaires ☀️ à Beauval. Valorisation &gt; 90%,
              filières dédiées par matière, traçabilité Trackdéchets.
            </p>
          </div>
        </section>

        {/* Photo vue aérienne */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden"
          style={{ height: "400px" }}
        >
          <Image
            src="/vue-aerienne.jpg"
            alt="Vue aérienne du site Vilbert Recyclage à Beauval"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Points forts */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">Nos points forts</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Concassage et criblage sur site",
              "Taux de valorisation > 90%",
              "Panneaux solaires ☀️ sur site",
              "Granulats recyclés normés produits sur site",
              "Filières dédiées par matière",
              "Trackdéchets + BSD dématérialisés",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Nos équipements */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">Nos équipements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "⚙️",
                titre: "Concasseur à mâchoires",
                desc: "Concassage des bétons, gravats et matériaux inertes en granulats calibrés",
              },
              {
                icon: "🔄",
                titre: "Cribleur",
                desc: "Séparation des granulats par granulométrie pour produire des fractions commercialisables",
              },
              {
                icon: "⚖️",
                titre: "Pont-bascule",
                desc: "Pesée des chargements à l'entrée et à la sortie pour la traçabilité et la facturation",
              },
              {
                icon: "🏗️",
                titre: "Zones de tri dédiées",
                desc: "Aires séparées pour chaque flux : inertes, bois, métaux, plâtre, déchets verts…",
              },
            ].map((equip) => (
              <div key={equip.titre} className="bg-white border rounded-lg p-5 flex gap-4">
                <div className="text-3xl flex-shrink-0">{equip.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{equip.titre}</h3>
                  <p className="text-gray-600 text-sm">{equip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Énergie solaire */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Énergie solaire : un site engagé
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex gap-4">
            <span className="text-4xl flex-shrink-0">☀️</span>
            <div>
              <p className="text-gray-800 mb-3">
                Notre site est équipé de panneaux photovoltaïques qui alimentent
                nos machines, nos bureaux et nos installations. Cette production
                d&apos;énergie renouvelable locale réduit notre dépendance au réseau
                et notre empreinte carbone.
              </p>
              <ul className="space-y-1 text-sm">
                {[
                  "Alimentation des machines de traitement (concasseur, cribleur)",
                  "Éclairage des zones de travail",
                  "Réduction des émissions CO₂ opérationnelles",
                  "Démarche RSE concrète et mesurable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#1a5c28] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Filières de valorisation */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Filières de valorisation par matière
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#1a5c28" }} className="text-white">
                  <th className="p-3 text-left">Matière</th>
                  <th className="p-3 text-left">Filière de valorisation</th>
                </tr>
              </thead>
              <tbody>
                {filieres.map((row, i) => (
                  <tr key={row.matiere} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium border-b">{row.matiere}</td>
                    <td className="p-3 border-b text-gray-700">{row.filiere}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Photo massification plâtre */}
        <div
          className="relative w-full max-w-5xl mx-auto mb-8 rounded-xl overflow-hidden"
          style={{ height: "280px" }}
        >
          <Image
            src="/massification-platre.jpg"
            alt="Massification plâtre Vilbert Recyclage"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Questions fréquentes
          </h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-12 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Optimiser le traitement de vos déchets BTP
            </h2>
            <p className="mb-6 opacity-90">
              Contactez-nous pour organiser vos apports ou un suivi régulier de chantier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0322930286"
                className="bg-[#f5b800] text-black font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90 transition"
              >
                03 22 93 02 86
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a5c28] transition"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
