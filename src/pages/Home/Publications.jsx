import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PUBLICATIONS = [
  {
    id: 1,
    title: 'The Reconstruction of Karaṇas: Somatics of Nāṭyaśāstra',
    year: '2024',
    cover: '/assets/images/sculpture.png',
    link: '/library'
  },
  {
    id: 2,
    title: 'Dhvani & Rasa Aesthetics: Metaphysics of Emotion',
    year: '2023',
    cover: '/assets/images/corridor.png',
    link: '/library'
  },
  {
    id: 3,
    title: 'Sthāpatya: Proportions & Geometry of Classical Mandapas',
    year: '2023',
    cover: '/assets/images/sthapatya.png',
    link: '/library'
  },
  {
    id: 4,
    title: 'Vācika: Phonetics and Intonation of Vedic Chanting',
    year: '2022',
    cover: '/assets/images/banyan.png',
    link: '/library'
  }
];

export const Publications = () => {
  return (
    <section className="w-full bg-[#FAF8F5] section-medium border-t border-[#DDD6C8]/40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px]">
        
        {/* Section Header */}
        <div className="flex justify-between items-end border-b border-[#DDD6C8]/60 pb-5">
          <div className="space-y-2">
            <span className="font-sans text-[12px] uppercase tracking-[0.25em] text-[#8A6A45] font-semibold block">
              Academic Archive
            </span>
            <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] font-light text-[#1F1F1D] tracking-normal">
              Our Publications
            </h2>
          </div>
          <Link
            to="/library"
            className="group relative font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-[#8A6A45] hover:text-[#1F1F1D] transition-colors duration-500 pb-1"
          >
            View All
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8A6A45] group-hover:w-full transition-all duration-500 ease-out" />
          </Link>
        </div>

        {/* Publications Shelf/Grid Slider on mobile, Grid on desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 md:gap-8 mt-12 pb-4 md:pb-0 no-scrollbar snap-x">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="snap-start w-[270px] sm:w-[300px] md:w-auto shrink-0 md:shrink md:flex-grow group flex flex-col bg-[#FAF8F5] border border-[#DDD6C8]/40 hover:border-[#8A6A45]/40 hover:-translate-y-1.5 transition-all duration-500 ease-out rounded-lg p-4 shadow-[0_4px_15px_rgba(0,0,0,0.005)]"
            >
              {/* Publication Cover Image (aspect-[3/4]) */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-md bg-[#F4F0EA] mb-5 relative">
                <img
                  src={pub.cover}
                  alt={pub.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[0.98] brightness-[1.02]"
                />
              </div>

              {/* Publication Details */}
              <div className="flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-sans text-[11px] text-[#8A6A45] tracking-widest font-semibold block">
                    Edition {pub.year}
                  </span>
                  <h3 className="font-serif text-[17px] md:text-[19px] font-normal leading-snug text-[#1F1F1D] group-hover:text-[#8A6A45] transition-colors duration-500">
                    {pub.title}
                  </h3>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-[#DDD6C8]/30 mt-auto">
                  <Link
                    to={pub.link}
                    className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1F1F1D] hover:text-[#8A6A45] transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => alert('Download starting...')}
                    className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6A45] hover:text-[#1F1F1D] transition-colors cursor-pointer"
                  >
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;
