import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrassDiyaIcon } from '../../components/LotusOrnament';
import AutoScrollContainer from '../../components/AutoScrollContainer';

const GALLERY_HIGHLIGHTS = [
  {
    title: 'Consecration of the Vision Statement',
    subtitle: <span><em className="italic">Pratiṣṭhā Samāroham</em> • Nov 23, 2025</span>,
    image: '/assets/images/vision_statement_thumb.webp',
    desc: <span>The sacred consecration of the <em className="italic">Gurukulam</em> Vision Statement, establishing the <em className="italic">Dhārmic</em> axis of <em className="italic">Śāstra</em>, <em className="italic">Sādhanā</em>, and <em className="italic">Saṃvāda</em>.</span>
  },
  {
    title: 'Mukhyatithi Prof. K. Ramasubramanian',
    subtitle: 'Distinguished Guest & Scholars',
    image: '/assets/images/prof_ramasubramanian_thumb.webp',
    desc: <span>Revered scholar Prof. K. Ramasubramanian with <em className="italic">Ācāryā</em> Dr. Padmaja Suresh during the auspicious inauguration.</span>
  },
  {
    title: 'Release of the Gurukulam Brochure',
    subtitle: 'Publication Launch',
    image: '/assets/images/brochure_release_thumb.webp',
    desc: 'Formal release of the institutional brochure outlining the pedagogical roadmap and aesthetic vision.'
  },
  {
    title: <span><em className="italic">Nāṭya Sevā</em> & Dance Offering</span>,
    subtitle: <span>Somatic <em className="italic">Sādhanā</em> in Practice</span>,
    image: '/assets/images/sishyas_natya_seva_thumb.webp',
    desc: <span>Sacred dance offerings by disciples of Smt. Charanya Gurusathya during the <em className="italic">Pratiṣṭhā Samāroham</em>.</span>
  }
];

export const PratishthaSection = () => {
  return (
    <section className="w-full bg-[#F3EEE6] py-20 md:py-28 relative border-t border-[#9E743B]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#9E743B]/20 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <BrassDiyaIcon className="w-5 h-5 text-[#9E743B]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9E743B] font-bold">
                HISTORIC CONSECRATION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#6B1D1E] font-light">
              <em className="italic">Pratiṣṭhā Samāroham</em> Highlights
            </h2>
            <p className="font-serif italic text-base text-[#7A5428]">
              Moments from the sacred consecration ceremony on November 23, 2025.
            </p>
          </div>

          <div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#9E743B]/40 text-[#6B1D1E] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#6B1D1E] hover:text-white transition-all shadow-sm"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>

        {/* 4 Photo Grid with Mobile Auto-Scrolling Slider */}
        <AutoScrollContainer 
          interval={3200}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 pb-4 md:pb-0"
        >
          {GALLERY_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-none w-[82vw] xs:w-[75vw] sm:w-[48vw] md:w-auto snap-start group flex flex-col h-full bg-[#FAF6F0] rounded-xl border border-[#9E743B]/25 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 md:hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b border-[#9E743B]/20 bg-[#1E1C1A]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                <div className="space-y-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#9E743B] font-bold block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg text-[#6B1D1E] font-semibold leading-snug group-hover:text-[#9E743B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#59524A] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AutoScrollContainer>

      </div>
    </section>
  );
};

export default PratishthaSection;
