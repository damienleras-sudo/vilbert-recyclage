const badges = [
  { icon: "🏅", label: "Certification MASE", sub: "Management de la sécurité" },
  { icon: "♻️", label: "Agréé traitement déchets", sub: "Filières certifiées" },
  { icon: "📋", label: "BSD fournis", sub: "Traçabilité totale" },
  { icon: "🌍", label: "Engagement RSE", sub: "Réduction empreinte carbone" },
  { icon: "👨‍👩‍👧‍👦", label: "Entreprise familiale", sub: "+30 ans d'expérience" },
  { icon: "🚛", label: "Transporteur agréé", sub: "6 départements couverts" },
];

export default function TrustBanner() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6 font-bold">
          Nos garanties
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-2">
              <span className="text-3xl">{b.icon}</span>
              <p className="font-bold text-gray-900 text-xs leading-tight">{b.label}</p>
              <p className="text-gray-400 text-xs">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
