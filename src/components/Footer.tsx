import React, { useState } from 'react';
import { ArrowUp, Check } from 'lucide-react';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChirp(900, 0.08, 0.1);
    setSubscribed(true);
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-24 md:pb-16 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Top Grid: Brand & Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-['Syne'] text-3xl font-extrabold text-white tracking-tighter">
              FERRO
            </h3>
            <p className="font-['Cormorant_Garamond'] italic text-lg text-zinc-300 font-light max-w-sm">
              "High fashion simplified for physical life, without sacrificing one drop of flashiness."
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
              <div>STUDIO DISPATCH // BENGALURU, INDIA</div>
              <div>GEOLOCATION // 12°58′23″N 77°35′45″E</div>
              <div>OPERATIONAL STATUS // 100% INDEPENDENT &amp; BOOTSTRAPPED</div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <span className="text-white uppercase tracking-widest block font-bold">
              THE 2027 ENCRYPTED DISPATCH
            </span>
            <p className="font-sans text-xs text-zinc-400">
              Receive confidential lookbook transmissions ahead of our public maiden collection before Q2 2027. Zero marketing spam.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
                <Check className="w-4 h-4" />
                <span>FREQUENCY REGISTERED. TRANSMISSIONS WILL ARRIVE DIRECTLY.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="bg-zinc-900 border border-white/20 px-3 py-2 text-white placeholder-zinc-600 focus:border-white focus:outline-none flex-1 text-xs font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                >
                  JOIN
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-3 space-y-3">
            <span className="text-white uppercase tracking-widest block font-bold">
              ATELIER COLOPHON
            </span>
            <ul className="space-y-1.5 text-[11px] text-zinc-500">
              <li>• 12 CORE CREATIVE MEMBERS</li>
              <li>• 3 EX-GLOBAL MAISON ALUMNI</li>
              <li>• 100% AUTONOMOUS CAPITAL</li>
              <li>• FIRST LAUNCH: &lt; Q2 2027</li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="uppercase tracking-widest text-[10px]">RETURN TO APEX</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600">
          <div>
            © 2026–2027 FERRO ATELIER. BENGALURU, INDIA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>NO COOKIES TRACKED</span>
            <span>HUMAN CRAFT CERTIFIED</span>
            <span className="text-zinc-500">BLR • IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
