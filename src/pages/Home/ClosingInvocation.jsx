import React from 'react';
import { Link } from 'react-router-dom';
import { HeadingLG, BodyLG, Caption } from '../../components/Typography';

export const ClosingInvocation = () => {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden border-b border-border-stone/20 flex items-center justify-center text-center">
      {/* Background Image with dim/warm paper overlay for readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/banyan_clean.png"
          alt="Scholars gathering under banyan tree"
          className="w-full h-full object-cover filter grayscale sepia-[0.12] brightness-[0.35]"
        />
        {/* Soft amber-ivory mix-blend overlay */}
        <div className="absolute inset-0 bg-accent-bronze/15 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-ivory via-transparent to-bg-ivory/50 opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-8 space-y-10 text-bg-ivory">
        <div className="space-y-4">
          <Caption className="text-accent-gold tracking-[0.25em] text-xs">
            Begin the Journey
          </Caption>
          
          {/* Sanskrit verse */}
          <HeadingLG className="text-bg-ivory text-2xl md:text-4xl font-light tracking-wide leading-relaxed">
            नाट्यशास्त्रं प्रवक्ष्यामि सर्वशास्त्रनिदर्शनम् ।
          </HeadingLG>
          <span className="block font-serif italic text-sm md:text-base text-bg-ivory/70 max-w-lg mx-auto leading-relaxed">
            "Nāṭyaśāstraṃ pravakṣyāmi sarvaśāstranidarśanam |"
            <br />
            — Nāṭyaśāstra 1.5
          </span>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <BodyLG className="text-bg-ivory/95 text-lg md:text-xl font-light leading-relaxed">
            Join our residential or digital programmes to re-engage with the roots of Indian aesthetic wisdom.
          </BodyLG>
        </div>

        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent-gold text-text-charcoal font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-bg-paper hover:text-accent-bronze transition-all duration-700 ease-out shadow-md hover:shadow-lg border border-accent-gold"
          >
            Register Interest
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingInvocation;
