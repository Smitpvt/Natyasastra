import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LotusDivider, ProspectusFrame, BrassDiyaIcon } from '../../components/LotusOrnament';

const PILLARS = [
  {
    id: 'sastra',
    title: <span><em className="italic">Śāstra</em></span>,
    sanskrit: 'शास्त्र',
    syllable: 'शा',
    subtitle: 'TEXTUAL STUDY & COMMENTARIAL TRADITION',
    quote: <span><em className="italic">Śāstra</em> gives form to inquiry; disciplined study opens the way to understanding.</span>,
    desc: <span>Study of the <em className="italic">Nāṭyaśāstra</em>, the <em className="italic">Abhinavabhāratī</em> and the traditions of commentary through which their knowledge has been received, interpreted, and transmitted.</span>
  },
  {
    id: 'sadhana',
    title: <span><em className="italic">Sādhanā</em></span>,
    sanskrit: 'साधना',
    syllable: 'सा',
    subtitle: 'EMBODIED PRACTICE & INNER REFINEMENT',
    quote: <span><em className="italic">Śāstra</em> becomes knowledge through practice; practice becomes <em className="italic">sādhanā</em> through disciplined attention.</span>,
    desc: <span><em className="italic">Sādhanā</em> is the disciplined cultivation of body, breath, attention, perception, and conduct. Through sustained practice, what is received through <em className="italic">śāstra</em> moves from intellectual understanding towards embodied experience and inner refinement.</span>
  },
  {
    id: 'samvada',
    title: <span><em className="italic">Saṃvāda</em></span>,
    sanskrit: 'संवाद',
    syllable: 'सं',
    subtitle: 'ATTENTIVE LISTENING & SHARED INQUIRY',
    quote: 'Understanding deepens through attentive listening, questioning, and encounter.',
    desc: 'A space for listening, reflection, questioning, and dialogue, where knowledge is deepened through encounter and shared inquiry rather than assertion.'
  },
  {
    id: 'parampara',
    title: <span><em className="italic">Paramparā</em></span>,
    sanskrit: 'परम्परा',
    syllable: 'प',
    subtitle: <span>LIVING TRANSMISSION & <em className="italic">GURU–ŚIṢYA PARAMPARĀ</em></span>,
    quote: 'Wisdom is transmitted through living presence, relationship, and lineage.',
    desc: 'Wisdom is transmitted through living lineages and relationships. Rather than mere academic instruction, learning is nurtured through the presence of teachers who embody the values they transmit.'
  },
  {
    id: 'rasa',
    title: <span><em className="italic">Rasa</em></span>,
    sanskrit: 'रस',
    syllable: 'र',
    subtitle: 'REFINED AESTHETIC PERCEPTION & AESTHETIC DELIGHT',
    quote: <span><em className="italic">Rasa</em> is the aesthetic relish that <em className="italic">Nāṭya</em> awakens through refined perception.</span>,
    desc: <span>The cultivation of refined aesthetic perception as a cornerstone of education, culture, and life. Through <em className="italic">Nāṭya</em>, sensory experience is refined into aesthetic relish, deepening perception, sensitivity, and poise.</span>
  },
  {
    id: 'dharma',
    title: <span><em className="italic">Dharma</em></span>,
    sanskrit: 'धर्म',
    syllable: 'ध',
    subtitle: 'AESTHETIC LEADERSHIP & CIVILISATIONAL ORDERING',
    quote: <span>Public life is renewed through aesthetic poise and <em className="italic">dhārmic</em> responsibility.</span>,
    desc: 'The extension of aesthetic cultivation into public life, governance, and institutional leadership—bringing poise, responsibility, and discernment to the work of civilisational ordering.'
  }
];

export const PillarsMandala = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activePillar = PILLARS[activeIdx];

  return (
    <section className="w-full bg-[#FAF6F0] py-20 md:py-28 relative overflow-hidden border-t border-[#9E743B]/20">
      
      {/* Subtle Background Radial Mandala Vector */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] select-none">
        <svg width="900" height="900" viewBox="0 0 600 600" fill="none" className="text-[#9E743B]">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="210" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1" />
          <polygon points="300,20 542,300 300,580 58,300" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <BrassDiyaIcon className="w-6 h-6 text-[#9E743B]" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9E743B] font-bold">
              THE <span className="italic">GURUKULAM</span>'S FOUNDATIONS
            </span>
            <BrassDiyaIcon className="w-6 h-6 text-[#9E743B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#6B1D1E] tracking-tight">
            The Six Pillars
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#7A5428]">
            Six interconnected dimensions of learning, practice, transmission, aesthetic experience, and responsibility.
          </p>
          <LotusDivider className="my-2" />
        </div>

        {/* Pillars Navigation Hexagon Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {PILLARS.map((pillar, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveIdx(idx)}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer ${
                  isActive
                    ? 'bg-[#6B1D1E] text-white border-[#6B1D1E] shadow-xl scale-[1.03] ring-2 ring-[#9E743B]/40'
                    : 'bg-[#FAF6F0] hover:bg-white text-[#211F1D] border-[#9E743B]/25 hover:border-[#9E743B]/60 shadow-xs'
                }`}
              >
                <span 
                  className={`font-serif text-2xl font-semibold mb-1 transition-colors ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#6B1D1E] group-hover:text-[#9E743B]'
                  }`}
                  style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                >
                  {pillar.sanskrit}
                </span>
                <span className={`font-sans text-xs uppercase tracking-widest font-semibold ${
                  isActive ? 'text-white' : 'text-[#757069]'
                }`}>
                  {pillar.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <ProspectusFrame innerClassName="p-5 xs:p-6 sm:p-12 text-center space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6B1D1E] text-[#D4AF37] border-2 border-[#9E743B] shadow-md mb-2">
                <span className="font-serif text-3xl font-bold" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
                  {activePillar.syllable}
                </span>
              </div>

              <div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#9E743B] font-bold block mb-1">
                  PILLAR {activeIdx + 1} OF VI
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#6B1D1E] font-normal">
                  {activePillar.title} <span className="font-serif italic text-2xl text-[#9E743B]">({activePillar.sanskrit})</span>
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-[#7A5428] font-semibold mt-1">
                  {activePillar.subtitle}
                </p>
              </div>

              <LotusDivider className="my-2.5 sm:my-4" />

              <blockquote className="font-serif italic text-lg sm:text-xl text-[#6B1D1E] max-w-2xl mx-auto leading-relaxed">
                “{activePillar.quote}”
              </blockquote>

              <p className="font-sans text-base text-[#4A423B] leading-relaxed max-w-3xl mx-auto font-light">
                {activePillar.desc}
              </p>

            </ProspectusFrame>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PillarsMandala;

