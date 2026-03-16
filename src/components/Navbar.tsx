"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#urunler", label: "Koleksiyon" },
  { href: "#hakkimizda", label: "Hakkimizda" },
  { href: "#iletisim", label: "Iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-700 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#anasayfa" className="group flex items-center gap-3">
              <div className="relative">
                <span className="text-[22px] font-bold text-white tracking-[-0.02em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  MERKEZ
                </span>
                <span className="text-[22px] font-light text-[#2C5364] tracking-[-0.02em] ml-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  TEDARIK
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium text-[#666] hover:text-white transition-colors duration-300 tracking-[0.05em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#iletisim"
                className="group flex items-center gap-2 px-6 py-2.5 bg-white text-[#0a0a0a] text-[12px] font-semibold tracking-[0.08em] uppercase hover:bg-[#2C5364] transition-all duration-300 rounded-full"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Teklif Al
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
              aria-label={mobileOpen ? "Menuyu kapat" : "Menuyu ac"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.04] overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[15px] text-[#999] hover:text-white py-4 border-b border-white/[0.04] last:border-0 transition-colors duration-200 tracking-[0.03em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setMobileOpen(false)}
                className="mt-6 py-3.5 bg-white text-[#0a0a0a] text-[13px] font-semibold tracking-[0.08em] uppercase text-center rounded-full hover:bg-[#2C5364] transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Teklif Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
