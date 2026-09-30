export default function SchemaOrg() {
  const BASE_URL = "https://www.vilbert-recyclage.fr";

  const organization = {
    "@type": "Organization",
    "@id": `${BASE_URL}/#org`,
    name: "Vilbert Recyclage",
    legalName: "Vilbert Recyclage",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 300,
      height: 150,
    },
    image: `${BASE_URL}/logo.png`,
    description:
      "Spécialiste de la gestion des déchets BTP en Hauts-de-France depuis 30 ans. Location de bennes, collecte, transport et traitement de déchets de chantier. Centre de traitement agréé à Beauval (Somme).",
    foundingDate: "1994",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 70,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Groupe Vilbert",
      url: "https://www.groupe-vilbert.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Route nationale",
      addressLocality: "Beauval",
      postalCode: "80630",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    telephone: "+33322930286",
    email: "recyclage@groupe-vilbert.fr",
    sameAs: [
      "https://www.facebook.com/p/Groupe-Vilbert-100063776760913/",
      "https://share.google/UPFqTI8VQPwXuHbfy",
      "https://www.groupe-vilbert.com",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certification MASE",
        description:
          "Manuel d'Amélioration Sécurité des Entreprises — certification sécurité, santé et environnement",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Opérateur agréé Valobat REP PMCB",
        description:
          "Agrément Valobat pour la Responsabilité Élargie des Producteurs — Produits et Matériaux de Construction du Bâtiment",
      },
    ],
    knowsAbout: [
      "Location de bennes BTP",
      "Collecte déchets de chantier",
      "Transport de déchets agréé",
      "Traitement déchets inertes",
      "Valorisation déchets BTP",
      "Recyclage gravats",
      "Gestion déchets Hauts-de-France",
    ],
  };

  const localBusiness = {
    "@type": ["LocalBusiness", "RecyclingCenter"],
    "@id": `${BASE_URL}/#business`,
    name: "Vilbert Recyclage",
    legalName: "Vilbert Recyclage",
    description:
      "Location de bennes, collecte, transport et traitement de déchets BTP en Hauts-de-France depuis plus de 30 ans. Centre de traitement agréé à Beauval (Somme). Terres, gravats, plâtres, bois, plastiques, DIB.",
    url: BASE_URL,
    telephone: "+33322930286",
    email: "recyclage@groupe-vilbert.fr",
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/logo.png`,
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
      longitude: 2.0667,
    },
    hasMap: "https://maps.google.com/?q=Route+nationale+80630+Beauval",
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
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Virement",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Somme",
        sameAs: "https://www.wikidata.org/wiki/Q3397",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pas-de-Calais",
        sameAs: "https://www.wikidata.org/wiki/Q3359",
      },
      {
        "@type": "AdministrativeArea",
        name: "Oise",
        sameAs: "https://www.wikidata.org/wiki/Q3385",
      },
      {
        "@type": "AdministrativeArea",
        name: "Aisne",
        sameAs: "https://www.wikidata.org/wiki/Q3311",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nord",
        sameAs: "https://www.wikidata.org/wiki/Q3375",
      },
      {
        "@type": "AdministrativeArea",
        name: "Seine-Maritime",
        sameAs: "https://www.wikidata.org/wiki/Q3422",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Location de bennes BTP",
        description:
          "Mise à disposition de bennes pour déchets BTP : gravats, terres, plâtre, bois, plastiques, métaux. Livraison et enlèvement sur chantier.",
      },
      {
        "@type": "Offer",
        name: "Collecte de déchets BTP sur chantier",
        description:
          "Enlèvement de déchets de chantier avec camion polybenne ou ampliroll en Hauts-de-France.",
      },
      {
        "@type": "Offer",
        name: "Transport de déchets agréé",
        description:
          "Transport agréé de déchets avec Bordereau de Suivi des Déchets (BSD) et traçabilité réglementaire.",
      },
      {
        "@type": "Offer",
        name: "Traitement et valorisation des déchets inertes",
        description:
          "Recyclage, concassage et valorisation des déchets inertes BTP : gravats, béton, tuiles, briques.",
      },
      {
        "@type": "Offer",
        name: "Gestion déchets REP PMCB",
        description:
          "Collecte et traçabilité des déchets dans le cadre de la REP Produits et Matériaux de Construction du Bâtiment (Valobat).",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Marc D." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Service au top ! La benne a été livrée le lendemain matin de ma demande. Enlèvement rapide. Tarifs corrects et papiers fournis sans avoir à demander. Je recommande.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sophie L." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "La benne était là en 48h. Pas de mauvaises surprises sur la facture. Très satisfaite.",
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "Entreprise Bâti-Nord" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Nous faisons appel à Vilbert Recyclage pour tous nos chantiers en Somme. Réactivité, conformité légale, prix compétitifs. Partenaire de confiance.",
      },
    ],
    sameAs: [
      "https://www.facebook.com/p/Groupe-Vilbert-100063776760913/",
      "https://share.google/UPFqTI8VQPwXuHbfy",
    ],
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Vilbert Recyclage",
    description:
      "Location de bennes et collecte déchets BTP en Hauts-de-France — Vilbert Recyclage, spécialiste depuis 30 ans",
    inLanguage: "fr-FR",
    publisher: { "@id": `${BASE_URL}/#org` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Location de bennes",
        item: `${BASE_URL}/location-bennes`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Nos services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${BASE_URL}/contact`,
      },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, webSite, breadcrumbList],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
