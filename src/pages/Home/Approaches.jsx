import React from 'react';
import { motion } from 'framer-motion';

const APPROACHES = {
  featured: {
    title: 'Embodied Reconstruction (Sādhanā)',
    subtitle: 'Physical Reconstruction of the 108 Karaṇas',
    description: 'The physical, daily practice of translating temple sculptures and ancient scripts into kinetic reality. A systematic method to reconstruct the kinetic alphabet of classical Indian aesthetics.',
    image: '/assets/images/corridor.png',
    link: '/approach'
  },
  supporting: [
    {
      title: 'Treatise Philology (Śāstra)',
      subtitle: 'Rigorous Textual Hermeneutics',
      description: 'Engaging with primary palm-leaf manuscripts and treatise commentaries in classical Sanskrit to understand the geometrical foundations.',
      image: '/assets/images/sthapatya.png',
      link: '/approach'
    },
    {
      title: 'Aesthetic Philosophy (Rasa)',
      subtitle: 'Metaphysics of Rasa & Dhvani',
      description: 'Studying the philosophy of sensory transformation, rasa, and aesthetic resonance as documented by Kashmirian philosophers.',
      image: '/assets/images/sculpture.png',
      link: '/approach'
    },
    {
      title: 'Living Orality (Vācika)',
      subtitle: 'Vocal Heritage and Hermeneutics',
      description: 'Preserving and understanding vocal resonance, sanskrit chanting, and metric intonation through traditional oral teaching.',
      image: '/assets/images/banyan.png',
      link: '/approach'
    }
  ]
};

export const Approaches = () => {
  return (
    <section className="w-full bg-[#F3EEE6] section-medium border-t border-[#E0D8CE]/40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px] space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="font-sans text-[12px] uppercase tracking-[0.25em] text-[#8B0000] font-semibold block">
            Pedagogical Systems
          </span>
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] font-light text-[#211F1D] tracking-normal">
            Our Approaches
          </h2>
        </div>

        {/* Asymmetric Cards Composition */}
        <div className="space-y-8">
          
          {/* Featured Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="group relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.01)] border border-[#E0D8CE]/30"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-100 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${APPROACHES.featured.image})` }}
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-700 group-hover:from-black/90" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-[#F3EEE6]">
              <div className="max-w-xl space-y-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8B0000] font-semibold">
                  Featured Approach
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light">
                  {APPROACHES.featured.title}
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-[#E0D8CE]/75 uppercase tracking-wider">
                  {APPROACHES.featured.subtitle}
                </p>
                <p className="font-sans text-[14px] leading-relaxed text-[#E0D8CE]/90 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-lg">
                  {APPROACHES.featured.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Three Supporting Cards Slider on mobile, Grid on desktop */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 no-scrollbar snap-x">
            {APPROACHES.supporting.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="snap-start w-[280px] sm:w-[320px] md:w-auto shrink-0 md:shrink md:flex-grow group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.01)] border border-[#E0D8CE]/30"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-100 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${approach.image})` }}
                />
                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-700 group-hover:from-black/95" />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-[#F3EEE6]">
                  <div className="space-y-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="font-serif text-xl md:text-2xl font-light">
                      {approach.title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#E0D8CE]/70 uppercase tracking-wider">
                      {approach.subtitle}
                    </p>
                    <p className="font-sans text-[13px] leading-relaxed text-[#E0D8CE]/85 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Approaches;
