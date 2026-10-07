import React, { useState, useEffect, useRef } from 'react';
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
  FileCheck,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Clock,
  Radio,
  Activity,
  Flame
} from 'lucide-react';
import { sound } from '../utils/audio';
import { CONFIG } from '../config';

export const Competition: React.FC = () => {
  const [now, setNow] = useState<number>(Date.now());
  const [justIncremented, setJustIncremented] = useState<boolean>(false);
  const prevCountRef = useRef<number>(CONFIG.competitionDates.startCount);

  // Telemetry timestamps & thresholds
  const DEADLINE_MS = new Date(CONFIG.competitionDates.deadlineIso).getTime();
  const START_MS = new Date(CONFIG.competitionDates.startTelemetryIso).getTime();
  const START_COUNT = CONFIG.competitionDates.startCount;
  const FINAL_COUNT = CONFIG.competitionDates.finalCount;

  // Real-time organic submission count simulating random arrival rate
  const getSubmissionsCount = (timestamp: number): number => {
    if (timestamp >= DEADLINE_MS) return FINAL_COUNT;
    if (timestamp <= START_MS) return START_COUNT;
    const progress = (timestamp - START_MS) / (DEADLINE_MS - START_MS);
    // Organic non-linear distribution simulating random burst arrivals
    const burstEffect = 
      Math.sin(timestamp / 47000) * 1.5 + 
      Math.cos(timestamp / 103000) * 1.8 +
      Math.sin(timestamp / 181000) * 1.2;
    const computed = Math.floor(START_COUNT + progress * (FINAL_COUNT - START_COUNT) + burstEffect);
    return Math.min(FINAL_COUNT, Math.max(START_COUNT, computed));
  };

  const currentCount = getSubmissionsCount(now);
  const isExpired = now >= DEADLINE_MS;

  const recentOrigins = [
    { city: 'Bengaluru', state: 'KA' },
    { city: 'Mumbai', state: 'MH' },
    { city: 'New Delhi', state: 'DL' },
    { city: 'Jaipur', state: 'RJ' },
    { city: 'Kolkata', state: 'WB' },
    { city: 'Hyderabad', state: 'TS' },
    { city: 'Ahmedabad', state: 'GJ' },
    { city: 'Chennai', state: 'TN' },
    { city: 'Pune', state: 'MH' },
    { city: 'Chandigarh', state: 'CH' }
  ];

  // Remaining time calculation
  const diffMs = Math.max(0, DEADLINE_MS - now);
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentCount > prevCountRef.current) {
      setJustIncremented(true);
      const timeout = setTimeout(() => setJustIncremented(false), 1600);
      prevCountRef.current = currentCount;
      return () => clearTimeout(timeout);
    }
    prevCountRef.current = currentCount;
  }, [currentCount]);

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
        {/* LIVE INGESTION TELEMETRY & DEADLINE COUNTDOWN COMMAND CONSOLE */}
        {/* ========================================================================= */}
        <div className="mb-10 p-6 sm:p-8 bg-zinc-950 border-2 border-white/20 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.85)]">
          {/* Animated vermilion laser scanning line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3300] to-transparent animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT: LIVE SUBMISSIONS INGESTED TELEMETRY (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF3300] animate-ping" />
                    <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                      LIVE ATELIER INGESTION // SALON 05
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 font-mono text-[10px] text-zinc-300">
                    <Radio className="w-3 h-3 text-[#FF3300] animate-pulse" />
                    <span>REAL-TIME STREAM • IST SYNC</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 pt-1">
                  <div className="flex items-baseline gap-3">
                    <div className={`font-['Syne'] text-5xl sm:text-7xl font-black text-white tracking-tighter transition-all duration-300 ${justIncremented ? 'text-[#FF3300] scale-[1.02]' : ''}`}>
                      {currentCount.toLocaleString()}
                    </div>
                    {justIncremented && (
                      <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider animate-bounce">
                        +1 NEW DOSSIER
                      </span>
                    )}
                  </div>

                  <div className="space-y-0.5">
                    <div className="font-mono text-xs font-bold text-[#FF3300] uppercase tracking-wider flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{isExpired ? 'FINAL SUBMISSIONS RECORDED' : 'DOSSIERS INGESTED NATIONWIDE'}</span>
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400">
                      {isExpired 
                        ? 'Portal sealed strictly at 23:59 IST • Zero-AI human authorship review begins' 
                        : 'Nationwide candidate portfolios • Incoming live feed across all regions'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Organic Transmission Feed (No Capacity Cap / No Percentage) */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-bold uppercase tracking-wider">
                      {isExpired ? 'INGESTION CONCLUDED' : 'RANDOM TRANSMISSION STREAM ACTIVE'}
                    </span>
                  </div>
                  <span className="text-zinc-500 uppercase">
                    {isExpired ? 'FINAL TALLY SEALED' : 'UNRESTRICTED OPEN INTAKE'}
                  </span>
                </div>

                {/* Dynamic Transmission Activity Log */}
                <div className="p-3 bg-zinc-900/60 border border-white/10 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-300 flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#FF3300]" />
                      <span>LATEST INCOMING TRANSMISSION:</span>
                    </span>
                    <span className="text-[#FF3300] font-bold">
                      {isExpired ? 'STREAM SEALED' : 'JUST RECEIVED'}
                    </span>
                  </div>
                  <div className="text-white font-mono text-xs flex flex-wrap items-center justify-between gap-1">
                    <span>
                      DOSSIER #{currentCount} • {recentOrigins[currentCount % recentOrigins.length].city}, {recentOrigins[currentCount % recentOrigins.length].state}
                    </span>
                    <span className="text-zinc-500 text-[10px]">
                      {isExpired ? 'LOGGED FOR JURY' : 'QUEUED FOR VERIFICATION'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span>CADENCE: VARIABLE INTAKE RATE</span>
                  <span className="text-zinc-400">BANGALORE HQ • ON-SITE ATELIER SEATS</span>
                </div>
              </div>
            </div>

            {/* RIGHT: DEADLINE COUNTDOWN TIMER (5 Cols) */}
            <div className="lg:col-span-5 bg-black/90 border border-white/15 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-[#FF3300]" />
                  <span className="font-bold text-white uppercase tracking-wider">DEADLINE PROTOCOL</span>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${isExpired ? 'bg-zinc-800 text-zinc-400' : 'bg-[#FF3300]/20 text-[#FF3300] border border-[#FF3300]/40 animate-pulse'}`}>
                  {isExpired ? 'CONCLUDED' : 'CLOSING TONIGHT'}
                </span>
              </div>

              {/* Chiseled Monospace Countdown Blocks */}
              <div className="grid grid-cols-3 gap-2.5 text-center py-2">
                {/* Hours */}
                <div className="p-3 bg-zinc-950 border border-white/15 space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {hours}
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    HOURS
                  </span>
                </div>

                {/* Minutes */}
                <div className="p-3 bg-zinc-950 border border-white/15 space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {minutes}
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    MINUTES
                  </span>
                </div>

                {/* Seconds */}
                <div className="p-3 bg-zinc-950 border border-white/15 space-y-1 relative overflow-hidden">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-[#FF3300] tracking-tight">
                    {seconds}
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    SECONDS
                  </span>
                  {!isExpired && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF3300] animate-ping" />
                  )}
                </div>
              </div>

              {/* Bottom Status / Note */}
              <div className="font-mono text-[10px] text-zinc-400 border-t border-white/10 pt-3 flex items-center justify-between">
                <span>07 OCT 2026 [23:59 IST]</span>
                <span className="text-[#FF3300] font-bold">
                  {isExpired ? 'PORTAL SEALED' : 'FINAL CALL'}
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
            <div className="p-4 bg-[#FF3300]/10 border border-[#FF3300]/50 space-y-1.5 relative group hover:border-[#FF3300] transition-colors shadow-[0_0_20px_rgba(255,51,0,0.1)]">
              <div className="text-[10px] text-[#FF3300] uppercase tracking-widest flex items-center justify-between font-bold">
                <span>STAGE 02</span>
                <span className="animate-pulse">{isExpired ? 'CONCLUDED' : 'DEADLINE TONIGHT'}</span>
              </div>
              <div className="text-white font-bold text-sm">07TH OCT 2026</div>
              <p className="text-zinc-300 text-[11px] leading-snug">
                Portal closes strictly at <strong>23:59 IST</strong>. {isExpired ? 'Transmissions sealed.' : `Remaining: ${hours}h ${minutes}m ${seconds}s.`}
              </p>
            </div>

            {/* Stage 3: Results Announcement */}
            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1.5 relative group hover:border-white/30 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
                <span>STAGE 03</span>
                <span className="text-[#FF3300] font-bold">RESULTS</span>
              </div>
              <div className="text-white font-bold text-sm">14TH OCT 2026</div>
              <p className="text-zinc-400 text-[11px] leading-snug">
                Results announced. <strong>Top 10 shortlisted finalists</strong> revealed.
              </p>
            </div>

            {/* Stage 4: Interviews & Offer Letters */}
            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1.5 relative group hover:border-white/30 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
                <span>STAGE 04</span>
                <span className="text-emerald-400 font-bold">3 HIRES</span>
              </div>
              <div className="text-white font-bold text-sm">15TH–16TH OCT 2026</div>
              <p className="text-zinc-400 text-[11px] leading-snug">
                Top 10 interviews held. <strong>Offer letters sent by end of October</strong>.
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
        <div className="bg-zinc-950 border-2 border-white/20 p-5 sm:p-10 lg:p-12 relative text-left space-y-8">
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

            <div className="font-mono text-xs text-zinc-400 text-left sm:text-right space-y-0.5">
              <div>DEADLINE: <span className="text-[#FF3300] font-bold">07 OCT 2026 [23:59 IST]</span></div>
              <div>RESULTS: <span className="text-white font-bold">14 OCT 2026</span></div>
              <div>INTERVIEWS: <span className="text-white font-bold">15–16 OCT 2026</span></div>
              <div>OFFERS: <span className="text-emerald-400 font-bold">END OF OCT 2026</span></div>
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
                {/* Live Ingestion Ticker Pill */}
                <div className="p-3 bg-black border border-white/15 flex items-center justify-between font-mono text-[11px] text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
                    <span className="text-zinc-300">
                      LIVE INGESTION: <strong className="text-white font-bold">{currentCount.toLocaleString()}</strong> DOSSIERS
                    </span>
                  </div>
                  <span className="text-[#FF3300] font-bold">
                    {isExpired ? 'PORTAL SEALED' : `${hours}H ${minutes}M ${seconds}S LEFT`}
                  </span>
                </div>

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

                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider space-y-1">
                  <div>HIRING 3 YOUNG DESIGNERS • ZERO DEGREE REQUIREMENT • ZERO-AI VERIFIED</div>
                  <div className="text-zinc-400 italic normal-case font-['Cormorant_Garamond'] text-xs">“{CONFIG.competitionDates.mission}”</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
