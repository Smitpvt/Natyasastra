import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { HeadingLG, BodyLG, Caption } from '../components/Typography';
import { useSEO } from '../hooks/useSEO';

const GALLERY_ITEMS = [
  // --- PRATIṢṬHĀ SAMĀROHAM (23 NOVEMBER 2025) ---
  {
    id: 1,
    src: '/assets/images/dance_offering.webp',
    srcThumb: '/assets/images/dance_offering_thumb.webp',
    alt: 'Nāṭya Seva Dance Offering during Pratiṣṭhā Samāroham',
    category: 'Pratiṣṭhā Samāroham',
    title: 'Nāṭya Seva Sacred Performance',
    desc: 'Sishyas of Smt. Charanya Gurusathya offering sacred performance during the Pratiṣṭhā Samāroham, embodying the Mārga through classical discipline and aesthetic devotion.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-top'
  },
  {
    id: 2,
    src: '/assets/images/group_pratishtha.webp',
    srcThumb: '/assets/images/group_pratishtha_thumb.webp',
    alt: 'Group Consecration Assembly with Mukhyātithi Prof. K. Ramasubramanian',
    category: 'Pratiṣṭhā Samāroham',
    title: 'Consecration Assembly & Dignitaries',
    desc: 'Group photo of dancers, Smt. Charanya Gurusathya, Dr. Padmaja Suresh, Rohit Viswanath, and the Nāṭyaśāstra Gurukulam team with Mukhyātithi Prof. K. Ramasubramanian.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-[center_15%]'
  },
  {
    id: 3,
    src: '/assets/images/prof_ramasubramanian.webp',
    srcThumb: '/assets/images/prof_ramasubramanian_thumb.webp',
    alt: 'Prof. K. Ramasubramanian with Dr. Padmaja Suresh',
    category: 'Pratiṣṭhā Samāroham',
    title: 'Scholarly Address & Dialogue',
    desc: 'Mukhyātithi Prof. K. Ramasubramanian, distinguished IIT Bombay scholar, in dialogue with Karnataka Kalashri Dr. Padmaja Suresh during the Pratiṣṭhā Samāroham address.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-[center_20%]'
  },
  {
    id: 4,
    src: '/assets/images/sishyas_natya_seva.webp',
    srcThumb: '/assets/images/sishyas_natya_seva_thumb.webp',
    alt: 'Sishyas of Smt. Charanya Gurusathya offering Nāṭya Seva',
    category: 'Pratiṣṭhā Samāroham',
    title: 'Sishyas of the Lineage',
    desc: 'Young practitioners of Smt. Charanya Gurusathya who offered Nāṭya Seva during the consecration, preserving the unbroken oral and physical transmission.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-top'
  },
  {
    id: 5,
    src: '/assets/images/vision_statement.webp',
    srcThumb: '/assets/images/vision_statement_thumb.webp',
    alt: 'The Consecrated Vision Statement of Nāṭyaśāstra Gurukulam',
    category: 'Pratiṣṭhā Samāroham',
    title: 'Consecrated Vision Statement',
    desc: 'The official Vision Statement of Nāṭyaśāstra Gurukulam, solemnly consecrated at Śrī Subrahmaṇya Sevā Samāj on 23 November 2025.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-center'
  },
  {
    id: 6,
    src: '/assets/images/brochure_release.webp',
    srcThumb: '/assets/images/brochure_release_thumb.webp',
    alt: 'Release of the inaugural Gurukulam brochure',
    category: 'Pratiṣṭhā Samāroham',
    title: 'Release of Inaugural Vision Brochure',
    desc: 'Dignitaries and mentors releasing the inaugural vision brochure during the Pratiṣṭhā Samāroham ceremony.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-[center_20%]'
  },

  // --- RESEARCH & HERITAGE ARCHIVES ---
  {
    id: 7,
    src: '/assets/images/yajna.webp',
    srcThumb: '/assets/images/yajna_thumb.webp',
    alt: 'Sacred Consecration Fire Ritual',
    category: 'Research & Lineage',
    title: 'Sacred Yajna & Consecration',
    desc: 'Sacred fire offering invoking Vedic and Āgamic blessings during the solemn consecration of the Gurukulam foundations.',
    date: '23 NOVEMBER 2025',
    location: 'Navi Mumbai',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-center'
  },
  {
    id: 8,
    src: '/assets/images/corridor.webp',
    srcThumb: '/assets/images/corridor_thumb.webp',
    alt: 'Temple Corridor Pillars',
    category: 'Research & Lineage',
    title: 'Brihadīśvara Sabha Corridors',
    desc: 'Photographed during the winter research residency. The structural geometry of the columns directly mirrors the rhythm cycles of the first two chapters of the Nāṭyaśāstra.',
    date: 'RESIDENCY ARCHIVE',
    location: 'Thanjavur',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-center'
  },
  {
    id: 9,
    src: '/assets/images/sthapatya.webp',
    srcThumb: '/assets/images/sthapatya_thumb.webp',
    alt: 'Classical Sculpture & Sacred Geometry',
    category: 'Research & Lineage',
    title: 'Karana Stone Friezes & Somatics',
    desc: 'Detail of classical stone friezes mapping kinetic movement paths and karaṇa transitions in sacred temple architecture.',
    date: 'RESIDENCY ARCHIVE',
    location: 'Chidambaram',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-center'
  },
  {
    id: 10,
    src: '/assets/images/banyan.webp',
    srcThumb: '/assets/images/banyan_thumb.webp',
    alt: 'Traditional Banyan Tree Teaching Circle',
    category: 'Research & Lineage',
    title: 'Sabha Under the Sacred Banyan',
    desc: 'Traditional outdoor assembly where sishyas recite metred verses (chandas) of Sanskrit manuals under guru mentorship.',
    date: 'LINEAGE ARCHIVE',
    location: 'Gurukulam Grounds',
    aspect: 'aspect-[16/11]',
    objectPos: 'object-center'
  }
];

const CATEGORIES = ['All', 'Pratiṣṭhā Samāroham', 'Research & Lineage'];

export const Gallery = () => {
  useSEO({
    title: 'Visual Archives & Photographic Journal',
    description: 'Explore the photographic journal and visual archives documenting the inaugural Pratiṣṭhā Samāroham, somatic research residencies, and living lineage transmission.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      'name': 'Visual Archives & Photographic Journal',
      'description': 'Photographic records of the consecration ceremony and aesthetic archives of the Nāṭyaśāstra Gurukulam.',
      'url': typeof window !== 'undefined' ? window.location.origin + '/gallery' : ''
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen text-[#211F1D] selection:bg-accent-bronze/20 selection:text-[#211F1D]">
      
      {/* HEADER SECTION */}
      <Section spacing="compact" className="pt-12 pb-16 border-b border-accent-bronze/10 bg-[#F8F6F1]">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/20">
            <span className="w-2 h-2 rounded-full bg-accent-bronze animate-pulse" />
            <Caption className="text-accent-bronze tracking-[0.25em] text-[11px]">Photographic Journal</Caption>
          </div>

          <HeadingLG as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight">
            Pratiṣṭhā Samāroham & Visual Archives
          </HeadingLG>

          <div className="w-20 h-[1px] bg-accent-bronze/40" />

          <BodyLG className="text-text-stone-grey font-light leading-relaxed max-w-3xl">
            Visual documentary records of the inaugural Pratiṣṭhā Samāroham (23 November 2025, Navi Mumbai), somatic research residencies, sacred ceremonies, and living lineage transmission.
          </BodyLG>

          {/* Filter Category Tabs */}
          <div className="pt-6 flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent-bronze text-white shadow-md'
                    : 'bg-white text-text-stone-grey border border-black/10 hover:border-accent-bronze/50 hover:text-[#211F1D]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY GRID */}
      <Section className="py-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxImage(item)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl hover:border-accent-bronze/30 transition-all duration-500 cursor-pointer flex flex-col justify-between group"
                >
                  {/* Photo Header */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-[#1E1C1A]">
                    <img
                      src={item.srcThumb}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover ${item.objectPos} opacity-95 group-hover:opacity-100`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-accent-bronze font-sans text-[10px] uppercase tracking-widest font-semibold rounded-md shadow-sm border border-accent-bronze/20">
                        {item.category}
                      </span>
                    </div>

                    {/* Quick View Overlay Tag */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-3 py-1 bg-accent-bronze/90 backdrop-blur-md text-white font-sans text-[10px] uppercase tracking-widest font-semibold rounded shadow-md">
                        View Photo ↗
                      </span>
                    </div>
                  </div>

                  {/* Journal Note Details */}
                  <div className="p-6 sm:p-7 space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline gap-2 border-b border-black/5 pb-2">
                        <h3 className="font-serif text-xl font-normal text-[#211F1D] group-hover:text-accent-bronze transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-text-stone-grey leading-relaxed font-light pt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/5 flex justify-between items-center text-[10px] font-sans uppercase tracking-widest text-[#757069]">
                      <span>{item.location}</span>
                      <span className="text-accent-bronze font-semibold">{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1E1C1A] text-[#F3EEE6] rounded-2xl overflow-hidden max-w-4xl w-full border border-white/10 shadow-2xl space-y-0"
            >
              {/* Lightbox Image */}
              <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Lightbox Details */}
              <div className="p-6 sm:p-8 space-y-3 bg-[#1E1C1A]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
                      {lightboxImage.category} • {lightboxImage.location}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white">
                      {lightboxImage.title}
                    </h3>
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#E0D8CE]/70 border border-white/10 px-3 py-1 rounded-full">
                    {lightboxImage.date}
                  </span>
                </div>

                <p className="font-sans text-sm text-[#E0D8CE]/90 leading-relaxed font-light pt-1">
                  {lightboxImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
