import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MENTORS = [
  {
    plateNo: 'PLATE 01',
    name: 'Acharya V. Sastri',
    role: 'Mahopadhyaya — Aesthetic Metaphysics',
    bio: "A renowned scholar of Abhinavagupta's aesthetic philosophy, Acharya Sastri has spent four decades decoding the esoteric meanings of the Tantrāloka and Nāṭyaśāstra. His work bridges ancient metaphysical structures with contemporary semantic interpretation, helping modern students grasp the transcendent qualities of classical Sanskrit texts.",
    image: '/assets/images/sastri_clean.png',
    caption: 'Acharya V. Sastri during a palm-leaf manuscript reading.'
  },
  {
    plateNo: 'PLATE 02',
    name: 'Guru Meera Devi',
    role: 'Nritya-Kalanidhi — Somatic Karaṇas',
    bio: 'Specializing in the somatic reconstruction of the 108 Karaṇas, Guru Meera Devi bridges sculptural evidence and kinetic practice with peerless precision. Her daily instruction focuses on reclaiming the exact kinetic vocabulary of ancient dramaturgy, establishing a bodily practice that is both technically flawless and spiritually profound.',
    image: '/assets/images/meera_clean.png',
    caption: 'Guru Meera Devi demonstrating somatic posture alignment.'
  }
];

export const Mentors = () => {
  return (
    <section className="w-full bg-[#F4F0EA] section-large border-t border-[#DDD6C8]/60">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px] space-y-20">
        
        {/* ========================================================================= */}
        {/* SECTION 1: Yajamāna & Yojaka Featured Block */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b border-[#DDD6C8]/60 pb-16">
          {/* Left Column: Office Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-[12px] uppercase tracking-[0.25em] text-[#8A6A45] font-semibold block">
                Office & Guardianship
              </span>
              <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[46px] font-light text-[#1F1F1D] tracking-normal leading-tight">
                Yajamāna & Yojaka
              </h2>
            </div>
            
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#6B6863] font-light">
              Within the traditional framework of the Gurukulam, the office of the <strong>Yajamāna</strong> and <strong>Yojaka</strong> represents the sacred duty of guardianship and continuous stewardship. Rather than acting as corporate directors, the Yajamāna and Yojaka are the patrons who initiate, coordinate, and sustain the spiritual and intellectual work.
            </p>
            
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#6B6863] font-light">
              They view the Gurukulam not as a transaction, but as a living <strong>Yajña</strong>—an ongoing, collaborative offering dedicated to the preservation of civilization's heritage. Their primary responsibility is to ensure that the lineage of textual scholarship and bodily reconstruction remains uninterrupted for generations to come.
            </p>
          </div>

          {/* Right Column: Symbolic Visual Altar Geometry */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="aspect-square w-full max-w-[400px] mx-auto overflow-hidden bg-[#FAF8F5] border border-[#DDD6C8] p-3 shadow-md rounded-sm">
              <img
                src="/assets/images/sthapatya.png"
                alt="Sacred Altar Geometry"
                className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
              />
            </div>
            <span className="text-center mt-3 font-serif text-[11px] italic text-[#6B6863] tracking-wide block">
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
          <div className="bg-[#FAF8F5] border border-[#DDD6C8] p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-sm rounded-sm">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#8A6A45]/40" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#8A6A45]/40" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#8A6A45]/40" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#8A6A45]/40" />

            <div className="text-center space-y-6">
              <span className="font-serif text-[13px] italic text-[#8A6A45] tracking-[0.1em] font-semibold block">
                Saṅkalpa
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1F1F1D]">
                Life Vision
              </h3>
              
              <div className="max-w-2xl mx-auto space-y-4 text-left font-serif text-[16px] md:text-[17px] italic text-[#6B6863] leading-relaxed">
                <p className="relative pl-6">
                  <span className="absolute left-0 text-[#8A6A45] font-normal">✦</span>
                  To establish a sanctuary where primary research on Sanskrit dramaturgy, architecture, and aesthetics is physically reconstructed and somatic practices are fully embodied.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 text-[#8A6A45] font-normal">✦</span>
                  To safeguard the oral traditions of recitation and phonetics by providing a dedicated residential space for intensive discipleship and scholarship.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 text-[#8A6A45] font-normal">✦</span>
                  To foster interdisciplinary dialogue between classical aesthetics and contemporary philosophical movements, renewing civilizational wisdom for the modern age.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#DDD6C8]/60 my-16 pt-16" />

        {/* ========================================================================= */}
        {/* SECTION 3: Gurus & Acharyas Bios */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <span className="font-sans text-[12px] uppercase tracking-[0.25em] text-[#8A6A45] font-semibold block">
            Living Lineages
          </span>
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[46px] font-light text-[#1F1F1D] tracking-normal mb-10 md:mb-16">
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
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#FAF8F5] border border-[#DDD6C8] p-2.5 shadow-sm rounded-sm">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-3 font-serif text-[11px] italic text-[#6B6863] tracking-wide">
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
                    <span className="font-serif text-sm italic text-[#8A6A45] tracking-[0.05em] font-semibold block">
                      {mentor.plateNo}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8A6A45] font-semibold block">
                      {mentor.role}
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[32px] md:text-[36px] font-light text-[#1F1F1D] tracking-wide leading-tight">
                      {mentor.name}
                    </h3>
                  </div>

                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#6B6863] font-light">
                    {mentor.bio}
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/mentors"
                      className="group relative inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6A45] hover:text-[#1F1F1D] transition-colors pb-1"
                    >
                      View Biography Details
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8A6A45] group-hover:w-full transition-all duration-500 ease-out" />
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
