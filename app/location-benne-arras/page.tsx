import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Arras (62) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Arras (Pas-de-Calais 62). Collecte et traitement déchets BTP. Devis gratuit sous 24h — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-arras" },
};

export default function PageArras() {
  return (
    <GeoPageContent
      city="Arras"
      postalCode="62000"
      department="Pas-de-Calais"
      distance="environ 45 km"
      intro="Vilbert Recyclage intervient à Arras et dans l'Arrageois pour la location de bennes et la collecte de déchets BTP. Devis gratuit, intervention rapide depuis Beauval."
      specificContent="Arras, chef-lieu du Pas-de-Calais, fait partie de notre zone d'intervention régulière. À environ 45 km de notre déchetterie professionnelle de Beauval, nous desservons les chantiers de construction, rénovation et démolition sur toute l'agglomération arrageoise. Les entreprises BTP et artisans de la région d'Arras (Dainville, Saint-Nicolas-lez-Arras, Sainte-Catherine, Anzin-Saint-Aubin) peuvent bénéficier de notre service de location de bennes avec livraison sur site. Nous fournissons tous les documents de traçabilité requis (BSD) et intervenons dans le respect de la réglementation sur le tri des 7 flux. Appelez le 03 22 93 02 86 pour un devis immédiat."
    />
  );
}
