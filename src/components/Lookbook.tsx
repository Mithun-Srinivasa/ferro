import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2, X, Sparkles, Layers } from 'lucide-react';
import type { LookbookItem } from '../types';
import { sound } from '../utils/audio';

const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'obj-01',
    code: 'OBJ.01 // COAT-STRUCT',
    title: 'The Articulated Kinetic Overcoat',
    category: 'OUTERWEAR',
    image: '/images/lookbook-coat.jpg',
    aspectRatio: '3/4',
    description: 'An architectural structural silhouette featuring exaggerated geometric lapels and articulated back draping. Tailored to flow dynamically with natural stride while maintaining stark runway presence.',
    details: [
      'Engineered shoulder pitch allows full arm articulation without riding up',
      'Hidden storm-placket magnetic closure system',
      'Internal harness straps for hands-free shoulder carry',
      'Simplified hem geometry for seamless subway and car boarding',
    ],
    materials: 'Heavy Japanese Melton Wool + Bonded Technical Wind Membrane (750 GSM)',
    silhouette: 'Sculptural Asymmetric Cocoon with Articulated Bi-Swing Back',
  },
  {
    id: 'obj-02',
    code: 'OBJ.02 // HARDWARE-OPTIC',
    title: 'Titanium Monolith Eyewear & Ear Sculpture',
    category: 'ACCESSORIES',
    image: '/images/lookbook-accessory.jpg',
    aspectRatio: '1/1',
    description: 'Brutalist faceted eyewear paired with an ergonomic multi-facet ear sculpture. Engineered from cold-worked aerospace titanium to catch stark directional light.',
    details: [
      'Zero gaudiness; sculpted architectural faceting inspired by crystalline fracture',
      'Precision counterbalanced ear weight for 8+ hour pain-free wear',
      'Anti-reflective smoked polycarbonate lenses with UV400 defense',
      'Hand-brushed satin titanium finish with obsidian matte PVD accents',
    ],
    materials: 'Grade-5 Aerospace Titanium + 925 Raw Silver Accent + Smoked Polycarbonate',
    silhouette: 'Geometric Angular Facets with Sharp Chiseled Ergonomics',
  },
  {
    id: 'obj-03',
    code: 'OBJ.03 // CARRIER-CHASSIS',
    title: 'Origami Structural Clasp Bag',
    category: 'LEATHER',
    image: '/images/lookbook-bag.jpg',
    aspectRatio: '1/1',
    description: 'A modular carry chassis constructed from origami-folded calfskin with a custom blackened titanium safety clasp mechanism. Elevated everyday utility without commercial branding.',
    details: [
      'Self-standing rigid origami construction with padded interior compartment',
      'Dual carry modes: architectural top handle & detachable crossbody sling',
      'Industrial spring-loaded center latch milled from solid billet aluminum',
      'Rain-sealed gussets tailored for unpredictable tropical weather',
    ],
    materials: 'Full-Grain Matte Calfskin + CNC Milled Billet Aluminum Hardware',
    silhouette: 'Prismatic Hexagonal Architecture with Folded Flap Tension',
  },
];

export const Lookbook: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

  const handleNext = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev + 1) % LOOKBOOK_ITEMS.length);
  };

  const handlePrev = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev - 1 + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length);
  };

  const handleSelect = (item: LookbookItem) => {
    sound.playClick();
    setSelectedItem(item);
  };

  const currentItem = LOOKBOOK_ITEMS[currentIndex];

  return (
    <section id="objects" className="py-24 bg-[#050505] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-12">
          <div>
            <div className="font-mono text-xs text-[#FF3300] tracking-widest uppercase mb-2 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>SECTION 02 // PROTOTYPES</span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              ANATOMY OF THE OBJECT.
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            [FIRST LOOK AT PRE-RELEASE SILHOUETTES • SIMPLIFIED GEOMETRY, ZERO LOSS OF DRAMA]
          </p>
        </div>

        {/* Mobile & Desktop Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Interactive Stage */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/5] sm:aspect-[4/4] max-h-[580px] w-full bg-zinc-950 overflow-hidden border border-white/15">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* High Contrast Overlay Tags */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 font-mono text-[11px] text-white tracking-widest uppercase">
                {currentItem.code}
              </div>

              <div className="absolute top-4 right-4 bg-white text-black px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase">
                {currentItem.category}
              </div>

              <button
                onClick={() => handleSelect(currentItem)}
                className="absolute bottom-4 right-4 p-3 bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 transition-all flex items-center gap-2 font-mono text-xs tracking-widest"
                title="Inspect Architectural Specs"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">INSPECT DOSSIER</span>
              </button>
            </div>

            {/* Mobile-Friendly Quick Navigation */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                {LOOKBOOK_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playClick();
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 transition-all ${
                      idx === currentIndex ? 'w-8 bg-[#FF3300]' : 'w-2 bg-zinc-700'
                    }`}
                    aria-label={`View object ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 border border-white/20 hover:border-white text-zinc-300 hover:text-white bg-white/5 transition-colors"
                  aria-label="Previous Object"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 border border-white/20 hover:border-white text-zinc-300 hover:text-white bg-white/5 transition-colors"
                  aria-label="Next Object"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Spec & Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#FF3300] tracking-widest uppercase">
                PROTOTYPE SPECIFICATION [0{currentIndex + 1} OF 0{LOOKBOOK_ITEMS.length}]
              </span>
              <h3 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {currentItem.title}
              </h3>
            </div>

            <p className="font-['Cormorant_Garamond'] italic text-xl text-zinc-300 font-light leading-relaxed">
              "{currentItem.description}"
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500 uppercase tracking-widest">MATERIAL ARCHITECTURE</span>
                <p className="text-zinc-200">{currentItem.materials}</p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase tracking-widest">SILHOUETTE GEOMETRY</span>
                <p className="text-zinc-200">{currentItem.silhouette}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleSelect(currentItem)}
                  className="w-full py-3.5 border border-white/30 hover:border-white hover:bg-white hover:text-black font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF3300]" />
                  <span>VIEW FULL CONSTRUCTION BREAKDOWN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Architectural Construction Dossier */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/20 p-6 sm:p-8 space-y-6 text-left"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="font-mono text-xs text-zinc-400">
                  <span>ATELIER DOSSIER // {selectedItem.code}</span>
                </div>
                <button
                  onClick={() => {
                    sound.playClick();
                    setSelectedItem(null);
                  }}
                  className="p-1.5 border border-white/20 text-zinc-400 hover:text-white hover:border-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="aspect-[3/4] bg-zinc-900 border border-white/10 overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-xs text-[#FF3300] tracking-widest uppercase">
                    {selectedItem.category} PROTOTYPE
                  </span>
                  <h3 className="font-['Syne'] text-2xl font-bold text-white">
                    {selectedItem.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                      CONSTRUCTION ENGINEERING:
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs text-zinc-300">
                      {selectedItem.details.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#FF3300] font-mono">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 font-mono text-xs text-zinc-400 space-y-1 border-t border-white/10">
                    <div>MATERIAL: <span className="text-white">{selectedItem.materials}</span></div>
                    <div>LAUNCH WINDOW: <span className="text-[#FF3300]">TARGET Q1 2027</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
