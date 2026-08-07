import React from 'react';
import { motion } from 'framer-motion';

export const QuoteSection = () => {
  return (
    <section className="w-full bg-[#FAF8F5] relative z-20 py-16 md:py-24 flex justify-center items-center">
      <div className="max-w-[750px] w-full px-6 mx-auto">
        
        {/* Transparent Animated Container aligning perfectly with page background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative flex flex-col justify-center items-center text-center"
        >
          {/* Top Flourish */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#8A6A45]/30"></span>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L8 4L12 6L8 8L6 12L4 8L0 6L4 4L6 0Z" fill="#8A6A45"/>
            </svg>
            <span className="w-8 h-[1px] bg-[#8A6A45]/30"></span>
          </div>

          {/* Devanagari Sanskrit Quote - Responsive Font Size, Centered perfectly */}
          <h2 className="font-serif text-[18px] xs:text-[22px] sm:text-[26px] md:text-[30px] leading-relaxed text-[#1F1F1D] tracking-wide mb-6 font-normal max-w-2xl">
            यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः ।<br />
            यतो मनस्ततो भावो यतो भावस्ततो रसः ॥
          </h2>

          {/* Transliteration - Responsive Font Size */}
          <p className="font-serif text-[11px] sm:text-[12px] md:text-[13.5px] text-[#8A6A45] tracking-[0.05em] mb-4 font-light px-2 max-w-xl">
            *Yato hastas tato dṛṣṭir yato dṛṣṭis tato manaḥ | yato manas tato bhāvo yato bhāvas tato rasaḥ*
          </p>

          {/* English Translation - Responsive Font Size */}
          <p className="font-serif text-[12.5px] sm:text-[13.5px] md:text-[14.5px] italic text-[#6B6863] leading-relaxed max-w-2xl font-light px-2">
            Where the hand goes, the eyes follow; where the eyes go, the mind follows;<br />
            where the mind goes, expression arises; where expression arises, aesthetic bliss is born.
          </p>

          {/* Citation Source with arrows */}
          <span className="block mt-6 font-sans text-[9px] uppercase tracking-[0.25em] text-[#8A6A45]/85 font-semibold">
            → — NĀṬYAŚĀSTRA, CHAPTER VI, VERSE 36 — ←
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
