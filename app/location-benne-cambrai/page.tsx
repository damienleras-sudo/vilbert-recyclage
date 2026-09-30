import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Cambrai (59) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Cambrai (Nord 59). Collecte et traitement déchets BTP. Devis gratuit sous 24h — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-cambrai" },
};

export default function PageCambrai() {
  return (
    <GeoPageContent
      city="Cambrai"
      postalCode="59400"
      department="Nord"
      distance="environ 70 km"
      intro="Vilbert Recyclage dessert Cambrai et le Cambrésis pour la location de bennes et la collecte de déchets de chantier BTP. Devis gratuit, traçabilité garantie."
      specificContent="Cambrai et son agglomération concentrent une activité de construction et de rénovation importante. Notre équipe intervient depuis Beauval (environ 70 km) pour livrer des bennes sur vos chantiers cambrésiens. Nous traitons tous les déchets BTP : gravats, terres, béton, plâtre, bois, plastiques et ferrailles. Les entreprises du Cambrésis apprécient notre réactivité et la qualité de nos documents de traçabilité (BSD, certificats de valorisation), indispensables pour les marchés publics et privés. Pour les professionnels ayant des besoins récurrents, nous étudions des contrats annuels avec tarifs dégressifs. Appelez le 03 22 93 02 86."
    />
  );
}
