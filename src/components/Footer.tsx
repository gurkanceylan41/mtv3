"use client";

import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Koleksiyon", href: "#urunler" },
  { label: "Hakkimizda", href: "#hakkimizda" },
  { label: "Iletisim", href: "#iletisim" },
];

const categoryLinks = [
  { label: "Oyuncaklar", href: "#urunler" },
  { label: "Cocuk Koruma", href: "#urunler" },
  { label: "Strec Film", href: "#urunler" },
  { label: "Ambalaj Malzemeleri", href: "#urunler" },
  { label: "Ev & Mutfak", href: "#urunler" },
  { label: "Tekstil", href: "#urunler" },
  { label: "Kirtasiye & Ofis", href: "#urunler" },
  { label: "Elektronik Aksesuar", href: "#urunler" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[20px] font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                MERKEZ
              </span>
              <span className="text-[20px] font-light text-[#2C5364]" style={{ fontFamily: "'Playfair Display', serif" }}>
                TEDARIK
              </span>
            </div>
            <p className="text-[#555] text-[13px] leading-[1.8] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Dunyadan secilmis urunleri toptan fiyatlarla, tek bir merkezden tedarik edin. Kalite ve guvenin adresi.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#555] hover:text-[#2C5364] hover:border-[#2C5364]/20 transition-all duration-300"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hizli Baglantilar
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555] text-[13px] hover:text-white transition-colors duration-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kategoriler
            </h4>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555] text-[13px] hover:text-white transition-colors duration-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Iletisim
            </h4>
            <div className="space-y-4 text-[13px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div>
                <div className="text-[#444] text-[10px] mb-1 tracking-[0.1em] uppercase">Adres</div>
                <div className="text-[#888]">Istanbul, Turkiye</div>
              </div>
              <div>
                <div className="text-[#444] text-[10px] mb-1 tracking-[0.1em] uppercase">Telefon</div>
                <a href="tel:+902125550000" className="text-[#888] hover:text-white transition-colors duration-200">
                  +90 (212) 555 00 00
                </a>
              </div>
              <div>
                <div className="text-[#444] text-[10px] mb-1 tracking-[0.1em] uppercase">E-posta</div>
                <a href="mailto:info@merkeztedarik.com" className="text-[#888] hover:text-white transition-colors duration-200">
                  info@merkeztedarik.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-[12px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            &copy; {new Date().getFullYear()} Merkez Tedarik. Tum haklari saklidir.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#555] text-[12px] hover:text-white transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
            aria-label="Sayfanin basina don"
          >
            Basa Don
            <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#2C5364]/20 transition-all duration-300">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
