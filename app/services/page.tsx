import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Services | Bennes, Broyage, Compostage, Démantèlement Menuiseries, Valobat — Vilbert Recyclage",
  description:
    "Vilbert Recyclage : location de bennes, broyage sur chantier, démantèlement menuiseries (92% recyclage), compostage, vente matériaux recyclés, opérateur Valobat (déchets PMCB à 0€). Certifié MASE. Beauval (80).",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/services",
  },
};

const services = [
  {
    id: "bennes",
    icon: "🏗️",
    title: "Location de bennes",
    subtitle: "Particuliers, artisans & professionnels",
    desc: `Vilbert Recyclage met à votre disposition des bennes adaptées à tous les volumes et tous les types de déchets. Que vous soyez un particulier en pleine rénovation ou un professionnel gérant plusieurs chantiers simultanément, nous avons la solution adaptée.`,
    details: [
      "Livraison et enlèvement inclus — intervention 24-48h",
      "Plusieurs tailles disponibles selon vos besoins",
      "Enlèvement sur appel ou à date convenue",
      "Location à l'année pour entrepôts et professionnels (rotation planifiée)",
      "Intervention rapide en Hauts-de-France (Somme, Pas-de-Calais, Oise, Aisne…)",
    ],
    photo: null,
    badge: null,
  },
  {
    id: "broyage",
    icon: "🪓",
    title: "Broyage sur chantier",
    subtitle: "Intervention mobile — déchets verts & bois",
    desc: `Vilbert Recyclage intervient directement sur vos chantiers pour broyer vos déchets verts et vos bois de démolition. Cette prestation mobile évite les coûts et délais de transport : nous venons avec notre équipement, nous broyons sur place.`,
    details: [
      "Déplacement sur site avec matériel de broyage adapté",
      "Déchets verts, branches, rémanents forestiers, bois de démolition",
      "Réduction significative des volumes à évacuer",
      "Produit final valorisable (broyat, paillage, compostage)",
      "Devis sur mesure selon volume et accessibilité",
    ],
    photo: "/le-targo-3000-sur-un-chantier-de-broyage-de-dechets-verts-photo-neuenhauser-540x273.jpg",
    badge: "Service mobile",
  },
  {
    id: "dementelement",
    icon: "🪟",
    title: "Démantèlement des menuiseries en fin de vie",
    subtitle: "Centre spécialisé — taux de recyclage > 92 %",
    desc: `Notre centre de démantèlement des menuiseries en fin de vie est une prestation rare et hautement valorisante. Fenêtres PVC, aluminium, bois — chaque composant est séparé et orienté vers la filière de recyclage adaptée. Nous atteignons un taux de recyclage supérieur à 92 %, bien au-delà des filières classiques.`,
    details: [
      "Démantèlement manuel et mécanique des châssis, vitrages, joints et ferrures",
      "Tri par matière : PVC, aluminium, verre, acier, caoutchouc",
      "Taux de recyclage > 92 % — traçabilité complète",
      "Attestation de traitement fournie pour vos dossiers",
      "Collecte sur chantier ou apport direct sur notre site",
    ],
    photo: null,
    badge: "> 92% recyclé",
  },
  {
    id: "compostage",
    icon: "🌿",
    title: "Plateforme de compostage",
    subtitle: "Déchets verts → compost valorisé",
    desc: `Notre plateforme de compostage transforme vos déchets verts de chantier (tontes, tailles, branchages) en compost mature et amendement organique. Ce compost est ensuite vendu à des agriculteurs et paysagistes locaux, fermant ainsi la boucle de l'économie circulaire.`,
    details: [
      "Réception de déchets verts non souillés (tontes, tailles, branchages)",
      "Processus de compostage contrôlé sur notre plateforme dédiée",
      "Production de compost mature normé (NF U44-051)",
      "Compost disponible à la vente — renseignez-vous sur les disponibilités",
      "Traçabilité complète du déchet au produit fini",
    ],
    photo: null,
    badge: null,
  },
  {
    id: "invasives",
    icon: "🌱",
    title: "Traitement des espèces invasives",
    subtitle: "Espace dédié — filière réglementée",
    desc: `Les plantes envahissantes comme la Renouée du Japon, la Berce du Caucase ou le Buddleia font l'objet d'une réglementation stricte : elles ne peuvent pas être traitées comme des déchets verts classiques. Vilbert Recyclage dispose d'un espace dédié pour leur réception et leur traitement conforme à la réglementation.`,
    details: [
      "Espace de confinement dédié — séparation totale des autres flux",
      "Traitement adapté : compostage en conditions contrôlées ou enfouissement",
      "Conformité avec la réglementation sur les espèces invasives",
      "Renouée du Japon, Berce du Caucase, Buddleia, Solidage…",
      "Bordereau de suivi fourni pour vos obligations réglementaires",
    ],
    photo: null,
    badge: "Filière spécialisée",
  },
  {
    id: "collecte",
    icon: "🚛",
    title: "Collecte & Enlèvement",
    subtitle: "Nous venons sur votre chantier",
    desc: `Deux options s'offrent à vous : apporter vos déchets directement sur notre site de Beauval ou nous demander de venir les chercher sur votre chantier. Dans les deux cas, la prise en charge est complète et documentée.`,
    details: [
      "Apport volontaire en déchetterie pro (Beauval 80630)",
      "Enlèvement sur chantier à votre demande — réponse sous 24h",
      "Gestion de tous les types de déchets BTP",
      "BSD (Bordereau de Suivi des Déchets) fourni automatiquement",
      "Bon de pesée remis à chaque passage",
    ],
    photo: null,
    badge: null,
  },
  {
    id: "traitement",
    icon: "♻️",
    title: "Traitement & Valorisation",
    subtitle: "Valorisation maximale sur notre plateforme",
    desc: `Sur notre plateforme de Beauval, vos déchets sont triés, traités et valorisés au maximum. Notre objectif : atteindre le taux de valorisation le plus élevé possible en limitant la mise en décharge. Nos bâtiments sont équipés de panneaux solaires pour alimenter nos machines et réduire notre empreinte carbone.`,
    details: [
      "Concassage des inertes — production de granulats recyclés GNT, concassé béton",
      "Criblage et tri mécanique",
      "Massification et valorisation du plâtre",
      "Filières dédiées : bois, métaux, plastiques, plâtre",
      "Bâtiment équipé de panneaux solaires ☀️ — énergie propre pour nos machines",
    ],
    photo: "/concassage.jpg",
    badge: "Énergie solaire",
  },
];

const materiaux = [
  {
    icon: "🪨",
    nom: "Concassé béton",
    usage: "Remblais, sous-fondations, chemins",
    norme: "GNT recyclé 0/100",
  },
  {
    icon: "🏗️",
    nom: "GNT recyclée",
    usage: "Voiries, allées, plateformes",
    norme: "Granulat tout-venant",
  },
  {
    icon: "🌱",
    nom: "Compost",
    usage: "Amendement agricole, paysagisme",
    norme: "NF U44-051",
  },
  {
    icon: "🪵",
    nom: "Copeaux de bois",
    usage: "Paillage, biomasse, cavalier",
    norme: "Broyat bois propre",
  },
  {
    icon: "⛱️",
    nom: "Sables recyclés",
    usage: "Remblais, nivellement",
    norme: "Criblé 0/4 – 0/6",
  },
];

const dechets = [
  {
    categorie: "Inertes",
    couleur: "#e8f5e9",
    borderColor: "#1a5c28",
    items: ["Terres", "Gravats", "Béton", "Briques", "Tuiles", "Céramique", "Ardoises", "Agrégats d'enrobés"],
  },
  {
    categorie: "Plâtres",
    couleur: "#fff8e1",
    borderColor: "#f5b800",
    items: ["Plaques de plâtre (BA13, double plaque…)", "Enduits plâtre", "Carreaux de plâtre", "Staff et moulures"],
  },
  {
    categorie: "Bois & Menuiseries",
    couleur: "#fbe9e7",
    borderColor: "#bf360c",
    items: ["Charpente et ossature bois", "Menuiseries bois", "Palettes", "Panneaux (OSB, contreplaqué)"],
  },
  {
    categorie: "Plastiques & PVC",
    couleur: "#e3f2fd",
    borderColor: "#1565c0",
    items: ["Profilés PVC", "Tubes et raccords", "Fenêtres PVC", "Volets et stores"],
  },
  {
    categorie: "Métaux",
    couleur: "#f3e5f5",
    borderColor: "#6a1b9a",
    items: ["Acier et fer", "Aluminium", "Cuivre", "Zinc et plomb"],
  },
  {
    categorie: "Déchets verts",
    couleur: "#f1f8e9",
    borderColor: "#558b2f",
    items: ["Tontes de gazon", "Tailles de haies", "Branchages", "Rémanents forestiers"],
  },
  {
    categorie: "DIB & Autres",
    couleur: "#eceff1",
    borderColor: "#546e7a",
    items: ["Déchets industriels banals de chantier", "Laines de verre et de roche", "Verre de menuiserie", "Emballages non dangereux"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Nos prestations
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Recyclage, valorisation &<br />
            <span className="text-[#f5b800]">services déchets BTP</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Une offre complète pour les particuliers, artisans et professionnels du bâtiment en Hauts-de-France.
            Certifié <strong className="text-white">MASE</strong> — traçabilité totale sur <strong className="text-white">Trackdéchets</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            {["🏅 Certifié MASE", "🟢 Opérateur Valobat", "📋 Trackdéchets", "☀️ Énergie solaire", "> 92% recyclé menuiseries"].map(b => (
              <span key={b} className="bg-white/15 text-white text-sm px-3 py-1.5 rounded-full border border-white/30 font-medium">{b}</span>
            ))}
          </div>
        </div>
        <div className="h-1 bg-[#f5b800] mt-8" />
      </section>

      {/* ⚠️ PROTOCOLE SÉCURITÉ / MASE */}
      <section className="bg-amber-50 border-b-4 border-amber-400 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 items-start">
            <div className="text-3xl flex-shrink-0">⚠️</div>
            <div>
              <h2 className="text-lg font-black text-amber-900 mb-2">
                Conditions d&apos;accès au site — Certification MASE
              </h2>
              <p className="text-amber-800 text-sm leading-relaxed mb-3">
                Vilbert Recyclage est certifié <strong>MASE</strong> (Manuel d&apos;Amélioration Sécurité des Entreprises).
                À ce titre, nous appliquons une <strong>exigence élevée en matière de sécurité</strong>.
                L&apos;accès au site et tout déchargement sont conditionnés à :
              </p>
              <ul className="text-amber-800 text-sm space-y-1 mb-3">
                <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">→</span><span><strong>L&apos;acceptation préalable du déchet</strong> — tout apport doit faire l&apos;objet d&apos;une demande d&apos;acceptation avant livraison</span></li>
                <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">→</span><span><strong>La signature du protocole de chargement/déchargement</strong> — obligatoire pour tout véhicule entrant sur le site</span></li>
                <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">→</span><span><strong>Le respect des règles de sécurité du site</strong> — EPI, limitation de vitesse, zones de dépôt définies</span></li>
              </ul>
              <p className="text-amber-700 text-sm font-medium">
                📞 Tout apport doit être préalablement convenu par téléphone au <a href="tel:0322930286" className="underline font-bold hover:text-amber-900">03 22 93 02 86</a> ou par email à <a href="mailto:recyclage@groupe-vilbert.fr" className="underline hover:text-amber-900">recyclage@groupe-vilbert.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS GRID */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Nos prestations</h2>
            <p className="text-gray-500 text-sm">Cliquez sur un service pour en savoir plus</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏗️", title: "Location de bennes", desc: "5 à 30m³, livraison 24-48h, location annuelle entrepôts", href: "/services/location-benne", badge: null },
              { icon: "🪓", title: "Broyage sur chantier", desc: "Broyage mobile déchets verts et bois sur site", href: "/services/broyage-chantier", badge: "Service mobile" },
              { icon: "🟢", title: "Valobat PMCB à 0€", desc: "Opérateur agréé, déchets PMCB à 0€ pour professionnels", href: "/services/valobat-pmcb", badge: "GRATUIT" },
              { icon: "🪟", title: "Démantèlement menuiseries", desc: "Fenêtres PVC, aluminium, bois — tri complet", href: "/services/dementelement-menuiseries", badge: ">92% recyclé" },
              { icon: "🌿", title: "Compostage", desc: "Plateforme agréée, compost NF U44-051", href: "/services/compostage", badge: null },
              { icon: "🌱", title: "Espèces invasives", desc: "Traitement renouée du Japon et espèces invasives", href: "/services/especes-invasives", badge: "Filière spécialisée" },
              { icon: "💰", title: "Vente matériaux recyclés", desc: "Granulats recyclés, GNT, compost, copeaux, sables", href: "/services/vente-materiaux", badge: null },
              { icon: "♻️", title: "Traitement & Valorisation", desc: "Concassage, criblage, panneaux solaires", href: "/services/traitement-valorisation", badge: "Énergie solaire" },
              { icon: "📦", title: "Destruction d'archives", desc: "Destruction sécurisée de documents et archives papier avec BSD", href: "/services/destruction-archives", badge: "Confidentiel & traçable" },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-3xl">{card.icon}</div>
                <div className="font-bold text-gray-900 text-sm leading-tight group-hover:text-[#1a5c28] transition-colors">{card.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{card.desc}</p>
                {card.badge && (
                  <span className={`inline-block self-start text-xs font-bold px-2 py-0.5 rounded-full ${card.badge === "GRATUIT" ? "bg-[#00A651] text-white" : "bg-[#f5b800] text-gray-900"}`}>
                    {card.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {services.map((s, idx) => (
            <div
              key={s.id}
              id={s.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-4">{s.icon}</div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="text-xs text-[#1a5c28] font-bold uppercase tracking-widest">{s.subtitle}</span>
                  {s.badge && (
                    <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-0.5 rounded">{s.badge}</span>
                  )}
                </div>
                <h2 className="text-3xl font-black text-gray-900 mt-1 mb-3">{s.title}</h2>
                <div className="w-12 h-1 bg-[#f5b800] mb-5" />
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1a5c28] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {s.photo ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: 320 }}>
                    <Image
                      src={s.photo}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="text-6xl mb-4 text-center">{s.icon}</div>
                    <div className="bg-[#1a5c28] text-white rounded-xl p-6 mt-4">
                      <p className="font-bold mb-2">Intéressé par ce service ?</p>
                      <p className="text-green-200 text-sm mb-4">Contactez-nous pour un devis gratuit sous 24h.</p>
                      <a
                        href="tel:0322930286"
                        className="block text-center bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
                      >
                        📞 03 22 93 02 86
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENTE MATÉRIAUX RECYCLÉS */}
      <section id="vente-materiaux" className="py-16 bg-[#1a5c28] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
              Économie circulaire
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Vente de matériaux recyclés
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-green-100 max-w-2xl mx-auto">
              Les déchets que nous traitons deviennent des matières premières secondaires.
              Nous les proposons à la vente — une solution économique et écologique pour vos travaux.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {materiaux.map((m) => (
              <div key={m.nom} className="bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors text-center">
                <div className="text-4xl mb-3">{m.icon}</div>
                <h3 className="font-black text-white text-base mb-1">{m.nom}</h3>
                <p className="text-green-200 text-xs mb-2">{m.usage}</p>
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-0.5 rounded">{m.norme}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto text-center">
            <p className="text-green-100 mb-4">
              Disponibilités et tarifs variables selon les stocks. Contactez-nous pour connaître
              les quantités disponibles et obtenir un devis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0322930286"
                className="bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
              >
                📞 Nous appeler
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-[#1a5c28] transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALOBAT — Opérateur agréé */}
      <section id="valobat" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <div className="inline-block bg-[#00A651] text-white text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                Éco-organisme
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Opérateur agréé <span className="text-[#00A651]">Valobat</span>
              </h2>
              <div className="w-16 h-1 bg-[#00A651] mb-6" />
              <p className="text-gray-600 mb-5 leading-relaxed">
                Vilbert Recyclage est référencé comme <strong>opérateur de l'éco-organisme Valobat</strong>,
                le système de responsabilité élargie du producteur (REP) pour les
                <strong> Produits et Matériaux de Construction du secteur du Bâtiment (PMCB)</strong>.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Concrètement : les fabricants et distributeurs de matériaux de construction versent
                des <strong>éco-contributions</strong> à Valobat, qui finance ensuite la collecte et le traitement
                des déchets PMCB. Résultat — sous conditions d'éligibilité — les professionnels
                détenteurs de ces déchets peuvent les déposer chez nous <strong className="text-[#00A651]">sans frais</strong>.
              </p>
              <div className="bg-[#00A651]/10 border border-[#00A651]/30 rounded-xl p-5 mb-6">
                <h3 className="font-bold text-[#00A651] mb-3 flex items-center gap-2">
                  <span>✅</span> Déchets PMCB éligibles à la gratuité
                </h3>
                <ul className="space-y-1.5 text-gray-700 text-sm">
                  {[
                    "Fenêtres, portes et volets (PVC, aluminium, bois)",
                    "Isolation thermique et acoustique (laines minérales, polystyrène, polyuréthane…)",
                    "Plaques de plâtre et enduits",
                    "Menuiseries intérieures (portes, cloisons)",
                    "Matériaux de second œuvre du bâtiment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00A651] font-bold flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>⚠️ Conditions importantes :</strong> la gratuité est réservée aux
                professionnels détenteurs de déchets PMCB dans le cadre de l'activité de construction.
                Une <strong>demande d'acceptation préalable</strong> est obligatoire avant tout apport
                (certification MASE). Appelez-nous pour valider l'éligibilité de vos déchets.
              </div>
            </div>

            {/* Logo + CTA */}
            <div className="flex flex-col items-center gap-6">
              <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 flex flex-col items-center gap-6 w-full">
                <Image
                  src="/valobat-logo.svg"
                  alt="Valobat — éco-organisme PMCB — Vilbert Recyclage opérateur agréé"
                  width={220}
                  height={88}
                  className="w-52 h-auto"
                />
                <div className="text-center">
                  <p className="font-black text-gray-900 text-lg mb-1">Déchets PMCB à 0 €*</p>
                  <p className="text-gray-500 text-sm">*sous conditions d'éligibilité</p>
                </div>
                <div className="w-full space-y-3">
                  <a
                    href="tel:0322930286"
                    className="block text-center bg-[#00A651] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#008a44] transition-colors"
                  >
                    📞 Valider l'éligibilité de vos déchets
                  </a>
                  <Link
                    href="/contact"
                    className="block text-center border-2 border-[#00A651] text-[#00A651] font-bold px-6 py-3 rounded-xl hover:bg-[#00A651]/10 transition-colors"
                  >
                    Demander une acceptation préalable
                  </Link>
                </div>
              </div>
              <a
                href="https://www.valobat.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-[#00A651] transition-colors"
              >
                En savoir plus sur Valobat.fr →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRAÇABILITÉ & RSE */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1a5c28] mb-3">Traçabilité & Engagements</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🟢",
                titre: "Opérateur Valobat",
                desc: "Vilbert Recyclage est opérateur agréé de l'éco-organisme Valobat. Les déchets PMCB éligibles sont acceptés à 0 € pour les détenteurs professionnels.",
              },
              {
                icon: "📋",
                titre: "Trackdéchets",
                desc: "Notre centre est référencé sur la plateforme nationale Trackdéchets. Chaque flux de déchets est traçable en temps réel.",
              },
              {
                icon: "📄",
                titre: "BSD & Bons de pesée",
                desc: "Nous établissons des Bordereaux de Suivi des Déchets (BSD) et remettons un bon de pesée à chaque passage. Vos dossiers sont complets.",
              },
              {
                icon: "🏅",
                titre: "Certification MASE",
                desc: "Vilbert Recyclage est certifié MASE — référentiel exigeant en matière de sécurité, santé et environnement au travail.",
              },
              {
                icon: "☀️",
                titre: "Panneaux solaires",
                desc: "Notre bâtiment est équipé de panneaux photovoltaïques pour alimenter nos machines. Moins de CO₂, plus d'indépendance énergétique.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉCHETS ACCEPTÉS */}
      <section id="dechets" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Déchets acceptés sur notre site
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Notre déchetterie professionnelle de Beauval (80630) accepte la grande majorité
              des déchets issus de chantiers BTP. <strong>Tout apport doit être préalablement accepté.</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {dechets.map((cat) => (
              <div
                key={cat.categorie}
                className="rounded-xl p-6 border-2"
                style={{ backgroundColor: cat.couleur, borderColor: cat.borderColor }}
              >
                <h3 className="font-bold text-lg mb-4" style={{ color: cat.borderColor }}>{cat.categorie}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span style={{ color: cat.borderColor }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-700 mb-3">⚠️ Déchets non acceptés</h3>
            <p className="text-red-600 text-sm mb-3">Certains déchets nécessitent des filières spécialisées :</p>
            <ul className="text-red-600 text-sm space-y-1">
              <li>❌ Matériaux contenant de l&apos;amiante</li>
              <li>❌ Déchets dangereux (solvants, peintures, hydrocarbures)</li>
              <li>❌ Déchets ménagers courants</li>
              <li>❌ Pneus et batteries</li>
            </ul>
            <p className="text-red-600 text-sm mt-3 font-medium">
              Contactez-nous pour être orienté vers la filière adaptée.
            </p>
          </div>
        </div>
      </section>

      {/* DÉCHETTERIE INFO */}
      <section className="py-16 bg-[#1a5c28] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-3">Déchetterie Pro de Beauval</h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-6" />
              <p className="text-green-100 mb-6">
                Notre site de Beauval (Somme) est ouvert aux professionnels et particuliers du lundi au vendredi.
                <strong className="text-white"> Tout apport doit être préalablement convenu</strong> — appelez-nous avant de vous déplacer.
              </p>
              <address className="not-italic space-y-3 text-green-100">
                <p className="flex items-center gap-2"><span>📍</span><span>Route nationale, 80630 Beauval</span></p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:0322930286" className="hover:text-white font-bold">03 22 93 02 86</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white">recyclage@groupe-vilbert.fr</a>
                </p>
              </address>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-black text-xl mb-6 text-[#f5b800]">Horaires d&apos;ouverture</h3>
              <div className="space-y-3">
                {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"].map((jour) => (
                  <div key={jour} className="flex justify-between text-green-100">
                    <span className="font-medium">{jour}</span>
                    <span>8h00 – 12h00 / 13h00 – 16h30</span>
                  </div>
                ))}
                <div className="flex justify-between text-green-300 mt-4 pt-4 border-t border-green-700">
                  <span>Samedi – Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 block text-center bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
