import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vilbert Recyclage | Location & Collecte de Bennes - Beauval (80)",
    template: "%s | Vilbert Recyclage",
  },
  description:
    "Vilbert Recyclage : location de bennes, collecte, transport et traitement de déchets BTP en Hauts-de-France. Terres, gravats, plâtres, bois, plastiques. Devis gratuit au 03 22 93 02 86.",
  keywords: [
    "location benne",
    "collecte déchets BTP",
    "benne chantier",
    "recyclage déchets",
    "Beauval",
    "Somme",
    "Hauts-de-France",
    "gravats",
    "terres",
    "déchetterie professionnelle",
  ],
  openGraph: {
    title: "Vilbert Recyclage | Location & Collecte de Bennes",
    description:
      "Location de bennes, collecte et traitement de déchets BTP en Hauts-de-France.",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
