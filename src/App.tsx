import { useState } from 'react';
import type { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { AgeGroupsSection } from './components/AgeGroupsSection';
import { CoachesSection } from './components/CoachesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CampsSection } from './components/CampsSection';
import { ParentHubSection } from './components/ParentHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { TrialBookingModal } from './components/TrialBookingModal';
import { Toast } from './components/Toast';
import { MessageSquare, Star, HeartHandshake } from 'lucide-react';
import { ACADEMY_INFO } from './data/academyData';

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProgramForBooking, setSelectedProgramForBooking] = useState<string | undefined>();
  
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalInitialTab, setLegalInitialTab] = useState<string>('safeguarding');

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const openBookingModal = (programId?: string) => {
    setSelectedProgramForBooking(programId);
    setIsBookingModalOpen(true);
  };

  const openLegalModal = (tab = 'safeguarding') => {
    setLegalInitialTab(tab);
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Sticky Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openBookingModal={openBookingModal}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection setActiveTab={setActiveTab} openBookingModal={openBookingModal} />
            <AboutSection openBookingModal={openBookingModal} />
            <ProgramsSection openBookingModal={openBookingModal} />
            <AgeGroupsSection openBookingModal={openBookingModal} />
            <FacilitiesSection openBookingModal={openBookingModal} />
            <CoachesSection openBookingModal={openBookingModal} />
            
            {/* Home Parent Reviews & Testimonials Section */}
            <section className="py-16 bg-[#0B132B]/60 border-y border-white/5 text-right">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
                    <HeartHandshake className="w-4 h-4" />
                    <span>آراء وتجارب العوائل بجدة</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                    ماذا يقول أولياء الأمور عن <span className="text-gradient-emerald">أكاديمية أَوْج؟</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'د. خالد الزهراني',
                      parentOf: 'والد المشترك طلال (9 سنوات - كرة قدم)',
                      review: 'لاحظت تطوراً مبهراً في مهارات طلال باللعب، ولكن الأهم بالنسبة لي هو ارتفاع مستوى انضباطه وثقته بنفسه. البيئة التدريبية راقية جداً في حي الشاطئ.',
                      rating: 5,
                    },
                    {
                      name: 'الأستاذة مريم العمودي',
                      parentOf: 'والدة المشتركة ريم (11 سنة - سباحة وسلة)',
                      review: 'قسم الفتيات ممتاز والمدربات متعاونات ومحترفات إلى أبعد حد. المسبح قمة في النظافة والاهتمام بالأمان يطمئن كل عائلة.',
                      rating: 5,
                    },
                    {
                      name: 'المهندس ياسر الغامدي',
                      parentOf: 'والد المشتركين فيصل وفارس (5 و12 سنة)',
                      review: 'استراحة أولياء الأمور كافيه مريح يتيح لي متابعة تمارين أبنائي والاستمتاع بالقهوة والعمل بكل راحة. أنصح بها بشدة.',
                      rating: 5,
                    },
                  ].map((rev, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, r) => (
                          <Star key={r} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                        "{rev.review}"
                      </p>
                      <div className="pt-2 border-t border-white/5">
                        <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                        <p className="text-[11px] text-emerald-400 font-semibold">{rev.parentOf}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <ScheduleSection openBookingModal={openBookingModal} />
            <CampsSection openBookingModal={openBookingModal} />
            <ParentHubSection openLegalModal={openLegalModal} />
            <ContactSection showToast={showToast} />
          </>
        )}

        {activeTab === 'about' && <AboutSection openBookingModal={openBookingModal} />}
        {activeTab === 'programs' && <ProgramsSection openBookingModal={openBookingModal} />}
        {activeTab === 'age-groups' && <AgeGroupsSection openBookingModal={openBookingModal} />}
        {activeTab === 'coaches' && <CoachesSection openBookingModal={openBookingModal} />}
        {activeTab === 'facilities' && <FacilitiesSection openBookingModal={openBookingModal} />}
        {activeTab === 'schedule' && <ScheduleSection openBookingModal={openBookingModal} />}
        {activeTab === 'camps' && <CampsSection openBookingModal={openBookingModal} />}
        {activeTab === 'parent-hub' && <ParentHubSection openLegalModal={openLegalModal} />}
        {activeTab === 'contact' && <ContactSection showToast={showToast} />}
      </main>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${ACADEMY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageSquare className="w-6 h-6 fill-slate-950" />
        <span className="hidden sm:inline-block text-xs font-black pr-1 group-hover:inline-block transition-all">
          تواصل مع الأكاديمية
        </span>
      </a>

      {/* Footer Component */}
      <Footer
        setActiveTab={setActiveTab}
        openLegalModal={openLegalModal}
        openBookingModal={openBookingModal}
      />

      {/* Modals & Toasts */}
      <TrialBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialProgramId={selectedProgramForBooking}
        showToast={showToast}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalInitialTab}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}

export default App;
