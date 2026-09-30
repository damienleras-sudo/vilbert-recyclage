import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Vilbert Recyclage | Expert déchets BTP depuis 30 ans — Hauts-de-France",
  description:
    "Vilbert Recyclage, filiale du Groupe Vilbert : plus de 30 ans d'expérience dans la gestion et valorisation des déchets BTP en Hauts-de-France. Centre agréé à Beauval (Somme). Certifications MASE, Valobat, Trackdéchets. Taux de recyclage menuiseries > 92 %.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/a-propos" },
  openGraph: {
    title: "À propos de Vilbert Recyclage — Expert déchets BTP depuis 30 ans",
    description:
      "30+ ans d'expérience, 70 collaborateurs, 6 départements couverts. Filiale du Groupe Vilbert, acteur de référence de la valorisation des déchets BTP en Hauts-de-France.",
    url: "https://www.vilbert-recyclage.fr/a-propos",
    siteName: "Vilbert Recyclage",
    locale: "fr_FR",
    type: "website",
  },
};

/* ─── JSON-LD schemas ──────────────────────────────────────────── */
const jsonLdAboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.vilbert-recyclage.fr/a-propos#webpage",
  url: "https://www.vilbert-recyclage.fr/a-propos",
  name: "À propos de Vilbert Recyclage",
  description:
    "Présentation de Vilbert Recyclage, filiale du Groupe Vilbert : histoire, valeurs, certifications et équipes dédiées à la gestion des déchets BTP en Hauts-de-France.",
  inLanguage: "fr-FR",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.vilbert-recyclage.fr/#website",
    url: "https://www.vilbert-recyclage.fr",
    name: "Vilbert Recyclage",
  },
  about: {
    "@id": "https://www.vilbert-recyclage.fr/#organization",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "RecyclingCenter"],
      "@id": "https://www.vilbert-recyclage.fr/#organization",
      name: "Vilbert Recyclage",
      legalName: "Vilbert Recyclage SAS",
      url: "https://www.vilbert-recyclage.fr",
      logo: "https://www.vilbert-recyclage.fr/logo.png",
      image: "https://www.vilbert-recyclage.fr/centre-traitement-beauval.jpg",
      description:
        "Vilbert Recyclage est une filiale du Groupe Vilbert spécialisée dans la collecte, le transport et le traitement des déchets BTP en Hauts-de-France depuis plus de 30 ans.",
      foundingDate: "1990",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 70,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Route de Doullens",
        addressLocality: "Beauval",
        postalCode: "80560",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.0769,
        longitude: 2.2882,
      },
      telephone: "+33322930286",
      email: "contact@vilbert-recyclage.fr",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "17:00",
        },
      ],
      areaServed: [
        { "@type": "AdministrativeArea", name: "Somme (80)" },
        { "@type": "AdministrativeArea", name: "Pas-de-Calais (62)" },
        { "@type": "AdministrativeArea", name: "Nord (59)" },
        { "@type": "AdministrativeArea", name: "Oise (60)" },
        { "@type": "AdministrativeArea", name: "Aisne (02)" },
        { "@type": "AdministrativeArea", name: "Seine-Maritime (76)" },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Certification MASE",
          credentialCategory: "Sécurité et santé au travail",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Agrément Valobat",
          credentialCategory: "Éco-organisme déchets menuiseries",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Enregistrement Trackdéchets",
          credentialCategory: "Traçabilité réglementaire des déchets",
        },
      ],
      sameAs: ["https://www.groupe-vilbert.com"],
      parentOrganization: {
        "@type": "Organization",
        name: "Groupe Vilbert",
        url: "https://www.groupe-vilbert.com",
      },
      knowsAbout: [
        "Déchets BTP",
        "Déchets de chantier",
        "Valorisation matériaux",
        "Recyclage inertes",
        "Location de bennes",
        "Granulats recyclés",
      ],
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Depuis quand Vilbert Recyclage est-il en activité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vilbert Recyclage est une filiale du Groupe Vilbert, acteur du BTP en Hauts-de-France depuis 1990. Notre centre de traitement agréé à Beauval (Somme) cumule plus de 30 ans d'expérience dans la gestion des déchets de chantier.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de déchets BTP Vilbert Recyclage accepte-t-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous acceptons l'ensemble des déchets BTP : gravats et inertes, béton, briques, tuiles, bois de chantier, plâtre, métaux, menuiseries PVC et aluminium, déchets industriels banals (DIB) ainsi que les terres excavées. Un tri sur 7 flux réglementaires est effectué sur notre site.",
      },
    },
    {
      "@type": "Question",
      name: "Vilbert Recyclage est-il certifié MASE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Vilbert Recyclage détient la certification MASE (Manuel d'Amélioration Sécurité des Entreprises), attestant de notre engagement en matière de sécurité et de santé au travail pour nos équipes et nos clients.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le taux de recyclage des menuiseries chez Vilbert Recyclage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre taux de recyclage des menuiseries (PVC, aluminium, bois) dépasse 92 %, grâce à notre partenariat avec l'éco-organisme Valobat. Les matériaux sont triés, conditionnés et expédiés vers des filières de valorisation agréées.",
      },
    },
    {
      "@type": "Question",
      name: "Sur quels départements Vilbert Recyclage intervient-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vilbert Recyclage couvre 6 départements des Hauts-de-France et de Normandie : Somme (80), Pas-de-Calais (62), Nord (59), Oise (60), Aisne (02) et Seine-Maritime (76). La livraison de bennes est assurée en 24 à 48h sur la majorité de la zone.",
      },
    },
  ],
};

/* ─── Données ─────────────────────────────────────────────────── */
const chiffres = [
  { valeur: "30+", label: "années d'expérience", detail: "depuis 1990" },
  { valeur: "2 000+", label: "clients actifs", detail: "particuliers & pros" },
  { valeur: "70", label: "collaborateurs", detail: "Groupe Vilbert" },
  { valeur: "6", label: "départements couverts", detail: "Hauts-de-France" },
  { valeur: ">92 %", label: "recyclage menuiseries", detail: "taux Valobat" },
  { valeur: "7", label: "flux triés", detail: "réglementation ICPE" },
];

const certifications = [
  {
    nom: "MASE",
    description:
      "Manuel d'Amélioration Sécurité des Entreprises. Certification nationale attestant de notre politique de prévention des risques professionnels et de l'amélioration continue de la sécurité.",
    lien: "https://www.mase-asso.fr",
    categorie: "Sécurité & Santé au travail",
    couleur: "border-blue-500",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
  },
  {
    nom: "Valobat",
    description:
      "Éco-organisme agréé pour la filière REP Produits & Matériaux de Construction du Bâtiment. Notre agrément garantit la traçabilité et le recyclage des menuiseries avec un taux supérieur à 92 %.",
    lien: "https://www.valobat.fr",
    categorie: "Recyclage menuiseries REP PMCB",
    couleur: "border-green-500",
    badgeBg: "bg-green-50",
    badgeText: "text-green-700",
  },
  {
    nom: "Trackdéchets",
    description:
      "Plateforme officielle de l'État pour la traçabilité dématérialisée des déchets dangereux et non dangereux. Nos BSD (Bordereaux de Suivi de Déchets) sont émis et archivés sur Trackdéchets.",
    lien: "https://trackdechets.beta.gouv.fr",
    categorie: "Traçabilité réglementaire",
    couleur: "border-purple-500",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
  },
  {
    nom: "Panneaux solaires",
    description:
      "Filière de valorisation des panneaux photovoltaïques en fin de vie. Nos équipes sont formées à la dépose et au conditionnement sécurisé des modules pour un recyclage conforme à la réglementation.",
    lien: null,
    categorie: "Valorisation panneaux PV",
    couleur: "border-yellow-500",
    badgeBg: "bg-yellow-50",
    badgeText: "text-yellow-700",
  },
];

const poles = [
  {
    icon: "🚛",
    titre: "Pôle Collecte & Transport",
    effectif: "~30 personnes",
    description:
      "Chauffeurs poids lourds, conducteurs de polybennes et amplirolls, coordinateurs de tournées. Notre flotte assure la livraison et le retrait de bennes dans un rayon couvrant 6 départements, en 24 à 48h.",
    competences: ["Conduite PL / SPL", "Logistique de tournées", "Relation client terrain"],
  },
  {
    icon: "♻️",
    titre: "Pôle Traitement & Valorisation",
    effectif: "~25 personnes",
    description:
      "Conducteurs d'engins, opérateurs de tri, agents de quai. Ils réceptionnent, trient et valorisent chaque tonne de déchets sur notre centre ICPE de Beauval, en respectant les 7 flux réglementaires.",
    competences: ["Conduite d'engins CACES", "Tri et criblage", "Gestion des filières de valorisation"],
  },
  {
    icon: "📋",
    titre: "Pôle Administration, QHSE & Commerce",
    effectif: "~15 personnes",
    description:
      "Assistants administratifs, chargés de clientèle, responsable QHSE et équipe commerciale. Ils garantissent la conformité réglementaire, la traçabilité documentaire (BSD, DAP) et l'accompagnement de chaque client.",
    competences: ["Gestion documentaire BSD/DAP", "Certification MASE", "Conseil & devis"],
  },
];

const valeurs = [
  {
    icon: "♻️",
    titre: "Engagement environnemental",
    texte:
      "Nous valorisons un maximum de déchets en matières premières secondaires, limitant au minimum la mise en décharge. Notre objectif : zéro déchet enfoui à horizon 2030.",
  },
  {
    icon: "📋",
    titre: "Conformité et traçabilité",
    texte:
      "Chaque tonnage traité est documenté (BSD, certificats de valorisation). Nos clients professionnels disposent des preuves de traçabilité exigées par la réglementation.",
  },
  {
    icon: "🤝",
    titre: "Proximité et réactivité",
    texte:
      "Une équipe locale disponible du lundi au vendredi. Livraison de benne en 24 à 48h sur la majorité de notre zone d'intervention en Hauts-de-France.",
  },
  {
    icon: "⚖️",
    titre: "Tarifs transparents",
    texte:
      "Devis gratuit et sans surprise. Le prix convenu est le prix facturé. Pas de frais cachés, pas de surfacturation pour les pesées.",
  },
];

const equipements = [
  "Concasseur pour inertes (gravats, béton, briques)",
  "Cribleur et séparateur granulométrique",
  "Zones de tri dédiées par flux (7 flux réglementaires)",
  "Bascule de pesée agréée",
  "Parc de bennes multiformats (5 à 30 m³)",
  "Camions polybennes et amplirolls",
];

/* ─── Page ────────────────────────────────────────────────────── */
export default function AProposPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAboutPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            À propos
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Vilbert Recyclage,{" "}
            <span className="text-[#f5b800]">votre expert déchets BTP</span>{" "}
            depuis 30 ans
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Filiale du Groupe Vilbert, nous gérons la collecte, le transport et le traitement de
            vos déchets de chantier en Hauts-de-France avec rigueur et savoir-faire.
            Centre agréé ICPE à Beauval (Somme 80).
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="py-14 bg-[#f5b800]" aria-label="Chiffres clés Vilbert Recyclage">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-black text-gray-900 mb-8">
            Nos chiffres clés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {chiffres.map((c) => (
              <div key={c.label} className="text-center bg-white/30 rounded-2xl p-4">
                <div className="text-3xl md:text-4xl font-black text-gray-900">{c.valeur}</div>
                <div className="text-sm font-bold text-gray-800 mt-1 leading-tight">{c.label}</div>
                <div className="text-xs text-gray-600 mt-0.5">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black text-[#1a5c28] mb-4">
              Notre histoire
            </h2>
            <div className="w-12 h-1 bg-[#f5b800] mb-6" />
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Vilbert Recyclage est née de la volonté du <strong>Groupe Vilbert</strong> — acteur historique
                du BTP en Hauts-de-France depuis 1990 — de proposer une solution complète et locale
                pour la gestion des déchets de chantier.
              </p>
              <p>
                Basée à <strong>Beauval (Somme 80)</strong>, notre déchetterie professionnelle est
                équipée pour accueillir et traiter l&apos;ensemble des déchets BTP : des terres et
                gravats inertes jusqu&apos;aux déchets industriels banals, en passant par le plâtre,
                le bois et les métaux.
              </p>
              <p>
                Au fil des années, nous avons développé des filières de valorisation performantes
                pour maximiser le réemploi des matériaux et minimiser l&apos;enfouissement. Nos
                granulats recyclés sont réutilisés dans les travaux routiers et le BTP régional,
                contribuant à une économie plus circulaire.
              </p>
              <p>
                Aujourd&apos;hui, plus de 2 000 clients — particuliers, artisans et grandes entreprises —
                nous font confiance pour la gestion de leurs déchets dans six départements :
                Somme, Pas-de-Calais, Nord, Oise, Aisne et Seine-Maritime.
              </p>
            </div>
          </div>

          {/* Groupe Vilbert */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-black text-gray-900 mb-4">
              Le Groupe Vilbert
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Vilbert Recyclage est une filiale du <strong>Groupe Vilbert</strong>, entreprise
              familiale fondée dans la Somme et spécialisée dans les travaux de terrassement,
              VRD et construction. Le Groupe emploie plus de 70 collaborateurs et réalise
              des chantiers sur l&apos;ensemble des Hauts-de-France.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              La création de Vilbert Recyclage s&apos;inscrit dans une démarche de développement
              durable du Groupe, intégrant la gestion responsable des déchets dans sa chaîne
              de valeur globale.
            </p>
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a5c28] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2a7a38] transition-colors text-sm"
            >
              Découvrir le Groupe Vilbert →
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-gray-50" aria-label="Certifications et agréments Vilbert Recyclage">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a5c28] mb-2 text-center">
            Nos certifications & agréments
          </h2>
          <p className="text-center text-gray-500 text-sm mb-2">
            Des engagements vérifiés par des organismes indépendants
          </p>
          <div className="w-12 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.nom}
                className={`bg-white rounded-2xl p-6 border-l-4 ${cert.couleur} shadow-sm`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-black text-gray-900">{cert.nom}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${cert.badgeBg} ${cert.badgeText}`}>
                    {cert.categorie}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                {cert.lien && (
                  <a
                    href={cert.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1a5c28] font-bold text-sm hover:underline"
                  >
                    Voir le site officiel →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE / PÔLES */}
      <section className="py-16 bg-white" aria-label="Organisation et équipes Vilbert Recyclage">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a5c28] mb-2 text-center">
            Notre équipe
          </h2>
          <p className="text-center text-gray-500 text-sm mb-2">
            70 collaborateurs organisés en trois pôles complémentaires
          </p>
          <div className="w-12 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poles.map((pole) => (
              <div key={pole.titre} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
                <div className="text-4xl mb-3">{pole.icon}</div>
                <h3 className="font-black text-gray-900 mb-1">{pole.titre}</h3>
                <span className="text-xs text-[#1a5c28] font-bold mb-3">{pole.effectif}</span>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {pole.description}
                </p>
                <ul className="space-y-1">
                  {pole.competences.map((comp) => (
                    <li key={comp} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-[#1a5c28] font-black mt-0.5">✓</span>
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPEMENTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a5c28] mb-2 text-center">
            Nos équipements à Beauval
          </h2>
          <div className="w-12 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipements.map((eq) => (
              <div key={eq} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <span className="text-[#1a5c28] font-black text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-sm">{eq}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a5c28] mb-2 text-center">
            Nos engagements
          </h2>
          <div className="w-12 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{v.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50" aria-label="Questions fréquentes sur Vilbert Recyclage">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a5c28] mb-2 text-center">
            Questions fréquentes
          </h2>
          <div className="w-12 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="space-y-4">
            {jsonLdFaq.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 group"
              >
                <summary className="cursor-pointer px-6 py-4 font-bold text-gray-900 list-none flex items-center justify-between gap-3 hover:text-[#1a5c28] transition-colors">
                  <span>{faq.name}</span>
                  <span className="text-[#f5b800] text-xl font-black group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a5c28] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-black mb-3">
            Travaillons ensemble
          </h2>
          <p className="text-green-200 mb-6">
            Contactez notre équipe pour un devis personnalisé adapté à vos besoins.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-xl hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#1a5c28] transition-colors"
            >
              Demander un devis →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
