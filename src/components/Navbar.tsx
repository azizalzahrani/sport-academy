import React, { useState, useRef, useEffect } from 'react';
import type { PageTab } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { 
  Menu, X, Phone, Trophy, Calendar, UserCheck, ShieldCheck, 
  ChevronDown, Sparkles, Users, Building2, Flame, 
  Info, MessageSquareText
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  openBookingModal: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryNavItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'programs', label: 'البرامج الرياضية' },
    { id: 'schedule', label: 'الجدول والتسجيل' },
    { id: 'parent-hub', label: 'مركز أولياء الأمور' },
  ];

  const exploreItems: { id: PageTab; label: string; desc: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'about', label: 'عن الأكاديمية', desc: 'رؤيتنا وقيمنا والاعتمادات', icon: Info },
    { id: 'age-groups', label: 'الفئات العمرية', desc: 'مسارات التطوير من 4 إلى 18 سنة', icon: Users },
    { id: 'coaches', label: 'الطاقم التدريبي', desc: 'نخبة المدربين المعترف بهم دراسياً', icon: Sparkles },
    { id: 'facilities', label: 'المرافق الرياضية', desc: 'ملاعب وصالات أولمبية متطورة', icon: Building2 },
    { id: 'camps', label: 'المخيمات والفعاليات', desc: 'برامج الصيف والمواسم المكثفة', icon: Flame },
    { id: 'contact', label: 'تواصل معنا', desc: 'الموقع، الهاتف والاستفسارات', icon: MessageSquareText },
  ];

  const isExploreActive = exploreItems.some((item) => item.id === activeTab);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#0B132B] to-slate-950 text-xs py-2 px-4 text-slate-300 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold text-[11px] shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              الأكاديمية الأولى المعتمدة بجدة
            </span>
            <span className="hidden sm:inline-block text-slate-400 text-[11px] font-medium">
              التسجيل مفتوح الآن لموسم 2026 - خصم 15% للإخوة
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${ACADEMY_INFO.phone}`} 
              className="hover:text-emerald-300 flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/5 transition-all text-emerald-400 font-mono text-[11px]"
            >
              <Phone className="w-3 h-3" /> <span className="dir-ltr">{ACADEMY_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 text-[11px]">حي الشاطئ / الزهراء - جدة</span>
          </div>
        </div>
      </div>

      {/* Main Floating Glass Container */}
      <div className="px-3 sm:px-6 py-2 max-w-7xl mx-auto">
        <div className="relative bg-[#0B132B]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-emerald-950/20 px-4 sm:px-6 h-20 flex items-center justify-between transition-all">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-400/40 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#080D1A] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Trophy className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black tracking-tight text-white font-heading bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
                  أَوْج
                </span>
                <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  OWJ
                </span>
              </div>
              <span className="text-[11px] block text-slate-400 font-medium -mt-0.5 group-hover:text-slate-300 transition-colors">
                أكاديمية أَوْج الرياضية - جدة
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-xl border border-white/5 shadow-inner">
            {primaryNavItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 relative ${
                    isActive 
                      ? 'text-emerald-300 bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 shadow-md shadow-emerald-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-sm shadow-emerald-400" />
                  )}
                </button>
              );
            })}

            {/* Explore Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  isExploreActive || dropdownOpen
                    ? 'text-emerald-300 bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 shadow-md shadow-emerald-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>استكشف الأكاديمية</span>
                <ChevronDown className={`w-3.5 h-3.5 text-emerald-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Popover */}
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-80 bg-[#0B132B]/95 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl p-2.5 shadow-2xl shadow-black/80 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 px-3 py-1.5 mb-1 border-b border-white/5 flex items-center justify-between">
                    <span>أقسام الأكاديمية</span>
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {exploreItems.map((item) => {
                      const IconComponent = item.icon;
                      const isItemActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full text-right px-3 py-2.5 rounded-xl transition-all flex items-start gap-3 group ${
                            isItemActive 
                              ? 'bg-emerald-500/20 text-white border border-emerald-500/40' 
                              : 'hover:bg-white/5 text-slate-300 hover:text-white border border-transparent'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-colors mt-0.5 ${
                            isItemActive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold flex items-center gap-1.5">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3.5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-semibold"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              تواصل معنا
            </button>

            <button
              onClick={() => openBookingModal()}
              className="relative group overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <UserCheck className="w-4 h-4 text-slate-950 font-bold" />
              <span>حجز تجربة مجانية</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal()}
              className="sm:hidden bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-md"
            >
              احجز الآن
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-w-7xl mx-auto px-3 sm:px-6 pt-1 pb-4">
          <div className="bg-[#0B132B]/98 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl p-5 space-y-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-4 duration-200">
            
            {/* Primary Nav Links */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-2 px-1">
                الأساسية
              </div>
              <div className="grid grid-cols-2 gap-2">
                {primaryNavItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-right px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                        isActive 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                          : 'text-slate-200 bg-white/5 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explore Section Links */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-2 px-1 flex items-center justify-between">
                <span>استكشف أكاديمية أَوْج</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {exploreItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-right px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-3 ${
                        isActive 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                          : 'text-slate-300 bg-white/5 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-extrabold">{item.label}</div>
                        <div className="text-[10px] text-slate-400">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Call to Action */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                سجّل الآن لجلسة تجريبية مجانية
              </button>

              <a
                href={`tel:${ACADEMY_INFO.phone}`}
                className="w-full bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs py-2.5 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-emerald-400 dir-ltr"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{ACADEMY_INFO.phone}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
