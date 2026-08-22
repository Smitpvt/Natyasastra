import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';
import { LotusIcon, LotusDivider, ProspectusFrame, BrassDiyaIcon } from '../components/LotusOrnament';
import { useSEO } from '../hooks/useSEO';

export const Associate = () => {
  useSEO({
    title: 'Associate & Support',
    description: 'Learn how to support and associate with the Nāṭyaśāstra Gurukulam through research fellowships, library building, and institutional endowment funds.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Associate & Support',
      'description': 'Enable the perpetuity and expansion of the Gurukulam through our key funding circles.',
      'url': typeof window !== 'undefined' ? window.location.origin + '/associate' : ''
    }
  });

  const [showAllFlames, setShowAllFlames] = useState(false);
  const [showAllCircles, setShowAllCircles] = useState(false);

  const CIRCLES_DATA = [
    { num: 'I.', title: 'PERPETUITY FUND', desc: 'Sustaining the institution that makes all this possible.' },
    { num: 'II.', title: 'CUSTODIAN SCHOLARSHIP FUND', desc: 'Sustaining the people who carry the tradition forward.' },
    { num: 'III.', title: 'CIVILISATIONAL INQUIRY FUND', desc: 'Sustaining ideas that inform leadership and public life.' },
    { num: 'IV.', title: <span><em className="italic">NĀṬYĀLOKA</em> FUND</span>, desc: 'Sustaining the voice that preserves and shares our inheritance.' },
    { num: 'V.', title: 'INSTITUTIONAL ENDOWMENT FUND', desc: <span>Enabling the <em className="italic">Gurukulam</em>’s perpetual continuity and expansion.</span> }
  ];

  const FLAMES_DATA = [
    { flame: 'I. THE FIRST FLAME', area: 'Scholarships', desc: 'Enables scholarships for promising practitioners with financial need.' },
    { flame: 'II. THE SHARED FLAME', area: 'Research & Publications', desc: 'Supports research, white papers, publications, and institutional knowledge.' },
    { flame: 'III. THE GUIDING FLAME', area: 'Residential Immersions', desc: 'Enables residential immersions and programmes that shape practitioners.' },
    { flame: 'IV. THE ENDURING FLAME', area: 'Faculty Chairs & Archives', desc: 'Supports faculty chairs, documentation, and preservation of intellectual heritage.' },
    { flame: 'V. THE ETERNAL FLAME', area: 'Institutional Endowment', desc: 'Builds the endowment corpus ensuring perpetual continuity across generations.' }
  ];

  return (
    <div className="bg-[#F5F0E6] pt-24 min-h-screen text-[#211F1D] selection:bg-[#9E743B]/20">
      
      {/* 1. HEADER & INTRO (Inspired by PDF Page 11) */}
      <Section className="pb-12 border-b border-[#9E743B]/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#9E743B]/30 text-[#9E743B] font-sans text-xs uppercase tracking-[0.3em] font-semibold">
            AN INVITATION TO STEWARDSHIP
          </span>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light text-[#6B1D1E]">
            Becoming a Founding Patron
          </HeadingLG>
          <LotusDivider />
          <p className="font-serif italic text-base sm:text-lg text-[#7A5428] max-w-2xl mx-auto leading-relaxed">
            Every enduring institution begins with a small circle of people who recognise that some forms of wealth acquire their highest meaning when placed in service of future generations.
          </p>
        </div>
      </Section>

      {/* 2. THE CIRCLES OF PERMANENCE & 5 FLAME LEVELS (PDF Page 11 Inspiration) */}
      <Section className="py-10 md:py-14 border-b border-[#9E743B]/20 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Concentric Circles of Permanence Visual */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2 text-center lg:text-left">
                <Caption className="text-[#9E743B]">Foundational Endowments</Caption>
                <HeadingMD className="text-[#6B1D1E]">The Circles of Permanence</HeadingMD>
                <p className="font-sans text-xs text-[#4A423B] font-light leading-relaxed">
                  Five concentric spheres of custodianship sustaining the <em className="italic">Gurukulam</em> in perpetuity.
                </p>
              </div>

              {/* Concentric Spheres Diagram */}
              <div className="space-y-3 pt-2">
                {CIRCLES_DATA.map((circle, i) => (
                  <div 
                    key={i}
                    className={`p-4 rounded-xl border border-[#9E743B]/30 bg-white/80 items-start gap-4 hover:border-[#6B1D1E] shadow-2xs transition-all ${
                      i >= 3 && !showAllCircles ? 'hidden sm:flex' : 'flex'
                    }`}
                  >
                    <span className="font-serif text-sm font-semibold text-[#6B1D1E] pt-0.5">{circle.num}</span>
                    <div className="space-y-0.5">
                      <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-[#6B1D1E]">{circle.title}</h4>
                      <p className="font-sans text-xs text-[#4A423B] font-light leading-relaxed">{circle.desc}</p>
                    </div>
                  </div>
                ))}

                {CIRCLES_DATA.length > 3 && (
                  <button
                    onClick={() => setShowAllCircles(!showAllCircles)}
                    className="sm:hidden w-full py-2.5 px-4 rounded-xl border border-[#9E743B]/30 bg-white hover:bg-[#FAF6F0] text-[#6B1D1E] font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-2xs mt-3"
                  >
                    <span>{showAllCircles ? 'Show Less ↑' : `View More Funds (${CIRCLES_DATA.length - 3} More) ↓`}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Founding Patron Guide (5 Flame Tiers) */}
            <div className="lg:col-span-6 space-y-6">
              <ProspectusFrame innerClassName="p-6 sm:p-8 space-y-6">
                <div className="text-center space-y-2 border-b border-[#9E743B]/20 pb-4">
                  <span className="font-serif text-xs uppercase tracking-widest text-[#9E743B] font-bold block">
                    FOUNDING PATRON GUIDE
                  </span>
                  <p className="font-serif italic text-sm text-[#7A5428]">
                    There are many ways to become a founding custodian of this institution.
                  </p>
                </div>

                {/* 5 Flame Levels */}
                <div className="space-y-5">
                  {FLAMES_DATA.map((tier, i) => (
                    <div 
                      key={tier.flame} 
                      className={`gap-4 items-start ${
                        i >= 3 && !showAllFlames ? 'hidden sm:flex' : 'flex'
                      }`}
                    >
                      <BrassDiyaIcon className="w-7 h-7 shrink-0" glow={true} />
                      <div className="space-y-0.5 flex-1">
                        <div className="flex items-baseline justify-between flex-wrap gap-2">
                          <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-[#6B1D1E]">{tier.flame}</h4>
                          <span className="font-serif italic text-xs text-[#9E743B] font-medium">{tier.area}</span>
                        </div>
                        <p className="font-sans text-xs text-[#4A423B] font-light leading-relaxed">{tier.desc}</p>
                      </div>
                    </div>
                  ))}

                  {FLAMES_DATA.length > 3 && (
                    <button
                      onClick={() => setShowAllFlames(!showAllFlames)}
                      className="sm:hidden w-full py-2.5 px-4 rounded-xl border border-[#9E743B]/30 bg-[#FAF6F0] hover:bg-white text-[#6B1D1E] font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-2xs mt-3"
                    >
                      <span>{showAllFlames ? 'Show Less ↑' : `View More Tiers (${FLAMES_DATA.length - 3} More) ↓`}</span>
                    </button>
                  )}
                </div>

                <div className="pt-4 border-t border-[#9E743B]/20 text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#6B1D1E] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#211F1D] transition-colors shadow-md"
                  >
                    Inquire for Patron Prospectus →
                  </Link>
                </div>
              </ProspectusFrame>
            </div>

          </div>
        </div>
      </Section>

      {/* 3. ŚUBHAM CEREMONIAL CLOSING (Inspired by PDF Page 13) */}
      <Section className="py-14 md:py-20 bg-[#F5F0E6] relative border-t border-[#9E743B]/20">
        <div className="max-w-3xl mx-auto text-center space-y-8 px-6 relative z-10">
          
          <div className="space-y-2">
            <span className="font-serif italic text-3xl sm:text-4xl text-[#6B1D1E] font-medium block">
              <em className="italic">Śubham</em>
            </span>
            <LotusDivider className="my-3" />
          </div>

          {/* Central Glowing Diya */}
          <div className="py-4 flex justify-center">
            <div className="relative p-6 rounded-full bg-[#FAF6F0] border-2 border-[#9E743B]/40 shadow-xl">
              <BrassDiyaIcon className="w-16 h-16" glow={true} />
            </div>
          </div>

          {/* Ceremonial Text from PDF Page 13 */}
          <div className="space-y-4 font-serif text-lg sm:text-xl md:text-2xl text-[#4A423B] font-light leading-relaxed max-w-xl mx-auto">
            <p className="m-0">Some institutions are built for a generation.</p>
            <p className="m-0 font-medium text-[#6B1D1E]">Others are entrusted to generations.</p>
            <p className="m-0 italic text-base sm:text-lg pt-2 text-[#7A5428]"><em className="italic">Nāṭyaśāstra Gurukulam</em> has been founded in that spirit.</p>
          </div>

          <div className="pt-6">
            <p className="font-serif italic text-sm sm:text-base text-[#9E743B] font-medium m-0">
              May the lamp continue to light another.
            </p>
          </div>

          <div className="pt-8 border-t border-[#9E743B]/20 max-w-xs mx-auto text-center space-y-1">
            <span className="font-serif text-xs uppercase tracking-[0.2em] font-bold text-[#6B1D1E] block">
              <em className="italic">NĀṬYAŚĀSTRA GURUKULAM</em>
            </span>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A5428] block">
              A Centre for Civilisational Statecraft
            </span>
          </div>

        </div>
      </Section>

    </div>
  );
};

export default Associate;
