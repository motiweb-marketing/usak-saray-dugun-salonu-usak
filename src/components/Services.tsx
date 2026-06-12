import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, PartyPopper } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "wedding" | "engagement-henna" | "corporate">("all");
  const { services, contact } = siteConfig;
  const filteredServices = services.items.filter(
    (s) => activeTab === "all" || s.category === activeTab
  );

  return (
    <section id="hizmetler" className="py-24 bg-gradient-to-b from-champagne-50/20 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">GENİŞ HİZMET SKALAMIZ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">{services.sectionTitle}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">{services.sectionSubtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-md active:scale-95"
                  : "bg-white text-slate-755 hover:bg-champagne-105 hover:text-slate-900 border border-champagne-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-champagne-100/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs font-semibold text-[11px] sm:text-xs text-champagne-800 tracking-wider uppercase px-4 py-1.5 rounded-full border border-champagne-200">
                      {service.badge}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">{service.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                    <div className="pt-2 border-t border-champagne-50">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 block uppercase tracking-wider mb-2">PAKET ÖZETİ</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-2 items-start">
                            <div className="bg-champagne-100/80 p-0.5 rounded text-champagne-700 shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[3px]" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 bg-champagne-50/20 border-t border-champagne-100/30">
                  <a
                    href="#rezervasyon"
                    className="w-full mt-4 bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-champagne-200 hover:border-slate-800 font-bold text-xs sm:text-sm py-3.5 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                  >
                    <span>Bilgi Al & Rezervasyon</span>
                    <span className="text-champagne-600 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-tr from-champagne-850 to-champagne-750 text-white border border-champagne-700/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-champagne-900/10">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-champagne-100 text-xs font-semibold uppercase tracking-wider">
              <PartyPopper className="w-3.5 h-3.5 text-champagne-300" />
              Sıradışı Konseptler
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">Listede olmayan özel bir planlama mı hayal ediyorsunuz?</h3>
            <p className="text-champagne-100 text-xs sm:text-sm max-w-2xl leading-normal">{services.bannerText}</p>
          </div>
          <a
            href={`tel:${contact.phoneTel}`}
            className="whitespace-nowrap bg-white text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-champagne-100 shadow-md transition-all active:scale-95"
          >
            Özel Teklif Al: {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
