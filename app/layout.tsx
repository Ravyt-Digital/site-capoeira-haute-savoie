import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "./site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.capoeirahautesavoie.com"),
  title: { default: "Capoeira Haute-Savoie | Cours à Thyez, Marnaz et Saint-Jeoire", template: "%s | Capoeira Haute-Savoie" },
  description: "Capoeira franco-brésilienne pour enfants, adolescents et adultes à Thyez, Marnaz et Saint-Jeoire avec Mestre Cobra Preta. Deux cours d’essai offerts.",
  keywords: ["capoeira Haute-Savoie", "capoeira franco-brésilienne", "cours capoeira Thyez", "capoeira Marnaz", "capoeira Saint-Jeoire", "Mestre Cobra Preta", "Guerreiros dos Campeões"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_FR", siteName: "Capoeira Haute-Savoie", title: "L’énergie du Brésil au cœur des Alpes", description: "Une communauté franco-brésilienne à Thyez, Marnaz et Saint-Jeoire.", images: [{url:"/og-franco-brasil.webp",width:1731,height:909,alt:"Capoeira Haute-Savoie — L’énergie du Brésil au cœur des Alpes"}] },
  twitter: { card: "summary_large_image", title: "Capoeira Haute-Savoie", description: "Une capoeira franco-brésilienne au cœur des Alpes.", images:["/og-franco-brasil.webp"] },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><SiteChrome>{children}</SiteChrome></body></html>;
}
