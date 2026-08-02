import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-bg-ivory flex overflow-hidden border-b border-border-stone/20 select-none">
      
      {/* Left Content Area */}
      <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 pt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-serif text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] text-text-charcoal tracking-tight mb-8">
            Nāṭyaśāstra<br />
            Gurukulam
          </h1>
          
          <div className="flex items-stretch gap-5">
            <div className="w-[2px] bg-text-stone-grey/30 shrink-0" />
            <p className="font-serif italic text-text-stone-grey text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed py-2">
              A Gurukulam for Śāstra, Sādhanā, and Civilisational Renewal.
            </p>
          </div>
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
      </div>

    </section>
  );
};

export default Hero;
