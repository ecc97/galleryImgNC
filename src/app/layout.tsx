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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${roboto.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
