import React from 'react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption, Quote } from '../components/Typography';

const PILLARS_DETAIL = [
  {
    num: '01',
    name: 'Śāstra (Textual Inquiry)',
    details: 'Our theoretical work focuses on the primary text of the Nāṭyaśāstra and its core commentary, the Abhinavabhāratī by Kashmirian philosopher Abhinavagupta. Students engage in rigorous Sanskrit grammar analysis, textual comparison, and the reading of palm leaf transcripts. This is not casual reading; it is a critical philological excavation of ancient aesthetic laws.'
  },
  {
    num: '02',
    name: 'Sādhanā (Somatic Embodiment)',
    details: 'Theory without practice remains dry; practice without theory is blind. Under the guidance of our gurus, practitioners subject their bodies to daily physical discipline. This includes reconstructing the 108 Karanas—dynamic movement units carved in stone on temple gates—and testing them kinetically against textual manuals to re-discover lost physical patterns.'
  },
  {
    num: '03',
    name: 'Saṃvāda (Dialectical Synthesis)',
    details: 'In our courtyard mandapas, scholars and practitioners gather for structured debate. We re-introduce the traditional Indian Vāda system of debate, where the goal is not to win, but to uncover truth. These sessions cover aesthetic suggestiveness (Dhvani), the psychological manifestation of emotion (Rasa), and how these classical systems speak to modern architecture, logic, and cognitive sciences.'
  }
];

export const Approach = () => {
  return (
    <div className="bg-bg-ivory pt-24">
      {/* Page Header */}
      <Section spacing="compact" className="pb-12">
        <div className="max-w-3xl space-y-6">
          <Caption>Our Pedagogy</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-6xl font-light">
            The Synthesis of Text and Practice
          </HeadingLG>
          <div className="w-20 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            We do not treat tradition as a fossil to be displayed in a museum, but as a seed to be watered in a living soil. Our approach combines rigorous academic philology with intensive somatic training.
          </BodyLG>
        </div>
      </Section>

      {/* Grid of Pillars */}
      <Section className="py-12 border-t border-accent-bronze/10">
        <div className="space-y-16">
          {PILLARS_DETAIL.map((pillar) => (
            <div
              key={pillar.num}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-accent-bronze/10 pb-16 last:border-b-0 last:pb-0"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="font-serif text-5xl md:text-7xl font-light text-accent-bronze/40 block">
                  {pillar.num}
                </span>
              </div>
              
              {/* Text */}
              <div className="lg:col-span-10 space-y-4">
                <HeadingMD>{pillar.name}</HeadingMD>
                <Body className="text-base md:text-lg font-light text-text-stone-grey leading-relaxed max-w-3xl">
                  {pillar.details}
                </Body>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy Quote */}
      <Section className="py-24 bg-bg-paper border-t border-accent-bronze/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Quote cite="Abhinavagupta, Abhinavabhāratī" className="border-l-0 pl-0 my-0">
            "Rasa is not produced; it is manifested. It is a resting in the self, a state of pure consciousness awakened by aesthetic form."
          </Quote>
          <div className="w-12 h-[1px] bg-accent-bronze/30 mx-auto mt-6" />
          <Body className="text-xs uppercase tracking-widest text-text-stone-grey font-medium">
            The Philosophy of Suggestion (Dhvani)
          </Body>
        </div>
      </Section>
    </div>
  );
};

export default Approach;
