"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Truck, Layers, Globe } from "lucide-react";

// =============================================
// Neden Biz Bölümü - Kartvizit Tarzı
// Altın çizgili özellik kartları + sayaç bölümü
// Keskin geometrik görünüm, ince altın detaylar
// Animasyonlu sayaçlar ile güven istatistikleri
// =============================================

const features = [
  {
    icon: TrendingUp,
    title: "Toptan Fiyat Avantajı",
    description:
      "Doğrudan üretici ve ithalatçılardan tedarik ederek en uygun toptan fiyatları sunuyoruz.",
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description:
      "Türkiye genelinde hızlı kargo ve lojistik ağımız ile siparişlerinizi en kısa sürede teslim ediyoruz.",
  },
  {
    icon: Layers,
    title: "Geniş Ürün Yelpazesi",
    description:
      "6 farklı kategoride 1000'den fazla ürün çeşidi ile tüm ihtiyaçlarınızı karşılıyoruz.",
  },
  {
    icon: Globe,
    title: "Güvenilir İthalat",
    description:
      "Uluslararası tedarikçi ağımız ile kaliteli ürünleri güvenilir ithalat süreçleriyle getiriyoruz.",
  },
];

const stats = [
  { value: 1000, suffix: "+", label: "Ürün" },
  { value: 500, suffix: "+", label: "Müşteri" },
  { value: 50, suffix: "+", label: "Tedarikçi" },
  { value: 6, suffix: "", label: "Kategori" },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#C9A84C] font-[Cormorant,serif]">
        {count}<span className="text-[#D4AF37]">{suffix}</span>
      </div>
      <div className="text-[10px] text-[#555555] mt-2 tracking-[0.2em] uppercase font-[Montserrat,sans-serif]">
        {label}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="neden-biz" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
              Avantajlarımız
            </span>
            <div className="w-12 h-px bg-[#C9A84C]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Neden <span className="text-[#C9A84C]">Merkez Tedarik?</span>
          </h2>
        </motion.div>

        {/* Özellik kartları - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-[#0A0A0A] border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/30 transition-all duration-300">
                  {/* Köşe dekorasyonları */}
                  <div className="absolute top-0 right-0 w-6 h-px bg-[#C9A84C]/40" />
                  <div className="absolute top-0 right-0 w-px h-6 bg-[#C9A84C]/40" />
                  <div className="absolute bottom-0 left-0 w-6 h-px bg-[#C9A84C]/40" />
                  <div className="absolute bottom-0 left-0 w-px h-6 bg-[#C9A84C]/40" />

                  <div className="flex gap-6">
                    {/* İkon */}
                    <div className="w-12 h-12 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 group-hover:border-[#C9A84C]/40 transition-colors duration-300">
                      <Icon size={22} className="text-[#C9A84C]" strokeWidth={1.2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-[Cormorant,serif] tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-[#888888] text-sm leading-[1.8] font-[Montserrat,sans-serif]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sayaç bölümü - Altın kenarlıklı kart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-[#0A0A0A] border border-[#C9A84C]/15 p-10 md:p-16">
            {/* Dört köşe altın dekorasyonları */}
            <div className="absolute top-0 left-0 w-10 h-px bg-[#C9A84C]/50" />
            <div className="absolute top-0 left-0 w-px h-10 bg-[#C9A84C]/50" />
            <div className="absolute top-0 right-0 w-10 h-px bg-[#C9A84C]/50" />
            <div className="absolute top-0 right-0 w-px h-10 bg-[#C9A84C]/50" />
            <div className="absolute bottom-0 left-0 w-10 h-px bg-[#C9A84C]/50" />
            <div className="absolute bottom-0 left-0 w-px h-10 bg-[#C9A84C]/50" />
            <div className="absolute bottom-0 right-0 w-10 h-px bg-[#C9A84C]/50" />
            <div className="absolute bottom-0 right-0 w-px h-10 bg-[#C9A84C]/50" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center justify-center">
                  <AnimatedCounter {...stat} />
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 w-px h-12 bg-[#C9A84C]/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
