"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-black text-green-800 mb-2">Message envoyé !</h3>
        <p className="text-green-700">
          Votre demande a bien été transmise. Nous vous répondrons sous 24h ouvrables.
        </p>
        <p className="text-green-600 font-bold mt-4">📞 03 22 93 02 86</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-green-600 hover:underline">
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Prénom *</label>
          <input type="text" name="prenom" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]" placeholder="Jean" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nom *</label>
          <input type="text" name="nom" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]" placeholder="Dupont" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
        <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]" placeholder="jean.dupont@exemple.fr" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone</label>
        <input type="tel" name="telephone" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28]" placeholder="06 XX XX XX XX" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Vous êtes *</label>
        <select name="profil" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28] bg-white">
          <option value="">Sélectionnez...</option>
          <option value="particulier">Particulier</option>
          <option value="artisan">Artisan / Auto-entrepreneur</option>
          <option value="entreprise">Entreprise BTP</option>
          <option value="collectivite">Collectivité</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Prestation souhaitée</label>
        <select name="prestation" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28] bg-white">
          <option value="">Sélectionnez...</option>
          <option value="benne">Location de benne</option>
          <option value="collecte">Collecte sur chantier</option>
          <option value="apport">Apport en déchetterie</option>
          <option value="autre">Autre / Non défini</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Votre message *</label>
        <textarea name="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a5c28] focus:ring-1 focus:ring-[#1a5c28] resize-none" placeholder="Type de déchets, volume estimé, adresse du chantier, délai souhaité..." />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Une erreur est survenue. Contactez-nous au{" "}
          <a href="tel:0322930286" className="font-bold underline">03 22 93 02 86</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#1a5c28] text-white font-bold py-4 rounded-lg hover:bg-[#2a7a38] transition-colors text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
      </button>
      <p className="text-xs text-gray-500 text-center">* Champs obligatoires. Réponse sous 24h ouvrables.</p>
    </form>
  );
}
