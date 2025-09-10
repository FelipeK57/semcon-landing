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

export const metadata: Metadata = {
  title: "SEMCON - Automatización e Instrumentación para la Industria Papelera",
  description: "Servicios especializados de control y medición para la industria papelera. Representantes y distribuidores autorizados de marcas líderes en automatización y medición.",
  keywords: [
    "automatización", "instrumentación", "industria papelera", "servicios industriales", "medición", "control", "VOITH", "AMETEK", "ABB", "mantenimiento", "soporte", "capacitaciones", "Colombia", "Latinoamérica", "Sudamérica", "industria papelera Colombia", "automatización Colombia", "automatización Latinoamérica", "SEMCON Colombia", "SEMCON Latinoamérica"
  ],
  openGraph: {
    title: "SEMCON Colombia y Latinoamérica - Automatización e Instrumentación para la Industria Papelera",
    description: "Servicios especializados de control y medición para la industria papelera en Colombia y Latinoamérica. Representantes y distribuidores autorizados de marcas líderes en automatización y medición.",
    url: "https://semcon.com.co/",
    siteName: "SEMCON Colombia y Latinoamérica",
    images: [
      {
        url: "/hero1.png",
        width: 1200,
        height: 630,
        alt: "SEMCON automatización industria papelera Colombia Latinoamérica"
      }
    ],
    locale: "es_CO",
    type: "website"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Datos estructurados para SEO */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SEMCON Colombia y Latinoamérica",
            "url": "https://semcon.com.co/",
            "logo": "/hero1.png",
            "description": "Servicios especializados de automatización, control e instrumentación para la industria papelera en Colombia y Latinoamérica.",
            "areaServed": ["Colombia", "Latinoamérica", "Sudamérica"],
            "sameAs": [
              "https://www.voith.com/corp-en/index.html",
              "https://www.ametek.com/",
              "https://new.abb.com/"
            ]
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
