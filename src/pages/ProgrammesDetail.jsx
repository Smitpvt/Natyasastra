import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, Body, Caption } from '../components/Typography';

const CURRICULA = [
  {
    num: '01',
    title: 'Sthāpatya & Form',
    description: 'Understanding the metaphysical geometry of temple space and its relation to the human body. Focuses on spatial layout, column proportions, and architectural resonance.',
    // Document/Manuscript icon
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17h6" />
        <path d="M9 13h6" />
        <path d="M9 9h6" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Vācika Abhinaya',
    description: 'The science of sound, phonetics, and the emotive power of Sanskrit recitation and dramatic speech. Engaging with vibration, meter (chandas), and tonal resonance.',
    // Book icon
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Dhvani Aesthetics',
    description: "Exploring Ānandavardhana's theory of suggestion and the psychology of aesthetic rasa. Discussing how suggestion and subtext evoke deep emotive responses in spectators.",
    // Bell/Altar icon
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Karana Sādhanā',
    description: 'Physical reconstruction of the 108 Karanas as detailed in the temple friezes and textual manuals. Tracing dynamic postures, transitions, and somatic grounding.',
    // Human posture/silhouette line icon
    icon: (
      <svg className="w-8 h-8 text-accent-bronze/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="1" />
        <path d="m9 20 3-6 3 6" />
        <path d="M6 8h12" />
        <path d="M12 6v8" />
      </svg>
    )
  }
];

export const ProgrammesDetail = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Editorial Header */}
      <Section className="pb-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-accent-bronze/10 pb-8">
          <div className="space-y-3">
            <Caption>Academic Programs</Caption>
            <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
              Sacred Curricula
            </HeadingLG>
          </div>
          <span className="font-sans text-xs tracking-widest text-accent-bronze font-medium">
            MCMXXIV
          </span>
        </div>
      </Section>

      {/* Program Lines Grid */}
      <Section className="py-6">
        <div className="flex flex-col">
          {CURRICULA.map((course) => (
            <div
              key={course.num}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 border-b border-accent-bronze/10 hover:bg-bg-paper px-6 transition-colors duration-500 group"
            >
              {/* Left Side: Number, Title, Description */}
              <div className="flex items-start gap-6 md:gap-8 max-w-3xl">
                <span className="font-serif text-xs text-accent-bronze/60 pt-1">
                  {course.num}
                </span>
                <div className="space-y-2">
                  <HeadingMD className="text-text-charcoal group-hover:text-accent-bronze transition-colors duration-300">
                    {course.title}
                  </HeadingMD>
                  <Body className="text-sm font-light text-text-stone-grey leading-relaxed">
                    {course.description}
                  </Body>
                </div>
              </div>

              {/* Right Side: Symbol */}
              <div className="flex items-center justify-end md:justify-center w-12 h-12 border border-accent-bronze/5 bg-bg-ivory group-hover:border-accent-bronze/20 transition-colors duration-500">
                {course.icon}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Program Admission/Dialogue CTA */}
      <Section className="py-24 border-t border-accent-bronze/10 bg-bg-paper">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <HeadingMD>Sādhanā Resīdensī • Residency Cycles</HeadingMD>
          <Body className="text-sm text-text-stone-grey font-light">
            Residencies are structured in cycles of three, six, or twelve months. We admit a maximum of five scholars per cycle to ensure direct guru-disciple transmission. Admissions are subject to rigorous interview and alignment check.
          </Body>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-accent-bronze/30 text-accent-bronze hover:bg-accent-bronze hover:text-bg-ivory font-sans text-xs uppercase tracking-widest transition-all duration-500"
            >
              Request Residency Admission →
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProgrammesDetail;
