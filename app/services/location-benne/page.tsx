import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Location de benne Somme (80) — Beauval | Vilbert Recyclage",
  description:
    "Location benne chantier dans la Somme : livraison 24-48h, toutes tailles (5 à 30m³), particuliers et pros. Location annuelle pour entrepôts. Devis gratuit — 03 22 93 02 86.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/location-benne",
  },
};

const faqs = [
  {
    q: "Quel est le délai de livraison de la benne ?",
    a: "Nous livrons sous 24 à 48h après confirmation de votre commande. Pour les chantiers urgents, contactez-nous directement par téléphone au 03 22 93 02 86.",
  },
  {
    q: "Que peut-on mettre dans la benne ?",
    a: "Selon le type de benne louée : gravats, béton, plâtre (benne inertes), bois, plastiques, cartons (benne tout-venant), ou déchets verts. Chaque benne est clairement étiquetée. Les déchets dangereux (amiante, peintures, huiles) ne sont pas acceptés.",
  },
  {
    q: "Peut-on laisser la benne sur la voie publique ?",
    a: "Oui, mais une autorisation de voirie auprès de votre mairie est nécessaire. Nous vous fournissons les informations nécessaires à la demande. La benne doit être signalée (bandes réfléchissantes, feux de gabarit la nuit).",
  },
  {
    q: "Comment choisir la bonne taille de benne ?",
    a: "Pour des travaux de rénovation légère (pièce), comptez 5 à 8m³. Pour un chantier de maison complète ou gros œuvre, 15 à 20m³. Pour les chantiers industriels ou de démolition, 25 à 30m³. Nos équipes peuvent vous conseiller selon votre projet.",
  },
  {
    q: "Proposez-vous des contrats de location annuels ?",
    a: "Oui. Nous proposons des rotations planifiées pour les entrepôts, plateformes logistiques et industriels. La benne est enlevée et remplacée automatiquement selon une fréquence convenue. Tarifs dégressifs selon le volume annuel.",
  },
];

export default function LocationBennePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Location de benne",
            serviceType: "Location de benne à déchets",
            description:
              "Location de bennes à déchets pour particuliers et professionnels dans la Somme et les Hauts-de-France. Livraison sous 24-48h, toutes tailles de 5 à 30m³. Location annuelle pour entrepôts et plateformes logistiques.",
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
              sameAs: "https://www.vilbert-recyclage.fr",
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
              name: "Gamme de bennes",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Benne petite (5–8 m³)",
                    description: "Rénovation d'une pièce, jardin, vider une cave",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Benne moyenne (10–15 m³)",
                    description: "Rénovation maison, chantier artisan, terrassement",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Benne grande (20–30 m³)",
                    description: "Démolition, chantier industriel, tri en flux séparés",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Location annuelle avec rotations planifiées",
                    description: "Benne permanente sur site industriel ou logistique avec rotations à fréquence définie",
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
            termsOfService: "Protocole d'accès MASE — demande d'acceptation préalable obligatoire avant tout apport sur site. BSD et bon de pesée fournis.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Location de bennes" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Location de benne dans la Somme
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Livraison sous 24-48h, toutes tailles de 5 à 30m³. Pour les
              particuliers, artisans et professionnels du Hauts-de-France.
            </p>
          </div>
        </section>

        {/* Photo */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden"
          style={{ height: "360px" }}
        >
          <Image
            src="/entree-dechetterie.jpg"
            alt="Entrée déchetterie Vilbert Recyclage Beauval"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Points forts */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Nos points forts
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Livraison sous 24-48h",
              "Toutes tailles : 5 à 30m³",
              "Particuliers, artisans, professionnels",
              "BSD et bon de pesée fournis",
              "Location annuelle pour entrepôts",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tableau tailles */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Quelle taille choisir ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#1a5c28" }} className="text-white">
                  <th className="p-3 text-left">Format</th>
                  <th className="p-3 text-left">Volume</th>
                  <th className="p-3 text-left">Usage typique</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Petite</td>
                  <td className="p-3">5 – 8 m³</td>
                  <td className="p-3">Rénovation d&apos;une pièce, jardin, vider une cave</td>
                </tr>
                <tr className="border-b bg-gray-100">
                  <td className="p-3 font-medium">Moyenne</td>
                  <td className="p-3">10 – 15 m³</td>
                  <td className="p-3">Rénovation maison, chantier artisan, terrassement</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Grande</td>
                  <td className="p-3">20 – 30 m³</td>
                  <td className="p-3">Démolition, chantier industriel, tri en flux séparés</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Location à l'année */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Location à l&apos;année pour professionnels
          </h2>
          <p className="text-gray-700 mb-4">
            Vous gérez un entrepôt, une plateforme logistique ou un site de
            production ? Nous mettons en place des rotations planifiées adaptées
            à vos flux de déchets.
          </p>
          <ul className="space-y-2">
            {[
              "Benne toujours disponible sur site",
              "Rotations à fréquence définie (hebdomadaire, mensuelle…)",
              "Facturation mensuelle simplifiée",
              "Reporting BSD inclus",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Zone desservie */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Zone desservie
          </h2>
          <p className="text-gray-700 mb-3">
            Nous livrons dans un rayon étendu autour de Beauval :
          </p>
          <div className="flex flex-wrap gap-3">
            {["Somme (80)", "Pas-de-Calais (62)", "Oise (60)", "Aisne (02)", "Nord (59)"].map(
              (dept) => (
                <span
                  key={dept}
                  style={{ backgroundColor: "#1a5c28" }}
                  className="text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {dept}
                </span>
              )
            )}
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
              Besoin d&apos;une benne rapidement ?
            </h2>
            <p className="mb-6 opacity-90">
              Appelez-nous ou faites une demande en ligne. Réponse sous 24h.
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
