import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Questions Fréquentes | Vilbert Recyclage Déchets BTP Beauval (80)",
  description:
    "Toutes les réponses sur la location de benne, les tarifs, les déchets acceptés, la certification MASE et Valobat. Vilbert Recyclage, Beauval (Somme) — 03 22 93 02 86.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/faq",
  },
  openGraph: {
    title: "FAQ — Questions Fréquentes | Vilbert Recyclage",
    description:
      "Location de benne, déchets BTP, tarifs, MASE, Valobat, destruction d'archives… toutes vos questions répondues.",
    url: "https://www.vilbert-recyclage.fr/faq",
    siteName: "Vilbert Recyclage",
    locale: "fr_FR",
    type: "website",
  },
};

// ─── Données FAQ par catégorie ───────────────────────────────────────────────

const faqLocationBenne: FaqItem[] = [
  {
    q: "Comment commander une benne chez Vilbert Recyclage ?",
    a: "Appelez-nous au 03 22 93 02 86 ou envoyez un e-mail à contact@vilbert-recyclage.fr. Nous convenons ensemble d'une date de dépôt et de reprise, puis nos chauffeurs livrent la benne directement sur votre chantier ou votre propriété.",
  },
  {
    q: "Quelles sont les tailles de bennes disponibles ?",
    a: "Nous proposons des bennes de 8 m³, 15 m³ et 30 m³ pour s'adapter à tous les volumes de déchets, du petit chantier de rénovation aux grands travaux de démolition.",
  },
  {
    q: "Combien de temps puis-je garder la benne ?",
    a: "La durée standard de mise à disposition est de 7 jours. Une prolongation est possible sur demande et sous réserve de disponibilité, en contactant notre équipe avant l'expiration du délai.",
  },
  {
    q: "Faut-il une autorisation de voirie pour poser une benne sur la voie publique ?",
    a: "Oui, une autorisation de stationnement (arrêté de voirie) délivrée par la mairie est obligatoire si la benne est placée sur le domaine public. Nous pouvons vous orienter dans vos démarches. Sur terrain privé, aucune autorisation n'est nécessaire.",
  },
  {
    q: "Livrez-vous en dehors de Beauval ?",
    a: "Oui. Notre zone d'intervention couvre la Somme et les départements limitrophes : Amiens, Abbeville, Doullens, Albert, Péronne, Arras, Lens, Saint-Quentin, Cambrai et Compiègne. Contactez-nous pour confirmer la disponibilité sur votre commune.",
  },
];

const faqDechetsAcceptes: FaqItem[] = [
  {
    q: "Quels types de déchets du BTP acceptez-vous ?",
    a: "Nous acceptons : gravats et béton, tuiles et briques, bois de chantier, plâtre, métaux, plastiques de chantier, déchets d'isolation (laine de verre, laine de roche), carrelage, fenêtres et menuiseries (PMCB). Ces déchets sont collectés, triés et valorisés conformément à la réglementation.",
  },
  {
    q: "Acceptez-vous les déchets verts et organiques ?",
    a: "Oui. Nous collectons les déchets verts (tonte, taille, branchages) issus de particuliers, paysagistes et collectivités. La tarification est de 25 € la tonne. Ces déchets sont compostés ou valorisés en énergie.",
  },
  {
    q: "Quels déchets sont interdits dans vos bennes ?",
    a: "Sont strictement interdits : amiante, déchets dangereux (solvants, peintures, huiles), DEEE (appareils électroniques), pneumatiques, produits chimiques, déchets radioactifs, cadavres d'animaux et ordures ménagères non triées. Tout dépôt de déchet interdit engage la responsabilité du donneur d'ordre.",
  },
  {
    q: "Gérez-vous les déchets PMCB (Produits et Matériaux de Construction du Bâtiment) ?",
    a: "Oui. En tant que point de collecte agréé Valobat, nous acceptons gratuitement les PMCB issus des chantiers de rénovation (plâtre, isolants, menuiseries, fenêtres, revêtements de sol, etc.) conformément à la REP PMCB issue de la loi AGEC.",
  },
  {
    q: "Puis-je déposer des déchets d'amiante ?",
    a: "Non. L'amiante est un déchet dangereux soumis à une réglementation très stricte. Sa collecte nécessite un prestataire spécialisé agréé et des équipements de protection adaptés. Nous pouvons vous orienter vers un opérateur habilité sur demande.",
  },
];

const faqTarifs: FaqItem[] = [
  {
    q: "Quel est le tarif d'une benne de 8 m³ ?",
    a: "La location d'une benne de 8 m³ (dépôt, enlèvement et traitement des déchets inclus) est à partir de 180 € HT. Ce tarif couvre les déchets inertes standards (gravats, béton). Des majorations peuvent s'appliquer selon la nature des déchets ou la distance de livraison.",
  },
  {
    q: "Quel est le prix pour les déchets verts ?",
    a: "Les déchets verts sont facturés 25 € HT la tonne. Ce tarif s'applique à la tonte, la taille, les branchages et les déchets organiques de jardinage. La pesée est réalisée sur notre pont-bascule certifié à Beauval.",
  },
  {
    q: "Combien coûte le concassé recyclé ?",
    a: "Le concassé recyclé (granulats issus du concassage de béton et de gravats) est disponible à 12,50 € HT la tonne, départ Beauval. Ce matériau est idéal pour les remblais, sous-couches de voirie et plateformes de chantier.",
  },
  {
    q: "Comment obtenir un devis pour des volumes importants ?",
    a: "Pour tout chantier d'envergure, marché public ou besoin récurrent, nous établissons une grille tarifaire personnalisée sur demande. Contactez-nous au 03 22 93 02 86 ou par e-mail en précisant les volumes estimés, la nature des déchets et la fréquence de collecte.",
  },
];

const faqValobat: FaqItem[] = [
  {
    q: "Qu'est-ce que Valobat et pourquoi est-ce important ?",
    a: "Valobat est l'éco-organisme agréé par l'État pour la filière REP PMCB (Responsabilité Élargie du Producteur pour les Produits et Matériaux de Construction du Bâtiment). Depuis le 1er janvier 2023, les professionnels du bâtiment ont l'obligation légale de trier et de déposer leurs PMCB dans un point de collecte agréé.",
  },
  {
    q: "Vilbert Recyclage est-il un point de collecte Valobat agréé ?",
    a: "Oui. Notre site de Beauval est référencé comme point de collecte agréé Valobat. Vous pouvez y déposer vos PMCB gratuitement (dans la limite des tonnages prévus par la convention), sans frais supplémentaires liés à l'éco-contribution.",
  },
  {
    q: "Quels PMCB sont acceptés dans le cadre de Valobat ?",
    a: "Sont acceptés au titre de la REP PMCB : plâtre et carreaux de plâtre, isolants (laine de verre, laine de roche, polystyrène), menuiseries et fenêtres, revêtements de sol (carrelage, parquet, moquette), bardages, couvertures, etc. Consultez le site valobat.fr pour la liste exhaustive.",
  },
  {
    q: "La collecte PMCB est-elle vraiment gratuite ?",
    a: "Oui, pour les professionnels du bâtiment soumis à la REP PMCB, le dépôt est gratuit dans les points de collecte agréés Valobat. L'éco-contribution est payée en amont par les fabricants et distributeurs de matériaux. La gratuité s'applique aux déchets issus de chantiers en France.",
  },
];

const faqMase: FaqItem[] = [
  {
    q: "Qu'est-ce que la certification MASE ?",
    a: "Le MASE (Manuel d'Amélioration Sécurité des Entreprises) est un référentiel de management de la sécurité reconnu par les grands donneurs d'ordres industriels. Il atteste que l'entreprise certifiée a mis en place un système rigoureux de prévention des risques professionnels, de formation du personnel et d'amélioration continue en matière de santé-sécurité.",
  },
  {
    q: "Vilbert Recyclage est-il certifié MASE ?",
    a: "Oui. Vilbert Recyclage est certifié MASE, ce qui garantit à nos clients (entreprises industrielles, collectivités, donneurs d'ordres) le respect des plus hauts standards de sécurité lors de nos interventions sur chantier et sur notre site de traitement.",
  },
  {
    q: "Pourquoi choisir un prestataire certifié MASE pour la gestion de vos déchets BTP ?",
    a: "Faire appel à un prestataire certifié MASE vous assure que les intervenants sont formés aux risques spécifiques du chantier, que les procédures de sécurité sont documentées et auditées, et que votre responsabilité en tant que donneur d'ordres est couverte. C'est également un prérequis pour de nombreux marchés industriels et publics.",
  },
];

const faqArchives: FaqItem[] = [
  {
    q: "Vilbert Recyclage propose-t-il la destruction sécurisée d'archives ?",
    a: "Oui. Nous assurons la collecte et la destruction confidentielle de documents papier (archives, dossiers RH, données clients, contrats) pour les entreprises et administrations. Les documents sont déchiquetés puis recyclés. Un certificat de destruction est remis après chaque opération.",
  },
  {
    q: "La destruction d'archives est-elle conforme au RGPD ?",
    a: "Oui. Notre procédure de destruction garantit l'irrecupérabilité des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et aux recommandations de la CNIL. Le certificat de destruction constitue la preuve documentaire de la conformité.",
  },
  {
    q: "Comment fonctionne la collecte des archives à détruire ?",
    a: "Nous mettons à disposition des conteneurs sécurisés ou des sacs scellés sur vos sites. La collecte est planifiée selon vos besoins (ponctuelle ou récurrente). Les documents sont ensuite détruits sous contrôle dans notre installation. Un certificat nominatif vous est remis dans les 48 heures.",
  },
];

const faqMateriaux: FaqItem[] = [
  {
    q: "Vendez-vous des matériaux recyclés ?",
    a: "Oui. Nous commercialisons des granulats et matériaux recyclés issus du concassage de déchets inertes BTP : concassé tout-venant, grave recyclée 0/31,5, grave recyclée 0/80, sable recyclé. Ces matériaux sont certifiés et conformes aux normes en vigueur pour les usages en remblai et voirie.",
  },
  {
    q: "Quel est l'usage recommandé pour le concassé recyclé ?",
    a: "Le concassé recyclé est principalement utilisé pour : remblaiement de tranchées et fouilles, sous-couche de voirie et chemins, plateforme de chantier, drainage. Il est idéal pour réduire les coûts de chantier tout en s'inscrivant dans une démarche d'économie circulaire.",
  },
  {
    q: "Les granulats recyclés sont-ils de qualité identique aux granulats naturels ?",
    a: "Les granulats recyclés présentent des caractéristiques mécaniques légèrement inférieures aux granulats naturels (concassé de carrière) mais sont parfaitement adaptés aux usages en remblai, voirie non structurelle et plateformes. Nos granulats sont contrôlés et documentés (fiches techniques disponibles sur demande).",
  },
  {
    q: "Livrez-vous les matériaux recyclés sur chantier ?",
    a: "Oui. Nous assurons la livraison de granulats recyclés en vrac par camion sur vos chantiers dans notre zone d'intervention (Somme et départements limitrophes). Contactez-nous pour un devis de livraison incluant le transport.",
  },
];

const faqZone: FaqItem[] = [
  {
    q: "Quelle est la zone géographique d'intervention de Vilbert Recyclage ?",
    a: "Notre site principal est situé à Beauval (Somme, 80). Nous intervenons dans un rayon de 100 km environ, couvrant notamment : Amiens, Abbeville, Doullens, Albert, Péronne (Somme), Arras, Lens, Cambrai (Pas-de-Calais/Nord), Saint-Quentin (Aisne) et Compiègne (Oise).",
  },
  {
    q: "Intervenez-vous pour les collectivités et marchés publics ?",
    a: "Oui. Vilbert Recyclage répond aux appels d'offres des collectivités territoriales, syndicats de traitement des déchets et donneurs d'ordres publics. Notre certification MASE et notre agrément Valobat facilitent l'accès aux marchés exigeant des garanties en matière de sécurité et de traçabilité.",
  },
  {
    q: "Comment me rendre sur le site de Vilbert Recyclage à Beauval ?",
    a: "Notre site est situé à Beauval (80600), Somme. Depuis Amiens, empruntez la D938 direction Doullens, puis suivez les indications Beauval. Des horaires d'ouverture et l'adresse précise sont disponibles sur notre page Contact. Nous vous recommandons de prendre rendez-vous avant votre venue pour les dépôts importants.",
  },
];

// ─── Toutes les questions pour le schema JSON-LD ─────────────────────────────

const allFaqItems: FaqItem[] = [
  ...faqLocationBenne,
  ...faqDechetsAcceptes,
  ...faqTarifs,
  ...faqValobat,
  ...faqMase,
  ...faqArchives,
  ...faqMateriaux,
  ...faqZone,
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

// ─── Catégories ──────────────────────────────────────────────────────────────

const categories = [
  {
    id: "location-benne",
    icon: "🏗️",
    title: "Location de bennes",
    items: faqLocationBenne,
  },
  {
    id: "dechets-acceptes",
    icon: "♻️",
    title: "Déchets acceptés",
    items: faqDechetsAcceptes,
  },
  {
    id: "tarifs",
    icon: "💶",
    title: "Tarifs",
    items: faqTarifs,
  },
  {
    id: "valobat-pmcb",
    icon: "🏠",
    title: "Valobat & PMCB",
    items: faqValobat,
  },
  {
    id: "certification-mase",
    icon: "✅",
    title: "Certification MASE",
    items: faqMase,
  },
  {
    id: "destruction-archives",
    icon: "📄",
    title: "Destruction d'archives",
    items: faqArchives,
  },
  {
    id: "vente-materiaux",
    icon: "🪨",
    title: "Vente de matériaux recyclés",
    items: faqMateriaux,
  },
  {
    id: "zone-intervention",
    icon: "📍",
    title: "Zone d'intervention",
    items: faqZone,
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "FAQ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1a5c28] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services de gestion des
            déchets BTP, la location de bennes, nos tarifs et nos certifications.
          </p>
          <p className="mt-4 text-green-200 text-sm">
            Une question non répertoriée ?{" "}
            <a
              href="tel:+33322930286"
              className="underline font-semibold text-white hover:text-green-100 transition-colors"
            >
              Appelez-nous au 03 22 93 02 86
            </a>
          </p>
        </div>
      </section>

      {/* Navigation rapide par catégorie */}
      <section className="bg-gray-50 border-b py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wide">
            Accès rapide
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:border-[#1a5c28] hover:text-[#1a5c28] transition-colors"
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Corps de la FAQ */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl" aria-hidden="true">
                {cat.icon}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
            </div>
            <FaqAccordion items={cat.items} accentColor="#1a5c28" />
          </section>
        ))}
      </main>

      {/* CTA final */}
      <section className="bg-[#1a5c28] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Notre équipe est disponible du lundi au vendredi pour répondre à
            toutes vos questions sur la gestion de déchets BTP.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+33322930286"
              className="inline-flex items-center gap-2 bg-white text-[#1a5c28] font-bold px-8 py-4 rounded-lg text-lg hover:bg-green-50 transition-colors shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#1a5c28] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Envoyer un message
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            Vilbert Recyclage — Route de Doullens, Beauval (80600) — Somme
          </p>
        </div>
      </section>
    </>
  );
}
