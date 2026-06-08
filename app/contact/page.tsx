import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Devis Gratuit Benne & Collecte Déchets BTP",
  description:
    "Contactez Vilbert Recyclage pour louer une benne ou organiser l'enlèvement de vos déchets BTP. Devis gratuit sous 24h. Beauval (Somme) — 03 22 93 02 86.",
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
            Contact & Devis
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Demandez votre <span className="text-[#f5b800]">devis gratuit</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-4">
            Notre équipe vous répond sous 24h pour vous proposer la solution la plus adaptée
            à vos besoins.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-green-200">
            <span>✅ Devis gratuit et sans engagement</span>
            <span>✅ Réponse sous 24h</span>
            <span>✅ BSD et attestations fournis</span>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-black text-[#1a5c28] mb-2">Envoyer un message</h2>
              <div className="w-12 h-1 bg-[#f5b800] mb-6" />
              <ContactForm />
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              {/* Coordonnées */}
              <div className="bg-[#1a5c28] text-white rounded-2xl p-7">
                <h2 className="text-xl font-black mb-2">Nos coordonnées</h2>
                <div className="w-12 h-1 bg-[#f5b800] mb-5" />
                <address className="not-italic space-y-4 text-green-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold text-white">Déchetterie Pro de Beauval</p>
                      <p>Route nationale</p>
                      <p>80630 Beauval</p>
                      <a
                        href="https://maps.google.com/?q=Beauval+80630+Route+nationale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#f5b800] hover:underline mt-1 inline-block"
                      >
                        Ouvrir dans Google Maps →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-xs text-green-300 font-bold uppercase tracking-wide">Téléphone</p>
                      <a href="tel:0322930286" className="hover:text-white font-black text-xl">03 22 93 02 86</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-xs text-green-300 font-bold uppercase tracking-wide">Email</p>
                      <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white break-all">recyclage@groupe-vilbert.fr</a>
                    </div>
                  </div>
                </address>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h2 className="text-lg font-black text-[#1a5c28] mb-2">Horaires d&apos;ouverture</h2>
                <div className="w-10 h-1 bg-[#f5b800] mb-4" />
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {horaires.map((h) => (
                      <tr key={h.jour}>
                        <td className="py-2 font-semibold text-gray-700">{h.jour}</td>
                        <td className={`py-2 text-right text-xs ${h.open ? "text-gray-600" : "text-red-400"}`}>
                          {h.heures}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Zone */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Zone d&apos;intervention</h3>
                <div className="flex flex-wrap gap-2">
                  {["Somme (80)", "Pas-de-Calais (62)", "Oise (60)", "Aisne (02)", "Nord (59)", "Seine-Maritime (76)"].map(dept => (
                    <span key={dept} className="bg-[#1a5c28] text-white text-xs px-3 py-1 rounded-full font-medium">{dept}</span>
                  ))}
                </div>
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
          title="Déchetterie Vilbert Recyclage — Beauval 80630"
        />
      </section>
    </>
  );
}
