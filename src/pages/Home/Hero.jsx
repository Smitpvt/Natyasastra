import React from 'react';
import { motion } from 'framer-motion';
import { HeadingXL, BodyLG } from '../../components/Typography';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-bg-ivory flex items-center justify-center overflow-hidden border-b border-border-stone/20 select-none">
      {/* Crisp Full-screen Background Image displaying daylight architecture */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/images/corridor_clean.png"
          alt="Ancient Temple Mandapa Corridor with Carved Pillars"
          className="w-full h-full object-cover"
        />
        {/* 15% Warm Ivory Overlay for a soft, warm atmosphere */}
        <div className="absolute inset-0 bg-[#FAF8F5]/15 mix-blend-normal" />
      </div>

      {/* Centered Editorial Branding */}
      <div className="relative z-10 text-center px-6 max-w-4xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Reduced by 20% to ~58px, styled in warm white with a soft text shadow for high contrast */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-[58px] font-light tracking-[0.03em] text-[#F8F6F1] leading-[1.1]"
            style={{ textShadow: '0 3px 12px rgba(29, 29, 27, 0.45)' }}
          >
            Nāṭyaśāstra Gurukulam
          </h1>
          
          {/* Thin gold separator line */}
          <div className="w-16 h-[1px] bg-accent-gold/50 mx-auto my-4" />
          
          <p 
            className="font-serif italic text-[#F8F6F1]/95 text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(29, 29, 27, 0.45)' }}
          >
            A Gurukulam for Śāstra, Sādhanā, and Civilisational Renewal.
          </p>
        </motion.div>
      </div>

      {/* Minimal Scroll to Enter Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span 
          className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F8F6F1]/90 font-light"
          style={{ textShadow: '0 1px 4px rgba(29, 29, 27, 0.4)' }}
        >
          Scroll to Enter
        </span>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 32, opacity: 0.6 }}
          transition={{ delay: 1.0, duration: 1.5, ease: "easeOut" }}
          className="w-[1px] bg-[#F8F6F1]/60"
        />
      </div>
    </section>
  );
};

export default Hero;
