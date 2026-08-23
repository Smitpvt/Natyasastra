import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';
import { useSEO } from '../hooks/useSEO';

export const MentorsDetail = () => {
  useSEO({
    title: 'Marga Darshaks & Mentors',
    description: 'Meet the mentors, spiritual elders, and Ācāryās guiding the pedagogical roadmap and spiritual axis of the Nāṭyaśāstra Gurukulam.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Gurukulam Mentors & Acharyas',
      'description': 'A list of spiritual elders and guides of the Nāṭyaśāstra Gurukulam.',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'Person',
            'name': 'Padma Bhushan Dr. M. B. Athreya',
            'jobTitle': 'Marga Darshak',
            'description': 'Pioneer of the Indian Management Movement. Anchors the larger civilisational horizon at the Gurukulam.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'Person',
            'name': 'Karnataka Kalashri Dr. Padmaja Suresh',
            'jobTitle': 'Ācāryā for Nāṭya Pedagogy',
            'description': 'Acclaimed danseuse, scholar, teacher, and author whose pedagogy understands Nāṭya as Sādhanā.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'Person',
            'name': 'Śrī K. V. Subrahmoṇyan',
            'jobTitle': 'Spiritual Elder',
            'description': 'Revered disciple in the lineage of Bhagavān Śrī Ramaṇa Maharṣi, serving as a spiritual axis.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'item': {
            '@type': 'Person',
            'name': 'Rohit Viswanath',
            'jobTitle': 'Yajamāna & Yojaka',
            'description': 'Stewards the Gurukulam’s consecrated saṅkalpa and institutional form.'
          }
        }
      ]
    }
  });

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
            Marga Darshak & Mentors
          </HeadingLG>

          <p className="font-sans text-sm sm:text-base text-accent-bronze font-semibold uppercase tracking-[0.2em]">
            Those Who Guide the Gurukulam
          </p>

          <div className="w-20 h-[1px] bg-accent-bronze/40 mx-auto lg:mx-0 my-4" />

          <BodyLG className="text-text-stone-grey font-light leading-relaxed max-w-3xl">
            <em className="italic">Nāṭyaśāstra Gurukulam</em> is guided by mentors whose lives embody the integration of <em className="italic">Dharma</em>, <em className="italic">Śāstra</em>, lived wisdom, and inner discipline. Their role is not one of institutional authority, but of custodianship. Through the living continuity of <em className="italic">paramparā</em>, they help preserve the <em className="italic">Gurukulam</em>'s rhythm, safeguard its ethos, and ensure that its work remains faithful to its consecrated purpose across time.
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
                    src="/assets/images/dr_athreya_thumb.webp"
                    alt="Padma Bhushan Dr. M. B. Athreya"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3.5 bg-white/95 backdrop-blur-sm border-t border-black/5 text-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-bold block">
                    MARGA DARSHAK
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
                <Caption className="text-accent-bronze uppercase tracking-[0.25em] font-semibold">Marga Darshak</Caption>
                <HeadingLG className="text-[#211F1D]">
                  Padma Bhushan Dr. M. B. Athreya
                </HeadingLG>
              </div>
              
              <div className="p-5 rounded-xl bg-[#F8F6F1] border-l-2 border-accent-bronze">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "Providing <em className="italic">Dhārmic</em>, civilisational, and ethical guidance to the <em className="italic">Gurukulam</em>'s vision and public orientation."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Dr. M. B. Athreya is widely regarded as the pioneer of the Indian Management Movement and a distinguished thinker who has consistently sought to integrate modern organisational thought with <em className="italic">Dhārmic</em> vision. He has taught at leading institutions in India and abroad, advised governments, corporations, and civil society organisations, and has made enduring contributions to leadership, governance, and philanthropy.
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
                <HeadingLG className="text-[#211F1D]">
                  Karnataka Kalashri Dr. Padmaja Suresh
                </HeadingLG>
              </div>
              
              <div className="p-5 rounded-xl bg-white border-l-2 border-accent-bronze shadow-sm">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "Shaping the <em className="italic">Gurukulam</em>'s pedagogic vision through <em className="italic">Nāṭya</em> as <em className="italic">Sādhanā</em>."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Dr. Padmaja Suresh is an acclaimed danseuse, scholar, teacher, and author whose life's work bridges rigorous classical training with deep philosophical inquiry. Trained under Guru Padma Shri K. Kalyanasundaram and her father Śrī <em className="italic">Chākyār</em> Rajan, she has represented Indian classical arts internationally while pursuing sustained research into the relationship between <em className="italic">Nāṭya</em>, <em className="italic">Tantra</em>, and spiritual practice.
                </p>
                <p>
                  Her pedagogy understands <em className="italic">Nāṭya</em> not merely as performance, but as <em>Sādhanā</em>, a path of inner refinement, ethical sensitivity, and contemplative awareness. Her work integrates <em className="italic">Śāstra</em>, lived practice, and disciplined inquiry into a single pedagogic vision.
                </p>
                <p>
                  At the <em className="italic">Gurukulam</em>, she transmits not merely technique, but temperament; not merely repertoire, but responsibility, forming <em>sahṛdayas</em> and future custodians of India's aesthetic traditions.
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
                    src="/assets/images/dr_padmaja_suresh_thumb.webp"
                    alt="Karnataka Kalashri Dr. Padmaja Suresh"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
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
                    src="/assets/images/sri_kv_subrahmonyam_thumb.webp"
                    alt="Śrī K. V. Subrahmoṇyan"
                    className="w-full h-full object-cover object-bottom filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
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
                <HeadingLG className="text-[#211F1D]">
                  Śrī K. V. Subrahmoṇyan
                </HeadingLG>
              </div>
              
              <div className="p-5 rounded-xl bg-[#F8F6F1] border-l-2 border-accent-bronze">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "A presence of <em className="italic">sākṣitva</em> and <em className="italic">Vedāntic</em> anchoring, offering blessings, inner orientation, and lived wisdom."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  Śrī K. V. Subrahmoṇyan, a revered disciple in the lineage of <em className="italic">Bhagavān</em> Śrī <em className="italic">Ramaṇa</em> <em className="italic">Maharṣi</em>, has spent much of his life at Śrī Ramaṇāśramam, Tiruvaṇṇāmalai. His life reflects quiet abidance, simplicity, discernment, and lived <em className="italic">Vedāntic</em> clarity.
                </p>
                <p>
                  Known for his gentle presence and directness, he embodies <em>sākṣitva</em>, the witnessing consciousness that steadies inquiry without assertion and guides without seeking prominence.
                </p>
                <p>
                  For the <em className="italic">Gurukulam</em>, his blessings serve as a spiritual axis, affirming that <em className="italic">Nāṭya</em> as <em className="italic">Sādhanā</em> must ultimately rest in stillness, self-knowledge, and inner freedom.
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
                <HeadingLG className="text-[#211F1D]">
                  Rohit Viswanath
                </HeadingLG>
              </div>
              
              <div className="p-5 rounded-xl bg-white border-l-2 border-accent-bronze shadow-sm">
                <p className="font-serif italic text-base sm:text-lg text-accent-bronze leading-relaxed">
                  "Stewarding the <em className="italic">Gurukulam</em>'s consecrated <em className="italic">saṅkalpa</em> with fidelity, humility, and care."
                </p>
              </div>

              <div className="space-y-4 text-text-stone-grey font-sans font-light leading-relaxed text-base">
                <p>
                  <em className="italic">Nāṭyaśāstra Gurukulam</em> is understood not merely as an institution, but as a living <em className="italic">Yajña</em> dedicated to the transmission of <em className="italic">Nāṭya</em>, <em className="italic">Dharma</em>, and civilisational renewal.
                </p>
                <p>
                  Within this understanding, the <strong><em className="italic">Yajamāna</em></strong> is not an owner or authority, but the one who bears responsibility for the consecration, continuity, and integrity of the <em className="italic">yajña</em>. The <strong><em className="italic">Yojaka</em></strong> brings people, ideas, and institutions into harmonious relationship, ensuring that the original <em className="italic">saṅkalpa</em> unfolds faithfully across time and is handed on to future generations.
                </p>
                <p>
                  Rohit Viswanath serves the <em className="italic">Gurukulam</em> in this spirit as its <em className="italic">Yajamāna</em> & <em className="italic">Yojaka</em>.
                </p>
                <p>
                  His journey took him through the study of Ancient Indian Culture and International Relations, followed by work in journalism, public policy, governance, yoga, agriculture, higher education, and civilisational studies. Rather than separate pursuits, these became successive stages in a single unfolding inquiry into <em className="italic">Dharma</em>, education, leadership, and <em className="italic">Nāṭya</em>.
                </p>
                <p>
                  His role is therefore not that of a founder in the modern sense, but of a custodian of the <em className="italic">Yajña</em> and a facilitator of lineage. He seeks to ensure that <em className="italic">Nāṭya</em> remains <em className="italic">Sādhanā</em>, pedagogy remains presence, and institutional form never eclipses <em className="italic">Dhārmic</em> intent.
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
                    src="/assets/images/rohit_viswanath_thumb.webp"
                    alt="Rohit Viswanath - Yajamāna & Yojaka"
                    className="w-full h-full object-cover object-bottom filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
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
            <HeadingLG className="text-[#211F1D]">
              Life Vision of the <em className="italic">Yajamāna</em> & <em className="italic">Yojaka</em>
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
                  I aspire to be a <span className="text-[#211F1D] font-normal"><em className="italic">Kuśala</em> <em className="italic">Nimittam</em></span> for the creative propagation of <em className="italic">Dharma</em> through <em className="italic">Nāṭya</em> — not as a performer or messenger, but as a consecrator of rhythm and sacred atmosphere.
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
                  I seek to leave behind, for India and the world, perpetually living <em className="italic">maṇḍalas</em> of <span className="text-[#211F1D] font-normal"><em className="italic">Nāṭya</em> <em className="italic">Sevakas</em></span> — those who carry the <em className="italic">Yajña</em> not through ambition, but through presence, play, and quiet alignment.
                </p>
              </div>

              <div className="pt-3 border-t border-accent-bronze/20 text-center font-normal text-accent-bronze text-sm sm:text-base space-y-1">
                <p className="italic">May each act become offering. May each <em className="italic">sabhā</em> remain centred.</p>
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
