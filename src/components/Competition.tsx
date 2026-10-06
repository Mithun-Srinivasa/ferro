import React from 'react';
import { 
  ShieldAlert, 
  Award, 
  Users,
  Compass,
  Palette,
  Globe,
  Sparkles,
  ExternalLink,
  Calendar,
  Clock,
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../utils/audio';
import { CONFIG } from '../config';

export const Competition: React.FC = () => {
  const handleGoogleFormClick = (e: React.MouseEvent) => {
    sound.playChirp(880, 0.12, 0.1);
    // If it's a deadlink '#', inform the candidate gracefully
    if (CONFIG.competitionGoogleFormUrl === '#') {
      e.preventDefault();
      alert('Official Google Form portal will open here. Link will be activated shortly by the studio.');
    }
  };

  return (
    <section id="competition" className="py-24 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      {/* Background Atelier Photography with Monochromatic Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <img
          src="/images/atelier-table.jpg"
          alt="Bangalore Atelier Handcraft Table"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#FF3300] tracking-widest uppercase mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>THE SALON 05 // NATIONWIDE COMPETITION</span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              THE 5 PIECES FOR PARIS.
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            [OPEN TO YOUNG INDIAN DESIGNERS • BANGALORE ATELIER HIRING CONTRACT]
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPETITION TIMELINE DATES BANNER */}
        {/* ========================================================================= */}
        <div className="p-6 bg-zinc-950 border border-white/20 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-white/10 text-white">
              <Calendar className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block text-[10px]">COMMENCEMENT DATE</span>
              <span className="text-white font-bold text-sm">15TH SEPTEMBER 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-white/10 text-white">
              <Clock className="w-4 h-4 text-[#FF3300]" />
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block text-[10px]">SUBMISSION DEADLINE</span>
              <span className="text-white font-bold text-sm">07TH OCTOBER 2026</span>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-end">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FF3300]/15 border border-[#FF3300]/40 text-[#FF3300] font-bold tracking-wider text-[11px] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
              <span>CLOSING 07TH OCT [23:59 IST]</span>
            </div>
          </div>
        </div>

        {/* The Official Creative Prompt Box */}
        <div className="p-8 sm:p-12 bg-zinc-950 border-2 border-white/20 mb-12 relative overflow-hidden">
          <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            OFFICIAL DESIGN BRIEF // AUTUMN 2026
          </div>

          <div className="max-w-4xl space-y-6 pt-4">
            <blockquote className="font-['Cormorant_Garamond'] italic text-3xl sm:text-5xl text-white font-light leading-snug">
              “Imagine you are designing 5 pieces for models of your imagination and they are going to be walking in Paris fashion week.”
            </blockquote>

            <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              We are hosting a nationwide challenge for visionary young fashion designers across India. The contestants have a lot of creative freedom to sculpt the proportions, invent the drape, and rethink modern silhouette architecture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[#FF3300] font-bold uppercase tracking-widest">THE OFFER / PRIZE:</span>
                <p className="text-zinc-200">
                  Full-time paid atelier contract in our Bangalore office alongside our core 12-member team. Full budget to materially construct your winning look.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold uppercase tracking-widest">ELIGIBILITY:</span>
                <p className="text-zinc-400">
                  Designers, pattern-makers, or fashion students based in India. Must be under 30 years old.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OFFICIAL CHALLENGE SPECIFICATION GUIDE */}
        {/* ========================================================================= */}
        <div className="mb-16 space-y-8">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              THE SALON 05 — PARIS RUNWAY CHALLENGE GUIDE
            </h3>
            <span className="font-mono text-xs text-[#FF3300] tracking-widest">
              [MANDATORY SPECIFICATION]
            </span>
          </div>

          {/* 1. The 5 Silhouette Directives Grid */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              1. THE 5 SILHOUETTE DIRECTIVES (EXACTLY 5 CURATED RUNWAY SKETCHES)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Directive 1 */}
              <div className="p-6 bg-zinc-950 border border-white/15 space-y-3 relative group hover:border-white transition-colors">
                <div className="flex items-center justify-between font-mono text-xs text-[#FF3300]">
                  <span>DIRECTIVE 01</span>
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  The Duo Look (In Pair)
                </h4>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Exactly <strong>one sketch must present a paired look</strong> — two models walking or interacting in tandem on the Paris runway, demonstrating conversational styling, shared tension, and cohesive architecture.
                </p>
              </div>

              {/* Directive 2 */}
              <div className="p-6 bg-zinc-950 border border-white/15 space-y-3 relative group hover:border-white transition-colors">
                <div className="flex items-center justify-between font-mono text-xs text-[#FF3300]">
                  <span>DIRECTIVE 02</span>
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  Postural Dynamics (Sitting Pose)
                </h4>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Depict <strong>at least one and at most two models in a sitting pose</strong>. Illustrate structural draping, volume collapse, compression lines, and fabric behavior when seated.
                </p>
              </div>

              {/* Directive 3 */}
              <div className="p-6 bg-zinc-950 border border-white/15 space-y-3 relative group hover:border-white transition-colors">
                <div className="flex items-center justify-between font-mono text-xs text-[#FF3300]">
                  <span>DIRECTIVE 03</span>
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  Indian Heritage Reimagined
                </h4>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Exactly <strong>one look must draw from Indian traditional silhouettes</strong> (e.g., angrakha, saree drape, sherwani structure, dhoti folds), translated into elevated, wearable high-fashion architecture.
                </p>
              </div>

              {/* Directive 4 */}
              <div className="p-6 bg-zinc-950 border border-white/15 space-y-3 relative group hover:border-white transition-colors">
                <div className="flex items-center justify-between font-mono text-xs text-[#FF3300]">
                  <span>DIRECTIVE 04</span>
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  Global Cultural Heritage (Non-Indian)
                </h4>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Exactly <strong>one look must explore a cultural aesthetic from outside India</strong> (e.g., Japanese kimono deconstruction, West African agbada volume, Andean textile geometry, Scottish kilt tailoring, etc.).
                </p>
              </div>

              {/* Directive 5 */}
              <div className="p-6 bg-zinc-950 border border-white/15 space-y-3 relative group hover:border-white transition-colors md:col-span-2 lg:col-span-2">
                <div className="flex items-center justify-between font-mono text-xs text-[#FF3300]">
                  <span>DIRECTIVE 05</span>
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  The Chromatic Accent (Vibrant Color)
                </h4>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  <strong>At least one look must be distinctly colorful and vibrant</strong>, demonstrating your mastery of bold color theory, tonal harmony, and saturation against our atelier’s monochrome baseline.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Mandatory Accessory & Pattern Accents Box */}
          <div className="p-6 sm:p-8 bg-zinc-900/60 border border-white/15 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
                2. MANDATORY ACCESSORY &amp; PATTERN ACCENTS
              </span>
              <span className="font-mono text-xs text-zinc-400">
                [DISTRIBUTE ACROSS ANY OF YOUR 5 SKETCHES IN ANY COMBINATION]
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
              <div className="p-3 bg-black border border-white/10 text-center space-y-1">
                <div className="text-white font-bold">1. A HAT</div>
                <span className="text-zinc-500 text-[10px] block">Structural / Avant-Garde Headwear</span>
              </div>
              <div className="p-3 bg-black border border-white/10 text-center space-y-1">
                <div className="text-white font-bold">2. A BOW</div>
                <span className="text-zinc-500 text-[10px] block">Architectural Ribbon / Tie Detail</span>
              </div>
              <div className="p-3 bg-black border border-white/10 text-center space-y-1">
                <div className="text-white font-bold">3. A NECKLACE</div>
                <span className="text-zinc-500 text-[10px] block">Sculptural Collar / Statement Piece</span>
              </div>
              <div className="p-3 bg-black border border-white/10 text-center space-y-1">
                <div className="text-white font-bold">4. PATTERNS</div>
                <span className="text-zinc-500 text-[10px] block">Geometric Diamond OR Indian Motif</span>
              </div>
              <div className="p-3 bg-black border border-white/10 text-center space-y-1 col-span-2 sm:col-span-1">
                <div className="text-white font-bold">5. BANGLES</div>
                <span className="text-zinc-500 text-[10px] block">Sculpted Metal / Articulated Wristwear</span>
              </div>
            </div>
          </div>
        </div>

        {/* STRICT ZERO-AI WARNING CITADEL */}
        <div className="p-6 sm:p-8 bg-red-950/20 border-2 border-[#FF3300] mb-12 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
            <div className="p-3 bg-[#FF3300] text-black">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold bg-[#FF3300] text-black px-2 py-0.5 tracking-widest">
                  STRICT ZERO AI POLICY
                </span>
                <span className="font-mono text-xs text-[#FF3300] font-semibold">
                  IMMEDIATE &amp; PERMANENT DISQUALIFICATION
                </span>
              </div>
              <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                Any AI Generated Submissions Will Be Immediately Disqualified.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We strictly reject synthetic prompt-engineered outputs (Midjourney, DALL·E, Stable Diffusion, AI upscalers). <strong>Accepted media:</strong> hand-drawn pencil/ink sketches, marker renderings, digital stylus illustrations (Procreate/Photoshop with raw layers/timelapses), physical fabric collages, and hand-draped toiles. We want genuine human hand, muscle memory, and creative vision.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OFFICIAL GOOGLE FORM SUBMISSION PORTAL CARD (NO EMBEDDED FORM) */}
        {/* ========================================================================= */}
        <div className="bg-zinc-950 border-2 border-white/20 p-8 sm:p-12 relative text-left space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
                <span className="font-mono text-xs text-[#FF3300] tracking-widest uppercase font-bold">
                  OFFICIAL SUBMISSION PORTAL
                </span>
              </div>
              <h3 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white">
                TRANSMIT YOUR 5 SKETCHES VIA GOOGLE FORM
              </h3>
            </div>

            <div className="font-mono text-xs text-zinc-400 text-left sm:text-right">
              <div>COMMENCED: <span className="text-white">15 SEPT 2026</span></div>
              <div>DEADLINE: <span className="text-[#FF3300] font-bold">07 OCT 2026 [23:59 IST]</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Checklist items to prepare */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold block">
                WHAT TO ATTACH IN THE GOOGLE FORM:
              </span>

              <ul className="space-y-2.5 font-mono text-xs text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Your 5 Curated Sketches (PDF or high-res image files) fulfilling the 5 directives.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Integration of the 5 mandatory accents (Hat, Bow, Necklace, Patterns, Bangles).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Concept Statement, Silhouette Narrative, and Material feasibility notes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Digital signature accepting the Zero-AI Human Authorship sworn oath.</span>
                </li>
              </ul>
            </div>

            {/* Launch Action Card */}
            <div className="p-6 sm:p-8 bg-zinc-900/80 border border-white/20 text-center space-y-6">
              <div className="space-y-2">
                <FileCheck className="w-10 h-10 text-white mx-auto stroke-[1.5]" />
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  READY TO SUBMIT?
                </h4>
                <p className="font-sans text-xs text-zinc-400 max-w-sm mx-auto">
                  Click the portal button below to open the official Google Form where you can upload your sketch files directly.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={CONFIG.competitionGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleGoogleFormClick}
                  className="w-full py-4 px-6 bg-white hover:bg-zinc-200 text-black font-mono text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.25)] group"
                >
                  <span>SUBMIT VIA OFFICIAL GOOGLE FORM</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                  DEADLINE: 07TH OCTOBER 2026 • STRICT ZERO-AI VERIFICATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
