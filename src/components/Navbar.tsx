"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// =============================================
// Navigasyon Çubuğu - Kartvizit Tarzı
// Saf siyah zemin + ince altın çizgi kenarlık
// Keskin, minimal, lüks hissi
// =============================================

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#kategoriler", label: "Ürünler" },
  { href: "#neden-biz", label: "Neden Biz?" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Navbar container - Altın alt çizgi ile */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-sm border-b border-[#C9A84C]/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Altın daire içinde monogram (kartvizit tarzı) */}
            <a
              href="#anasayfa"
              className="flex items-center gap-4 cursor-pointer group"
            >
              {/* Altın kenarlıklı daire logo */}
              <div className="relative w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center group-hover:border-[#D4AF37] transition-colors duration-300">
                <span className="text-[#C9A84C] font-bold text-lg font-[Cormorant,serif] group-hover:text-[#D4AF37] transition-colors duration-300">
                  M
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold text-white font-[Cormorant,serif] tracking-[0.05em] leading-tight">
                  MERKEZ TEDARİK
                </span>
                {/* İnce altın ayırıcı çizgi */}
                <div className="w-full h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-1 mb-0.5" />
                <span className="text-[9px] text-[#C9A84C] tracking-[0.25em] uppercase font-[Montserrat,sans-serif] leading-tight">
                  Toptan Tedarik
                </span>
              </div>
            </a>

            {/* Masaüstü navigasyon */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-[#888888] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer tracking-[0.05em] uppercase font-[Montserrat,sans-serif]"
                >
                  {link.label}
                </a>
              ))}
              {/* CTA - Altın kenarlıklı buton */}
              <a
                href="#iletisim"
                className="px-6 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-300 cursor-pointer font-[Montserrat,sans-serif]"
              >
                Teklif Alın
              </a>
            </div>

            {/* Mobil menü butonu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#C9A84C] cursor-pointer w-11 h-11 flex items-center justify-center"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-sm border-b border-[#C9A84C]/20"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm font-medium text-[#888888] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer py-3 tracking-[0.05em] uppercase font-[Montserrat,sans-serif] border-b border-white/[0.04] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={handleLinkClick}
                className="mt-4 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold tracking-[0.1em] uppercase text-center cursor-pointer font-[Montserrat,sans-serif] hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
              >
                Teklif Alın
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
