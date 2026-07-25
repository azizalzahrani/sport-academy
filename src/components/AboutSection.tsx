import React from 'react';
import { Shield, Target, Eye, Sparkles, Heart, Compass, CheckCircle, MapPin } from 'lucide-react';

interface AboutSectionProps {
  openBookingModal: (programId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ openBookingModal }) => {
  const values = [
    {
      icon: Shield,
      title: 'البيئة الآمنة والسلامة أولاً',
      desc: 'نوفر أقصى معايير السلامة والنظافة والرقابة المستمرة لحماية المشتركين جسدياً ونفسياً.',
    },
    {
      icon: Target,
      title: 'التطوير المهاراتي المستدام',
      desc: 'ننهج مناهج علمية مدروسة تركز على البناء التدريجي والتطوير المستمر دون ضغوط سلبية.',
    },
    {
      icon: Heart,
      title: 'بناء الشخصية والانضباط',
      desc: 'نغرس قيم الاحترام، العمل الجماعي، الثقة بالنفس، ومواجهة التحديات بروح رياضية.',
    },
    {
      icon: Sparkles,
      title: 'متعة الحركة والرياضة',
      desc: 'نجعل من الرياضة شغفاً ممتعاً وأسلوب حياة سعيد يبني صحة الطفل ونشاطه على المدى الطويل.',
    },
  ];

  const whyChooseUs = [
    'كفاءات تدريبية سعودية ودولية معتمدة من الاتحادات الرياضية',
    'مرافق رياضية حديثة ومكيفة بمعايير أولمبية وسط مدينة جدة',
    'برامج رياضية مخصصة لكل فئة عمرية من سن 4 إلى 17 سنة',
    'قسم خاص بالفتيات تحت إشراف مدربات كفء وبيئة مستقلة',
    'تقارير دورية تطلع ولي الأمر على التطور المهاراتي والبدني',
    'مرونة في الأوقات والاشتراكات تناسب جدول المدرسة والعائلة',
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#080D1A] relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Compass className="w-4 h-4" />
            <span>قصتنا ورؤيتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            عن <span className="text-gradient-emerald">أكاديمية أَوْج الرياضية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            تأسست أكاديمية أَوْج بجدة لتكون النموذج الرائد في إعداد أجيال من الأبطال الواثقين بأنفسهم والمتميزين بدنياً وأخلاقياً.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              منظومة رياضية تربوية صُممت بعناية في عروس البحر الأحمر
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              نحن نؤمن بأن الرياضة ليست مجرد أرقام وكؤوس، بل هي وسيلة لبناء الشخصية المتوازنة. في أكاديمية أَوْج بجدة، نجمع بين أحدث منهجيات التدريب الأوربية والعالمية وبين القيم والمبادئ الوطنية السعودية.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              نوفر لمشاركينا ملتقى رياضياً متكاملاً يشمل كرة القدم، السباحة، كرة السلة، وألعاب القوى في موقع متميز بحي الشاطئ والزهراء، يتيح للأسر الاطمئنان والاستمتاع بقضاء أجمل الأوقات في استراحة أولياء الأمور الراقية.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Target className="w-5 h-5" />
                  <span>رسالتنا</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  تقديم تعليم وتدريب رياضي عالي الجودة يبني أبطال الغد ويغرس الثقة والانضباط والصحة في بيئة محفزة.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Eye className="w-5 h-5" />
                  <span>رؤيتنا</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  أن نكون الأكاديمية الرياضية الأكثر ثقة وإلهاماً في المملكة العربية السعودية لصناعة جيل رياضي متميز.
                </p>
              </div>
            </div>

          </div>

          {/* Image Showcase */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <img 
              src="/images/lounge.jpg" 
              alt="استراحة أولياء الأمور ومرافق الأكاديمية" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 right-6 left-6 text-white space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <MapPin className="w-4 h-4" />
                <span>جدة - طريق الملك عبدالعزيز</span>
              </div>
              <h4 className="text-lg font-bold">موقع حيوي يجمع العائلة والرياضة في مكان واحد</h4>
            </div>
          </div>

        </div>

        {/* Core Values */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              قيمنا الجوهرية
            </h3>
            <p className="text-slate-400 text-sm">
              المبادئ التي ترتكز عليها كافة برامجنا وتدريباتنا اليومية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Families Choose Us */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                لماذا تختار العوائل في جدة <span className="text-emerald-400">أكاديمية أَوْج؟</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                نثمن ثقة أولياء الأمور ونسعى دائماً لتقديم تجربة رياضية واستثنائية تجعل من كل حصة تدريبية محطة تطوير وسعادة للطفل.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBookingModal()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  احجز جولة تعريفية وتجربة مجانية
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img src="/images/coach_salman.jpg" alt="مدرب أوج" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs text-emerald-400 font-bold">بيئة عائلية آمنة ومحفزة</p>
                    <p className="text-sm font-semibold">"هدفنا التنمية الشاملة للرياضي الناشئ"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
