import type { Metadata } from "next";
import "./globals.css";
import BackgroundEffect from "./components/BackgroundEffect";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Hospital Digital | Conectando la Salud",
  description: "Plataforma inteligente que une a proveedores, hospitales, clínicas y personal clínico para transparentar procesos y eliminar la deuda oculta hospitalaria en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <BackgroundEffect />
        <Navigation />
        <main style={{ minHeight: 'calc(100vh - 300px)', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
