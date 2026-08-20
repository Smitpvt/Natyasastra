import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PUBLICATIONS } from '../../data/publications';
import { formatSanskrit } from '../../utils/text';

// Select featured papers for the homepage
const FEATURED_SERIES = ['DTHF Papers', 'Aesthetic Knowledge Systems', 'Rasa Reflection Series'];
const RECENT_PUBLICATIONS = PUBLICATIONS
  .filter(pub => FEATURED_SERIES.includes(pub.series))
  .map(pub => ({
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

  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      if (!containerRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      
      if (scrollWidth <= clientWidth + 10) return;

      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: clientWidth * 0.5, behavior: 'smooth' });
      }
    }, 3500);

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
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-8 md:gap-4">
          <div className="md:w-1/3">
            <h2 className="font-serif text-[42px] sm:text-[48px] md:text-[56px] leading-[1.05] font-normal text-[#211F1D]">
              Our <br className="hidden md:block" />
              Publications
            </h2>
          </div>
          <div className="md:w-1/3 flex items-start md:pt-4">
            <p className="font-sans text-[14px] md:text-[15px] text-[#757069] leading-[1.6] max-w-[280px]">
              A curated collection of foundational texts, research journals, and articles.
            </p>
          </div>
          <div className="md:w-1/3 flex items-start justify-start md:justify-end md:pt-4">
            <Link
              to="/library"
              className="font-sans text-[13px] uppercase tracking-widest text-[#757069] hover:text-[#211F1D] transition-colors duration-300"
            >
              View all publications →
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
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-none snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing select-none"
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
                className="snap-start flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="w-full flex flex-col h-full"
                >
                  {/* Publication Cover Image */}
                  {pub.cover ? (
                    <div className="w-full aspect-[2/3] shrink-0 shadow-md relative rounded-sm overflow-hidden border border-black/10 transition-transform duration-500 group-hover:-translate-y-2 bg-white flex items-center justify-center cursor-pointer">
                      <img
                        src={pub.cover}
                        alt={pub.title}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                      />
                      {/* Subtle Book Spine overlay effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none" />
                      
                      {/* Hover overlay hint */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="bg-white/90 text-text-charcoal font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded shadow-sm font-semibold">
                          Open PDF ↗
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full aspect-[2/3] shrink-0 shadow-md flex flex-col p-6 relative border transition-transform duration-500 group-hover:-translate-y-2 ${pub.theme}`}>
                      <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-black/10 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]"></div>
                      <div className="pl-3 sm:pl-4 flex flex-col h-full justify-between">
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase tracking-widest opacity-80 block font-sans">
                            {formatSanskrit(pub.series)}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider opacity-90 block font-bold font-sans">
                            {pub.type}
                          </span>
                        </div>
                        <span className="font-serif text-sm sm:text-base leading-snug block mt-4 pb-2 line-clamp-6">
                          {formatSanskrit(pub.title)}
                        </span>
                        <div className="mt-auto text-[9px] uppercase tracking-[0.2em] opacity-80 border-t border-current/20 pt-3 font-medium">
                          Nāṭyaśāstra Gurukulam
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Publication Details below image */}
                  <div className="pt-6 flex flex-col flex-grow">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-semibold block mb-2 shrink-0">
                      {formatSanskrit(pub.series)}
                    </span>
                    <h3 className="font-serif text-[18px] leading-snug text-[#211F1D] group-hover:text-accent-bronze transition-colors line-clamp-2 min-h-[48px] shrink-0">
                      {formatSanskrit(pub.title)}
                    </h3>
                    <p className="font-sans text-[13px] text-[#757069] mt-3 line-clamp-3 font-light leading-relaxed">
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

      </div>
    </section>
  );
};

export default Publications;
