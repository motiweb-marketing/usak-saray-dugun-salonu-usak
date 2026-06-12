import React from "react";
import { Phone, MapPin, Clock, MessageSquare, Instagram, Map, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Contact() {
  const { brand, contact, location, hours } = siteConfig;

  return (
    <section id="iletisim" className="py-24 bg-white relative scroll-mt-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-champagne-100/30 filter blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">İLETİŞİM BİLGİLERİ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Bizimle İletişime Geçin</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Salonumuz randevu usulüyle gezilebilmektedir. Hızlı bilgi almak için bizi arayabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-tr from-champagne-850 to-champagne-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-champagne-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 bg-white/10 text-champagne-300 rounded-bl-3xl">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-200 block mb-2">HEMEN ARA</span>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-4">{brand.full} Telefonu</h3>
              <a href={`tel:${contact.phoneTel}`} className="inline-flex items-center gap-3 bg-white text-slate-900 font-extrabold text-2xl sm:text-3xl px-6 py-4 rounded-2xl shadow-lg transition-transform hover:scale-102 active:scale-98">
                <Phone className="w-6 h-6 text-champagne-600 animate-bounce" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>

            <div className="space-y-4">
              <div className="bg-champagne-50/40 border border-champagne-100 rounded-2xl p-5 flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-champagne-600 shadow-2xs"><MapPin className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">SALON ADRESİ</span>
                  <span className="block text-slate-800 font-bold text-sm sm:text-base">{location.addressLine}</span>
                </div>
              </div>
              <div className="bg-champagne-50/40 border border-champagne-100 rounded-2xl p-5 flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-champagne-600 shadow-2xs"><Clock className="w-5 h-5" /></div>
                <div className="space-y-1 font-medium">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">ZİYARET SAATLERİ</span>
                  <span className="block text-slate-800 font-bold text-sm sm:text-base">{hours.weekday}</span>
                  <span className="block text-slate-500 text-xs">{hours.sunday}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 transition-colors group">
                  <MessageSquare className="w-5 h-5 text-emerald-600 fill-emerald-100 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">WhatsApp</span>
                </a>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 transition-colors group">
                  <Instagram className="w-5 h-5 text-pink-650 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Instagram</span>
                  <span className="text-[10px] text-slate-500">{contact.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-slate-50 to-champagne-50/10 border border-champagne-105 rounded-3xl p-4 shadow-sm relative">
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md border border-champagne-150 rounded-2xl p-4 shadow-xl max-w-[270px] z-10 hidden sm:block">
                <div className="flex gap-2 items-start">
                  <div className="p-2 bg-champagne-100 rounded-xl text-champagne-700 font-bold text-sm">✨</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{brand.full}</h4>
                    <p className="text-[10px] text-slate-500 mt-1 leading-normal">Düğün, nişan ve kına organizasyon salonu.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden relative border border-champagne-100 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(#ddd_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-70" />
                <div className="relative z-10 flex flex-col items-center justify-center cursor-pointer">
                  <div className="relative">
                    <span className="absolute -top-1.5 -left-1.5 w-12 h-12 bg-champagne-500/30 rounded-full animate-ping" />
                    <div className="bg-gradient-to-tr from-champagne-600 to-champagne-400 text-white rounded-2xl p-3 shadow-xl relative z-10 border-2 border-white">
                      <MapPin className="w-7 h-7 animate-pulse" />
                    </div>
                  </div>
                  <span className="mt-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md z-15">
                    {brand.short} · {location.city}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md flex items-center justify-between border border-champagne-100">
                  <div className="flex gap-2 items-center text-xs text-slate-600 font-semibold">
                    <Map className="w-4 h-4 text-champagne-500" />
                    <span>En Hızlı Rotalar (GPS)</span>
                  </div>
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-champagne-800 hover:text-champagne-950 hover:underline">
                    <span>Yol Tarifi Al</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-center text-slate-400 mt-3 font-medium">📍 {location.city} merkezi konum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
