"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Package } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = product?.images ?? (product ? [product.image] : []);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImage(0);
  }, [product]);

  // Keyboard navigation
  useEffect(() => {
    if (!product) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [product, onClose, nextImage, prevImage]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111] border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>

            {/* Image section */}
            <div className="relative w-full md:w-[55%] aspect-square md:aspect-auto md:min-h-[500px] bg-[#0a0a0a] flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-200"
                    aria-label="Onceki gorsel"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-200"
                    aria-label="Sonraki gorsel"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Thumbnails */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          i === currentImage
                            ? "border-[#2C5364] scale-110"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${product.title} - ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white/70 text-[11px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {currentImage + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Info section */}
            <div className="w-full md:w-[45%] p-6 md:p-8 overflow-y-auto">
              {/* Tag */}
              {product.tag && (
                <span className="inline-block px-3 py-1 bg-[#2C5364]/20 text-[#2C5364] text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {product.tag}
                </span>
              )}

              {/* Title */}
              <h2
                className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {product.title}
              </h2>

              {/* Subcategory */}
              <p className="text-[#2C5364] text-[13px] font-medium mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                {product.subcategory}
              </p>

              {/* Description */}
              <p className="text-[#888] text-[14px] leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-white text-[13px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Ozellikler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg text-[#aaa] text-[12px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Min order */}
              <div className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#2C5364]/10 flex items-center justify-center">
                  <Package size={18} className="text-[#2C5364]" />
                </div>
                <div>
                  <p className="text-white text-[13px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Min. Siparis: {product.minOrder} adet
                  </p>
                  <p className="text-[#666] text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Toptan fiyat icin iletisime gecin
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#iletisim"
                onClick={onClose}
                className="block w-full py-3.5 bg-white text-[#0a0a0a] text-[13px] font-semibold tracking-[0.08em] uppercase text-center rounded-full hover:bg-[#2C5364] hover:text-white transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Teklif Al
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
