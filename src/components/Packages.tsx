import React from "react";
import { Check, Heart, Star, Sparkles } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Packages() {
  const { packages } = siteConfig;

  return (
    <section id="paketler" className="py-24 bg-gradient-to-b from-white to-champagne-50/20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">PAKET SEÇENEKLERİ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Hayalinizdeki Düğün İçin Esnek Paketlerimiz</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <div className="inline-block mt-4 px-5 py-2.5 rounded-2xl bg-champagne-100/90 text-champagne-900 border border-champagne-200 text-xs sm:text-sm font-bold">
            🏢 {packages.capacityNote}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.items.map((pkg) => {
            const isPopular = pkg.id === "pkg-2";
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white border-2 border-champagne-500 shadow-xl ring-4 ring-champagne-105 transform -translate-y-2 lg:-translate-y-4"
                    : "bg-white border border-champagne-100 shadow-sm hover:shadow-lg"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-champagne-600 to-champagne-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    En Çok Tercih Edilen
                  </span>
                )}
                <div>
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">{pkg.priceTag}</span>
                    <h3 className="font-display text-2xl font-bold text-slate-900">{pkg.name}</h3>
                    <div className="text-champagne-700 font-bold text-sm sm:text-base flex items-center gap-1 bg-champagne-50/50 w-fit px-3 py-1 rounded-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>{pkg.capacity}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-champagne-50 pb-2">DAHİL TÜM HİZMETLER</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => {
                        const isMainInclude = idx === 0 && (pkg.id === "pkg-2" || pkg.id === "pkg-3");
                        return (
                          <li key={idx} className={`flex gap-3 text-xs sm:text-[13px] ${isMainInclude ? "text-champagne-800 font-bold" : "text-slate-700 font-medium"}`}>
                            <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${isMainInclude ? "bg-champagne-500 text-white" : "bg-champagne-100 text-champagne-700"}`}>
                              <Check className="w-3.5 h-3.5 stroke-[3px]" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="pt-8 mt-6 border-t border-champagne-50">
                  <a
                    href="#rezervasyon"
                    className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 text-center block ${
                      isPopular
                        ? "bg-gradient-to-r from-champagne-600 to-champagne-500 hover:from-champagne-700 hover:to-champagne-600 text-white shadow-md shadow-champagne-500/20 active:scale-95"
                        : "bg-champagne-50 hover:bg-champagne-100 text-slate-800 border border-champagne-100"
                    }`}
                  >
                    Ücretsiz Teklif Al & Tarih Sorgula
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-ivory-50 border border-champagne-150 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start text-center md:text-left">
            <div className="p-3 bg-white rounded-2xl text-champagne-600 shadow-2xs shrink-0 hidden sm:block">
              <Heart className="w-6 h-6 text-champagne-500" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">Kişiye Özel Konsept Paket Oluşturma</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">{packages.customNote}</p>
            </div>
          </div>
          <a href="#rezervasyon" className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm shrink-0 whitespace-nowrap">
            Özel Paket Tasarlat
          </a>
        </div>
      </div>
    </section>
  );
}
