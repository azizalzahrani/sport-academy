import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, HeartPulse, RefreshCw, Camera } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'safeguarding' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  if (!isOpen) return null;

  const tabs = [
    { id: 'safeguarding', label: 'حماية الطفل', icon: ShieldCheck },
    { id: 'health', label: 'الصحة والسلامة', icon: HeartPulse },
    { id: 'terms', label: 'الشروط والأحكام', icon: FileText },
    { id: 'privacy', label: 'سياسة الخصوصية', icon: Lock },
    { id: 'refund', label: 'الإلغاء والاسترجاع', icon: RefreshCw },
    { id: 'media', label: 'إقرار التصوير', icon: Camera },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 text-right">
      <div className="glass-panel max-w-4xl w-full max-h-[90vh] rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold text-white font-heading">اللوائح والسياسات التنظيمية لأكاديمية أَوْج</h3>
            <p className="text-xs text-slate-400">نلتزم بأعلى معايير الشفافية والسلامة لحماية كافة المشتركين وأسرهم</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/5'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          
          {activeTab === 'safeguarding' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-emerald-400">سياسة حماية وصون الطفل (Child Safeguarding Policy)</h4>
              <p>
                تضع أكاديمية أَوْج سلامة وصون الأطفال والناشئين في مقدمة أولوياتها. جميع العاملين والمدربين بالأكاديمية يخضعون للتحقق التدقيقي والالتزام الكامل بمبادئ حماية الطفل المعترف بها رسمياً.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 pt-2">
                <li>منع تواجد أي مدرب أو كادر مع طفل بمفرده في أماكن مغلقة دون تواجد كادر آخر أو إشراف مرئي.</li>
                <li>التأكيد على التعامل الإيجابي والتربوي المشجع، وحظر أي شكل من أشكال الترهيب أو الإساءة اللفظية أو البدنية.</li>
                <li>تحديد مسؤول حماية معتمد بالأكاديمية لتلقي أي ملاحظة أو بلاغ من أولياء الأمور والتعامل معها بجهوزية وسرية فائقة.</li>
              </ul>
            </div>
          )}

          {activeTab === 'health' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-sky-400">سياسة الصحة والسلامة العامة (Health & Safety Policy)</h4>
              <p>
                تلتزم الأكاديمية بتوفير بيئة تدريبية صحية وآمنة خالية من المخاطر في جميع مرافقها بجدة.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 pt-2">
                <li>إجراء إحماء كامل وممنهج قبل أي نشاط رياضي لتجنب الشد العضلي والإصابات المفصلية.</li>
                <li>فحص وصيانة الملاعب، الصالات، وأنظمة المسبح يومياً للتأكد من سلامة الأرضيات والتصريف وجودة المياه.</li>
                <li>تأمين كافة مستلزمات الإسعافات الأولية وتواجد كادر مؤهل للتعامل مع أي حالة طارئة فورا.</li>
                <li>إلزام أولياء الأمور بالإفصاح عن أي حالة صحية أو حساسية خاصة للمشترك عند التسجيل.</li>
              </ul>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white">الشروط والأحكام العامة (Terms & Conditions)</h4>
              <p>
                تحدد هذه الشروط العلاقة بين ولي الأمر / المشترك وأكاديمية أَوْج الرياضية بجدة:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 pt-2">
                <li>التزام المشترك بالحضور بالزي الموحد الرسمي المعتمد للأكاديمية والوصول في المواعيد المحددة.</li>
                <li>احترام قواعد السلوك الرياضي والانضباط داخل المرافق ومع الزملاء والمدربين.</li>
                <li>تحتفظ الأكاديمية بحق تعديل أو دمج بعض الحصص في الإجازات الرسمية مع إشعارات مسبقة لأولياء الأمور.</li>
              </ul>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-emerald-400">سياسة الخصوصية وحماية البيانات (Privacy Policy)</h4>
              <p>
                نحترم خصوصية بياناتكم الشخصية ونلتزم بنظام حماية البيانات الشخصية في المملكة العربية السعودية:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 pt-2">
                <li>يتم جمع بيانات المشترك وأولياء الأمور لأغراض التواصل والتسجيل والمتابعة الرياضية فقط.</li>
                <li>لا يتم مشاركة أي معلومات شخصية أو أرقام تواصل مع أي أطراف خارجية تحت أي ظرف.</li>
                <li>بياناتكم محفوظة في خوادم مشفرة وآمنة وتخضع لأقصى درجات الحماية السايبرانية.</li>
              </ul>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-amber-400">سياسة الإلغاء والاسترجاع (Refund Policy)</h4>
              <p>
                حرصاً على مرونة وسلاسة التعامل مع الأهالي، تخضع الاشتراكات للقواعد التالية:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 pt-2">
                <li>يحق لولي الأمر استرجاع مبلغ الاشتراك كاملاً خلال أول 7 أيام من بدء الاشتراك في حال عدم الرغبة بالمتابعة.</li>
                <li>في الاشتراكات السنوية والنبرية، يمكن تعليق الاشتراك (Freeze) لمدة تصل إلى أسبوعين بعذر طبي أو سفر.</li>
                <li>الحصص التجريبية الأولية مجانية بالكامل ولا يترتب عليها أي رسوم مالية.</li>
              </ul>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-sky-400">إقرار التصوير والإعلام (Photography & Media Consent)</h4>
              <p>
                تقوم الأكاديمية بتوثيق بعض اللحظات والتمارين الرياضية لأغراض التقييم الفني والتغطيات الإعلامية المشجعة:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 pt-2">
                <li>يتم التقاط الصور والفيديوهات ضمن إطار محتشم ورياضي يعكس التميز والروح الرياضية.</li>
                <li>يحق لولي الأمر تحديد عدم رغبته بظهور طفله في منصات التواصل الاجتماعي عند تعبئة نموذج التسجيل.</li>
                <li>تلتزم الأكاديمية بالمعايير الأخلاقية والثقافية الوطنية في نشر أي محتوى مرئي.</li>
              </ul>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-xl transition-all"
          >
            إغلاق وموافق
          </button>
        </div>

      </div>
    </div>
  );
};
