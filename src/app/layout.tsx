import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
  description: SITE_CONFIG.description,
  metadataBase: new URL("https://hazetv.com.br"),
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_CONFIG.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/icon-mark.png" },
      { url: "/images/icon-mark.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/icon-mark.png",
    apple: "/images/icon-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="min-h-screen bg-haze-base text-haze-text font-sans antialiased selection:bg-haze-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

