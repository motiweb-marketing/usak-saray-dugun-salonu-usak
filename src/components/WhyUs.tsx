import React from "react";
import { Sparkles, Volume2, PiggyBank, HeartHandshake, Flower2, Compass, ShieldCheck } from "lucide-react";
import { siteConfig } from "../site.config";

const whyUsIcons = [
  <Sparkles className="w-5 h-5 text-champagne-600" key="1" />,
  <Volume2 className="w-5 h-5 text-champagne-600" key="2" />,
  <PiggyBank className="w-5 h-5 text-champagne-600" key="3" />,
  <HeartHandshake className="w-5 h-5 text-champagne-600" key="4" />,
  <Flower2 className="w-5 h-5 text-champagne-600" key="5" />,
  <Compass className="w-5 h-5 text-champagne-600" key="6" />,
];

export default function WhyUs() {
  const { whyUs, brand, location } = siteConfig;

  return (
    <section id={whyUs.sectionId} className="py-24 bg-gradient-to-b from-champagne-50/25 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">NEDEN BİZ?</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            {location.city}'da Bizi Farklı Kılan Özelliklerimiz
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            {brand.full} ekibi olarak en mutlu gününüzü riske atmıyoruz. Altı temel sütunumuzla düğününüzün her anını güvenceye alıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.items.map((card, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-champagne-100 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-champagne-300">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-champagne-100/70 border border-champagne-200/40 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {whyUsIcons[idx]}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-champagne-700 transition-colors">{card.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{card.description}</p>
              </div>
              <div className="flex items-center gap-1.5 mt-6 pt-4 border-t border-champagne-50 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-champagne-650 transition-colors">
                <ShieldCheck className="w-4 h-4 text-champagne-500 shrink-0" />
                <span>Onaylı Güvence & Denetim</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
            🛡️ RESMİ RUHSATLI, İTFAİYE ONAYLI VE KESİNTİSİZ GÜÇ JENERATÖRLÜ ORGANİZASYON MEKANI
          </p>
        </div>
      </div>
    </section>
  );
}
