import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProspectusFrame, LotusDivider, BrassDiyaIcon } from '../../components/LotusOrnament';

export const QuoteSection = () => {
  const [activeVerse, setActiveVerse] = useState(0);

  const VERSES = [
    {
      title: 'AESTHETIC EMBODIMENT',
      sanskrit: 'यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः ।\nयतो मनस्ततो भावो यतो भावस्ततो रसः ॥',
      translit: 'Yato hastas tato dṛṣṭir yato dṛṣṭis tato manaḥ | yato manas tato bhāvo yato bhāvas tato rasaḥ ||',
      english: 'Where the hand goes, the eyes follow; where the eyes go, the mind follows;\nwhere the mind goes, bhāva arises; where bhāva arises, rasa unfolds.',
      commentary: <span><em className="italic">Nāṭya</em> gathers attention, and attention ripens into <em className="italic">rasa</em>.</span>,
      citation: <span><em className="italic">ABHINAYADARPAṆA</em> • VERSE 37</span>
    },
    {
      title: 'THE ALL-ENCOMPASSING CANON',
      sanskrit: 'न तज्ज्ञानं न तच्छिल्पं न सा विद्या न सा कला ।\nनासौ योगो न तत्कर्म नाट्येऽस्मिन् यन्न दृश्यते ॥',
      translit: 'Na tajjñānaṁ na tacchilpaṁ na sā vidyā na sā kalā | nāsau yogo na tatkarma nāṭye’smin yanna dṛśyate ||',
      english: 'There is no wisdom, art, learning, craft, device, yoga or action\nthat is not found in Nāṭya.',
      commentary: <span><em className="italic">Nāṭya</em> is the complete synthesis of civilisational knowledge.</span>,
      citation: <span><em className="italic">NĀṬYAŚĀSTRA</em> • CHAPTER 1 ★ VERSE 116</span>
    }
  ];

  const current = VERSES[activeVerse];

  return (
    <section className="w-full bg-[#FAF6F0] relative z-20 py-20 md:py-28 flex justify-center items-center border-t border-[#9E743B]/20">
      <div className="max-w-[920px] w-full px-6 mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <ProspectusFrame innerClassName="p-8 sm:p-14 text-center space-y-6">
            
            <div className="flex items-center justify-center gap-3">
              <BrassDiyaIcon className="w-6 h-6 text-[#9E743B]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9E743B] font-bold italic">
                ŚĀSTRA PRATIṢṬHĀ
              </span>
              <BrassDiyaIcon className="w-6 h-6 text-[#9E743B]" />
            </div>

            {/* Verse Selector Tabs */}
            <div className="flex justify-center items-center gap-3 pt-2">
              {VERSES.map((v, i) => (
                <button
                  key={v.title}
                  onClick={() => setActiveVerse(i)}
                  className={`px-4 py-1.5 rounded-full font-sans text-[11px] uppercase tracking-widest transition-all ${
                    activeVerse === i
                      ? 'bg-[#6B1D1E] text-white shadow-sm font-semibold'
                      : 'bg-[#F3EEE6] text-[#757069] border border-[#9E743B]/20 hover:border-[#9E743B]/60'
                  }`}
                >
                  {v.title}
                </button>
              ))}
            </div>

            <LotusDivider className="my-3" />

            {/* Primary Devanagari Verse */}
            <motion.div
              key={activeVerse}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 
                className="font-serif text-[24px] xs:text-[28px] sm:text-[34px] md:text-[40px] leading-relaxed text-[#6B1D1E] tracking-wide font-medium max-w-3xl mx-auto whitespace-pre-line"
                style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
              >
                {current.sanskrit}
              </h2>

              {/* Transliteration */}
              <p className="font-serif text-[13px] sm:text-[15px] md:text-[16px] text-[#9E743B] tracking-[0.05em] font-medium px-2 max-w-2xl mx-auto italic">
                {current.translit}
              </p>

              <div className="w-16 h-[1px] bg-[#9E743B]/30 mx-auto my-4" />

              {/* English Translation */}
              <div className="font-serif text-[16px] sm:text-[18px] md:text-[20px] italic text-[#4A423B] leading-relaxed max-w-3xl font-normal px-2 space-y-2 mx-auto whitespace-pre-line">
                <p>{current.english}</p>
                <p className="not-italic font-semibold text-[#6B1D1E] pt-3 text-[15px] sm:text-[17px] md:text-[18px]">
                  {current.commentary}
                </p>
              </div>

              {/* Citation Source */}
              <span className="block pt-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#9E743B] font-bold">
                — {current.citation} —
              </span>
            </motion.div>

          </ProspectusFrame>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;

