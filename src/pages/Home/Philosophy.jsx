import React from 'react';
import Section from '../../components/Section';
import EditorialImage from '../../components/EditorialImage';
import { HeadingLG, HeadingMD, Body, Caption } from '../../components/Typography';

const PILLARS = [
  {
    title: 'Śāstra',
    subtitle: 'Textual Authority & Theory',
    description:
      'Rigorous engagement with primary Sanskrit treatises, tracing the metaphysical geometry of performance, drama, architecture, and aesthetics back to their textual foundations.',
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14H44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M4 22H44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M4 30H44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <rect x="4" y="10" width="40" height="24" rx="1.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="22" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Sādhanā',
    subtitle: 'Embodied Physical Practice',
    description:
      'The silent, daily physical practice where text becomes movement. Dedicated to the reconstruction of the 108 Karanas, voice culture, and emotive expression.',
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28C8 36.8366 15.1634 40 24 40C32.8366 40 40 36.8366 40 28C40 25 36 24 24 24C12 24 8 25 8 28Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        <path d="M24 8C24 8 20 14 20 18C20 20.2091 21.7909 22 24 22C26.2091 22 28 20.2091 28 18C28 14 24 8 24 8Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
      </svg>
    )
  },
  {
    title: 'Saṃvāda',
    subtitle: 'Intellectual Discourse',
    description:
      'The gathering in the mandapa. Dialectical debates, exchange of ideas, and civilisational dialogues that connect heritage to the contemporary aesthetic discourse.',
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      </svg>
    )
  }
];

export const Philosophy = () => {
  return (
    <Section id="philosophy" className="bg-bg-paper border-b border-border-stone/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Large image (Dancer sculpture in its setting) */}
        <div className="lg:col-span-5 max-w-[380px] lg:max-w-none mx-auto w-full">
          <EditorialImage
            src="/assets/images/sculpture_clean.png"
            alt="Authentic Stone dancer sculpture from temple corridors"
            aspectRatio="aspect-[3/4.2]"
            copyright="Temple Friezes Study"
            caption="12th-century stone dancing Karana sculpture"
          />
        </div>

        {/* Right Side: Philosophy Text & Pillars */}
        <div className="lg:col-span-7 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <Caption>The Three Pillars</Caption>
            <HeadingLG>A Framework for Renewal</HeadingLG>
            <div className="w-16 h-[1px] bg-accent-bronze/30" />
          </div>

          {/* Pillars List */}
          <div className="space-y-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-6 border-b border-border-stone/30 pb-8 last:border-b-0 last:pb-0"
              >
                {/* Symbol */}
                <div className="w-12 h-12 flex items-center justify-center border border-border-stone bg-bg-ivory shrink-0">
                  {pillar.icon}
                </div>

                {/* Text details */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-4">
                    <HeadingMD className="text-xl md:text-[22px] font-serif text-text-charcoal">
                      {pillar.title}
                    </HeadingMD>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze/70">
                      [{pillar.subtitle}]
                    </span>
                  </div>
                  <Body className="text-sm font-light text-text-stone-grey leading-relaxed">
                    {pillar.description}
                  </Body>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Philosophy;
