import React, { useState } from 'react';
import { PROGRAMS } from '../data/academyData';
import type { Program, SportType } from '../types';
import { Trophy, Clock, CheckCircle2, ArrowLeft, X, Sparkles } from 'lucide-react';

interface ProgramsSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ openBookingModal }) => {
  const [selectedSport, setSelectedSport] = useState<SportType>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filterTabs: { id: SportType; label: string }[] = [
    { id: 'all', label: 'كافة البرامج' },
    { id: 'football', label: 'كرة القدم' },
    { id: 'basketball', label: 'كرة السلة' },
    { id: 'swimming', label: 'السباحة' },
    { id: 'athletics', label: 'ألعاب القوى والسرعة' },
    { id: 'fitness', label: 'التأسيس البدني' },
    { id: 'girls', label: 'أكاديمية الفتيات' },
  ];

  const filteredPrograms = selectedSport === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.sport === selectedSport);

  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Trophy className="w-4 h-4" />
            <span>برامج رياضية متكاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            البرامج والأكاديميات <span className="text-gradient-emerald">الرياضية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            اختر الرياضة المناسبة لطفلك من بين برامجنا المعتمدة والمصممة لتطوير الأداء وبناء اللياقة والشخصية القيادية.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {filterTabs.map((tab) => {
            const isActive = selectedSport === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSport(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Program Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                
                {/* Age Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                  الفئة: {prog.ageRange}
                </div>

                {prog.featured && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" /> مميز
                  </div>
                )}
              </div>

              {/* Program Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                    {prog.tagline}
                  </p>
                </div>

                {/* Skill Focus Bullets */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-slate-400 block">التركيز المهاراتي الرئيسي:</span>
                  <div className="space-y-1">
                    {prog.skillFocus.slice(0, 3).map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schedule & Price */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{prog.scheduleSummary}</span>
                  </div>
                  <div className="text-emerald-400 font-extrabold text-sm">
                    {prog.priceMonthly} <span className="text-[10px] text-slate-400">ر.س / شهرياً</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 rounded-xl border border-white/10 transition-colors"
                  >
                    التفاصيل الشاملة
                  </button>
                  <button
                    onClick={() => openBookingModal(prog.id)}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1"
                  >
                    <span>احجز الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 p-6 sm:p-8 space-y-6 relative text-right">
            
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img src={activeModalProgram.image} alt={activeModalProgram.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                  الفئة: {activeModalProgram.ageRange}
                </span>
                <h3 className="text-2xl font-black">{activeModalProgram.title}</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-emerald-400">عن البرنامج والمستهدفات</h4>
                <p className="text-sm text-slate-300 leading-relaxed mt-1 font-light">
                  {activeModalProgram.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">المهارات المستهدفة بالكامل:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProgram.skillFocus.map((sf, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{sf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block">جدول التدريب الأسبوعي:</span>
                  <span className="text-white font-bold">{activeModalProgram.scheduleSummary}</span>
                </div>
                <div className="text-left">
                  <span className="text-slate-400 block">رسوم الاشتراك الشهري:</span>
                  <span className="text-emerald-400 font-black text-lg">{activeModalProgram.priceMonthly} ر.س</span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    const progId = activeModalProgram.id;
                    setActiveModalProgram(null);
                    openBookingModal(progId);
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2"
                >
                  <span>التسجيل الجاري وحجز التجربة المجانية</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
