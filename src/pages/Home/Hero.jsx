import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroBg from '../../assets/temple-corridor-hero.webp';
import { LotusDivider } from '../../components/LotusOrnament';

export const Hero = () => {
  // Fade-up variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#1A1817]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* 68% Dark Overlay with Warm Amber Tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Soft Radial Glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,116,59,0.15)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] pointer-events-none" />

      {/* Subtle Vignette on edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] pointer-events-none" />

      {/* Spacer to clear the fixed navigation bar (96px height) */}
      <div className="h-[96px] w-full shrink-0" />

      {/* Content Container - Flexbox centering in the remaining viewport space */}
      <div className="flex-grow flex items-center justify-center pb-[80px] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[900px] w-full px-3 xs:px-4 sm:px-6 text-center text-[#FAF8F5] flex flex-col items-center justify-center lg:-translate-x-[2%] xl:-translate-x-[3%] transition-transform duration-500"
        >
          {/* Devanagari Invocation */}
          <motion.div variants={itemVariants} className="space-y-1.5 mb-[14px] flex flex-col items-center w-full">
            <span className="font-serif text-xs xs:text-sm sm:text-base text-[#D4AF37] tracking-[0.15em] sm:tracking-[0.2em] font-medium px-1" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
              नाट्यशास्त्रप्रवर्तकं भरतमुनिं वन्दे।
            </span>
            <span className="font-sans text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C4B39C] font-semibold opacity-95 block px-1">
              Custodians of Rasa, Rhythm & <em className="italic">Dhārmic</em> Responsibility
            </span>
          </motion.div>

          {/* Major Serifed Headings - Gold Foil & Ivory Shimmer */}
          <motion.div variants={itemVariants} className="flex flex-col items-center w-full">
            <h1 
              className="font-serif text-[38px] xs:text-[48px] sm:text-[68px] md:text-[86px] lg:text-[98px] font-normal leading-none tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#FFF5E0] via-[#D4AF37] to-[#9E743B] pb-2"
              style={{ filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.75))' }}
            >
              नाट्यशास्त्र
            </h1>
            
            {/* Subtitle */}
            <p 
              className="font-serif text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#EADBB2] tracking-[0.25em] sm:tracking-[0.3em] mt-[6px] xs:mt-[8px]"
              style={{ textShadow: '0 4px 14px rgba(0,0,0,0.8)' }}
            >
              गुरुकुलम्
            </p>

            <LotusDivider className="my-2.5 sm:my-3" />

            <p className="font-serif italic text-xs xs:text-sm sm:text-base md:text-lg text-[#E0D8CE] tracking-wide font-light max-w-full xs:max-w-md sm:max-w-xl leading-[1.7] sm:leading-[1.8] text-center mx-auto px-2">
              A <em className="italic">Dhārmic</em> Stream For The Renewal Of Public Life Through Aesthetic Leadership
            </p>
          </motion.div>

          {/* Two Elegant Gold & Ivory CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 mt-[24px] sm:mt-[36px] w-full px-2 xs:px-4"
          >
            <Link
              to="/about"
              className="w-full max-w-[300px] xs:max-w-[320px] sm:w-56 py-3.5 border-2 border-[#D4AF37]/60 text-[#F5F0E6] font-sans text-[11px] uppercase tracking-[0.22em] font-semibold bg-[#805335]/30 backdrop-blur-xs hover:bg-[#D4AF37] hover:text-[#1A1817] hover:border-[#D4AF37] transition-all duration-300 text-center rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Explore <em className="italic">Gurukulam</em>
            </Link>
            <Link
              to="/library"
              className="w-full max-w-[300px] xs:max-w-[320px] sm:w-56 py-3.5 border border-[#C4B39C]/40 text-[#C4B39C] font-sans text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 text-center bg-transparent rounded-lg backdrop-blur-xs"
            >
              Publications
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Pinned Visible Animated Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group select-none"
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] opacity-90 group-hover:opacity-100 transition-opacity font-semibold pl-[0.3em]">
          Scroll to Discover
        </span>
        <div className="mt-1 p-1 rounded-full border border-[#D4AF37]/40 group-hover:border-[#D4AF37] bg-black/40 backdrop-blur-xs transition-all animate-bounce">
          <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;

