import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Traitement espèces invasives Somme — Renouée du Japon | Vilbert Recyclage",
  description:
    "Espace dédié au traitement des espèces végétales invasives (renouée du Japon, berce du Caucase…) à Beauval. Filière réglementée, espace confiné, BSD fourni. Somme (80).",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/especes-invasives",
  },
};

const faqs = [
  {
    q: "Comment transporter ces végétaux jusqu'à votre site ?",
    a: "Les espèces invasives doivent être transportées dans des contenants étanches et fermés (bâches, sacs résistants bien fermés, bennes couvertes) afin d'éviter tout risque de dispersion de graines ou de fragments pendant le transport.",
  },
  {
    q: "La renouée du Japon peut-elle aller en compostage classique ?",
    a: "Non, absolument pas. La renouée du Japon est une espèce extrêmement invasive capable de repousser à partir d'un fragment de tige ou de rhizome de quelques centimètres. Un compostage classique ne détruit pas ses propagules. Elle nécessite une filière de traitement spécialisée garantissant la destruction totale.",
  },
  {
    q: "Intervenez-vous directement sur les chantiers pour enlever ces plantes ?",
    a: "Nous ne réalisons pas l'arrachage ou le chantier de traitement, mais nous accueillons les déchets une fois extraits. Pour les chantiers de traitement, rapprochez-vous d'entreprises spécialisées en gestion des espèces invasives.",
  },
  {
    q: "Quels documents je reçois après le dépôt ?",
    a: "Vous recevez un bon de pesée et un BSD (Bordereau de Suivi des Déchets) attestant de la bonne prise en charge et du traitement réglementaire de vos déchets d'espèces invasives.",
  },
  {
    q: "Le traitement garantit-il l'absence totale de propagation ?",
    a: "Oui. Notre espace de traitement est confiné, avec des procédures strictes de manipulation et de traitement thermique ou mécanique permettant la destruction complète des propagules. Aucun fragment végétal ne peut s'échapper de notre processus.",
  },
];

const especesListe = [
  { nom: "Renouée du Japon", latin: "Reynoutria japonica" },
  { nom: "Berce du Caucase", latin: "Heracleum mantegazzianum" },
  { nom: "Buddleia de David", latin: "Buddleja davidii" },
  { nom: "Solidage du Canada", latin: "Solidago canadensis" },
  { nom: "Jussie à grandes fleurs", latin: "Ludwigia grandiflora" },
  { nom: "Séneçon du Cap", latin: "Senecio inaequidens" },
  { nom: "Impatiente de l'Himalaya", latin: "Impatiens glandulifera" },
];

export default function EspecesInvasivesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traitement espèces végétales invasives",
            serviceType: "Traitement et élimination des espèces exotiques envahissantes (EEE)",
            description:
              "Espace confiné dédié au traitement des espèces végétales invasives (renouée du Japon, berce du Caucase…) à Beauval, Somme. Filière réglementée conforme à la directive européenne 1143/2014. Zéro risque de propagation. BSD fourni à chaque dépôt.",
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
              name: "Traitement espèces exotiques envahissantes",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Réception et confinement espèces invasives",
                    description: "Zone de réception hermétique séparée des autres flux de déchets verts",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Traitement renouée du Japon",
                    description: "Traitement thermique ou enfouissement ICPE agréé — destruction complète des propagules",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Traitement berce du Caucase et autres EEE",
                    description: "Filière réglementée pour toutes espèces exotiques envahissantes",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BSD et traçabilité réglementaire",
                    description: "Bordereau de Suivi des Déchets et bon de pesée remis après chaque dépôt",
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
            termsOfService: "Protocole MASE — contact préalable obligatoire avant tout dépôt. Transport en contenants étanches fermés obligatoire. Respect de la directive européenne 1143/2014 sur les espèces exotiques envahissantes.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Espèces invasives" },
            ]}
          />
        </div>

        {/* Bandeau alerte */}
        <div className="max-w-5xl mx-auto px-4 mt-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <p className="text-orange-900 font-medium">
              Ces végétaux nécessitent une filière spécialisée — ne pas composter avec d&apos;autres déchets verts
            </p>
          </div>
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-6">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Traitement des espèces végétales invasives
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Espace confiné dédié à Beauval. Filière réglementée, zéro risque de
              propagation. Renouée du Japon, berce du Caucase et autres espèces
              exotiques envahissantes.
            </p>
          </div>
        </section>

        {/* Points forts */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">Nos points forts</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Espace confiné dédié aux espèces invasives",
              "Renouée du Japon, Berce du Caucase et autres EEE",
              "Filière réglementée et traçable",
              "Zéro risque de propagation",
              "BSD fourni à chaque dépôt",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Espèces concernées */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Espèces concernées (liste non exhaustive)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {especesListe.map((esp) => (
              <div key={esp.nom} className="bg-white border rounded-lg p-3 flex items-center gap-3">
                <span className="text-orange-500 text-xl">🌿</span>
                <div>
                  <p className="font-medium">{esp.nom}</p>
                  <p className="text-xs text-gray-500 italic">{esp.latin}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Pour toute autre espèce exotique envahissante, contactez-nous pour vérifier
            l&apos;éligibilité à notre filière.
          </p>
        </section>

        {/* Pourquoi une filière spécialisée */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Pourquoi une filière spécialisée ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Risques de propagation</h3>
              <p className="text-gray-700 text-sm mb-3">
                Un fragment de tige ou de rhizome de renouée du Japon peut donner
                naissance à un nouveau plant. Le compostage classique, le brûlage
                ou le dépôt en décharge non conformes ne détruisent pas les
                propagules et peuvent propager l&apos;espèce.
              </p>
              <ul className="space-y-1 text-sm">
                {[
                  "Régénération depuis 1 cm de rhizome",
                  "Graines viables plusieurs années",
                  "Résistance aux traitements classiques",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Réglementation</h3>
              <p className="text-gray-700 text-sm">
                La directive européenne 1143/2014 et la législation française
                encadrent strictement la gestion des espèces exotiques
                envahissantes. Le producteur de déchet est responsable de leur
                élimination dans une filière appropriée. Notre site garantit
                le respect de ces obligations réglementaires.
              </p>
            </div>
          </div>
        </section>

        {/* Notre processus */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Notre processus de traitement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "1",
                titre: "Confinement",
                texte: "Réception dans une zone dédiée et hermétique, séparée des autres flux de déchets verts",
              },
              {
                num: "2",
                titre: "Transport sécurisé",
                texte: "Transfert vers les filières de traitement agréées dans des véhicules bâchés et tracés",
              },
              {
                num: "3",
                titre: "Traitement",
                texte: "Destruction par traitement thermique (haute température) ou enfouissement en installation agréée ICPE",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-5 border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3"
                  style={{ backgroundColor: "#1a5c28" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.titre}</h3>
                <p className="text-gray-600 text-sm">{step.texte}</p>
              </div>
            ))}
          </div>
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
              Traiter vos espèces invasives en toute conformité
            </h2>
            <p className="mb-6 opacity-90">
              Contactez-nous avant votre dépôt pour organiser l&apos;accueil de vos déchets.
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
