import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

export const Manifesto: React.FC = () => {
  const [unredacted, setUnredacted] = useState<Record<string, boolean>>({});

  const toggleRedact = (key: string) => {
    sound.playClick();
    setUnredacted((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="manifesto" className="py-24 bg-[#0a0a0c] border-b border-white/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-16">
          <div>
            <div className="font-mono text-xs text-[#FF3300] tracking-widest uppercase mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE CODEX</span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              PHILOSOPHY OF THE OBJECT.
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500">
            [TAP HIGHLIGHTED BARS TO REVEAL]
          </div>
        </div>

        {/* Editorial 3-Column Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: The Bridge Between High Fashion & Reality */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-white/10 space-y-6 relative group">
            <div className="font-mono text-xs text-zinc-500 tracking-widest flex items-center justify-between">
              <span>01</span>
              <span>[THE BRIDGE]</span>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white leading-tight">
              Runway Form. Daily Movement.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              High fashion often locks its most radical silhouettes behind museum glass — fragile garments that fail in real weather, streets, or transit.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We engineer the bridge: refining architectural structure for physical ease,{' '}
              <span
                onClick={() => toggleRedact('r1')}
                className="redacted cursor-pointer font-mono text-xs inline-block"
                title="Tap to un-redact"
              >
                {unredacted['r1'] ? 'WITHOUT COMPROMISING DRAMA.' : '████████████████████████████████'}
              </span>{' '}
              High fashion constructed for the living world.
            </p>
          </div>

          {/* Column 2: Total Creative Sovereignty (Bootstrapped 2-Year Shield) */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-white/10 space-y-6 relative group">
            <div className="font-mono text-xs text-zinc-500 tracking-widest flex items-center justify-between">
              <span>02</span>
              <span>[SOVEREIGNTY]</span>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white leading-tight">
              Two-Year Bootstrapped Shield.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Zero venture debt. Zero external boardrooms. When investor spreadsheets dictate delivery quotas, design is diluted into commercial beige.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We reject mass manufacturing. Our maiden collection arrives{' '}
              <span
                onClick={() => toggleRedact('r2')}
                className="redacted cursor-pointer font-mono text-xs inline-block"
                title="Tap to un-redact"
              >
                {unredacted['r2'] ? 'BEFORE Q2 2027 INDEPENDENTLY.' : '████████████████████████████'}
              </span>{' '}
              Every seam answers solely to the atelier.
            </p>
          </div>

          {/* Column 3: Beyond Garments (Sculpted Accessories & Under 30 Engine) */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-white/10 space-y-6 relative group">
            <div className="font-mono text-xs text-zinc-500 tracking-widest flex items-center justify-between">
              <span>03</span>
              <span>[TOTALITY]</span>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white leading-tight">
              Garments, Metal &amp; Youth.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Garments, eyewear, hardware, and structural carry objects are conceived together from the same aesthetic vocabulary. Sculpted, tactile, and distinct.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Our core unit comprises 12 members in Bengaluru —{' '}
              <span
                onClick={() => toggleRedact('r3')}
                className="redacted cursor-pointer font-mono text-xs inline-block"
                title="Tap to un-redact"
              >
                {unredacted['r3'] ? 'EVERY PERSON UNDER 30.' : '█████████████████████████'}
              </span>{' '}
              Shaping clothing for our generation.
            </p>
          </div>
        </div>

        {/* Studio Data Matrix Banner */}
        <div className="p-6 bg-black border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">CORE TEAM</span>
            <div className="text-white text-base font-bold">12 MEMBERS</div>
            <span className="text-zinc-500 text-[11px]">BENGALURU</span>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">GENERATION</span>
            <div className="text-white text-base font-bold">&lt; 30 YEARS</div>
            <span className="text-zinc-500 text-[11px]">YOUTH STANDARD</span>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">CAPITAL</span>
            <div className="text-[#FF3300] text-base font-bold">BOOTSTRAPPED</div>
            <span className="text-zinc-500 text-[11px]">100% AUTONOMOUS</span>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">FIRST DEBUT</span>
            <div className="text-white text-base font-bold">&lt; Q2 2027</div>
            <span className="text-zinc-500 text-[11px]">LIMITED RUN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
