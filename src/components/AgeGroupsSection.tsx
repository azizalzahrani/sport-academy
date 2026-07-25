import React from 'react';
import { AGE_GROUPS } from '../data/academyData';
import { Layers, CheckCircle2, ArrowLeft } from 'lucide-react';

interface AgeGroupsSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const AgeGroupsSection: React.FC<AgeGroupsSectionProps> = ({ openBookingModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Layers className="w-4 h-4" />
            <span>مسار النمو والتطوير</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            الفئات العمرية <span className="text-gradient-emerald">والمسارات التدريبية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            تم تصميم منهجيتنا الرياضية لتناسب القدرات البدنية والذهنية لكل مرحلة عمرية، مما يضمن التطور المتوازن والسلامة الكاملة.
          </p>
        </div>

        {/* Age Groups Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AGE_GROUPS.map((group) => (
            <div
              key={group.id}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Top Badge & Age */}
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold px-3 py-1 rounded-full">
                    {group.badge}
                  </span>
                  <span className="text-xl font-black text-white font-heading bg-slate-900 px-4 py-1.5 rounded-xl border border-white/10">
                    {group.range}
                  </span>
                </div>

                {/* Title & Focus */}
                <div>
                  <h3 className="text-2xl font-black text-white">{group.title}</h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">التركيز الرئيسي: {group.focus}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {group.description}
                </p>

                {/* Expected Outcomes */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-bold text-slate-200">المستهدفات والمخرجات:</h4>
                  <div className="space-y-1.5">
                    {group.outcomes.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Sports */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-400 mb-2">البرامج الرياضية المقترحة لهذه الفئة:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.recommendedSports.map((s, sIdx) => (
                      <span key={sIdx} className="bg-slate-900 text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-extrabold text-xs py-3 rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>تسجيل مشترك في {group.title}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Private Coaching & Adults Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-[#0B132B] to-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30">
                برامج خاصة وفردية
              </span>
              <h3 className="text-2xl font-black text-white">التدريب الخاص والتأهيل البدني الفردي</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                هل يبحث طفلك عن إعداد خاص وتطوير مكثف؟ نوفر جلسات تدريب فردية (1 على 1) مع مدربين متفرغين لتطوير جوانب محددة كالتسديد، اللياقة الخاصة، أو التأهيل من الإصابات.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                طلب استشارة وتدريب خاص
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
