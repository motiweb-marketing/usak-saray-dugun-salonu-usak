import React from "react";
import { motion } from "motion/react";
import { ChevronDown, Star, Sparkles } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Hero() {
  const { hero, images, capacity, stats, brand } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-champagne-100/30 via-white to-champagne-50/20"
    >
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-champagne-100/50 filter blur-3xl -z-10 mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blush-100/50 filter blur-3xl -z-10 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-champagne-100/80 border border-champagne-200/50 text-champagne-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-champagne-500 animate-pulse" />
              <span>{hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.12]"
            >
              {hero.titlePrefix}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>{" "}
              {hero.titleSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start"
            >
              {hero.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-champagne-100 text-xs font-semibold text-slate-700 shadow-2xs hover:border-champagne-300 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="#rezervasyon"
                className="bg-gradient-to-r from-champagne-600 to-champagne-500 hover:from-champagne-700 hover:to-champagne-600 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-champagne-500/20 text-center flex items-center justify-center gap-2 group"
              >
                <span>Ücretsiz Keşif Randevusu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#galeri"
                className="bg-white hover:bg-champagne-50 text-slate-900 border border-champagne-200 hover:border-champagne-300 font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xs transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>Salonumuzu Keşfedin</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] lg:aspect-[1/1] z-10 group">
              <img
                src={images.hero}
                alt={`${brand.full} düğün salonu`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-champagne-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider font-semibold">Geniş Salon</span>
                  <span className="text-sm font-bold text-slate-800 block">{capacity.label}</span>
                </div>
                <div className="bg-champagne-100 text-champagne-800 px-3 py-1.5 rounded-lg text-xs font-bold">
                  Klimalı & Jeneratörlü
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blush-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-champagne-200/50 rounded-full filter blur-xl -z-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-champagne-200/40"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-champagne-700">{stats.couples}</span>
              <span className="block text-xs sm:text-sm font-medium text-slate-600">Mutlu Çift Referansı</span>
            </div>
            <div className="space-y-1">
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-champagne-700">{stats.years}</span>
              <span className="block text-xs sm:text-sm font-medium text-slate-600">Sektör Deneyimi</span>
            </div>
            <div className="space-y-1">
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-champagne-700">Esnek</span>
              <span className="block text-xs sm:text-sm font-medium text-slate-600">Bütçe Kolaylığı</span>
            </div>
            <div className="space-y-1">
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-champagne-700 flex items-center justify-center gap-1">
                {stats.rating} <Star className="w-5 h-5 text-amber-500 fill-amber-500 inline" />
              </span>
              <span className="block text-xs sm:text-sm font-medium text-slate-600">Yüksek Puan</span>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-12">
          <a
            href="#hizmetler"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-champagne-600 transition-colors group"
            aria-label="Bir sonraki bölüme geçin"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 group-hover:text-champagne-600 transition-colors">
              Keşfe Başlayın
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce text-champagne-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
