import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-bg-ivory flex overflow-hidden border-b border-border-stone/20 select-none">
      
      {/* Left Content Area */}
      <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 pt-20 relative">
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
          className="max-w-xl"
        >
          <h1 className="font-serif text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] text-text-charcoal tracking-tight mb-8">
            Nāṭyaśāstra<br />
            Gurukulam
          </h1>
          {/* Reduced by 20% to ~58px, styled in warm white with a soft text shadow for high contrast */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-[58px] font-light tracking-[0.03em] text-[#F8F6F1] leading-[1.1]"
            style={{ textShadow: '0 3px 12px rgba(29, 29, 27, 0.45)' }}
          >
            Nāṭyaśāstra Gurukulam
          </h1>
          
          <div className="flex items-stretch gap-5">
            <div className="w-[2px] bg-text-stone-grey/30 shrink-0" />
            <p className="font-serif italic text-text-stone-grey text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed py-2">
              A Gurukulam for Śāstra, Sādhanā, and Civilisational Renewal.
            </p>
          </div>
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

      {/* Right Image Area */}
      <div className="hidden lg:block w-[45%] h-full relative z-0">
        {/* Subtle background block to frame the sculpture slightly */}
        <div className="absolute top-[10%] right-0 bottom-0 left-[10%] bg-bg-limestone/30 z-0" />
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 flex items-end justify-center z-10"
        >
          <img
            src="/assets/images/sculpture_clean.png"
            alt="Dancing Sculpture"
            className="h-[95%] w-auto object-contain object-bottom drop-shadow-md"
          />
        </motion.div>
      </div>
      
      {/* Mobile background overlay for image */}
      <div className="absolute inset-0 lg:hidden opacity-10 pointer-events-none z-0">
          <img
            src="/assets/images/sculpture_clean.png"
            alt="Dancing Sculpture"
            className="h-full w-full object-cover"
          />
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
