import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrassDiyaIcon, LotusDivider } from './LotusOrnament';
import Section from './Section';
import { HeadingLG, BodyLG, Caption } from './Typography';

const CURATED_MEDIA = [
  // VISUAL HIGHLIGHTS
  {
    id: 'vis-1',
    type: 'visual',
    category: 'Culmination Assembly',
    title: 'Culmination Sabhā of the Nāma • Rūpa • Nāda • Bindu Immersion',
    subtitle: 'Group Assembly with Dignitaries & Participants',
    image: '/assets/images/Group photo of performers with dignitaries during the culmination sabha.jpg',
    date: '12 July 2026 · Shanmukhananda, Mumbai',
    location: 'Shanmukhananda, Mumbai',
    desc: 'Justice Somashekhar Sundaresan, Bombay High Court; Padma Shri K. Kalyanasundaram; Justice K. R. Shriram; Dr. Padmaja Suresh; and Rohit Viswanath, with distinguished practitioners and participants of the Immersion.',
    tag: 'Featured Visual'
  },
  {
    id: 'vis-2',
    type: 'visual',
    category: 'Residential Immersion',
    title: 'Day 1 of the Nāma • Rūpa • Nāda • Bindu Immersion',
    subtitle: 'Shared Gathering of Practice & Inquiry',
    image: '/assets/images/Participants in the Nama Rupa Nada Bindu immersion.jpg',
    date: 'July 11, 2026 · Navi Mumbai',
    location: 'Navi Mumbai',
    desc: 'Participants and faculty in a shared gathering of practice and inquiry.',
    tag: 'Featured Visual'
  },
  {
    id: 'vis-3',
    type: 'visual',
    category: 'Sacred Offerings',
    title: 'Nāṭya Seva & Disciples of Lineage',
    subtitle: 'Living Transmission in Motion',
    image: '/assets/images/sishyas_natya_seva_thumb.webp',
    date: '23 November 2025',
    location: 'Navi Mumbai',
    desc: 'Sacred dance performance embodying Mārga discipline and aesthetic devotion during the inaugural consecration.',
    tag: 'Featured Visual'
  },

  // FEATURED VIDEOS
  {
    id: 'vid-1',
    type: 'video',
    category: 'Video Recording',
    title: 'Nāma • Rūpa • Nāda • Bindu — Day 1 Session',
    subtitle: 'Immersion Proceedings & Somatic Inquiry',
    youtubeId: '2D6bqFiehA8',
    embedUrl: 'https://www.youtube.com/embed/2D6bqFiehA8',
    date: 'Immersion Archive',
    location: 'Recorded Live',
    desc: 'Full video recording of Day 1 proceedings exploring sound, form, and Dhārmic somatic sādhanā.',
    tag: 'YouTube Recording'
  },
  {
    id: 'vid-2',
    type: 'video',
    category: 'Video Recording',
    title: 'Nāma • Rūpa • Nāda • Bindu — Day 2 Session',
    subtitle: 'Immersion Culmination & Saṃvāda',
    youtubeId: 'JMuPaOkrAjk',
    embedUrl: 'https://www.youtube.com/embed/JMuPaOkrAjk',
    date: 'Immersion Archive',
    location: 'Recorded Live',
    desc: 'Day 2 intensive sessions on aesthetic resonance, textual inquiry, and living practice.',
    tag: 'YouTube Recording'
  },

  // PRESS & DOCUMENTATION
  {
    id: 'press-1',
    type: 'press',
    category: 'Institutional Release',
    title: 'Consecration of the Vision Statement',
    subtitle: 'Solemn Declaration of Purpose',
    image: '/assets/images/vision_statement_thumb.webp',
    date: '23 November 2025',
    location: 'Navi Mumbai',
    desc: 'Official release and consecration of the Gurukulam Vision Statement, establishing the axis of Śāstra, Sādhanā, and Saṃvāda.',
    tag: 'Press Release'
  },
  {
    id: 'press-2',
    type: 'press',
    category: 'Publication Highlight',
    title: 'Release of Inaugural Vision Brochure',
    subtitle: 'Pedagogical & Research Roadmap',
    image: '/assets/images/brochure_release_thumb.webp',
    date: '23 November 2025',
    location: 'Navi Mumbai',
    desc: 'Release of the comprehensive brochure detailing the institutional framework for civilisational statecraft and aesthetic knowledge systems.',
    tag: 'Documentation'
  }
];

export const GlimpsesAndMedia = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems = CURATED_MEDIA.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, 4);

  return (
    <section className="w-full bg-[#FAF6F0] py-12 md:py-16 relative border-t border-[#9E743B]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] space-y-8 sm:space-y-12">
        
        {/* SECTION INTRO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#9E743B]/20 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <BrassDiyaIcon className="w-5 h-5 text-[#9E743B]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9E743B] font-bold">
                CURATED ARCHIVE
              </span>
            </div>
            <HeadingLG className="text-[#6B1D1E]">
              Glimpses & Media
            </HeadingLG>
            <p className="font-serif italic text-base sm:text-lg text-[#7A5428]">
              A curated visual and media archive documenting the Gurukulam's consecration, research immersions, video recordings, and press highlights.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'visual', label: 'Visuals' },
              { id: 'video', label: 'Videos' },
              { id: 'press', label: 'Press & Docs' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsExpanded(false);
                }}
                className={`px-3 py-2 rounded-lg font-sans text-[10px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center text-center cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#6B1D1E] text-white shadow-sm'
                    : 'bg-[#FAF6F0] text-[#4A423B] border border-[#9E743B]/25 hover:border-[#6B1D1E] hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CURATED GRID */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-8 pb-4 md:pb-0 items-stretch">
          {visibleItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#9E743B]/20 flex flex-col justify-between group hover:shadow-xl hover:border-[#6B1D1E]/40 transition-all duration-500 flex-none w-[280px] xs:w-[310px] md:w-auto snap-start"
            >
              {/* Media Preview Container */}
              {item.type === 'video' ? (
                <div className="relative aspect-video w-full bg-[#1E1C1A] overflow-hidden border-b border-[#9E743B]/20">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div 
                  onClick={() => setLightboxItem(item)}
                  className="relative h-48 xs:h-52 sm:h-56 md:h-60 lg:h-64 w-full bg-[#1E1C1A] overflow-hidden border-b border-[#9E743B]/20 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 text-[#6B1D1E] font-sans text-[10px] uppercase tracking-widest font-bold rounded-full shadow-xs border border-[#9E743B]/30">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-[#6B1D1E] text-white font-sans text-[10px] uppercase tracking-widest font-semibold rounded-md shadow-md">
                      Enlarge Visual ↗
                    </span>
                  </div>
                </div>
              )}

              {/* Text Card Body */}
              <div className="p-4 xs:p-5 sm:p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2 border-b border-[#9E743B]/10 pb-1.5">
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#9E743B] font-bold">
                      {item.category}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#757069]">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-base xs:text-lg sm:text-xl text-[#6B1D1E] font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#59524A] font-light leading-relaxed pt-0.5 line-clamp-2 sm:line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW MORE CAPABILITY */}
        {filteredItems.length > 4 && (
          <div className="text-center pt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#9E743B] text-[#6B1D1E] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#6B1D1E] hover:text-white transition-all shadow-sm"
            >
              {isExpanded ? 'Show Less Highlights ↑' : 'View More Highlights ↓'}
            </button>
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL FOR VISUALS */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#1E1C1A] text-[#F3EEE6] rounded-2xl overflow-hidden max-w-4xl w-full border border-white/10 shadow-2xl space-y-0"
            >
              <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-[#1E1C1A]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#9E743B] font-semibold block">
                      {lightboxItem.category} • {lightboxItem.location}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white">
                      {lightboxItem.title}
                    </h3>
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#E0D8CE]/70 border border-white/10 px-3 py-1 rounded-full">
                    {lightboxItem.date}
                  </span>
                </div>

                <p className="font-sans text-sm text-[#E0D8CE]/90 leading-relaxed font-light pt-1">
                  {lightboxItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GlimpsesAndMedia;
