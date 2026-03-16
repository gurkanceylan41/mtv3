"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Floating UI cards - Sutera style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating card top-right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute top-[18%] right-[8%] hidden lg:block"
        >
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 w-[200px]">
            <div className="text-[10px] text-[#666] uppercase tracking-[0.15em] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              Global Tedarik
            </div>
            <div className="text-white text-[28px] font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              50+
            </div>
            <div className="text-[#888] text-[11px] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              Uluslararasi tedarikci
            </div>
            <div className="mt-3 h-1 bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 2, delay: 2 }}
                className="h-full bg-gradient-to-r from-[#2C5364] to-[#0F2027] rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Floating card bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="absolute bottom-[22%] left-[6%] hidden lg:block"
        >
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 w-[220px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#2C5364]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#2C5364]" />
              </div>
              <div>
                <div className="text-white text-[12px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>1000+ Urun</div>
                <div className="text-[#666] text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>8 Kategoride</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-300" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Small floating tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute top-[35%] left-[15%] hidden xl:block"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="bg-[#2C5364]/10 backdrop-blur-sm border border-[#2C5364]/20 rounded-full px-4 py-1.5">
            <span className="text-[#2C5364] text-[10px] font-medium tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Toptan Fiyat
            </span>
          </div>
        </motion.div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-[20%] w-px h-[30%] bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="absolute top-[15%] right-[25%] w-px h-[25%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute bottom-[20%] left-[40%] right-[40%] h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-full px-5 py-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2C5364] animate-[pulse-glow_2s_ease-in-out_infinite]" />
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#999]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Toptan Tedarik & Ithalat Merkezi
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[clamp(2.2rem,5vw,4.5rem)] font-semibold text-white leading-[1.1] tracking-[-0.02em] mb-5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="block">Merkez Tedarik</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Dunyadan secilmis urunleri toptan fiyatlarla, tek bir merkezden tedarik edin.
          Kalite ve guvenin adresi.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#urunler"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] font-semibold text-[13px] tracking-[0.08em] uppercase rounded-full hover:bg-[#2C5364] hover:scale-[1.02] transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Koleksiyonu Kesfet
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#iletisim"
            className="group flex items-center gap-3 px-8 py-4 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] text-white font-medium text-[13px] tracking-[0.08em] uppercase rounded-full hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Iletisime Gec
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

      </div>

    </section>
  );
}
