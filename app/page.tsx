import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VolumeCalculator from "@/components/VolumeCalculator";
import TrustBanner from "@/components/TrustBanner";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Location de Bennes & Déchets BTP | Vilbert Recyclage Beauval (80)",
  description:
    "Louez une benne dans la Somme dès aujourd'hui. Vilbert Recyclage à Beauval gère vos déchets BTP, gravats et déchets verts. Devis gratuit — 03 22 93 02 86.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr",
  },
  openGraph: {
    title: "Location de Bennes & Déchets BTP | Vilbert Recyclage Beauval (80)",
    description:
      "Louez une benne dans la Somme dès aujourd'hui. Vilbert Recyclage à Beauval gère vos déchets BTP, gravats et déchets verts. Devis gratuit — 03 22 93 02 86.",
    url: "https://www.vilbert-recyclage.fr",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: "🏗️",
    title: "Location de bennes",
    desc: "Mise à disposition rapide de bennes adaptées à vos volumes. Location à l'année possible pour entrepôts et pros.",
    href: "/services#bennes",
  },
  {
    icon: "🪓",
    title: "Broyage sur chantier",
    desc: "Intervention mobile avec notre broyeur directement sur vos chantiers. Déchets verts et bois de démolition.",
    href: "/services#broyage",
  },
  {
    icon: "🪟",
    title: "Démantèlement menuiseries",
    desc: "Centre spécialisé pour les menuiseries en fin de vie. Taux de recyclage supérieur à 92%.",
    href: "/services#dementelement",
    badge: "> 92% recyclé",
  },
  {
    icon: "🌿",
    title: "Compostage & Espèces invasives",
    desc: "Plateforme de compostage des déchets verts + espace dédié au traitement des plantes invasives (renouée du Japon…).",
    href: "/services#compostage",
  },
  {
    icon: "♻️",
    title: "Traitement & Valorisation",
    desc: "Concassage, tri, valorisation maximale. Énergie solaire sur site pour réduire notre empreinte carbone.",
    href: "/services#traitement",
  },
  {
    icon: "🚛",
    title: "Collecte & Enlèvement",
    desc: "Nous venons chercher vos déchets directement sur votre chantier. BSD et bon de pesée fournis.",
    href: "/services#collecte",
  },
];

const dechetsTypes = [
  { icon: "🪨", label: "Terres & Gravats" },
  { icon: "🏚️", label: "Plâtres" },
  { icon: "🧱", label: "Béton & Briques" },
  { icon: "🪵", label: "Bois & Menuiseries" },
  { icon: "🔵", label: "Plastiques & PVC" },
  { icon: "🔩", label: "Métaux & Ferrailles" },
  { icon: "🏠", label: "DIB Chantier" },
  { icon: "🌿", label: "Déchets verts" },
];

const avantages = [
  {
    titre: "Réactivité",
    desc: "Mise à disposition sous 24-48h. Enlèvement sur appel.",
  },
  {
    titre: "Conformité légale",
    desc: "BSD, attestations de traitement. Tout est fourni automatiquement.",
  },
  {
    titre: "Engagement RSE",
    desc: "Valorisation maximale. Réduction de l'empreinte carbone de vos chantiers.",
  },
  {
    titre: "Tarifs clairs",
    desc: "Devis gratuit sous 24h. Aucune surprise sur la facture.",
  },
];

const eeatArguments = [
  {
    icon: "🏆",
    titre: "30+ ans d'expérience",
    desc: "Depuis 1992, Vilbert accompagne particuliers, artisans et professionnels du BTP dans la gestion de leurs déchets de chantier en Hauts-de-France.",
  },
  {
    icon: "🏅",
    titre: "Certification MASE",
    desc: "Vilbert Recyclage est certifié MASE (Manuel d'Amélioration Sécurité des Entreprises). Chaque intervention respecte des exigences strictes en matière de sécurité.",
  },
  {
    icon: "♻️",
    titre: "Opérateur Valobat agréé",
    desc: "En tant qu'opérateur agréé par l'éco-organisme Valobat, nous permettons aux professionnels du bâtiment de déposer leurs PMCB gratuitement sous conditions.",
  },
  {
    icon: "📋",
    titre: "Suivi Trackdéchets",
    desc: "Notre centre est inscrit sur la plateforme nationale Trackdéchets. Chaque déchet fait l'objet d'un BSD dématérialisé et d'un bon de pesée pour votre conformité légale.",
  },
];

const homeFaqItems = [
  {
    q: "Comment commander une benne ?",
    a: "Appelez-nous au 03 22 93 02 86 ou remplissez le formulaire de contact. Nous confirmons votre commande sous 24h et livrons la benne sous 24 à 48h ouvrées selon votre localisation en Hauts-de-France.",
  },
  {
    q: "Quels déchets acceptez-vous ?",
    a: "Nous acceptons les déchets inertes (gravats, béton, briques, tuiles), le bois et menuiseries, les plâtres, le PVC et plastiques, les métaux et ferrailles, ainsi que les déchets verts. Chaque flux est trié et valorisé séparément.",
  },
  {
    q: "Intervenez-vous à Amiens ?",
    a: "Oui, nous intervenons à Amiens et dans un rayon de 25 km autour de notre site de Beauval (80630). La livraison et l'enlèvement de benne sont assurés sous 24 à 48h ouvrées.",
  },
  {
    q: "C'est quoi le protocole MASE ?",
    a: "La certification MASE impose un protocole de sécurité strict sur notre site. Tout apport de déchets nécessite une demande d'acceptation préalable et la signature du protocole de chargement/déchargement avant toute livraison sur notre plateforme.",
  },
  {
    q: "Peut-on déposer des PMCB gratuitement ?",
    a: "Oui, en tant qu'opérateur agréé Valobat, nous acceptons gratuitement les Produits et Matériaux de Construction du Bâtiment (PMCB) pour les professionnels du bâtiment, sous conditions de volume et de tri. Contactez-nous pour vérifier votre éligibilité.",
  },
  {
    q: "Vendez-vous des matériaux recyclés ?",
    a: "Oui, nous vendons des matériaux issus de notre activité de recyclage : concassé béton à partir de 12,50 €/T, GNT recyclée, compost, copeaux de bois et sables recyclés. Idéal pour remblais, voiries et paillage.",
  },
];

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const zonesIntervention = [
  { dept: "Somme (80)", villes: ["Amiens", "Abbeville", "Albert", "Doullens", "Péronne"], href: "/location-benne-amiens" },
  { dept: "Pas-de-Calais (62)", villes: ["Arras", "Lens", "Saint-Pol-sur-Ternoise"], href: "/location-benne-arras" },
  { dept: "Nord (59)", villes: ["Cambrai", "Valenciennes"], href: "/location-benne-cambrai" },
  { dept: "Aisne (02)", villes: ["Saint-Quentin", "Laon"], href: "/location-benne-saint-quentin" },
  { dept: "Oise (60)", villes: ["Compiègne", "Beauvais"], href: "/location-benne-compiegne" },
  { dept: "Haute-Marne (52)", villes: ["Zone Est"], href: "/location-benne-amiens" },
];

const clientTypes = [
  { icon: "🏘️", title: "Particuliers", desc: "Rénovation, nettoyage, débarras — nous nous occupons de tout.", cta: "Je suis particulier" },
  { icon: "🔨", title: "Artisans", desc: "Conformité légale, BSD, tarifs pros. Votre prestataire déchets de confiance.", cta: "Je suis artisan" },
  { icon: "🏗️", title: "Professionnels BTP", desc: "Contrats annuels, enlèvements réguliers, suivi complet. On s'adapte à vos volumes.", cta: "Je suis pro BTP" },
];

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1a5c28] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6 tracking-widest">
                📍 Beauval (Somme) — Hauts-de-France
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Location de bennes &<br />
                <span className="text-[#f5b800]">collecte déchets</span><br />
                BTP
              </h1>
              <p className="text-lg text-green-100 mb-8 max-w-xl">
                Vilbert Recyclage assure la <strong>mise à disposition de bennes</strong>,
                la collecte, le transport et le traitement de vos déchets de chantier.
                Particuliers, artisans et professionnels — devis gratuit sous 24h.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0322930286"
                  className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg"
                >
                  📞 03 22 93 02 86
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded text-lg hover:bg-white hover:text-[#1a5c28] transition-colors"
                >
                  Devis gratuit →
                </Link>
              </div>
              <p className="text-green-300 text-sm mt-4">
                ⏱️ Réponse sous 24h · 🚛 Livraison 24-48h · 📋 BSD fournis
              </p>
            </div>
            {/* Photo hero — vue aérienne du site */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
              <Image
                src="/vue-aerienne.jpg"
                alt="Vue aérienne du site Vilbert Recyclage à Beauval — plateforme de tri et recyclage déchets BTP"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              {/* Gradient overlay bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Stats en overlay bas */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20">
                {[
                  { val: "+30 ans", label: "d'expérience" },
                  { val: "+2 000", label: "clients" },
                  { val: "70", label: "collaborateurs" },
                  { val: "6", label: "départements" },
                ].map((s) => (
                  <div key={s.label} className="py-4 text-center">
                    <div className="text-2xl font-black text-[#f5b800]">{s.val}</div>
                    <div className="text-white/80 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* CLIENTS TYPES */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6">Nous servons</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTypes.map((c) => (
              <Link
                key={c.title}
                href="/contact"
                className="group border border-gray-700 rounded-xl p-6 hover:border-[#f5b800] transition-colors"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-black text-lg text-white mb-2 group-hover:text-[#f5b800] transition-colors">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
                <span className="text-[#f5b800] text-sm font-bold">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <TrustBanner />

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Nos prestations
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              De la mise à disposition de la benne jusqu'au traitement final — une solution complète clé en main.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold text-[#1a5c28] group-hover:text-[#2a7a38]">{s.title}</h3>
                  {"badge" in s && s.badge && (
                    <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-0.5 rounded">{s.badge}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-[#f5b800] font-bold text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-[#1a5c28] text-white font-bold px-8 py-3 rounded hover:bg-[#2a7a38] transition-colors"
            >
              Voir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* GALERIE — Notre site en images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Notre site à Beauval
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Une plateforme moderne équipée pour la réception, le tri et la valorisation
              de tous vos déchets de chantier.
            </p>
          </div>

          {/* Grille photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Grande photo — concassage */}
            <div className="relative rounded-xl overflow-hidden shadow-md md:col-span-2 lg:col-span-2" style={{ height: 340 }}>
              <Image
                src="/concassage.jpg"
                alt="Machine de concassage — production de granulats recyclés Vilbert Recyclage"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Concassage & granulats</span>
                <p className="text-sm mt-1 text-white/90">Production de granulats recyclés sur site</p>
              </div>
            </div>

            {/* Entrée du site */}
            <div className="relative rounded-xl overflow-hidden shadow-md" style={{ height: 340 }}>
              <Image
                src="/entree-dechetterie.jpg"
                alt="Entrée de la déchetterie professionnelle Vilbert Recyclage — Beauval (80)"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Accueil</span>
                <p className="text-sm mt-1 text-white/90">Déchetterie pro — Beauval (80)</p>
              </div>
            </div>

            {/* Plateforme inerte */}
            <div className="relative rounded-xl overflow-hidden shadow-md" style={{ height: 260 }}>
              <Image
                src="/plateforme-inerte.jpg"
                alt="Plateforme de stockage matériaux inertes — Vilbert Recyclage"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Plateforme inertes</span>
              </div>
            </div>

            {/* Massification plâtre */}
            <div className="relative rounded-xl overflow-hidden shadow-md" style={{ height: 260 }}>
              <Image
                src="/massification-platre.jpg"
                alt="Massification et tri du plâtre — recyclage déchets chantier Vilbert"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Tri & massification</span>
              </div>
            </div>

            {/* Bâtiment / vue site */}
            <div className="relative rounded-xl overflow-hidden shadow-md" style={{ height: 260 }}>
              <Image
                src="/batiment-recyclage.jpg"
                alt="Bâtiment du centre de recyclage Vilbert — Beauval Somme"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Notre centre</span>
              </div>
            </div>

          </div>

          <div className="text-center mt-8">
            <Link
              href="/a-propos"
              className="inline-block bg-[#1a5c28] text-white font-bold px-8 py-3 rounded hover:bg-[#2a7a38] transition-colors"
            >
              En savoir plus sur Vilbert Recyclage →
            </Link>
          </div>
        </div>
      </section>

      {/* CALCULATEUR */}
      <VolumeCalculator />

      {/* VENTE MATÉRIAUX RECYCLÉS */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-[#f5b800] text-xs font-bold uppercase tracking-widest">Économie circulaire</span>
              <h2 className="text-3xl font-black text-white mt-1 mb-2">Vente de matériaux recyclés</h2>
              <div className="w-16 h-1 bg-[#f5b800]" />
            </div>
            <p className="text-gray-400 text-sm max-w-sm">Vos chantiers peuvent se fournir directement chez nous — moins cher, moins de CO₂.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { icon: "🪨", nom: "Concassé béton", usage: "Remblais, sous-fondations" },
              { icon: "🏗️", nom: "GNT recyclée", usage: "Voiries, allées" },
              { icon: "🌱", nom: "Compost", usage: "Agriculture, paysagisme" },
              { icon: "🪵", nom: "Copeaux de bois", usage: "Paillage, biomasse" },
              { icon: "⛱️", nom: "Sables recyclés", usage: "Remblais, nivellement" },
            ].map((m) => (
              <div key={m.nom} className="bg-white/8 border border-white/10 rounded-xl p-4 text-center hover:border-[#f5b800]/50 transition-colors">
                <div className="text-3xl mb-2">{m.icon}</div>
                <div className="font-bold text-white text-sm mb-1">{m.nom}</div>
                <div className="text-gray-400 text-xs">{m.usage}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services#vente-materiaux" className="inline-block bg-[#f5b800] text-gray-900 font-bold px-8 py-3 rounded hover:bg-[#ffd44d] transition-colors">
              Voir tous les matériaux disponibles →
            </Link>
          </div>
        </div>
      </section>

      {/* BANNIÈRE SÉCURITÉ MASE */}
      <section className="py-10 bg-amber-50 border-y-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-5xl flex-shrink-0">🏅</div>
            <div className="flex-1">
              <h2 className="text-xl font-black text-amber-900 mb-2">Certifié MASE — Accès site conditionné à l&apos;acceptation préalable</h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                Vilbert Recyclage applique les exigences du référentiel <strong>MASE</strong>. Tout apport de déchets sur notre site nécessite une
                <strong> demande d&apos;acceptation préalable</strong>, la signature du <strong>protocole de chargement/déchargement</strong>
                et le respect des règles de sécurité. Notre centre est inscrit sur <strong>Trackdéchets</strong> — chaque déchet fait l&apos;objet
                d&apos;un <strong>BSD</strong> et d&apos;un <strong>bon de pesée</strong>.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="tel:0322930286" className="block bg-amber-500 text-white font-bold px-6 py-3 rounded hover:bg-amber-600 transition-colors text-center whitespace-nowrap">
                📞 Acceptation préalable
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DÉCHETS + CONTACT CARD */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#1a5c28] mb-3">Déchets BTP acceptés</h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-6" />
              <p className="text-gray-600 mb-6">
                Notre déchetterie professionnelle de Beauval (80630) accepte tous les déchets issus
                de vos chantiers de construction, rénovation et démolition.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {dechetsTypes.map((d) => (
                  <div key={d.label} className="flex items-center gap-2 text-gray-700">
                    <span className="text-xl">{d.icon}</span>
                    <span className="text-sm font-medium">{d.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/services#dechets" className="inline-block mt-6 text-[#1a5c28] font-bold underline hover:text-[#2a7a38]">
                Liste complète →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1a5c28] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-black mb-2">Déchetterie Pro de Beauval</h3>
                <div className="w-12 h-1 bg-[#f5b800] mb-5" />
                <address className="not-italic space-y-2 text-green-100 text-sm">
                  <p>📍 Route nationale, 80630 Beauval</p>
                  <p>📞 <a href="tel:0322930286" className="hover:text-white font-bold">03 22 93 02 86</a></p>
                  <p>✉️ <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white">recyclage@groupe-vilbert.fr</a></p>
                  <div className="border-t border-green-700 pt-3 mt-3">
                    <p className="font-bold text-white mb-1">Lun – Ven</p>
                    <p>8h00 – 12h00 / 13h00 – 16h30</p>
                  </div>
                </address>
                <Link href="/contact" className="mt-5 block text-center bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors">
                  Demander un devis gratuit
                </Link>
              </div>
              {/* Zone */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Zone d'intervention</p>
                <div className="flex flex-wrap gap-2">
                  {["Amiens", "Abbeville", "Albert", "Doullens", "Péronne", "Arras", "Beauvais"].map(v => (
                    <span key={v} className="bg-[#1a5c28] text-white text-xs px-3 py-1 rounded-full">{v}</span>
                  ))}
                  <span className="text-xs text-gray-400 self-center">+ toute la région</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Pourquoi choisir Vilbert Recyclage ?
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a) => (
              <div key={a.titre} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#1a5c28] flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-[#f5b800] rounded-full" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{a.titre}</h3>
                <p className="text-gray-600 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* BLOG PREVIEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#1a5c28] mb-2">Conseils & Actualités</h2>
              <div className="w-16 h-1 bg-[#f5b800]" />
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 text-[#1a5c28] font-bold hover:underline">
              Voir tous les articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="bg-[#1a5c28] h-2" />
                <div className="p-6">
                  <span className="text-xs text-[#1a5c28] font-bold uppercase tracking-wide">{post.category}</span>
                  <h3 className="text-gray-900 font-bold mt-2 mb-3 group-hover:text-[#1a5c28] transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E-E-A-T — Pourquoi nous choisir */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Pourquoi nous choisir ?
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Notre expertise, nos certifications et nos outils de traçabilité garantissent une gestion conforme, sécurisée et valorisante de vos déchets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eeatArguments.map((arg) => (
              <div key={arg.titre} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="text-4xl mb-4">{arg.icon}</div>
                <h3 className="font-black text-lg text-[#1a5c28] mb-2">{arg.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{arg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ HOMEPAGE avec schema FAQPage */}
      <section className="py-16 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
        />
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Questions fréquentes
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600">
              Tout ce que vous devez savoir avant de commander votre benne ou d&apos;apporter vos déchets.
            </p>
          </div>
          <FaqAccordion items={homeFaqItems} accentColor="#1a5c28" />
          <div className="text-center mt-8">
            <a
              href="tel:0322930286"
              className="inline-block bg-[#1a5c28] text-white font-bold px-8 py-3 rounded hover:bg-[#2a7a38] transition-colors"
            >
              📞 Une autre question ? 03 22 93 02 86
            </a>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
              Zone d&apos;intervention
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Depuis notre site de Beauval (80), nous intervenons dans <strong>6 départements</strong> des Hauts-de-France
              pour la livraison et l&apos;enlèvement de bennes sous 24-48h.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {zonesIntervention.map((zone) => (
              <Link
                key={zone.dept}
                href={zone.href}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1a5c28] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📍</span>
                  <h3 className="font-black text-[#1a5c28] group-hover:underline">{zone.dept}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {zone.villes.map((v) => (
                    <span key={v} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{v}</span>
                  ))}
                </div>
                <span className="inline-block mt-4 text-[#f5b800] font-bold text-sm group-hover:underline">
                  Bennes dans ce secteur →
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Vous êtes hors zone ? Appelez-nous au{" "}
            <a href="tel:0322930286" className="text-[#1a5c28] font-bold hover:underline">03 22 93 02 86</a>{" "}
            — nous étudions votre demande.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Prêt à gérer vos déchets de chantier ?
          </h2>
          <p className="text-gray-700 mb-8">
            Devis gratuit sous 24h. Intervention en Hauts-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-bold px-8 py-4 rounded text-lg hover:bg-gray-800 transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded text-lg hover:bg-gray-100 transition-colors border border-gray-200">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
