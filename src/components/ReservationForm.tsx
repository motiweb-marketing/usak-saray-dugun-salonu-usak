import React, { useState } from "react";
import { Send, CheckCircle, Sparkles, AlertCircle } from "lucide-react";
import { ReservationFormData, EventType } from "../types";
import { siteConfig } from "../site.config";

export default function ReservationForm() {
  const { brand, contact } = siteConfig;
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: "",
    phone: "",
    eventType: "wedding",
    date: "",
    guestCount: "200-300",
    note: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const eventTypeLabels: Record<EventType, string> = {
    wedding: "Düğün Merasimi",
    engagement: "Nişan Daveti",
    henna: "Kına Gecesi",
    circumcision: "Sünnet Şöleni",
    corporate: "Kurumsal Etkinlik / Kokteyl",
    other: "Diğer Özel Davetler",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ReservationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Lütfen adınızı ve soyadınızı belirtin.";
    const trimmedPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) newErrors.phone = "Lütfen telefon numaranızı belirtin.";
    else if (trimmedPhone.length < 9) newErrors.phone = "Lütfen geçerli bir telefon numarası girin.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppUrl = (message: string) =>
    `https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=${encodeURIComponent(message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const dateFormatted = formData.date || "Belirtilmedi";
    const noteFormatted = formData.note.trim() || "Belirtilmedi";
    const selectedEventLabel = eventTypeLabels[formData.eventType] || formData.eventType;

    const rawMessage = `Merhaba ${brand.full},
Etkinlik rezervasyonu / keşif randevusu talep ediyorum:
👤 Ad Soyad: ${formData.fullName.trim()}
📞 Telefon: ${formData.phone.trim()}
🎉 Etkinlik Türü: ${selectedEventLabel}
📅 Tahmini Tarih: ${dateFormatted}
👥 Misafir Sayısı: ${formData.guestCount} kişi
📝 Not: ${noteFormatted}

Lütfen en kısa sürede dönüş yaparak uygunluk ve fiyat bilgisi paylaşınız.`;

    setIsSuccess(true);
    setTimeout(() => window.open(buildWhatsAppUrl(rawMessage), "_blank"), 1000);
  };

  return (
    <section id="rezervasyon" className="py-24 bg-gradient-to-b from-white to-champagne-50/10 relative scroll-mt-20 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-blush-100/40 filter blur-3xl -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">ÜCRETSİZ KEŞİF VE TARİH SORGULA</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">Fiyat Teklifi ve Randevu İsteyin</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-xs sm:text-sm pt-2">
            Formu doldurarak tercihlerinizi bize iletin. Sistem sizi WhatsApp üzerinden yönlendirecektir.
          </p>
        </div>

        <div className="bg-white/95 border border-champagne-100/80 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 bg-champagne-100 text-champagne-850 rounded-bl-3xl text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-4 h-4 text-champagne-600 animate-pulse" />
            <span>Şeffaf Sözleşme</span>
          </div>

          {isSuccess ? (
            <div className="py-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2 shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">Talebiniz Başarıyla Hazırlandı!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                {formData.fullName}, talebiniz için teşekkürler! Bilgileriniz WhatsApp üzerinden {brand.full} ekibine aktarılıyor.
              </p>
              <div className="pt-4">
                <a
                  href={buildWhatsAppUrl(`Merhaba, ben ${formData.fullName}. Web sitesi üzerinden randevu talep etmiştim.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-white fill-white" />
                  <span>Buradan WhatsApp'ı Aç</span>
                </a>
              </div>
              <button type="button" onClick={() => setIsSuccess(false)} className="text-xs text-slate-400 hover:text-champagne-600 underline cursor-pointer block mx-auto pt-4">
                Yeni bir talep oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-slate-755 uppercase tracking-wider">Ad Soyad *</label>
                  <input id="fullName" name="fullName" type="text" required placeholder="Örn: Ad Soyad" value={formData.fullName} onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 outline-none text-sm transition-all focus:bg-white ${errors.fullName ? "border-rose-350" : "border-champagne-150 focus:border-champagne-500"}`} />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /><span>{errors.fullName}</span></p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-755 uppercase tracking-wider">Telefon Numarası *</label>
                  <input id="phone" name="phone" type="tel" required placeholder={contact.phoneDisplay} value={formData.phone} onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 outline-none text-sm transition-all focus:bg-white ${errors.phone ? "border-rose-350" : "border-champagne-150 focus:border-champagne-500"}`} />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /><span>{errors.phone}</span></p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="eventType" className="block text-xs sm:text-sm font-bold text-slate-755 uppercase tracking-wider">Etkinlik Türü *</label>
                  <select id="eventType" name="eventType" value={formData.eventType} onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-champagne-150 bg-slate-50/50 outline-none text-sm focus:border-champagne-500 focus:bg-white transition-all font-medium">
                    {Object.entries(eventTypeLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-xs sm:text-sm font-bold text-slate-755 uppercase tracking-wider">Tahmini Tarih</label>
                  <input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3.5 rounded-xl border border-champagne-150 bg-slate-50/50 outline-none text-sm focus:border-champagne-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guestCount" className="block text-xs sm:text-sm font-bold text-slate-755 uppercase tracking-wider">Misafir Sayısı</label>
                  <select id="guestCount" name="guestCount" value={formData.guestCount} onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-champagne-150 bg-slate-50/50 outline-none text-sm focus:border-champagne-500 focus:bg-white transition-all font-medium">
                    <option value="50-100">50 - 100 Kişi</option>
                    <option value="100-200">100 - 200 Kişi</option>
                    <option value="200-300">200 - 300 Kişi</option>
                    <option value="300-400">300 - 400 Kişi</option>
                    <option value="400+">400 Kişi ve Üzeri</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="note" className="block text-xs sm:text-sm font-bold text-slate-755 uppercase tracking-wider">Özel Notlar (Opsiyonel)</label>
                <textarea id="note" name="note" rows={3} placeholder="Eklemek istediklerinizi yazabilirsiniz." value={formData.note} onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-champagne-150 bg-slate-50/50 outline-none text-sm focus:border-champagne-500 focus:bg-white transition-all resize-none" />
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-champagne-650 to-champagne-550 hover:from-champagne-750 hover:to-champagne-650 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer">
                  <Send className="w-4 h-4 fill-white" />
                  <span>Rezervasyon Talebini WhatsApp ile Gönder</span>
                </button>
              </div>
              <p className="text-[11px] text-center text-slate-400">
                🔒 Kişisel verileriniz 6698 sayılı KVKK kapsamında {brand.full} korumasındadır.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
