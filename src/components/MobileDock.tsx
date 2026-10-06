import React from 'react';
import { Home, BookOpen, Layers, Users, Award } from 'lucide-react';
import { sound } from '../utils/audio';

interface MobileDockProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileDock: React.FC<MobileDockProps> = ({ activeSection, onNavigate }) => {
  const items = [
    { id: 'hero', icon: Home, label: 'FERRO' },
    { id: 'manifesto', icon: BookOpen, label: 'CODEX' },
    { id: 'objects', icon: Layers, label: 'OBJECTS' },
    { id: 'hiring', icon: Users, label: 'HIRE' },
    { id: 'competition', icon: Award, label: 'PARIS' },
  ];

  const handleClick = (id: string) => {
    sound.playClick();
    onNavigate(id);
  };

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-3 py-2 flex items-center gap-1 sm:gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex flex-col items-center justify-center px-2.5 py-1 transition-all font-mono text-[9px] tracking-wider uppercase ${
                isActive
                  ? 'text-[#FF3300] scale-105'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
