import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

export const MentorsDetail = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen text-[#211F1D] selection:bg-accent-bronze/20 selection:text-[#211F1D]">
      
      {/* 1. EDITORIAL HEADER SECTION */}
      <Section spacing="compact" className="pt-12 pb-16 border-b border-accent-bronze/10 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/20">
            <span className="w-2 h-2 rounded-full bg-accent-bronze animate-pulse" />
            <Caption className="text-accent-bronze tracking-[0.25em] text-[11px]">Guardianship & Lineage</Caption>
          </div>

          <HeadingLG as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight">
            Mārga Darśak & Mentors
          </HeadingLG>

          <p className="font-sans text-sm sm:text-base text-accent-bronze font-semibold uppercase tracking-[0.2em]">
            Those Who Guide the Gurukulam
          </p>

          <div className="w-20 h-[1px] bg-accent-bronze/40 mx-auto lg:mx-0 my-4" />

          <BodyLG className="text-text-stone-grey font-light leading-relaxed max-w-3xl">
            Nāṭyaśāstra Gurukulam is guided by mentors whose lives embody the integration of Dharma, Śāstra, lived wisdom, and inner discipline. Their role is not one of institutional authority, but of custodianship. Through the living continuity of paramparā, they help preserve the Gurukulam's rhythm, safeguard its ethos, and ensure that its work remains faithful to its consecrated purpose across time.
          </BodyLG>
        </div>
      </Section>

      {/* 2. DR. M. B. ATHREYA PROFILE */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Compact Portrait Image Frame (No extra side spacing) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 max-w-[290px] sm:max-w-[320px] mx-auto w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E1C1A] group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/assets/images/dr_athreya.jpg"
                    alt="Padma Bhushan Dr. M. B. Athreya"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 bg-white/95 backdrop-blur-sm border-t border-black/5 text-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-bold block">
                    MĀRGA DARŚAK
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#211F1D]">
                    Padma Bhushan Dr. M. B. Athreya
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Biography Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <Caption className="text-accent-bronze uppercase tracking-[0.25em] font-semibold">Mārga Darśak</Caption>
                <HeadingMD className="text-3xl sm:text-4xl text-[#211F1D] font-serif font-light">
                  Padma Bhushan Dr. M. B. Athreya
                </HeadingMD>
              </div>
              
              <div className="p-5 rounded-xl bg-[#F8F6F1] border-l-2 border-accent-bronze">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "Providing Dhārmic, civilisational, and ethical guidance to the Gurukulam's vision and public orientation."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Dr. M. B. Athreya is widely regarded as the pioneer of the Indian Management Movement and a distinguished thinker who has consistently sought to integrate modern organisational thought with Dhārmic vision. He has taught at leading institutions in India and abroad, advised governments, corporations, and civil society organisations, and has made enduring contributions to leadership, governance, and philanthropy.
                </p>
                <p>
                  Awarded the Padma Bhushan by the Government of India and honoured with the title of <em>Dharma Pracharak</em> by His Holiness the Jagadguru Śankarācārya of Śṛṅgeri, Dr. Athreya has long advocated the importance of grounding institutions in ethical clarity and civilisational consciousness.
                </p>
                <p>
                  At the Gurukulam, his presence anchors the larger civilisational horizon, reminding us that aesthetics, education, and leadership are inseparable from responsibility towards society and public life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 3. DR. PADMAJA SURESH PROFILE */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-[#F8F6F1]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Biography Content (Desktop Left) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-1">
                <Caption className="text-accent-bronze uppercase tracking-[0.25em] font-semibold">Ācāryā for Nāṭya Pedagogy</Caption>
                <HeadingMD className="text-3xl sm:text-4xl text-[#211F1D] font-serif font-light">
                  Karnataka Kalashri Dr. Padmaja Suresh
                </HeadingMD>
              </div>
              
              <div className="p-5 rounded-xl bg-white border-l-2 border-accent-bronze shadow-sm">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "Shaping the Gurukulam's pedagogic vision through Nāṭya as Sādhanā."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Dr. Padmaja Suresh is an acclaimed danseuse, scholar, teacher, and author whose life's work bridges rigorous classical training with deep philosophical inquiry. Trained under Guru Padma Shri K. Kalyanasundaram and her father Śrī Chākyār Rajan, she has represented Indian classical arts internationally while pursuing sustained research into the relationship between Nāṭya, Tantra, and spiritual practice.
                </p>
                <p>
                  Her pedagogy understands Nāṭya not merely as performance, but as <em>Sādhanā</em>, a path of inner refinement, ethical sensitivity, and contemplative awareness. Her work integrates Śāstra, lived practice, and disciplined inquiry into a single pedagogic vision.
                </p>
                <p>
                  At the Gurukulam, she transmits not merely technique, but temperament; not merely repertoire, but responsibility, forming <em>sahṛdayas</em> and future custodians of India's aesthetic traditions.
                </p>
              </div>
            </div>

            {/* Compact Portrait Image Frame (Desktop Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 max-w-[290px] sm:max-w-[320px] mx-auto w-full order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E1C1A] group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/assets/images/dr_padmaja_suresh.jpg"
                    alt="Karnataka Kalashri Dr. Padmaja Suresh"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 bg-white/95 backdrop-blur-sm border-t border-black/5 text-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-bold block">
                    ĀCĀRYĀ FOR NĀṬYA PEDAGOGY
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#211F1D]">
                    Karnataka Kalashri Dr. Padmaja Suresh
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 4. ŚRĪ K. V. SUBRAHMOṆYAN PROFILE */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Compact Portrait Image Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 max-w-[290px] sm:max-w-[320px] mx-auto w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E1C1A] group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/assets/images/sri_kv_subrahmonyam.jpg"
                    alt="Śrī K. V. Subrahmoṇyan"
                    className="w-full h-full object-cover object-bottom filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 bg-white/95 backdrop-blur-sm border-t border-black/5 text-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-bold block">
                    SPIRITUAL ELDER
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#211F1D]">
                    Śrī K. V. Subrahmoṇyan
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Biography Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <Caption className="text-accent-bronze uppercase tracking-[0.25em] font-semibold">Spiritual Elder</Caption>
                <HeadingMD className="text-3xl sm:text-4xl text-[#211F1D] font-serif font-light">
                  Śrī K. V. Subrahmoṇyan
                </HeadingMD>
              </div>
              
              <div className="p-5 rounded-xl bg-[#F8F6F1] border-l-2 border-accent-bronze">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "A presence of sākṣitva and Vedāntic anchoring, offering blessings, inner orientation, and lived wisdom."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Śrī K. V. Subrahmoṇyan, a revered disciple in the lineage of Bhagavān Śrī Ramaṇa Maharṣi, has spent much of his life at Śrī Ramaṇāśramam, Tiruvaṇṇāmalai. His life reflects quiet abidance, simplicity, discernment, and lived Vedāntic clarity.
                </p>
                <p>
                  Known for his gentle presence and directness, he embodies <em>sākṣitva</em>, the witnessing consciousness that steadies inquiry without assertion and guides without seeking prominence.
                </p>
                <p>
                  For the Gurukulam, his blessings serve as a spiritual axis, affirming that Nāṭya as Sādhanā must ultimately rest in stillness, self-knowledge, and inner freedom.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 5. ROHIT VISWANATH (YAJAMĀNA & YOJAKA) PROFILE */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-[#F8F6F1]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Biography Content (Desktop Left) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-1">
                <Caption className="text-accent-bronze uppercase tracking-[0.25em] font-semibold">Yajamāna & Yojaka</Caption>
                <HeadingMD className="text-3xl sm:text-4xl text-[#211F1D] font-serif font-light">
                  Rohit Viswanath
                </HeadingMD>
              </div>
              
              <div className="p-5 rounded-xl bg-white border-l-2 border-accent-bronze shadow-sm">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "Stewarding the Gurukulam's consecrated saṅkalpa with fidelity, humility, and care."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Nāṭyaśāstra Gurukulam is understood not merely as an institution, but as a living Yajña dedicated to the transmission of Nāṭya, Dharma, and civilisational renewal.
                </p>
                <p>
                  Within this understanding, the <strong>Yajamāna</strong> is not an owner or authority, but the one who bears responsibility for the consecration, continuity, and integrity of the yajña. The <strong>Yojaka</strong> brings people, ideas, and institutions into harmonious relationship, ensuring that the original saṅkalpa unfolds faithfully across time and is handed on to future generations.
                </p>
                <p>
                  Rohit Viswanath serves the Gurukulam in this spirit as its Yajamāna & Yojaka. His journey took him through the study of Ancient Indian Culture and International Relations, followed by work in journalism, public policy, governance, yoga, agriculture, higher education, and civilisational studies. Rather than separate pursuits, these became successive stages in a single unfolding inquiry into Dharma, education, leadership, and Nāṭya.
                </p>
                <p>
                  His role is therefore not that of a founder in the modern sense, but of a custodian of the Yajña and a facilitator of lineage. He seeks to ensure that Nāṭya remains Sādhanā, pedagogy remains presence, and institutional form never eclipses Dhārmic intent.
                </p>
              </div>
            </div>

            {/* Compact Portrait Image Frame (Desktop Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 max-w-[290px] sm:max-w-[320px] mx-auto w-full order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E1C1A] group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/assets/images/rohit_viswanath.png"
                    alt="Rohit Viswanath - Yajamāna & Yojaka"
                    className="w-full h-full object-cover object-bottom filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 bg-white/95 backdrop-blur-sm border-t border-black/5 text-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-bold block">
                    YAJAMĀNA & YOJAKA
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#211F1D]">
                    Rohit Viswanath
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 6. LIFE VISION: CONSECRATED AS A PERSONAL SAṄKALPA */}
      <Section className="py-14 sm:py-16 border-b border-accent-bronze/10 bg-gradient-to-b from-[#F8F6F1] via-[#F3EEE6] to-[#EFE8DC] relative overflow-hidden">
        
        {/* Background Subtle Geometry */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <svg width="450" height="450" viewBox="0 0 600 600" fill="none" className="text-accent-bronze">
            <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1" />
            <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6 relative z-10">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-accent-bronze/30 shadow-sm text-accent-bronze font-sans text-[11px] uppercase tracking-[0.25em] font-semibold">
              SAṄKALPA
            </div>
            <HeadingLG className="text-2xl sm:text-3xl font-serif font-light text-[#211F1D]">
              Life Vision
            </HeadingLG>
            <p className="font-serif italic text-accent-bronze text-xs sm:text-sm">
              Consecrated as a Personal Saṅkalpa
            </p>
          </div>

          {/* Compact Saṅkalpa Manuscript Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-[0_10px_30px_rgba(168,124,79,0.06)] border border-accent-bronze/25 space-y-4 relative overflow-hidden"
          >
            {/* Corner flourishes */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-bronze/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-bronze/40" />

            <div className="space-y-4 font-serif text-base sm:text-lg italic text-text-stone-grey leading-relaxed">
              
              <div className="flex items-start gap-3">
                <span className="text-accent-bronze text-sm font-normal pt-1">✦</span>
                <p>
                  I aspire to be a <span className="text-[#211F1D] font-normal">Kuśala Nimittam</span> for the creative propagation of Dharma through Nāṭya — not as a performer or messenger, but as a consecrator of rhythm and sacred atmosphere.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-accent-bronze text-sm font-normal pt-1">✦</span>
                <p>
                  Guided by the Divine and a vast lineage of Gurus, I walk not ahead, but behind — attuning to their footsteps and shaping institutions where others may align.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-accent-bronze text-sm font-normal pt-1">✦</span>
                <p>
                  I seek to leave behind, for India and the world, perpetually living maṇḍalas of <span className="text-[#211F1D] font-normal">Nāṭya Sevakas</span> — those who carry the Yajña not through ambition, but through presence, play, and quiet alignment.
                </p>
              </div>

              <div className="pt-3 border-t border-accent-bronze/20 text-center font-normal text-accent-bronze text-sm sm:text-base space-y-1">
                <p className="italic">May each act become offering. May each sabhā remain centred.</p>
                <p className="italic">And may every successor walk not in my image, but toward their own light.</p>
              </div>

            </div>
          </motion.div>

        </div>
      </Section>



    </div>
  );
};

export default MentorsDetail;
