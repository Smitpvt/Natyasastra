import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import EditorialImage from '../components/EditorialImage';
import { HeadingXL, HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

const PILLARS = [
  {
    title: 'Śāstra',
    sanskrit: 'शास्त्र',
    syllable: 'शा',
    desc: 'Rigorous study of the Nāṭyaśāstra, the Abhinavabhāratī commentary, and allied civilisational knowledge traditions. It provides the intellectual framework, preserving textual integrity and commentarial lineage.'
  },
  {
    title: 'Sādhanā',
    sanskrit: 'साधना',
    syllable: 'सा',
    desc: 'Embodied learning through disciplined daily practice, movement, breath, and the refinement of perception. The physical body becomes the laboratory where theoretical knowledge is transformed into lived experience.'
  },
  {
    title: 'Saṃvāda',
    sanskrit: 'संवाद',
    syllable: 'सं',
    desc: 'Dialogue rooted in humility, quiet listening, and a collective search for understanding rather than assertion. It fosters a space where scholars, practitioners, and students gather to refine their perception.'
  },
  {
    title: 'Paramparā',
    sanskrit: 'परम्परा',
    syllable: 'प',
    desc: 'Transmission of wisdom through living lineages and relationships. Rather than an academic transaction, learning is nurtured in the presence of teachers who embody the values they transmit.'
  },
  {
    title: 'Rasa',
    sanskrit: 'रस',
    syllable: 'र',
    desc: 'The cultivation of refined aesthetic perception as the cornerstone of education, culture, and life. It represents the ultimate aesthetic delight and spiritual transcendence that Nāṭya evokes.'
  },
  {
    title: 'Dharma',
    sanskrit: 'धर्म',
    syllable: 'ध',
    desc: 'Orienting knowledge toward responsibility, inner order, and service. It anchors all technical skill and intellectual inquiry in ethical custodianship and contribution to the community.'
  }
];

export const About = () => {
  const [activePillar, setActivePillar] = useState(0);

  // SVG Mandala node calculations (Center: 210, 210, R: 135)
  const mandalaNodes = [
    { name: 'Śāstra', x: 210, y: 75, labelX: 210, labelY: 38, anchor: 'middle' },
    { name: 'Sādhanā', x: 327, y: 143, labelX: 362, labelY: 147, anchor: 'start' },
    { name: 'Saṃvāda', x: 327, y: 278, labelX: 362, labelY: 282, anchor: 'start' },
    { name: 'Paramparā', x: 210, y: 345, labelX: 210, labelY: 388, anchor: 'middle' },
    { name: 'Rasa', x: 93, y: 278, labelX: 58, labelY: 282, anchor: 'end' },
    { name: 'Dharma', x: 93, y: 143, labelX: 58, labelY: 147, anchor: 'end' }
  ];

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen text-text-primary selection:bg-accent-bronze/10 selection:text-text-primary overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <Section className="min-h-[85vh] flex flex-col justify-center py-20 relative border-b border-accent-bronze/10" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 px-4">
          <Caption className="text-accent-bronze/80 tracking-[0.3em] text-xs md:text-sm">
            ABOUT THE GURUKULAM
          </Caption>
          
          <HeadingXL as="h1" className="text-4xl md:text-6xl lg:text-[68px] font-light leading-[1.1] tracking-tight">
            A Gurukulam for Śāstra, Sādhanā, and Civilisational Renewal
          </HeadingXL>
          
          <div className="w-12 h-[1px] bg-accent-bronze/20 mx-auto my-6" />
          
          <BodyLG className="max-w-3xl mx-auto text-base md:text-xl text-text-secondary leading-relaxed font-sans font-light">
            Dedicated to the study, practice, and transmission of the Nāṭyaśāstra and its allied knowledge traditions.
          </BodyLG>
        </div>
        
        {/* Subtle background geometry outline */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="text-text-primary">
            <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="300" cy="300" r="60" stroke="currentColor" strokeWidth="0.5" />
            <line x1="300" y1="20" x2="300" y2="580" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
      </Section>

      {/* 2. ABOUT THE GURUKULAM */}
      <Section className="py-24 md:py-36 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <Caption className="text-accent-bronze/70">The Institution</Caption>
              <HeadingLG className="text-3xl md:text-4xl font-light text-text-primary leading-tight">
                A Sanctuary for Lived Heritage
              </HeadingLG>
              <div className="w-12 h-[1px] bg-accent-bronze/20 mt-4" />
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed font-sans font-light text-base md:text-lg">
              <p>
                Nāṭyaśāstra Gurukulam traces its beginnings to a series of intense, quiet dialogues between practitioners, scholars, and a few dedicated students. It was born not from an ambition to create a new organisation, but from an undeniable necessity to recover the authentic discipline of Nāṭyaśāstra before it dissolved entirely into modern choreographic performance.
              </p>
              <p>
                The Gurukulam serves as a dedicated sanctuary for the study, practice, and transmission of the Nāṭyaśāstra and its allied knowledge traditions. Here, learning is structured around three foundational pathways: <strong>Śāstra</strong> (rigorous textual study), <strong>Sādhanā</strong> (embodied practice), and <strong>Saṃvāda</strong> (scholarly and creative dialogue). Through this integrated model, the Gurukulam seeks to nurture sahṛdayas whose inner refinement naturally expresses itself in ethical leadership and aesthetic stewardship.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. OUR STORY */}
      <Section className="py-24 md:py-36 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Our Story</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">The Path of Consecration</HeadingLG>
          </div>

          <div className="relative">
            {/* Center line for timeline on desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent-bronze/10 -translate-x-1/2" />

            <div className="space-y-16">
              
              {/* Milestone 1 */}
              <div className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-1.5 z-10" />
                <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                  <span className="font-serif italic text-accent-bronze/80 text-lg block mb-1">Origins</span>
                  <HeadingMD className="text-xl mb-3 font-light text-text-primary">Tattvāloka Onward March</HeadingMD>
                  <Body className="text-text-secondary text-sm md:text-base leading-relaxed">
                    Traced back to early dialogues within the Tattvāloka Onward March to Rāma Rājya initiative, which identified the urgent necessity to recover authentic aesthetic disciplines.
                  </Body>
                </div>
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>

              {/* Milestone 2 */}
              <div className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-1.5 z-10" />
                <div className="w-full md:w-1/2 hidden md:block" />
                <div className="w-full md:w-1/2 md:pl-12 pl-8">
                  <span className="font-serif italic text-accent-bronze/80 text-lg block mb-1">Guidance</span>
                  <HeadingMD className="text-xl mb-3 font-light text-text-primary">Visionary Guidance</HeadingMD>
                  <Body className="text-text-secondary text-sm md:text-base leading-relaxed">
                    Nurtured under the guidance of Dr. M. B. Athreya, whose formative conversations helped shape the integration of Dhārmic vision with institutional organization.
                  </Body>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-1.5 z-10" />
                <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                  <span className="font-serif italic text-accent-bronze/80 text-lg block mb-1">Emergence</span>
                  <HeadingMD className="text-xl mb-3 font-light text-text-primary">Vision Formulation</HeadingMD>
                  <Body className="text-text-secondary text-sm md:text-base leading-relaxed">
                    The progressive development of the core pedagogical model, uniting textual study with embodied training and quiet, reflective inquiry.
                  </Body>
                </div>
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>

              {/* Milestone 4: Consecration (HIGHLIGHTED) */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-2 md:top-1/2 -translate-y-1/2 z-10" />
                <div className="w-full md:w-1/2 hidden md:block" />
                <div className="w-full md:w-1/2 md:pl-12 pl-8">
                  <div className="max-w-md rounded border border-accent-bronze/20 overflow-hidden shadow-sm bg-bg-parchment/20 p-5 space-y-4">
                    <span className="font-serif italic text-accent-bronze text-xl font-medium block">Consecration</span>
                    <HeadingMD className="text-2xl font-light text-text-primary">Pratiṣṭhā Samāroham</HeadingMD>
                    <div className="font-sans text-xs uppercase tracking-wider text-accent-bronze/70 mb-2">
                      23 November 2025 • Navi Mumbai
                    </div>
                    <img
                      src="/assets/images/yajna.png"
                      alt="Pratiṣṭhā Consecration Ceremony"
                      className="w-full aspect-[16/10] object-cover filter contrast-[1.03] sepia-[0.05] border border-accent-bronze/10"
                      loading="lazy"
                    />
                    <Body className="text-text-secondary text-xs md:text-sm leading-relaxed mt-3 mb-0">
                      Consecrated at Śrī Subrahmaṇya Sevā Samāj, Navi Mumbai, establishing a dedicated commitment to restoring the spiritual essence of the Nāṭyaśāstra.
                    </Body>
                  </div>
                </div>
              </div>

              {/* Milestone 5 */}
              <div className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-1.5 z-10" />
                <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                  <span className="font-serif italic text-accent-bronze/80 text-lg block mb-1">Today</span>
                  <HeadingMD className="text-xl mb-3 font-light text-text-primary">Sustained Sādhanā</HeadingMD>
                  <Body className="text-text-secondary text-sm md:text-base leading-relaxed">
                    Growing steadily through quiet academic rigor, daily practice, and commentarial preservation, serving as a living center for civilisational memory.
                  </Body>
                </div>
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>

            </div>
          </div>
        </div>
      </Section>

      {/* 4. OUR VISION */}
      <Section className="py-24 md:py-36 bg-bg-parchment/10 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <Caption className="text-accent-bronze/70 tracking-[0.25em] text-xs">
            Our Vision
          </Caption>
          
          <h2 className="font-serif italic text-3xl md:text-5xl lg:text-[54px] text-text-primary leading-[1.3] font-light max-w-3xl mx-auto tracking-tight">
            “An institution contributing, in perpetuity, to the Dhārmic renewal of public life.”
          </h2>
          
          <div className="w-8 h-[1px] bg-accent-bronze/20 mx-auto my-8" />
          
          <div className="max-w-2xl mx-auto text-text-secondary font-sans font-light leading-relaxed text-base md:text-lg space-y-6">
            <p>
              We seek the Dhārmic renewal of public life through graduates who embody the spirit of Rāma Rājya, with a sātvic blend of Dharma, sevā, self-transcendence, and aesthetic leadership.
            </p>
            <p>
              Rooted in the Nāṭyaśāstra and its allied disciplines, the Gurukulam nurtures custodians of rasa, rhythm, and responsibility—where presence itself is pedagogy, and governance flows from inner rhythm.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. WHY NĀṬYAŚĀSTRA */}
      <Section className="py-24 md:py-36 bg-bg-ivory border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Caption className="text-accent-bronze/80">Civilisational System</Caption>
              <HeadingLG className="text-3xl md:text-4xl font-light text-text-primary leading-tight">
                Why Nāṭyaśāstra?
              </HeadingLG>
              <div className="w-12 h-[1px] bg-accent-bronze/20" />
              <Body className="text-text-secondary leading-relaxed font-sans font-light">
                It is one of India's great civilisational knowledge systems, bringing together aesthetics, philosophy, ethics, psychology, pedagogy, architecture, music, movement, literature, and social order into an integrated vision of human flourishing.
              </Body>
              <Body className="text-text-secondary leading-relaxed font-sans font-light">
                It refines perception, emotion, attention, and conduct, cultivating sahṛdayas—refined perceivers capable of recognizing truth, beauty, and proportion.
              </Body>
            </div>
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <EditorialImage
                src="/assets/images/sculpture.png"
                alt="Classical Sculpture depicting Indian aesthetics"
                aspectRatio="aspect-[4/5]"
                caption="Aesthetic representation of movement and rasa"
                copyright="Nāṭyaśāstra Custodianship"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 7. WHY A GURUKULAM */}
      <Section className="py-24 md:py-36 bg-bg-parchment/20 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 w-full max-w-md mx-auto order-2 lg:order-1">
              <EditorialImage
                src="/assets/images/banyan.png"
                alt="Ancient Banyan Tree representing traditional lineage"
                aspectRatio="aspect-[4/5]"
                caption="Traditional teaching spaces under the banyan"
                copyright="Gurukulam Tradition"
              />
            </div>
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <Caption className="text-accent-bronze/80">Pedagogy of Relationship</Caption>
              <HeadingLG className="text-3xl md:text-4xl font-light text-text-primary leading-tight">
                Why a Gurukulam?
              </HeadingLG>
              <div className="w-12 h-[1px] bg-accent-bronze/20" />
              <Body className="text-text-secondary leading-relaxed font-sans font-light">
                A Gurukulam is a place where knowledge is transmitted through relationship rather than information alone; where study is inseparable from practice; where dialogue is grounded in humility; and where education seeks to shape character as much as competence.
              </Body>
              <Body className="text-text-secondary leading-relaxed font-sans font-light">
                Learning unfolds through living relationships, shared practice, quiet dialogue, and a deep reverence for the lineage, preserving the authentic transmission across generations.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. GUIDING INFLUENCES */}
      <Section className="py-24 md:py-36 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Guiding Influences</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">Anchors of the Tradition</HeadingLG>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Mentor 1 */}
            <div className="flex flex-col space-y-4 bg-bg-parchment/10 p-5 border border-accent-bronze/5 rounded-sm">
              <div className="aspect-[3/4] overflow-hidden border border-accent-bronze/10">
                <img
                  src="/assets/images/mentors.png"
                  alt="Padma Bhushan Dr. M. B. Athreya"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg leading-tight text-text-primary">Padma Bhushan Dr. M. B. Athreya</h4>
                <p className="font-sans text-[13px] text-text-secondary leading-relaxed font-light">
                  Pioneer of the Indian Management Movement. A distinguished thinker who seeks to integrate modern organisational systems with Dhārmic vision.
                </p>
              </div>
            </div>

            {/* Mentor 2 */}
            <div className="flex flex-col space-y-4 bg-bg-parchment/10 p-5 border border-accent-bronze/5 rounded-sm">
              <div className="aspect-[3/4] overflow-hidden border border-accent-bronze/10">
                <img
                  src="/assets/images/meera_clean.png"
                  alt="Karnataka Kalashri Dr. Padmaja Suresh"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg leading-tight text-text-primary">Karnataka Kalashri Dr. Padmaja Suresh</h4>
                <p className="font-sans text-[13px] text-text-secondary leading-relaxed font-light">
                  Acclaimed danseuse, scholar, and author whose life's work bridges classical training with deep research into the relationship between Nāṭya and Sādhanā.
                </p>
              </div>
            </div>

            {/* Mentor 3 */}
            <div className="flex flex-col space-y-4 bg-bg-parchment/10 p-5 border border-accent-bronze/5 rounded-sm">
              <div className="aspect-[3/4] overflow-hidden border border-accent-bronze/10">
                <img
                  src="/assets/images/sastri_clean.png"
                  alt="Śrī K. V. Subrahmoṇyan"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg leading-tight text-text-primary">Śrī K. V. Subrahmoṇyan</h4>
                <p className="font-sans text-[13px] text-text-secondary leading-relaxed font-light">
                  Revered disciple in the lineage of Bhagavān Śrī Ramaṇa Maharṣi. Offers Vedāntic clarity, gentle witnessing presence, and spiritual anchoring.
                </p>
              </div>
            </div>

            {/* Mentor 4 */}
            <div className="flex flex-col space-y-4 bg-bg-parchment/10 p-5 border border-accent-bronze/5 rounded-sm">
              <div className="aspect-[3/4] overflow-hidden border border-accent-bronze/10">
                <img
                  src="/assets/images/corridor_clean.png"
                  alt="Rohit Viswanath"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg leading-tight text-text-primary">Rohit Viswanath</h4>
                <p className="font-sans text-[13px] text-text-secondary leading-relaxed font-light">
                  Yajamāna & Yojaka of the Gurukulam. Serves as custodian of the consecrated saṅkalpa, facilitating institutional form with fidelity and humility.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 8. THE SIX PILLARS */}
      <Section className="py-24 md:py-36 bg-bg-parchment/10 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Foundational Framework</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">The Six Pillars of Nāṭya</HeadingLG>
            <p className="font-sans text-xs uppercase tracking-wider text-text-secondary/70 hidden md:block">
              Hover or click nodes to explore the dimensions
            </p>
          </div>

          {/* Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Desktop & Tablet Mandala: Interactive SVG */}
            <div className="hidden md:flex lg:col-span-6 justify-center items-center">
              <svg width="420" height="420" viewBox="0 0 420 420" className="w-full max-w-[380px] h-auto select-none overflow-visible">
                {/* Connecting spoke lines */}
                {mandalaNodes.map((node, i) => (
                  <line
                    key={`line-${i}`}
                    x1="210"
                    y1="210"
                    x2={node.x}
                    y2={node.y}
                    stroke="var(--color-accent-bronze)"
                    strokeOpacity={activePillar === i ? 0.6 : 0.15}
                    strokeWidth={activePillar === i ? 1.5 : 1}
                    strokeDasharray="4 4"
                    className="transition-all duration-500"
                  />
                ))}

                {/* Circular outer boundary ring */}
                <circle
                  cx="210"
                  cy="210"
                  r="135"
                  fill="none"
                  stroke="var(--color-accent-bronze)"
                  strokeOpacity="0.1"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />

                {/* Central Node (Nāṭya) */}
                <circle
                  cx="210"
                  cy="210"
                  r="42"
                  fill="#F3EEE6"
                  stroke="var(--color-accent-bronze)"
                  strokeWidth="1"
                  className="filter drop-shadow-sm"
                />
                <text
                  x="210"
                  y="215"
                  textAnchor="middle"
                  className="font-serif text-[11px] font-medium tracking-[0.25em] fill-accent-bronze select-none"
                >
                  NĀṬYA
                </text>

                {/* Orbiting nodes */}
                {mandalaNodes.map((node, i) => {
                  const isActive = activePillar === i;
                  return (
                    <g
                      key={`node-${i}`}
                      className="cursor-pointer"
                      onClick={() => setActivePillar(i)}
                      onMouseEnter={() => setActivePillar(i)}
                    >
                      {/* Interactive ring overlay */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="32"
                        fill="transparent"
                        className="transition-all"
                      />
                      
                      {/* Node circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="22"
                        fill={isActive ? '#F3EEE6' : '#F3EEE6'}
                        stroke="var(--color-accent-bronze)"
                        strokeWidth={isActive ? 1.5 : 0.8}
                        strokeOpacity={isActive ? 1 : 0.3}
                        className="transition-all duration-300"
                      />

                      {/* Devanagari Syllable inside circle */}
                      <text
                        x={node.x}
                        y={node.y + 6}
                        textAnchor="middle"
                        className={`font-serif text-[15px] select-none transition-colors duration-300 ${
                          isActive ? 'fill-accent-bronze font-medium' : 'fill-text-secondary/60'
                        }`}
                        style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                      >
                        {PILLARS[i].syllable}
                      </text>

                      {/* English Label outside circle */}
                      <text
                        x={node.labelX}
                        y={node.labelY}
                        textAnchor={node.anchor}
                        className={`font-sans text-[10px] uppercase tracking-[0.2em] select-none transition-colors duration-300 ${
                          isActive ? 'fill-accent-bronze font-semibold' : 'fill-text-secondary'
                        }`}
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Desktop Description Panel */}
            <div className="hidden md:block lg:col-span-6 space-y-6 pl-4 min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif italic text-accent-bronze text-3xl font-light">
                      {PILLARS[activePillar].title}
                    </span>
                    <span
                      className="font-serif text-lg text-text-secondary/60"
                      style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                    >
                      {PILLARS[activePillar].sanskrit}
                    </span>
                  </div>
                  <div className="w-12 h-[1px] bg-accent-bronze/25" />
                  <Body className="text-text-secondary text-base leading-relaxed font-sans font-light">
                    {PILLARS[activePillar].desc}
                  </Body>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Fallback */}
            <div className="block md:hidden w-full space-y-8">
              {PILLARS.map((pillar, i) => (
                <div key={pillar.title} className="p-6 bg-bg-ivory border border-accent-bronze/10 rounded-sm space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-serif italic text-accent-bronze text-xl block">
                      {i + 1}. {pillar.title}
                    </span>
                    <span
                      className="font-serif text-sm text-text-secondary/60"
                      style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                    >
                      {pillar.sanskrit}
                    </span>
                  </div>
                  <Body className="text-text-secondary text-sm font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </Body>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>

      {/* 9. WHAT MAKES THE GURUKULAM DISTINCTIVE */}
      <Section className="py-24 md:py-36 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4">
            <Caption className="text-accent-bronze/70">What Makes Us Distinctive</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light max-w-2xl">
              An Enduring Contribution to Cultural Renewal
            </HeadingLG>
            <div className="w-16 h-[1px] bg-accent-bronze/25 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pt-8">
            
            {/* Block 1 */}
            <div className="space-y-4">
              <span className="font-serif italic text-accent-bronze text-4xl font-light block leading-none">01</span>
              <HeadingMD className="text-xl font-light">Nāṭya as Civilisational Knowledge</HeadingMD>
              <Body className="text-text-secondary text-sm md:text-base leading-relaxed font-sans font-light">
                Approaching performance not as mere entertainment or choreographic technique, but as a complete system of aesthetics, psychology, and public ethics.
              </Body>
            </div>

            {/* Block 2 */}
            <div className="space-y-4">
              <span className="font-serif italic text-accent-bronze text-4xl font-light block leading-none">02</span>
              <HeadingMD className="text-xl font-light">Research & Publications</HeadingMD>
              <Body className="text-text-secondary text-sm md:text-base leading-relaxed font-sans font-light">
                Focusing on translating, annotating, and publishing critical commentaries on commentarial traditions like Abhinavabhāratī.
              </Body>
            </div>

            {/* Block 3 */}
            <div className="space-y-4">
              <span className="font-serif italic text-accent-bronze text-4xl font-light block leading-none">03</span>
              <HeadingMD className="text-xl font-light">Pedagogy & Curriculum</HeadingMD>
              <Body className="text-text-secondary text-sm md:text-base leading-relaxed font-sans font-light">
                Designing academic structures where transmission of artistic form and theoretical framework happens in a living relationship context.
              </Body>
            </div>

            {/* Block 4 */}
            <div className="space-y-4">
              <span className="font-serif italic text-accent-bronze text-4xl font-light block leading-none">04</span>
              <HeadingMD className="text-xl font-light">Archives & Custodianship</HeadingMD>
              <Body className="text-text-secondary text-sm md:text-base leading-relaxed font-sans font-light">
                Collecting and digitizing manuscripts, oral records, and traditional performance blueprints to preserve civilisational lineage for posterity.
              </Body>
            </div>

            {/* Block 5 */}
            <div className="space-y-4">
              <span className="font-serif italic text-accent-bronze text-4xl font-light block leading-none">05</span>
              <HeadingMD className="text-xl font-light">Civilisational Dialogue</HeadingMD>
              <Body className="text-text-secondary text-sm md:text-base leading-relaxed font-sans font-light">
                Hosting Saṃvāda circles between traditional masters, contemporary artists, philosophers, and policy makers to bridge ancient ideas with public life.
              </Body>
            </div>

            {/* Block 6 */}
            <div className="space-y-4">
              <span className="font-serif italic text-accent-bronze text-4xl font-light block leading-none">06</span>
              <HeadingMD className="text-xl font-light">Leadership Formation</HeadingMD>
              <Body className="text-text-secondary text-sm md:text-base leading-relaxed font-sans font-light">
                Providing institutional mentoring to guide future leaders, anchoring executive behavior in character, inner order, and responsibility.
              </Body>
            </div>

          </div>
        </div>
      </Section>

      {/* 10. AREAS OF ENGAGEMENT */}
      <Section className="py-24 md:py-36 bg-bg-parchment/10 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Areas of Engagement</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">Institutional Stewardship</HeadingLG>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              { id: 'I.', title: 'Study of Nāṭyaśāstra', desc: 'Rigorous study of the Nāṭyaśāstra text and its commentarial traditions, particularly Abhinavabhāratī.' },
              { id: 'II.', title: 'Embodied Practice', desc: 'Embodied practice and Nāṭya as a path of inner spiritual refinement and conscious movement.' },
              { id: 'III.', title: 'Pedagogy', desc: 'Designing educational methodologies that treat artistic transmission as character formation.' },
              { id: 'IV.', title: 'Research & Publications', desc: 'Publishing academic journals, commentaries, and research monographs on classical Indian aesthetics.' },
              { id: 'V.', title: 'Archives', desc: 'Collecting, preserving, and providing stewardship for manuscripts, audio-visual archives, and treatises.' },
              { id: 'VI.', title: 'Dialogue', desc: 'Fostering Saṃvāda (dialogue) among scholars, educators, institutions, and contemporary performers.' },
              { id: 'VII.', title: 'Leadership & Consulting', desc: 'Applying Dhārmic principles of alignment and rhythm to institutional design and leadership mentoring.' }
            ].map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <span className="font-serif italic text-accent-bronze text-sm font-semibold tracking-wider pt-1">{item.id}</span>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-lg text-text-primary leading-snug">{item.title}</h4>
                  <p className="font-sans text-[13px] text-text-secondary leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. OUR ETHOS */}
      <Section className="py-24 md:py-36 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Our Ethos</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">Enduring Principles</HeadingLG>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Inner Order before Outer Achievement', desc: 'Lasting excellence begins with inner discipline.' },
              { title: 'Truthfulness as Practice', desc: 'Learning begins with honest perception, careful discernment, and intellectual integrity.' },
              { title: 'Depth before Display', desc: 'Refinement precedes recognition.' },
              { title: 'Silence and Listening', desc: 'Deep attention is the foundation of learning.' },
              { title: 'Reverence for Lineage', desc: 'Knowledge is received with gratitude and transmitted with responsibility.' },
              { title: 'Patience before Expansion', desc: 'Growth follows readiness rather than urgency.' },
              { title: 'Education for Custodianship', desc: 'Students are formed not merely as practitioners, but as future custodians of Nāṭya and Dharma.' }
            ].map((ethos) => (
              <div key={ethos.title} className="p-6 border border-accent-bronze/10 rounded-sm bg-bg-parchment/10 space-y-3">
                <h4 className="font-serif text-lg text-text-primary font-light leading-snug">{ethos.title}</h4>
                <p className="font-sans text-xs text-text-secondary leading-relaxed font-light">{ethos.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 12. LOOKING AHEAD */}
      <Section className="py-24 md:py-36 bg-bg-parchment/20 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Caption className="text-accent-bronze/70">Looking Ahead</Caption>
          <HeadingMD className="text-2xl md:text-3xl font-light">Sthāpanā: Building the Foundations</HeadingMD>
          <Body className="text-text-secondary leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Nāṭyaśāstra Gurukulam is presently in its phase of <strong>sthāpanā</strong>, carefully consolidating its foundations, archives, pedagogic vision, and institutional relationships before expanding its public programmes.
          </Body>
          <Body className="text-text-secondary leading-relaxed font-sans font-light max-w-2xl mx-auto italic">
            Residential immersions, study circles, workshops, publications, and collaborations will continue to emerge organically. The aspiration is not rapid expansion, but enduring contribution; not institutional scale alone, but civilisational significance.
          </Body>
        </div>
      </Section>

      {/* 13. CEREMONIAL CLOSING */}
      <Section className="py-24 md:py-32 bg-bg-ivory" background="none" container={true} yOffset={0}>
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <div className="space-y-4 font-serif italic text-xl md:text-2xl text-accent-bronze tracking-wide leading-relaxed">
            <p className="m-0">The journey begins with Śāstra.</p>
            <p className="m-0">It deepens through Sādhanā.</p>
            <p className="m-0">It flowers in Saṃvāda.</p>
            <p className="m-0">It is offered in Sevā.</p>
          </div>
          
          <div className="pt-12 border-t border-accent-bronze/10 max-w-xs mx-auto">
            <p className="font-serif text-[13px] tracking-[0.2em] text-text-primary uppercase m-0">Nāṭyaśāstra Gurukulam</p>
            <p className="font-sans text-[10px] tracking-[0.15em] text-text-secondary/60 uppercase mt-2 mb-0">Navi Mumbai • Established 2025</p>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default About;
