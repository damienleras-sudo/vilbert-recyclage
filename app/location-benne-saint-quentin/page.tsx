import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Saint-Quentin (02) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Saint-Quentin (Aisne 02). Collecte et traitement déchets BTP. Devis gratuit sous 24h — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-saint-quentin" },
};

export default function PageSaintQuentin() {
  return (
    <GeoPageContent
      city="Saint-Quentin"
      postalCode="02100"
      department="Aisne"
      distance="environ 80 km"
      intro="Vilbert Recyclage intervient à Saint-Quentin et dans l'Aisne pour la location de bennes et l'enlèvement de déchets BTP. Devis personnalisé pour chantiers professionnels."
      specificContent="Saint-Quentin est une ville industrielle en plein renouveau urbain, avec de nombreux chantiers de rénovation et de construction. Malgré la distance de 80 km avec notre site de Beauval, nous intervenons régulièrement sur des chantiers d'envergure dans le Quentin-Cambrésien. Les entreprises de construction et de rénovation de l'Aisne peuvent compter sur notre expertise pour la gestion de leurs déchets BTP : terres, gravats, béton, bois, plâtre, métaux. Nous proposons des solutions adaptées aux grands volumes avec des conditions tarifaires spéciales pour les professionnels ayant des besoins réguliers. Contactez-nous au 03 22 93 02 86 pour étudier ensemble la meilleure solution logistique."
    />
  );
}
