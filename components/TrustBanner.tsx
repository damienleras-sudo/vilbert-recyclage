import Image from "next/image";
import Link from "next/link";

const badges = [
  { icon: "🏅", label: "Certification MASE", sub: "Sécurité & environnement" },
  { icon: "♻️", label: "Opérateur VALOBAT", sub: "Déchets PMCB à 0 €" },
  { icon: "📋", label: "Trackdéchets / BSD", sub: "Traçabilité totale" },
  { icon: "☀️", label: "Énergie solaire", sub: "Machines alimentées" },
  { icon: "👨‍👩‍👧‍👦", label: "Entreprise familiale", sub: "+30 ans d'expérience" },
  { icon: "🚛", label: "Transporteur agréé", sub: "6 départements" },
];

export default function TrustBanner() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8 font-bold">
          Nos garanties &amp; certifications
        </p>

        {/* Badges garanties */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-2">
              <span className="text-3xl">{b.icon}</span>
              <p className="font-bold text-gray-900 text-xs leading-tight">{b.label}</p>
              <p className="text-gray-400 text-xs">{b.sub}</p>
            </div>
          ))}
        </div>

        {/* Bandeau VALOBAT mis en avant */}
        <Link href="/blog/valobat-operateur-dechets-pmcb-gratuits-somme" className="block group">
          <div className="rounded-2xl border-2 border-[#00A651] bg-gradient-to-r from-[#00A651]/5 to-[#00A651]/10 p-5 flex flex-col md:flex-row items-center gap-5 hover:from-[#00A651]/10 hover:to-[#00A651]/15 transition-colors">
            {/* Logo Valobat */}
            <div className="flex-shrink-0">
              <Image
                src="/valobat-logo.svg"
                alt="Valobat — éco-organisme PMCB"
                width={160}
                height={64}
                className="h-14 w-auto"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-black text-[#00A651] text-base mb-1">
                Opérateur agréé Valobat — Déchets PMCB acceptés à 0 €*
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vilbert Recyclage est opérateur de l&apos;éco-organisme <strong>Valobat</strong>.
                Sous conditions, les professionnels détenteurs de déchets PMCB (Produits et Matériaux de Construction du Bâtiment)
                peuvent les déposer <strong>gratuitement</strong> sur notre site — le coût est pris en charge par les éco-contributions des fabricants.
              </p>
              <p className="text-xs text-gray-400 mt-2">* Sous réserve d&apos;éligibilité et d&apos;acceptation préalable — En savoir plus →</p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block bg-[#00A651] text-white font-bold px-5 py-2 rounded-full text-sm group-hover:bg-[#008a44] transition-colors">
                En savoir plus →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
