import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Devis Gratuit Benne & Collecte Déchets BTP",
  description:
    "Contactez Vilbert Recyclage pour louer une benne ou organiser l'enlèvement de vos déchets BTP. Devis gratuit sous 24h. Beauval (Somme) — 03 22 93 02 86.",
};

const horaires = [
  { jour: "Lundi", heures: "8h00 – 12h00 / 13h00 – 16h30" },
  { jour: "Mardi", heures: "8h00 – 12h00 / 13h00 – 16h30" },
  { jour: "Mercredi", heures: "8h00 – 12h00 / 13h00 – 16h30" },
  { jour: "Jeudi", heures: "8h00 – 12h00 / 13h00 – 16h30" },
  { jour: "Vendredi", heures: "8h00 – 12h00 / 13h00 – 16h30" },
  { jour: "Samedi", heures: "Fermé" },
  { jour: "Dimanche", heures: "Fermé" },
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
            Demandez votre <span className="text-[#f5b800]">devis gratuit</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Notre équipe vous répond sous 24h pour vous proposer la solution adaptée
            à vos besoins en gestion de déchets BTP.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-black text-[#1a5c28] mb-2">
                Envoyer un message
              </h2>
              <div className="w-12 h-1 bg-[#f5b800] mb-6" />
              <form
                action={`mailto:recyclage@groupe-vilbert.fr`}
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]"
                    placeholder="jean.dupont@exemple.fr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Vous êtes *
                  </label>
                  <select
                    name="profil"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28] bg-white"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="particulier">Particulier</option>
                    <option value="artisan">Artisan / Auto-entrepreneur</option>
                    <option value="entreprise">Entreprise BTP</option>
                    <option value="collectivite">Collectivité</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Type de prestation souhaitée
                  </label>
                  <select
                    name="prestation"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28] bg-white"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="benne">Location de benne</option>
                    <option value="collecte">Collecte sur chantier</option>
                    <option value="apport">Apport en déchetterie</option>
                    <option value="autre">Autre / Non défini</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28] resize-none"
                    placeholder="Décrivez votre besoin : type de déchets, volume estimé, adresse du chantier, délai souhaité..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a5c28] text-white font-bold py-4 rounded-lg hover:bg-[#2a7a38] transition-colors text-base"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs text-gray-500 text-center">
                  * Champs obligatoires. Réponse sous 24h ouvrables.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Info card */}
              <div className="bg-[#1a5c28] text-white rounded-2xl p-8">
                <h2 className="text-xl font-black mb-2">Nos coordonnées</h2>
                <div className="w-12 h-1 bg-[#f5b800] mb-6" />
                <address className="not-italic space-y-4 text-green-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold text-white">Déchetterie Pro de Beauval</p>
                      <p>Route nationale</p>
                      <p>80630 Beauval</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-xs uppercase tracking-wide font-bold text-green-300">Téléphone</p>
                      <a href="tel:0322930286" className="hover:text-white font-bold text-lg">
                        03 22 93 02 86
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-xs uppercase tracking-wide font-bold text-green-300">Email</p>
                      <a href="mailto:recyclage@groupe-vilbert.fr" className="hover:text-white">
                        recyclage@groupe-vilbert.fr
                      </a>
                    </div>
                  </div>
                </address>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-black text-[#1a5c28] mb-2">
                  Horaires d&apos;ouverture
                </h2>
                <div className="w-12 h-1 bg-[#f5b800] mb-6" />
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {horaires.map((h) => (
                      <tr key={h.jour}>
                        <td className="py-2.5 font-semibold text-gray-700">{h.jour}</td>
                        <td
                          className={`py-2.5 text-right ${
                            h.heures === "Fermé" ? "text-red-400" : "text-gray-600"
                          }`}
                        >
                          {h.heures}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Zone */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Zone d&apos;intervention</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Nous intervenons dans toute la région <strong>Hauts-de-France</strong> :
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Somme (80)", "Pas-de-Calais (62)", "Oise (60)", "Aisne (02)", "Nord (59)", "Seine-Maritime (76)"].map(
                    (dept) => (
                      <span
                        key={dept}
                        className="bg-[#1a5c28] text-white text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {dept}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP placeholder */}
      <section className="bg-gray-200 h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-4xl mb-3">🗺️</p>
          <p className="font-semibold">Déchetterie Pro de Beauval</p>
          <p className="text-sm">Route nationale, 80630 Beauval</p>
          <a
            href="https://maps.google.com/?q=Beauval+80630+Route+nationale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[#1a5c28] font-bold text-sm hover:underline"
          >
            Ouvrir dans Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
