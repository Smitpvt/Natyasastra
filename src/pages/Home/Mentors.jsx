import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
import EditorialImage from '../../components/EditorialImage';
import { HeadingLG, HeadingMD, Caption, Body } from '../../components/Typography';

const MENTORS = [
  {
    name: 'Acharya V. Sastri',
    role: 'Mahopadhyaya',
    bio: "A legendary custodian of Abhinavagupta's aesthetic philosophy, Acharya Sastri has spent four decades decoding the esoteric meanings of the Tantrāloka in relation to performative arts.",
    image: '/assets/images/sastri_clean.png',
  },
  {
    name: 'Guru Meera Devi',
    role: 'Nritya-Kalanidhi',
    bio: 'Specializing in the somatic reconstruction of Karanas, Guru Meera Devi bridges the gap between sculptural evidence and kinetic practice with peerless precision and grace.',
    image: '/assets/images/meera_clean.png',
  }
];

export const Mentors = () => {
  return (
    <Section id="mentors" className="bg-bg-ivory border-b border-border-stone/20">
      <div className="space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-border-stone pb-8">
          <div className="space-y-3">
            <Caption>Living Lineages</Caption>
            <HeadingLG>Acharyas & Gurus</HeadingLG>
          </div>
          <Link
            to="/mentors"
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent-bronze hover:text-accent-gold transition-colors border-b border-accent-bronze/20 hover:border-accent-gold pb-1.5 duration-500"
          >
            Read Biography Details →
          </Link>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {MENTORS.map((mentor, idx) => (
            <div
              key={mentor.name}
              className={`flex flex-col md:flex-row gap-8 items-start border border-border-stone/40 bg-bg-paper/30 p-6 md:p-8 hover:border-accent-bronze/35 transition-all duration-700 ease-out ${
                idx % 2 === 1 ? 'md:translate-y-12' : ''
              }`}
            >
              {/* Image Frame */}
              <div className="w-full md:w-1/2 max-w-[220px] md:max-w-none mx-auto shrink-0">
                <EditorialImage
                  src={mentor.image}
                  alt={mentor.name}
                  aspectRatio="aspect-[3/4]"
                  copyright="Gurukulam Portrait"
                  caption={mentor.name}
                />
              </div>

              {/* Text Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6 pt-2">
                <div className="space-y-1">
                  <Caption className="text-[10px] text-accent-bronze/70">{mentor.role}</Caption>
                  <HeadingMD className="text-xl md:text-[24px] text-text-charcoal">{mentor.name}</HeadingMD>
                </div>
                
                <Body className="text-sm font-light text-text-stone-grey leading-relaxed">
                  {mentor.bio}
                </Body>
                
                <div className="pt-2 border-t border-border-stone/20">
                  <Link
                    to="/mentors"
                    className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent-bronze hover:text-accent-gold transition-colors duration-500"
                  >
                    View Lineage →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Mentors;
