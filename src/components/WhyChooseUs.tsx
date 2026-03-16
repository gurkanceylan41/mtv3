"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Truck, Layers, Globe } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Toptan Fiyat Avantaji",
    description: "Dogrudan uretici ve ithalatcilardan tedarik ederek en uygun toptan fiyatlari sunuyoruz.",
    stat: "40%",
    statLabel: "Maliyet Tasarrufu",
  },
  {
    icon: Truck,
    title: "Hizli Teslimat",
    description: "Turkiye genelinde hizli kargo ve lojistik agimiz ile siparislerinizi teslim ediyoruz.",
    stat: "24s",
    statLabel: "Ortalama Teslimat",
  },
  {
    icon: Layers,
    title: "Genis Urun Yelpazesi",
    description: "8 farkli kategoride 1000'den fazla urun cesidi ile tum ihtiyaclarinizi karsiliyoruz.",
    stat: "1000+",
    statLabel: "Urun Cesidi",
  },
  {
    icon: Globe,
    title: "Guvenilir Ithalat",
    description: "Uluslararasi tedarikci agimiz ile kaliteli urunleri guvenilir ithalat surecleriyle getiriyoruz.",
    stat: "50+",
    statLabel: "Ulke Agi",
  },
];

const stats = [
  { value: 1000, suffix: "+", label: "Urun" },
  { value: 500, suffix: "+", label: "Musteri" },
  { value: 50, suffix: "+", label: "Tedarikci" },
  { value: 8, suffix: "", label: "Kategori" },
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
      <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}<span className="text-[#2C5364]">{suffix}</span>
      </div>
      <div className="text-[11px] text-[#555] tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="hakkimizda" className="relative py-28 md:py-40 px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: "url('/why-bg.jpg')" }}
      />
      {/* Top divider */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
            <div className="w-1 h-1 rounded-full bg-[#2C5364]" />
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Neden Biz
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Neden Merkez<br />
            <span className="text-[#2C5364]">Tedarik?</span>
          </h2>
          <p className="text-[#666] text-base max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Kalite, guven ve uygun fiyati tek catida topluyoruz.
          </p>
        </motion.div>

        {/* Features - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 h-full">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-[#2C5364]/20 group-hover:bg-[#2C5364]/[0.06] transition-all duration-500">
                      <Icon size={24} className="text-[#888] group-hover:text-[#2C5364] transition-colors duration-500" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {feature.title}
                        </h3>
                        <div className="text-right hidden sm:block">
                          <div className="text-2xl font-bold text-[#2C5364]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {feature.stat}
                          </div>
                          <div className="text-[9px] text-[#555] tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {feature.statLabel}
                          </div>
                        </div>
                      </div>
                      <p className="text-[#666] text-[14px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Counter section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative">
                  <AnimatedCounter {...stat} />
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-6 w-px h-12 bg-white/[0.06]" />
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
