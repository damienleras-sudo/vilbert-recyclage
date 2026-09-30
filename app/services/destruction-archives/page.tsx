import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Destruction d'archives & documents confidentiels | Vilbert Recyclage Beauval (80)",
  description:
    "Vilbert Recyclage assure la destruction sécurisée de vos archives papier et documents confidentiels avec traçabilité BSD et certificat de destruction. Somme (80).",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services/destruction-archives",
  },
};

const faqs = [
  {
    q: "Recevons-nous un certificat de destruction ?",
    a: "Oui, un certificat de destruction est remis après chaque opération, attestant de la destruction conforme de vos documents.",
  },
  {
    q: "La destruction est-elle traçable ?",
    a: "Oui, un Bordereau de Suivi des Déchets (BSD) est émis via Trackdéchets pour chaque opération.",
  },
  {
    q: "Quels types d'archives acceptez-vous ?",
    a: "Documents papier, archives d'entreprise, dossiers confidentiels, supports informatiques papier. Nous ne traitons pas les supports numériques (disques durs).",
  },
  {
    q: "Peut-on apporter les archives directement sur site ?",
    a: "Oui, apport sur notre site de Beauval (80630) après demande d'acceptation préalable obligatoire (protocole MASE).",
  },
  {
    q: "La destruction est-elle conforme au RGPD ?",
    a: "Notre processus de destruction physique des documents permet de répondre aux obligations de destruction des données personnelles sur support papier.",
  },
];

export default function DestructionArchivesPage() {
  return (
    <main>
      <Breadcrumb
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Destruction d'archives" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1a5c28] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">📦</span>
            <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Confidentiel &amp; traçable
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Destruction d&apos;archives
          </h1>
          <p className="text-xl text-green-200 max-w-2xl">
            Destruction sécurisée et traçable de vos documents et archives papier.
            Certificat de destruction remis, BSD via Trackdéchets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:0322930286"
              className="inline-flex items-center justify-center gap-2 bg-[#f5b800] hover:bg-[#ffd44d] text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              📞 03 22 93 02 86
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* Pourquoi faire détruire ses archives ? */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">
            Pourquoi confier la destruction de vos archives ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "🔒",
                title: "Confidentialité garantie",
                desc: "Destruction physique irréversible des documents. Vos données ne peuvent pas être reconstituées.",
              },
              {
                icon: "📋",
                title: "Traçabilité totale",
                desc: "BSD via Trackdéchets + certificat de destruction remis après chaque opération.",
              },
              {
                icon: "♻️",
                title: "Valorisation du papier",
                desc: "Les archives détruites sont orientées vers la filière papier-carton pour recyclage.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents acceptés */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-4">Documents acceptés</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1a5c28] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Type de document</th>
                  <th className="px-4 py-3 text-left font-semibold">Exemples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Archives d'entreprise", "Comptabilité, contrats, RH, factures"],
                  ["Documents administratifs", "Dossiers administratifs, courriers"],
                  ["Documents confidentiels", "Données clients, données personnelles (RGPD)"],
                  ["Archives médicales", "Dossiers patients sur support papier"],
                  ["Documents juridiques", "Actes, contrats en fin de durée légale"],
                ].map(([type, ex]) => (
                  <tr key={type} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{type}</td>
                    <td className="px-4 py-3 text-gray-600">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            * Supports papier uniquement. Nous n&apos;acceptons pas les disques durs ni supports numériques.
          </p>
        </section>

        {/* Processus */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">Notre processus</h2>
          <ol className="space-y-4">
            {[
              { step: "1", title: "Demande préalable", desc: "Contactez-nous pour valider le type et le volume d'archives à détruire (protocole MASE obligatoire)." },
              { step: "2", title: "Apport ou enlèvement", desc: "Apport sur notre site de Beauval (80630) ou enlèvement possible selon volume." },
              { step: "3", title: "Destruction physique", desc: "Broyage / déchiquetage des documents sur notre plateforme sécurisée." },
              { step: "4", title: "Valorisation papier", desc: "Les résidus sont orientés vers la filière papier-carton pour recyclage." },
              { step: "5", title: "Certificat &amp; BSD", desc: "Remise du certificat de destruction et du Bordereau de Suivi des Déchets (Trackdéchets)." },
            ].map((item) => (
              <li key={item.step} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a5c28] text-white font-extrabold flex items-center justify-center text-sm">
                  {item.step}
                </span>
                <div>
                  <p className="font-bold text-gray-900">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* MASE & RGPD */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
            <span>⚠️</span> Protocole d&apos;accès MASE obligatoire
          </h3>
          <p className="text-amber-700 text-sm">
            Tout apport sur notre site nécessite une <strong>demande d&apos;acceptation préalable</strong> (appel ou email).
            Notre certification MASE impose le respect des règles de sécurité sur le site (EPI, protocole de déchargement).
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a5c28] mb-6">Questions fréquentes</h2>
          <FaqAccordion items={faqs} />
        </section>
      </div>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Besoin de détruire vos archives ?
          </h2>
          <p className="text-gray-800 mb-8">
            Contactez-nous pour valider votre demande — Devis sous 24h
          </p>
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
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Destruction d'archives et documents confidentiels",
            serviceType: "Destruction sécurisée d'archives papier et documents confidentiels",
            description:
              "Destruction sécurisée et traçable d'archives papier et documents confidentiels à Beauval (Somme). Broyage/déchiquetage physique irréversible. Certificat de destruction remis, BSD via Trackdéchets. Conforme aux obligations RGPD pour la destruction de données personnelles sur support papier.",
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
              name: "Services de destruction d'archives",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Destruction archives d'entreprise",
                    description: "Comptabilité, contrats, RH, factures — destruction physique irréversible",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Destruction documents confidentiels et données personnelles (RGPD)",
                    description: "Dossiers clients, données personnelles — conformité RGPD pour supports papier",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Destruction archives médicales",
                    description: "Dossiers patients sur support papier — destruction confidentielle et traçable",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Certificat de destruction et BSD",
                    description: "Certificat de destruction remis + BSD via Trackdéchets après chaque opération",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Valorisation papier-carton",
                    description: "Résidus orientés vers la filière papier-carton pour recyclage",
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
            termsOfService: "Protocole d'accès MASE obligatoire — demande d'acceptation préalable indispensable avant tout apport sur site (appel ou email). Respect des règles de sécurité site (EPI, protocole de déchargement). Supports numériques (disques durs) non acceptés.",
          }),
        }}
      />
    </main>
  );
}
