import React from "react";
import { Star, Quote, Heart } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Testimonials() {
  const { testimonials, contact, brand } = siteConfig;

  return (
    <section id="testi" className="py-24 bg-gradient-to-b from-champagne-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">MÜŞTERİ DEĞERLENDİRMELERİ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">{testimonials.sectionTitle}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            En kıymetli gecelerini bize emanet eden çiftlerimizin gerçek deneyimlerini okuyun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((test) => (
            <div key={test.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-champagne-100 shadow-3xs flex flex-col justify-between relative hover:shadow-md transition-all group hover:border-champagne-300">
              <div className="absolute top-6 right-6 text-champagne-100 group-hover:text-champagne-200 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed italic">"{test.text}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-champagne-50 flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 text-sm">{test.name}</span>
                  <span className="block text-[11px] font-semibold text-slate-400">{test.location}</span>
                </div>
                <div className="bg-champagne-50/80 text-champagne-800 text-[10px] font-bold px-2.5 py-1 rounded-sm">{test.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-xs sm:text-sm inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>Siz de {brand.full} salonumuzda davetli miydiniz?</span>
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-champagne-700 font-bold hover:underline inline-flex items-center gap-1">
              <Heart className="w-4 h-4 fill-pink-100 text-pink-500" />
              <span>Görüşünüzü bizimle paylaşın</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
