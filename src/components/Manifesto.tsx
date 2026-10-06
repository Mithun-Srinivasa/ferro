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
              <span>SECTION 01 // THE CODEX</span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              PHILOSOPHY OF THE OBJECT.
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 max-w-xs">
            [CLASSIFIED DISPATCH • TAP HIGHLIGHTED BLOCKS TO UN-REDACT CLASSIFIED CODEX ENTRIES]
          </div>
        </div>

        {/* Editorial 3-Column Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: The Bridge Between High Fashion & Reality */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-white/10 space-y-6 relative group">
            <div className="font-mono text-xs text-zinc-500 tracking-widest flex items-center justify-between">
              <span>PRINCIPIUM 01</span>
              <span>[THE BRIDGE]</span>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white leading-tight">
              Bridging Runway Extremes with Daily Flesh.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              For decades, high fashion has locked its most radical silhouettes behind velvet ropes and exhibition glass. Outfits made exclusively for runway models that crumble the second you attempt to navigate a subway, a crowded street, or ordinary rain.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We engineer the bridge: simplifying the architectural silhouette just enough for uninhibited movement,{' '}
              <span
                onClick={() => toggleRedact('r1')}
                className="redacted cursor-pointer font-mono text-xs inline-block"
                title="Tap to un-redact"
              >
                {unredacted['r1'] ? 'WITHOUT SURRENDERING ONE DROP OF FLASHINESS.' : '██████████████████████████████████████'}
              </span>{' '}
              High fashion made for humans who actually live in the world.
            </p>
          </div>

          {/* Column 2: Total Creative Sovereignty (Bootstrapped 2-Year Shield) */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-white/10 space-y-6 relative group">
            <div className="font-mono text-xs text-zinc-500 tracking-widest flex items-center justify-between">
              <span>PRINCIPIUM 02</span>
              <span>[AUTONOMY]</span>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white leading-tight">
              The Two-Year Bootstrapped Shield.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              We took zero venture capital money. We intend to stay completely bootstrapped for another two years. Why? Because the moment an external boardroom dictates delivery quotas, pure design becomes mass-market beige.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We will not mass produce. Our maiden launch arrives{' '}
              <span
                onClick={() => toggleRedact('r2')}
                className="redacted cursor-pointer font-mono text-xs inline-block"
                title="Tap to un-redact"
              >
                {unredacted['r2'] ? 'BEFORE Q2 2027 UNDER ZERO LABELS.' : '████████████████████████████'}
              </span>{' '}
              Every millimeter will answer solely to the atelier's obsession, not investor spreadsheets.
            </p>
          </div>

          {/* Column 3: Beyond Garments (Sculpted Accessories & Under 30 Engine) */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-white/10 space-y-6 relative group">
            <div className="font-mono text-xs text-zinc-500 tracking-widest flex items-center justify-between">
              <span>PRINCIPIUM 03</span>
              <span>[TOTALITY]</span>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white leading-tight">
              Garments, Metal &amp; The Under-30 Pulse.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              We are not just designing clothes. Accessories, eyewear, architectural hardware, and structural carry objects are conceived simultaneously. Nothing gaudy; everything elevated, sculpted, and distinct from industry repetition.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Our core atelier comprises 12 members in Bengaluru — including 3 international fashion alumni —{' '}
              <span
                onClick={() => toggleRedact('r3')}
                className="redacted cursor-pointer font-mono text-xs inline-block"
                title="Tap to un-redact"
              >
                {unredacted['r3'] ? 'EVERY SINGLE PERSON IS YOUNGER THAN 30.' : '████████████████████████████████████'}
              </span>{' '}
              We build for the generation rewriting culture.
            </p>
          </div>
        </div>

        {/* Studio Data Matrix Banner */}
        <div className="p-6 bg-black border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">CORE UNIT</span>
            <div className="text-white text-base font-bold">12 VISIONARIES</div>
            <span className="text-zinc-400 text-[11px]">3 EX-GLOBAL MAISON</span>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">AGE THRESHOLD</span>
            <div className="text-white text-base font-bold">&lt; 30 YEARS</div>
            <span className="text-zinc-400 text-[11px]">YOUTH DISRUPTION</span>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">FINANCIAL MODEL</span>
            <div className="text-[#FF3300] text-base font-bold">100% BOOTSTRAPPED</div>
            <span className="text-zinc-400 text-[11px]">2-YEAR LOCKED AUTONOMY</span>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-500 tracking-widest uppercase">FIRST REVEAL</span>
            <div className="text-white text-base font-bold">Q1 2027 TARGET</div>
            <span className="text-zinc-400 text-[11px]">NO PRE-COMMERCIAL LABELS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
