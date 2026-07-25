import React from 'react';
import type { PageTab } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { Trophy, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  openLegalModal: (tab?: string) => void;
  openBookingModal: (programId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openLegalModal, openBookingModal }) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-white/10 pt-16 pb-12 text-right relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top CTA Banner in Footer */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-[#0B132B] to-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-2xl font-black text-white font-heading">
              جاهزون لبدء رحلة التميز الرياضي؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              احجز حصة تجريبية مجانية لطفلك واكتشف البيئة الرياضية المتكاملة بجدة.
            </p>
          </div>
          <button
            onClick={() => openBookingModal()}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-7 py-3.5 rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all shrink-0"
          >
            سجّل طفلك الآن مجاناً
          </button>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5 cursor-pointer group" onClick={() => handleNav('home')}>
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-400/50 group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full bg-[#080D1A] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <Trophy className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black font-heading bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]">
                    أكاديمية أَوْج الرياضية
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-emerald-400/40 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OWJ
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium block mt-0.5">{ACADEMY_INFO.englishName}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm">
              أول أكاديمية رياضية متكاملة بجدة تدمج بين التميز الميداني، بناء الشخصية القيادية، والبيئة الآمنة المحفزة للناشئين والشباب.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ACADEMY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="dir-ltr">{ACADEMY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ACADEMY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">البرامج الرياضية</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('programs')} className="hover:text-emerald-400 transition-colors">أكاديمية كرة القدم</button></li>
              <li><button onClick={() => handleNav('programs')} className="hover:text-emerald-400 transition-colors">أكاديمية السباحة الأولمبية</button></li>
              <li><button onClick={() => handleNav('programs')} className="hover:text-emerald-400 transition-colors">أكاديمية كرة السلة</button></li>
              <li><button onClick={() => handleNav('programs')} className="hover:text-emerald-400 transition-colors">ألعاب القوى والسرعة</button></li>
              <li><button onClick={() => handleNav('programs')} className="hover:text-emerald-400 transition-colors">التأسيس البدني للصغار</button></li>
              <li><button onClick={() => handleNav('programs')} className="hover:text-emerald-400 transition-colors">أكاديمية الرياضة للفتيات</button></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors">عن الأكاديمية ورؤيتنا</button></li>
              <li><button onClick={() => handleNav('age-groups')} className="hover:text-emerald-400 transition-colors">الفئات العمرية والمسارات</button></li>
              <li><button onClick={() => handleNav('coaches')} className="hover:text-emerald-400 transition-colors">الطاقم التدريبي المعتمد</button></li>
              <li><button onClick={() => handleNav('facilities')} className="hover:text-emerald-400 transition-colors">المرافق الرياضية بجدة</button></li>
              <li><button onClick={() => handleNav('schedule')} className="hover:text-emerald-400 transition-colors">جدول الحصص والباقات</button></li>
              <li><button onClick={() => handleNav('parent-hub')} className="hover:text-emerald-400 transition-colors">مركز أولياء الأمور</button></li>
            </ul>
          </div>

          {/* Col 4: Safety & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">الأمان واللوائح</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => openLegalModal('safeguarding')} className="hover:text-emerald-400 transition-colors">سياسة حماية وصون الطفل</button></li>
              <li><button onClick={() => openLegalModal('health')} className="hover:text-emerald-400 transition-colors">معايير الصحة والسلامة</button></li>
              <li><button onClick={() => openLegalModal('terms')} className="hover:text-emerald-400 transition-colors">الشروط والأحكام العامة</button></li>
              <li><button onClick={() => openLegalModal('privacy')} className="hover:text-emerald-400 transition-colors">سياسة الخصوصية والبيانات</button></li>
              <li><button onClick={() => openLegalModal('refund')} className="hover:text-emerald-400 transition-colors">سياسة الإلغاء والاسترجاع</button></li>
              <li><button onClick={() => openLegalModal('media')} className="hover:text-emerald-400 transition-colors">إقرار التصوير والنشر</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Attribution Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>جميع الحقوق محفوظة © 2026 لأكاديمية أَوْج الرياضية - جدة، المملكة العربية السعودية.</p>
          
          {/* Designed by AZION Labs */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">تصميم وتطوير بواسطة</span>
            <a 
              href="https://azionlabs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/20 shadow-sm"
            >
              <span className="dir-ltr font-mono tracking-tight">AZION Labs</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">انستغرام</span>
            <span>•</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">سناب شات</span>
            <span>•</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">منصة X</span>
            <span>•</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">تيك توك</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
