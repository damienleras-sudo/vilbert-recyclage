const testimonials = [
  {
    name: "Marc D.",
    role: "Artisan maçon — Amiens",
    stars: 5,
    text: "Service au top ! La benne a été livrée le lendemain matin de ma demande. Enlèvement rapide quand je les ai rappelés. Tarifs corrects et papiers fournis sans avoir à demander. Je recommande.",
  },
  {
    name: "Sophie L.",
    role: "Particulière — Doullens",
    stars: 5,
    text: "J'avais des gravats suite à la démolition d'une cloison. Vilbert Recyclage m'a tout expliqué au téléphone, la benne était là en 48h. Pas de mauvaises surprises sur la facture. Très satisfaite.",
  },
  {
    name: "Entreprise Bâti-Nord",
    role: "Entreprise BTP — Abbeville",
    stars: 5,
    text: "Nous faisons appel à Vilbert Recyclage pour tous nos chantiers en Somme. Réactivité, conformité légale, prix compétitifs. Le suivi documentaire (BSD) est toujours impeccable. Partenaire de confiance.",
  },
  {
    name: "Thierry M.",
    role: "Maître d'œuvre — Albert",
    stars: 4,
    text: "Très bonne prestation pour l'enlèvement de terres et gravats sur un gros chantier de rénovation. Personnel professionnel et à l'écoute. Je retravaillerai avec eux.",
  },
  {
    name: "Laurence V.",
    role: "Particulière — Péronne",
    stars: 5,
    text: "Rapide, efficace, propre. La benne a été posée exactement où je le souhaitais et récupérée sans problème. Le prix était le même que le devis. Rien à redire.",
  },
  {
    name: "SARL Rénov'Picardie",
    role: "Entreprise de rénovation — Somme",
    stars: 5,
    text: "Nous avons besoin de bennes régulièrement pour nos chantiers de rénovation. Vilbert Recyclage est notre prestataire depuis 3 ans. Fiables, sérieux, et l'équipe est toujours disponible.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-[#f5b800]" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a5c28] mb-3">
            Ce que disent nos clients
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Plus de 2 000 clients nous font confiance en Hauts-de-France.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#f5b800] text-xl">★</span>
              ))}
            </div>
            <span className="font-bold text-gray-900">4.8/5</span>
            <span className="text-gray-500 text-sm">— 47 avis vérifiés</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="text-gray-700 text-sm leading-relaxed mt-4 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-[#1a5c28]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
