import React from 'react';
import { motion } from 'framer-motion';

export const QuoteSection = () => {
  return (
    <section className="w-full bg-[#F3EEE6] relative z-20 py-16 md:py-24 flex justify-center items-center">
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
            <span className="w-8 h-[1px] bg-[#8B0000]/30"></span>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L8 4L12 6L8 8L6 12L4 8L0 6L4 4L6 0Z" fill="#8B0000"/>
            </svg>
            <span className="w-8 h-[1px] bg-[#8B0000]/30"></span>
          </div>

          {/* Devanagari Sanskrit Quote - Responsive Font Size, Centered perfectly */}
          <h2 
            className="font-serif text-[24px] xs:text-[28px] sm:text-[36px] md:text-[44px] leading-relaxed text-[#1A1817] tracking-wide mb-8 font-medium max-w-3xl"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
          >
            यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः ।<br />
            यतो मनस्ततो भावो यतो भावस्ततो रसः ॥
          </h2>

          {/* Transliteration - Responsive Font Size */}
          <p className="font-serif text-[14px] sm:text-[16px] md:text-[18px] text-[#8B0000] tracking-[0.05em] mb-6 font-medium px-2 max-w-2xl">
            *Yato hastas tato dṛṣṭir yato dṛṣṭis tato manaḥ | yato manas tato bhāvo yato bhāvas tato rasaḥ*
          </p>

          {/* English Translation - Responsive Font Size */}
          <p className="font-serif text-[16px] sm:text-[18px] md:text-[22px] italic text-[#5C564D] leading-relaxed max-w-3xl font-normal px-2">
            Where the hand goes, the eyes follow; where the eyes go, the mind follows;<br />
            where the mind goes, expression arises; where expression arises, aesthetic bliss is born.
          </p>

          {/* Citation Source with arrows */}
          <span className="block mt-10 font-sans text-[11px] uppercase tracking-[0.3em] text-[#8B0000] font-bold">
            — NĀṬYAŚĀSTRA, CHAPTER VI, VERSE 36 —
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
