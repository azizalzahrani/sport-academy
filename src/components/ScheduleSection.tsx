import React, { useState } from 'react';
import { SCHEDULE_ITEMS } from '../data/academyData';
import { Calendar, Clock, MapPin, User, CheckCircle, ArrowLeft, Filter, Sparkles } from 'lucide-react';

interface ScheduleSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ openBookingModal }) => {
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [selectedSport, setSelectedSport] = useState<string>('all');

  const days = ['all', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'السبت'];
  const sports = ['all', 'كرة القدم', 'كرة السلة', 'السباحة', 'التأسيس البدني'];

  const filteredSchedule = SCHEDULE_ITEMS.filter((item) => {
    const matchesDay = selectedDay === 'all' || item.day === selectedDay;
    const matchesSport = selectedSport === 'all' || item.sport.includes(selectedSport);
    return matchesDay && matchesSport;
  });

  const packages = [
    {
      title: 'الحصة التجريبية',
      price: 'مجاناً',
      badge: 'الخطوة الأولى',
      period: 'جلسة تقييمية واحدة',
      features: [
        'تقييم المستوى المهاراتي والبدني',
        'حضور حصة كاملة مع الفريق',
        'التعرف على الكابتن والمرافق',
        'بدون أي التزام مالي مسبق',
      ],
      popular: false,
      buttonText: 'احجز تجربتك الآن',
    },
    {
      title: 'الاشتراك الشهري',
      price: '850 ر.س',
      badge: 'الأكثر مرونة',
      period: 'لكل شهر (12 حصة تدريبية)',
      features: [
        '3 حصص تدريبية أسبوعياً',
        'طقم الأكاديمية الموحد مجاناً',
        'تقرير تقييمي دوري لولي الأمر',
        'خصم 15% للطفل الثاني من العائلة',
      ],
      popular: true,
      buttonText: 'سجّل في الاشتراك الشهري',
    },
    {
      title: 'الاشتراك النصف سنوي (6 أشهر)',
      price: '4,200 ر.س',
      badge: 'وفر 18%',
      period: '6 أشهر تدريب مستمر',
      features: [
        'كافة مميزات الاشتراك الشهري',
        'حقيبة رياضية متكاملة مجاناً',
        'اشتراك مجاني في المخيم الصيفي',
        'إمكانية إيقاف الاشتراك لمدة أسبوعين',
      ],
      popular: false,
      buttonText: 'سجّل في الاشتراك النصف سنوي',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Calendar className="w-4 h-4" />
            <span>جدول الحصص والتسجيل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            جدول التمارين <span className="text-gradient-emerald">والباقات</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            اختر الموعد واليوم المناسب لطفلك عبر جدولنا التفاعلي، واستكشف باقات الاشتراك المتاحة.
          </p>
        </div>

        {/* Timetable Filters */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
            <Filter className="w-4 h-4" />
            <span>تصفية الجدول التفاعلي:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Filter by Day */}
            <div>
              <label className="text-xs text-slate-300 block mb-1.5 font-medium">حسب اليوم:</label>
              <div className="flex flex-wrap gap-1.5">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedDay === day
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-900 text-slate-300 border border-white/5 hover:bg-slate-800'
                    }`}
                  >
                    {day === 'all' ? 'كافة الأيام' : day}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Sport */}
            <div>
              <label className="text-xs text-slate-300 block mb-1.5 font-medium">حسب الرياضة:</label>
              <div className="flex flex-wrap gap-1.5">
                {sports.map((sp) => (
                  <button
                    key={sp}
                    onClick={() => setSelectedSport(sp)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedSport === sp
                        ? 'bg-sky-500 text-slate-950'
                        : 'bg-slate-900 text-slate-300 border border-white/5 hover:bg-slate-800'
                    }`}
                  >
                    {sp === 'all' ? 'كافة الرياضات' : sp}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Schedule List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-slate-900 text-emerald-400 text-xs font-extrabold px-3 py-1 rounded-lg border border-white/10">
                    {item.day}
                  </span>
                  <span className="text-[11px] text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-md">
                    متبقي {item.seatsLeft} مقاعد
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">{item.sport}</h4>
                  <p className="text-xs text-slate-300 mt-0.5">الفئة: {item.ageGroup}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/5 font-light">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.coach}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="w-full bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs py-2.5 rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center gap-1"
              >
                <span>احجز هذا الموعد</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Pricing & Packages Breakdown */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              باقات الاشتراكات والعضويات
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              خيارات مرنة ومناسبة لاحتياجات كل عائلة بدون رسوم خفية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`glass-panel p-8 rounded-3xl border relative flex flex-col justify-between space-y-6 ${
                  pkg.popular 
                    ? 'border-emerald-500/60 bg-gradient-to-b from-slate-900 via-[#0B132B] to-slate-900 shadow-2xl shadow-emerald-500/10 scale-105' 
                    : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> الأكثـر طلباً من العوائل
                  </div>
                )}

                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full inline-block">
                    {pkg.badge}
                  </span>
                  <h4 className="text-xl font-bold text-white">{pkg.title}</h4>
                  
                  <div className="space-y-0.5">
                    <div className="text-3xl font-black text-white font-heading">{pkg.price}</div>
                    <p className="text-xs text-slate-400">{pkg.period}</p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openBookingModal()}
                  className={`w-full font-black text-xs py-3.5 rounded-xl shadow-lg transition-all ${
                    pkg.popular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-white/10'
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
