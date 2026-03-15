"use client";

import { motion } from "framer-motion";
import {
  Package,
  ShieldCheck,
  Smartphone,
  Gamepad2,
  BookOpen,
  Box,
} from "lucide-react";

// =============================================
// Ürün Kategorileri - Kartvizit Tarzı
// Siyah zemin + altın kenarlıklı geometrik kartlar
// İnce altın çizgi ikonlar ve hover efektleri
// Keskin köşeler, premium lüks görünüm
// =============================================

const categories = [
  {
    icon: Package,
    title: "Streç Film",
    description:
      "Endüstriyel paketleme için yüksek kaliteli streç film çeşitleri. Farklı boy ve kalınlıklarda toptan tedarik.",
  },
  {
    icon: ShieldCheck,
    title: "Çocuk Koruma Ürünleri",
    description:
      "Çocuk güvenliği için köşe koruyucu, priz kapağı, kilit sistemleri ve daha fazlası.",
  },
  {
    icon: Smartphone,
    title: "Elektronik Aksesuarlar",
    description:
      "Telefon kılıfları, şarj kabloları, kulaklıklar ve tüm elektronik aksesuar çeşitleri.",
  },
  {
    icon: Gamepad2,
    title: "Oyuncaklar",
    description:
      "Eğitici oyuncaklar, peluş oyuncaklar, yapbozlar ve her yaş grubuna uygun oyuncak seçenekleri.",
  },
  {
    icon: BookOpen,
    title: "Kırtasiye & Ofis",
    description:
      "Kalemler, defterler, dosyalama ürünleri ve tüm ofis malzemeleri toptan fiyatlarla.",
  },
  {
    icon: Box,
    title: "Ambalaj Malzemeleri",
    description:
      "Balonlu naylon, karton kutular, bant çeşitleri ve profesyonel ambalaj çözümleri.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ProductCategories() {
  return (
    <section id="kategoriler" className="relative py-24 md:py-32 px-6">
      {/* Arka plan: Saf siyaha geçiş */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Bölüm başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]/40" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] font-[Montserrat,sans-serif]">
              Ürün Kategorileri
            </span>
            <div className="w-12 h-px bg-[#C9A84C]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Geniş Ürün <span className="text-[#C9A84C]">Yelpazemiz</span>
          </h2>
          <p className="text-[#888888] text-base max-w-2xl mx-auto font-[Montserrat,sans-serif]">
            İhtiyacınız olan her ürünü toptan fiyatlarla, tek bir merkezden
            tedarik edin.
          </p>
        </motion.div>

        {/* Kategori kartları grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group cursor-pointer"
              >
                {/* Kart - Siyah zemin, altın kenarlık */}
                <div className="relative bg-[#0A0A0A] border border-[#C9A84C]/10 p-8 h-full hover:border-[#C9A84C]/40 transition-all duration-300">
                  {/* Sol üst köşe dekorasyonu */}
                  <div className="absolute top-0 left-0 w-6 h-px bg-[#C9A84C]/50" />
                  <div className="absolute top-0 left-0 w-px h-6 bg-[#C9A84C]/50" />

                  {/* İkon - Altın renkli */}
                  <div className="w-12 h-12 border border-[#C9A84C]/20 flex items-center justify-center mb-6 group-hover:border-[#C9A84C]/50 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-[#C9A84C]"
                      strokeWidth={1.2}
                    />
                  </div>

                  {/* Başlık */}
                  <h3 className="text-xl font-bold text-white mb-3 font-[Cormorant,serif] tracking-wide">
                    {category.title}
                  </h3>

                  {/* İnce altın ayırıcı */}
                  <div className="w-6 h-px bg-[#C9A84C]/30 mb-3" />

                  {/* Açıklama */}
                  <p className="text-[#888888] text-sm leading-[1.8] font-[Montserrat,sans-serif]">
                    {category.description}
                  </p>

                  {/* Hover detay göstergesi */}
                  <div className="mt-6 flex items-center gap-2 text-[#C9A84C] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-[0.1em] uppercase font-[Montserrat,sans-serif]">
                    Detayları Gör
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
