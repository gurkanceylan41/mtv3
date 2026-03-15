"use client";

import { motion } from "framer-motion";

// =============================================
// Sosyal Kanıt Bölümü - Kartvizit Tarzı
// Altın çizgi ayırıcılar ile müşteri yorumları
// Siyah kartlar + ince altın kenarlık
// Premium B2B güvenilirlik bölümü
// =============================================

const testimonials = [
  {
    quote:
      "Merkez Tedarik ile çalışmaya başladığımızdan beri tedarik süreçlerimiz çok daha verimli hale geldi. Toptan fiyat avantajı ile maliyetlerimizi önemli ölçüde düşürdük.",
    name: "Ahmet Yılmaz",
    title: "Satın Alma Müdürü",
    company: "Yılmaz Ticaret A.Ş.",
  },
  {
    quote:
      "Geniş ürün yelpazesi ve güvenilir ithalat süreçleri ile tüm ihtiyaçlarımızı tek noktadan karşılıyoruz. Hızlı teslimat süreleri de işlerimizi kolaylaştırıyor.",
    name: "Fatma Demir",
    title: "Genel Müdür",
    company: "Demir Ambalaj Ltd.",
  },
  {
    quote:
      "Profesyonel ekip, rekabetçi fiyatlar ve kaliteli ürünler. 3 yıldır birlikte çalışıyoruz ve her zaman memnun kaldık. Güvenle tavsiye ediyorum.",
    name: "Mehmet Kaya",
    title: "İşletme Sahibi",
    company: "Kaya Market Zinciri",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      {/* Üst altın ayırıcı çizgi */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Bölüm başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Dekoratif altın çizgiler */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]/40" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] font-[Montserrat,sans-serif]">
              Müşteri Yorumları
            </span>
            <div className="w-12 h-px bg-[#C9A84C]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Müşterilerimiz Ne{" "}
            <span className="text-[#C9A84C]">Diyor?</span>
          </h2>
        </motion.div>

        {/* Testimonial kartları - Altın kenarlıklı siyah kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Kart - İnce altın kenarlık */}
              <div className="relative bg-[#0A0A0A] border border-[#C9A84C]/15 p-8 h-full flex flex-col hover:border-[#C9A84C]/30 transition-colors duration-300">
                {/* Sol üst köşe altın dekorasyon */}
                <div className="absolute top-0 left-0 w-8 h-px bg-[#C9A84C]/60" />
                <div className="absolute top-0 left-0 w-px h-8 bg-[#C9A84C]/60" />

                {/* Sağ alt köşe altın dekorasyon */}
                <div className="absolute bottom-0 right-0 w-8 h-px bg-[#C9A84C]/60" />
                <div className="absolute bottom-0 right-0 w-px h-8 bg-[#C9A84C]/60" />

                {/* Tırnak işareti */}
                <div className="text-[#C9A84C]/30 text-5xl font-serif leading-none mb-4 select-none">
                  &ldquo;
                </div>

                {/* Yorum metni */}
                <p className="text-[#888888] text-sm leading-[1.8] flex-1 font-[Montserrat,sans-serif]">
                  {testimonial.quote}
                </p>

                {/* Altın ayırıcı çizgi */}
                <div className="w-8 h-px bg-[#C9A84C]/30 my-6" />

                {/* Yorum sahibi */}
                <div>
                  <div className="text-white text-sm font-semibold tracking-[0.05em] font-[Montserrat,sans-serif]">
                    {testimonial.name}
                  </div>
                  <div className="text-[#C9A84C]/60 text-xs mt-1 font-[Montserrat,sans-serif] tracking-wider">
                    {testimonial.title} — {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
