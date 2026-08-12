import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MENTORS = [
  {
    plateNo: 'PLATE 01',
    name: 'Padma Bhushan Dr. M. B. Athreya',
    role: 'Marga Darshak',
    bio: "Dr. M. B. Athreya is widely regarded as the pioneer of the Indian Management Movement and a distinguished thinker who has consistently sought to integrate modern organisational thought with Dhārmic vision. Awarded the Padma Bhushan by the Government of India, his presence anchors the larger civilisational horizon at the Gurukulam.",
    image: '/assets/images/sastri_clean.png',
    caption: 'Padma Bhushan Dr. M. B. Athreya, Marga Darshak.'
  },
  {
    plateNo: 'PLATE 02',
    name: 'Karnataka Kalashri Dr. Padmaja Suresh',
    role: 'Ācāryā for Nāṭya Pedagogy',
    bio: "Dr. Padmaja Suresh is an acclaimed danseuse, scholar, teacher, and author whose life's work bridges rigorous classical training with deep philosophical inquiry. Her pedagogy understands Nāṭya not merely as performance, but as Sādhanā, a path of inner refinement, ethical sensitivity, and contemplative awareness.",
    image: '/assets/images/meera_clean.png',
    caption: 'Karnataka Kalashri Dr. Padmaja Suresh.'
  }
];

export const Mentors = () => {
  return (
    <section className="w-full bg-[#EAE4D9] section-large border-t border-[#E0D8CE]/60">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px] space-y-20">
        
        {/* ========================================================================= */}
        {/* SECTION 1: Yajamāna & Yojaka Featured Block */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b border-[#E0D8CE]/60 pb-16">
          {/* Left Column: Office Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-[12px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
                Office & Guardianship
              </span>
              <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[46px] font-light text-[#211F1D] tracking-normal leading-tight">
                Yajamāna & Yojaka
              </h2>
            </div>
            
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#757069] font-light">
              Nāṭyaśāstra Gurukulam is understood not merely as an institution, but as a living <strong>Yajña</strong> dedicated to the transmission of Nāṭya, Dharma, and civilisational renewal. Within this understanding, the <strong>Yajamāna</strong> is not an owner or authority, but the one who bears responsibility for the consecration, continuity, and integrity of the yajña.
            </p>
            
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#757069] font-light">
              The <strong>Yojaka</strong> brings people, ideas, and institutions into harmonious relationship, ensuring that the original saṅkalpa unfolds faithfully across time. <strong>Rohit Viswanath</strong> serves the Gurukulam in this spirit as its Yajamāna & Yojaka, seeking to ensure that Nāṭya remains Sādhanā, pedagogy remains presence, and institutional form never eclipses Dhārmic intent.
            </p>
          </div>

          {/* Right Column: Symbolic Visual Altar Geometry */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="aspect-square w-full max-w-[400px] mx-auto overflow-hidden bg-[#F3EEE6] border border-[#E0D8CE] p-3 shadow-md rounded-sm">
              <img
                src="/assets/images/sthapatya.png"
                alt="Sacred Altar Geometry"
                className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
              />
            </div>
            <span className="text-center mt-3 font-serif text-[11px] italic text-[#757069] tracking-wide block">
              Architectural blueprint representing the geometry of the Mandapa.
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: Life Vision Panel (Saṅkalpa) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="max-w-[1000px] mx-auto pt-4"
        >
          {/* Manuscript Panel: Ivory card on Parchment Bg */}
          <div className="bg-[#F3EEE6] border border-[#E0D8CE] p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-sm rounded-sm">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent-bronze/40" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent-bronze/40" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent-bronze/40" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent-bronze/40" />

            <div className="text-center space-y-6">
              <span className="font-serif text-[13px] italic text-accent-bronze tracking-[0.1em] font-semibold block">
                Saṅkalpa
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#211F1D]">
                Life Vision
              </h3>
              
              <div className="max-w-2xl mx-auto space-y-4 text-left font-serif text-[16px] md:text-[17px] italic text-[#757069] leading-relaxed">
                <p className="relative pl-6">
                  <span className="absolute left-0 text-accent-bronze font-normal">✦</span>
                  I aspire to be a Kuśala Nimittam for the creative propagation of Dharma through Nāṭya — not as a performer or messenger, but as a consecrator of rhythm and sacred atmosphere.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 text-accent-bronze font-normal">✦</span>
                  Guided by the Divine and a vast lineage of Gurus, I walk not ahead, but behind — attuning to their footsteps and shaping institutions where others may align.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 text-accent-bronze font-normal">✦</span>
                  I seek to leave behind, for India and the world, perpetually living maṇḍalas of Nāṭya Sevakas — those who carry the Yajña not through ambition, but through presence, play, and quiet alignment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#E0D8CE]/60 my-16 pt-16" />

        {/* ========================================================================= */}
        {/* SECTION 3: Gurus & Acharyas Bios */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <span className="font-sans text-[12px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
            Living Lineages
          </span>
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[46px] font-light text-[#211F1D] tracking-normal mb-10 md:mb-16">
            Gurus & Acharyas
          </h2>
        </div>

        {/* Alternating Feature Stories */}
        <div className="space-y-24">
          {MENTORS.map((mentor, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={mentor.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Portrait Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className={`lg:col-span-5 flex flex-col ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#F3EEE6] border border-[#E0D8CE] p-2.5 shadow-sm rounded-sm">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-3 font-serif text-[11px] italic text-[#757069] tracking-wide">
                    {mentor.caption}
                  </figcaption>
                </motion.div>

                {/* Biography Content Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.0, delay: 0.05, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className={`lg:col-span-7 flex flex-col justify-center space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-1.5">
                    <span className="font-serif text-sm italic text-accent-bronze tracking-[0.05em] font-semibold block">
                      {mentor.plateNo}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
                      {mentor.role}
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[32px] md:text-[36px] font-light text-[#211F1D] tracking-wide leading-tight">
                      {mentor.name}
                    </h3>
                  </div>

                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#757069] font-light">
                    {mentor.bio}
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/mentors"
                      className="group relative inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze hover:text-[#211F1D] transition-colors pb-1"
                    >
                      View Biography Details
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-bronze group-hover:w-full transition-all duration-500 ease-out" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Mentors;
