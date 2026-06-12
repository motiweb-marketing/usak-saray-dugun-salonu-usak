import type { GalleryItem, PackageItem, ServiceItem, TestimonialItem } from "./types";
import { templateImages } from "./assets/images";
import { deployConfig } from "./deploy.config";

export const siteConfig = {
  deploy: deployConfig,

  brand: {
    short: "UŞAK SARAY DÜĞÜN",
    full: "Uşak Saray Düğün Salonu",
    tagline: "Düğün & Etkinlik · Uşak",
  },

  contact: {
    phoneDisplay: "0536 698 47 64",
    phoneTel: "05366984764",
    whatsapp: "905366984764",
    instagramUrl: "https://www.instagram.com/ornekhesap",
    instagramHandle: "@ornekhesap",
  },

  location: {
    city: "Uşak",
    country: "Türkiye",
    addressLine: "Uşak Saray Düğün Salonu, Uşak, Türkiye",
    addressShort: "Uşak, Türkiye",
    mapsUrl: "https://maps.google.com/?q=U%C5%9Fak%20Saray%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20U%C5%9Fak",
    mapsQuery: "U%C5%9Fak+Saray+D%C3%BC%C4%9F%C3%BCn+Salonu+U%C5%9Fak",
  },

  seo: {
    title: "05366984764 | Uşak Saray Düğün Salonu",
    description:
      "05366984764",
    keywords:
      "Uşak düğün salonu, nişan, kına gecesi",
    ogTitle: "Uşak Saray Düğün Salonu | Düğün & Etkinlik",
    ogDescription: "Hayalinizdeki düğünü profesyonel ekibimizle gerçeğe dönüştürün.",
  },

  capacity: {
    min: 150,
    max: 400,
    label: "150 - 400 Kişilik Masa Düzeni",
  },

  stats: {
    couples: "500+",
    years: "10+ Yıl",
    rating: "4.9",
  },

  hours: {
    weekday: "Pazartesi – Cumartesi: 09:00 – 21:00",
    sunday: "Pazar Günü: Randevu usulüyle",
  },

  images: {
    hero: templateImages.hero,
    about: templateImages.about,
  },

  navLinks: [
    { label: "Hizmetler", href: "#hizmetler" },
    { label: "Paketler", href: "#paketler" },
    { label: "Süreç", href: "#surec" },
    { label: "Galeri", href: "#galeri" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" },
  ],

  hero: {
    badge: "Şehrin En Şık Düğün & Etkinlik Mekanı",
    titlePrefix: "Uşak'ta",
    titleHighlight: "Saray Düğün Salonu",
    titleSuffix: "ile hayalinizdeki düğünü gerçeğe dönüştürün",
    subtitle:
      "Modüler salon yerleşimi, esnek kapasite, profesyonel ışıklandırma ve deneyimli organizasyon ekibimizle özel gününüzü kusursuz kılıyoruz.",
    pills: [
      "📍 Merkezi Konum",
      "✨ Düğün & Nişan & Kına",
      "🌸 Özel Dekorasyon",
      "💬 WhatsApp İletişim",
    ],
  },

  about: {
    locationCard:
      "Merkezi lokasyonda, geniş otopark imkanıyla konuklarınız için kolay ulaşım.",
    locationAdvantage: "Çevreyolu & Toplu Taşımaya Yakın",
    storyTitle: "Her detay, sizin hikayeniz için tasarlandı",
    storyParagraphs: [
      "Uşak Saray Düğün Salonu, mutlu çiftlerin ve ailelerin özel günlerini profesyonel bir ekiple planlamaktadır. Modern mimari, ferah salon yapısı ve esnek oturma düzeni ile unutulmaz bir atmosfer sunuyoruz.",
      "Organizasyonun sadece bir salondan ibaret olmadığının bilinciyle; ses, sahne, ışıklandırma ve ikram sunumlarımızı düzenli olarak güncelliyoruz. Uzman koordinatörlerimiz tüm aşamaları sizinle birlikte planlar.",
    ],
    differenceTitle: "Salon Farkı Nedir?",
    differenceText:
      "Düğün planlarken karşılaşılan ekstra maliyet sürprizlerinin önüne geçmek için tüm hizmet sözleşmelerimizi şeffaf ve paket onaylı şekilde yapıyoruz.",
  },

  services: {
    sectionTitle: "Profesyonel Etkinlik Hizmetlerimiz",
    sectionSubtitle:
      "Her türden özel kutlama ve kurumsal organizasyon için özel tasarlanan konseptlerimiz ile yanınızdayız.",
    bannerText:
      "Açık hava törenleri, özel brunchlar, mezuniyet baloları veya tematik çekimler için yaratıcı ekibimizle yanınızdayız.",
    tabs: [
      { id: "all" as const, label: "Tüm Hizmetler" },
      { id: "wedding" as const, label: "Düğün Merasimi" },
      { id: "engagement-henna" as const, label: "Nişan & Kına" },
      { id: "corporate" as const, label: "Kurumsal Davetler" },
    ],
    items: [
      {
        id: "ser-1",
        category: "wedding" as const,
        badge: "Lüks Düğün",
        title: "Premium Düğün Organizasyonları",
        description:
          "Her düğün, çiftin ruhunu yansıtan eşsiz bir organizasyondur. En ince detayına kadar titizlikle planlanan törenler.",
        imageUrl: templateImages.services.wedding,
        features: [
          "Esnek davetli oturma kapasitesi",
          "Yemekli & kokteyl menü alternatifleri",
          "Profesyonel ses ve ışık altyapısı",
          "Özel gelin ve damat hazırlık odası",
          "Giriş gösterileri ve sahne düzeni",
          "Fotoğraf ve video köşesi",
        ],
      },
      {
        id: "ser-2",
        category: "engagement-henna" as const,
        badge: "Kına & Nişan",
        title: "Geleneksel & Modern Kına Geceleri",
        description:
          "Kınanın zarafeti ile modern konseptleri harmanlayarak unutulmaz bir gece sunuyoruz.",
        imageUrl: templateImages.services.henna,
        features: [
          "Kına tahtı ve cibinlik tasarımları",
          "Profesyonel dans ve gösteri ekibi",
          "Kına aksesuarları ve ikram sunumu",
          "Özel ses repertuarı",
          "Misafir ikramları",
          "Nişan masa dekor seçenekleri",
        ],
      },
      {
        id: "ser-3",
        category: "engagement-henna" as const,
        badge: "Özel Davet",
        title: "Sünnet Şölenleri & Aile Kutlamaları",
        description:
          "Ailenizin gururla hatırlayacağı görkemli şenliklerle özel günleri kutluyoruz.",
        imageUrl: templateImages.services.party,
        features: [
          "Özel taht merasimi",
          "Giriş seremonisi",
          "Çocuk animasyonları",
          "Özel çocuk menüleri",
          "Renkli dekorasyonlar",
          "İkram tezgahı seçenekleri",
        ],
      },
      {
        id: "ser-4",
        category: "corporate" as const,
        badge: "Kurumsal",
        title: "Şirket Galaları, Lansman & Kokteyller",
        description:
          "Marka değerinizi ön plana çıkaracak prestijli lansmanlar ve özel kokteyl menüleri.",
        imageUrl: templateImages.services.corporate,
        features: [
          "Marka uyumlu ışık konfigürasyonu",
          "Sahne ve projeksiyon kurulumu",
          "Karşılama ve kayıt masası",
          "Kokteyl ikramları",
          "Mikrofon ve kürsü donanımı",
          "Merkezi havalandırma",
        ],
      },
    ] satisfies ServiceItem[],
  },

  packages: {
    capacityNote: "Salon Kapasitemiz: 150 – 400 kişi arası esnek modüler oturma düzeni",
    customNote:
      "Bütçenize uygun modüler paketler tasarlayabiliriz. Gizli ek ücretlere yer vermiyoruz.",
    items: [
      {
        id: "pkg-1",
        name: "Gümüş Klasik Paket",
        capacity: "150 - 250 Davetli",
        badge: "Klasik & Şık",
        priceTag: "Fiyat/Performans Odaklı",
        features: [
          "Salon kiralama hakkı",
          "Klasik masa dekor giydirme",
          "İkram ve meşrubat servisi",
          "Profesyonel DJ performansı",
          "Merkezi havalandırma",
          "Gelin & damat hazırlık süiti",
          "Standart ses ve ışık sistemi",
        ],
      },
      {
        id: "pkg-2",
        name: "Gold Premium Paket",
        capacity: "250 - 350 Davetli",
        badge: "En Çok Tercih Edilen",
        priceTag: "Yemekli & Eksiksiz",
        features: [
          "Tüm Gümüş Paket imkanlarına ek olarak:",
          "Zengin ana yemekli menü",
          "Premium masa giydirmesi",
          "Karşılama kokteyli",
          "Video kaydı ve fotoğraf",
          "LED sahne ışıklandırması",
          "Pasta kesim merasimi",
        ],
      },
      {
        id: "pkg-3",
        name: "Exclusive Platinum Paket",
        capacity: "350 - 400 Davetli",
        badge: "Sınırsız Premium",
        priceTag: "Özel Gala Konsepti",
        features: [
          "Tüm Gold Paket imkanlarına ek olarak:",
          "VIP mezeli & ana menü",
          "Canlı çiçekli masa tasarımları",
          "Canlı orkestra desteği",
          "Erken rezervasyon avantajı",
          "Gelin arabası süslemesi",
          "Keman resitali karşılama",
          "Masa başı özel servis",
        ],
      },
    ] satisfies PackageItem[],
  },

  process: {
    steps: [
      {
        stepNumber: 1,
        title: "İlk Görüşme",
        description:
          "Telefon, web formu, WhatsApp veya sosyal medya üzerinden bize ulaşın. İstediğiniz tarihi sorgulayın.",
      },
      {
        stepNumber: 2,
        title: "Salon Turu",
        description:
          "Salonumuzu yerinde ziyaret edin. Boyutları, akustik sistemi ve masa yerleşimlerini bizzat inceleyin.",
      },
      {
        stepNumber: 3,
        title: "Planlama & Tasarım",
        description:
          "Menü tadımı, dekorasyon, çiçekler ve müzik listelerini birlikte kararlaştıralım.",
      },
      {
        stepNumber: 4,
        title: "Büyük Gün!",
        description:
          "Profesyonel koordinatör ekibimiz her detayı yönetir. Siz sadece özel gününüzün tadını çıkarırsınız.",
      },
    ],
  },

  whyUs: {
    sectionId: "neden-biz",
    items: [
      {
        title: "Şık & Modern Salon Mimarisi",
        description:
          "Kolonsuz, yüksek tavanlı salon yapımızda her davetliniz sahneye tam hakimdir.",
      },
      {
        title: "Profesyonel Işık & Ses Sistemi",
        description:
          "Son teknoloji akustik sistemler ve akıllı LED aydınlatmalar.",
      },
      {
        title: "Esnek Paket & Bütçe Seçenekleri",
        description:
          "Modüler fiyatlandırma ve esnek ödeme vadeleri.",
      },
      {
        title: "Deneyimli Organizasyon Ekibi",
        description:
          "Yüzlerce daveti yönetmiş koordinasyon liderleri ve profesyonel servis kadrosu.",
      },
      {
        title: "Özel Dekorasyon & Çiçek Tasarımı",
        description:
          "Lüks şamdanlar, arka plan panoları ve estetik masa düzenleri.",
      },
      {
        title: "Merkezi Konum & Kolay Ulaşım",
        description:
          "Merkezi konumda, otoparkı geniş ve ulaşımı kolay davet adresi.",
      },
    ],
  },

  gallery: {
    categories: [
      { id: "all" as const, label: "Tümü" },
      { id: "interior" as const, label: "Salon İç Mekan" },
      { id: "decoration" as const, label: "Dekorasyon" },
      { id: "henna" as const, label: "Nişan & Kına" },
      { id: "exterior" as const, label: "Dış Mekan" },
    ],
    items: [
      {
        id: "gal-1",
        category: "interior" as const,
        categoryLabel: "Salon İç Mekan",
        title: "Görkemli Aydınlatma ve Kolonsuz Tasarım",
        imageUrl: templateImages.gallery.interior1,
      },
      {
        id: "gal-2",
        category: "decoration" as const,
        categoryLabel: "Düğün Dekorasyonu",
        title: "Premium Masa Dizaynı",
        imageUrl: templateImages.gallery.decoration1,
      },
      {
        id: "gal-3",
        category: "henna" as const,
        categoryLabel: "Nişan & Kına",
        title: "Özel Seremoniler",
        imageUrl: templateImages.gallery.henna,
      },
      {
        id: "gal-4",
        category: "exterior" as const,
        categoryLabel: "Dış Mekan & Giriş",
        title: "Karşılama Alanı",
        imageUrl: templateImages.gallery.exterior,
      },
      {
        id: "gal-5",
        category: "interior" as const,
        categoryLabel: "Salon İç Mekan",
        title: "İlk Dans Anı",
        imageUrl: templateImages.gallery.interior2,
      },
      {
        id: "gal-6",
        category: "decoration" as const,
        categoryLabel: "Düğün Dekorasyonu",
        title: "Şık Aydınlatma Detayları",
        imageUrl: templateImages.gallery.decoration2,
      },
    ] satisfies GalleryItem[],
  },

  testimonials: {
    sectionTitle: "Mutlu Çiftler Ne Diyor?",
    items: [
      {
        id: "test-1",
        name: "Ayşe & Mehmet Yılmaz",
        location: "Merkez, Uşak",
        text: "Düğünümüz harikaydı. Dekorasyondan ikramlara kadar her şey kusursuzdu. Organizasyon ekibi tüm süreci mükemmel yönetti. Gönül rahatlığıyla tavsiye ediyoruz!",
        rating: 5,
        date: "Eylül 2025",
      },
      {
        id: "test-2",
        name: "Zeynep & Can Özkan",
        location: "Merkez, Uşak",
        text: "Yemeklerin kalitesi ve servis hızı mükemmeldi. Esnek bütçe yapısı sayesinde sürpriz masraflarla karşılaşmadık. Sonsuz teşekkürler!",
        rating: 5,
        date: "Temmuz 2025",
      },
      {
        id: "test-3",
        name: "Elif & Emre Demir",
        location: "Uşak",
        text: "Kına gecemiz için tercih ettik. Dekorlar ve organizasyon gerçekten görkemliydi. Tüm davet dertsiz ve tasasız aktı.",
        rating: 5,
        date: "Ağustos 2025",
      },
    ] satisfies TestimonialItem[],
  },

  footer: {
    bio: "Şehrin en yüksek puanlı düğün salonları arasında yer alan salonumuz, hayalinizdeki organizasyonlara şeffaf bütçe güvencesiyle ev sahipliği yapar.",
    seoBlock:
      "Düğün salonu ve lüks davet mekânları kapsamında düğün organizasyonu, kına gecesi paketleri, nişan daveti, sünnet şöleni ve kurumsal kokteyllerde profesyonel hizmet.",
    craftedIn: "Sevgiyle hazırlandı",
  },
};

export type SiteConfig = typeof siteConfig;
