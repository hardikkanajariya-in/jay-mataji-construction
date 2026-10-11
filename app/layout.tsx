import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaymatajiconstruction.com"),
  title: {
    default: "Jay Mataji Construction | Shutdown & Maintenance Solutions",
    template: "%s | Jay Mataji Construction"
  },
  description: "Specialized industrial contractor providing refinery turnaround, shutdown maintenance, static equipment overhaul, reactor catalyst handling, and 700+ technical manpower across India.",
  keywords: [
    "Refinery shutdown contractor",
    "Turnaround maintenance",
    "Heat exchanger overhaul",
    "Distillation column revamp",
    "Reactor catalyst loading",
    "Refinery manpower supply",
    "Industrial scaffolding",
    "Static equipment maintenance India"
  ],
  authors: [{ name: "Jay Mataji Construction" }],
  icons: {
    icon: "/images/brand/logo.jpg",
    apple: "/images/brand/logo.jpg"
  },
  openGraph: {
    title: "Jay Mataji Construction | Shutdown & Maintenance Solutions",
    description: "Refinery turnaround, shutdown maintenance, static equipment overhaul, and industrial manpower contractor since 2014.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-refinery.jpg",
        width: 1200,
        height: 630,
        alt: "Jay Mataji Construction Refinery Maintenance"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white text-[#292929]" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
