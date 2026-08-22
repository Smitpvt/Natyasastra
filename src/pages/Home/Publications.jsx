import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PUBLICATIONS } from '../../data/publications';
import { BrassDiyaIcon } from '../../components/LotusOrnament';
import { formatSanskrit } from '../../utils/text';
import { HeadingLG } from '../../components/Typography';

// Select featured papers for the homepage
const FEATURED_SERIES = ['DTHF Papers', 'Aesthetic Knowledge Systems', 'Rasa Reflection Series'];
const RECENT_PUBLICATIONS = PUBLICATIONS.map(pub => ({
  ...pub,
  link: '/library'
}));

export const Publications = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Preload homepage publication covers on mount for instant display
  useEffect(() => {
    RECENT_PUBLICATIONS.slice(0, 6).forEach((pub) => {
      if (pub.cover) {
        const img = new Image();
        img.src = pub.cover;
      }
    });
  }, []);

  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      if (!containerRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      
      if (scrollWidth <= clientWidth + 10) return;

      const width = window.innerWidth;
      const cardWidth = width < 480 ? 160 : width < 640 ? 200 : clientWidth * 0.25;
      const gap = 24;
      const scrollDist = cardWidth + gap;

      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: scrollDist, behavior: 'smooth' });
      }
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only drag with left click
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setHasDragged(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    if (Math.abs(x - startX) > 5) {
      setHasDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftDirection = () => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    containerRef.current.scrollBy({ left: -clientWidth * 0.75, behavior: 'smooth' });
  };

  const scrollRightDirection = () => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    containerRef.current.scrollBy({ left: clientWidth * 0.75, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F3EEE6] section-medium border-t border-[#E0D8CE]/40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#9E743B]/20 pb-6 mb-4 sm:mb-6 md:mb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <BrassDiyaIcon className="w-5 h-5 text-[#9E743B]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9E743B] font-bold">
                KNOWLEDGE SYSTEMS
              </span>
            </div>
            <HeadingLG className="text-[#6B1D1E] tracking-tight">
              Our Publications
            </HeadingLG>
            <p className="font-serif italic text-base text-[#7A5428]">
              A curated collection of foundational texts, research journals, and commentarial works.
            </p>
          </div>
          <div className="flex items-end shrink-0 pt-2 md:pt-0 w-fit">
            <Link
              to="/library"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#9E743B]/30 text-[#6B1D1E] font-sans text-[10px] sm:text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#6B1D1E] hover:text-white transition-all duration-300 shadow-xs w-fit"
            >
              View Library Catalog →
            </Link>
          </div>
        </div>

        {/* Carousel Container Wrapper */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          className="relative group/carousel w-full"
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={scrollLeftDirection}
            className="absolute left-2 lg:left-6 top-[30%] -translate-y-1/2 w-10 h-10 rounded-full border border-[#9E743B]/20 bg-[#FAF6F0]/90 backdrop-blur-xs flex items-center justify-center text-[#6B1D1E] hover:bg-[#6B1D1E] hover:text-white transition-all duration-300 z-20 cursor-pointer shadow-md opacity-0 group-hover/carousel:opacity-100 hidden sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Horizontal Swiper */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-none snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing select-none items-stretch"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {RECENT_PUBLICATIONS.map((pub, index) => (
              <a
                href={pub.file}
                target="_blank"
                rel="noopener noreferrer"
                key={pub.title}
                title={`Open PDF for ${pub.title}`}
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                  }
                }}
                style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 320px' }}
                className="snap-start flex-none w-[82vw] max-w-[290px] xs:w-[310px] sm:w-[370px] md:w-[400px] lg:w-[calc(33.333%-16px)] group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index < 4 ? index * 0.05 : 0.15, ease: 'easeOut' }}
                  className="w-full flex flex-col h-full bg-white hover:bg-white p-3.5 xs:p-4 sm:p-5 lg:p-6 rounded-2xl border border-[#9E743B]/20 hover:border-[#9E743B]/45 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Publication Cover Image Stage */}
                  {pub.cover ? (
                    <div className="w-full aspect-[2/3] max-h-[210px] xs:max-h-[230px] sm:max-h-none shrink-0 shadow-md relative rounded-xl overflow-hidden border border-black/10 transition-transform duration-500 group-hover:-translate-y-1 bg-[#FAF8F5] flex items-center justify-center p-2 cursor-pointer">
                      <img
                        src={pub.cover}
                        alt={pub.title}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        loading={index < 4 ? "eager" : "lazy"}
                        fetchpriority={index < 4 ? "high" : "low"}
                        decoding="async"
                      />
                      {/* Subtle Book Spine overlay effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none" />
                      
                      {/* Hover overlay hint */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="bg-white/95 text-[#6B1D1E] font-sans text-xs uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md font-bold">
                          Open PDF ↗
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full aspect-[2/3] max-h-[210px] xs:max-h-[230px] sm:max-h-none shrink-0 shadow-md flex flex-col p-4 sm:p-6 relative border rounded-xl transition-transform duration-500 group-hover:-translate-y-1 ${pub.theme}`}>
                      <div className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-4 bg-black/10 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]"></div>
                      <div className="pl-3 sm:pl-4 flex flex-col h-full justify-between">
                        <div className="space-y-1">
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-80 block font-sans">
                            {formatSanskrit(pub.series)}
                          </span>
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider opacity-90 block font-bold font-sans">
                            {pub.type}
                          </span>
                        </div>
                        <span className="font-serif text-xs sm:text-lg leading-snug block mt-2 sm:mt-4 pb-2 line-clamp-3 sm:line-clamp-6 font-semibold">
                          {formatSanskrit(pub.title)}
                        </span>
                        <div className="mt-auto text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-80 border-t border-current/20 pt-2 font-medium">
                          Nāṭyaśāstra Gurukulam
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Publication Details below image */}
                  <div className="pt-2.5 sm:pt-4 flex flex-col flex-grow space-y-1">
                    <span className="font-sans text-[9px] sm:text-xs uppercase tracking-widest text-[#9E743B] font-semibold block shrink-0">
                      {formatSanskrit(pub.series)}
                    </span>
                    <h3 className="font-serif text-xs xs:text-sm sm:text-xl leading-snug font-semibold text-[#211F1D] group-hover:text-[#6B1D1E] transition-colors line-clamp-2 min-h-[34px] sm:min-h-[52px] shrink-0">
                      {formatSanskrit(pub.title)}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-sm text-[#757069] line-clamp-2 font-light leading-relaxed">
                      {formatSanskrit(pub.desc)}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={scrollRightDirection}
            className="absolute right-2 lg:right-6 top-[30%] -translate-y-1/2 w-10 h-10 rounded-full border border-[#9E743B]/20 bg-[#FAF6F0]/90 backdrop-blur-xs flex items-center justify-center text-[#6B1D1E] hover:bg-[#6B1D1E] hover:text-white transition-all duration-300 z-20 cursor-pointer shadow-md opacity-0 group-hover/carousel:opacity-100 hidden sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 text-[11px] text-[#757069] font-sans pt-1">
          <span>Swipe horizontally to explore more publications</span>
          <span>→</span>
        </div>

      </div>
    </section>
  );
};

export default Publications;
