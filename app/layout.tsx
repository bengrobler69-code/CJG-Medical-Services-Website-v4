import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CJG Medical Services Ltd | Occupational Health & Workplace Wellbeing",
  description: "Comprehensive occupational health solutions tailored for every industry. Professional, science-backed workplace wellbeing services.",
  keywords: ["occupational health", "workplace wellbeing", "health surveillance", "pre-employment medicals", "drug testing", "mental health assessments"],
  openGraph: {
    title: "CJG Medical Services Ltd | Occupational Health & Workplace Wellbeing",
    description: "Protecting Your Workforce. Elevating Their Health.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
