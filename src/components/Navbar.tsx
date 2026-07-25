import React, { useState } from 'react';
import type { PageTab } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { Menu, X, Phone, Trophy, Calendar, UserCheck, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  openBookingModal: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن الأكاديمية' },
    { id: 'programs', label: 'البرامج الرياضية' },
    { id: 'age-groups', label: 'الفئات العمرية' },
    { id: 'coaches', label: 'الطاقم التدريبي' },
    { id: 'facilities', label: 'المرافق' },
    { id: 'schedule', label: 'الجدول والتسجيل' },
    { id: 'camps', label: 'المخيمات والفعاليات' },
    { id: 'parent-hub', label: 'مركز أولياء الأمور' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080D1A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-emerald-900/80 via-slate-900 to-sky-900/80 text-xs py-1.5 px-4 text-slate-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" /> الأكاديمية الأولى المعتمدة بجدة
            </span>
            <span className="hidden sm:inline-block text-slate-400">
              التسجيل مفتوح الآن لموسم 2026 - خصم 15% للإخوة
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3" /> <span className="dir-ltr">{ACADEMY_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">حي الشاطئ / الزهراء - جدة</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-600 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
              <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-heading">
                  أَوْج
                </span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  OWJ
                </span>
              </div>
              <span className="text-[11px] block text-slate-400 font-light -mt-1">
                أكاديمية أَوْج الرياضية - جدة
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all relative ${
                    isActive 
                      ? 'text-emerald-400 bg-emerald-500/10 font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('schedule')}
              className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              الجدول
            </button>
            <button
              onClick={() => openBookingModal()}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              حجز تجربة مجانية
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal()}
              className="sm:hidden bg-emerald-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg"
            >
              احجز تجربة
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B132B]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-right px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : 'text-slate-200 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full bg-emerald-500 text-slate-950 font-extrabold text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              سجّل الآن لجلسة تجريبية مجانية
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
