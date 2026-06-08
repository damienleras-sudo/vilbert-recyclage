export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://vilbert-recyclage.vercel.app/#business",
        name: "Vilbert Recyclage",
        description:
          "Location de bennes, collecte, transport et traitement de déchets BTP en Hauts-de-France. Terres, gravats, plâtres, bois, plastiques, DIB.",
        url: "https://vilbert-recyclage.vercel.app",
        telephone: "+33322930286",
        email: "recyclage@groupe-vilbert.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Route nationale",
          addressLocality: "Beauval",
          postalCode: "80630",
          addressRegion: "Hauts-de-France",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.0833,
          longitude: 2.1667,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "13:00",
            closes: "16:30",
          },
        ],
        sameAs: ["https://www.groupe-vilbert.com"],
        priceRange: "€€",
        servesCuisine: undefined,
        hasMap: "https://maps.google.com/?q=Beauval+80630+Route+nationale",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Somme" },
          { "@type": "AdministrativeArea", name: "Pas-de-Calais" },
          { "@type": "AdministrativeArea", name: "Oise" },
          { "@type": "AdministrativeArea", name: "Aisne" },
          { "@type": "AdministrativeArea", name: "Nord" },
          { "@type": "AdministrativeArea", name: "Seine-Maritime" },
        ],
        makesOffer: [
          { "@type": "Offer", name: "Location de bennes", description: "Mise à disposition de bennes pour déchets BTP" },
          { "@type": "Offer", name: "Collecte de déchets BTP", description: "Enlèvement sur chantier" },
          { "@type": "Offer", name: "Transport de déchets", description: "Acheminement agréé" },
          { "@type": "Offer", name: "Traitement et valorisation", description: "Recyclage et valorisation des déchets" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "47",
          bestRating: "5",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://vilbert-recyclage.vercel.app/#org",
        name: "Vilbert Recyclage",
        parentOrganization: { "@type": "Organization", name: "Groupe Vilbert", url: "https://www.groupe-vilbert.com" },
        foundingDate: "1990",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 70 },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
