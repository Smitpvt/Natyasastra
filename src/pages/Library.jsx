import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, FileText, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';
import { PUBLICATIONS } from '../data/publications';
import { useSEO } from '../hooks/useSEO';
import { formatSanskrit } from '../utils/text';

export const Library = () => {
  useSEO({
    title: 'Publications & Research Archives',
    description: 'Access the DTHF papers, civilisational statecraft working papers, and Rasa reflection monographs published by the Nāṭyaśāstra Gurukulam.',
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
  const [searchQuery, setSearchQuery] = useState('');

  // Preload top publication covers into browser cache for instant load
  useEffect(() => {
    PUBLICATIONS.slice(0, 6).forEach((pub) => {
      if (pub.cover) {
        const img = new Image();
        img.src = pub.cover;
      }
    });
  }, []);

  const SERIES_TABS = [
    'All',
    'DTHF Papers',
    'Civilisational Statecraft Series',
    'Civilisational Governance',
    'Aesthetic Knowledge Systems',
    'Rasa Reflection Series'
  ];

  // Calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts = { All: PUBLICATIONS.length };
    PUBLICATIONS.forEach((pub) => {
      counts[pub.series] = (counts[pub.series] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesCategory = filter === 'All' || pub.series === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.desc.toLowerCase().includes(q) ||
        pub.series.toLowerCase().includes(q) ||
        pub.type.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 xs:pt-22 sm:pt-28 pb-8 sm:pb-12">
      {/* Compact Header */}
      <Section spacing="none" className="pb-3 sm:pb-5 border-b border-[#9E743B]/15">
        <div className="max-w-4xl space-y-1.5 sm:space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-[#9E743B]/10 text-[#9E743B]">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            <Caption className="text-[11px] sm:text-xs">Knowledge & Research Archives</Caption>
          </div>
          
          <HeadingLG as="h1" className="text-2xl xs:text-3xl sm:text-4xl font-serif text-[#6B1D1E] tracking-tight leading-snug">
            Publications & Reflections
          </HeadingLG>
          
          <div className="w-12 h-[1.5px] bg-[#9E743B]/40 rounded-full my-1" />
          
          <BodyLG className="text-xs xs:text-sm sm:text-base text-[#5C564E] font-light leading-relaxed max-w-3xl">
            A growing body of research, treatises, and monographs emerging from the work of Nāṭyaśāstra Gurukulam, spanning aesthetics, pedagogy, civilisational statecraft, governance, and public life.
          </BodyLG>
        </div>
      </Section>

      {/* Search & Filter Controls */}
      <Section spacing="none" className="py-2 sm:py-2.5 border-b border-[#9E743B]/10 bg-[#F3EEE6]/90 backdrop-blur-md sticky top-[96px] z-30 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 max-w-[1440px] mx-auto">
          
          {/* Mobile-Friendly Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E743B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search publications by title or topic..."
              className="w-full pl-10 pr-9 py-2 sm:py-2.5 bg-white border border-[#9E743B]/25 rounded-xl text-xs sm:text-sm text-[#211F1D] placeholder-[#757069] focus:outline-none focus:ring-2 focus:ring-[#9E743B]/40 focus:border-[#9E743B] transition-all shadow-2xs font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757069] hover:text-[#211F1D] p-0.5 rounded-full hover:bg-black/5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Series Filter Tabs as Touch Pills */}
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 -mx-4 px-4 sm:mx-0 sm:px-0 max-w-full items-center">
            {SERIES_TABS.map((tab) => {
              const isSelected = filter === tab;
              const count = categoryCounts[tab] || 0;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`font-sans text-[10px] sm:text-[11px] uppercase tracking-wider py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-full border transition-all duration-300 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#805335] text-white border-[#805335] shadow-xs font-semibold'
                      : 'bg-white/80 hover:bg-white text-[#5C564E] border-[#9E743B]/20 hover:text-[#211F1D] hover:border-[#9E743B]/40'
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#9E743B]/10 text-[#805335]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Summary */}
        <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs text-[#757069] font-sans">
          <span>
            Showing <strong className="text-[#6B1D1E] font-semibold">{filtered.length}</strong> {filtered.length === 1 ? 'publication' : 'publications'}
            {filter !== 'All' && <span> in <span className="italic">{filter}</span></span>}
            {searchQuery && <span> matching "<span className="italic">{searchQuery}</span>"</span>}
          </span>
          {(filter !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setFilter('All');
                setSearchQuery('');
              }}
              className="text-[#9E743B] hover:text-[#6B1D1E] underline font-medium text-xs cursor-pointer ml-2"
            >
              Reset filters
            </button>
          )}
        </div>
      </Section>

      {/* Catalog Grid */}
      <Section spacing="none" className="py-4 sm:py-10 bg-[#F9F7F2]">
        {filtered.length === 0 ? (
          <div className="text-center py-12 sm:py-16 px-4 bg-white rounded-2xl border border-[#9E743B]/15 shadow-xs max-w-xl mx-auto space-y-3 sm:space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#9E743B]/10 text-[#9E743B] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#211F1D]">No Publications Found</h3>
            <p className="text-xs sm:text-sm text-[#757069] font-light max-w-md mx-auto">
              No research papers match your current search or category filter. Try clearing your search query or selecting a different tab.
            </p>
            <button
              onClick={() => {
                setFilter('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#805335] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#6B1D1E] transition-colors shadow-xs cursor-pointer"
            >
              View All Publications
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
            {filtered.map((pub, idx) => (
              <div
                key={pub.title}
                style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 240px' }}
                className="flex flex-col sm:flex-row bg-white rounded-2xl border border-[#9E743B]/20 shadow-2xs hover:shadow-xl hover:border-[#9E743B]/45 transition-all duration-300 group relative overflow-hidden items-stretch"
              >
                {/* Framed Publication Cover Container - 100% Visible Unclipped Image on Desktop & Mobile */}
                <div className="w-full sm:w-[200px] md:w-[230px] lg:w-[250px] aspect-[2/3] shrink-0 relative overflow-hidden bg-[#FAF8F5] border-b sm:border-b-0 sm:border-r border-[#9E743B]/15 flex items-center justify-center p-2.5 sm:p-3.5">
                  {pub.cover ? (
                    <a
                      href={pub.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open PDF for ${pub.title}`}
                      className="w-full h-full relative flex items-center justify-center overflow-hidden cursor-pointer rounded-md shadow-md group-hover:shadow-xl transition-all duration-300 bg-white"
                    >
                      {/* Main Full Cover Image - 100% Unclipped from Top to Bottom */}
                      <img
                        src={pub.cover}
                        alt={pub.title}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        loading={idx < 4 ? "eager" : "lazy"}
                        fetchpriority={idx < 4 ? "high" : "low"}
                        decoding="async"
                      />

                      {/* Realistic 3D Book Spine Overlay Effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-10 pointer-events-none" />

                      {/* Floating Action Badge on Hover / Touch */}
                      <div className="absolute inset-0 z-20 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                        <span className="bg-white/95 backdrop-blur-xs text-[#6B1D1E] font-sans text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl font-bold flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          Open PDF <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </a>
                  ) : (
                    <a
                      href={pub.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open PDF for ${pub.title}`}
                      className={`w-full h-full flex flex-col p-4 sm:p-5 relative cursor-pointer group-hover:scale-[1.02] transition-all duration-300 ${pub.theme}`}
                    >
                      {/* Binding Detail */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/30 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]" />

                      <div className="pl-3 flex flex-col h-full justify-between">
                        <div className="space-y-1">
                          <span className="text-[8px] uppercase tracking-widest opacity-80 block font-sans">
                            {formatSanskrit(pub.series)}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider opacity-90 block font-bold font-sans">
                            {pub.type}
                          </span>
                        </div>

                        <span className="font-serif text-sm leading-snug block my-2 sm:my-3 line-clamp-4 font-semibold">
                          {formatSanskrit(pub.title)}
                        </span>

                        <div className="mt-auto text-[8px] uppercase tracking-[0.15em] opacity-80 border-t border-current/20 pt-2 font-medium">
                          Nāṭyaśāstra Gurukulam
                        </div>
                      </div>
                    </a>
                  )}
                </div>

                {/* Publication Text Content & Action */}
                <div className="flex flex-col flex-1 min-w-0 justify-between p-3.5 xs:p-4 sm:p-6 space-y-2.5 sm:space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#9E743B]/10 text-[#805335] text-[10px] uppercase tracking-widest font-semibold font-sans">
                        {formatSanskrit(pub.series)}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#757069] font-medium font-sans">
                        • {pub.type}
                      </span>
                    </div>
<<<<<<< HEAD
                    
                    <span className="font-serif text-[12px] leading-snug block mt-3 pb-2 line-clamp-6">
                      {formatSanskrit(pub.title)}
                    </span>
                    
                    <div className="mt-auto text-[7px] uppercase tracking-[0.2em] opacity-80 border-t border-current/20 pt-2 font-medium">
                      Nāṭyaśāstra Gurukulam
                      <span className="block text-[6px] tracking-[0.1em] opacity-90 font-normal mt-0.5">A Centre of Civilisational Statecraft</span>
                    </div>
=======

                    <a
                      href={pub.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group-hover:text-[#6B1D1E] transition-colors duration-300"
                    >
                      <HeadingMD className="text-base xs:text-lg sm:text-xl text-[#211F1D] group-hover:text-[#6B1D1E] transition-colors leading-snug font-serif">
                        {formatSanskrit(pub.title)}
                      </HeadingMD>
                    </a>

                    <Body className="text-xs sm:text-sm text-[#5C564E] leading-relaxed font-light line-clamp-3 xs:line-clamp-4">
                      {formatSanskrit(pub.desc)}
                    </Body>
>>>>>>> 1ea4d293e6ebab085cc7376d900ad9d6fbdf36cc
                  </div>

                  {/* Touch-Friendly Action Button */}
                  <div className="pt-3 border-t border-[#9E743B]/10">
                    <a
                      href={pub.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2.5 py-2.5 px-4 rounded-xl bg-[#6B1D1E]/10 hover:bg-[#6B1D1E] text-[#6B1D1E] hover:text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 group/btn shadow-2xs"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#6B1D1E] group-hover/btn:text-white transition-colors" />
                        Download PDF
                      </span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};

export default Library;


