import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Phone, Heart } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { brand, contact, navLinks } = siteConfig;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-champagne-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-champagne-500 to-champagne-600 p-2 rounded-xl text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold tracking-widest text-slate-900 block leading-tight">
                {brand.short}
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-widest text-slate-500 block">
                {brand.tagline}
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-800 hover:text-champagne-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${contact.phoneTel}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-champagne-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-champagne-500" />
              <span>{contact.phoneDisplay}</span>
            </a>
            <a
              href="#rezervasyon"
              className="bg-gradient-to-r from-champagne-600 to-champagne-500 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:from-champagne-700 hover:to-champagne-600 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-white/20" />
              <span>Randevu Al</span>
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${contact.phoneTel}`}
              className="flex justify-center items-center w-9 h-9 rounded-full bg-champagne-100 text-champagne-700 hover:bg-champagne-200 md:hidden"
              aria-label={`${brand.full} telefon`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-800 hover:bg-champagne-100/50 hover:text-champagne-600 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Menü"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-champagne-100 shadow-xl z-40 transition-all duration-300 max-h-screen overflow-y-auto">
          <div className="px-5 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 rounded-xl text-base font-medium text-slate-800 hover:bg-champagne-50 hover:text-champagne-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-champagne-100 flex flex-col sm:flex-row sm:items-center gap-4 px-4">
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-center gap-3 text-slate-800 font-semibold py-2"
              >
                <Phone className="w-5 h-5 text-champagne-500" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href="#rezervasyon"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gradient-to-r from-champagne-600 to-champagne-500 text-white font-medium py-3 rounded-full hover:from-champagne-700 transition-colors block shadow-md"
              >
                Randevu Al
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
