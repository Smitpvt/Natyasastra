import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[92vh] bg-bg-ivory border-b border-border-stone/20 select-none flex items-center py-20 lg:py-0">
      
      {/* 12-Column Layout Grid Container */}
      <div className="max-w-[1520px] mx-auto px-8 md:px-16 w-full grid grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - 5 cols */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Heading Composition */}
            <div className="space-y-6">
              <h1 className="font-serif text-[34px] md:text-[42px] lg:text-[48px] font-light leading-[1.15] text-text-charcoal tracking-tight">
                Nāṭyaśāstra<br />
                Gurukulam
              </h1>
              <div className="w-12 h-[1px] bg-accent-bronze/50" />
            </div>
            
            {/* Subtitle & Paragraph Content */}
            <div className="space-y-6 max-w-[420px]">
              <h2 className="font-serif italic text-text-charcoal/90 text-lg md:text-xl tracking-wide leading-relaxed">
                A Gurukulam for Śāstra, Sādhanā, and Civilisational Renewal.
              </h2>
              
              <p className="font-sans text-sm font-light text-text-stone-grey leading-[1.7] max-w-[380px]">
                We bridge the chasm between ancient Indian wisdom and contemporary intellectual rigor. Here, the Nāṭyaśāstra is not merely a text, but a living ecosystem of body, sound, and consciousness.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-accent-bronze hover:text-text-charcoal font-medium transition-colors duration-500"
                >
                  Read More <span className="text-[10px]">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - 7 cols with Boxed Image Frame */}
        <div className="col-span-12 lg:col-span-7 flex justify-end overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] w-full max-w-[640px] bg-bg-limestone overflow-hidden border border-border-stone/40 shadow-sm">
            {/* Authentic Architectural Temple Background Image */}
            <img
              src="/assets/images/corridor_clean.png"
              alt="Ancient Temple Mandapa Corridor with Carved Pillars"
              className="w-full h-full object-cover brightness-[1.02] contrast-[0.98] sepia-[0.02]"
            />
            {/* Warm ivory sunlit overlay */}
            <div className="absolute inset-0 bg-[#FAF8F5]/10 mix-blend-soft-light" />
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
