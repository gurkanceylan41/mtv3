"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+90 (212) 555 00 00", href: "tel:+902125550000" },
  { icon: Mail, label: "E-posta", value: "info@merkeztedarik.com", href: "mailto:info@merkeztedarik.com" },
  { icon: MapPin, label: "Adres", value: "Istanbul, Turkiye", href: "#" },
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

  const inputClasses =
    "w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder-[#444] focus:border-[#2C5364]/30 focus:bg-white/[0.04] outline-none transition-all duration-300 text-[14px]";

  return (
    <section id="iletisim" className="relative py-28 md:py-40 px-6">
      {/* Top divider */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
            <div className="w-1 h-1 rounded-full bg-[#2C5364]" />
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Iletisim
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hemen<br />
            <span className="text-[#2C5364]">Teklif Alin</span>
          </h2>
          <p className="text-[#666] text-base max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Toptan alim icin en uygun fiyat teklifimizi hemen alin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-10">
              {/* Success overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#111]/98 rounded-2xl flex flex-col items-center justify-center z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-[#2C5364]/10 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-[#2C5364]" strokeWidth={1.5} />
                  </div>
                  <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Mesajiniz Gonderildi
                  </p>
                  <p className="text-[#888] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    En kisa surede iletisime gececegiz.
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium text-[#888] mb-2 tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Ad Soyad
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Adinizi girin" className={inputClasses} style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-[#888] mb-2 tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                    E-posta
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="ornek@email.com" className={inputClasses} style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-[11px] font-medium text-[#888] mb-2 tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Telefon
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+90 (5XX) XXX XX XX" className={inputClasses} style={{ fontFamily: "'Inter', sans-serif" }} />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-[11px] font-medium text-[#888] mb-2 tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Mesajiniz
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Urunler hakkinda bilgi verin..." className={`${inputClasses} resize-none`} style={{ fontFamily: "'Inter', sans-serif" }} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 bg-white text-[#0a0a0a] font-semibold tracking-[0.08em] uppercase rounded-full hover:bg-[#2C5364] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-[13px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                ) : (
                  <>
                    Teklif Talep Et
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-[#2C5364]/20 transition-all duration-300">
                    <Icon size={20} className="text-[#888] group-hover:text-[#2C5364] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-[#555] mb-1 tracking-[0.1em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>{info.label}</div>
                    <div className="text-white text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>{info.value}</div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#333] group-hover:text-[#2C5364] transition-colors duration-300" />
                </a>
              );
            })}

            {/* Working hours */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 mt-auto">
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Calisma Saatleri
              </h4>
              <div className="space-y-3 text-[13px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="flex justify-between">
                  <span className="text-[#555]">Pazartesi - Cuma</span>
                  <span className="text-white">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555]">Cumartesi</span>
                  <span className="text-white">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555]">Pazar</span>
                  <span className="text-[#555]">Kapali</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
