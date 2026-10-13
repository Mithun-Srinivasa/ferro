import React from 'react';
import { 
  ShieldAlert, 
  Award, 
  Users,
  Compass,
  Palette,
  Globe,
  Sparkles,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Clock,
  Radio,
  Flame,
  Mail
} from 'lucide-react';
import { sound } from '../utils/audio';
import { CONFIG } from '../config';

export const Competition: React.FC = () => {
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3300] animate-ping" />
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              THE 5 PIECES FOR PARIS.
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            [OFFICIAL RESULTS DECLARED • TOP 10 FINALISTS SHORTLISTED • BANGALORE ATELIER]
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OFFICIAL WINNERS ANNOUNCEMENT // TOP 10 SHORTLISTED FINALISTS */}
        {/* ========================================================================= */}
        <div id="finalists" className="mb-12 p-6 sm:p-10 bg-zinc-950 border-2 border-[#FF3300]/50 relative overflow-hidden shadow-[0_0_60px_rgba(255,51,0,0.15)]">
          {/* Top vermilion accent gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3300] via-white to-[#FF3300]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3300]/15 border border-[#FF3300]/40 text-xs font-mono text-[#FF3300] tracking-widest uppercase font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL SELECTION // 14TH OCTOBER 2026</span>
              </div>
              <h3 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                THE TOP 10 FINALISTS.
              </h3>
            </div>
            <div className="font-mono text-xs text-zinc-400 space-y-1 text-left sm:text-right">
              <div className="text-white font-bold tracking-wider">[IN NO PARTICULAR ORDER]</div>
              <div className="text-[#FF3300] font-semibold">STAGE 04 INTERVIEWS: 15TH–16TH OCT 2026</div>
              <div className="text-zinc-500 text-[10px]">3 FINAL ATELIER DESIGN CONTRACTS</div>
            </div>
          </div>

          <p className="py-5 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed max-w-4xl">
            From 982 nationwide submissions entered into the Salon 05 Paris Runway challenge, the jury has shortlisted the top ten designers purely on silhouette courage, textile instinct, and vision. These ten finalists advance directly to confidential atelier interviews.
          </p>

          {/* 10 Finalists Grid (2 cols mobile, 5 cols desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2 pb-6">
            {CONFIG.competitionWinners.map((winner, idx) => (
              <div
                key={winner.name}
                className="p-4 bg-zinc-900/90 border border-white/15 hover:border-[#FF3300] transition-all group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 pb-2 border-b border-white/5">
                  <span className="tracking-wider">FINALIST</span>
                  <span className="text-[#FF3300] group-hover:text-white transition-colors">#{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="py-3">
                  <div className="font-['Syne'] text-lg font-bold text-white tracking-tight group-hover:text-[#FF3300] transition-colors uppercase">
                    {winner.name}
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-zinc-400">
                  <span className="text-emerald-400 font-semibold">SHORTLISTED</span>
                  <span>15–16 OCT</span>
                </div>
              </div>
            ))}
          </div>

          {/* Small, lowkey email notification disclaimer as requested */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-zinc-500 font-mono text-[10px] tracking-wide">
            <div className="flex items-start sm:items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>
                Winners will be contacted by email. If you haven't been contacted yet, please reach out to{' '}
                <a
                  href="mailto:teamferro30@gmail.com"
                  className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                >
                  teamferro30@gmail.com
                </a>{' '}
                for more info.
              </span>
            </div>
            <div className="shrink-0 text-zinc-600 text-[9px] uppercase tracking-widest">
              UNRANKED SELECTION • 14 OCT 2026
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIVE INGESTION TELEMETRY & DEADLINE COUNTDOWN COMMAND CONSOLE */}
        {/* ========================================================================= */}
        <div className="mb-10 p-6 sm:p-8 bg-zinc-950 border-2 border-white/20 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.85)]">
          {/* Animated vermilion laser scanning line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3300] to-transparent animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT: LIVE SUBMISSIONS INGESTED TELEMETRY (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                      FINAL ATELIER EVALUATION // SALON 05
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 font-mono text-[10px] text-zinc-300">
                    <Radio className="w-3 h-3 text-emerald-400" />
                    <span>JURY REVIEW CONCLUDED • 14 OCT 2026</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 pt-1">
                  <div className="flex items-baseline gap-3">
                    <div className="font-['Syne'] text-5xl sm:text-7xl font-black text-white tracking-tighter">
                      {CONFIG.competitionDates.finalCount.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="font-mono text-xs font-bold text-[#FF3300] uppercase tracking-wider flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>DOSSIERS EVALUATED // 10 FINALISTS SHORTLISTED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: SELECTION STATUS METRICS (5 Cols) */}
            <div className="lg:col-span-5 bg-black/90 border border-white/15 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-[#FF3300]" />
                  <span className="font-bold text-white uppercase tracking-wider">SELECTION PROTOCOL</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#FF3300]/20 text-[#FF3300] border border-[#FF3300]/40 animate-pulse">
                  RESULTS LIVE
                </span>
              </div>

              {/* Chiseled Monospace Stat Blocks */}
              <div className="grid grid-cols-3 gap-2.5 text-center py-2">
                {/* Dossiers */}
                <div className="p-3 bg-zinc-950 border border-white/15 space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {CONFIG.competitionDates.finalCount}
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    INGESTED
                  </span>
                </div>

                {/* Finalists */}
                <div className="p-3 bg-zinc-950 border border-[#FF3300]/50 space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-[#FF3300] tracking-tight">
                    10
                  </div>
                  <span className="font-mono text-[9px] text-[#FF3300] uppercase tracking-widest block font-bold">
                    FINALISTS
                  </span>
                </div>

                {/* Hires */}
                <div className="p-3 bg-zinc-950 border border-emerald-500/40 space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                    03
                  </div>
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest block font-bold">
                    ATELIER HIRES
                  </span>
                </div>
              </div>

              {/* Bottom Status / Note */}
              <div className="font-mono text-[10px] text-zinc-400 border-t border-white/10 pt-3 flex items-center justify-between">
                <span>14 OCT 2026 [RESULTS DECLARED]</span>
                <span className="text-emerald-400 font-bold">
                  INTERVIEWS 15–16 OCT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPETITION TIMELINE DATES & SELECTION ROADMAP */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 bg-zinc-950 border border-white/20 mb-8 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3300] animate-ping" />
              <span className="text-white font-bold uppercase tracking-widest text-xs">
                OFFICIAL COMPETITION &amp; SELECTION SCHEDULE // AUTUMN 2026
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3300]/15 border border-[#FF3300]/40 text-[#FF3300] font-bold tracking-wider text-[11px] uppercase w-fit">
              <span>{CONFIG.competitionDates.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stage 1: Commencement */}
            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1.5 relative group hover:border-white/30 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
                <span>STAGE 01</span>
                <span className="text-emerald-400 font-bold">COMPLETED</span>
              </div>
              <div className="text-white font-bold text-sm">15TH SEPT 2026</div>
              <p className="text-zinc-400 text-[11px] leading-snug">
                Nationwide challenge officially commenced. Creative brief launched.
              </p>
            </div>

            {/* Stage 2: Submission Deadline */}
            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1.5 relative group hover:border-white/30 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between font-bold">
                <span>STAGE 02</span>
                <span className="text-emerald-400 font-bold">COMPLETED</span>
              </div>
              <div className="text-white font-bold text-sm">07TH OCT 2026</div>
              <p className="text-zinc-400 text-[11px] leading-snug">
                Portal closed strictly at <strong>23:59 IST</strong>. 982 total dossiers recorded and locked.
              </p>
            </div>

            {/* Stage 3: Results Announcement */}
            <div className="p-4 bg-[#FF3300]/10 border border-[#FF3300] space-y-1.5 relative group shadow-[0_0_25px_rgba(255,51,0,0.18)]">
              <div className="text-[10px] text-[#FF3300] uppercase tracking-widest flex items-center justify-between font-bold">
                <span>STAGE 03</span>
                <span className="animate-pulse">ANNOUNCED TODAY</span>
              </div>
              <div className="text-white font-bold text-sm">14TH OCT 2026</div>
              <p className="text-zinc-200 text-[11px] leading-snug">
                Results declared. <strong>Top 10 shortlisted finalists</strong> published above. Email invitations dispatched.
              </p>
            </div>

            {/* Stage 4: Interviews & Offer Letters */}
            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1.5 relative group hover:border-white/30 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
                <span>STAGE 04</span>
                <span className="text-blue-400 font-bold">UPCOMING NEXT</span>
              </div>
              <div className="text-white font-bold text-sm">15TH–16TH OCT 2026</div>
              <p className="text-zinc-400 text-[11px] leading-snug">
                Top 10 interviews held. <strong>Offer letters sent by end of October</strong> to 3 hired designers.
              </p>
            </div>
          </div>
        </div>

        {/* The Official Creative Prompt Box */}
        <div className="p-5 sm:p-10 lg:p-12 bg-zinc-950 border-2 border-white/20 mb-12 relative overflow-hidden">
          <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            OFFICIAL DESIGN BRIEF // AUTUMN 2026
          </div>

          <div className="max-w-5xl space-y-8 pt-4">
            <blockquote className="font-['Cormorant_Garamond'] italic text-3xl sm:text-5xl text-white font-light leading-snug">
              “Imagine you are designing 5 pieces for models of your imagination and they are going to be walking in Paris fashion week.”
            </blockquote>

            <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              We are hosting a nationwide challenge for visionary young fashion designers across India. The contestants have a lot of creative freedom to sculpt the proportions, invent the drape, and rethink modern silhouette architecture.
            </p>

            {/* Ethos Callout Banner */}
            <div className="p-5 bg-black border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#FF3300] shrink-0" />
                <span className="font-['Cormorant_Garamond'] italic text-2xl sm:text-3xl text-white font-light">
                  “{CONFIG.competitionDates.mission}”
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#FF3300] uppercase tracking-widest bg-[#FF3300]/10 px-3 py-1 border border-[#FF3300]/30 shrink-0">
                FERRO ATELIER VISION
              </span>
            </div>

            {/* 3 Pillars: Hiring Target, Zero Degree, Interview Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-5 bg-zinc-900/70 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#FF3300] font-bold uppercase tracking-widest text-[11px]">
                  <Briefcase className="w-4 h-4" />
                  <span>3 YOUNG FASHION DESIGNERS</span>
                </div>
                <p className="text-zinc-200 text-xs leading-relaxed">
                  The competition is specifically for hiring <strong>3 young fashion designers</strong> into full-time paid atelier contracts at our Bangalore studio, working directly with our 12-person core unit.
                </p>
              </div>

              <div className="p-5 bg-zinc-900/70 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px]">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>ZERO DEGREE REQUIREMENT</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Even if you do not possess a formal fashion degree, <strong>we will hire you purely based on raw talent, taste, and how well you fit our vision</strong>. Real craft and instinct over paper credentials.
                </p>
              </div>

              <div className="p-5 bg-zinc-900/70 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px]">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>TOP 10 INTERVIEWS &amp; OFFERS</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Results announced on <strong>14th October</strong>. The <strong>top 10 candidates</strong> will be interviewed on <strong>15th–16th October</strong>, receiving official offer letters by the <strong>end of the month</strong>.
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
        {/* OFFICIAL SUBMISSION PORTAL CARD (NOW CONCLUDED & RESULTS LINK) */}
        {/* ========================================================================= */}
        <div className="bg-zinc-950 border-2 border-white/20 p-5 sm:p-10 lg:p-12 relative text-left space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase font-bold">
                  SELECTION ARCHIVE // AUTUMN 2026
                </span>
              </div>
              <h3 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white">
                SUBMISSION WINDOW CONCLUDED // RESULTS PUBLISHED
              </h3>
            </div>

            <div className="font-mono text-xs text-zinc-400 text-left sm:text-right space-y-0.5">
              <div>DEADLINE: <span className="text-zinc-500 font-bold">07 OCT 2026 [CONCLUDED]</span></div>
              <div>RESULTS: <span className="text-[#FF3300] font-bold">14 OCT 2026 [DECLARED]</span></div>
              <div>INTERVIEWS: <span className="text-white font-bold">15–16 OCT 2026</span></div>
              <div>OFFERS: <span className="text-emerald-400 font-bold">END OF OCT 2026</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Checklist summary */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold block">
                SALON 05 EVALUATION SUMMARY:
              </span>

              <ul className="space-y-2.5 font-mono text-xs text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>982 total portfolios logged and evaluated nationwide across India.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero-degree bias upheld — evaluated purely on raw talent, silhouette, and vision.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>10 shortlisted finalists advancing to atelier interviews on 15th–16th October.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>3 final offers to be awarded by end of month for Bangalore Atelier positions.</span>
                </li>
              </ul>
            </div>

            {/* Finalists Action Card */}
            <div className="p-6 sm:p-8 bg-zinc-900/80 border border-white/20 text-center space-y-6">
              <div className="space-y-2">
                <Award className="w-10 h-10 text-[#FF3300] mx-auto stroke-[1.5]" />
                <h4 className="font-['Syne'] text-xl font-bold text-white">
                  TOP 10 WINNERS ANNOUNCED
                </h4>
                <p className="font-sans text-xs text-zinc-400 max-w-sm mx-auto">
                  Submissions are closed. The top 10 finalists have been shortlisted and announced on this page.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-black border border-white/15 flex items-center justify-between font-mono text-[11px] text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-zinc-300">
                      STATUS: <strong className="text-white font-bold">10 FINALISTS SHORTLISTED</strong>
                    </span>
                  </div>
                  <span className="text-[#FF3300] font-bold">
                    RESULTS LIVE
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    document.getElementById('finalists')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-4 px-6 bg-white hover:bg-zinc-200 text-black font-mono text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.25)] group cursor-pointer"
                >
                  <span>VIEW TOP 10 FINALISTS LIST</span>
                  <Award className="w-4 h-4 group-hover:scale-110 transition-transform text-[#FF3300]" />
                </button>

                {/* Very small, lowkey email note */}
                <div className="font-mono text-[10px] text-zinc-500 tracking-wider pt-1">
                  <span>Winners will be contacted by email. Inquiries: </span>
                  <a href="mailto:teamferro30@gmail.com" className="text-zinc-400 hover:text-white underline">teamferro30@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
