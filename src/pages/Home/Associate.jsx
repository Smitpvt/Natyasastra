import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
import { HeadingLG, BodyLG, Body } from '../../components/Typography';

export const Associate = () => {
  return (
    <Section id="associate" className="bg-bg-ivory border-b border-border-stone/20">
      <div className="max-w-4xl mx-auto border border-border-stone bg-bg-paper p-8 md:p-16 relative overflow-hidden">
        {/* Soft decorative background leaf texture line */}
        <div className="absolute top-0 right-0 w-32 h-32 text-accent-bronze/5 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="100" cy="0" r="80" />
            <circle cx="100" cy="0" r="60" />
            <circle cx="100" cy="0" r="40" />
          </svg>
        </div>

        <div className="space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent-bronze">
              An Alignment of Vision
            </span>
            <HeadingLG className="text-text-charcoal">
              Associate With Us
            </HeadingLG>
            <div className="w-16 h-[1px] bg-accent-bronze/30" />
          </div>

          <div className="space-y-6 max-w-2xl">
            <BodyLG className="font-serif italic text-accent-bronze leading-relaxed">
              We seek alignment, not commercial support.
            </BodyLG>
            
            <Body className="text-base font-light text-text-stone-grey leading-relaxed">
              Nāṭyaśāstra Gurukulam is sustained by those who recognise the value of deep, uninterrupted scholarship. We invite scholars of Sanskrit treatises, practitioners of classical Indian dance, temple architects, and patrons of culture to participate in our mission of civilisational renewal.
            </Body>
            
            <Body className="text-base font-light text-text-stone-grey leading-relaxed">
              Whether as an academic researcher, a visiting student, or a patron backing the translation of palm leaf manuscripts, your alignment with our core values is what shapes the future of this living heritage.
            </Body>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link
              to="/associate"
              className="px-8 py-3.5 border border-accent-bronze/40 text-accent-bronze font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-accent-bronze hover:text-bg-ivory hover:border-accent-bronze transition-all duration-700 ease-out"
            >
              Learn How to Align
            </Link>
            <Link
              to="/contact"
              className="font-sans text-xs uppercase tracking-[0.2em] text-text-stone-grey hover:text-accent-bronze transition-colors duration-500 py-2"
            >
              Initiate a Dialogue →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Associate;
