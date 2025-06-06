import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Cognimeet | Agentes IA",
  description:
    "Cognimeet es una plataforma de agentes de inteligencia artificial capaces de conectarse a videollamadas y hablar contigo sobre temas específicos como psicología, educación, tecnología y más.",
  keywords: [
    "Cognimeet",
    "IA",
    "agentes inteligentes",
    "videollamadas",
    "psicología virtual",
    "asistente virtual",
    "inteligencia artificial",
  ],
  authors: [{ name: "Felipe Reyes Sanchez", url: "https://felipesanchez.site" }],
  creator: "Felipe Reyes Sánchez",
  openGraph: {
    title: "Cognimeet",
    description:
      "Agentes de inteligencia artificial en videollamadas. Tecnología empática y futurista a tu servicio.",
    url: "https://felipesanchez.site",
    siteName: "Cognimeet",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#0f0f0f" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
