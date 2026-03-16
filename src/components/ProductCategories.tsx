"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { categories } from "@/data/products";

export default function ProductCategories() {
  return (
    <section id="urunler" className="relative py-28 md:py-40 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
                <div className="w-1 h-1 rounded-full bg-[#2C5364]" />
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Kategoriler
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Urun<br />
                <span className="text-[#2C5364]">Koleksiyonumuz</span>
              </h2>
            </div>
            <p className="text-[#666] text-sm max-w-md leading-relaxed lg:text-right" style={{ fontFamily: "'Inter', sans-serif" }}>
              {categories.length} farkli kategoride genis urun cesidi ile tum ihtiyaclarinizi tek bir merkezden karsiliyoruz.
            </p>
          </div>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl h-full hover:border-white/[0.1] transition-all duration-500 overflow-hidden">
                {/* Category image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] text-white/80 font-medium tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {category.stats.products}+ urun
                    </span>
                  </div>
                  {category.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] text-white font-semibold tracking-wider bg-[#2C5364]/80 backdrop-blur-sm px-2 py-1 rounded-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                        One Cikan
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{category.icon}</span>
                    <h3
                      className="text-lg font-semibold text-white group-hover:text-[#2C5364] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-[#888] text-[12px] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {category.subtitle}
                  </p>

                  <p className="text-[#555] text-[13px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {category.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-[#444] group-hover:text-[#2C5364] transition-all duration-300">
                    <span className="text-[11px] font-medium tracking-[0.08em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Incele
                    </span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
