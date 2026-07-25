import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Car } from 'lucide-react';

interface ContactSectionProps {
  showToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ showToast }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    sportInterest: 'football',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('تم إرسال رسالتك بنجاح! سيتواصل معكم فريق أكاديمية أَوْج في أقرب وقت.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ parentName: '', phone: '', email: '', sportInterest: 'football', message: '' });
    }, 4000);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <MessageSquare className="w-4 h-4" />
            <span>يسعدنا تواصلكم دائماً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            تواصل مع <span className="text-gradient-emerald">أكاديمية أَوْج</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            فريقنا الإداري والتدريبي بجانبكم للإجابة عن كافة الاستفسارات وحجز الجولات التعريفية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">معلومات التواصل المباشر</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">العنوان والموقع:</span>
                    <span className="text-white font-semibold">{ACADEMY_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">الهاتف المباشر:</span>
                    <a href={`tel:${ACADEMY_INFO.phone}`} className="text-white font-semibold dir-ltr hover:text-emerald-400 transition-colors">
                      {ACADEMY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">البريد الإلكتروني:</span>
                    <a href={`mailto:${ACADEMY_INFO.email}`} className="text-white font-semibold hover:text-emerald-400 transition-colors">
                      {ACADEMY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">أوقات العمل الرسمية:</span>
                    <span className="text-white font-semibold">{ACADEMY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                  <span>محادثة تواصل مباشرة عبر واتساب</span>
                </a>
              </div>
            </div>

            {/* Parking & Arrival Info */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Car className="w-4 h-4" />
                <span>إرشادات الوصول ومواقف السيارات</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                تتوفر مواقف خاصة ومظللة ومجانية لأولياء الأمور تتسع لأكثر من 150 سيارة أمام بوابة الأكاديمية الرئيسية مع منطقة إنزال آمنة للأطفال.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">استمارة الاستفسارات والتواصل السريع</h3>
              <p className="text-xs text-slate-400">يرجى تعبئة الحقول وسيتم التواصل معكم خلال أقل من 24 ساعة</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 p-8 rounded-2xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">تم استلام استفساركم بنجاح!</h4>
                <p className="text-xs text-slate-300">سيتواصل معكم ممثل خدمة العملاء بالأكاديمية هاتفياً أو عبر الواتساب.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1 font-medium">اسم ولي الأمر *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: عبدالله الغامدي"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1 font-medium">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white dir-ltr text-right focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1 font-medium">البريد الإلكتروني (اختياري)</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1 font-medium">الرياضة المستهدفة</label>
                    <select
                      value={formData.sportInterest}
                      onChange={(e) => setFormData({ ...formData, sportInterest: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="football">كرة القدم</option>
                      <option value="basketball">كرة السلة</option>
                      <option value="swimming">السباحة</option>
                      <option value="athletics">ألعاب القوى والسرعة</option>
                      <option value="fitness">التأسيس البدني</option>
                      <option value="girls">أكاديمية الفتيات</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-medium">تفاصيل السؤال أو الاستفسار *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="اكتب استفسارك هنا..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الاستفسار إلى الأكاديمية</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Designed Location Map Card */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 relative h-80 bg-slate-900 flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 text-center space-y-3 p-6 max-w-lg bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10">
            <MapPin className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-white">موقع الأكاديمية بجدة - حي الشاطئ</h3>
            <p className="text-xs text-slate-300">طريق الملك عبدالعزيز، بالقرب من الكورنيش الشمالي ومجمع ريد سي مول.</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-slate-950 transition-all"
            >
              فتح الخريطة عبر Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
