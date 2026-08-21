import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LotusDivider, ProspectusFrame } from '../../components/LotusOrnament';
import { HeadingLG } from '../../components/Typography';

const MENTORS = [
  {
    id: 'athreya',
    tabLabel: 'Dr. M. B. Athreya',
    name: 'Padma Bhushan Dr. M. B. Athreya',
    role: 'Marga Darshak',
    tagline: 'Civilisational & Ethical Guidance',
    quote: <span>Providing <em className="italic">Dhārmic</em>, civilisational, and ethical guidance to the <em className="italic">Gurukulam</em>’s vision and public orientation.</span>,
    bio: <span>Dr. M. B. Athreya is widely regarded as the pioneer of the Indian Management Movement and a distinguished thinker who has consistently sought to integrate modern organisational thought with <em className="italic">Dhārmic</em> vision. Awarded the Padma Bhushan by the Government of India, his presence anchors the larger civilisational horizon at the <em className="italic">Gurukulam</em>.</span>,
    image: '/assets/images/dr_athreya_thumb.webp',
    objectPos: 'object-top',
    pillarDevanagari: 'दृष्टि',
    pillarEnglish: 'VISION'
  },
  {
    id: 'padmaja',
    tabLabel: 'Dr. Padmaja Suresh',
    name: 'Karnataka Kalashri Dr. Padmaja Suresh',
    role: <span><em className="italic">Ācāryā</em> for <em className="italic">Nāṭya</em> Pedagogy</span>,
    tagline: <span><em className="italic">Nāṭya</em> as <em className="italic">Sādhanā</em> & Pedagogy</span>,
    quote: <span>Shaping the <em className="italic">Gurukulam</em>’s pedagogic vision through <em className="italic">Nāṭya</em> as <em className="italic">Sādhanā</em>.</span>,
    bio: <span>Dr. Padmaja Suresh is an acclaimed danseuse, scholar, teacher, and author whose life’s work bridges rigorous classical training with deep philosophical inquiry. Her pedagogy understands <em className="italic">Nāṭya</em> not merely as performance, but as <em className="italic">Sādhanā</em>, a path of inner refinement, ethical sensitivity, and contemplative awareness.</span>,
    image: '/assets/images/dr_padmaja_suresh_thumb.webp',
    objectPos: 'object-top',
    pillarDevanagari: 'साधना',
    pillarEnglish: 'PRACTICE'
  },
  {
    id: 'subrahmonyam',
    tabLabel: 'Śrī K. V. Subrahmoṇyan',
    name: 'Śrī K. V. Subrahmoṇyan',
    role: 'Spiritual Elder',
    tagline: <span><em className="italic">Sākṣitva</em> & <em className="italic">Vedāntic</em> Anchoring</span>,
    quote: <span>A presence of <em className="italic">sākṣitva</em> and <em className="italic">Vedāntic</em> anchoring, offering blessings, inner orientation, and lived wisdom.</span>,
    bio: <span>Revered disciple in the lineage of <em className="italic">Bhagavān</em> <em className="italic">Śrī</em> <em className="italic">Ramaṇa</em> <em className="italic">Maharṣi</em>. His life reflects quiet abidance, simplicity, discernment, and lived <em className="italic">Vedāntic</em> clarity, serving as a spiritual axis for the <em className="italic">Gurukulam</em>.</span>,
    image: '/assets/images/sri_kv_subrahmonyam_thumb.webp',
    objectPos: 'object-bottom',
    pillarDevanagari: 'मौन',
    pillarEnglish: 'SILENCE'
  }
];

export const Mentors = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#F5F0E6] py-12 md:py-16 border-t border-[#9E743B]/20 relative overflow-hidden text-[#211F1D]">
      
      {/* Background Subtle Geometry */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <svg width="800" height="800" viewBox="0 0 600 600" fill="none" className="text-[#9E743B]">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] space-y-8 sm:space-y-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION: Gurus & Acharyas (Inspired by PDF Page 7) */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#9E743B]/30 text-[#9E743B] font-sans text-xs uppercase tracking-[0.3em] font-semibold">
              LIVING LINEAGES
            </span>
            <HeadingLG className="text-[#6B1D1E] tracking-tight">
              Those Who Guide The Gurukulam
            </HeadingLG>
            <p className="font-serif italic text-base text-[#9E743B]">
              A tradition flourishes through those who quietly embody and transmit its deepest values.
            </p>
            <LotusDivider className="my-2" />
          </div>

          {/* Clean Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 max-w-4xl mx-auto px-4 py-2">
            {MENTORS.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#6B1D1E] text-white shadow-md ring-2 ring-[#6B1D1E]'
                    : 'bg-[#FAF6F0] text-[#757069] border border-[#9E743B]/25 hover:border-[#9E743B]/60 hover:bg-white'
                }`}
              >
                {m.tabLabel}
              </button>
            ))}
          </div>

          {/* Active Featured Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <ProspectusFrame innerClassName="p-4 xs:p-5 md:p-12">
                
                {/* Mobile Showcase Layout (< md) */}
                <div className="block md:hidden space-y-4">
                  {/* Top Row: Thumbnail & Header Info */}
                  <div className="flex items-start gap-4">
                    {/* Portrait Frame */}
                    <div className="relative rounded-lg overflow-hidden shadow-md border-2 border-[#9E743B]/30 bg-[#1E1C1A] w-[100px] xs:w-[115px] shrink-0 p-0.5">
                      <div className="aspect-[3/4] overflow-hidden rounded-md">
                        <img
                          src={MENTORS[activeTab].image}
                          alt={MENTORS[activeTab].name}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full object-cover ${MENTORS[activeTab].objectPos} filter contrast-[1.02]`}
                        />
                      </div>
                      <div className="absolute top-1 left-1">
                        <span className="px-1.5 py-0.5 bg-[#FAF6F0]/95 backdrop-blur-md text-[#6B1D1E] font-sans text-[7px] uppercase tracking-widest font-bold rounded shadow-xs border border-[#9E743B]/30">
                          {MENTORS[activeTab].id === 'athreya' ? 'MARGA DARSHAK' : MENTORS[activeTab].id === 'padmaja' ? 'ĀCĀRYĀ' : 'SPIRITUAL ELDER'}
                        </span>
                      </div>
                    </div>

                    {/* Name & Role & Devanagari Pillar Tag */}
                    <div className="space-y-1.5 flex-grow pt-1">
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#9E743B] font-bold block leading-none">
                        {MENTORS[activeTab].role}
                      </span>
                      <h3 className="font-serif text-[17px] xs:text-[19px] font-semibold text-[#6B1D1E] leading-tight">
                        {MENTORS[activeTab].name}
                      </h3>
                      
                      {/* Pillar tag */}
                      <div className="flex items-center gap-1.5 pt-1.5 border-t border-[#9E743B]/10 w-fit">
                        <span 
                          className="font-serif text-lg font-semibold text-[#6B1D1E] leading-none"
                          style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                        >
                          {MENTORS[activeTab].pillarDevanagari}
                        </span>
                        <span className="font-sans text-[8px] uppercase tracking-[0.2em] font-semibold text-[#9E743B] leading-none">
                          {MENTORS[activeTab].pillarEnglish}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quote Block */}
                  <div className="p-3 rounded-lg bg-[#FAF6F0] border-l-3 border-[#9E743B]/60 my-2">
                    <p className="font-serif italic text-xs xs:text-[13px] text-[#6B1D1E] leading-relaxed">
                      “{MENTORS[activeTab].quote}”
                    </p>
                  </div>

                  {/* Bio Text */}
                  <p className="font-sans text-[11px] xs:text-xs text-[#4A423B] leading-relaxed font-light">
                    {MENTORS[activeTab].bio}
                  </p>

                  {/* Profile Link Footer */}
                  <div className="pt-3 border-t border-[#9E743B]/10 flex items-center justify-end">
                    <Link
                      to="/mentors"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6B1D1E] text-white font-sans text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#211F1D] transition-colors shadow-sm"
                    >
                      Full Profile →
                    </Link>
                  </div>
                </div>

                {/* Desktop Showcase Layout (>= md) */}
                <div className="hidden md:grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
                  
                  {/* Left Portrait with Gold Frame */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-[#9E743B]/30 bg-[#1E1C1A] max-w-[280px] sm:max-w-[300px] w-full group p-1">
                      <div className="aspect-[3/4] overflow-hidden rounded-lg">
                        <img
                          src={MENTORS[activeTab].image}
                          alt={MENTORS[activeTab].name}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full object-cover ${MENTORS[activeTab].objectPos} filter contrast-[1.02]`}
                        />
                      </div>
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 bg-[#FAF6F0]/95 backdrop-blur-md text-[#6B1D1E] font-sans text-[10px] uppercase tracking-widest font-bold rounded-md shadow-sm border border-[#9E743B]/30">
                          {MENTORS[activeTab].role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Bio & Details */}
                  <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#9E743B] font-bold block">
                          {MENTORS[activeTab].role}
                        </span>
                        <HeadingLG className="text-[#6B1D1E] leading-tight">
                          {MENTORS[activeTab].name}
                        </HeadingLG>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F5F0E6] border-l-3 border-[#9E743B]">
                        <p className="font-serif italic text-base text-[#6B1D1E] leading-relaxed">
                          “{MENTORS[activeTab].quote}”
                        </p>
                      </div>

                      <p className="font-sans text-base text-[#4A423B] leading-relaxed font-light">
                        {MENTORS[activeTab].bio}
                      </p>
                    </div>

                    {/* PDF Page 7 Devanagari Pillar Tag Footer */}
                    <div className="pt-4 border-t border-[#9E743B]/20 flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <span 
                          className="font-serif text-2xl font-semibold text-[#6B1D1E]"
                          style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                        >
                          {MENTORS[activeTab].pillarDevanagari}
                        </span>
                        <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#9E743B]">
                          {MENTORS[activeTab].pillarEnglish}
                        </span>
                      </div>

                      <Link
                        to="/mentors"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6B1D1E] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#211F1D] transition-colors shadow-md"
                      >
                        Full Profile →
                      </Link>
                    </div>

                  </div>
                </div>
              </ProspectusFrame>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default Mentors;
