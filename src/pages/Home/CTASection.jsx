import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-[#211F1D] overflow-hidden flex items-center justify-center border-t border-[#E0D8CE]/10">
      {/* Heritage background texture */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_55%] opacity-40"
        style={{ backgroundImage: "url('/assets/images/cta.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 flex flex-col items-center justify-center"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#9E743B] font-semibold">
          BEGIN YOUR SĀDHANĀ
        </span>

        <h2 className="font-serif text-[28px] xs:text-[34px] sm:text-[44px] md:text-[56px] font-light leading-tight text-white tracking-wide max-w-3xl">
          Enter into Saṃvāda with the Gurukulam
        </h2>

        <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#E0D8CE]/90 max-w-[650px] font-light">
          We welcome practitioners, scholars, educators, and patrons who seek to explore Nāṭya as a path of sādhanā, cultural renewal, and Dhārmic public life.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#211F1D] font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 text-center shadow-lg"
          >
            Inquire Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

