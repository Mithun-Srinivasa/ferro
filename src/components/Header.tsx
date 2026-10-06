import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [audioActive, setAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Live Bangalore IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTimeString(`${formatted} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    const state = sound.toggle();
    setAudioActive(state);
  };

  const navItems = [
    { id: 'manifesto', label: 'THE CODEX', num: '01' },
    { id: 'objects', label: 'OBJECTS', num: '02' },
    { id: 'hiring', label: 'WE WANT YOU', num: '03' },
    { id: 'competition', label: 'PARIS SALON', num: '04' },
  ];

  const handleNavClick = (id: string) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/85 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Mark & Bangalore Coordinates */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left group"
            >
              <span className="font-['Syne'] font-extrabold text-2xl tracking-tighter text-white group-hover:text-[#D1D1D6] transition-colors">
                FERRO
              </span>
              <span className="hidden sm:inline-block ml-3 font-mono text-[10px] text-zinc-400 tracking-widest uppercase">
                ATELIER BLR • 12°58′N 77°35′E
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-1.5 py-1 ${
                  activeSection === item.id
                    ? 'text-white border-b-2 border-[#FF3300]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="text-[10px] text-zinc-500">{item.num}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Controls: Audio Toggle, Live IST, Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Live IST indicator */}
            <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{timeString || '12:00:00 IST'}</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              title={audioActive ? 'Mute haptic sound' : 'Enable haptic sound'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 border border-white/15 hover:border-white/40 text-xs font-mono text-zinc-300 hover:text-white transition-all bg-white/[0.03]"
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#FF3300]" />
                  <span className="hidden sm:inline text-[11px] tracking-widest">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="hidden sm:inline text-[11px] tracking-widest">AUDIO OFF</span>
                </>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Brutalist Editorial Zine Style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] pt-20 px-6 flex flex-col justify-between pb-10 md:hidden animate-in fade-in duration-200">
          <div className="space-y-6 pt-4">
            <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase border-b border-white/10 pb-2 flex justify-between">
              <span>INDEX // TRANSMISSION</span>
              <span>{timeString}</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-3 flex items-center justify-between border-b border-white/5 group"
              >
                <div>
                  <span className="font-mono text-xs text-zinc-500 mr-3">{item.num}</span>
                  <span className="font-['Syne'] text-2xl font-bold tracking-tight text-white group-hover:text-[#FF3300] transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs text-zinc-400">
            <div className="flex items-center justify-between">
              <span>BASE LOCATION:</span>
              <span className="text-white">BENGALURU, INDIA</span>
            </div>
            <div className="flex items-center justify-between">
              <span>STUDIO STRENGTH:</span>
              <span className="text-white">12 CORE MEMBERS (&lt;30)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>FIRST DROP:</span>
              <span className="text-[#FF3300]">BEFORE Q2 2027</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
