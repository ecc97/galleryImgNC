import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/UI/organisms/footer/Footer";
import "../styles/globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VisionPX",
  description: "Una galería de imagenes, con un banco de imagenes API consumida desde Pexels",
  keywords: ["imagenes", "galeria", "api", "pexels", "imagenes gratis", "imagenes sin copyright", "sin copyright", "no copyright"],
  openGraph: {
    type: "website",
    url: "https://visionpx.vercel.app/",
    title: "VisionPX",
    description: "Una galería de imagenes, con un banco de imagenes API consumida desde Pexels",
    siteName: "VisionPX",
    images: [
      {
        url: "https://images.pexels.com/photos/29847092/pexels-photo-29847092.jpeg",
        width: 800,
        height: 600,
        alt: "VisionPX - Galería de imágenes",
      },
    ],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.variable} ${roboto.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
