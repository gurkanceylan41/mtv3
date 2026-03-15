// =============================================
// Merkez Tedarik - Ana Sayfa
// UI/UX Pro Max: Liquid Glass + Trust Authority + Social Proof
// Tüm bölüm bileşenlerini bir araya getirir
// Sayfa akışı: Hero > Sosyal Kanıt > Ürünler > Neden Biz > İletişim > Footer
// =============================================

import ShaderBackground from "@/components/ShaderBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* WebGL gökkuşağı shader arka planı - Liquid Glass iridescent efekti */}
      <ShaderBackground />

      {/* Floating navigasyon çubuğu - Cam efekti, güven rozeti */}
      <Navbar />

      {/* Ana içerik alanı */}
      <main>
        {/* Hero bölümü - Büyük tipografi, parlayan CTA, güven rozetleri */}
        <Hero />

        {/* Sosyal kanıt - İş ortakları, müşteri yorumları */}
        <SocialProof />

        {/* Ürün kategorileri - 6 kart, gradyan kenarlıklar, cam efekt */}
        <ProductCategories />

        {/* Neden biz - 4 özellik kartı, animasyonlu sayaçlar */}
        <WhyChooseUs />

        {/* İletişim - Teklif formu, başarı animasyonu, iletişim bilgileri */}
        <Contact />
      </main>

      {/* Alt bilgi - Şirket bilgileri, sosyal medya, güven rozeti */}
      <Footer />
    </>
  );
}
