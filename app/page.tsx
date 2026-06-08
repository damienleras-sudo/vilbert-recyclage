import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VolumeCalculator from "@/components/VolumeCalculator";
import TrustBanner from "@/components/TrustBanner";

const services = [
  {
    icon: "🏗️",
    title: "Location de bennes",
    desc: "Mise à disposition rapide de bennes adaptées à vos volumes. Livraison et enlèvement inclus.",
    href: "/services#bennes",
  },
  {
    icon: "🚛",
    title: "Collecte & Enlèvement",
    desc: "Nous venons chercher vos déchets directement sur votre chantier. Service réactif 24-48h.",
    href: "/services#collecte",
  },
  {
    icon: "🔄",
    title: "Transport",
    desc: "Acheminement conforme et agréé vers nos centres de traitement en Hauts-de-France.",
    href: "/services#transport",
  },
  {
    icon: "♻️",
    title: "Traitement & Valorisation",
    desc: "Tri, recyclage et valorisation maximale de vos déchets BTP. Granulats recyclés produits sur site.",
    href: "/services#traitement",
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
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { val: "+30 ans", label: "d'expérience" },
                { val: "+2 000", label: "clients" },
                { val: "70", label: "collaborateurs" },
                { val: "6", label: "départements" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black text-[#f5b800]">{s.val}</div>
                  <div className="text-green-200 text-sm mt-1">{s.label}</div>
                </div>
              ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1a5c28] mb-2 group-hover:text-[#2a7a38]">
                  {s.title}
                </h3>
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

      {/* CALCULATEUR */}
      <VolumeCalculator />

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
