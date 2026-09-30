import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Opérateur Valobat — Déchets PMCB gratuits Somme | Vilbert Recyclage",
  description:
    "Vilbert Recyclage est opérateur agréé Valobat. Déposez vos déchets PMCB (fenêtres, isolants, plâtres) gratuitement à Beauval. REP PMCB — financement par éco-contributions.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/valobat-pmcb",
  },
};

const faqs = [
  {
    q: "Suis-je éligible au dépôt gratuit Valobat ?",
    a: "Le dispositif est réservé aux professionnels du bâtiment (artisans, entreprises générales, promoteurs, bailleurs). Les particuliers ne sont pas éligibles à la gratuité. Les déchets doivent être issus de produits ayant payé l'éco-contribution Valobat à la fabrication.",
  },
  {
    q: "La gratuité inclut-elle le transport des déchets jusqu'à votre site ?",
    a: "Non. La gratuité Valobat concerne uniquement le traitement des déchets une fois déposés sur notre site de Beauval. Le transport depuis votre chantier reste à votre charge.",
  },
  {
    q: "Quels documents je reçois après mon dépôt ?",
    a: "Vous recevez une attestation de prise en charge Valobat ainsi qu'un bon de pesée. Ces documents peuvent être utilisés pour votre reporting RSE et vos obligations réglementaires.",
  },
  {
    q: "Les particuliers sont-ils concernés par Valobat ?",
    a: "Non, la filière REP PMCB financée par Valobat est exclusivement réservée aux professionnels. Les particuliers peuvent cependant déposer leurs déchets de menuiserie selon les tarifs standards.",
  },
  {
    q: "Dois-je m'inscrire quelque part avant de venir ?",
    a: "Oui, une acceptation préalable est obligatoire pour tout dépôt PMCB sous dispositif Valobat. Contactez-nous par téléphone ou via notre formulaire pour valider l'éligibilité de vos déchets avant de vous déplacer.",
  },
];

const eligibles = [
  "Fenêtres et portes PVC",
  "Fenêtres et portes aluminium",
  "Fenêtres et portes bois",
  "Plaques de plâtre (BA13, plaques de sol)",
  "Isolants thermiques (laine de verre, laine de roche, polystyrène)",
  "Volets et stores (PVC, alu, bois)",
  "Doubles vitrages",
];

const nonEligibles = [
  "Déchets d'amiante",
  "Matériaux contaminés (peintures, huiles)",
  "Béton, gravats, inertes",
  "Déchets ménagers",
  "Bois traités classe 3 ou 4",
];

export default function ValobatPmcbPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traitement déchets PMCB Valobat",
            serviceType: "Collecte et traitement de déchets PMCB — filière REP Valobat",
            description:
              "Vilbert Recyclage est opérateur agréé Valobat pour la collecte et le traitement gratuit des déchets PMCB (Produits et Matériaux de Construction du Bâtiment). Fenêtres PVC/alu/bois, isolants, plaques de plâtre acceptés à 0€ pour les professionnels du bâtiment éligibles.",
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
              name: "Déchets PMCB acceptés gratuitement",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Collecte fenêtres et portes (PVC, aluminium, bois)",
                    description: "Dépôt gratuit pour professionnels du bâtiment — financement Valobat",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Collecte isolants thermiques",
                    description: "Laine de verre, laine de roche, polystyrène — dépôt gratuit Valobat",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Collecte plaques de plâtre (BA13)",
                    description: "Plaques de sol et plaques standard — dépôt gratuit Valobat",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Attestation Valobat",
                    description: "Attestation de prise en charge et bon de pesée remis à chaque dépôt",
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
            termsOfService: "Protocole MASE — acceptation préalable obligatoire avant tout dépôt. Réservé aux professionnels du bâtiment. Les déchets doivent être issus de produits ayant payé l'éco-contribution Valobat.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Valobat / PMCB" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#00A651" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-xl px-6 py-4 inline-flex items-center gap-3">
                <Image
                  src="/valobat-logo.svg"
                  alt="Logo Valobat"
                  width={140}
                  height={48}
                />
                <span className="font-bold text-sm" style={{ color: "#00A651" }}>
                  Opérateur agréé
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Déchets PMCB : dépôt gratuit pour les pros
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Vilbert Recyclage est opérateur agréé Valobat. Déposez vos fenêtres,
              isolants et plaques de plâtre gratuitement à Beauval.
            </p>
          </div>
        </section>

        {/* Points forts */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#00A651" }}>
            Nos points forts
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Opérateur agréé Valobat",
              "Déchets PMCB acceptés à 0€*",
              "Fenêtres PVC, alu et bois",
              "Isolants thermiques de toute nature",
              "Plaques de plâtre (BA13, sol)",
              "Attestation Valobat fournie à chaque dépôt",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="font-bold text-lg mt-0.5" style={{ color: "#00A651" }}>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            * Gratuité réservée aux professionnels du bâtiment, sous conditions d&apos;éligibilité et d&apos;acceptation préalable.
          </p>
        </section>

        {/* Comment ça marche */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#00A651" }}>
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                titre: "Éco-contributions",
                texte:
                  "Les fabricants et importateurs de produits du bâtiment versent une éco-contribution à Valobat pour chaque produit mis sur le marché.",
              },
              {
                num: "2",
                titre: "Valobat finance",
                texte:
                  "Valobat redistribue ces fonds aux opérateurs agréés comme Vilbert Recyclage pour couvrir les coûts de collecte et de traitement.",
              },
              {
                num: "3",
                titre: "Vous déposez gratuitement",
                texte:
                  "En tant que professionnel, vous déposez vos déchets PMCB éligibles sur notre site de Beauval sans frais de traitement.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-5 border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3"
                  style={{ backgroundColor: "#00A651" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.titre}</h3>
                <p className="text-gray-600 text-sm">{step.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tableau éligibilité */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#00A651" }}>
            Déchets éligibles et non éligibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-green-800">
                Acceptés gratuitement (PMCB)
              </h3>
              <ul className="space-y-2">
                {eligibles.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-red-800">
                Non éligibles / tarif standard
              </h3>
              <ul className="space-y-2">
                {nonEligibles.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Encadré conditions */}
        <section className="max-w-5xl mx-auto px-4 mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5">
            <h3 className="font-bold text-amber-800 mb-2">Conditions importantes</h3>
            <ul className="text-amber-900 space-y-1 text-sm">
              <li>• Dispositif réservé exclusivement aux professionnels du bâtiment</li>
              <li>• Acceptation préalable obligatoire — appelez-nous avant de vous déplacer</li>
              <li>• Les déchets doivent être issus de produits ayant payé l&apos;éco-contribution Valobat</li>
              <li>• La gratuité ne couvre pas le transport depuis le chantier</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#00A651" }}>
            Questions fréquentes
          </h2>
          <FaqAccordion items={faqs} accentColor="#00A651" />
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#00A651" }} className="py-12 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Valider l&apos;éligibilité de vos déchets
            </h2>
            <p className="mb-6 opacity-90">
              Appelez-nous avant votre dépôt pour confirmer l&apos;éligibilité de vos
              déchets PMCB et planifier votre passage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0322930286"
                className="bg-white font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90 transition"
                style={{ color: "#00A651" }}
              >
                03 22 93 02 86
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-white transition"
                style={{ hover: { color: "#00A651" } } as React.CSSProperties}
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
