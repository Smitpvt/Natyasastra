import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
import { HeadingLG, HeadingMD, Caption, Body } from '../../components/Typography';

const PROGRAMME_AREAS = [
  {
    id: 'study',
    title: 'Study',
    subtitle: 'Text & Metaphysical Geometry',
    description: 'Deciphering traditional treatises, exploring the mathematical proportions of sacred structures, and translation of Sanskrit manuals.',
    image: '/assets/images/sastri_clean.png',
    gridClass: 'lg:col-span-7',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 'practice',
    title: 'Practice',
    subtitle: 'Bodily Expression & Somatics',
    description: 'Physical reconstruction of Karanas, classical postures, and internal energy cultivation through daily practice regimens.',
    image: '/assets/images/sculpture_clean.png',
    gridClass: 'lg:col-span-5',
    aspect: 'aspect-[4/3] lg:aspect-auto lg:h-full'
  },
  {
    id: 'pedagogy',
    title: 'Pedagogy',
    subtitle: 'Gurukulam Teaching Systems',
    description: 'Transmission of knowledge through traditional methods where learning is customized to the intellectual capacity of the student.',
    image: '/assets/images/banyan_clean.png',
    gridClass: 'lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'archive',
    title: 'Archive',
    subtitle: 'Manuscript Cataloging',
    description: 'Digitising palm-leaf manuscripts and rare texts to preserve civilisational memory for future generations.',
    image: '/assets/images/corridor_clean.png',
    gridClass: 'lg:col-span-4',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'samvada',
    title: 'Saṃvāda',
    subtitle: 'Discourse & Debate',
    description: 'Seminars, residential colloquiums, and inter-disciplinary assemblies connecting artists and philosophers.',
    image: '/assets/images/meera_clean.png',
    gridClass: 'lg:col-span-4',
    aspect: 'aspect-[4/3]'
  }
];

export const Programmes = () => {
  return (
    <Section id="programmes" className="bg-bg-ivory border-b border-border-stone/20">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-border-stone pb-8">
          <div className="space-y-3">
            <Caption>Academic Pursuits</Caption>
            <HeadingLG>Sacred Domains</HeadingLG>
          </div>
          <Link
            to="/programmes"
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent-bronze hover:text-accent-gold transition-colors border-b border-accent-bronze/20 hover:border-accent-gold pb-1.5 duration-500"
          >
            Explore Curricula →
          </Link>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {PROGRAMME_AREAS.map((area) => (
            <Link
              key={area.id}
              to="/programmes"
              className={`flex flex-col bg-bg-paper border border-border-stone hover:border-accent-bronze/35 transition-all duration-700 ease-out group overflow-hidden hover:-translate-y-[3px] hover:shadow-[0_12px_24px_rgba(138,106,69,0.03)] ${area.gridClass}`}
            >
              {/* Image Container with Reveal and Tone overlay */}
              <div className={`relative overflow-hidden w-full ${area.aspect} bg-bg-limestone border-b border-border-stone`}>
                <img
                  src={area.image}
                  alt={area.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-accent-bronze/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
              </div>

              {/* Text Area */}
              <div className="p-8 md:p-10 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <HeadingMD className="text-text-charcoal font-light">
                      {area.title}
                    </HeadingMD>
                    <span className="font-serif text-[11px] text-accent-bronze/70 tracking-widest uppercase">
                      [{area.id}]
                    </span>
                  </div>
                  <span className="block font-sans text-xs uppercase tracking-widest text-accent-bronze/80">
                    {area.subtitle}
                  </span>
                </div>
                
                <Body className="text-sm font-light text-text-stone-grey leading-relaxed">
                  {area.description}
                </Body>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Programmes;
