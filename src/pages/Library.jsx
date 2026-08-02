import React, { useState } from 'react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

const PUBLICATIONS = [
  {
    type: 'monograph',
    volume: 'Vol. I',
    title: 'The Reconstruction of Karaṇas',
    editor: 'Acharya V. Sastri & Guru Meera Devi',
    pages: '284 pages',
    year: 'MCMXX',
    desc: 'An in-depth somatic archaeological analysis of the 108 temple friezes and their alignment with Chapter IV of the Nāṭyaśāstra.',
    theme: 'bg-bg-sandstone text-text-charcoal'
  },
  {
    type: 'monograph',
    volume: 'Vol. II',
    title: 'Dhvani & Rasa Aesthetics',
    editor: 'Acharya V. Sastri',
    pages: '192 pages',
    year: 'MCMXXII',
    desc: "A translation and commentary on Ānandavardhana's Dhvanyāloka, examining the psychology of suggestion in dramatic arts.",
    theme: 'bg-accent-indigo text-bg-ivory'
  },
  {
    type: 'monograph',
    volume: 'Vol. III',
    title: 'Sthāpatya: The Space of Mandapa',
    editor: 'Gurukulam Research Group',
    pages: '312 pages',
    year: 'MCMXXIII',
    desc: 'Metaphysical layout codes of classical temple courtyards and the acoustic properties of stone gathering halls.',
    theme: 'bg-bg-paper text-text-charcoal'
  },
  {
    type: 'journal',
    volume: 'Issue 4',
    title: 'The Journal of Somatic Archaeology',
    editor: 'Nāṭyaśāstra Gurukulam',
    pages: '128 pages',
    year: 'MCMXXIV',
    desc: 'Bi-annual journal containing essays on traditional recitation, breath control (Prāṇa) in performative arts, and bronze sculpture geometries.',
    theme: 'bg-bg-limestone text-text-charcoal'
  },
  {
    type: 'manuscript',
    volume: 'MSS. 82',
    title: 'Abhinavabhāratī Palm Leaf Transcript',
    editor: 'Kashmir Manuscript Collection (Facsimile)',
    pages: '72 folios',
    year: 'Ancient',
    desc: 'Digitised high-resolution photographic facsimile of the surviving manuscript copies containing chapters 1-6 commentary.',
    theme: 'bg-bg-paper text-accent-bronze border-dashed border border-accent-bronze/35'
  }
];

export const Library = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.type === filter);

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Publications & Archives</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Academic Monograph Series
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            We publish peer-reviewed academic monographs and critical editions of classical texts, focusing on the interface between treatise and performance.
          </BodyLG>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section className="py-8 border-b border-accent-bronze/10">
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
          {['all', 'monograph', 'journal', 'manuscript'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-sans text-xs uppercase tracking-widest pb-2 border-b transition-colors whitespace-nowrap ${
                filter === tab
                  ? 'text-accent-bronze border-accent-bronze font-semibold'
                  : 'text-text-stone-grey border-transparent hover:text-text-charcoal'
              }`}
            >
              {tab === 'all' ? 'All Publications' : tab + 's'}
            </button>
          ))}
        </div>
      </Section>

      {/* Catalog Grid */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filtered.map((pub) => (
            <div
              key={pub.title}
              className="flex flex-col sm:flex-row gap-8 bg-bg-paper p-6 border border-accent-bronze/10 hover:border-accent-bronze/20 transition-all duration-500 group relative"
            >
              {/* Paper noise overlay */}
              <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />

              {/* Book cover visual */}
              <div className={`w-[140px] h-[196px] mx-auto sm:mx-0 shrink-0 shadow-sm flex flex-col justify-between p-4 relative ${pub.theme}`}>
                <div className="flex justify-between items-center text-[8px] uppercase tracking-widest opacity-80 border-b border-current/10 pb-1.5">
                  <span>{pub.volume}</span>
                  <span>{pub.year}</span>
                </div>
                <span className="font-serif text-sm leading-tight font-light block my-auto py-2">
                  {pub.title}
                </span>
                <div className="text-[8px] uppercase tracking-widest opacity-80 border-t border-current/10 pt-1.5 font-medium truncate">
                  {pub.editor}
                </div>
              </div>

              {/* Publication Details */}
              <div className="flex flex-col justify-between py-2 space-y-4">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze">
                    {pub.type} • {pub.volume}
                  </span>
                  <HeadingMD className="text-lg md:text-xl text-text-charcoal group-hover:text-accent-bronze transition-colors duration-300">
                    {pub.title}
                  </HeadingMD>
                  <Body className="text-xs text-text-stone-grey leading-relaxed font-light">
                    {pub.desc}
                  </Body>
                </div>

                <div className="flex items-center gap-6 border-t border-accent-bronze/10 pt-3">
                  <span className="font-sans text-[10px] tracking-wider text-text-stone-grey">
                    {pub.pages}
                  </span>
                  <span className="font-serif italic text-xs text-accent-bronze cursor-not-allowed">
                    Inquire for Reprint
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Library;
