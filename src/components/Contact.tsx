"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

// =============================================
// İletişim Bölümü - Kartvizit Tarzı
// Siyah zemin + altın kenarlıklı form alanları
// Keskin köşeler, lüks altın vurgular
// Başarı durumunda zarif animasyon
// =============================================

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+90 (212) 555 00 00", href: "tel:+902125550000" },
  { icon: Mail, label: "E-posta", value: "info@merkeztedarik.com", href: "mailto:info@merkeztedarik.com" },
  { icon: MapPin, label: "Adres", value: "İstanbul, Türkiye", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // Ortak input stili - Kartvizit estetiği
  const inputClasses =
    "w-full px-4 py-3.5 bg-black border border-[#C9A84C]/15 text-white placeholder-[#444444] focus:border-[#C9A84C]/50 outline-none transition-all duration-200 text-sm font-[Montserrat,sans-serif]";

  return (
    <section id="iletisim" className="relative py-24 md:py-32 px-6">
      {/* Üst altın çizgi */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Bölüm başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]/40" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] font-[Montserrat,sans-serif]">
              İletişim
            </span>
            <div className="w-12 h-px bg-[#C9A84C]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hemen <span className="text-[#C9A84C]">Teklif Alın</span>
          </h2>
          <p className="text-[#888888] text-base max-w-2xl mx-auto font-[Montserrat,sans-serif]">
            Toptan alım için en uygun fiyat teklifimizi hemen alın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative bg-[#0A0A0A] border border-[#C9A84C]/10 p-8 md:p-10">
              {/* Köşe dekorasyonları */}
              <div className="absolute top-0 left-0 w-8 h-px bg-[#C9A84C]/50" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#C9A84C]/50" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#C9A84C]/50" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#C9A84C]/50" />

              {/* Başarı overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#0A0A0A]/98 flex flex-col items-center justify-center z-10"
                >
                  <CheckCircle2 size={40} className="text-[#C9A84C] mb-4" strokeWidth={1.2} />
                  <p className="text-white text-lg font-semibold font-[Cormorant,serif] tracking-wide">
                    Mesajınız Gönderildi
                  </p>
                  <div className="w-8 h-px bg-[#C9A84C]/30 my-3" />
                  <p className="text-[#888888] text-sm font-[Montserrat,sans-serif]">
                    En kısa sürede iletişime geçeceğiz.
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-medium text-[#C9A84C]/60 mb-2 tracking-[0.15em] uppercase font-[Montserrat,sans-serif]">
                    Ad Soyad
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Adınızı girin" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-medium text-[#C9A84C]/60 mb-2 tracking-[0.15em] uppercase font-[Montserrat,sans-serif]">
                    E-posta
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="ornek@email.com" className={inputClasses} />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block text-[10px] font-medium text-[#C9A84C]/60 mb-2 tracking-[0.15em] uppercase font-[Montserrat,sans-serif]">
                  Telefon
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+90 (5XX) XXX XX XX" className={inputClasses} />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-[10px] font-medium text-[#C9A84C]/60 mb-2 tracking-[0.15em] uppercase font-[Montserrat,sans-serif]">
                  Mesajınız
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Ürünler hakkında bilgi verin..." className={`${inputClasses} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#C9A84C] text-black font-semibold tracking-[0.1em] uppercase hover:bg-[#D4AF37] transition-colors duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-[13px] font-[Montserrat,sans-serif]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    Teklif Talep Et
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* İletişim bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a key={info.label} href={info.href}
                  className="group flex items-center gap-4 bg-[#0A0A0A] border border-[#C9A84C]/10 p-6 hover:border-[#C9A84C]/30 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 group-hover:border-[#C9A84C]/40 transition-colors duration-300">
                    <Icon size={18} className="text-[#C9A84C]" strokeWidth={1.2} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#555555] mb-1 tracking-[0.15em] uppercase font-[Montserrat,sans-serif]">{info.label}</div>
                    <div className="text-white text-sm font-[Montserrat,sans-serif]">{info.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Çalışma saatleri */}
            <div className="bg-[#0A0A0A] border border-[#C9A84C]/10 p-6 mt-auto">
              <h4 className="text-white font-bold mb-4 font-[Cormorant,serif] text-lg tracking-wide">
                Çalışma Saatleri
              </h4>
              <div className="w-6 h-px bg-[#C9A84C]/30 mb-4" />
              <div className="space-y-3 text-sm font-[Montserrat,sans-serif]">
                <div className="flex justify-between"><span className="text-[#555555]">Pazartesi - Cuma</span><span className="text-[#C9A84C]">09:00 - 18:00</span></div>
                <div className="flex justify-between"><span className="text-[#555555]">Cumartesi</span><span className="text-[#C9A84C]">09:00 - 14:00</span></div>
                <div className="flex justify-between"><span className="text-[#555555]">Pazar</span><span className="text-[#555555]">Kapalı</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
