import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import EditorialImage from '../components/EditorialImage';
import { HeadingXL, HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';
import { LotusIcon, LotusDivider, ProspectusFrame } from '../components/LotusOrnament';
import { useSEO } from '../hooks/useSEO';

const PILLARS = [
  {
    title: <span><em className="italic">Śāstra</em></span>,
    sanskrit: 'शास्त्र',
    syllable: 'शा',
    desc: <span>Rigorous study of the <em className="italic">Nāṭyaśāstra</em>, the <em className="italic">Abhinavabhāratī</em> commentary, and allied civilisational knowledge traditions. It provides the intellectual framework, preserving textual integrity and commentarial lineage.</span>
  },
  {
    title: <span><em className="italic">Sādhanā</em></span>,
    sanskrit: 'साधना',
    syllable: 'सा',
    desc: <span>Embodied learning through disciplined daily practice, movement, breath, and the refinement of perception. The physical body becomes the laboratory where theoretical knowledge is transformed into lived experience.</span>
  },
  {
    title: <span><em className="italic">Saṃvāda</em></span>,
    sanskrit: 'संवाद',
    syllable: 'सं',
    desc: <span>Dialogue rooted in humility, quiet listening, and a collective search for understanding rather than assertion. It fosters a space where scholars, practitioners, and students gather to refine their perception.</span>
  },
  {
    title: <span><em className="italic">Paramparā</em></span>,
    sanskrit: 'परम्परा',
    syllable: 'प',
    desc: <span>Transmission of wisdom through living lineages and relationships. Rather than an academic transaction, learning is nurtured in the presence of teachers who embody the values they transmit.</span>
  },
  {
    title: <span><em className="italic">Rasa</em></span>,
    sanskrit: 'रस',
    syllable: 'र',
    desc: <span>The cultivation of refined aesthetic perception as the cornerstone of education, culture, and life. It represents the ultimate aesthetic delight and spiritual transcendence that <em className="italic">Nāṭya</em> evokes.</span>
  },
  {
    title: <span><em className="italic">Dharma</em></span>,
    sanskrit: 'धर्म',
    syllable: 'ध',
    desc: <span>Orienting knowledge toward responsibility, inner order, and service. It anchors all technical skill and intellectual inquiry in ethical custodianship and contribution to the community.</span>
  }
];

const MILESTONES = [
  {
    id: 1,
    title: <span>The First <em className="italic">Saṅkalpa</em></span>,
    subtitle: <span><em className="italic">Tattvāloka</em> Onward March to <em className="italic">Rāma Rājya</em> | 2018</span>,
    link: "https://sites.google.com/view/ramarajya/",
    linkText: <span><em className="italic">Tattvāloka</em> Onward March to <em className="italic">Rāma Rājya</em></span>,
    desc: (
      <span>
        Early conversations within the{' '}
        <a
          href="https://sites.google.com/view/ramarajya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-bronze font-medium hover:underline inline-flex items-center"
        >
          <em className="italic">Tattvāloka</em> Onward March to <em className="italic">Rāma Rājya</em>
        </a>{' '}
        initiative opened an inquiry into <em className="italic">Nāṭya</em>, aesthetics, pedagogy, <em className="italic">Dharma</em>, and the renewal of public life.
      </span>
    ),
    image: "/assets/images/Raam_Rajya.jpeg",
    imageAlt: "Panel Discussion on Rāma Rājya Vision and Values for Today",
    imageCaption: (
      <span>
        <span className="font-semibold text-accent-bronze block mb-1">Panel Discussion (July 14, 2019 • Delhi):</span>
        (L-R) Eminent scholar of <em className="italic">Nāṭyaśāstra</em> Padma Shri Bharat Gupt, Senior Journalist Pramit Pal Chaudhury, Padma Bhushan Dr. M. B. Athreya, Eminent Danseuse Smt. Rama Vaidyanathan, Sri Anil Patni, Dr. Padmaja Suresh in the panel discussion on <em><em className="italic">Rāma Rājya</em> Vision and Values for Today</em>, organised as part of the Onward March to Rama Rajya Campaign in Delhi.
      </span>
    )
  },
  {
    id: 2,
    title: <span><em className="italic">Mārga Darśana</em></span>,
    subtitle: "2019–2024",
    desc: (
      <span>
        Through years of study, teaching, yoga, research, civic engagement, and sustained dialogue, the need for a dedicated <em className="italic">Gurukulam</em> devoted to <em className="italic">Nāṭya</em> as a living knowledge system gradually became clear.<br className="mb-2" />
        Under the guidance of Padma Bhushan Dr. M. B. Athreya and Karnataka Kalashri Dr. Padmaja Suresh, the vision began to acquire pedagogical and institutional form.
      </span>
    )
  },
  {
    id: 3,
    title: "Emergence",
    subtitle: "The Vision Takes Form | 2025",
    desc: (
      <span>
        The <em className="italic">saṅkalpa</em> moved from sustained inquiry towards institutional formation, bringing together the <em className="italic">Gurukulam</em>'s vision of <em className="italic">śāstra</em>, <em className="italic">sādhanā</em>, <em className="italic">saṃvāda</em>, and civilisational renewal.
      </span>
    )
  },
  {
    id: 4,
    title: "Consecration",
    subtitle: <span><em className="italic">Pratiṣṭhā Samāroham</em></span>,
    date: "23 November 2025 | Navi Mumbai",
    desc: (
      <span>
        The <em className="italic">Nāṭyaśāstra Gurukulam</em> was consecrated at Śrī <em className="italic">Subrahmaṇya</em> <em className="italic">Sevā</em> <em className="italic">Samāj</em>, Navi Mumbai, through a sacred gathering of <em className="italic">Vedic</em> invocation, consecratory rites, dance, music, reflection, and dialogue. The <em className="italic">Pratiṣṭhā Samāroham</em> marked not merely an inauguration, but the formal consecration of the <em className="italic">Gurukulam</em>'s <em className="italic">saṅkalpa</em>.
      </span>
    ),
    image: "/assets/images/sishyas_natya_seva_thumb.webp",
    imageAlt: "Pratiṣṭhā Consecration Dance Offering - Sishyas of Smt. Charanya Gurusathya",
    cardLayout: true
  },
  {
    id: 5,
    title: <span><em className="italic">Sthāpanā</em></span>,
    subtitle: "Today",
    desc: (
      <span>
        The <em className="italic">Gurukulam</em> now enters its phase of <em className="italic">sthāpanā</em>, patiently establishing its pedagogical foundations, research, relationships, and institutional rhythm.<br className="mb-1" />
        Its work unfolds through <em className="italic">sādhanā</em>, study, dialogue, publication, and service, with growth guided by readiness rather than urgency.
      </span>
    )
  }
];

export const About = () => {
  useSEO({
    title: 'About the Gurukulam - Lineage & Vision',
    description: 'Learn about the foundations of the Nāṭyaśāstra Gurukulam, our spiritual lineage, Ācāryās, and our vision of Śāstra, Sādhanā, and Saṃvāda.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About the Gurukulam',
      'description': 'Foundational history, spiritual lineage, and pedagogical vision of the Nāṭyaśāstra Gurukulam.',
      'mainEntity': {
        '@type': 'EducationalOrganization',
        'name': 'Nāṭyaśāstra Gurukulam',
        'description': 'An institution dedicated to the study, practice, and transmission of the Nāṭyaśāstra and its allied knowledge traditions.'
      }
    }
  });

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
      <Section className="min-h-[65vh] flex flex-col justify-start pt-8 pb-16 md:pt-12 md:pb-20 relative border-b border-accent-bronze/10" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 px-4 pt-4 md:pt-6">
          <Caption className="text-accent-bronze tracking-[0.35em] text-sm md:text-base font-semibold uppercase">
            ABOUT THE GURUKULAM
          </Caption>
          
          <HeadingXL as="h1" className="text-4xl md:text-6xl lg:text-[74px] font-light leading-[1.08] tracking-tight">
            A <em className="italic">Gurukulam</em> for <em className="italic">Śāstra</em>, <em className="italic">Sādhanā</em>, and Civilisational Renewal
          </HeadingXL>
          
          <div className="w-16 h-[1px] bg-accent-bronze/30 mx-auto my-6" />
          
          <BodyLG className="max-w-3xl mx-auto text-lg md:text-2xl text-text-secondary leading-relaxed font-sans font-light">
            Dedicated to the study, practice, and transmission of the <em className="italic">Nāṭyaśāstra</em> and its allied knowledge traditions.
          </BodyLG>

          {/* Animated Scroll Down Indicator */}
          <div 
            className="pt-6 md:pt-10 flex flex-col items-center cursor-pointer group select-none relative z-10"
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.55, behavior: 'smooth' })}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-bronze opacity-80 group-hover:opacity-100 transition-opacity font-semibold">
              Scroll to Discover
            </span>
            <div className="mt-2 p-1.5 rounded-full border border-accent-bronze/30 group-hover:border-accent-bronze bg-bg-ivory shadow-xs transition-all animate-bounce">
              <ChevronDown className="w-4 h-4 text-accent-bronze" />
            </div>
          </div>
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
      <Section className="py-14 md:py-24 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
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
                Conceived as a modern <em className="italic">Gurukulam</em> rooted in timeless principles, it seeks to restore an integrated model of learning in which <em className="italic">śāstra</em> (knowledge), <em className="italic">sādhanā</em> (refinement of the self through practice), and <em className="italic">saṃvāda</em> (dialogue) are held together within a <em className="italic">Dhārmic</em> framework.
              </p>
              <p>
                While grounded in the classical performing arts, the <em className="italic">Gurukulam</em> understands <em className="italic">Nāṭya</em> as far more than performance. It is embodied knowledge, a disciplined means of refining perception, cultivating <em className="italic">rasa</em>, strengthening ethical awareness, and shaping individuals capable of contributing meaningfully to culture and public life.
              </p>
              <p>
                In an age marked by fragmentation, speed, and distraction, the <em className="italic">Gurukulam</em> affirms depth, attentiveness, beauty, and inward cultivation as enduring civilisational values.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. OUR STORY */}
      <Section className="py-14 md:py-24 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Caption className="text-accent-bronze/70">Our Story</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">The Path of Consecration</HeadingLG>
            <Body className="text-text-secondary text-base md:text-lg leading-relaxed font-light pt-2">
              The <em className="italic">Gurukulam</em> did not emerge as an institutional project conceived at a single moment. It unfolded gradually through conversations, guidance, study, practice, and a deepening <em className="italic">saṅkalpa</em>.
            </Body>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Center line for timeline on desktop */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-accent-bronze/10 -translate-x-1/2" />

              <div className="space-y-16">
                {MILESTONES.map((milestone, idx) => {
                  const isEven = idx % 2 === 1;

                  if (milestone.cardLayout) {
                    return (
                      <div key={milestone.id} className="relative flex items-center">
                        <div className="absolute left-1/2 w-4 h-4 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-1/2 -translate-y-1/2 z-10" />
                        
                        <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 order-2'}`}>
                          <div className={`max-w-md rounded border border-accent-bronze/20 overflow-hidden shadow-sm bg-bg-parchment/20 p-5 space-y-4 text-left ${isEven ? 'ml-auto' : ''}`}>
                            <span className="font-serif italic text-accent-bronze text-xl font-medium block">{milestone.title}</span>
                            <HeadingMD className="text-2xl font-light text-text-primary">{milestone.subtitle}</HeadingMD>
                            <div className="font-sans text-xs uppercase tracking-wider text-accent-bronze/80 font-semibold mb-2">
                              {milestone.date}
                            </div>
                            <img
                              src={milestone.image}
                              alt={milestone.imageAlt}
                              className="w-full aspect-[16/10] object-cover filter contrast-[1.03] sepia-[0.05] border border-accent-bronze/10 rounded-md"
                              loading="lazy"
                            />
                            <Body className="text-text-secondary text-xs md:text-sm leading-relaxed mt-3 mb-0">
                              {milestone.desc}
                            </Body>
                          </div>
                        </div>
                        
                        <div className={`w-1/2 ${isEven ? 'order-2' : ''}`} />
                      </div>
                    );
                  }

                  return (
                    <div key={milestone.id} className="relative flex items-stretch">
                      <div className="absolute left-1/2 w-3 h-3 bg-accent-bronze rounded-full border-4 border-bg-ivory -translate-x-1/2 top-1.5 z-10" />
                      
                      <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 order-2'}`}>
                        <span className="font-serif italic text-accent-bronze/80 text-lg block mb-1">
                          {milestone.title}
                        </span>
                        <HeadingMD className="text-xl mb-1 font-light text-text-primary">
                          {milestone.link ? (
                            <a
                              href={milestone.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent-bronze transition-colors underline decoration-accent-bronze/40 underline-offset-4"
                            >
                              {milestone.linkText}
                            </a>
                          ) : (
                            milestone.subtitle
                          )}
                        </HeadingMD>
                        <Body className="text-text-secondary text-sm md:text-base leading-relaxed mt-2">
                          {milestone.desc}
                        </Body>
                        
                        {milestone.image && (
                          <div className={`mt-4 rounded-lg bg-bg-parchment/30 border border-accent-bronze/15 overflow-hidden text-left shadow-sm ${isEven ? 'ml-auto' : ''}`}>
                            <img
                              src={milestone.image}
                              alt={milestone.imageAlt}
                              className="w-full aspect-[16/10] object-cover filter contrast-[1.03] sepia-[0.05] border-b border-accent-bronze/10"
                              loading="lazy"
                            />
                            {milestone.imageCaption && (
                              <div className="p-3.5 text-xs font-sans text-text-stone-grey leading-relaxed">
                                {milestone.imageCaption}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className={`w-1/2 ${isEven ? 'order-2' : ''}`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Touch-Swipeable Horizontal Timeline */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 md:hidden pb-4">
              {MILESTONES.map((milestone) => (
                <div key={milestone.id} className="flex-none w-[88%] snap-start bg-white border border-accent-bronze/15 p-4 rounded-xl flex flex-col justify-between shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-accent-bronze/10 pb-2">
                      <span className="font-serif italic text-accent-bronze text-base font-semibold">
                        {milestone.title}
                      </span>
                      <span className="font-sans text-[10px] font-semibold text-text-secondary/70 uppercase">
                        {milestone.id === 5 ? "Today" : `Step ${milestone.id}`}
                      </span>
                    </div>
                    
                    {milestone.date ? (
                      <div className="text-[10px] uppercase tracking-wider text-accent-bronze font-semibold">
                        {milestone.date}
                      </div>
                    ) : (
                      <div className="font-sans text-[11px] uppercase tracking-wider text-text-secondary/80 font-medium">
                        {milestone.subtitle}
                      </div>
                    )}
                    
                    <div className="text-text-secondary text-[13px] font-sans font-light leading-relaxed m-0">
                      {milestone.desc}
                    </div>

                    {milestone.image && (
                      <div className="mt-3 rounded-lg overflow-hidden border border-accent-bronze/10 bg-bg-parchment/10">
                        <img
                          src={milestone.image}
                          alt={milestone.imageAlt}
                          className="w-full aspect-[16/10] object-cover"
                          loading="lazy"
                        />
                        {milestone.imageCaption && (
                          <div className="p-2.5 text-[10px] font-sans text-text-stone-grey leading-normal bg-bg-parchment/20 border-t border-accent-bronze/5">
                            {milestone.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. OUR VISION (Inspired by PDF Page 3) */}
      <Section className="py-12 md:py-16 bg-[#F5F0E6] border-b border-[#9E743B]/20" background="none" container={true} yOffset={0}>
        <div className="max-w-4xl mx-auto px-4">
          <ProspectusFrame innerClassName="p-5 xs:p-6 sm:p-14 text-center">
            
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#9E743B] font-bold block mb-2">
              FOUNDING VISION STATEMENT
            </span>

            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#6B1D1E] leading-[1.3] font-normal tracking-wide max-w-3xl mx-auto uppercase">
              AN INSTITUTION CONTRIBUTING, IN PERPETUITY, TO THE <em className="italic">DHĀRMIC</em> RENEWAL OF PUBLIC LIFE IN INDIA AND BEYOND—THROUGH GRADUATES WHO EMBODY THE SPIRIT OF <em className="italic">RĀMA RĀJYAM</em>, WITH A <em className="italic">SĀTVIC</em> BLEND OF <em className="italic">DHARMA</em>, <em className="italic">SEVĀ</em>, SELF-TRANSCENDENCE, AND AESTHETIC LEADERSHIP.
            </h2>

            <LotusDivider className="my-6" />

            <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#7A5428] leading-relaxed max-w-2xl mx-auto font-light">
              Rooted in <em className="italic">Nāṭyaśāstra</em> and its allied disciplines, the <em className="italic">Gurukulam</em> nurtures custodians of <em className="italic">rasa</em>, rhythm, and responsibility—where presence is pedagogy, and governance flows from inner rhythm.
            </p>

            <div className="pt-6 border-t border-[#9E743B]/20 mt-6 max-w-md mx-auto">
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#9E743B] block">
                Consecrated through the <em className="italic">Pratiṣṭhā Samāroham</em>
              </span>
              <span className="font-sans text-[11px] text-[#4A423B] tracking-wider block mt-1">
                23 November 2025 • Navi Mumbai
              </span>
            </div>

          </ProspectusFrame>
        </div>
      </Section>

      {/* NEW: THE WORK BEFORE OUR GENERATION (Inspired by PDF Page 4) */}
      <Section className="py-14 md:py-20 bg-[#FAF6F0] border-b border-[#9E743B]/20" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 4 Pillars */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <Caption className="text-[#9E743B] tracking-[0.3em]">Civilisational Imperative</Caption>
                <HeadingLG className="text-3xl md:text-4xl font-light text-[#6B1D1E]">
                  The Work Before Our Generation
                </HeadingLG>
                <LotusDivider className="justify-start my-3" />
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <LotusIcon className="w-6 h-6 text-[#9E743B] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-semibold text-[#6B1D1E]">Information vs. Formation</h4>
                    <p className="font-sans text-sm text-[#4A423B] leading-relaxed font-light">
                      Our age has multiplied information. Yet formation has become increasingly rare.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <LotusIcon className="w-6 h-6 text-[#9E743B] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-semibold text-[#6B1D1E]">Leadership & Self-Cultivation</h4>
                    <p className="font-sans text-sm text-[#4A423B] leading-relaxed font-light">
                      Leadership has become increasingly separated from self-cultivation. Institutions now ask what people know long before asking who they are becoming.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <LotusIcon className="w-6 h-6 text-[#9E743B] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-semibold text-[#6B1D1E]">Beauty & Ethics</h4>
                    <p className="font-sans text-sm text-[#4A423B] leading-relaxed font-light">
                      Beauty has gradually been separated from ethics. The aesthetic and the moral no longer educate one another.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <LotusIcon className="w-6 h-6 text-[#9E743B] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-semibold text-[#6B1D1E]">Cultivating Custodians</h4>
                    <p className="font-sans text-sm text-[#4A423B] leading-relaxed font-light">
                      Civilisations endure when institutions cultivate custodians rather than consumers. <em className="font-serif font-medium text-[#6B1D1E]">This is the work before us.</em>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F0E6] border-l-3 border-[#9E743B]">
                <p className="font-serif italic text-base text-[#6B1D1E] font-medium m-0">
                  “Art refines perception before it shapes conduct.”
                </p>
              </div>
            </div>

            {/* Right Column: Practitioner Image with Diya framing */}
            <div className="lg:col-span-5 max-w-md mx-auto w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#9E743B]/30 bg-[#1E1C1A]">
                <img
                  src="/assets/images/sishyas_natya_seva_thumb.webp"
                  alt="Practitioner by lamp"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[400px] object-cover object-top filter brightness-[0.95] contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#9E743B] font-bold block">
                    Embodied Discipline
                  </span>
                  <p className="font-serif text-sm font-light leading-snug">
                    Refining inner order, attention, and aesthetic sensitivity.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 6. WHY NĀṬYAŚĀSTRA KNOWLEDGE WHEEL (Inspired by PDF Page 5) */}
      <Section className="py-14 md:py-20 bg-[#F5F0E6] border-b border-[#9E743B]/20" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Caption className="text-[#9E743B] tracking-[0.3em]">A Living Knowledge Tradition</Caption>
            <HeadingLG className="text-3xl md:text-5xl font-light text-[#6B1D1E]">
              Why the <em className="italic">Nāṭyaśāstra</em>?
            </HeadingLG>
            <p className="font-serif italic text-base text-[#7A5428]">
              It brings together aesthetics, ethics, pedagogy, psychology, philosophy, and social order within a single coherent vision of human formation.
            </p>
            <LotusDivider className="my-3" />
          </div>

          {/* PDF Page 5 Interactive Circular Knowledge Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4 overflow-hidden mx-auto">
                <div className="w-full h-full relative flex items-center justify-center origin-center">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-4 rounded-full border border-[#9E743B]/25 border-dashed" />
                  <div className="absolute inset-16 rounded-full border border-[#9E743B]/15" />

                  {/* Center Circle: NĀṬYAŚĀSTRA */}
                  <div className="absolute z-20 w-28 h-28 sm:w-32 sm:h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6B1D1E] text-white flex flex-col items-center justify-center text-center p-2 shadow-xl border-2 border-[#9E743B]">
                    <LotusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#9E743B] mb-0.5" fill="currentColor" />
                    <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider"><em className="italic">Nāṭyaśāstra</em></span>
                  </div>

                  {/* 6 Orbiting Nodes */}
                  {[
                    { title: 'ETHICS', sans: 'Dharma', style: { left: '50%', top: '12%' } },
                    { title: 'AESTHETICS', sans: 'Rasa', style: { left: '82.9%', top: '31%' } },
                    { title: 'PEDAGOGY', sans: 'Śikṣā', style: { left: '82.9%', top: '69%' } },
                    { title: 'PHILOSOPHY', sans: 'Darśana', style: { left: '50%', top: '88%' } },
                    { title: 'LEADERSHIP', sans: 'Nīti', style: { left: '17.1%', top: '69%' } },
                    { title: 'COMMUNITY', sans: 'Saṅgha', style: { left: '17.1%', top: '31%' } }
                  ].map((node) => (
                    <div
                      key={node.title}
                      className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAF6F0] border border-[#9E743B]/40 shadow-md flex flex-col items-center justify-center text-center p-1.5 sm:p-2 hover:border-[#6B1D1E] transition-all"
                      style={node.style}
                    >
                      <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider font-bold text-[#6B1D1E] leading-tight">{node.title}</span>
                      <span className="font-serif italic text-[10px] sm:text-xs text-[#9E743B] mt-0.5">({node.sans})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side PDF Page 5 Callouts */}
            <div className="lg:col-span-5 space-y-6">
              <ProspectusFrame innerClassName="p-6 space-y-4">
                <span className="font-serif text-xs uppercase tracking-widest text-[#9E743B] font-bold block">
                  Core Pedagogic Formation
                </span>
                <p className="font-serif italic text-base text-[#6B1D1E] leading-relaxed">
                  "The <em className="italic">Gurukulam</em> forms Player–Performers–Practitioners who understand <em className="italic">Nāṭya</em> as a discipline of becoming before it is an act of performance."
                </p>
              </ProspectusFrame>

              <div className="space-y-4 text-[#4A423B] font-sans text-sm leading-relaxed font-light">
                  <p>
                    The <em className="italic">Gurukulam</em> does not seek to apply modern leadership theories to the <em className="italic">Nāṭyaśāstra</em>. It seeks to allow the <em className="italic">Nāṭyaśāstra</em> itself to shape a new understanding of leadership, education, and public life.
                  </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 7. WHY A GURUKULAM */}
      <Section className="py-14 md:py-24 bg-[#FAF6F0] border-b border-[#9E743B]/10" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 w-full max-w-md mx-auto order-2 lg:order-1">
              <EditorialImage
                src="/assets/images/sishyas_natya_seva_thumb.webp"
                alt="Nāṭya practitioners undergoing immersion and training"
                aspectRatio="aspect-[4/5]"
                caption={<span><em className="italic">Nāṭya</em> practitioners being trained in a temple <em className="italic">Gurukulam</em></span>}
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
                A <em className="italic">Gurukulam</em> is a place where knowledge is transmitted through relationship rather than information alone; where study is inseparable from practice; where dialogue is grounded in humility; and where education seeks to shape character as much as competence.
              </Body>
              <Body className="text-text-secondary leading-relaxed font-sans font-light">
                Learning unfolds through living relationships, shared practice, quiet dialogue, and a deep reverence for the lineage, preserving the authentic transmission across generations.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. GUIDING INFLUENCES */}
      <Section className="py-14 md:py-24 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Guiding Influences</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">Anchors of the Tradition</HeadingLG>
          </div>

          {/* Guiding Influences: 3-column grid for senior mentors / Horizontal scroll on mobile */}
          <div className="space-y-12">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 pb-4 md:grid md:grid-cols-3 md:gap-8 md:mx-0 md:px-0 items-stretch">
              
              {/* Mentor 1 */}
              <div className="flex-none w-[85%] md:w-auto snap-start flex flex-row md:flex-col items-center md:items-stretch gap-4 md:gap-4 bg-bg-parchment/10 p-4 md:p-6 border border-accent-bronze/10 rounded-xl shadow-sm md:shadow-none">
                <div className="w-24 h-32 md:w-full md:h-auto md:aspect-[3/4] shrink-0 overflow-hidden border border-accent-bronze/10 bg-[#1E1C1A] rounded-lg">
                  <img
                    src="/assets/images/dr_athreya_thumb.webp"
                    alt="Padma Bhushan Dr. M. B. Athreya"
                    className="w-full h-full object-cover filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2 flex-1">
                  <h4 className="font-serif text-base md:text-lg leading-tight text-text-primary">Padma Bhushan Dr. M. B. Athreya</h4>
                  <p className="font-sans text-[12px] md:text-[13px] text-text-secondary leading-relaxed font-light">
                    Pioneer of the Indian Management Movement. A distinguished thinker who seeks to integrate modern organisational systems with <em className="italic">Dhārmic</em> vision.
                  </p>
                </div>
              </div>

              {/* Mentor 2 */}
              <div className="flex-none w-[85%] md:w-auto snap-start flex flex-row md:flex-col items-center md:items-stretch gap-4 md:gap-4 bg-bg-parchment/10 p-4 md:p-6 border border-accent-bronze/10 rounded-xl shadow-sm md:shadow-none">
                <div className="w-24 h-32 md:w-full md:h-auto md:aspect-[3/4] shrink-0 overflow-hidden border border-accent-bronze/10 bg-[#1E1C1A] rounded-lg">
                  <img
                    src="/assets/images/dr_padmaja_suresh_thumb.webp"
                    alt="Karnataka Kalashri Dr. Padmaja Suresh"
                    className="w-full h-full object-cover filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2 flex-1">
                  <h4 className="font-serif text-base md:text-lg leading-tight text-text-primary">Karnataka Kalashri Dr. Padmaja Suresh</h4>
                  <p className="font-sans text-[12px] md:text-[13px] text-text-secondary leading-relaxed font-light">
                    Acclaimed danseuse, scholar, and author whose life's work bridges classical training with deep research into the relationship between <em className="italic">Nāṭya</em> and <em className="italic">Sādhanā</em>.
                  </p>
                </div>
              </div>

              {/* Mentor 3 */}
              <div className="flex-none w-[85%] md:w-auto snap-start flex flex-row md:flex-col items-center md:items-stretch gap-4 md:gap-4 bg-bg-parchment/10 p-4 md:p-6 border border-accent-bronze/10 rounded-xl shadow-sm md:shadow-none">
                <div className="w-24 h-32 md:w-full md:h-auto md:aspect-[3/4] shrink-0 overflow-hidden border border-accent-bronze/10 bg-[#1E1C1A] rounded-lg">
                  <img
                    src="/assets/images/sri_kv_subrahmonyam_thumb.webp"
                    alt="Śrī K. V. Subrahmoṇyan"
                    className="w-full h-full object-cover filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2 flex-1">
                  <h4 className="font-serif text-base md:text-lg leading-tight text-text-primary">Śrī K. V. Subrahmoṇyan</h4>
                  <p className="font-sans text-[12px] md:text-[13px] text-text-secondary leading-relaxed font-light">
                    Revered disciple in the lineage of <em className="italic">Bhagavān</em> Śrī <em className="italic">Ramaṇa</em> <em className="italic">Maharṣi</em>. Offers <em className="italic">Vedāntic</em> clarity, gentle witnessing presence, and spiritual anchoring.
                  </p>
                </div>
              </div>

            </div>

            {/* Yajamāna & Yojaka Block positioned below the three seniors */}
            <div className="pt-8 border-t border-accent-bronze/15 max-w-3xl mx-auto">
              <div className="bg-bg-parchment/20 p-4 sm:p-8 rounded-xl border border-accent-bronze/20 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <div className="w-28 h-36 shrink-0 rounded-lg overflow-hidden border border-accent-bronze/20 bg-[#1E1C1A]">
                  <img
                    src="/assets/images/rohit_viswanath_thumb.webp"
                    alt="Rohit Viswanath - Yajamāna & Yojaka"
                    className="w-full h-full object-cover object-bottom filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="px-3 py-1 bg-accent-bronze/10 text-accent-bronze font-sans text-[10px] uppercase tracking-widest font-bold rounded-md inline-block">
                    YAJAMĀNA & YOJAKA
                  </span>
                  <h4 className="font-serif text-xl leading-tight text-text-primary">Rohit Viswanath</h4>
                  <p className="font-sans text-[13px] text-text-secondary leading-relaxed font-light">
                    Serves the <em className="italic">Gurukulam</em> as <em className="italic">Yajamāna</em> & <em className="italic">Yojaka</em>, stewarding the consecrated <em className="italic">saṅkalpa</em> with fidelity, humility, and care to facilitate institutional form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. THE SIX PILLARS */}
      <Section className="py-14 md:py-24 bg-bg-parchment/10 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Foundational Framework</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">The Six Pillars of <em className="italic">Nāṭya</em></HeadingLG>
            <p className="font-sans text-xs uppercase tracking-wider text-text-secondary/70">
              <span className="hidden md:inline">Hover or click nodes to explore the dimensions</span>
              <span className="md:hidden text-accent-bronze font-semibold">Swipe horizontal to explore →</span>
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
                  className="font-serif text-[11px] font-medium tracking-[0.25em] fill-accent-bronze select-none italic"
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
                        className={`font-sans text-[10px] uppercase tracking-[0.2em] select-none transition-colors duration-300 italic ${
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

            {/* Mobile Touch-Swipeable Horizontal Carousel */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 -mx-4 px-4 md:hidden pb-3">
              {PILLARS.map((pillar, i) => (
                <div key={pillar.title} className="flex-none w-[85%] sm:w-[82%] snap-start p-4 sm:p-5 bg-white border border-accent-bronze/20 rounded-xl space-y-2 shadow-md">
                  <div className="flex justify-between items-baseline">
                    <span className="font-serif italic text-accent-bronze text-xl font-medium block">
                      {i + 1}. {pillar.title}
                    </span>
                    <span
                      className="font-serif text-sm text-text-secondary/60"
                      style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                    >
                      {pillar.sanskrit}
                    </span>
                  </div>
                  <Body className="text-text-secondary text-[13px] font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </Body>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>

      {/* 9. WHAT MAKES THE GURUKULAM DISTINCTIVE */}
      <Section className="py-14 md:py-24 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <div className="space-y-4">
            <Caption className="text-accent-bronze/70">What Makes Us Distinctive</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light max-w-2xl">
              An Enduring Contribution to Cultural Renewal
            </HeadingLG>
            <div className="w-16 h-[1px] bg-accent-bronze/25 mt-4" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between md:hidden text-[10px] uppercase tracking-widest text-[#757069]">
              <span>Distinctive Pillars</span>
              <span className="text-accent-bronze font-semibold">Swipe →</span>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-16 pb-3 md:pb-0 items-stretch">
              
              {/* Block 1 */}
              <div className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl space-y-2">
                <span className="font-serif italic text-accent-bronze text-3xl md:text-4xl font-light block leading-none">01</span>
                <HeadingMD className="text-lg md:text-xl font-light"><em className="italic">Nāṭya</em> as Civilisational Knowledge</HeadingMD>
                <Body className="text-text-secondary text-[13px] md:text-base leading-relaxed font-sans font-light">
                  Approaching performance not as mere entertainment or choreographic technique, but as a complete system of aesthetics, psychology, and public ethics.
                </Body>
              </div>

              {/* Block 2 */}
              <div className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl space-y-2">
                <span className="font-serif italic text-accent-bronze text-3xl md:text-4xl font-light block leading-none">02</span>
                <HeadingMD className="text-lg md:text-xl font-light">Research & Publications</HeadingMD>
                <Body className="text-text-secondary text-[13px] md:text-base leading-relaxed font-sans font-light">
                  Focusing on translating, annotating, and publishing critical commentaries on commentarial traditions like <em className="italic">Abhinavabhāratī</em>.
                </Body>
              </div>

              {/* Block 3 */}
              <div className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl space-y-2">
                <span className="font-serif italic text-accent-bronze text-3xl md:text-4xl font-light block leading-none">03</span>
                <HeadingMD className="text-lg md:text-xl font-light">Pedagogy & Curriculum</HeadingMD>
                <Body className="text-text-secondary text-[13px] md:text-base leading-relaxed font-sans font-light">
                  Designing academic structures where transmission of artistic form and theoretical framework happens in a living relationship context.
                </Body>
              </div>

              {/* Block 4 */}
              <div className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl space-y-2">
                <span className="font-serif italic text-accent-bronze text-3xl md:text-4xl font-light block leading-none">04</span>
                <HeadingMD className="text-lg md:text-xl font-light">Archives & Custodianship</HeadingMD>
                <Body className="text-text-secondary text-[13px] md:text-base leading-relaxed font-sans font-light">
                  Collecting and digitizing manuscripts, oral records, and traditional performance blueprints to preserve civilisational lineage for posterity.
                </Body>
              </div>

              {/* Block 5 */}
              <div className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl space-y-2">
                <span className="font-serif italic text-accent-bronze text-3xl md:text-4xl font-light block leading-none">05</span>
                <HeadingMD className="text-lg md:text-xl font-light">Civilisational Dialogue</HeadingMD>
                <Body className="text-text-secondary text-[13px] md:text-base leading-relaxed font-sans font-light">
                  Hosting <em className="italic">Saṃvāda</em> circles between traditional masters, contemporary artists, philosophers, and policy makers to bridge ancient ideas with public life.
                </Body>
              </div>

              {/* Block 6 */}
              <div className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl space-y-2">
                <span className="font-serif italic text-accent-bronze text-3xl md:text-4xl font-light block leading-none">06</span>
                <HeadingMD className="text-lg md:text-xl font-light">Leadership Formation</HeadingMD>
                <Body className="text-text-secondary text-[13px] md:text-base leading-relaxed font-sans font-light">
                  Providing institutional mentoring to guide future leaders, anchoring executive behavior in character, inner order, and responsibility.
                </Body>
              </div>

            </div>
          </div>
        </div>
      </Section>

      {/* 10. AREAS OF ENGAGEMENT */}
      <Section className="py-14 md:py-24 bg-bg-parchment/10 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Areas of Engagement</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">Institutional Stewardship</HeadingLG>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between md:hidden text-[10px] uppercase tracking-widest text-[#757069]">
              <span>Engagement Areas</span>
              <span className="text-accent-bronze font-semibold">Swipe →</span>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-10 pb-3 md:pb-0 items-stretch">
              {[
                { id: 'I.', title: <span>Study of <em className="italic">Nāṭyaśāstra</em></span>, desc: <span>Rigorous study of the <em className="italic">Nāṭyaśāstra</em> text and its commentarial traditions, particularly <em className="italic">Abhinavabhāratī</em>.</span> },
                { id: 'II.', title: 'Embodied Practice', desc: <span>Embodied practice and <em className="italic">Nāṭya</em> as a path of inner spiritual refinement and conscious movement.</span> },
                { id: 'III.', title: 'Pedagogy', desc: 'Designing educational methodologies that treat artistic transmission as character formation.' },
                { id: 'IV.', title: 'Research & Publications', desc: 'Publishing academic journals, commentaries, and research monographs on classical Indian aesthetics.' },
                { id: 'V.', title: 'Archives', desc: 'Collecting, preserving, and providing stewardship for manuscripts, audio-visual archives, and treatises.' },
                { id: 'VI.', title: 'Dialogue', desc: <span>Fostering <em className="italic">Saṃvāda</em> (dialogue) among scholars, educators, institutions, and contemporary performers.</span> },
                { id: 'VII.', title: 'Leadership & Consulting', desc: <span>Applying <em className="italic">Dhārmic</em> principles of alignment and rhythm to institutional design and leadership mentoring.</span> }
              ].map((item) => (
                <div key={item.id} className="flex-none w-[85%] md:w-auto snap-start p-4 md:p-0 bg-white md:bg-transparent border md:border-none border-accent-bronze/15 rounded-xl flex gap-3.5 items-start">
                  <span className="font-serif italic text-accent-bronze text-sm font-semibold tracking-wider pt-1">{item.id}</span>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-serif text-base sm:text-lg text-text-primary leading-snug">{item.title}</h4>
                    <p className="font-sans text-[12px] sm:text-[13px] text-text-secondary leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 11. OUR ETHOS */}
      <Section className="py-14 md:py-24 border-b border-accent-bronze/5" background="none" container={true} yOffset={0}>
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4">
            <Caption className="text-accent-bronze/70">Our Ethos</Caption>
            <HeadingLG className="text-3xl md:text-4xl font-light">Enduring Principles</HeadingLG>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between md:hidden text-[10px] uppercase tracking-widest text-[#757069]">
              <span>Enduring Principles</span>
              <span className="text-accent-bronze font-semibold">Swipe →</span>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-3 md:pb-0 items-stretch">
              {[
                { title: 'Inner Order before Outer Achievement', desc: 'Lasting excellence begins with inner discipline.' },
                { title: 'Truthfulness as Practice', desc: 'Learning begins with honest perception, careful discernment, and intellectual integrity.' },
                { title: 'Depth before Display', desc: 'Refinement precedes recognition.' },
                { title: 'Silence and Listening', desc: 'Deep attention is the foundation of learning.' },
                { title: 'Reverence for Lineage', desc: 'Knowledge is received with gratitude and transmitted with responsibility.' },
                { title: 'Patience before Expansion', desc: 'Growth follows readiness rather than urgency.' },
                { title: 'Education for Custodianship', desc: <span>Students are formed not merely as practitioners, but as future custodians of <em className="italic">Nāṭya</em> and <em className="italic">Dharma</em>.</span> }
              ].map((ethos) => (
                <div key={ethos.title} className="flex-none w-[85%] md:w-auto snap-start p-4 sm:p-6 border border-accent-bronze/15 rounded-xl bg-white md:bg-bg-parchment/10 space-y-2 shadow-sm md:shadow-none">
                  <h4 className="font-serif text-base sm:text-lg text-text-primary font-light leading-snug">{ethos.title}</h4>
                  <p className="font-sans text-[12px] sm:text-xs text-text-secondary leading-relaxed font-light">{ethos.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 13. CEREMONIAL CLOSING */}
      <Section className="py-14 md:py-22 bg-bg-ivory" background="none" container={true} yOffset={0}>
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <div className="space-y-4 font-serif italic text-xl md:text-2xl text-accent-bronze tracking-wide leading-relaxed">
            <p className="m-0">The journey begins with <em className="italic">Śāstra</em>.</p>
            <p className="m-0">It deepens through <em className="italic">Sādhanā</em>.</p>
            <p className="m-0">It flowers in <em className="italic">Saṃvāda</em>.</p>
            <p className="m-0">It is offered in <em className="italic">Sevā</em>.</p>
          </div>
          
          <div className="pt-12 border-t border-accent-bronze/10 max-w-xs mx-auto">
            <p className="font-serif text-[13px] tracking-[0.2em] text-text-primary uppercase m-0"><em className="italic">Nāṭyaśāstra Gurukulam</em></p>
            <p className="font-sans text-[10px] tracking-[0.15em] text-text-secondary/60 uppercase mt-2 mb-0">Navi Mumbai • Established 2025</p>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default About;
