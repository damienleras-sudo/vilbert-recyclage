import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Péronne (80) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Péronne (Somme 80). Collecte et traitement déchets BTP. Devis gratuit — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-peronne" },
};

export default function PagePeronne() {
  return (
    <GeoPageContent
      city="Péronne"
      postalCode="80200"
      department="Somme"
      distance="environ 50 km"
      intro="Vilbert Recyclage intervient à Péronne et dans le Santerre pour la location de bennes et la collecte de déchets BTP. Devis gratuit sous 24h."
      specificContent="Péronne et sa région (Santerre-Haute-Somme) font partie de notre zone d'intervention élargie. Malgré la distance d'environ 50 km avec notre site de Beauval, nous desservons régulièrement les chantiers du secteur de Péronne, Nesle, Ham et Roisel. Nous proposons la livraison de bennes pour tous types de chantiers : rénovation, construction, démolition, terrassement. Les professionnels BTP du Santerre peuvent bénéficier d'arrangements spéciaux pour les chantiers d'envergure. N'hésitez pas à nous contacter pour évaluer ensemble la meilleure solution logistique."
    />
  );
}
