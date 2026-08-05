import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, HeadingMD, Caption, Body, EditorialLink } from '../../components/Typography';

const MENTORS = [
  {
    name: 'Acharya V. Sastri',
    role: 'Mahopadhyaya — Aesthetic Metaphysics',
    bio: "A renowned scholar of Abhinavagupta's aesthetic philosophy, Acharya Sastri has spent four decades decoding the esoteric meanings of the Tantrāloka and Nāṭyaśāstra in relation to performance, sound, and consciousness.",
    image: '/assets/images/sastri_clean.png',
    caption: 'Acharya V. Sastri during a palm-leaf manuscript recitation'
  },
  {
    name: 'Guru Meera Devi',
    role: 'Nritya-Kalanidhi — Somatic Karaṇas',
    bio: 'Specializing in the somatic reconstruction of the 108 Karaṇas, Guru Meera Devi bridges sculptural evidence and kinetic practice with peerless precision, discipline, and spiritual depth.',
    image: '/assets/images/meera_clean.png',
    caption: 'Guru Meera Devi demonstrating posture alignment'
  }
];

export const Mentors = () => {
  return (
    <Section id="mentors" background="parchment" divider={true}>
      <div className="space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-linen/80 pb-6">
          <div className="space-y-3 max-w-2xl">
            <Caption>Living Lineages</Caption>
            <HeadingLG>Acharyas & Gurus</HeadingLG>
          </div>
          <EditorialLink to="/mentors">
            Read Full Biographies
          </EditorialLink>
        </div>

        {/* Profiles Layout */}
        <div className="space-y-24">
          {MENTORS.map((mentor, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={mentor.name}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Large Portrait Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[3/4] w-full overflow-hidden border border-border-linen/50">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {mentor.caption}
                  </figcaption>
                </div>

                {/* Biography Details */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <Caption>{mentor.role}</Caption>
                    <HeadingMD className="text-3xl font-serif">{mentor.name}</HeadingMD>
                  </div>

                  <Body className="text-[18px] leading-[1.85]">
                    {mentor.bio}
                  </Body>

                  <div className="pt-2">
                    <EditorialLink to="/mentors">
                      Explore Lineage & Teaching Philosophy
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

export default Mentors;

