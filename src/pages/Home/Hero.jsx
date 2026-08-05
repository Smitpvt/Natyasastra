import React from 'react';
import { motion } from 'framer-motion';
import { EditorialLink } from '../../components/Typography';
import apsaraImage from '../../images/apasara-Photoroom.png';

export const Hero = () => {
  return (
    <section className="w-full bg-[#FCFAF7] relative overflow-hidden select-none min-h-screen lg:min-h-[calc(100vh-88px)] pt-[88px]">

      {/* CSS Grid Container (560px Left Column + 1fr Right, Max-Width 1440px, Padding 80px) */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px] min-h-[calc(100vh-88px)] relative grid grid-cols-1 lg:grid-cols-[560px_1fr] items-center">

        {/* Left Content Column (Fixed 560px Width, Vertically & Optically Centered) */}
        <div className="z-20 flex flex-col justify-center max-w-[560px] pt-8 lg:pt-[48px] pb-12">

          {/* 1. Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="font-sans text-[12px] uppercase tracking-[0.25em] text-[#8A6A45] font-medium block mb-5"
          >
            NĀṬYAŚĀSTRA GURUKULAM
          </motion.span>

          {/* 2. Heading (560px Max-Width, 0.94 Line Height, Impactful & Concise) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="font-serif text-[40px] sm:text-[48px] lg:text-[52px] xl:text-[56px] font-light leading-[0.94] text-[#1F1F1D] tracking-normal max-w-[560px] mb-8"
          >
            A Gurukulam for<br />
            Śāstra,<br />
            Sādhanā,<br />
            and Civilisational<br />
            Renewal.
          </motion.h1>

          {/* 3. Concise Editorial Description (21 Words, 480px Max-Width) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.18, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="font-sans text-[17px] md:text-[18px] font-light text-[#6B6863] leading-[1.75] max-w-[480px] mb-8"
          >
            A contemporary gurukulam rooted in India's timeless knowledge traditions, bringing together study, practice, and meaningful learning.
          </motion.p>

          {/* 4. Concise CTA Buttons (Single Baseline, 32px Gap) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.24, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-wrap items-center gap-8"
          >
            <a
              href="/about"
              className="px-8 py-3.5 border border-[#8A6A45] text-[#8A6A45] font-sans text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-[#8A6A45] hover:text-[#FAF8F5] transition-all duration-500 ease-out text-center inline-block"
            >
              EXPLORE
            </a>

            <EditorialLink to="/programmes" className="!text-[12px] !tracking-[0.2em]">
              OUR PROGRAMMES
            </EditorialLink>
          </motion.div>
        </div>

        {/* Independent Sculpture Overlay - Centered Properly */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute right-0 lg:right-6 xl:right-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden lg:block"
        >
          <img
            src={apsaraImage}
            alt="11th-Century Apsara Dancing Sculpture"
            className="
              h-[640px]
              xl:h-[720px]
              2xl:h-[780px]
              max-h-[82vh]
              w-auto
              object-contain
              object-center
              select-none
              drop-shadow-[0_20px_40px_rgba(138,106,69,0.06)]
            "
          />
        </motion.div>

        {/* Mobile / Tablet Responsive Statue Fallback */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="lg:hidden w-full flex justify-end items-end z-10 pointer-events-none mt-4"
        >
          <img
            src={apsaraImage}
            alt="11th-Century Apsara Dancing Sculpture"
            className="max-h-[420px] w-auto object-contain object-bottom-right filter contrast-[1.02] brightness-[0.98]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;









