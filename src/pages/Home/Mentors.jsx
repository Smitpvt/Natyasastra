import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MENTORS = [
  {
    id: 'athreya',
    tabLabel: 'Dr. M. B. Athreya',
    name: 'Padma Bhushan Dr. M. B. Athreya',
    role: 'Mārga Darśak',
    tagline: 'Civilisational & Ethical Guidance',
    quote: 'Providing Dhārmic, civilisational, and ethical guidance to the Gurukulam’s vision and public orientation.',
    bio: 'Dr. M. B. Athreya is widely regarded as the pioneer of the Indian Management Movement and a distinguished thinker who has consistently sought to integrate modern organisational thought with Dhārmic vision. Awarded the Padma Bhushan by the Government of India, his presence anchors the larger civilisational horizon at the Gurukulam.',
    image: '/assets/images/dr_athreya.jpg',
    objectPos: 'object-top'
  },
  {
    id: 'padmaja',
    tabLabel: 'Dr. Padmaja Suresh',
    name: 'Karnataka Kalashri Dr. Padmaja Suresh',
    role: 'Ācāryā for Nāṭya Pedagogy',
    tagline: 'Nāṭya as Sādhanā & Pedagogy',
    quote: 'Shaping the Gurukulam’s pedagogic vision through Nāṭya as Sādhanā.',
    bio: 'Dr. Padmaja Suresh is an acclaimed danseuse, scholar, teacher, and author whose life’s work bridges rigorous classical training with deep philosophical inquiry. Her pedagogy understands Nāṭya not merely as performance, but as Sādhanā, a path of inner refinement, ethical sensitivity, and contemplative awareness.',
    image: '/assets/images/dr_padmaja_suresh.jpg',
    objectPos: 'object-top'
  },
  {
    id: 'subrahmonyam',
    tabLabel: 'Śrī K. V. Subrahmoṇyan',
    name: 'Śrī K. V. Subrahmoṇyan',
    role: 'Spiritual Elder',
    tagline: 'Sākṣitva & Vedāntic Anchoring',
    quote: 'A presence of sākṣitva and Vedāntic anchoring, offering blessings, inner orientation, and lived wisdom.',
    bio: 'Revered disciple in the lineage of Bhagavān Śrī Ramaṇa Maharṣi. His life reflects quiet abidance, simplicity, discernment, and lived Vedāntic clarity, serving as a spiritual axis for the Gurukulam.',
    image: '/assets/images/sri_kv_subrahmonyam.jpg',
    objectPos: 'object-bottom'
  }
];

export const Mentors = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#F8F6F1] py-24 border-t border-accent-bronze/10 relative overflow-hidden text-[#211F1D]">
      
      {/* Background Subtle Geometry */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <svg width="800" height="800" viewBox="0 0 600 600" fill="none" className="text-accent-bronze">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] space-y-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION 1: Yajamāna & Yojaka Featured Block */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b border-accent-bronze/15 pb-20"
        >
          {/* Left Column: Office Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/20 text-accent-bronze font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                Office & Guardianship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#211F1D] tracking-tight leading-tight">
                Yajamāna & Yojaka
              </h2>
            </div>
            
            <div className="w-16 h-[1px] bg-accent-bronze/30" />

            <div className="space-y-4 font-sans text-base sm:text-lg text-text-stone-grey font-light leading-relaxed">
              <p>
                Nāṭyaśāstra Gurukulam is understood not merely as an institution, but as a living <strong className="font-serif italic font-normal text-[#211F1D]">Yajña</strong> dedicated to the transmission of Nāṭya, Dharma, and civilisational renewal. Within this understanding, the <strong className="font-serif italic font-normal text-[#211F1D]">Yajamāna</strong> is not an owner or authority, but the one who bears responsibility for the consecration, continuity, and integrity of the yajña.
              </p>
              <p>
                The <strong className="font-serif italic font-normal text-[#211F1D]">Yojaka</strong> brings people, ideas, and institutions into harmonious relationship, ensuring that the original saṅkalpa unfolds faithfully across time. <strong className="font-medium text-[#211F1D]">Rohit Viswanath</strong> serves the Gurukulam in this spirit as its Yajamāna & Yojaka.
              </p>
            </div>
          </div>

          {/* Right Column: Rohit Viswanath Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E1C1A] max-w-[280px] sm:max-w-[310px] mx-auto w-full group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/images/rohit_viswanath.png"
                  alt="Rohit Viswanath - Yajamāna & Yojaka"
                  className="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                />
              </div>
              <div className="absolute top-3.5 left-3.5">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-accent-bronze font-sans text-[10px] uppercase tracking-widest font-bold rounded-md shadow-sm border border-accent-bronze/20">
                  YAJAMĀNA & YOJAKA
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 2: Gurus & Acharyas (Creative Interactive Showcase) */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/20 text-accent-bronze font-sans text-xs uppercase tracking-[0.3em] font-semibold">
              LIVING LINEAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#211F1D] tracking-tight">
              Gurus & Ācāryas
            </h2>
            <p className="font-serif italic text-base text-accent-bronze">
              Guardians of Dharma, Śāstra, and Lived Wisdom
            </p>
            <div className="w-16 h-[1px] bg-accent-bronze/40 mx-auto my-2" />
          </div>

          {/* Clean Interactive Navigation Tabs (Horizontal scroll on mobile, centered flex on sm+) */}
          <div className="flex overflow-x-auto snap-x scrollbar-none justify-start sm:justify-center items-center gap-2.5 sm:gap-4 max-w-4xl mx-auto px-4 sm:px-0 py-1 -mx-6 sm:mx-auto">
            {MENTORS.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-none snap-start px-4 sm:px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-[0.15em] font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-accent-bronze text-white shadow-md ring-1 ring-accent-bronze'
                    : 'bg-white/90 text-text-stone-grey border border-black/10 hover:border-accent-bronze/50 hover:bg-white'
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
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-accent-bronze/20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-5xl mx-auto relative overflow-hidden"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-bronze/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-bronze/30" />

              {/* Left Portrait with Custom Object Position */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E1C1A] max-w-[280px] sm:max-w-[300px] w-full group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={MENTORS[activeTab].image}
                      alt={MENTORS[activeTab].name}
                      className={`w-full h-full object-cover ${MENTORS[activeTab].objectPos} transform group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]`}
                    />
                  </div>
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-accent-bronze font-sans text-[10px] uppercase tracking-widest font-bold rounded-md shadow-sm border border-accent-bronze/20">
                      {MENTORS[activeTab].role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Bio & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-bold block">
                    {MENTORS[activeTab].role}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#211F1D] leading-tight">
                    {MENTORS[activeTab].name}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F1] border-l-2 border-accent-bronze">
                  <p className="font-serif italic text-base text-accent-bronze leading-relaxed">
                    "{MENTORS[activeTab].quote}"
                  </p>
                </div>

                <p className="font-sans text-base text-text-stone-grey leading-relaxed font-light">
                  {MENTORS[activeTab].bio}
                </p>

                <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-sans text-xs text-[#757069] italic">
                    {MENTORS[activeTab].tagline}
                  </span>
                  <Link
                    to="/mentors"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent-bronze text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#211F1D] transition-colors shadow-md"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default Mentors;
