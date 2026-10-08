import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PhysicianStructuredData } from "@/components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drhectorvaldez.com"),
  title: {
    default: "Dr. Héctor Valdéz Grajales | Cirujano General en Tuxtla Gutiérrez, Chiapas",
    template: "%s | Dr. Héctor Valdéz Grajales",
  },
  description:
    "Especialista en Cirugía General y Laparoscopía de Mínima Invasión en Tuxtla Gutiérrez, Chiapas. Cirugía de vesícula, apendicitis, hernias inguinales y umbilicales, lipomas y urgencias 24h. Consultorios Santa Fe.",
  keywords: [
    "cirujano general tuxtla gutierrez",
    "cirugia de vesicula chiapas",
    "cirujano de hernias tuxtla",
    "colecistectomia laparoscopica tuxtla",
    "apendicitis de urgencia chiapas",
    "cirujano consultorios santa fe",
    "cirugia de lipomas tuxtla",
  ],
  authors: [{ name: "Dr. Héctor Valdéz Grajales" }],
  creator: "Dr. Héctor Valdéz Grajales",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://drhectorvaldez.com",
    title: "Dr. Héctor Valdéz Grajales | Cirujano General en Tuxtla Gutiérrez",
    description:
      "Cirugía de vesícula biliar por laparoscopía, apendicitis, hernias y urgencias 24 horas en Tuxtla Gutiérrez, Chiapas. Consulta $500 MXN.",
    siteName: "Dr. Héctor Valdéz Grajales — Cirugía General",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7FAF9] text-neutral-800 antialiased selection:bg-[#14B8A6] selection:text-white">
        <PhysicianStructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
