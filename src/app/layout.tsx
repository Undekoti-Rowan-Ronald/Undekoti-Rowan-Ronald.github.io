import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";
import { profile } from "@/lib/data";

const siteUrl = "https://undekoti-rowan-ronald.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI Engineer & ML Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.subtitle,
  keywords: [
    "Undekoti Rowan Ronald",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Computer Vision",
    "Deepfake Detection",
    "Edge AI",
    "Java Backend Developer",
    "SRM Institute of Science and Technology",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | AI Engineer & ML Engineer`,
    description: profile.subtitle,
    siteName: profile.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} — AI Engineer portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI Engineer & ML Engineer`,
    description: profile.subtitle,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-base-950 font-body antialiased">
        <Loader />
        <ScrollProgress />
        <ParticleBackground />
        <CursorGlow />
        <div className="pointer-events-none fixed inset-0 -z-20 bg-grad-radial" />
        <Nav />
        <main className="relative z-0 pt-28">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
