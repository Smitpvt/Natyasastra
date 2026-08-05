import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, HeadingMD, Caption, Body, EditorialLink } from '../../components/Typography';

const PROGRAMMES = [
  {
    id: 'study',
    title: 'Study',
    subtitle: 'Textual Hermeneutics & Metaphysical Geometry',
    description: 'Deciphering primary Sanskrit treatises, mapping sacred architectural proportions, and translating classical performance manuals.',
    image: '/assets/images/sastri_clean.png',
    caption: 'Scholarly Treatise Analysis — Research Desk'
  },
  {
    id: 'practice',
    title: 'Practice',
    subtitle: 'Bodily Expression & Somatic Karaṇas',
    description: 'Physical reconstruction of the 108 Karaṇas, classical postures, and voice cultivation through daily bodily regimens.',
    image: '/assets/images/sculpture_clean.png',
    caption: 'Embodied Movement Study — Temple Frieze Reconstruction'
  },
  {
    id: 'pedagogy',
    title: 'Pedagogy',
    subtitle: 'Gurukulam Transmission & Mentorship',
    description: 'Traditional oral and experiential transmission where learning is tailored directly to the intellectual and spiritual capacity of the seeker.',
    image: '/assets/images/meera_clean.png',
    caption: 'Guru-Śiṣya Paramparā — Practice Session'
  }
];

export const Programmes = () => {
  return (
    <Section id="programmes" background="ivory" divider={true}>
      <div className="space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-linen/80 pb-6">
          <div className="space-y-3 max-w-2xl">
            <Caption>Curricula & Domains</Caption>
            <HeadingLG>Pedagogical Pursuits</HeadingLG>
          </div>
          <EditorialLink to="/programmes">
            View All Curricula
          </EditorialLink>
        </div>

        {/* Editorial Blocks Stack */}
        <div className="space-y-24">
          {PROGRAMMES.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Block (~70% width or 7/12 grid cols) */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[16/10] w-full overflow-hidden border border-border-linen/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {item.caption}
                  </figcaption>
                </div>

                {/* Text Block (~30% width or 5/12 grid cols) */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="font-serif text-sm italic text-accent-bronze">0{index + 1}</span>
                    <HeadingMD className="text-3xl font-serif">{item.title}</HeadingMD>
                    <span className="block font-sans text-xs uppercase tracking-[0.2em] text-accent-bronze font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <Body className="text-[17px] leading-[1.85]">
                    {item.description}
                  </Body>

                  <div className="pt-2">
                    <EditorialLink to="/programmes">
                      Explore {item.title} Curriculum
                    </EditorialLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Programmes;

