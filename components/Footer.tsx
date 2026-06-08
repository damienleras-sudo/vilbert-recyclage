import Link from "next/link";

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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#f5b800] text-3xl">♻</span>
            <div>
              <div className="text-white font-black text-xl">VILBERT</div>
              <div className="text-gray-400 text-xs tracking-widest">RECYCLAGE</div>
            </div>
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
            <li><Link href="/services#bennes" className="hover:text-white transition-colors">Location de bennes</Link></li>
            <li><Link href="/services#collecte" className="hover:text-white transition-colors">Collecte de déchets</Link></li>
            <li><Link href="/services#transport" className="hover:text-white transition-colors">Transport</Link></li>
            <li><Link href="/services#traitement" className="hover:text-white transition-colors">Traitement & valorisation</Link></li>
            <li><Link href="/services#dechets" className="hover:text-white transition-colors">Déchets acceptés</Link></li>
          </ul>
        </div>

        {/* Liens */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Informations
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & conseils</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
            <li>
              <a
                href="https://www.groupe-vilbert.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Groupe Vilbert
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
