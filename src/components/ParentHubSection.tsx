import React, { useState } from 'react';
import { FAQS } from '../data/academyData';
import { HeartHandshake, BookOpen, Apple, Droplet, ShieldCheck, ChevronDown, Download, CheckSquare, Bell } from 'lucide-react';

interface ParentHubProps {
  openLegalModal: (tab?: string) => void;
}

export const ParentHubSection: React.FC<ParentHubProps> = ({ openLegalModal }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const guides = [
    {
      icon: Apple,
      title: 'التغذية الصحية للرياضي الناشئ',
      desc: 'وجبة خفيفة غنية بالنشويات المعقدة قبل التمارين بساعتين، وتناول البروتين بعد التمرين لبناء العضلات.',
    },
    {
      icon: Droplet,
      title: 'الترطيب وشرب الماء بجدة',
      desc: 'ضرورة شرب 500 مل ماء قبل التمرين، وتقديم رشفات ماء كل 20 دقيقة في الأجواء الحارة للوقاية من الجفاف.',
    },
    {
      icon: ShieldCheck,
      title: 'حماية الطفل وسلامته البدنية',
      desc: 'إحماء كامل قبل اللعب، ارتداء واقي الساقين في كرة القدم، والالتزام بإرشادات المدربين.',
    },
    {
      icon: HeartHandshake,
      title: 'التوازن بين الدراسة والرياضة',
      desc: 'تنظيم الوقت وتعزيز الانضباط الذاتي يساعد المشترك على التفوق الأكاديمي والرياضي معاً.',
    },
  ];

  const checklist = [
    'إحضار زجاجة ماء خاصة ومكتوب عليها اسم المشترك',
    'ارتداء الزي الموحد للأكاديمية والحذاء الرياضي المناسب للمرفق',
    'الوصول قبل موعد الحصة بـ 10 دقائق لضمان الإحماء وتجنب الإصابات',
    'التأكد من أخذ قسط كافٍ من النوم والراحة في ليلة التدريب',
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <BookOpen className="w-4 h-4" />
            <span>الدليل التثقيفي والدعم الأسري</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            مركز <span className="text-gradient-emerald">أولياء الأمور</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            مساحتكم الخاصة للحصول على التوجيهات الصحية، متابعة الإرشادات، والإجابة عن جميع التساؤلات لضمان أفضل تجربة رياضية لأبنائكم.
          </p>
        </div>

        {/* Educational Guides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((g, idx) => {
            const IconComp = g.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{g.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{g.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Training Prep Checklist & Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Checklist */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <CheckSquare className="w-5 h-5" />
              <span>قائمة تحضير المشترك ليوم التدريب</span>
            </div>
            <p className="text-xs text-slate-300 font-light">
              حرصاً على سلامة وجاهزية طفلك، نوصي بمراجعة هذه القائمة قبل التوجه للأكاديمية:
            </p>
            <div className="space-y-3 pt-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-white/5 text-xs text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements & Downloads */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <Bell className="w-5 h-5" />
                <span>إعلانات الأكاديمية الهامة</span>
              </div>
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[10px] text-emerald-400 font-semibold block">تحديث يوليو 2026</span>
                <h4 className="text-xs sm:text-sm font-bold text-white">انطلاق مواعيد التدريب المسائي الصيفي</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  تم تكييف كافة الصالات المغلقة والمسبح لتتناسب مع أوقات التدريب الصيفية المريحة للأهالي بجدة.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-slate-300">تحميل اللوائح والسياسات:</h4>
              <button
                onClick={() => openLegalModal('safeguarding')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold p-3 rounded-xl border border-white/10 flex items-center justify-between transition-colors"
              >
                <span>دليل حماية الطفل والسلامة العامة</span>
                <Download className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-white font-heading">الأسئلة الشائعة من أولياء الأمور</h3>
            <p className="text-xs text-slate-400">إجابات مباشرة وشفافة حول كافة استفساراتكم</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-right font-bold text-sm text-white flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
