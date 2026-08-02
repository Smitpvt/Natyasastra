import React from 'react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

const LETTERS = [
  {
    date: 'August 2026',
    title: 'Letter from the Sabha: Reconstructing the Apaviddha Karana',
    excerpt: 'We have concluded a six-month somatic comparison of the Chidambaram stone reliefs with the commentary of Abhinavagupta. Our findings suggest that current performance practices miss a crucial pelvic rotation...',
    author: 'Acharya V. Sastri & Guru Meera Devi'
  },
  {
    date: 'June 2026',
    title: 'The Autumn Colloquium: Geometries of Sacred Space',
    excerpt: 'An assembly of six traditional architects (sthapatis) and scholars will gather at the Gurukulam for five days in October to map out the mathematics of the Sabha pillars. Patron seats are limited to three.',
    author: 'Gurukulam Secretariat'
  },
  {
    date: 'March 2026',
    title: 'Manuscript Archives: 42 New Palm Leaf Facsimiles Received',
    excerpt: 'Through a collaboration with the Kashmir Heritage Trust, we have acquired high-resolution digital copies of 42 rare palm leaf scriptures. Cataloging and transcription will commence immediately in our library.',
    author: 'Library Archives Group'
  }
];

export const News = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Bulletins & Letters</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            News & Chronicles
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Quiet announcements, research newsletters, and details of upcoming scholarly assemblies.
          </BodyLG>
        </div>
      </Section>

      {/* Letters List */}
      <Section className="py-12">
        <div className="max-w-3xl mx-auto space-y-16">
          {LETTERS.map((letter, idx) => (
            <article
              key={idx}
              className="border-b border-accent-bronze/10 pb-12 last:border-b-0 last:pb-0 space-y-4"
            >
              <div className="flex justify-between items-baseline gap-4">
                <Caption className="text-accent-bronze/70">{letter.date}</Caption>
                <span className="font-sans text-[10px] text-text-stone-grey font-medium uppercase tracking-widest">
                  Letter No. 0{idx + 1}
                </span>
              </div>
              
              <HeadingMD className="text-xl md:text-2xl hover:text-accent-bronze transition-colors cursor-pointer">
                {letter.title}
              </HeadingMD>
              
              <Body className="text-sm md:text-base text-text-stone-grey/90 leading-relaxed font-light">
                {letter.excerpt}
              </Body>

              <div className="flex justify-between items-center pt-2">
                <span className="font-sans text-xs italic text-text-stone-grey/70">
                  By {letter.author}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze cursor-not-allowed">
                  Read Full Letter
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default News;
