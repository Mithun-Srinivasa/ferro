import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ExternalLink, MapPin } from 'lucide-react';
import { sound } from '../utils/audio';
import { CONFIG } from '../config';

export const Recruitment: React.FC = () => {
  const [rotatingIndex, setRotatingIndex] = useState(0);

  const departmentCycle = [
    { label: '4 IN FASHION DESIGN', sub: 'Pattern, Draping, Hardware & Haute Tailoring' },
    { label: '3 IN ENGINEERING', sub: '3D WebGL, Cloth Physics & Atelier Systems' },
    { label: '2 IN MARKETING', sub: 'Brand Mythology & Underground Growth' },
    { label: '2 IN FINANCE', sub: 'Runway Unit Economics & Supply Chain' },
    { label: '2 IN DEPLOYMENT', sub: 'Atelier Operations & Sourcing Dispatch' },
    { label: '1 FELLOW APPRENTICE', sub: 'Under-26 Multidisciplinary Residency' },
    { label: '14 TOTAL OPENINGS', sub: 'All On-Site at Bangalore Atelier' },
  ];

  // Rotate "Now Scouting" circular badge every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % departmentCycle.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [departmentCycle.length]);

  const handleApplyClick = (e: React.MouseEvent) => {
    sound.playChirp(880, 0.12, 0.1);
    if (CONFIG.careersGoogleFormUrl === '#') {
      e.preventDefault();
      alert('Official Careers Google Form will open here. Link will be activated shortly by the studio.');
    }
  };

  return (
    <section id="hiring" className="py-24 bg-[#08080a] border-b border-white/10 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF3300]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Animated Recruitment Banner / Graphic */}
        <div className="relative border-2 border-white/20 bg-black p-6 sm:p-12 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          {/* Subtle Grid Watermark */}
          <div className="absolute top-3 right-4 font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
            DOCUMENT CODE: REC-2026-BLR • 14 SEATS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3300]/15 border border-[#FF3300]/40 text-xs font-mono text-[#FF3300] tracking-widest uppercase font-bold">
                <Flame className="w-3.5 h-3.5" />
                <span>NATIONWIDE RECRUITMENT // BANGALORE HQ</span>
              </div>

              {/* High-Impact Animated Graphic Typography */}
              <div className="space-y-1">
                <h2 className="font-['Syne'] text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                  WE WANT YOU.
                </h2>
                <div className="font-['Cormorant_Garamond'] italic text-2xl sm:text-3xl text-zinc-400 font-light">
                  "14 Open Seats. Built by the youth. Governed by raw obsession."
                </div>
              </div>

              <p className="text-zinc-300 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
                We are a 12-person core unit in Bengaluru (including 3 international fashion degree alumni). To bring haute couture architecture to the street without compromising our bootstrapped sovereignty, we are scouting <strong>14 new members</strong> across Fashion Design, Engineering, Marketing, Finance, and Operations.
              </p>

              {/* Quick Studio Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
                <div className="p-3 bg-zinc-900/80 border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF3300] rounded-full animate-ping" />
                  <div>
                    <div className="text-white font-bold">UNDER 30 CULTURE</div>
                    <div className="text-zinc-500 text-[10px]">Youth-led standard</div>
                  </div>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <div>
                    <div className="text-white font-bold">BANGALORE ATELIER</div>
                    <div className="text-zinc-500 text-[10px]">In-person collaboration</div>
                  </div>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <div>
                    <div className="text-white font-bold">ZERO VENTURE DEBT</div>
                    <div className="text-zinc-500 text-[10px]">100% Bootstrapped</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating Dynamic "NOW SCOUTING" Circle */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-dashed border-white/30 flex items-center justify-center p-6 text-center group hover:border-[#FF3300] transition-colors bg-gradient-to-br from-zinc-950 to-black shadow-[0_0_30px_rgba(255,255,255,0.04)]">
                {/* Rotating Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-white/10 border-t-[#FF3300] pointer-events-none"
                />

                <div className="space-y-2 z-10">
                  <span className="font-mono text-[10px] text-[#FF3300] tracking-widest uppercase block animate-pulse">
                    NOW SCOUTING
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={rotatingIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-1"
                    >
                      <div className="font-['Syne'] text-xl sm:text-2xl font-black text-white leading-tight">
                        {departmentCycle[rotatingIndex].label}
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400 tracking-wider block">
                        {departmentCycle[rotatingIndex].sub}
                      </span>
                    </motion.div>
                  </AnimatePresence>

                  <div className="pt-1">
                    <span className="inline-block px-2 py-0.5 bg-white/10 text-[9px] font-mono text-zinc-300 uppercase tracking-widest">
                      14 TOTAL OPENINGS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SINGLE HIGH-IMPACT GOOGLE FORM APPLICATION BUTTON */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#FF3300]" />
                <span>BANGALORE HQ • ON-SITE ATELIER POSITIONS</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300">
                Applications for all 14 roles (Fashion Design, Engineering, Marketing, Finance &amp; Deployment) are handled via our central Google Form.
              </p>
            </div>

            <a
              href={CONFIG.careersGoogleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleApplyClick}
              className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-mono text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.25)] shrink-0 group w-full sm:w-auto"
            >
              <span>APPLY VIA GOOGLE FORM</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
