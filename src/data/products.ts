// =============================================
// Merkez Tedarik - Ürün & Kategori Verileri
// Tüm ürün ve kategori bilgileri bu dosyada toplanmıştır.
// =============================================

// ---------- Tipler ----------

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  stats: { products: number; brands: number };
  featured: boolean;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  minOrder: number;
  tag: string | null;
}

// ---------- Kategoriler ----------

export const categories: Category[] = [
  {
    id: "oyuncaklar",
    title: "Oyuncaklar",
    subtitle: "Çocuklar için Güvenli & Eğlenceli",
    description:
      "CE sertifikalı, güvenlik standartlarına uygun ithal oyuncaklar. Eğitici oyuncaklardan peluşlara, yapı bloklarından uzaktan kumandalı araçlara kadar geniş ürün yelpazesi.",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&h=600&fit=crop",
    icon: "🧸",
    color: "from-pink-500 to-rose-500",
    stats: { products: 150, brands: 25 },
    featured: true,
  },
  {
    id: "cocuk-guvenlik",
    title: "Çocuk Koruma Malzemeleri",
    subtitle: "Güvenlik Her Şeyden Önce",
    description:
      "Bebek güvenlik kilitleri, köşe koruyucular, parmak koruyucular, priz koruma ve daha fazlası. Evinizi çocuklar için güvenli hale getirin.",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/d5db7203-1618-4734-92c3-74ecb1e63246-fc5-20.jpg",
    icon: "🛡️",
    color: "from-emerald-500 to-teal-500",
    stats: { products: 102, brands: 2 },
    featured: true,
  },
  {
    id: "strec-film",
    title: "Streç Filmler",
    subtitle: "Endüstriyel & Gıda Ambalaj",
    description:
      "Makine tipi, el tipi ve gıda sertifikalı streç filmler. Yüksek kalite, dayanıklılık ve ekonomik fiyatlarla ambalaj çözümleri.",
    image: "/products/otomatik.jpg",
    icon: "📦",
    color: "from-blue-500 to-indigo-500",
    stats: { products: 3, brands: 1 },
    featured: true,
  },
  {
    id: "ambalaj",
    title: "Ambalaj Malzemeleri",
    subtitle: "Profesyonel Paketleme Çözümleri",
    description:
      "Karton kutular, balonlu naylon, kraft kağıt, bantlar ve paketleme malzemeleri. E-ticaret ve endüstriyel kullanım için ideal.",
    image:
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=800&h=600&fit=crop",
    icon: "🎁",
    color: "from-amber-500 to-orange-500",
    stats: { products: 120, brands: 20 },
    featured: false,
  },
  {
    id: "ev-mutfak",
    title: "Ev & Mutfak Ürünleri",
    subtitle: "Pratik Yaşam Çözümleri",
    description:
      "Mutfak organizatörleri, saklama kapları, temizlik malzemeleri ve ev düzenleme ürünleri. Yaşam alanlarınız için fonksiyonel çözümler.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    icon: "🏠",
    color: "from-cyan-500 to-blue-500",
    stats: { products: 200, brands: 30 },
    featured: false,
  },
  {
    id: "tekstil",
    title: "Tekstil Ürünleri",
    subtitle: "Kaliteli Kumaş & Aksesuarlar",
    description:
      "İthal kumaşlar, ev tekstili, havlu setleri ve tekstil aksesuarları. Toptan ve perakende satış için uygun fiyatlı seçenekler.",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    icon: "🧵",
    color: "from-violet-500 to-purple-500",
    stats: { products: 180, brands: 35 },
    featured: false,
  },
  {
    id: "kirtasiye",
    title: "Kırtasiye & Ofis",
    subtitle: "İş ve Okul Malzemeleri",
    description:
      "Defterler, kalemler, dosyalar, ofis organizatörleri ve okul malzemeleri. Toplu alımlarda özel fiyatlar.",
    image:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&h=600&fit=crop",
    icon: "✏️",
    color: "from-red-500 to-pink-500",
    stats: { products: 250, brands: 40 },
    featured: false,
  },
  {
    id: "elektronik-aksesuar",
    title: "Elektronik Aksesuarlar",
    subtitle: "Teknoloji Yan Ürünleri",
    description:
      "Telefon kılıfları, şarj kabloları, kulaklıklar ve teknoloji aksesuarları. Uyumlu ve kaliteli ithal ürünler.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    icon: "📱",
    color: "from-slate-600 to-slate-800",
    stats: { products: 300, brands: 50 },
    featured: false,
  },
];

// ---------- Oyuncak Ürünleri ----------

export const toyProducts: Product[] = [
  {
    id: "toy-1",
    title: "Eğitici Yapı Blokları Seti",
    category: "oyuncaklar",
    subcategory: "Eğitici Oyuncaklar",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
    description:
      "500 parçalık renkli yapı blokları seti. Yaratıcılığı ve motor becerilerini geliştirir.",
    features: ["CE Sertifikalı", "BPA İçermez", "3+ Yaş", "500 Parça"],
    minOrder: 50,
    tag: "En Çok Satan",
  },
  {
    id: "toy-2",
    title: "Peluş Oyuncak Koleksiyonu",
    category: "oyuncaklar",
    subcategory: "Peluş Oyuncaklar",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&h=400&fit=crop",
    description:
      "Yumuşak ve sevimli peluş hayvan koleksiyonu. Antibakteriyel dolgu malzemesi.",
    features: ["Antibakteriyel", "Yıkanabilir", "0+ Yaş", "Çeşitli Boyutlar"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "toy-3",
    title: "Uzaktan Kumandalı Araba",
    category: "oyuncaklar",
    subcategory: "RC Oyuncaklar",
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=400&fit=crop",
    description:
      "Şarj edilebilir, yüksek hızlı uzaktan kumandalı yarış arabası.",
    features: ["Şarj Edilebilir", "30m Menzil", "6+ Yaş", "LED Işıklar"],
    minOrder: 30,
    tag: "Yeni",
  },
  {
    id: "toy-4",
    title: "Ahşap Puzzle Seti",
    category: "oyuncaklar",
    subcategory: "Puzzle & Bulmacalar",
    image:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=600&h=400&fit=crop",
    description: "Doğal ahşaptan üretilmiş eğitici puzzle seti. 6 farklı tema.",
    features: ["Doğal Ahşap", "Toksik Değil", "2+ Yaş", "6 Farklı Puzzle"],
    minOrder: 80,
    tag: null,
  },
  {
    id: "toy-5",
    title: "Bebek Çıngırak Seti",
    category: "oyuncaklar",
    subcategory: "Bebek Oyuncakları",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
    description:
      "Renkli ve sesli bebek çıngırak seti. Duyusal gelişimi destekler.",
    features: ["BPA İçermez", "Dişlik Özellikli", "0+ Ay", "5 Parça Set"],
    minOrder: 150,
    tag: "Sertifikalı",
  },
  {
    id: "toy-6",
    title: "Barbie Bebek Seti",
    category: "oyuncaklar",
    subcategory: "Bebekler",
    image:
      "https://images.unsplash.com/photo-1613682988402-a12e5e158d42?w=600&h=400&fit=crop",
    description:
      "Aksesuarlı moda bebek seti. Kıyafet ve aksesuar koleksiyonu dahil.",
    features: ["Orijinal Lisans", "Aksesuar Dahil", "3+ Yaş", "Premium Kalite"],
    minOrder: 40,
    tag: "Lisanslı",
  },
];

// ---------- Çocuk Koruma Ürünleri (Eduland) ----------

export const safetyProducts: Product[] = [
  // KÖŞE KORUYUCULAR
  {
    id: "edu-1",
    title: "4'lü Jumbo V Tipi Beyaz Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/1.jpg",
    images: ["/products/koruma/1.jpg", "/products/koruma/2.jpg", "/products/koruma/3.jpg", "/products/koruma/4.jpg"],
    description:
      "4'lü Jumbo V Tipi Beyaz Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Beyaz Renk", "4 Adet"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-2",
    title: "4'lü Ekstrem V Tipi Gri Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/5.png",
    images: ["/products/koruma/5.png", "/products/koruma/6.webp"],
    description:
      "4'lü Ekstrem V Tipi Gri Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Ekstrem Dayanıklı", "V Profil", "Gri Renk", "4 Adet"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-3",
    title: "4'lü Jumbo V Tipi Krem Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/7.jpg",
    images: ["/products/koruma/7.jpg", "/products/koruma/8.jpg"],
    description:
      "4'lü Jumbo V Tipi Krem Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Krem Renk", "4 Adet"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-4",
    title: "4'lü Jumbo V Tipi Gri Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/9.jpg",
    images: ["/products/koruma/9.jpg"],
    description:
      "4'lü Jumbo V Tipi Gri Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Gri Renk", "4 Adet"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-5",
    title: "4'lü Jumbo V Tipi Siyah Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/10.jpg",
    images: ["/products/koruma/10.jpg", "/products/koruma/11.jpg"],
    description:
      "4'lü Jumbo V Tipi Siyah Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Siyah Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-6",
    title: "4'lü Jumbo V Tipi Kahverengi Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/12.jpg",
    images: ["/products/koruma/12.jpg", "/products/koruma/13.jpg"],
    description:
      "4'lü Jumbo V Tipi Kahverengi Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Kahverengi Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-7",
    title: "4'lü V Tipi Pembe Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/14.webp",
    images: ["/products/koruma/14.webp", "/products/koruma/15.jpg"],
    description:
      "4'lü V Tipi Pembe Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["V Profil", "Pembe Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-8",
    title: "4'lü V Tipi Krem Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/16.jpg",
    images: ["/products/koruma/16.jpg"],
    description:
      "4'lü V Tipi Krem Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["V Profil", "Krem Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-9",
    title: "4'lü V Tipi Siyah Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/17.jpg",
    images: ["/products/koruma/17.jpg", "/products/koruma/18.jpg"],
    description:
      "4'lü V Tipi Siyah Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["V Profil", "Siyah Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-10",
    title: "4'lü U Tipi Krem Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/19.webp",
    images: ["/products/koruma/19.webp", "/products/koruma/20.jpg", "/products/koruma/21.webp"],
    description:
      "4'lü U Tipi Krem Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["U Profil", "Krem Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-11",
    title: "4'lü U Tipi Kahverengi Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/22.webp",
    images: ["/products/koruma/22.webp", "/products/koruma/23.jpg", "/products/koruma/24.webp"],
    description:
      "4'lü U Tipi Kahverengi Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["U Profil", "Kahverengi Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-12",
    title: "4'lü XXL Jumbo V Tipi Kırmızı Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/25.jpg",
    images: ["/products/koruma/25.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Kırmızı Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Kırmızı Renk", "4 Adet"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-13",
    title: "4'lü XXL Jumbo V Tipi Sarı Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/26.jpg",
    images: ["/products/koruma/26.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Sarı Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Sarı Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-14",
    title: "4'lü XXL Jumbo V Tipi Yeşil Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/27.jpg",
    images: ["/products/koruma/27.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Yeşil Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Yeşil Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-15",
    title: "4'lü XXL Jumbo V Tipi Mavi Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/28.jpg",
    images: ["/products/koruma/28.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Mavi Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Mavi Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-16",
    title: "4'lü 3 Açılı Silikon Gri Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/29.webp",
    images: ["/products/koruma/29.webp", "/products/koruma/30.webp", "/products/koruma/31.webp"],
    description:
      "4'lü 3 Açılı Silikon Gri Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Gri Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-17",
    title: "4'lü Silikon Oluklu Şeffaf Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/32.jpg",
    images: ["/products/koruma/32.jpg", "/products/koruma/33.jpg", "/products/koruma/34.jpg"],
    description:
      "4'lü Silikon Oluklu Şeffaf Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Şeffaf Tasarım", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-18",
    title: "4'lü Silikon V Tipi Şeffaf Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/35.webp",
    images: ["/products/koruma/35.webp", "/products/koruma/36.webp"],
    description:
      "4'lü Silikon V Tipi Şeffaf Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "V Profil", "Şeffaf Tasarım", "4 Adet"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-19",
    title: "4'lü Silikon Şeffaf Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/37.webp",
    images: ["/products/koruma/37.webp", "/products/koruma/38.webp"],
    description:
      "4'lü Silikon Şeffaf Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Şeffaf Tasarım", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-20",
    title: "Sevimli Silikon Köşe Koruyucu – Beyaz / Yeşil / Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/39.jpg",
    images: ["/products/koruma/39.jpg", "/products/koruma/40.webp", "/products/koruma/41.jpg"],
    description:
      "Silikon Sevimli Beyaz Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Beyaz Renk", "Kolay Montaj", "Güçlü Yapışkan"],
    minOrder: 100,
    tag: "Premium",
  },

  // KÖŞE-KENAR KORUYUCU SETLER
  {
    id: "edu-21",
    title: "Ekstrem 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/42.webp",
    images: ["/products/koruma/42.webp", "/products/koruma/43.webp", "/products/koruma/44.webp"],
    description:
      "Ekstrem 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Ekstrem Dayanıklı", "Gri Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-22",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/45.webp",
    images: ["/products/koruma/45.webp"],
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Gri Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-23",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/46.webp",
    images: ["/products/koruma/46.webp", "/products/koruma/47.webp", "/products/koruma/48.webp"],
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Krem. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Krem Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-24",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/49.jpg",
    images: ["/products/koruma/49.jpg", "/products/koruma/50.jpg"],
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Kahverengi. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Kahverengi Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-25",
    title: "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/51.webp",
    images: ["/products/koruma/51.webp", "/products/koruma/52.webp", "/products/koruma/53.webp"],
    description:
      "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Kahverengi. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Slim Profil", "Kahverengi Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: "Yeni",
  },
];

// ---------- Streç Film Ürünleri ----------

export const strecProducts: Product[] = [
  {
    id: "strec-1",
    title: "Makine Tipi Streç Film 500mm",
    category: "strec-film",
    subcategory: "Makine Tipi",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "500mm genişlik, 23 mikron kalınlık. Yüksek gerilme dayanımı ile endüstriyel paketleme için ideal.",
    features: ["500mm Genişlik", "23 Mikron", "Şeffaf", "Makine Uyumlu"],
    minOrder: 50,
    tag: "En Çok Satan",
  },
  {
    id: "strec-2",
    title: "El Tipi Streç Film 300mm",
    category: "strec-film",
    subcategory: "El Tipi",
    image: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=600&h=400&fit=crop",
    description: "300mm genişlik, el ile sarıma uygun. Depo ve kargo paketleme için pratik çözüm.",
    features: ["300mm Genişlik", "17 Mikron", "Ergonomik", "Ekonomik"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "strec-3",
    title: "Gıda Tipi Streç Film",
    category: "strec-film",
    subcategory: "Gıda Tipi",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&h=400&fit=crop",
    description: "Gıda sertifikalı, BPA içermeyen streç film. Mutfak ve gıda sektörü için güvenli.",
    features: ["Gıda Sertifikalı", "BPA İçermez", "Kesme Bıçaklı", "30cm"],
    minOrder: 200,
    tag: "Sertifikalı",
  },
];

// ---------- Ambalaj Ürünleri ----------

export const ambalajProducts: Product[] = [
  {
    id: "amb-1",
    title: "Balonlu Ambalaj Naylonu",
    category: "ambalaj",
    subcategory: "Koruyucu Ambalaj",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    description: "Kırılgan ürünlerin güvenli taşınması için balonlu naylon. Farklı boyut seçenekleri.",
    features: ["50cm x 100m", "Şeffaf", "Dayanıklı", "Çok Amaçlı"],
    minOrder: 30,
    tag: "Popüler",
  },
  {
    id: "amb-2",
    title: "Kraft Kargo Kutusu Seti",
    category: "ambalaj",
    subcategory: "Karton Kutu",
    image: "https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?w=600&h=400&fit=crop",
    description: "E-ticaret gönderileri için kraft karton kutular. 5 farklı boyut seçeneği.",
    features: ["5 Boyut", "Kraft Karton", "Baskısız", "Katlanabilir"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "amb-3",
    title: "Koli Bandı Şeffaf 45mm",
    category: "ambalaj",
    subcategory: "Bant & Yapıştırıcı",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    description: "45mm genişlik, 100m uzunluk. Güçlü yapışma, kolay kesim.",
    features: ["45mm x 100m", "Şeffaf", "Güçlü Yapışma", "6'lı Paket"],
    minOrder: 50,
    tag: null,
  },
  {
    id: "amb-4",
    title: "Kraft Kağıt Dolgu Malzemesi",
    category: "ambalaj",
    subcategory: "Dolgu Malzemesi",
    image: "https://images.unsplash.com/photo-1605004515689-32a331e20a27?w=600&h=400&fit=crop",
    description: "Geri dönüştürülebilir kraft kağıt dolgu. Kırılgan ürün paketlemede koruma sağlar.",
    features: ["Geri Dönüşümlü", "Kraft Kağıt", "Rulo", "Çevre Dostu"],
    minOrder: 40,
    tag: "Yeni",
  },
];

// ---------- Ev & Mutfak Ürünleri ----------

export const evMutfakProducts: Product[] = [
  {
    id: "ev-1",
    title: "Bambu Mutfak Düzenleyici Set",
    category: "ev-mutfak",
    subcategory: "Mutfak Organizasyon",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    description: "Doğal bambudan üretilmiş mutfak düzenleyici set. Çekmece ve tezgah organizasyonu.",
    features: ["Doğal Bambu", "5 Parça", "Su Geçirmez", "Kolay Temizlik"],
    minOrder: 50,
    tag: "En Çok Satan",
  },
  {
    id: "ev-2",
    title: "Cam Saklama Kabı Seti",
    category: "ev-mutfak",
    subcategory: "Saklama Kapları",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop",
    description: "Borosilikat cam saklama kapları. Fırın ve mikrodalga uyumlu, sızdırmaz kapak.",
    features: ["Borosilikat Cam", "Sızdırmaz", "Fırın Uyumlu", "8 Parça"],
    minOrder: 40,
    tag: "Popüler",
  },
  {
    id: "ev-3",
    title: "Silikon Mutfak Gereçleri Seti",
    category: "ev-mutfak",
    subcategory: "Mutfak Gereçleri",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=400&fit=crop",
    description: "Isıya dayanıklı silikon mutfak gereçleri. Yapışmaz tava uyumlu, 12 parça set.",
    features: ["Silikon", "Isıya Dayanıklı", "12 Parça", "BPA İçermez"],
    minOrder: 60,
    tag: "Yeni",
  },
  {
    id: "ev-4",
    title: "Paslanmaz Çelik Çöp Kovası",
    category: "ev-mutfak",
    subcategory: "Ev Gereçleri",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop",
    description: "Sensörlü paslanmaz çelik çöp kovası. Parmak izi bırakmaz kaplama, 30L kapasite.",
    features: ["Sensörlü", "30 Litre", "Paslanmaz Çelik", "Sessiz Kapak"],
    minOrder: 20,
    tag: null,
  },
];

// ---------- Tekstil Ürünleri ----------

export const tekstilProducts: Product[] = [
  {
    id: "teks-1",
    title: "Pamuklu Havlu Seti",
    category: "tekstil",
    subcategory: "Havlu & Bornoz",
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=600&h=400&fit=crop",
    description: "100% pamuk, 500gr/m² ağırlık. Banyo ve otel kullanımına uygun premium havlu seti.",
    features: ["100% Pamuk", "500gr/m²", "6 Parça", "Çeşitli Renkler"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "teks-2",
    title: "Mikrofiber Temizlik Bezi Seti",
    category: "tekstil",
    subcategory: "Temizlik Tekstili",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
    description: "Yüksek emicilik, çizik bırakmaz. Ev ve profesyonel temizlik için ideal.",
    features: ["Mikrofiber", "40x40cm", "10'lu Paket", "Yıkanabilir"],
    minOrder: 200,
    tag: "Popüler",
  },
  {
    id: "teks-3",
    title: "Dekoratif Yastık Kılıfı Seti",
    category: "tekstil",
    subcategory: "Ev Tekstili",
    image: "https://images.unsplash.com/photo-1629949009765-40b601881f73?w=600&h=400&fit=crop",
    description: "Kadife kumaş dekoratif yastık kılıfları. Modern tasarım, fermuarlı.",
    features: ["Kadife Kumaş", "45x45cm", "Fermuarlı", "4'lü Set"],
    minOrder: 80,
    tag: "Yeni",
  },
  {
    id: "teks-4",
    title: "Otel Tipi Nevresim Takımı",
    category: "tekstil",
    subcategory: "Nevresim & Çarşaf",
    image: "https://images.unsplash.com/photo-1631049035634-c1d5e5f5f5c5?w=600&h=400&fit=crop",
    description: "200 iplik sayısı, saten dokuma. Otel ve konaklama sektörü için premium kalite.",
    features: ["200 İplik", "Saten Dokuma", "Çift Kişilik", "Beyaz"],
    minOrder: 30,
    tag: null,
  },
];

// ---------- Kırtasiye & Ofis Ürünleri ----------

export const kirtasiyeProducts: Product[] = [
  {
    id: "kirt-1",
    title: "Kraft Defter Seti A5",
    category: "kirtasiye",
    subcategory: "Defterler",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=400&fit=crop",
    description: "A5 boyut, 80 yaprak kraft kapak defter. Çizgili, kareli ve çizgisiz seçenekler.",
    features: ["A5 Boyut", "80 Yaprak", "Kraft Kapak", "3'lü Set"],
    minOrder: 200,
    tag: "En Çok Satan",
  },
  {
    id: "kirt-2",
    title: "Renkli Tükenmez Kalem Seti",
    category: "kirtasiye",
    subcategory: "Kalemler",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&h=400&fit=crop",
    description: "12 renk tükenmez kalem seti. Ergonomik tutma, akıcı mürekkep.",
    features: ["12 Renk", "0.7mm Uç", "Ergonomik", "Plastik Kutu"],
    minOrder: 150,
    tag: "Popüler",
  },
  {
    id: "kirt-3",
    title: "Masaüstü Organizatör",
    category: "kirtasiye",
    subcategory: "Ofis Malzemeleri",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
    description: "Ahşap masaüstü düzenleyici. Kalemlik, telefon standı ve not kağıdı bölmesi.",
    features: ["Ahşap", "5 Bölme", "Kompakt", "Montaj Gerektirmez"],
    minOrder: 50,
    tag: "Yeni",
  },
  {
    id: "kirt-4",
    title: "Yapışkanlı Not Kağıdı Seti",
    category: "kirtasiye",
    subcategory: "Not & Etiket",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    description: "Neon renkli yapışkanlı not kağıtları. 76x76mm, 12'li paket.",
    features: ["76x76mm", "12 Blok", "Neon Renkler", "100 Yaprak/Blok"],
    minOrder: 100,
    tag: null,
  },
];

// ---------- Elektronik Aksesuar Ürünleri ----------

export const elektronikProducts: Product[] = [
  {
    id: "elek-1",
    title: "USB-C Hızlı Şarj Kablosu",
    category: "elektronik-aksesuar",
    subcategory: "Şarj & Kablo",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    description: "USB-C to USB-C, 65W hızlı şarj destekli. 1.5m uzunluk, örgülü kablo.",
    features: ["USB-C", "65W", "1.5 Metre", "Örgülü"],
    minOrder: 200,
    tag: "En Çok Satan",
  },
  {
    id: "elek-2",
    title: "Kablosuz Bluetooth Kulaklık",
    category: "elektronik-aksesuar",
    subcategory: "Kulaklık & Ses",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    description: "Bluetooth 5.3, aktif gürültü engelleme. 30 saat pil ömrü.",
    features: ["Bluetooth 5.3", "ANC", "30 Saat Pil", "Katlanabilir"],
    minOrder: 50,
    tag: "Popüler",
  },
  {
    id: "elek-3",
    title: "Telefon Kılıfı Silikon",
    category: "elektronik-aksesuar",
    subcategory: "Telefon Aksesuarları",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop",
    description: "Darbe emici silikon kılıf. iPhone ve Samsung modelleri için uyumlu.",
    features: ["Silikon", "Darbe Emici", "Şeffaf", "Çoklu Model"],
    minOrder: 300,
    tag: "Yeni",
  },
  {
    id: "elek-4",
    title: "Taşınabilir Powerbank 20000mAh",
    category: "elektronik-aksesuar",
    subcategory: "Şarj & Kablo",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=400&fit=crop",
    description: "20000mAh kapasite, çift USB çıkış. LED gösterge, hızlı şarj destekli.",
    features: ["20000mAh", "Çift USB", "LED Gösterge", "18W Hızlı Şarj"],
    minOrder: 30,
    tag: "Premium",
  },
];

// ---------- Tüm Ürünler (birleşik) ----------

export const allProducts: Product[] = [
  ...toyProducts,
  ...safetyProducts,
  ...strecProducts,
  ...ambalajProducts,
  ...evMutfakProducts,
  ...tekstilProducts,
  ...kirtasiyeProducts,
  ...elektronikProducts,
];

// ---------- Yardımcı Fonksiyonlar ----------

export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts.filter((p) => p.category === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getFilterOptions(): string[] {
  return ["Tümü", ...categories.map((c) => c.title)];
}
