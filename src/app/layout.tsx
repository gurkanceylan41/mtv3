import type { Metadata } from "next";
import "./globals.css";

// =============================================
// Merkez Tedarik - Ana Düzen Bileşeni (Root Layout)
// Tüm sayfalar için ortak yapı, meta bilgileri ve font yükleme
// Next.js App Router kök layout dosyası
// =============================================

// SEO meta bilgileri - Arama motorları ve sosyal medya için
export const metadata: Metadata = {
  title: "Merkez Tedarik | Toptan Tedarik & İthalat Merkezi",
  description:
    "Tüm ürünlerinizi tek bir merkezden tedarik edin. Streç film, çocuk koruma ürünleri, elektronik aksesuarlar, oyuncaklar ve daha fazlası toptan fiyatlarla. 1000+ ürün, 500+ mutlu müşteri.",
  keywords:
    "toptan tedarik, ithalat, streç film, ambalaj, çocuk koruma, elektronik aksesuar, oyuncak, kırtasiye, B2B, toptan satış",
  openGraph: {
    title: "Merkez Tedarik | Toptan Tedarik & İthalat Merkezi",
    description: "Tüm ürünlerinizi tek bir merkezden tedarik edin.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
