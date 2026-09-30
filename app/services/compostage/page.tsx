import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Compostage déchets verts Somme — Plateforme agréée Beauval | Vilbert Recyclage",
  description:
    "Plateforme de compostage agréée à Beauval (Somme). Tontes, tailles, branchages → compost normé NF U44-051. Vente de compost localement. BSD et bon de pesée.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/compostage",
  },
};

const faqs = [
  {
    q: "Le compost produit est-il normé ?",
    a: "Oui. Notre compost est produit selon la norme NF U44-051 qui garantit sa qualité agronomique (teneur en matière organique, absence de contaminants, granulométrie). Il est utilisable en agriculture et en horticulture.",
  },
  {
    q: "Acceptez-vous les bois traités ou les végétaux mélangés ?",
    a: "Non. Nous n'acceptons pas les bois traités (classe 3 ou 4), les végétaux mélangés à des déchets ménagers, ni les espèces invasives (renouée du Japon, etc.) qui doivent aller dans une filière dédiée.",
  },
  {
    q: "Faut-il appeler avant de venir ?",
    a: "Pour les apports réguliers ou les volumes importants (camion benne ou plus), nous vous recommandons de prendre rendez-vous au préalable. Les petits apports ponctuels peuvent se faire directement aux heures d'ouverture.",
  },
  {
    q: "Peut-on acheter le compost ?",
    a: "Oui, nous vendons notre compost aux agriculteurs, paysagistes et collectivités locales. Les disponibilités sont variables selon la saison. Appelez-nous pour connaître le stock disponible et les conditions.",
  },
  {
    q: "Y a-t-il un volume minimum pour apporter des déchets verts ?",
    a: "Pas de volume minimum, mais un poids minimum de facturation peut s'appliquer. Les collectivités et professionnels de l'entretien des espaces verts apportant régulièrement bénéficient de tarifs adaptés.",
  },
];

export default function CompostagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Compostage déchets verts",
            serviceType: "Compostage de déchets verts — plateforme agréée",
            description:
              "Plateforme de compostage agréée à Beauval (Somme). Tontes, tailles et branchages transformés en compost normé NF U44-051. Vente de compost aux agriculteurs, paysagistes et collectivités locales. BSD et bon de pesée fournis.",
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
              name: "Services de compostage et vente de compost",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Réception déchets verts",
                    description: "Tontes, tailles, branchages et déchets verts professionnels",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Compostage sur plateforme agréée",
                    description: "Processus normé : broyage, andains, retournements, criblage — norme NF U44-051",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Vente de compost NF U44-051",
                    description: "Compost normé disponible en vrac ou big-bags pour agriculteurs, paysagistes et collectivités",
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
            termsOfService: "Protocole MASE — acceptation préalable recommandée pour apports importants. Espèces invasives non acceptées. BSD et bon de pesée fournis.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Compostage déchets verts" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Compostage de déchets verts
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Plateforme agréée à Beauval. Vos tontes, tailles et branchages
              deviennent du compost normé NF U44-051 valorisé localement.
            </p>
          </div>
        </section>

        {/* Photo */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden"
          style={{ height: "360px" }}
        >
          <Image
            src="/plateforme-inerte.jpg"
            alt="Plateforme de compostage Vilbert Recyclage Beauval"
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
              "Plateforme de compostage agréée",
              "Tontes, tailles, branchages acceptés",
              "Compost normé NF U44-051",
              "Vendu aux agriculteurs locaux",
              "BSD et bon de pesée fournis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Processus */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Notre processus de compostage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { num: "1", titre: "Réception", texte: "Pesée et contrôle visuel des déchets verts apportés" },
              { num: "2", titre: "Broyage", texte: "Réduction en fragments pour accélérer la dégradation" },
              { num: "3", titre: "Andains", texte: "Mise en andains pour favoriser l'aération et la fermentation" },
              { num: "4", titre: "Retournement", texte: "Retournements réguliers pour homogénéiser et oxygéner" },
              { num: "5", titre: "Criblage", texte: "Criblage final pour obtenir un compost calibré et normé" },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-4 border text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto"
                  style={{ backgroundColor: "#1a5c28" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-sm mb-1">{step.titre}</h3>
                <p className="text-gray-600 text-xs">{step.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vente de compost */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Vente de compost
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="text-gray-700 mb-3">
              Notre compost normé NF U44-051 est disponible à la vente pour les
              agriculteurs, maraîchers, paysagistes et collectivités locales.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Riche en matière organique, idéal pour amender les sols",
                "Disponible en vrac ou en big-bags selon les stocks",
                "Prix compétitif par rapport aux engrais organiques conventionnels",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1a5c28] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-3">
              Les disponibilités sont variables. Contactez-nous pour connaître les stocks actuels.
            </p>
          </div>
        </section>

        {/* Qui peut apporter */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Qui peut apporter des déchets verts ?
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Paysagistes et entreprises d'entretien des espaces verts",
              "Mairies et communes (fauchage, élagage bords de route)",
              "Syndicats de collectivités (EPCI, communautés de communes)",
              "Entreprises d'élagage et d'arboriculture",
              "Golfs, parcs et domaines paysagers",
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
              Apporter vos déchets verts ou acheter du compost ?
            </h2>
            <p className="mb-6 opacity-90">
              Contactez-nous pour les disponibilités et les conditions d&apos;accès.
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
