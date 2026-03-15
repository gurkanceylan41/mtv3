"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// =============================================
// Hero Bölümü - Kartvizit Tarzı
// Saf siyah zemin üzerinde altın geometrik çizgiler
// Büyük zarif tipografi, ince altın ayırıcılar
// Keskin ve lüks his - minimal CTA
// =============================================

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Dekoratif altın çizgiler - Kartvizitteki gibi köşegen hatlar */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sol üst köşeden gelen altın çizgi */}
        <div className="absolute top-0 left-[15%] w-px h-[40%] bg-gradient-to-b from-[#C9A84C]/30 to-transparent" />
        {/* Sağ taraftan gelen çizgi */}
        <div className="absolute top-[20%] right-[20%] w-px h-[35%] bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />
        {/* Yatay altın çizgi - üst */}
        <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent" />
        {/* Yatay altın çizgi - alt */}
        <div className="absolute bottom-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent" />
        {/* Köşegen çizgi */}
        <div
          className="absolute top-0 right-0 w-[1px] h-[60%] bg-gradient-to-b from-[#C9A84C]/15 to-transparent origin-top-right"
          style={{ transform: "rotate(-30deg)", transformOrigin: "top right" }}
        />
        <div
          className="absolute top-[10%] left-[5%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-[#C9A84C]/10 to-transparent origin-top-left"
          style={{ transform: "rotate(25deg)", transformOrigin: "top left" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Altın yatay çizgi - üst dekorasyon */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-24 h-px bg-[#C9A84C] mx-auto mb-10"
        />

        {/* Üst etiket */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#C9A84C] font-[Montserrat,sans-serif]">
            Toptan Tedarik & İthalat Merkezi
          </span>
        </motion.div>

        {/* Ana başlık - Büyük, zarif, keskin serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.95] tracking-tight mb-4"
        >
          <span className="block">MERKEZ</span>
          <span className="block bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
            TEDARİK
          </span>
        </motion.h1>

        {/* İnce altın ayırıcı çizgi + slogan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/50" />
          <p className="text-sm md:text-base text-[#888888] font-light tracking-[0.1em] font-[Montserrat,sans-serif]">
            Tüm ürünlerinizi tek bir merkezden tedarik edin
          </p>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/50" />
        </motion.div>

        {/* CTA butonları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-12"
        >
          {/* Ana CTA - Dolu altın buton */}
          <a
            href="#kategoriler"
            className="group relative px-10 py-4 bg-[#C9A84C] text-black font-semibold text-[13px] tracking-[0.15em] uppercase cursor-pointer hover:bg-[#D4AF37] transition-colors duration-300 font-[Montserrat,sans-serif] flex items-center gap-3"
          >
            Ürünleri Keşfet
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
            {/* Altın parlama gölgesi */}
            <div className="absolute inset-0 bg-[#C9A84C] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
          </a>

          {/* İkincil CTA - Altın kenarlık */}
          <a
            href="#iletisim"
            className="px-10 py-4 border border-[#C9A84C]/40 text-[#C9A84C] font-medium text-[13px] tracking-[0.15em] uppercase hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300 cursor-pointer font-[Montserrat,sans-serif]"
          >
            İletişime Geçin
          </a>
        </motion.div>

        {/* İstatistik çubuğu - İnce altın kenarlıklı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-24 inline-flex items-center"
        >
          {[
            { value: "1000+", label: "Ürün Çeşidi" },
            { value: "500+", label: "Mutlu Müşteri" },
            { value: "50+", label: "Tedarikçi" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-8 md:px-12">
                <div className="text-2xl md:text-3xl font-bold text-[#C9A84C] font-[Cormorant,serif]">
                  {stat.value}
                </div>
                <div className="text-[10px] text-[#555555] mt-1 tracking-[0.15em] uppercase font-[Montserrat,sans-serif]">
                  {stat.label}
                </div>
              </div>
              {/* Altın ayırıcı çizgi */}
              {i < 2 && (
                <div className="w-px h-10 bg-[#C9A84C]/20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Aşağı kaydırma göstergesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-[#C9A84C]/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1 bg-[#C9A84C] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
