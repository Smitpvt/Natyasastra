import React from 'react';
import { Link } from 'react-router-dom';
import { Caption } from '../../components/Typography';

export const ClosingInvocation = () => {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/banyan.png"
          alt="Ancient Banyan Tree representing growth and rooted knowledge"
          className="w-full h-full object-cover filter brightness-[0.85]"
        />
        {/* Simple darkening overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-8 space-y-6 text-white flex flex-col items-center">
        <Caption className="text-white tracking-[0.05em] text-sm md:text-base font-serif">
          Begin the Journey
        </Caption>
        
        <div className="max-w-2xl mx-auto pb-6">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold font-serif leading-snug">
            Join our residential or digital programmes to re-engage with the roots of Indian aesthetic wisdom.
          </h2>
        </div>

        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 bg-accent-gold text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-accent-bronze transition-all duration-700 ease-out shadow-lg"
        >
          Register Interest
        </Link>
      </div>
    </section>
  );
};

export default ClosingInvocation;
