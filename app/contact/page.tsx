import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit | Vilbert Recyclage — 03 22 93 02 86",
  description:
    "Demandez votre devis gratuit pour la location de benne ou collecte déchets BTP dans la Somme. Réponse sous 24h. Beauval (80) — appelez le 03 22 93 02 86.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/contact",
  },
  openGraph: {
    title: "Contact & Devis Gratuit | Vilbert Recyclage — 03 22 93 02 86",
    description:
      "Demandez votre devis gratuit pour la location de benne ou collecte déchets BTP dans la Somme. Réponse sous 24h. Beauval (80) — appelez le 03 22 93 02 86.",
    url: "https://www.vilbert-recyclage.fr/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const horaires = [
  { jour: "Lundi", heures: "8h00 – 12h00 / 13h00 – 16h30", open: true },
  { jour: "Mardi", heures: "8h00 – 12h00 / 13h00 – 16h30", open: true },
  { jour: "Mercredi", heures: "8h00 – 12h00 / 13h00 – 16h30", open: true },
  { jour: "Jeudi", heures: "8h00 – 12h00 / 13h00 – 16h30", open: true },
  { jour: "Vendredi", heures: "8h00 – 12h00 / 13h00 – 16h30", open: true },
  { jour: "Samedi", heures: "Fermé", open: false },
  { jour: "Dimanche", heures: "Fermé", open: false },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Contactez-nous pour votre <span className="text-[#f5b800]">devis gratuit</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Notre équipe répond rapidement à toutes vos demandes de location de benne
            et collecte de déchets BTP.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* COORDONNÉES PRINCIPALES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">

          {/* Téléphone & Email — très visibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
              href="tel:0322930286"
              className="group bg-[#1a5c28] text-white rounded-2xl p-10 flex flex-col items-center text-center hover:bg-[#2a7a38] transition-colors shadow-lg"
            >
              <span className="text-6xl mb-4">📞</span>
              <p className="text-green-200 text-sm uppercase tracking-widest font-bold mb-2">Téléphone</p>
              <p className="text-4xl font-black tracking-wide group-hover:text-[#f5b800] transition-colors">
                03 22 93 02 86
              </p>
              <p className="text-green-200 text-sm mt-3">Lun – Ven · 8h–12h / 13h–16h30</p>
            </a>

            <a
              href="mailto:recyclage@groupe-vilbert.fr"
              className="group bg-[#f5b800] text-gray-900 rounded-2xl p-10 flex flex-col items-center text-center hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              <span className="text-6xl mb-4">✉️</span>
              <p className="text-gray-600 text-sm uppercase tracking-widest font-bold mb-2">Email</p>
              <p className="text-2xl font-black break-all group-hover:underline">
                recyclage@groupe-vilbert.fr
              </p>
              <p className="text-gray-600 text-sm mt-3">Réponse sous 24h ouvrables</p>
            </a>
          </div>

          {/* Infos complémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Adresse */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <span className="text-4xl">📍</span>
              <h3 className="font-black text-gray-900 mt-3 mb-1">Adresse</h3>
              <p className="text-gray-600 text-sm">Route nationale</p>
              <p className="text-gray-600 text-sm">80630 Beauval</p>
              <a
                href="https://maps.google.com/?q=Beauval+80630+Route+nationale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#1a5c28] text-sm font-bold hover:underline"
              >
                Voir sur Google Maps →
              </a>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <span className="text-4xl">🕐</span>
                <h3 className="font-black text-gray-900 mt-3 mb-4">Horaires</h3>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {horaires.map((h) => (
                    <tr key={h.jour}>
                      <td className="py-1.5 font-semibold text-gray-700 text-xs">{h.jour}</td>
                      <td className={`py-1.5 text-right text-xs ${h.open ? "text-gray-600" : "text-red-400"}`}>
                        {h.heures}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Zone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <span className="text-4xl">🗺️</span>
              <h3 className="font-black text-gray-900 mt-3 mb-3">Zone d&apos;intervention</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Somme (80)", "Pas-de-Calais (62)", "Oise (60)", "Aisne (02)", "Nord (59)", "Seine-Maritime (76)"].map(d => (
                  <span key={d} className="bg-[#1a5c28] text-white text-xs px-2 py-1 rounded-full">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.5!2d2.1668!3d50.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd573b2c3a7f7d%3A0x0!2sBeauval%2C%2080630!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vilbert Recyclage — Beauval 80630"
        />
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Besoin d&apos;une benne rapidement ?
          </h2>
          <p className="text-gray-700 mb-6">Appelez-nous directement — réponse immédiate.</p>
          <a
            href="tel:0322930286"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg"
          >
            📞 03 22 93 02 86
          </a>
        </div>
      </section>
    </>
  );
}
