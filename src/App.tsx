import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Lookbook } from './components/Lookbook';
import { Recruitment } from './components/Recruitment';
import { Competition } from './components/Competition';
import { Footer } from './components/Footer';
import { MobileDock } from './components/MobileDock';
import { SectionDivider } from './components/SectionDivider';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -64; // header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'manifesto', 'objects', 'hiring', 'competition'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F7F7F5] selection:bg-[#F7F7F5] selection:text-[#050505] overflow-x-hidden">
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white via-[#FF3300] to-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Subtle Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-30" />

      {/* Top Fixed Header */}
      <Header onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Editorial Content Stream */}
      <main>
        {/* Cover / Hero with Interactive 3D Ferrofluid Canvas */}
        <Hero onNavigate={scrollToSection} />

        {/* Dynamic Transition Ribbon 01 */}
        <SectionDivider label="THE CODEX" code="SECTION.01" />

        {/* 01. The Codex / Redacted Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '0px 0px 150px 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Manifesto />
        </motion.div>

        {/* Dynamic Transition Ribbon 02 */}
        <SectionDivider label="ANATOMY OF THE OBJECT" code="SECTION.02" reverse={true} />

        {/* 02. Anatomy of the Object / Prototypes Lookbook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '0px 0px 150px 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Lookbook />
        </motion.div>

        {/* Dynamic Transition Ribbon 03 */}
        <SectionDivider label="WE WANT YOU // NATIONWIDE RECRUITMENT" code="SECTION.03" />

        {/* 03. "WE WANT YOU" Kinetic Recruitment Graphic & 14 Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '0px 0px 150px 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Recruitment />
        </motion.div>

        {/* Dynamic Transition Ribbon 04 */}
        <SectionDivider label="THE SALON 05 // PARIS RUNWAY CHALLENGE" code="SECTION.04" reverse={true} />

        {/* 04. Paris Fashion Week Competition / Zero AI Verification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '0px 0px 150px 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Competition />
        </motion.div>
      </main>

      {/* Atelier Footer Transmission */}
      <Footer />

      {/* Thumb-Friendly Floating Mobile Navigation Dock */}
      <MobileDock activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Floating Technical Status HUD (Desktop Right) */}
      <div className="hidden xl:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 font-mono text-[10px] text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>FERRO BLR // 14 ROLES ACTIVE // AUTONOMOUS</span>
      </div>
    </div>
  );
}

export default App;
