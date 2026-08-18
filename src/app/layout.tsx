import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteSettings } from "@/data/mock";
import ScrollProgress from "@/components/layout/ScrollProgress";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteSettings.siteTitle,
    template: "%s | M Prem",
  },
  description: siteSettings.siteDescription,
  keywords: [
    "Digital Marketing",
    "Business Development",
    "SEO",
    "Lead Generation",
    "Growth Strategy",
    "Chennai",
    "M Prem",
  ],
  authors: [{ name: "M Prem" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mprem.in",
    siteName: "M Prem",
    title: siteSettings.siteTitle,
    description: siteSettings.siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.siteTitle,
    description: siteSettings.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
