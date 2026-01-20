import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emad Soualhi - Premium Domain Strategy",
  description: "Crafting the future of brands with premium domain strategy.",
};

import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";
import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Cursor />
        <GrainOverlay />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
