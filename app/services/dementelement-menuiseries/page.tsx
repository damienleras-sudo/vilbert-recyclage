import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Démantèlement menuiseries fin de vie — 92% recyclage | Vilbert Recyclage Beauval",
  description:
    "Centre spécialisé démantèlement menuiseries PVC, aluminium, bois. Taux recyclage >92%. Fenêtres, portes, volets. Attestation fournie. Beauval Somme — 03 22 93 02 86.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/dementelement-menuiseries",
  },
};

const faqs = [
  {
    q: "Acceptez-vous toutes les tailles de menuiseries ?",
    a: "Oui, nous acceptons toutes les tailles de fenêtres, portes, baies vitrées, vérandas et volets, qu'il s'agisse de petites menuiseries standard ou de grandes baies de bâtiments industriels.",
  },
  {
    q: "Quels documents je reçois après le traitement ?",
    a: "Vous recevez une attestation de traitement avec le détail des matières recyclées, un bon de pesée, et un BSD (Bordereau de Suivi des Déchets) via Trackdéchets si applicable.",
  },
  {
    q: "La collecte sur chantier est-elle possible ?",
    a: "Oui. Pour les chantiers de rénovation importants ou les lots de menuiseries volumineux, nous pouvons organiser une collecte directement sur votre site. Contactez-nous pour évaluer la faisabilité.",
  },
  {
    q: "Quel est le volume minimum accepté ?",
    a: "Nous acceptons à partir d'une seule fenêtre. Pour les très petits volumes, nous vous conseillons de grouper vos apports. Pour les volumes industriels (dépose de bâtiment entier), nous proposons des conditions spéciales.",
  },
  {
    q: "Comment cela se compare à la mise en benne classique ?",
    a: "La benne classique mélange PVC, verre, acier et caoutchouc, rendant le recyclage difficile. Notre démantèlement sépare chaque matière à la source, permettant un recyclage > 92% contre moins de 50% pour une benne tout-venant.",
  },
];

const matieres = [
  { matiere: "PVC", devenir: "Nouveau PVC recyclé (profilés, tuyaux)" },
  { matiere: "Verre", devenir: "Calcin → verre recyclé ou laine de verre" },
  { matiere: "Acier / ferrailles", devenir: "Fonderie, sidérurgie" },
  { matiere: "Aluminium", devenir: "Aluminium recyclé (fonderie)" },
  { matiere: "Caoutchouc (joints)", devenir: "Régénération ou valorisation énergétique" },
  { matiere: "Bois", devenir: "Panneau bois ou biomasse énergie" },
];

export default function DementelementMenuiseriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Démantèlement menuiseries fin de vie",
            serviceType: "Démantèlement et recyclage de menuiseries PVC, aluminium et bois",
            description:
              "Centre spécialisé dans le démantèlement et le recyclage des menuiseries PVC, aluminium et bois en fin de vie. Taux de recyclage supérieur à 92%. Séparation à la source : PVC, verre, acier, caoutchouc. Attestation de traitement et BSD via Trackdéchets fournis.",
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
              name: "Services de démantèlement menuiseries",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Démantèlement fenêtres PVC fin de vie",
                    description: "Séparation PVC, verre, joints caoutchouc — recyclage > 92%",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Démantèlement menuiseries aluminium",
                    description: "Séparation aluminium, verre, acier — valorisation en fonderie",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Démantèlement menuiseries bois",
                    description: "Bois orienté panneau bois ou biomasse énergie",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Collecte sur chantier",
                    description: "Enlèvement possible sur chantier pour lots volumineux",
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
            termsOfService: "Protocole MASE — acceptation préalable obligatoire avant tout apport ou enlèvement sur chantier. Attestation de traitement, bon de pesée et BSD Trackdéchets fournis à chaque opération.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Breadcrumb
            crumbs={[
              { label: "Accueil", href: "/" },
              { label: "Nos services", href: "/services" },
              { label: "Démantèlement menuiseries" },
            ]}
          />
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#1a5c28" }} className="py-16 mt-4">
          <div className="max-w-5xl mx-auto px-4 text-white text-center">
            <div className="inline-block bg-[#f5b800] text-black font-bold text-2xl px-8 py-3 rounded-full mb-6">
              &gt; 92% RECYCLÉ
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Démantèlement de menuiseries fin de vie
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Centre spécialisé dans le tri et le recyclage des fenêtres, portes
              et volets PVC, aluminium et bois. Taux de recyclage supérieur à 92%.
            </p>
          </div>
        </section>

        {/* Points forts */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">Nos points forts</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Fenêtres PVC, aluminium et bois",
              "Séparation PVC, verre, acier, caoutchouc",
              "Taux recyclage > 92%",
              "Attestation de traitement fournie",
              "BSD via Trackdéchets",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#1a5c28] font-bold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Photo */}
        <div
          className="relative w-full max-w-5xl mx-auto mb-8 rounded-xl overflow-hidden"
          style={{ height: "300px" }}
        >
          <Image
            src="/batiment-recyclage.jpg"
            alt="Centre de recyclage Vilbert Recyclage Beauval"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Processus 4 étapes */}
        <section className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Notre processus en 4 étapes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "1", titre: "Réception", texte: "Pesée et enregistrement des menuiseries à l'entrée du site" },
              { num: "2", titre: "Démontage", texte: "Séparation manuelle : PVC, verre, acier, joints caoutchouc" },
              { num: "3", titre: "Tri par matière", texte: "Chaque matière est placée dans un flux dédié pour optimiser le recyclage" },
              { num: "4", titre: "Orientation filière", texte: "Envoi vers les filières de recyclage spécialisées (PVC recycleur, verrier…)" },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-4 border text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto"
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

        {/* Tableau matières */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Matières récupérées et leur devenir
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#1a5c28" }} className="text-white">
                  <th className="p-3 text-left">Matière</th>
                  <th className="p-3 text-left">Devenir</th>
                </tr>
              </thead>
              <tbody>
                {matieres.map((row, i) => (
                  <tr key={row.matiere} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium border-b">{row.matiere}</td>
                    <td className="p-3 border-b text-gray-700">{row.devenir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Qui est concerné */}
        <section className="max-w-5xl mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">
            Qui est concerné ?
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Poseurs et installateurs de fenêtres et menuiseries",
              "Bailleurs sociaux et gestionnaires immobiliers",
              "Promoteurs et maîtres d'ouvrage",
              "Collectivités locales (école, mairie, logements)",
              "Entreprises de démolition et de rénovation",
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
              Recycler vos menuiseries à plus de 92%
            </h2>
            <p className="mb-6 opacity-90">
              Appelez-nous ou écrivez-nous pour organiser votre apport ou
              une collecte sur chantier.
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
