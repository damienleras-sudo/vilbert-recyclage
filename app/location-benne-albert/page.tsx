import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Albert (80) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Albert (Somme 80). Collecte et traitement déchets BTP. Devis gratuit — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://vilbert-recyclage.vercel.app/location-benne-albert" },
};

export default function PageAlbert() {
  return (
    <GeoPageContent
      city="Albert"
      postalCode="80300"
      department="Somme"
      distance="environ 30 km"
      intro="Vilbert Recyclage assure la location de bennes et la collecte de déchets BTP à Albert et dans la vallée de l'Ancre. Service professionnel et réactif."
      specificContent="Albert, ville de la Somme située dans la vallée de l'Ancre, fait partie de notre zone d'intervention en Hauts-de-France. Que vous rénoviez une maison, démolissiez une cloison ou gérez un chantier de construction neuve, nous vous proposons la benne adaptée à vos besoins. Notre site de Beauval, à environ 30 km, traite et valorise vos déchets : terres, gravats, plâtres, bois, plastiques, métaux. Les artisans et entreprises BTP d'Albert et des communes environnantes (Bray-sur-Somme, Méaulte, Miraumont) peuvent bénéficier de contrats annuels avec enlèvements réguliers. Appelez-nous pour un devis rapide et sans engagement."
    />
  );
}
