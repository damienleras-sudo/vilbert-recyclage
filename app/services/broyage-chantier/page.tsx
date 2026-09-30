import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Broyage sur chantier — Intervention mobile Somme Hauts-de-France | Vilbert Recyclage",
  description:
    "Broyage mobile de déchets verts et bois de démolition directement sur vos chantiers. Réduction 70-80% du volume. Broyat valorisé localement. Devis gratuit Vilbert Recyclage.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/broyage-chantier",
  },
};

const faqs = [
  {
    q: "Quels types de déchets pouvez-vous broyer sur chantier ?",
    a: "Nous intervenons pour le broyage de déchets verts (branches, arbustes, souches), de bois de démolition non traité, de palettes et bois d'emballage. Les bois traités, peints ou contenant des métaux ne sont pas acceptés.",
  },
  {
    q: "Quel est le délai d'intervention ?",
    a: "Nous intervenons généralement sous 3 à 7 jours ouvrés selon notre planning. Pour les chantiers urgents ou d'envergure, contactez-nous directement au 03 22 93 02 86.",
  },
  {
    q: "Le broyat peut-il être réutilisé sur place ?",
    a: "Oui. Le broyat produit peut être laissé sur site pour du paillage, valorisé en compost ou en biomasse énergie. Nous nous chargeons aussi de l'évacuation si vous préférez.",
  },
  {
    q: "Intervenez-vous loin de Beauval ?",
    a: "Nous intervenons dans toute la Somme et les départements limitrophes (Pas-de-Calais, Oise, Aisne, Nord). Pour les chantiers très éloignés, une majoration kilométrique peut s'appliquer.",
  },
  {
    q: "Faut-il une puissance électrique sur site ?",
    a: "Non. Notre matériel est thermique et autonome. Vous n'avez besoin d'aucune installation particulière sur site, simplement un accès suffisant pour notre engin.",
  },
];

export default function BroyageChantierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Broyage sur chantier",
            serviceType: "Broyage mobile de déchets verts et bois sur chantier",
            description:
              "Service de broyage mobile sur chantier pour déchets verts et bois de démolition dans les Hauts-de-France. Réduction 70-80% du volume. Machine autonome, sans besoin d'électricité sur site. Broyat valorisé en paillage, compost ou biomasse énergie.",
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
              name: "Services de broyage mobile",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Broyage déchets verts sur chantier",
                    description: "Broyage de branches, arbustes, souches sur site paysager ou d'élagage",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Broyage bois de démolition",
                    description: "Broyage de bois de construction non traité, palettes et bois d'emballage",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Valorisation du broyat",
                    description: "Broyat laissé sur site pour paillage, ou évacué vers filière compost ou biomasse énergie",
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
            termsOfService: "Protocole d'accès MASE — demande d'acceptation préalable obligatoire. Devis gratuit et sans engagement, réponse sous 48h.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Broyage sur chantier" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Broyage mobile sur chantier
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Réduction 70-80% du volume de vos déchets verts et bois directement
              sur site. Intervention rapide dans toute la Somme et Hauts-de-France.
            </p>
          </div>
        </section>

        {/* Photo */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden"
          style={{ height: "360px" }}
        >
          <Image
            src="/le-targo-3000-sur-un-chantier-de-broyage-de-dechets-verts-photo-neuenhauser-540x273.jpg"
            alt="Targo 3000 broyage déchets verts sur chantier"
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
              "Intervention directement sur votre site",
              "Déchets verts et bois de démolition",
              "Réduction 70-80% du volume",
              "Broyat valorisé (paillage, compost, biomasse)",
              "Devis sur mesure gratuit",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Pourquoi broyer sur chantier */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Pourquoi broyer sur chantier ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                titre: "Économies immédiates",
                texte:
                  "Moins de rotations de bennes, moins de transport. Le volume de déchets est divisé par 3 à 5, ce qui réduit vos coûts d'évacuation.",
              },
              {
                icon: "♻️",
                titre: "Valorisation maximale",
                texte:
                  "Le broyat est valorisé en paillage horticole, compost agricole ou biomasse énergie selon les filières locales.",
              },
              {
                icon: "⚡",
                titre: "Praticité totale",
                texte:
                  "Notre machine est autonome, sans besoin d'électricité sur site. Le chantier reste propre et les délais sont tenus.",
              },
            ].map((adv) => (
              <div key={adv.titre} className="bg-white rounded-lg p-5 border">
                <div className="text-3xl mb-3">{adv.icon}</div>
                <h3 className="font-bold text-lg mb-2">{adv.titre}</h3>
                <p className="text-gray-600 text-sm">{adv.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types de chantiers */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Types de chantiers concernés
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Aménagement paysager et création d'espaces verts",
              "Élagage, abattage et débroussaillage",
              "Démolition partielle ou complète avec bois de charpente",
              "Chantiers de rénovation avec bois de coffrage ou menuiseries",
              "Entretien de parcs, forêts communales, bords de route",
              "Remise en état de friches industrielles ou agricoles",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

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
              Planifier une intervention de broyage
            </h2>
            <p className="mb-6 opacity-90">
              Devis gratuit et sans engagement. Réponse sous 48h.
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
                Demande de devis
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
