import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, HeadingMD, Body, Caption, EditorialLink } from '../../components/Typography';

const PILLARS = [
  {
    title: 'Śāstra',
    subtitle: 'Textual Authority & Metaphysics',
    description:
      'Rigorous engagement with primary Sanskrit treatises, tracing the mathematical and metaphysical geometry of performance, drama, architecture, and aesthetics back to their textual foundations.'
  },
  {
    title: 'Sādhanā',
    subtitle: 'Embodied Somatic Practice',
    description:
      'The silent, daily discipline where text transforms into movement and sound. Dedicated to the bodily reconstruction of the 108 Karaṇas, vocal culture, and internal energy cultivation.'
  },
  {
    title: 'Saṃvāda',
    subtitle: 'Dialectical Discourse & Dialogue',
    description:
      'The gathering in the mandapa. Intellectual assembly, colloquiums, and interdisciplinary dialogues connecting classical heritage with contemporary aesthetic philosophy.'
  }
];

export const Philosophy = () => {
  return (
    <Section id="philosophy" background="parchment" divider={true}>
      <div className="space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <Caption>Our Foundation</Caption>
          <HeadingLG>The Three Pillars of the Gurukulam</HeadingLG>
        </div>

        {/* Editorial Tri-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-4">
          {PILLARS.map((pillar, idx) => (
            <div key={pillar.title} className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-border-linen/80 pb-3">
                  <HeadingMD className="text-2xl font-serif">{pillar.title}</HeadingMD>
                  <span className="font-serif text-sm italic text-accent-bronze">0{idx + 1}</span>
                </div>
                <span className="block font-sans text-xs uppercase tracking-[0.2em] text-accent-bronze font-medium">
                  {pillar.subtitle}
                </span>
                <Body className="text-[17px] leading-[1.8]">
                  {pillar.description}
                </Body>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width Architectural Image Interlude */}
        <div className="pt-8 space-y-3">
          <div className="aspect-[21/9] md:aspect-[24/9] w-full overflow-hidden border border-border-linen/40">
            <img
              src="/assets/images/banyan.png"
              alt="Sacred Banyan Tree in Gurukulam Courtyard"
              className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
            />
          </div>
          <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary text-right">
            Courtyard & Practice Pavilion — Sacred Geometry in Architecture
          </figcaption>
        </div>

        {/* Action Link */}
        <div className="pt-4 flex justify-end">
          <EditorialLink to="/approach">
            Explore Our Pedagogical Approach
          </EditorialLink>
        </div>
      </div>
    </Section>
  );
};

export default Philosophy;

