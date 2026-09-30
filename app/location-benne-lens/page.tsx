import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Lens (62) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Lens (Pas-de-Calais 62). Collecte et traitement déchets BTP. Devis gratuit sous 24h — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-lens" },
};

export default function PageLens() {
  return (
    <GeoPageContent
      city="Lens"
      postalCode="62300"
      department="Pas-de-Calais"
      distance="environ 60 km"
      intro="Vilbert Recyclage intervient à Lens et dans le bassin minier pour la location de bennes et la collecte de déchets BTP. Service professionnel, devis gratuit."
      specificContent="Le bassin minier autour de Lens (Liévin, Hénin-Beaumont, Carvin) est une zone à forte activité de réhabilitation et de construction neuve. Vilbert Recyclage y intervient régulièrement pour accompagner les entreprises BTP dans la gestion de leurs déchets de chantier. À environ 60 km de notre centre de traitement de Beauval, nous assurons la livraison et l'enlèvement de bennes pour tous types de déchets : inertes (gravats, béton), bois, plâtre, plastiques et métaux. Notre expérience de plus de 30 ans dans le recyclage des déchets BTP est un atout pour les professionnels du Pas-de-Calais qui recherchent un partenaire fiable et conforme à la réglementation. Contactez-nous au 03 22 93 02 86."
    />
  );
}
