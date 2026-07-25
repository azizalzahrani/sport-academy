import React, { useState } from 'react';
import { X, CheckCircle2, ArrowLeft, Ticket } from 'lucide-react';
import { PROGRAMS } from '../data/academyData';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  showToast: (msg: string) => void;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  initialProgramId,
  showToast,
}) => {
  const [step, setStep] = useState<number>(1);

  const [bookingData, setBookingData] = useState({
    programId: initialProgramId || 'football',
    athleteName: '',
    athleteAgeGroup: '7-9',
    parentName: '',
    phone: '',
    email: '',
    preferredDay: 'الأحد',
    healthDeclaration: true,
  });

  const [bookingCode, setBookingCode] = useState<string>('');

  if (!isOpen) return null;

  const handleProgramSelect = (progId: string) => {
    setBookingData({ ...bookingData, programId: progId });
    setStep(2);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      if (!bookingData.athleteName.trim()) return;
      setStep(3);
    } else if (step === 3) {
      if (!bookingData.parentName.trim() || !bookingData.phone.trim()) return;
      // Generate Booking Ref
      const randomRef = 'OWJ-' + Math.floor(10000 + Math.random() * 90000);
      setBookingCode(randomRef);
      setStep(4); // Confirmation
      showToast('تم تأكيد حجز التجربة المجانية بنجاح! رقم الحجز: ' + randomRef);
    }
  };

  const selectedProgObj = PROGRAMS.find((p) => p.id === bookingData.programId) || PROGRAMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 text-right">
      <div className="glass-panel max-w-xl w-full rounded-3xl border border-white/15 p-6 sm:p-8 space-y-6 relative">
        
        {/* Modal Close */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-[11px] font-bold text-emerald-400">
            <Ticket className="w-3.5 h-3.5" />
            <span>حجز تجربة رياضية مجانية 100%</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
            تسجيل حجز الجلسة التجريبية
          </h3>
          <p className="text-xs text-slate-400">خطوات بسيطة لتجربة المرافـق والالتقاء بالطاقم التدريبي بجدة</p>
        </div>

        {/* Progress Bar Steps */}
        <div className="flex items-center justify-between border-y border-white/10 py-3 text-xs">
          <div className={`flex items-center gap-1 font-bold ${step >= 1 ? 'text-emerald-400' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">1</span>
            <span>اختيار الرياضة</span>
          </div>
          <div className="h-0.5 w-8 bg-white/10" />
          <div className={`flex items-center gap-1 font-bold ${step >= 2 ? 'text-emerald-400' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">2</span>
            <span>بيانات المشارك</span>
          </div>
          <div className="h-0.5 w-8 bg-white/10" />
          <div className={`flex items-center gap-1 font-bold ${step >= 3 ? 'text-emerald-400' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">3</span>
            <span>معلومات ولي الأمر</span>
          </div>
        </div>

        {/* Step 1: Select Program */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300">اختر الأكاديمية أو البرنامج المطلوب:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => handleProgramSelect(prog.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    bookingData.programId === prog.id
                      ? 'border-emerald-500 bg-emerald-500/10 text-white'
                      : 'border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <div>
                    <h5 className="text-sm font-bold">{prog.title}</h5>
                    <span className="text-[10px] text-slate-400 block">{prog.ageRange}</span>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${bookingData.programId === prog.id ? 'text-emerald-400' : 'text-slate-600'}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Athlete Info */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">البرنامج المختار:</span>
              <span className="text-emerald-400 font-bold">{selectedProgObj.title}</span>
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1 font-medium">اسم الابن / الابنة (المشارك) *</label>
              <input
                type="text"
                required
                placeholder="أدخل الاسم الثلاثي للمشارك"
                value={bookingData.athleteName}
                onChange={(e) => setBookingData({ ...bookingData, athleteName: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">الفئة العمرية *</label>
                <select
                  value={bookingData.athleteAgeGroup}
                  onChange={(e) => setBookingData({ ...bookingData, athleteAgeGroup: e.target.value })}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="4-6">4 - 6 سنوات (المبادرة الباكرة)</option>
                  <option value="7-9">7 - 9 سنوات (التأسيس)</option>
                  <option value="10-13">10 - 13 سنة (التطوير التكتيكي)</option>
                  <option value="14-17">14 - 17 سنة (الأداء التنافسي)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">اليوم المفضل للحضور *</label>
                <select
                  value={bookingData.preferredDay}
                  onChange={(e) => setBookingData({ ...bookingData, preferredDay: e.target.value })}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="الأحد">الأحد</option>
                  <option value="الإثنين">الإثنين</option>
                  <option value="الثلاثاء">الثلاثاء</option>
                  <option value="الأربعاء">الأربعاء</option>
                  <option value="الخميس">الخميس</option>
                  <option value="السبت">السبت (اليوم المفتوح)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-slate-800 text-slate-300 px-4 py-3 rounded-xl text-xs font-bold"
              >
                تغيير الرياضة
              </button>
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg flex items-center justify-center gap-1"
              >
                <span>المتابعة إلى بيانات التنسيق</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Parent Info */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="text-xs text-slate-300 block mb-1 font-medium">اسم ولي الأمر *</label>
              <input
                type="text"
                required
                placeholder="الاسم الكامل لولي الأمر"
                value={bookingData.parentName}
                onChange={(e) => setBookingData({ ...bookingData, parentName: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">رقم الجوال (واتساب للتأكيد) *</label>
                <input
                  type="tel"
                  required
                  placeholder="05XXXXXXXX"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white dir-ltr text-right focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">البريد الإلكتروني (اختياري)</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="healthCheck"
                checked={bookingData.healthDeclaration}
                onChange={(e) => setBookingData({ ...bookingData, healthDeclaration: e.target.checked })}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
              <label htmlFor="healthCheck" className="text-[11px] text-slate-300 cursor-pointer">
                أقر بلياقة المشترك الصحية لحضور الحصة التدريبية وموافقتي على لائحة السلامة.
              </label>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-slate-800 text-slate-300 px-4 py-3 rounded-xl text-xs font-bold"
              >
                السابق
              </button>
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg flex items-center justify-center gap-1"
              >
                <span>تأكيد حجز التجربة المجانية</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Booking Confirmation Ticket */}
        {step === 4 && (
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-black text-white">مبارك! تم حجز الحصة التجريبية</h4>
              <p className="text-xs text-slate-300">يسعدنا استقبالكم في مجمع أكاديمية أَوْج بجدة</p>
            </div>

            {/* Ticket Card Summary */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-emerald-500/30 text-right space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 block">رقم حجز التجربة:</span>
                  <span className="text-emerald-400 font-black text-lg tracking-widest">{bookingCode}</span>
                </div>
                <div className="bg-emerald-500/10 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                  مؤكـد مجاناً
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div>
                  <span className="text-slate-500 block text-[10px]">المشارك:</span>
                  <span className="font-bold text-white">{bookingData.athleteName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">البرنامج:</span>
                  <span className="font-bold text-white">{selectedProgObj.title}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">اليوم المفضل:</span>
                  <span className="font-bold text-white">{bookingData.preferredDay}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">ولي الأمر:</span>
                  <span className="font-bold text-white">{bookingData.parentName}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              تم إرسال تفاصيل التنسيق وموقع الأكاديمية هاتفياً. نسعد برؤيتكم!
            </p>

            <button
              onClick={onClose}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg transition-all"
            >
              تم وإغلاق
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
