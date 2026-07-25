import React from 'react';
import { FACILITIES } from '../data/academyData';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FacilitiesSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ openBookingModal }) => {
  const safetyFeatures = [
    { title: 'تعقيم ونظافة دورية', desc: 'تطهير يومي شامل للملاعب، المسبح، وغرف التبديل لمنع انتشار العدوى.' },
    { title: 'كاميرات رقابة 24/7', desc: 'تغطية أمنية كاملة لكافة المرافق لمتابعة أمان المشتركين واطمئنان الأهالي.' },
    { title: 'منقذون وكادر طبي', desc: 'تواجد دائم لمنقذي سباحة معتمدين ومستلزمات إغافات أولية متكاملة.' },
    { title: 'دخول آمن ببوابات ذكية', desc: 'نظام الكتروني لمتابعة دخول وخروج المشتركين وأسرهم فقط.' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Building2 className="w-4 h-4" />
            <span>مرافق عالمية بجدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            مرافق رياضية <span className="text-gradient-emerald">استثنائية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            صُممت منشآتنا في موقع حيوي بجدة لتوفر أعلى معايير السلامة والأداء الرياضي والراحة للعائلات.
          </p>
        </div>

        {/* Facilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                    {fac.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {fac.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <h4 className="text-xs font-bold text-slate-400">مميزات المرفق:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {fac.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-extrabold text-xs py-3 rounded-xl border border-white/10 transition-all"
                >
                  حجز زيارة للمرافق
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Hygiene Guarantee */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 bg-gradient-to-br from-slate-900 via-[#0B132B] to-slate-900">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
              معايير السلامة والنظافة
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              بيئة آمنة وصحية تمنح العائلات راحة البال
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((sf, idx) => (
              <div key={idx} className="bg-slate-900/90 p-5 rounded-2xl border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{sf.title}</h4>
                <p className="text-xs text-slate-300 leading-normal font-light">{sf.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
