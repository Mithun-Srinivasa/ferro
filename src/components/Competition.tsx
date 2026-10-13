import React from 'react';
import { Award, Mail } from 'lucide-react';
import { CONFIG } from '../config';

export const Competition: React.FC = () => {
  return (
    <section id="competition" className="py-24 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Atelier Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <img
          src="/images/atelier-table.jpg"
          alt="Atelier workspace"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#FF3300] tracking-widest uppercase mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>THE SALON 05 // NATIONWIDE COMPETITION</span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              THE 5 PIECES FOR PARIS.
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500">
            BENGALURU ATELIER · AUTUMN 2026
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE SHORTLIST */}
        {/* ========================================================================= */}
        <div id="finalists" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-white/10 mb-8">
            <div>
              <span className="font-mono text-xs text-[#FF3300] tracking-widest uppercase block mb-1">
                SELECTION
              </span>
              <h3 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                THE SHORTLIST.
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              14 OCT 2026 · 10 CANDIDATES SELECTED
            </span>
          </div>

          {/* 10 Finalists Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {CONFIG.competitionWinners.map((winner, idx) => (
              <div
                key={winner.name}
                className="p-5 bg-zinc-950/80 border border-white/10 hover:border-[#FF3300]/60 transition-colors group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-600 pb-3 border-b border-white/5">
                  <span>FINALIST</span>
                  <span className="group-hover:text-[#FF3300] transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="py-4">
                  <div className="font-['Syne'] text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors uppercase">
                    {winner.name}
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5 font-mono text-[9px] text-zinc-500">
                  INTERVIEW · 15–16 OCT
                </div>
              </div>
            ))}
          </div>

          {/* Lowkey Email Contact Note */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-zinc-500 font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>
                Winners will be contacted by email. If you haven't received one, reach out to{' '}
                <a
                  href="mailto:teamferro30@gmail.com"
                  className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                >
                  teamferro30@gmail.com
                </a>{' '}
                for more info.
              </span>
            </div>
            <span className="text-[10px] text-zinc-600">3 FINAL OFFERS BY END OF MONTH</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIMELINE TRACK */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 font-mono text-xs">
          <div className="p-4 bg-zinc-950 border border-white/10 space-y-1">
            <span className="text-[10px] text-zinc-500 block">15 SEP</span>
            <span className="text-zinc-300 font-bold block">BRIEF RELEASED</span>
            <span className="text-[10px] text-zinc-600 block">Complete</span>
          </div>
          <div className="p-4 bg-zinc-950 border border-white/10 space-y-1">
            <span className="text-[10px] text-zinc-500 block">07 OCT</span>
            <span className="text-zinc-300 font-bold block">SUBMISSIONS CLOSED</span>
            <span className="text-[10px] text-zinc-600 block">982 Evaluated</span>
          </div>
          <div className="p-4 bg-zinc-950 border border-[#FF3300]/40 space-y-1">
            <span className="text-[10px] text-[#FF3300] block">14 OCT</span>
            <span className="text-white font-bold block">SHORTLIST</span>
            <span className="text-[10px] text-[#FF3300] block">Published</span>
          </div>
          <div className="p-4 bg-zinc-950 border border-white/10 space-y-1">
            <span className="text-[10px] text-zinc-500 block">15–16 OCT</span>
            <span className="text-zinc-300 font-bold block">INTERVIEWS</span>
            <span className="text-[10px] text-emerald-400 block">3 Positions</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE DESIGN BRIEF (ARCHIVE) */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 bg-zinc-950 border border-white/10 mb-16 space-y-10">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
              CHALLENGE BRIEF
            </span>
            <blockquote className="font-['Cormorant_Garamond'] italic text-2xl sm:text-4xl text-white font-light leading-snug">
              “Imagine you are designing 5 pieces for models of your imagination walking in Paris fashion week.”
            </blockquote>
            <p className="text-zinc-400 font-sans text-sm leading-relaxed max-w-2xl">
              A nationwide search for 3 young fashion designers to join our Bengaluru atelier full-time. Evaluated purely on raw talent, silhouette instinct, and vision — zero degree prerequisites.
            </p>
          </div>

          {/* 5 Directives Summary */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">
              THE 5 SILHOUETTES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
              <div className="p-4 bg-black border border-white/10 space-y-1">
                <span className="text-[#FF3300] text-[10px] block">01</span>
                <span className="text-white font-bold block">THE DUO LOOK</span>
                <span className="text-zinc-500 text-[10px] block">Two models in tandem</span>
              </div>
              <div className="p-4 bg-black border border-white/10 space-y-1">
                <span className="text-[#FF3300] text-[10px] block">02</span>
                <span className="text-white font-bold block">SEATED POSE</span>
                <span className="text-zinc-500 text-[10px] block">Draping under tension</span>
              </div>
              <div className="p-4 bg-black border border-white/10 space-y-1">
                <span className="text-[#FF3300] text-[10px] block">03</span>
                <span className="text-white font-bold block">INDIAN HERITAGE</span>
                <span className="text-zinc-500 text-[10px] block">Traditional form reimagined</span>
              </div>
              <div className="p-4 bg-black border border-white/10 space-y-1">
                <span className="text-[#FF3300] text-[10px] block">04</span>
                <span className="text-white font-bold block">GLOBAL CULTURE</span>
                <span className="text-zinc-500 text-[10px] block">Non-Indian reference</span>
              </div>
              <div className="p-4 bg-black border border-white/10 space-y-1">
                <span className="text-[#FF3300] text-[10px] block">05</span>
                <span className="text-white font-bold block">CHROMATIC ACCENT</span>
                <span className="text-zinc-500 text-[10px] block">Bold color harmony</span>
              </div>
            </div>
          </div>

          {/* 5 Accents */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs text-zinc-500">
            <span className="text-zinc-400 uppercase">MANDATORY ACCENTS:</span>
            <span>A HAT</span>
            <span>A BOW</span>
            <span>A NECKLACE</span>
            <span>PATTERNS</span>
            <span>BANGLES</span>
          </div>

          {/* Submissions closed footer note */}
          <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-zinc-600 flex items-center justify-between">
            <span>HUMAN AUTHORSHIP ONLY · ZERO AI SUBMISSIONS TOLERATED</span>
            <span>PORTAL SEALED · 07 OCT 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
