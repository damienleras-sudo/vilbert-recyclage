import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Amiens (80) | Collecte Déchets BTP — Vilbert Recyclage",
  description:
    "Location de benne à Amiens (Somme 80) : collecte et traitement de déchets BTP. Terres, gravats, plâtres, bois. Devis gratuit — Vilbert Recyclage au 03 22 93 02 86.",
  alternates: { canonical: "https://vilbert-recyclage.vercel.app/location-benne-amiens" },
};

export default function PageAmiens() {
  return (
    <GeoPageContent
      city="Amiens"
      postalCode="80000"
      department="Somme"
      distance="environ 40 km"
      intro="Vilbert Recyclage intervient à Amiens et dans l'agglomération amiénoise pour la location de bennes et la collecte de vos déchets BTP. Service professionnel, rapide et conforme à la réglementation."
      specificContent="Amiens, préfecture de la Somme, est l'une des principales villes que nous desservons. Que vous soyez un particulier en pleine rénovation dans le quartier Saint-Leu, un artisan travaillant sur un chantier résidentiel ou une entreprise BTP gérant plusieurs opérations en même temps, Vilbert Recyclage vous propose une solution adaptée. Nous livrons des bennes directement sur vos chantiers amiénois et pouvons également assurer l'enlèvement de vos déchets pour les acheminer vers notre plateforme de traitement à Beauval, à environ 40 km. Nos équipes maîtrisent les contraintes logistiques des chantiers urbains : accès réduits, stationnement, autorisations de voirie. Contactez-nous pour un devis gratuit sous 24h."
    />
  );
}
