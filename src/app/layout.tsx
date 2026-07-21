import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Syne } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { SceneBackground } from "@/components/three/SceneBackground";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://soleilmbayi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soleil Mbayi — Le Tout Puissant Soleil",
    template: "%s · Soleil Mbayi",
  },
  description:
    "Portfolio de Soleil Mbayi — ingénieur en Intelligence Artificielle, roboticien, entrepreneur et défenseur de l'héritage africain. Construire l'Afrique de demain grâce à la technologie, à la culture et à l'innovation.",
  keywords: [
    "Soleil Mbayi",
    "Intelligence Artificielle",
    "Robotique",
    "Afrique",
    "IoT",
    "Entrepreneur",
    "Kinshasa",
    "RDC",
    "DURITHI",
    "MyUOM",
  ],
  authors: [{ name: "Soleil Mbayi" }],
  creator: "Soleil Mbayi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Soleil Mbayi",
    title: "Soleil Mbayi — Le Tout Puissant Soleil",
    description:
      "Ingénieur IA · Roboticien · Entrepreneur · Défenseur de l'héritage africain",
    images: [
      {
        url: "/fondateur.jpeg",
        width: 1200,
        height: 630,
        alt: "Soleil Mbayi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soleil Mbayi — Le Tout Puissant Soleil",
    description:
      "Construire l'Afrique de demain grâce à la technologie, à la culture et à l'innovation.",
    images: ["/fondateur.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      fr: siteUrl,
      en: `${siteUrl}/?lang=en`,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <AppProviders>
          <LoadingScreen />
          <div className="noise-overlay" aria-hidden />
          <SceneBackground />
          <Navbar />
          <main id="main" className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />
          <AIAssistant />
        </AppProviders>
      </body>
    </html>
  );
}
