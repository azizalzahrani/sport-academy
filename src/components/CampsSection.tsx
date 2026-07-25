import React from 'react';
import { CAMPS } from '../data/academyData';
import { Calendar, MapPin, Sparkles, ArrowLeft, Users } from 'lucide-react';

interface CampsSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const CampsSection: React.FC<CampsSectionProps> = ({ openBookingModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>الأنشطة الموسمية والفعاليات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            المخيمات الصيفية <span className="text-gradient-emerald">والبطولات</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            برامج مكثفة في إجازات الفصول والمخيمات الصيفية والبطولات التنافسية لإبقاء أبنائكم في أوج النشاط والحماس.
          </p>
        </div>

        {/* Camps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAMPS.map((camp) => (
            <div
              key={camp.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                    {camp.type}
                  </span>
                  <span className="text-amber-400 text-xs font-semibold bg-amber-500/10 px-2.5 py-1 rounded-md">
                    متبقي {camp.spotsLeft} مقاعد
                  </span>
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  {camp.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {camp.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>التاريخ: {camp.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>الموقع: {camp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>الفئة العمرية: {camp.ageRange}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">رسوم المشاركة:</span>
                  <span className="text-emerald-400 font-extrabold text-sm sm:text-base">{camp.price}</span>
                </div>
                <button
                  onClick={() => openBookingModal()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1"
                >
                  <span>سجّل بالمخيم</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
