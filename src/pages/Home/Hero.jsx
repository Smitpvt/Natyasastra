import React from 'react';
import { motion } from 'framer-motion';
import { HeadingXL, BodyLG } from '../../components/Typography';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-bg-ivory flex items-center justify-center overflow-hidden border-b border-border-stone/20 select-none">
      {/* Cinematic Full-screen Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/images/corridor_clean.png"
          alt="Ancient Temple Mandapa Corridor with Carved Pillars"
          className="w-full h-full object-cover filter grayscale contrast-[1.03] sepia-[0.08]"
        />
        {/* 15% Warm Amber Overlay */}
        <div className="absolute inset-0 bg-accent-bronze/15 mix-blend-multiply" />
        {/* Subtle Darkening Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Centered Editorial Branding */}
      <div className="relative z-10 text-center px-6 max-w-4xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <HeadingXL className="text-bg-ivory tracking-[0.03em] font-light">
            Nāṭyaśāstra Gurukulam
          </HeadingXL>
          
          {/* Thin separator line */}
          <div className="w-16 h-[1px] bg-accent-gold/40 mx-auto my-4" />
          
          <p className="font-serif italic text-bg-ivory/85 text-lg md:text-2xl tracking-wide max-w-2xl mx-auto leading-relaxed">
            A Gurukulam for Śāstra, Sādhanā, and Civilisational Renewal.
          </p>
        </motion.div>
      </div>

      {/* Minimal Scroll to Enter Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-bg-ivory/70 font-light">
          Scroll to Enter
        </span>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 32, opacity: 0.5 }}
          transition={{ delay: 1.0, duration: 1.5, ease: "easeOut" }}
          className="w-[1px] bg-bg-ivory"
        />
      </div>
    </section>
  );
};

export default Hero;
