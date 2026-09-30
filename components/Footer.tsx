import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA Banner */}
      <div className="bg-[#1a5c28] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white">
              Besoin d&apos;une benne ou d&apos;un enlèvement de déchets ?
            </h2>
            <p className="text-green-200 mt-1">
              Devis gratuit sous 24h — Intervention en Hauts-de-France
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 93 02 86
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

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & desc */}
        <div>
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Vilbert Recyclage"
              width={200}
              height={72}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Filiale du Groupe Vilbert, spécialiste de la gestion des déchets BTP
            en Hauts-de-France depuis plus de 30 ans.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Nos Services
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/services" className="hover:text-white transition-colors font-semibold">Tous les services</Link></li>
            <li><Link href="/services/location-benne" className="hover:text-white transition-colors">🏗️ Location de bennes</Link></li>
            <li><Link href="/services/broyage-chantier" className="hover:text-white transition-colors">🪓 Broyage sur chantier</Link></li>
            <li><Link href="/services/valobat-pmcb" className="hover:text-white transition-colors">🟢 Valobat PMCB à 0€</Link></li>
            <li><Link href="/services/dementelement-menuiseries" className="hover:text-white transition-colors">🪟 Démantèlement menuiseries</Link></li>
            <li><Link href="/services/compostage" className="hover:text-white transition-colors">🌿 Compostage</Link></li>
            <li><Link href="/services/especes-invasives" className="hover:text-white transition-colors">🌱 Espèces invasives</Link></li>
            <li><Link href="/services/vente-materiaux" className="hover:text-white transition-colors">💰 Vente matériaux recyclés</Link></li>
            <li><Link href="/services/traitement-valorisation" className="hover:text-white transition-colors">♻️ Traitement & Valorisation</Link></li>
            <li><Link href="/tarifs" className="hover:text-white transition-colors">💶 Tarifs</Link></li>
            <li><Link href="/realisations" className="hover:text-white transition-colors">📷 Réalisations</Link></li>
          </ul>
          <h3 className="font-bold text-[#f5b800] mt-6 mb-3 uppercase text-sm tracking-wide">
            Certifications
          </h3>
          <ul className="space-y-1 text-gray-400 text-xs">
            <li className="flex items-center gap-1"><span>🏅</span> MASE</li>
            <li className="flex items-center gap-1"><span>🟢</span> Valobat (opérateur agréé)</li>
            <li className="flex items-center gap-1"><span>📋</span> Trackdéchets</li>
          </ul>
          <h3 className="font-bold text-[#f5b800] mt-6 mb-3 uppercase text-sm tracking-wide">
            Zones desservies
          </h3>
          <ul className="space-y-1 text-gray-400 text-xs">
            {[
              { label: "Amiens", slug: "amiens" },
              { label: "Arras", slug: "arras" },
              { label: "Abbeville", slug: "abbeville" },
              { label: "Lens", slug: "lens" },
              { label: "Cambrai", slug: "cambrai" },
              { label: "Saint-Quentin", slug: "saint-quentin" },
            ].map(v => (
              <li key={v.slug}>
                <Link href={`/location-benne-${v.slug}`} className="hover:text-white transition-colors">
                  Benne {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Liens */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Informations
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos de nous</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & conseils</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">❓ FAQ</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
            <li><Link href="/conditions-generales" className="hover:text-white transition-colors">CGV / CGU</Link></li>
            <li>
              <a
                href="https://www.groupe-vilbert.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-semibold text-[#f5b800]"
              >
                ↗ Groupe Vilbert
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Contact
          </h3>
          <address className="not-italic text-gray-400 text-sm space-y-2">
            <p>📍 Route nationale, 80630 Beauval</p>
            <p>
              📞{" "}
              <a href="tel:0322930286" className="hover:text-white transition-colors">
                03 22 93 02 86
              </a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white transition-colors">
                recyclage@groupe-vilbert.fr
              </a>
            </p>
            <p className="mt-3 border-t border-gray-700 pt-3">
              🕐 Lun – Ven<br />
              8h00 – 12h00 / 13h00 – 16h30
            </p>
            <p className="mt-3">
              <a
                href="https://share.google/UPFqTI8VQPwXuHbfy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ⭐ Avis Google
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://www.facebook.com/p/Groupe-Vilbert-100063776760913/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                📘 Facebook — Groupe Vilbert
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {currentYear} Vilbert Recyclage – Tous droits réservés</p>
          <p>
            Une entreprise du{" "}
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Groupe Vilbert
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
