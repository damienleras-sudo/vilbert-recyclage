"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Quel est le délai pour obtenir une benne ?",
    a: "En général, nous livrons la benne dans les 24 à 48h ouvrables suivant votre demande, selon les disponibilités et votre localisation. Pour les chantiers urgents, contactez-nous directement par téléphone au 03 22 93 02 86.",
  },
  {
    q: "Quels types de déchets puis-je mettre dans la benne ?",
    a: "Vous pouvez déposer dans nos bennes : terres, gravats, béton, briques, tuiles, plâtres, bois et menuiseries, plastiques et PVC, métaux, ainsi que les DIB (Déchets Industriels Banals) de chantier. Les déchets dangereux (amiante, solvants, peintures) sont strictement interdits.",
  },
  {
    q: "Quel est le prix d'une location de benne ?",
    a: "Le tarif dépend du volume de la benne, du type de déchets et de la durée de location. Nous établissons un devis gratuit et personnalisé pour chaque demande. Contactez-nous au 03 22 93 02 86 ou via notre formulaire de contact.",
  },
  {
    q: "Puis-je déposer mes déchets directement sur votre site ?",
    a: "Oui ! Notre déchetterie professionnelle de Beauval (Route nationale, 80630) est ouverte du lundi au vendredi de 8h à 12h et de 13h à 16h30. Vous pouvez venir directement avec votre véhicule ou votre remorque.",
  },
  {
    q: "Fournissez-vous des documents de traçabilité ?",
    a: "Absolument. Nous émettons les Bordereaux de Suivi des Déchets (BSD) requis par la réglementation, ainsi que des attestations de prise en charge. Ces documents sont indispensables pour les professionnels et nous les fournissons systématiquement.",
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Nous intervenons dans toute la région Hauts-de-France : Somme (80), Pas-de-Calais (62), Oise (60), Aisne (02), Nord (59) et Seine-Maritime (76). Pour les zones éloignées, un supplément de transport peut s'appliquer.",
  },
  {
    q: "Que se passe-t-il avec mes déchets après l'enlèvement ?",
    a: "Vos déchets sont acheminés vers notre plateforme de Beauval où ils sont triés, traités et valorisés au maximum. Nous cherchons à obtenir le taux de recyclage le plus élevé possible : granulats recyclés pour les inertes, filières dédiées pour le bois, les métaux, les plastiques et le plâtre.",
  },
  {
    q: "Puis-je mettre une benne sur la voie publique ?",
    a: "Oui, mais cela nécessite une autorisation de voirie délivrée par votre mairie. La benne doit être équipée de signalisation réfléchissante. Nous pouvons vous conseiller sur les démarches à effectuer.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
            Questions fréquentes
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
          <p className="text-gray-600">
            Tout ce que vous devez savoir avant de faire appel à Vilbert Recyclage.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {faq.q}
                </span>
                <span
                  className={`text-[#1a5c28] font-bold text-xl flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-1 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-gray-600 text-sm">
          Vous ne trouvez pas votre réponse ?{" "}
          <a href="tel:0322930286" className="text-[#1a5c28] font-bold hover:underline">
            Appelez-nous au 03 22 93 02 86
          </a>
        </p>
      </div>
    </section>
  );
}
