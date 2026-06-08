import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Services | Location Bennes, Collecte & Traitement Déchets BTP",
  description:
    "Vilbert Recyclage : location de bennes, collecte, transport et traitement de déchets BTP à Beauval (Somme). Terres, gravats, plâtres, bois, plastiques. Devis gratuit.",
};

const services = [
  {
    id: "bennes",
    icon: "🏗️",
    title: "Location de bennes",
    subtitle: "Pour particuliers et professionnels",
    desc: `Vilbert Recyclage met à votre disposition des bennes adaptées à tous les volumes et tous les types de déchets. Que vous soyez un particulier en pleine rénovation ou un professionnel gérant plusieurs chantiers simultanément, nous avons la solution.`,
    details: [
      "Livraison sur votre chantier ou en déchetterie",
      "Plusieurs tailles disponibles selon vos besoins",
      "Enlèvement sur appel ou à date convenue",
      "Intervention rapide en Hauts-de-France",
    ],
  },
  {
    id: "collecte",
    icon: "🚛",
    title: "Collecte & Enlèvement",
    subtitle: "Venez déposer ou nous venons chercher",
    desc: `Deux options s'offrent à vous : apporter vos déchets directement sur notre site de Beauval ou nous demander de venir les chercher sur votre chantier. Dans les deux cas, la prise en charge est complète et documentée.`,
    details: [
      "Apport volontaire en déchetterie pro (Beauval 80630)",
      "Enlèvement sur chantier à votre demande",
      "Gestion de tous les types de déchets BTP",
      "Documentation de traçabilité fournie (BSD)",
    ],
  },
  {
    id: "transport",
    icon: "🔄",
    title: "Transport",
    subtitle: "Acheminement sécurisé et conforme",
    desc: `Le transport de déchets est une activité réglementée. Vilbert Recyclage dispose des agréments nécessaires pour transporter vos déchets en toute légalité depuis votre chantier jusqu'à nos installations de traitement.`,
    details: [
      "Transporteur agréé pour déchets non dangereux",
      "Flotte de véhicules adaptés",
      "Bordereaux de transport conformes à la réglementation",
      "Intervention en Somme, Pas-de-Calais, Oise, Aisne, Nord et Seine-Maritime",
    ],
  },
  {
    id: "traitement",
    icon: "♻️",
    title: "Traitement & Valorisation",
    subtitle: "Valorisation maximale de vos déchets",
    desc: `Sur notre plateforme de Beauval, vos déchets sont triés, traités et valorisés au maximum. Notre objectif : atteindre le taux de valorisation le plus élevé possible en limitant la mise en décharge.`,
    details: [
      "Concassage des inertes pour production de granulats recyclés",
      "Criblage et tri mécanique",
      "Vente de granulats recyclés pour travaux de remblai",
      "Filières dédiées : bois, métaux, plastiques, plâtre",
    ],
  },
];

const dechets = [
  {
    categorie: "Inertes",
    couleur: "#e8f5e9",
    borderColor: "#1a5c28",
    items: [
      "Terres",
      "Gravats",
      "Béton",
      "Briques",
      "Tuiles",
      "Céramique",
      "Ardoises",
      "Agrégats d'enrobés",
    ],
  },
  {
    categorie: "Plâtres",
    couleur: "#fff8e1",
    borderColor: "#f5b800",
    items: [
      "Plaques de plâtre (BA13, double plaque...)",
      "Enduits plâtre",
      "Carreaux de plâtre",
      "Staff et moulures",
    ],
  },
  {
    categorie: "Bois & Menuiseries",
    couleur: "#fbe9e7",
    borderColor: "#bf360c",
    items: [
      "Charpente et ossature bois",
      "Menuiseries bois",
      "Palettes",
      "Panneaux (OSB, contreplaqué)",
    ],
  },
  {
    categorie: "Plastiques",
    couleur: "#e3f2fd",
    borderColor: "#1565c0",
    items: [
      "Profilés PVC",
      "Tubes et raccords",
      "Fenêtres PVC",
      "Volets et stores",
    ],
  },
  {
    categorie: "Métaux",
    couleur: "#f3e5f5",
    borderColor: "#6a1b9a",
    items: [
      "Acier et fer",
      "Aluminium",
      "Cuivre",
      "Zinc et plomb",
    ],
  },
  {
    categorie: "DIB & Autres",
    couleur: "#eceff1",
    borderColor: "#546e7a",
    items: [
      "Déchets industriels banals de chantier",
      "Laines de verre et de roche",
      "Verre de menuiserie",
      "Emballages souillés (non dangereux)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Nos prestations
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Location, collecte et traitement<br />
            <span className="text-[#f5b800]">de déchets BTP</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Une offre complète pour les particuliers, artisans et professionnels du bâtiment
            en Hauts-de-France.
          </p>
        </div>
        <div className="absolute left-0 right-0 h-1 bg-[#f5b800] mt-8" style={{ position: "relative" }} />
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((s, idx) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-4">{s.icon}</div>
                <span className="text-xs text-[#1a5c28] font-bold uppercase tracking-widest">
                  {s.subtitle}
                </span>
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
              <div className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="text-6xl mb-4 text-center">{s.icon}</div>
                <div className="bg-[#1a5c28] text-white rounded-xl p-6 mt-4">
                  <p className="font-bold mb-2">Intéressé par ce service ?</p>
                  <p className="text-green-200 text-sm mb-4">
                    Contactez-nous pour un devis gratuit sous 24h.
                  </p>
                  <a
                    href="tel:0322930286"
                    className="block text-center bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
                  >
                    📞 03 22 93 02 86
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DÉCHETS ACCEPTÉS */}
      <section id="dechets" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Déchets acceptés sur notre site
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Notre déchetterie professionnelle de Beauval (80630) accepte la grande majorité
              des déchets issus de chantiers BTP.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dechets.map((cat) => (
              <div
                key={cat.categorie}
                className="rounded-xl p-6 border-2"
                style={{
                  backgroundColor: cat.couleur,
                  borderColor: cat.borderColor,
                }}
              >
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: cat.borderColor }}
                >
                  {cat.categorie}
                </h3>
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
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-700 mb-3">⚠️ Déchets non acceptés</h3>
            <p className="text-red-600 text-sm mb-3">
              Certains déchets ne peuvent pas être pris en charge sur notre site et nécessitent des filières spécialisées :
            </p>
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
              <h2 className="text-3xl font-black mb-3">
                Déchetterie Pro de Beauval
              </h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-6" />
              <p className="text-green-100 mb-6">
                Notre site de Beauval (Somme) est ouvert aux professionnels et particuliers
                du lundi au vendredi. Venez déposer vos déchets directement ou appelez-nous
                pour organiser un enlèvement sur chantier.
              </p>
              <address className="not-italic space-y-3 text-green-100">
                <p className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Route nationale, 80630 Beauval</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:0322930286" className="hover:text-white font-bold">
                    03 22 93 02 86
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white">
                    recyclage@groupe-vilbert.fr
                  </a>
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
