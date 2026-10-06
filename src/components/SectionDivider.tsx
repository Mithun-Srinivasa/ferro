import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  label: string;
  code: string;
  reverse?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  label,
  code,
  reverse = false,
}) => {
  return (
    <div className="relative w-full max-w-full overflow-hidden border-y border-white/10 bg-[#070709] py-3 select-none">
      {/* Animated Laser Scanning Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3300]/80 to-transparent animate-pulse" />

      {/* Kinetic Marquee Ribbon */}
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        <div className="flex items-center gap-8 whitespace-nowrap font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
          <span className="text-[#FF3300]">///</span>
          <span className="text-white font-bold">{label}</span>
          <span className="text-zinc-600">[{code}]</span>
          <span>BANGALORE HQ • 12°58′N 77°35′E</span>
          <span className="text-[#FF3300]">✦</span>
          <span>AUTONOMOUS PROTOCOL</span>
          <span className="text-zinc-600">•</span>
          <span>NO INVESTOR INTERFERENCE</span>
          <span className="text-[#FF3300]">✦</span>
          <span>HAUTE ARCHITECTURE FOR DAILY FLESH</span>
          <span className="text-zinc-600">///</span>
          <span className="text-white font-bold">{label}</span>
          <span className="text-zinc-600">[{code}]</span>
          <span>BANGALORE HQ • 12°58′N 77°35′E</span>
          <span className="text-[#FF3300]">✦</span>
          <span>AUTONOMOUS PROTOCOL</span>
        </div>
      </div>

      {/* Floating Animated Geometric Crosshairs at Edges */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-3 -right-3 w-6 h-6 border border-white/20 rounded-full flex items-center justify-center pointer-events-none"
      >
        <div className="w-2 h-2 bg-[#FF3300]/60 rounded-full" />
      </motion.div>
    </div>
  );
};
