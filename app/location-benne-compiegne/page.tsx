import type { Metadata } from "next";
import { GeoPageContent } from "@/lib/geo-page";

export const metadata: Metadata = {
  title: "Location Benne Compiègne (60) | Collecte Déchets BTP — Vilbert Recyclage",
  description: "Location de benne à Compiègne (Oise 60). Collecte et traitement déchets BTP. Devis gratuit sous 24h — Vilbert Recyclage 03 22 93 02 86.",
  alternates: { canonical: "https://www.vilbert-recyclage.fr/location-benne-compiegne" },
};

export default function PageCompiegne() {
  return (
    <GeoPageContent
      city="Compiègne"
      postalCode="60200"
      department="Oise"
      distance="environ 90 km"
      intro="Vilbert Recyclage intervient à Compiègne et dans l'Oise pour la location de bennes et la collecte de déchets BTP. Solutions adaptées aux entreprises et particuliers."
      specificContent="Compiègne et sa région (Noyon, Verberie, Margny-lès-Compiègne) bénéficient de l'expertise de Vilbert Recyclage pour la gestion des déchets de chantier BTP. Depuis notre centre de traitement de Beauval (environ 90 km), nous assurons des livraisons de bennes pour les chantiers importants de l'Oise. La ville de Compiègne connaît un fort dynamisme immobilier avec de nombreux programmes de construction et de réhabilitation urbaine. Notre service comprend la livraison de la benne, l'enlèvement à la demande, et la fourniture complète des documents réglementaires (BSD, certificats de valorisation). Pour les projets de grande envergure dans l'Oise, nous étudions des arrangements logistiques sur mesure. Contactez notre équipe au 03 22 93 02 86."
    />
  );
}
