"use client";

import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

// =============================================
// Footer - Kartvizit Tarzı
// Saf siyah zemin + altın çizgi ayırıcılar
// Keskin geometrik detaylar, minimal altın vurgular
// =============================================

const quickLinks = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Ürünler", href: "#kategoriler" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "İletişim", href: "#iletisim" },
];

const categoryLinks = [
  { label: "Streç Film", href: "#kategoriler" },
  { label: "Çocuk Koruma Ürünleri", href: "#kategoriler" },
  { label: "Elektronik Aksesuarlar", href: "#kategoriler" },
  { label: "Oyuncaklar", href: "#kategoriler" },
  { label: "Kırtasiye & Ofis", href: "#kategoriler" },
  { label: "Ambalaj Malzemeleri", href: "#kategoriler" },
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
    <footer className="relative bg-black border-t border-[#C9A84C]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Şirket bilgileri */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-lg font-[Cormorant,serif]">M</span>
              </div>
              <div>
                <span className="text-base font-semibold text-white font-[Cormorant,serif] tracking-[0.05em] block leading-tight">
                  MERKEZ TEDARİK
                </span>
                <div className="w-full h-px bg-gradient-to-r from-[#C9A84C]/40 to-transparent mt-1 mb-0.5" />
                <span className="text-[9px] text-[#C9A84C]/60 tracking-[0.2em] uppercase font-[Montserrat,sans-serif]">
                  Toptan Tedarik & İthalat
                </span>
              </div>
            </div>
            <p className="text-[#555555] text-sm leading-[1.8] mb-6 font-[Montserrat,sans-serif]">
              Tüm ürünlerinizi tek bir merkezden tedarik edin. Toptan fiyat avantajı ile kaliteli ürünlere ulaşın.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label}
                    className="w-9 h-9 border border-[#C9A84C]/15 flex items-center justify-center text-[#555555] hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all duration-200 cursor-pointer">
                    <Icon size={15} strokeWidth={1.2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hızlı bağlantılar */}
          <div>
            <h4 className="text-white font-bold mb-2 font-[Cormorant,serif] text-lg tracking-wide">Hızlı Bağlantılar</h4>
            <div className="w-6 h-px bg-[#C9A84C]/30 mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555555] text-sm hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer font-[Montserrat,sans-serif]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategoriler */}
          <div>
            <h4 className="text-white font-bold mb-2 font-[Cormorant,serif] text-lg tracking-wide">Kategoriler</h4>
            <div className="w-6 h-px bg-[#C9A84C]/30 mb-6" />
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555555] text-sm hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer font-[Montserrat,sans-serif]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-bold mb-2 font-[Cormorant,serif] text-lg tracking-wide">İletişim</h4>
            <div className="w-6 h-px bg-[#C9A84C]/30 mb-6" />
            <div className="space-y-4 text-sm font-[Montserrat,sans-serif]">
              <div>
                <div className="text-[#555555] text-[10px] mb-1 tracking-[0.15em] uppercase">Adres</div>
                <div className="text-[#888888]">İstanbul, Türkiye</div>
              </div>
              <div>
                <div className="text-[#555555] text-[10px] mb-1 tracking-[0.15em] uppercase">Telefon</div>
                <a href="tel:+902125550000" className="text-[#888888] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">
                  +90 (212) 555 00 00
                </a>
              </div>
              <div>
                <div className="text-[#555555] text-[10px] mb-1 tracking-[0.15em] uppercase">E-posta</div>
                <a href="mailto:info@merkeztedarik.com" className="text-[#888888] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">
                  info@merkeztedarik.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt çizgi */}
      <div className="border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555555] text-xs font-[Montserrat,sans-serif]">
            &copy; {new Date().getFullYear()} Merkez Tedarik. Tüm hakları saklıdır.
          </p>
          <button onClick={scrollToTop} className="group flex items-center gap-2 text-[#555555] text-xs hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer font-[Montserrat,sans-serif]" aria-label="Sayfanın başına dön">
            Başa Dön
            <div className="w-7 h-7 border border-[#C9A84C]/15 flex items-center justify-center group-hover:border-[#C9A84C]/40 transition-all duration-200">
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
