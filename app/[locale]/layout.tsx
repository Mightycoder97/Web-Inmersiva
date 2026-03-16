import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/routing";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyDateWidget from "@/components/layout/StickyDateWidget";
import AntiInspect from "@/components/shared/AntiInspect";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "La Bohemia | Restaurante & Eventos Musicales en Lima",
    template: "%s | La Bohemia",
  },
  description:
    "Experiencia gastronómica única con eventos musicales en Miraflores, Lima. Cocina de autor, cócteles artesanales y los mejores DJs.",
  keywords: [
    "restaurante lima",
    "eventos musicales",
    "miraflores",
    "cocina de autor",
    "dj lima",
    "cócteles artesanales",
    "restaurante con música",
  ],
  openGraph: {
    title: "La Bohemia | Restaurante & Eventos Musicales",
    description:
      "Donde la gastronomía se fusiona con la música. Miraflores, Lima.",
    type: "website",
    locale: "es_PE",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
        <AntiInspect />
        <Header />
        <main>{children}</main>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
