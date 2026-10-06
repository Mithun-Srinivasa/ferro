import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { FerrofluidCanvas } from './FerrofluidCanvas';
import { sound } from '../utils/audio';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[100svh] pt-20 pb-12 flex flex-col justify-between overflow-hidden bg-[#050505]">
      {/* Background Subtle Gradient & Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
        <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-px bg-white/[0.04]" />
        <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-px bg-white/[0.04]" />
      </div>

      {/* Top Meta Strip */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
          <span className="tracking-widest uppercase text-white font-semibold">STUDIO TRANSMISSION // 2026</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] tracking-wider">
          <span className="hidden sm:inline">ORIGIN: BENGALURU, INDIA</span>
          <span>AUTONOMY: 100% BOOTSTRAPPED</span>
          <span className="text-[#FF3300] font-bold">DEBUT: &lt; Q2 2027</span>
        </div>
      </div>

      {/* Centerpiece: Interactive Ferrofluid & Editorial Title */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Bold Kinetic Typography */}
        <div className="lg:col-span-7 space-y-6 z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-zinc-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF3300]" />
            <span>AVANT-GARDE ATELIER FOR EVERYDAY HUMANS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="font-['Syne'] text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92] text-white">
              HAUTE FORM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                RAW REALITY.
              </span>
            </h1>
            <p className="font-['Cormorant_Garamond'] italic text-2xl sm:text-3xl text-zinc-400 font-light max-w-xl">
              "We strip the fragility from the runway. High fashion reconstructed for the pulse of the real world."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base font-sans max-w-lg leading-relaxed"
          >
            Bootstrapped in Bengaluru by 12 minds under 30. We reject fast trend cycles and mass dilution to retain pure creative sovereignty over every garment and sculpted object.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('competition');
              }}
              className="px-6 py-4 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <span>ENTER PARIS SALON CHALLENGE</span>
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onNavigate('hiring');
              }}
              className="px-6 py-4 bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>WE WANT YOU // HIRING</span>
              <ShieldCheck className="w-4 h-4 text-[#FF3300]" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: 3D Ferrofluid Canvas Interaction */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square rounded-full border border-white/10 p-2 bg-gradient-to-b from-white/[0.04] to-transparent">
            {/* Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />

            {/* 3D Liquid WebGL Canvas */}
            <FerrofluidCanvas className="w-full h-full" intensity={1.1} />
          </div>
        </div>
      </div>

      {/* Bottom Kinetic Ribbon Marquee */}
      <div className="w-full border-y border-white/10 bg-zinc-950/70 overflow-hidden py-2.5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
          <span>FERRO ATELIER BENGALURU</span>
          <span className="text-[#FF3300]">✦</span>
          <span>100% BOOTSTRAPPED PURITY</span>
          <span className="text-[#FF3300]">✦</span>
          <span>NO MASS COMMERCIAL DILUTION</span>
          <span className="text-[#FF3300]">✦</span>
          <span>12 CORE VISIONARIES UNDER 30</span>
          <span className="text-[#FF3300]">✦</span>
          <span>FIRST LAUNCH: Q1 2027</span>
          <span className="text-[#FF3300]">✦</span>
          <span>GARMENTS &amp; SCULPTED OBJECTS</span>
          <span className="text-[#FF3300]">✦</span>
          <span>PARIS SALON COMPETITION NOW OPEN</span>
          <span className="text-[#FF3300]">✦</span>
          <span>FERRO ATELIER BENGALURU</span>
          <span className="text-[#FF3300]">✦</span>
          <span>100% BOOTSTRAPPED PURITY</span>
          <span className="text-[#FF3300]">✦</span>
          <span>NO MASS COMMERCIAL DILUTION</span>
        </div>
      </div>
    </section>
  );
};
