"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3, LayoutGrid, Maximize2 } from "lucide-react";
import Image from "next/image";
import { allProducts, categories, type Product } from "@/data/products";
import ProductModal from "./ProductModal";

const filters = ["Tümü", ...categories.map((c) => c.title)];

// Kategori title -> id eşleştirmesi
const categoryTitleToId = Object.fromEntries(categories.map((c) => [c.title, c.id]));

type ViewMode = "grid" | "large" | "single";

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts: Product[] =
    activeFilter === "Tümü"
      ? allProducts
      : allProducts.filter((p) => p.category === categoryTitleToId[activeFilter]);

  const gridClass =
    viewMode === "grid"
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : viewMode === "large"
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 max-w-2xl mx-auto";

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
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
              <div className="w-1 h-1 rounded-full bg-[#2C5364]" />
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Vitrin
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Secilmis<br />
              <span className="text-[#2C5364]">Urunler</span>
            </h2>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1.5">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === "grid" ? "bg-white/[0.08] text-white" : "text-[#555] hover:text-white"
              }`}
              aria-label="Grid gorunum"
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode("large")}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === "large" ? "bg-white/[0.08] text-white" : "text-[#555] hover:text-white"
              }`}
              aria-label="Buyuk gorunum"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode("single")}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === "single" ? "bg-white/[0.08] text-white" : "text-[#555] hover:text-white"
              }`}
              aria-label="Tekli gorunum"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white text-[#0a0a0a]"
                  : "bg-white/[0.03] border border-white/[0.06] text-[#888] hover:text-white hover:border-white/[0.12]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div layout className={`grid ${gridClass} gap-4`}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product image */}
                <div className={`relative bg-[#111] rounded-2xl overflow-hidden mb-4 ${
                  viewMode === "single" ? "aspect-[4/3]" : viewMode === "large" ? "aspect-[3/4]" : "aspect-square"
                }`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredProduct === product.id ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />

                  {/* Tag */}
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-[#2C5364] text-white text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {product.tag}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`} />
                </div>

                {/* Product info */}
                <div className="px-1">
                  <h3
                    className="text-[15px] font-semibold text-white mb-1 group-hover:text-[#2C5364] transition-colors duration-300 line-clamp-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#666]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {product.subcategory}
                    </span>
                    <span className="text-[11px] text-[#2C5364] font-medium tracking-[0.05em]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Min. {product.minOrder} adet
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product detail modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
