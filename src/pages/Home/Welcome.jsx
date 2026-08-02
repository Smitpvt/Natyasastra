import React from 'react';
import Section from '../../components/Section';

export const Welcome = () => {
  return (
    <Section id="welcome" className="bg-bg-ivory border-b border-border-stone/20 py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Image Area with Overlapping Quote */}
        <div className="w-full lg:w-7/12 relative">
          <div className="aspect-[16/10] w-full relative overflow-hidden">
            <img 
              src="/assets/images/corridor_clean.png" 
              alt="Temple Corridor"
              className="w-full h-full object-cover filter brightness-[1.05]"
            />
          </div>
          
          {/* Overlapping Quote Box */}
          <div className="lg:absolute -right-32 top-1/2 lg:-translate-y-1/2 bg-white p-10 md:p-14 border border-border-stone/40 shadow-sm max-w-md w-11/12 mt-[-40px] lg:mt-0 relative z-10 mx-auto lg:mx-0">
            <p className="font-serif italic text-text-charcoal text-xl leading-relaxed mb-8">
              "Yato hastas tato dṛṣṭir yato<br />
              dṛṣṭis tato manaḥ..."
            </p>
            <span className="font-sans text-sm text-text-stone-grey font-normal">
              — Abhinaya Darpaṇa
            </span>
          </div>
        </div>

        {/* Right Text Area */}
        <div className="w-full lg:w-5/12 space-y-8 px-4 lg:px-0 lg:pr-12 lg:pt-8">
          <div className="space-y-6">
            <h2 className="font-serif text-[2.5rem] md:text-[3.2rem] leading-tight text-text-charcoal tracking-tight">
              The Architecture of Stillness
            </h2>
            <div className="w-20 h-[1px] bg-border-stone" />
          </div>
          
          <div className="space-y-6">
            <p className="font-serif text-text-stone-grey text-lg leading-relaxed">
              We bridge the chasm between ancient Indian wisdom and contemporary intellectual rigor. Here, the Nāṭyaśāstra is not merely a text, but a living ecosystem of body, sound, and consciousness. Our pedagogy celebrates the precision of ritual and the freedom of mastery.
            </p>
            <p className="font-serif text-text-stone-grey text-lg leading-relaxed">
              The Gurukulam is built on the philosophy that true civilisational renewal cannot occur through abstract analysis alone. It requires deep, embodied practice—Sādhanā—complemented by the rigorous study of Śāstra and the dialogue of Saṃvāda.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Welcome;
