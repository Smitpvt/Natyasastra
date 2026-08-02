import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
import { HeadingLG, HeadingMD, Caption, Body } from '../../components/Typography';

const MONOGRAPHS = [
  {
    volume: 'Vol. I',
    title: 'The Reconstruction of Karaṇas',
    editor: 'Acharya V. Sastri & Guru Meera Devi',
    pages: '284 pages',
    year: 'MCMXX',
    theme: 'bg-bg-sandstone text-text-charcoal'
  },
  {
    volume: 'Vol. II',
    title: 'Dhvani & Rasa Aesthetics',
    editor: 'Acharya V. Sastri',
    pages: '192 pages',
    year: 'MCMXXII',
    theme: 'bg-accent-indigo text-bg-ivory'
  },
  {
    volume: 'Vol. III',
    title: 'Sthāpatya: The Space of Mandapa',
    editor: 'Gurukulam Research Group',
    pages: '312 pages',
    year: 'MCMXXIII',
    theme: 'bg-bg-paper text-text-charcoal'
  },
  {
    volume: 'Vol. IV',
    title: 'Vācika: Phonetics of Chanting',
    editor: 'Guru Meera Devi',
    pages: '144 pages',
    year: 'MCMXXIV',
    theme: 'bg-bg-limestone text-text-charcoal'
  }
];

export const Library = () => {
  return (
    <Section id="library" className="bg-bg-paper border-b border-border-stone/20">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-border-stone pb-8">
          <div className="space-y-3">
            <Caption>Scholarly Output</Caption>
            <HeadingLG>Gurukulam Publications</HeadingLG>
          </div>
          <Link
            to="/library"
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent-bronze hover:text-accent-gold transition-colors border-b border-accent-bronze/20 hover:border-accent-gold pb-1.5 duration-500"
          >
            Browse Monographs →
          </Link>
        </div>

        {/* Monographs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {MONOGRAPHS.map((book) => (
            <Link
              key={book.title}
              to="/library"
              className="flex flex-col group space-y-6"
            >
              {/* Book Spine / Cover Layout - Editorial Frame */}
              <div
                className={`w-full aspect-[3/4.2] border border-border-stone shadow-sm transition-transform duration-700 ease-out group-hover:-translate-y-2 flex flex-col justify-between p-8 relative ${book.theme}`}
              >
                {/* Paper texture noise */}
                <div className="absolute inset-0 bg-black/[0.02] mix-blend-overlay pointer-events-none" />
                
                {/* Monograph Header */}
                <div className="flex justify-between items-center border-b border-current/10 pb-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest opacity-80">
                    {book.volume}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-widest opacity-85">
                    {book.year}
                  </span>
                </div>

                {/* Book Title */}
                <div className="my-auto py-6">
                  <span className="font-serif text-xl md:text-2xl font-light tracking-wide block leading-snug">
                    {book.title}
                  </span>
                </div>

                {/* Book Footer */}
                <div className="border-t border-current/10 pt-4 text-[10px] uppercase tracking-wider opacity-80 space-y-1.5">
                  <span className="block font-medium truncate">{book.editor}</span>
                  <span className="block opacity-75">{book.pages}</span>
                </div>
              </div>

              {/* Title & Metadata below */}
              <div className="space-y-1.5 px-1">
                <span className="font-serif text-[18px] text-text-charcoal group-hover:text-accent-bronze transition-colors duration-500">
                  {book.title}
                </span>
                <span className="block font-sans text-xs text-text-stone-grey/85 tracking-wide">
                  {book.editor}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Library;
