import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RECENT_PUBLICATIONS = [
  {
    series: 'Civilisational Statecraft',
    type: 'Working Paper I',
    title: 'The Dharma of Middle Powers',
    desc: 'As the international system becomes increasingly multipolar, this paper explores how restraint, proportion...',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]',
    link: '/library'
  },
  {
    series: 'Civilisational Governance',
    type: 'CG-01',
    title: 'The Dharma Doctrine of Disciplined Equilibrium',
    desc: 'Introduces the foundational governance doctrine underpinning the Gurukulam\'s research programme...',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]',
    link: '/library'
  },
  {
    series: 'Aesthetic Knowledge',
    type: 'Working Paper I',
    title: 'The Return of Nāṭya',
    desc: 'Examines Nāṭya as a civilisational knowledge system and argues that the challenge before our time...',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]',
    link: '/library'
  },
  {
    series: 'Rasa Reflection',
    type: 'Reflection I',
    title: 'From Entitlement to Embodiment',
    desc: 'Reflects on the movement from consumption to cultivation, exploring how Nāṭya reshapes desire...',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]',
    link: '/library'
  }
];

export const Publications = () => {
  return (
    <section className="w-full bg-[#F3EEE6] section-medium border-t border-[#E0D8CE]/40">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-8 md:gap-4">
          <div className="md:w-1/3">
            <h2 className="font-serif text-[42px] sm:text-[48px] md:text-[56px] leading-[1.05] font-normal text-[#211F1D]">
              Our <br className="hidden md:block" />
              Publications
            </h2>
          </div>
          <div className="md:w-1/3 flex items-start md:pt-4">
            <p className="font-sans text-[14px] md:text-[15px] text-[#757069] leading-[1.6] max-w-[280px]">
              A curated collection of foundational texts, research journals, and somatic reconstruction manuals.
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

        {/* Publications Carousel Grid */}
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-8 no-scrollbar snap-x">
          {RECENT_PUBLICATIONS.map((pub, index) => (
            <Link to={pub.link} key={pub.title} className="snap-start shrink-0 group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-[260px] md:w-[280px] flex flex-col h-full"
              >
                {/* Elegant CSS Book cover visual */}
                <div className={`w-full aspect-[2/3] shrink-0 shadow-md flex flex-col p-6 relative border transition-transform duration-500 group-hover:-translate-y-2 ${pub.theme}`}>
                  {/* Binding Detail */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-black/10 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]"></div>
                  
                  <div className="pl-3 sm:pl-4 flex flex-col h-full justify-between">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest opacity-80 block font-sans">
                        {pub.series}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider opacity-90 block font-bold font-sans">
                        {pub.type}
                      </span>
                    </div>
                    
                    <span className="font-serif text-sm sm:text-base leading-snug block mt-4 pb-2 line-clamp-6">
                      {pub.title}
                    </span>
                    
                    <div className="mt-auto text-[9px] uppercase tracking-[0.2em] opacity-80 border-t border-current/20 pt-3 font-medium">
                      Nāṭyaśāstra Gurukulam
                    </div>
                  </div>
                </div>

                {/* Publication Details below image */}
                <div className="pt-6 flex flex-col flex-grow">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8B0000] font-semibold block mb-2 shrink-0">
                    {pub.series}
                  </span>
                  <h3 className="font-serif text-[18px] leading-snug text-[#211F1D] group-hover:text-[#8B0000] transition-colors line-clamp-2 min-h-[48px] shrink-0">
                    {pub.title}
                  </h3>
                  <p className="font-sans text-[13px] text-[#757069] mt-3 line-clamp-3 font-light leading-relaxed">
                    {pub.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;
