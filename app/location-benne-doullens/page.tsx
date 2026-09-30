import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Doullens (80) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Doullens (Somme 80). Collecte et traitement déchets BTP. Devis gratuit — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-doullens" },
};

export default function PageDoullens() {
  return (
    <GeoPageContent
      city="Doullens"
      postalCode="80600"
      department="Somme"
      distance="environ 10 km"
      intro="Vilbert Recyclage est votre prestataire de proximité pour la location de bennes à Doullens. Notre déchetterie de Beauval est à seulement 10 km."
      specificContent="Doullens est l'une des communes les plus proches de notre déchetterie professionnelle de Beauval. Cette proximité nous permet d'offrir un service particulièrement réactif aux habitants et aux professionnels de Doullens et de son canton. Vous pouvez soit nous demander la livraison d'une benne sur votre chantier, soit apporter directement vos déchets sur notre site (Route nationale, 80630 Beauval). Nos équipes connaissent bien le secteur et interviennent régulièrement chez les artisans et entreprises de la région de Doullens. Appelez le 03 22 93 02 86 pour un devis immédiat."
    />
  );
}
