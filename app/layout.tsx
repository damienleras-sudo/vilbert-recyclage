import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaOrg from "@/components/SchemaOrg";

const BASE_URL = "https://vilbert-recyclage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    "benne amiens",
    "benne abbeville",
  ],
  openGraph: {
    title: "Vilbert Recyclage | Location & Collecte de Bennes",
    description:
      "Location de bennes, collecte et traitement de déchets BTP en Hauts-de-France. Devis gratuit.",
    url: BASE_URL,
    siteName: "Vilbert Recyclage",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vilbert Recyclage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilbert Recyclage | Location & Collecte de Bennes",
    description: "Location de bennes et collecte déchets BTP en Hauts-de-France.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
