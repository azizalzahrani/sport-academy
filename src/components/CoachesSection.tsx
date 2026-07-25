import React from 'react';
import { COACHES } from '../data/academyData';
import { UserCheck, Globe, Shield } from 'lucide-react';

interface CoachesSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ openBookingModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <UserCheck className="w-4 h-4" />
            <span>نخبة الخبراء والمدربين</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            الطاقم التدريبي <span className="text-gradient-emerald">والفني</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            يضم فريقنا نخبة من المدربين والمدربات المعتمدين والمشغوفين بتطوير مهارات الناشئين في بيئة تربوية وأخلاقية رفيعة.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Coach Portrait */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[11px] font-bold px-3 py-1 rounded-full">
                    خبرة {coach.experienceYears} سنوات
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      {coach.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {coach.bio}
                  </p>

                  {/* Philosophy Quote */}
                  <div className="bg-slate-900/80 p-3 rounded-xl border-r-2 border-emerald-400 text-[11px] text-slate-300 italic">
                    "{coach.philosophy}"
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-white/5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>اللغات: {coach.languages.join('، ')}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 rounded-xl border border-white/10 transition-colors"
                >
                  احجز حصة مع المدرب
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Safe Coaching Promise */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center max-w-3xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <Shield className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold text-white">التزامنا بالتوجيه الآمن والتربية الرياضية</h4>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            يخضع جميع مدربينا لإجراءات التحقق والأمان والتدريب المستمر في الإسعافات الأولية والتوجيه النفسي الإيجابي لضمان التعامل التربوي السليم مع كافة المشتركين.
          </p>
        </div>

      </div>
    </section>
  );
};
