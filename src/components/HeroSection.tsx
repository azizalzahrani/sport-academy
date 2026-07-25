import React from 'react';
import { ACADEMY_STATS } from '../data/academyData';
import type { PageTab } from '../types';
import { ShieldCheck, Award, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  setActiveTab: (tab: PageTab) => void;
  openBookingModal: (programId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab, openBookingModal }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#080D1A] py-12 lg:py-20 text-right">
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500 rounded-full blur-[140px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>أكاديمية أَوْج الرياضية - جدة | الموسم الجديد 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] font-heading tracking-tight">
              نُطوّر الأبطال، <br />
              <span className="text-gradient-emerald">داخل الملعب وخارجه.</span>
            </h1>

            {/* Positioning Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              الوجهة الرياضية الرائدة للأطفال والشباب بجدة لتطوير المهارات الرياضية، بناء اللياقة، وتعزيز الثقة والانضباط في بيئة آمنة وتحت إشراف مدربين معتمدين.
            </p>

            {/* Quick Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {[
                'تدريب احترافي للفئات السنية',
                'مرافق آمنة ومكيفة بجدة',
                'متابعة دورية مع الأسر',
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium bg-slate-900/60 border border-white/5 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openBookingModal()}
                className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all flex items-center gap-3"
              >
                <span>سجّل الآن (تجربة مجانية)</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('programs')}
                className="bg-slate-800/90 hover:bg-slate-700 text-slate-100 border border-white/10 font-bold text-base px-7 py-4 rounded-2xl hover:border-emerald-500/40 transition-all flex items-center gap-2"
              >
                <span>استكشف برامجنا</span>
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2 space-x-reverse">
                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="/images/coach_salman.jpg" alt="مدرب" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="/images/coach_lama.jpg" alt="مدربة" />
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-[10px]">
                  +35
                </div>
              </div>
              <p>ينضم إلينا أكثر من <strong className="text-white font-bold">1,200 مشترك ومشتركة</strong> تحت إشراف نخبة الكفاءات الرياضية.</p>
            </div>

          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            
            {/* Frame Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900">
              <img 
                src="/images/hero.jpg" 
                alt="ناشئون يتدربون في أكاديمية أوج جدة" 
                className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent" />

              {/* Floating Badge Overlay */}
              <div className="absolute bottom-6 right-6 left-6 glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">بيئة احترافية وآمنة</h4>
                    <p className="text-xs text-slate-300">طواقم معتمدة ومتابعة مستمرة للرياضيين</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('facilities')}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20"
                >
                  المرافق
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Row Counter */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ACADEMY_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden"
            >
              <div className="text-3xl lg:text-4xl font-black text-gradient-emerald font-heading mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
