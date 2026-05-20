import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#819A91",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rschoyal.vercel.app"),
  title: "Wonder Mill - Smart Flour Milling Technology",
  description: "The patented digital stone mill for modern flour plants. Upgrade your chakki for consistent recipes, energy savings, and automated data logging.",
  openGraph: {
    title: "Wonder Mill - Smart Flour Milling Technology",
    description: "The patented digital stone mill for modern flour plants. Upgrade your chakki for consistent recipes, energy savings, and automated data logging.",
    url: "https://rschoyal.vercel.app",
    siteName: "Wonder Mill",
    images: [
      {
        url: "/images/atta_plant.png",
        width: 1200,
        height: 630,
        alt: "Wonder Mill - Digital Flour Plant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
