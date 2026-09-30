import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaOrg from "@/components/SchemaOrg";
import ExitIntent from "@/components/ExitIntent";

const BASE_URL = "https://www.vilbert-recyclage.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vilbert Recyclage | Location & Collecte de Bennes - Beauval (80)",
    template: "%s | Vilbert Recyclage",
  },
  description:
    "Vilbert Recyclage : location de bennes, collecte, transport et traitement de déchets BTP en Hauts-de-France. Terres, gravats, plâtres, bois, plastiques. Devis gratuit au 03 22 93 02 86.",
  keywords: [
    "location benne Somme",
    "location benne Amiens",
    "collecte déchets BTP",
    "benne chantier Beauval",
    "recyclage déchets Somme",
    "déchetterie professionnelle Beauval",
    "broyage sur chantier",
    "démantèlement menuiseries recyclage",
    "compostage déchets verts Somme",
    "espèces invasives renouée japon",
    "vente granulats recyclés",
    "vente GNT recyclée Somme",
    "vente compost Beauval",
    "location benne annuelle entrepôt",
    "certification MASE déchets",
    "Trackdéchets BSD",
    "Hauts-de-France",
    "gravats plâtre bois",
    "benne abbeville",
    "benne doullens",
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
  // Pas de canonical global ici — chaque page définit le sien via alternates.canonical dans sa propre metadata
  verification: {
    google: "5GpU3gDypJjMmv83BTe4YhHpFwQJp2bCHVaixMhqoR0",
  },
  other: {
    "format-detection": "telephone=yes",
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//vercel.live" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <ExitIntent />
      </body>
    </html>
  );
}
