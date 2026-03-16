"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Merkez Tedarik ile calismaya basladigimizdan beri tedarik sureclerimiz cok daha verimli hale geldi. Toptan fiyat avantaji ile maliyetlerimizi onemli olcude dusurduk.",
    name: "Ahmet Yilmaz",
    title: "Satin Alma Muduru",
    company: "Yilmaz Ticaret A.S.",
    rating: 5,
  },
  {
    quote: "Genis urun yelpazesi ve guvenilir ithalat surecleri ile tum ihtiyaclarimizi tek noktadan karsiliyoruz. Hizli teslimat sureleri de islerimizi kolaylastiriyor.",
    name: "Fatma Demir",
    title: "Genel Mudur",
    company: "Demir Ambalaj Ltd.",
    rating: 5,
  },
  {
    quote: "Profesyonel ekip, rekabetci fiyatlar ve kaliteli urunler. 3 yildir birlikte calisiyoruz ve her zaman memnun kaldik. Guvenle tavsiye ediyorum.",
    name: "Mehmet Kaya",
    title: "Isletme Sahibi",
    company: "Kaya Market Zinciri",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-28 md:py-40 px-6">
      {/* Top divider */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
              <div className="w-1 h-1 rounded-full bg-[#2C5364]" />
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Musterilerimiz
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Guvenen<br />
              <span className="text-[#2C5364]">Isletmeler</span>
            </h2>
          </div>
          <p className="text-[#666] text-sm max-w-md leading-relaxed lg:text-right" style={{ fontFamily: "'Inter', sans-serif" }}>
            500&apos;den fazla isletme bize guveniyor. Musterilerimizin deneyimlerini dinleyin.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 h-full flex flex-col hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2C5364]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#999] text-[14px] leading-[1.8] flex-1 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/[0.06] flex items-center justify-center">
                    <span className="text-[13px] font-semibold text-[#2C5364]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white text-[13px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {testimonial.name}
                    </div>
                    <div className="text-[#555] text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {testimonial.title} — {testimonial.company}
                    </div>
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
