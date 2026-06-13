import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anindya Kusuma Wardani – Pramuka Garuda Penegak",
  description:
    "Portofolio Anindya Kusuma Wardani — Pramuka Garuda Penegak, perjalanan, prestasi, dan pengabdian seorang Pramuka Indonesia.",
  openGraph: {
    title: "Anindya Kusuma Wardani – Pramuka Garuda Penegak",
    description:
      "Portofolio Anindya Kusuma Wardani — Pramuka Garuda Penegak, perjalanan, prestasi, dan pengabdian seorang Pramuka Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
