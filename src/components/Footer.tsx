import React from "react";
import { Sparkles, Phone, MapPin, Instagram, MessageCircle, Heart } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, contact, location, footer } = siteConfig;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-28 border-t-2 border-champagne-500/20 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          <div className="md:col-span-5 space-y-5">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="bg-gradient-to-tr from-champagne-500 to-champagne-600 p-2 rounded-xl text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-lg sm:text-xl font-bold tracking-widest text-white block leading-none">
                  {brand.short}
                </span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400 block mt-1">
                  {brand.tagline}
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">{footer.bio}</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-650 text-slate-350 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-350 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-champagne-500 pl-3">
              KATEGORİLER
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400 font-semibold">
              <li><a href="#hizmetler" className="hover:text-champagne-500 transition-colors">Düğün & Kına Hizmetleri</a></li>
              <li><a href="#paketler" className="hover:text-champagne-500 transition-colors">Salon Paketleri</a></li>
              <li><a href="#surec" className="hover:text-champagne-500 transition-colors">Nasıl Çalışıyoruz?</a></li>
              <li><a href="#galeri" className="hover:text-champagne-500 transition-colors">Galeri</a></li>
              <li><a href="#rezervasyon" className="hover:text-champagne-500 transition-colors">Randevu Formu</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-champagne-500 pl-3">
              İLETİŞİM
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${contact.phoneTel}`} className="text-white font-bold hover:text-champagne-500">
                    {contact.phoneDisplay}
                  </a>
                  <span className="block text-[10px] text-slate-400 mt-0.5">Ücretsiz Bilgi Hattı</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                <span>{location.addressShort}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-xs text-center md:text-left space-y-2 max-w-xl">
            <p>© {currentYear} <strong>{brand.full}</strong>. Tüm hakları saklıdır.</p>
            <p className="text-[10px] leading-relaxed text-slate-505">{footer.seoBlock}</p>
          </div>
          <div className="text-slate-500 text-xs flex gap-1 items-center justify-center font-bold">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-rose-550 fill-rose-500 inline" />
            <span>{footer.craftedIn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
