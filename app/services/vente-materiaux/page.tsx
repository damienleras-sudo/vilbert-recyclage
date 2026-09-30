import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Vente matériaux recyclés Somme — Granulats, compost, copeaux | Vilbert Recyclage",
  description:
    "Achetez nos matériaux recyclés produits à Beauval : concassé béton, GNT recyclée, compost NF U44-051, copeaux de bois, sables recyclés. Prix compétitifs, disponibilités sur devis.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/vente-materiaux",
  },
};

const faqs = [
  {
    q: "Livrez-vous les matériaux sur chantier ?",
    a: "Oui, nous pouvons organiser la livraison par camion benne sur votre chantier dans un rayon adapté autour de Beauval. Les conditions de livraison (volume minimum, distance) sont précisées au moment du devis.",
  },
  {
    q: "Les granulats recyclés sont-ils conformes aux normes ?",
    a: "Nos granulats recyclés (concassé béton, GNT) sont produits conformément aux normes NF EN 13242 et NF EN 12620. Ils font l'objet de contrôles réguliers. Les certificats de conformité sont disponibles sur demande.",
  },
  {
    q: "Quel est le prix des matériaux recyclés ?",
    a: "Les prix varient selon le matériau, le volume et les disponibilités. En règle générale, nos matériaux sont de 20 à 40% moins chers que les équivalents d'origine naturelle. Contactez-nous pour un devis personnalisé.",
  },
  {
    q: "Puis-je venir chercher les matériaux directement sur site ?",
    a: "Oui, l'enlèvement en camion est possible directement sur notre site de Beauval. Merci de nous contacter à l'avance pour vérifier les disponibilités et organiser votre venue.",
  },
  {
    q: "Le compost recyclé est-il utilisable en agriculture biologique ?",
    a: "Notre compost normé NF U44-051 est compatible avec de nombreuses pratiques agricoles. Pour une utilisation certifiée AB (Agriculture Biologique), il faut vérifier les conditions spécifiques avec votre organisme certificateur.",
  },
];

const produits = [
  {
    icon: "🪨",
    nom: "Concassé béton",
    usage: "Remblai, sous-couche de voirie, fondations",
    norme: "NF EN 13242",
  },
  {
    icon: "🛣️",
    nom: "GNT recyclée",
    usage: "Couche de forme, chemins, accès de chantier",
    norme: "NF EN 13242",
  },
  {
    icon: "🌿",
    nom: "Compost",
    usage: "Amendement agricole, espaces verts, maraîchage",
    norme: "NF U44-051",
  },
  {
    icon: "🪵",
    nom: "Copeaux de bois",
    usage: "Paillage horticole, allées, aire de jeux",
    norme: "",
  },
  {
    icon: "🏖️",
    nom: "Sables recyclés",
    usage: "Remblai, sous-couche, travaux VRD",
    norme: "NF EN 13139",
  },
];

export default function VenteMateriauxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vente de matériaux recyclés",
            serviceType: "Vente de granulats recyclés, compost et matériaux de construction issus du recyclage",
            description:
              "Vente de matériaux recyclés produits sur le site de Beauval : concassé béton NF EN 13242, GNT recyclée, compost NF U44-051, copeaux de bois, sables recyclés. 20 à 40% moins chers que les équivalents naturels. Enlèvement sur site ou livraison chantier.",
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
              name: "Catalogue matériaux recyclés",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Concassé béton recyclé",
                    description: "Remblai, sous-couche de voirie, fondations — norme NF EN 13242",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "GNT recyclée",
                    description: "Couche de forme, chemins, accès de chantier — norme NF EN 13242",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Compost NF U44-051",
                    description: "Amendement agricole, espaces verts, maraîchage — en vrac ou big-bags",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Copeaux de bois",
                    description: "Paillage horticole, allées, aires de jeux",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Sables recyclés",
                    description: "Remblai, sous-couche de dallage, travaux VRD — norme NF EN 13139",
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
            termsOfService: "Protocole MASE — contact préalable obligatoire pour vérifier les disponibilités. Certificats de conformité disponibles sur demande. Enlèvement sur site de Beauval ou livraison chantier sur devis.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Vente de matériaux recyclés" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Vente de matériaux recyclés
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Granulats, compost, copeaux et sables produits sur notre site de
              Beauval. Prix compétitifs, qualité normée, disponible en enlèvement
              ou livraison.
            </p>
          </div>
        </section>

        {/* Photo */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden"
          style={{ height: "360px" }}
        >
          <Image
            src="/concassage.jpg"
            alt="Concassage béton recyclé Vilbert Recyclage Beauval"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Cards produits */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Nos produits disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {produits.map((p) => (
              <div
                key={p.nom}
                className="border rounded-xl p-5 bg-white hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-lg mb-1">{p.nom}</h3>
                <p className="text-gray-600 text-sm mb-2">{p.usage}</p>
                {p.norme && (
                  <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                    {p.norme}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Disponibilités variables selon les stocks. Contactez-nous avant de vous déplacer.
          </p>
        </section>

        {/* Tableau comparatif */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Avantages des matériaux recyclés
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#1a5c28" }} className="text-white">
                  <th className="p-3 text-left">Critère</th>
                  <th className="p-3 text-left">Matériaux recyclés Vilbert</th>
                  <th className="p-3 text-left">Matériaux naturels</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Prix</td>
                  <td className="p-3 text-green-700 font-medium">20-40% moins cher</td>
                  <td className="p-3 text-gray-600">Prix marché standard</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 font-medium">Bilan carbone</td>
                  <td className="p-3 text-green-700 font-medium">Très faible (local)</td>
                  <td className="p-3 text-gray-600">Extraction + transport</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Origine</td>
                  <td className="p-3 text-green-700 font-medium">Produit localement à Beauval</td>
                  <td className="p-3 text-gray-600">Carrières, imports</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Conformité RSE</td>
                  <td className="p-3 text-green-700 font-medium">Contribue aux objectifs RSE</td>
                  <td className="p-3 text-gray-600">Impact environnemental plus élevé</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Usages recommandés */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Usages recommandés par produit
          </h2>
          <div className="space-y-3">
            {[
              { produit: "Concassé béton", usages: "Remblais de tranchées, sous-fondation de bâtiments légers, couche de fondation de voirie" },
              { produit: "GNT recyclée", usages: "Couche de forme sous chaussée, chemins ruraux, accès de chantier, parkings provisoires" },
              { produit: "Compost NF U44-051", usages: "Amendement de sols agricoles, potagers, espaces verts communaux, golf" },
              { produit: "Copeaux de bois", usages: "Paillage arbres et arbustes, allées de jardin, aire de jeux naturelle" },
              { produit: "Sables recyclés", usages: "Remblai de fouilles, sous-couche de dallage, travaux VRD légers" },
            ].map((item) => (
              <div key={item.produit} className="flex items-start gap-3 p-3 border rounded-lg bg-gray-50">
                <span className="text-[#1a5c28] font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-medium">{item.produit} : </span>
                  <span className="text-gray-600 text-sm">{item.usages}</span>
                </div>
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
              Commander vos matériaux recyclés
            </h2>
            <p className="mb-6 opacity-90">
              Appelez-nous pour connaître les disponibilités et obtenir un devis.
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
