import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/temple-corridor-hero.jpg';

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
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#1F1F1D]">
      {/* Background Image with Scale Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* 68% Dark Overlay */}
      <div className="absolute inset-0 bg-black/68" />
      
      {/* Soft Radial Gradient behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] pointer-events-none" />

      {/* Subtle Vignette on edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)] pointer-events-none" />

      {/* Spacer to clear the fixed navigation bar (96px height) */}
      <div className="h-[96px] w-full shrink-0" />

      {/* Content Container - Flexbox centering in the remaining viewport space */}
      <div className="flex-grow flex items-center justify-center pb-[4vh] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[800px] w-full px-6 text-center text-[#FAF8F5] flex flex-col items-center justify-center"
        >
          {/* Small Editorial Label with increased opacity - 20px spacing underneath */}
          <motion.span
            variants={itemVariants}
            className="font-sans text-[12px] md:text-[13px] uppercase tracking-[0.3em] text-[#8B0000] font-bold opacity-90 mb-[20px]"
          >
            Śāstra • Sādhanā • Saṃvāda
          </motion.span>

          {/* Major Serifed Headings */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h1 
              className="font-serif text-[64px] xs:text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-normal leading-none tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#8B0000] to-[#590000] pb-2"
              style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.8))' }}
            >
              नाट्यशास्त्र
            </h1>
            {/* Subtitle - 12px spacing from heading */}
            <p 
              className="font-serif text-[32px] xs:text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium text-[#8B0000] tracking-[0.2em] mt-[8px]"
              style={{ textShadow: '0 6px 20px rgba(0,0,0,0.8)' }}
            >
              गुरुकुलम्
            </p>
          </motion.div>


          {/* Two Elegant Outline Buttons - 40px spacing from description, subtle rounding and compact width */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-[40px] w-full"
          >
            <Link
              to="/about"
              className="w-56 py-3.5 border border-[#8B0000]/80 text-[#8B0000] font-sans text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-[#8B0000] hover:text-white transition-all duration-300 text-center bg-transparent rounded-[6px]"
            >
              Explore Gurukulam
            </Link>
            <Link
              to="/library"
              className="w-56 py-3.5 border border-[#8B0000]/80 text-[#8B0000] font-sans text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-[#8B0000] hover:text-white transition-all duration-300 text-center bg-transparent rounded-[6px]"
            >
              Publications
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
