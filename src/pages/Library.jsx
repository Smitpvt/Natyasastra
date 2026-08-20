import React, { useState } from 'react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';
import { PUBLICATIONS } from '../data/publications';
import { useSEO } from '../hooks/useSEO';
import { formatSanskrit } from '../utils/text';

export const Library = () => {
  useSEO({
    title: 'Publications & Research Archives',
    description: 'Access the flagship treatises, civilisational statecraft working papers, and Rasa reflection monographs published by the Nāṭyaśāstra Gurukulam.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Publications and Research Archives',
      'description': 'Treatises, working papers, and research documents on civilisational statecraft, governance, and aesthetic knowledge systems.',
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': PUBLICATIONS.slice(0, 5).map((pub, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'item': {
            '@type': 'ScholarlyArticle',
            'name': pub.title,
            'description': pub.desc,
            'genre': pub.series,
            'url': typeof window !== 'undefined' ? `${window.location.origin}${pub.file}` : pub.file
          }
        }))
      }
    }
  });

  const [filter, setFilter] = useState('All');

  const SERIES_TABS = [
    'All',
    'DTHF Papers',
    'Flagship Treatise',
    'Civilisational Statecraft Series',
    'Civilisational Governance',
    'Aesthetic Knowledge Systems',
    'Rasa Reflection Series'
  ];

  const filtered = filter === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.series === filter);

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section spacing="none" className="pt-16 pb-8 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Publications</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Research & Reflections
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            A growing body of research and reflection emerging from the work of Nāṭyaśāstra Gurukulam, spanning aesthetics, pedagogy, civilisational studies, governance, leadership, and public life.
          </BodyLG>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section spacing="none" className="pt-6 pb-2 border-b border-accent-bronze/10">
        <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-2 px-4 sm:px-8 max-w-[1440px] mx-auto">
          {SERIES_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-sans text-[11px] uppercase tracking-widest pb-2 border-b transition-colors whitespace-nowrap shrink-0 ${
                filter === tab
                  ? 'text-accent-bronze border-accent-bronze font-bold'
                  : 'text-text-stone-grey border-transparent hover:text-text-charcoal'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </Section>

      {/* Catalog Grid */}
      <Section spacing="none" className="py-16 bg-[#F8F6F1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {filtered.map((pub) => (
            <div
              key={pub.title}
              className="flex flex-col sm:flex-row gap-8 bg-white p-6 md:p-8 shadow-sm border border-black/5 hover:shadow-md transition-all duration-500 group relative items-start"
            >
              {/* Publication Cover Image */}
              {pub.cover ? (
                <a
                  href={pub.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Open PDF for ${pub.title}`}
                  className="w-[150px] h-[225px] sm:w-[165px] sm:h-[245px] mx-auto sm:mx-0 shrink-0 relative rounded-sm overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-black/10 bg-white flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={pub.cover}
                    alt={pub.title}
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                  {/* Subtle Book Spine overlay effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Subtle hover badge */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 text-text-charcoal font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded shadow-sm font-semibold">
                      Open PDF ↗
                    </span>
                  </div>
                </a>
              ) : (
                <a
                  href={pub.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Open PDF for ${pub.title}`}
                  className={`w-[150px] h-[230px] mx-auto sm:mx-0 shrink-0 shadow-md flex flex-col p-5 relative border cursor-pointer ${pub.theme}`}
                >
                  {/* Binding Detail */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/10 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]"></div>
                  
                  <div className="pl-2 flex flex-col h-full justify-between">
                    <div className="space-y-1">
                      <span className="text-[7px] uppercase tracking-widest opacity-80 block font-sans">
                        {formatSanskrit(pub.series)}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider opacity-90 block font-bold font-sans">
                        {pub.type}
                      </span>
                    </div>
                    
                    <span className="font-serif text-[12px] leading-snug block mt-3 pb-2 line-clamp-6">
                      {formatSanskrit(pub.title)}
                    </span>
                    
                    <div className="mt-auto text-[7px] uppercase tracking-[0.2em] opacity-80 border-t border-current/20 pt-2 font-medium">
                      Nāṭyaśāstra Gurukulam
                    </div>
                  </div>
                </a>
              )}

              {/* Publication Details */}
              <div className="flex flex-col flex-1 h-full pt-1 space-y-4">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-semibold">
                    {formatSanskrit(pub.series)} • {pub.type}
                  </span>
                  <a
                    href={pub.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group-hover:text-accent-bronze transition-colors duration-300"
                  >
                    <HeadingMD className="text-xl md:text-2xl text-text-charcoal leading-tight">
                      {formatSanskrit(pub.title)}
                    </HeadingMD>
                  </a>
                  <Body className="text-[13px] md:text-sm text-text-stone-grey leading-relaxed font-light pb-2">
                    {formatSanskrit(pub.desc)}
                  </Body>
                </div>

                <div className="mt-auto pt-4 border-t border-black/5">
                  <a
                    href={pub.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze hover:text-[#211F1D] transition-colors"
                  >
                    📄 Download PDF
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
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

