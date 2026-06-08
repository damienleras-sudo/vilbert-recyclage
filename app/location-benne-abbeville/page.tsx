import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Abbeville (80) | Collecte Déchets BTP — Vilbert Recyclage",
  description:
    "Location de benne à Abbeville (Somme 80) : collecte et traitement de déchets BTP. Terres, gravats, plâtres, bois. Devis gratuit — Vilbert Recyclage au 03 22 93 02 86.",
  alternates: { canonical: "https://vilbert-recyclage.vercel.app/location-benne-abbeville" },
};

export default function PageAbbeville() {
  return (
    <GeoPageContent
      city="Abbeville"
      postalCode="80100"
      department="Somme"
      distance="environ 25 km"
      intro="Vilbert Recyclage dessert Abbeville et le Vimeu pour la location de bennes et la collecte de déchets BTP. Proximité, réactivité et conformité réglementaire garanties."
      specificContent="Abbeville est à seulement 25 km de notre déchetterie professionnelle de Beauval, ce qui nous permet d'intervenir rapidement sur tous vos chantiers du secteur. Artisans du bâtiment, entreprises de travaux publics, particuliers en rénovation : nous mettons à votre disposition des bennes de différentes tailles pour répondre à tous vos besoins. La ville d'Abbeville et ses environs (Woignarue, Cambron, Drucat...) font partie de notre zone d'intervention prioritaire. Nos équipes assurent la livraison, l'enlèvement et le traitement de vos déchets dans les meilleures conditions. Contactez-nous par téléphone ou via notre formulaire pour un devis gratuit personnalisé."
    />
  );
}
