import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, Instagram, Heart, ArrowRight } from "lucide-react";
import { GalleryItem } from "../types";
import { siteConfig } from "../site.config";

export default function Gallery() {
  const { gallery, contact, brand } = siteConfig;
  const [activeCategory, setActiveCategory] = useState<"all" | "interior" | "decoration" | "henna" | "exterior">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = gallery.items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="galeri" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">DAVETLERİMİZDEN KARELER</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Salonumuz ve Dekorasyon Galerisi</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Salonumuzun zengin masa yapısını, dekor konseptlerini ve unutulmaz anları keşfedin.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {gallery.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeCategory === cat.id ? "bg-slate-900 text-white shadow-xs" : "bg-champagne-50/50 text-slate-700 hover:bg-champagne-100 border border-champagne-101"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-champagne-100 bg-slate-50 aspect-4/3 shadow-2xs hover:shadow-lg transition-all"
              >
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10" />
                <div className="absolute inset-y-0 inset-x-0 p-6 flex flex-col justify-between text-white z-20 pointer-events-none transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="w-fit bg-champagne-500 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-white">{item.categoryLabel}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-1.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl leading-tight text-champagne-100">{item.title}</h3>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1"><ZoomIn className="w-3.5 h-3.5" /><span>Büyütmek için dokunun</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center border-t border-champagne-100/60 pt-10">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-450" />
            Sosyal Medyada Canlı Yayınlar
          </span>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Haftalık etkinliklerimizden en trend dekorları ve hazırlık anlarını sosyal medyada paylaşıyoruz.
          </p>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-champagne-700 font-bold bg-champagne-50 hover:bg-champagne-100/80 px-6 py-3.5 rounded-full border border-champagne-205 transition-colors group">
            <Instagram className="w-5 h-5 text-pink-500" />
            <span>Instagram'ımızı ziyaret edin ({contact.instagramHandle})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedImage(null)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 z-50 flex flex-col justify-between">
              <div className="relative flex-1 overflow-hidden flex items-center justify-center">
                <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-h-[65vh] w-full object-contain" referrerPolicy="no-referrer" />
                <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors" aria-label="Kapat">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-slate-950 px-6 py-5 border-t border-slate-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-champagne-500 font-bold uppercase tracking-wider block mb-1">{selectedImage.categoryLabel}</span>
                  <h4 className="text-white font-display text-lg sm:text-xl font-bold">{selectedImage.title}</h4>
                </div>
                <a href="#rezervasyon" onClick={() => setSelectedImage(null)} className="bg-gradient-to-r from-champagne-600 to-champagne-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl hover:shadow-lg transition-transform active:scale-95 whitespace-nowrap text-center">
                  Bu Konseptle Teklif Al
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
