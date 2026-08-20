import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';
import { LotusIcon, LotusDivider, BrassDiyaIcon, ProspectusFrame } from '../components/LotusOrnament';
import { useSEO } from '../hooks/useSEO';
import AutoScrollContainer from '../components/AutoScrollContainer';

// The Pedagogical Mandala Nodes Data
const MARGA_MANDALA_NODES = [
  {
    name: 'Śravaṇa',
    sanskrit: 'श्रवण',
    syllable: 'श्रु',
    tagline: 'Listening with Reverence',
    desc: 'Receiving knowledge through attentive, humble listening and sacred reception from living lineages. Knowledge is received through listening before it turns into understanding.',
    quote: 'Listening with reverence allows the seed of Śāstra to take root in the heart.',
    x: 210,
    y: 75,
    labelX: 210,
    labelY: 38,
    anchor: 'middle'
  },
  {
    name: 'Manana',
    sanskrit: 'मनन',
    syllable: 'म',
    tagline: 'Reflecting with Clarity',
    desc: 'Deepening understanding through disciplined reflection, hermeneutic inquiry, and quiet contemplation. Reflecting with rigor turns information into internalised clarity.',
    quote: 'Sustained reflection turns external instruction into internal conviction.',
    x: 338,
    y: 168,
    labelX: 375,
    labelY: 172,
    anchor: 'start'
  },
  {
    name: 'Abhyāsa',
    sanskrit: 'अभ्यास',
    syllable: 'अ',
    tagline: 'Practising with Discipline',
    desc: 'Embodying principles through physical practice, movement, rhythm, breath, and daily sādhanā. The physical body becomes the laboratory where theory becomes lived experience.',
    quote: 'Repetitive, disciplined practice transforms knowledge into spontaneous grace.',
    x: 289,
    y: 319,
    labelX: 325,
    labelY: 323,
    anchor: 'start'
  },
  {
    name: 'Anubhava',
    sanskrit: 'अनुभव',
    syllable: 'अनु',
    tagline: 'Realising through Experience',
    desc: 'Transforming theoretical knowledge into direct, lived aesthetic delight and spiritual realization. Realization occurs when subject, practice, and perception become one.',
    quote: 'Direct experience is the ultimate test and fruit of all Dhārmic inquiry.',
    x: 131,
    y: 319,
    labelX: 95,
    labelY: 323,
    anchor: 'end'
  },
  {
    name: 'Śānti',
    sanskrit: 'शान्ति',
    syllable: 'शा',
    tagline: 'Resting in Inner Stillness',
    desc: 'Culminating in inner peace, silence, and refined presence that radiates naturally into all action. Stillness is the ultimate ground from which all true offering arises.',
    quote: 'In inner stillness, the practitioner becomes a vessel of pure rasa.',
    x: 82,
    y: 168,
    labelX: 45,
    labelY: 172,
    anchor: 'end'
  }
];

// Yātri Pathway Steps
const YATRI_PATHWAY = [
  {
    num: '01',
    title: 'Residential Formation',
    desc: <span>Immersive training in pedagogy, <em className="italic">Nāṭyaśāstra</em>, repertoire, <em className="italic">Dhārmic</em> leadership, community engagement, and the <em className="italic">Mārga</em>.</span>
  },
  {
    num: '02',
    title: 'Incubation',
    desc: 'Guidance in establishing and developing a local centre, including curriculum delivery, class structuring, and community outreach.'
  },
  {
    num: '03',
    title: 'Community Stewardship',
    desc: <span>Carrying the <em className="italic">Mārga</em> into communities through teaching, cultural programmes, workshops, and outreach.</span>
  },
  {
    num: '04',
    title: 'Continuing Alignment',
    desc: <span>Continuing education, mentorship, review, certification, peer learning, and <em className="italic">Yātri</em> gatherings.</span>
  }
];

// Centre for Civilisational Statecraft Areas
const STATECRAFT_AREAS = [
  {
    code: 'POL',
    title: 'Public Policy & Governance',
    desc: 'Dharma, constitutional order, governability, civic formation, institutional legitimacy, and public responsibility.'
  },
  {
    code: 'STR',
    title: 'Strategic Affairs',
    desc: 'International relations, strategic restraint, middle-power statecraft, war and moral legitimacy, and emerging forms of global order.'
  },
  {
    code: 'CORP',
    title: 'Institutional & Corporate Dharma',
    desc: 'Governance, stewardship, fiduciary responsibility, executive conduct, and the relationship between institutional purpose and power.'
  },
  {
    code: 'TECH',
    title: 'Technology & Emerging Domains',
    desc: 'AI governance, technological power, human judgement, restraint, and the ethical ordering of new domains of human activity.'
  },
  {
    code: 'CULT',
    title: 'Cultural & Aesthetic Research',
    desc: <span><em className="italic">Nāṭya</em>, <em className="italic">rasa</em>, pedagogy, cultural memory, aesthetic leadership, and the relationship between culture and public life.</span>
  }
];


const DIRECT_ENGAGEMENTS = [
  {
    title: 'Residential Immersions',
    subtitle: 'Stepping into the rhythm of the Gurukulam',
    desc: 'Intensive residential encounters combining study, practice, reflection, silence, and shared time. Participants include practitioners, educators, scholars, and serious seekers brought together around a focused theme or inquiry.',
    mode: 'Residential • In Person',
    image: '/assets/images/corridor_thumb.webp',
    objectPos: 'object-center'
  },
  {
    title: 'Study Circles',
    subtitle: <span>Sustained inquiry into <em className="italic">Śāstra</em></span>,
    desc: <span>Small-group engagements with selected texts, concepts, and questions through listening, reflection, questioning, and dialogue. Areas include the <em className="italic">Nāṭyaśāstra</em>, <em className="italic">Abhinavabhāratī</em>, <em className="italic">rasa</em>, <em className="italic">bhāva</em>, and Indian aesthetics.</span>,
    mode: 'In Person',
    image: '/assets/images/sthapatya_thumb.webp',
    objectPos: 'object-center'
  },
  {
    title: 'Workshops',
    subtitle: 'From knowledge to embodied understanding',
    desc: <span>Focused engagements bringing selected principles of <em className="italic">Nāṭya</em> into practice through movement, <em className="italic">abhinaya</em>, <em className="italic">rasa</em>, rhythm, aesthetic perception, contemplative practice, and pedagogy.</span>,
    mode: 'In Person',
    image: '/assets/images/yajna_thumb.webp',
    objectPos: 'object-center'
  },
  {
    title: 'Lecture & Dialogue Series',
    subtitle: <span>The <em className="italic">Sabhā</em> as a space for inquiry</span>,
    desc: <span>Encounters with artistes, scholars, teachers, thinkers, and knowledge holders addressing <em className="italic">Nāṭyaśāstra</em>, aesthetics, pedagogy, culture, civilisational thought, ethics, and leadership.</span>,
    mode: 'In Person',
    image: '/assets/images/prof_ramasubramanian_thumb.webp',
    objectPos: 'object-[center_20%]'
  },
  {
    title: 'Research Dialogues',
    subtitle: 'Where Śāstra, practice, and inquiry meet',
    desc: 'Curated conversations and working sessions bringing scholars and practitioners together around focused questions at the intersection of civilisational knowledge and artistic practice.',
    mode: 'By Invitation / Curated',
    image: '/assets/images/group_pratishtha_thumb.webp',
    objectPos: 'object-[center_15%]'
  },
  {
    title: 'Institutional Engagements',
    subtitle: 'Bringing the inquiry into institutional life',
    desc: <span>Bespoke engagements with educational, cultural, corporate, and other institutions exploring aesthetic leadership, embodied learning, ethical formation, and <em className="italic">Dhārmic</em> approaches to organisational life.</span>,
    mode: 'Bespoke • In Person',
    image: '/assets/images/brochure_release_thumb.webp',
    objectPos: 'object-[center_20%]'
  }
];

// Realms of Impact
const REALMS_OF_IMPACT = [
  {
    num: '01',
    realm: 'Ādhyātmika',
    sanskrit: 'आध्यात्मिक',
    scope: 'Individual Transformation',
    title: 'Transformation of the Individual',
    desc: 'Cultivating clarity, steadiness, compassion, aesthetic sensitivity, and inner discipline.'
  },
  {
    num: '02',
    realm: 'Sāmājika',
    sanskrit: 'सामाजिक',
    scope: 'Community & Culture',
    title: 'Refinement of Community and Culture',
    desc: 'Carrying that refinement into communities through Yātri centres, cultural engagements, publications, and shared practice.'
  },
  {
    num: '03',
    realm: 'Rāṣṭrīya',
    sanskrit: 'राष्ट्रीय',
    scope: 'Civilisational Field',
    title: 'Contribution to the Civilisational Field',
    desc: 'Contributing to a public culture in which truth, compassion, discipline, aesthetic sensitivity, restraint, and harmony shape collective life.'
  }
];

export const ProgrammesDetail = () => {
  useSEO({
    title: 'Programmes - Residential Immersions & Study Circles',
    description: 'Explore the educational offerings of the Nāṭyaśāstra Gurukulam, including residential immersions, textual study circles, movement reconstruction workshops, and civilisational statecraft seminars.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Pedagogical & Research Programmes',
      'description': 'A list of academic, practical, and research programmes offered by the Nāṭyaśāstra Gurukulam.',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'Course',
            'name': 'Residential Immersions',
            'description': 'Intensive residential encounters combining study, practice, reflection, silence, and shared time focused on classical Indian performing arts and aesthetic systems.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'Course',
            'name': 'Study Circles',
            'description': 'Small-group engagements with selected texts (Nāṭyaśāstra, Abhinavabhāratī) exploring Indian aesthetics, rasa, and bhāva.'
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'Course',
            'name': 'Workshops',
            'description': 'Focused physical workshops translating theoretical principles of Nāṭya into movements, karaṇa transitions, and abhinaya.'
          }
        }
      ]
    }
  });

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen text-[#211F1D] selection:bg-accent-bronze/20 selection:text-[#211F1D] overflow-x-hidden">
      
      {/* 1. HERO HEADER WITH AUTHENTIC PHOTOGRAPHY */}
      <Section spacing="none" className="pt-16 pb-20 border-b border-accent-bronze/10 relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/20">
                <span className="w-2 h-2 rounded-full bg-accent-bronze animate-pulse" />
                <Caption className="text-accent-bronze tracking-[0.25em] text-[11px]">Programmes of the Gurukulam</Caption>
              </div>

              <HeadingLG as="h1" className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-light leading-[1.08] tracking-tight">
                From <em className="italic">Śāstra</em> to <em className="italic">Sādhanā</em>, <br className="hidden sm:block" />
                from <em className="italic">Sādhanā</em> to <em className="italic">Sevā</em>
              </HeadingLG>

              <div className="w-20 h-[1px] bg-accent-bronze/40" />

              <div className="space-y-4 font-sans text-base md:text-lg text-text-stone-grey leading-relaxed font-light">
                <p>
                  The programmes of <em className="italic">Nāṭyaśāstra Gurukulam</em> arise from the Gurukulam's <em className="italic">Mārga</em>—a path of study, practice, inner refinement, and service.
                </p>
                <p>
                  They are designed not simply to impart skills, but to create spaces where <span className="font-medium text-[#211F1D] italic font-serif">śāstra</span> (textual wisdom), <span className="font-medium text-[#211F1D] italic font-serif">sādhanā</span> (embodied discipline), and <span className="font-medium text-[#211F1D] italic font-serif">saṃvāda</span> (contemplative dialogue) converge.
                </p>
                <p className="text-[#211F1D] font-normal text-sm md:text-base pt-2">
                  All programmes are conducted in person, with residential formats wherever deeper immersion is required. As the Gurukulam remains in its phase of <span className="italic font-serif">sthāpanā</span>, programmes will emerge gradually, in accordance with readiness, capacity, and Dhārmic timing.
                </p>
              </div>

              {/* Badges */}
              <div className="pt-4 flex flex-wrap gap-4 font-sans text-xs uppercase tracking-widest text-accent-bronze font-semibold">
                <span className="px-3.5 py-1.5 border border-accent-bronze/30 rounded-full bg-white/60 shadow-sm">
                  In-Person Formats
                </span>
                <span className="px-3.5 py-1.5 border border-accent-bronze/30 rounded-full bg-white/60 shadow-sm">
                  Residential Immersions
                </span>
                <span className="px-3.5 py-1.5 border border-accent-bronze/30 rounded-full bg-white/60 shadow-sm">
                  Phase of Sthāpanā
                </span>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white group"
              >
                <img
                  src="/assets/images/dance_offering.webp"
                  alt="Nāṭya Seva offering by sishyas"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[360px] lg:h-[380px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-0.5">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
                    Living Transmission
                  </span>
                  <p className="font-serif text-base font-light leading-snug">
                    <em className="italic">Nāṭya Seva</em> offering during the <em className="italic">Pratiṣṭhā Samāroham</em>
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </Section>

      {/* FEATURED RECENT PROGRAMME: NĀMA • RŪPA • NĀDA • BINDU (#18) */}
      <Section className="py-16 sm:py-20 border-b border-accent-bronze/10 bg-[#FAF6F0]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="space-y-8 max-w-5xl mx-auto">
            
            <div className="text-center space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/30 text-accent-bronze font-sans text-xs uppercase tracking-[0.3em] font-semibold">
                RECENT FEATURED PROGRAMME
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#6B1D1E] tracking-tight">
                <em className="italic">Nāma</em> • <em className="italic">Rūpa</em> • <em className="italic">Nāda</em> • <em className="italic">Bindu</em>
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#7A5428]">
                A Recent Residential Immersion of the <em className="italic">Gurukulam</em>
              </p>
              <LotusDivider className="my-2" />
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-accent-bronze/20 p-6 sm:p-10 space-y-8">
              {/* Image Collateral with clean alignment, correct aspect ratio, no black side bars */}
              <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-[#FAF6F0] border border-accent-bronze/20 shadow-md">
                <img
                  src="/assets/images/Participants in the Nama Rupa Nada Bindu immersion.jpg"
                  alt="Participants in the Nāma Rūpa Nāda Bindu immersion"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[500px] object-cover sm:object-contain mx-auto"
                />
              </div>

              <div className="space-y-6 text-text-stone-grey font-sans font-light leading-relaxed text-base sm:text-lg max-w-4xl mx-auto text-center sm:text-left">
                <p>
                  <em className="italic">Nāma • Rūpa • Nāda • Bindu</em> was conducted as a specialized residential immersion bringing together practitioners, scholars, and disciples for contemplative inquiry, somatic practice, and deep exploration of sound, form, and aesthetic manifestation.
                </p>
                
                <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 font-sans text-xs uppercase tracking-widest text-accent-bronze font-semibold">
                    <span className="px-3.5 py-1.5 border border-accent-bronze/30 rounded-full bg-[#FAF6F0]">
                      Residential Immersion
                    </span>
                    <span className="px-3.5 py-1.5 border border-accent-bronze/30 rounded-full bg-[#FAF6F0]">
                      Somatic & Textual Sādhanā
                    </span>
                  </div>

                  {/* Refined CTA Button: VIEW PARTICIPANT HANDBOOK ↗ */}
                  <a
                    href="/assets/publications/NRNB Immersion Participant Handbook.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#6B1D1E] hover:bg-[#521617] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-[#9E743B]/40 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-white/90 shrink-0" />
                    <span>VIEW PARTICIPANT HANDBOOK</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Phase 4: Embedded Video Cards (Day 1 & Day 2) */}
              <div className="pt-6 border-t border-[#9E743B]/20 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl text-[#6B1D1E] font-medium">
                    Immersion Video Recordings
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Day 1 Video Card */}
                  <div className="bg-[#FAF6F0] rounded-xl overflow-hidden border border-[#9E743B]/25 shadow-md flex flex-col justify-between">
                    <div className="aspect-video w-full bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/2D6bqFiehA8"
                        title="Nāma Rūpa Nāda Bindu Immersion - Day 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                    <div className="p-4 sm:p-5 space-y-1 bg-white border-t border-[#9E743B]/20">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#6B1D1E] text-white font-sans text-[10px] uppercase tracking-widest font-bold">
                        Day 1
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-[#6B1D1E] pt-1">
                        Immersion Session — Day 1
                      </h4>
                      <p className="font-sans text-xs text-[#59524A] font-light leading-relaxed">
                        Contemplative inquiry, sound-form resonance, and opening proceedings of the residential immersion.
                      </p>
                    </div>
                  </div>

                  {/* Day 2 Video Card */}
                  <div className="bg-[#FAF6F0] rounded-xl overflow-hidden border border-[#9E743B]/25 shadow-md flex flex-col justify-between">
                    <div className="aspect-video w-full bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/JMuPaOkrAjk"
                        title="Nāma Rūpa Nāda Bindu Immersion - Day 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                    <div className="p-4 sm:p-5 space-y-1 bg-white border-t border-[#9E743B]/20">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#6B1D1E] text-white font-sans text-[10px] uppercase tracking-widest font-bold">
                        Day 2
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-[#6B1D1E] pt-1">
                        Immersion Session — Day 2
                      </h4>
                      <p className="font-sans text-xs text-[#59524A] font-light leading-relaxed">
                        Aesthetic synthesis, movement sādhanā, and culmination proceedings of the residential immersion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Section>

      {/* FORTHCOMING PROGRAMMES (#19) */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-[#F8F6F1]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
          <div className="space-y-12 max-w-4xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-accent-bronze/30 text-accent-bronze font-sans text-xs uppercase tracking-[0.3em] font-semibold">
                FORTHCOMING PROGRAMMES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#6B1D1E] tracking-tight">
                Reimagining the <em className="italic">Sabhā</em>: A <em className="italic">Saṃvāda</em> in <em className="italic">Nāṭya</em>
              </h2>
              <div className="flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#9E743B] pt-1">
                <span>27 December 2026</span>
                <span>·</span>
                <span>Chennai</span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-[#7A5428] pt-1">
                A Margazhi conversation on differentiation, <em className="italic">svadharma</em>, and the future of <em className="italic">Nāṭya</em>
              </p>
              <LotusDivider className="my-2" />
            </div>

            {/* Event Content Container */}
            <ProspectusFrame innerClassName="p-8 sm:p-12 space-y-8 bg-white">
              
              {/* Introductory Statement */}
              <div className="p-6 rounded-xl bg-[#FAF6F0] border-l-4 border-[#9E743B] space-y-2">
                <p className="font-serif text-base sm:text-lg text-[#6B1D1E] leading-relaxed">
                  During Chennai’s Margazhi season, Aatmalaya Academy of Art and Culture, in collaboration with <em className="italic">Nāṭyaśāstra Gurukulam</em>, convenes a <em className="italic">Saṃvāda</em> on the future of the <em className="italic">Sabhā</em>.
                </p>
              </div>

              {/* Main Body */}
              <div className="space-y-6 text-text-stone-grey font-sans font-light text-base leading-relaxed">
                <p>
                  The <em className="italic">Sabhā</em> was never merely a venue for performance. It was an assembly shaped by aesthetic discernment, shared cultural literacy, the relationship between artist and <em className="italic">rasika</em>, and continuity across generations.
                </p>
                <p>
                  Today, however, practitioners with very different artistic purposes, stages of development, audiences, and economic realities increasingly inhabit the same institutional framework. The resulting tensions raise familiar questions of access, opportunity, remuneration, and ‘pay to perform’. Beneath these questions lies a deeper one:
                </p>
                
                <div className="py-2 text-center">
                  <p className="font-serif italic text-xl sm:text-2xl text-[#6B1D1E] font-medium">
                    Could the future of the <em className="italic">Sabhā</em> lie in differentiation?
                  </p>
                </div>

                <p>
                  At the heart of the enquiry is <em className="italic">svadharma</em>—the distinctive orientation, responsibility, and voice of each practitioner.
                </p>

                <p className="font-semibold text-[#211F1D]">
                  The conversation will explore three propositions:
                </p>
              </div>

              {/* Three Propositions Subsections */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                
                <div className="p-6 rounded-xl bg-[#F8F6F1] border border-[#9E743B]/25 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#9E743B] block">
                      I. THE SABHĀ
                    </span>
                    <p className="font-serif italic text-base text-[#6B1D1E] leading-snug font-medium">
                      The future of the <em className="italic">Sabhā</em> lies in differentiation.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#F8F6F1] border border-[#9E743B]/25 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#9E743B] block">
                      II. THE PRACTITIONER
                    </span>
                    <p className="font-serif italic text-base text-[#6B1D1E] leading-snug font-medium">
                      The future of the <em className="italic">Nāṭya</em> practitioner depends less on securing platforms and more on cultivating one's own assembly.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#F8F6F1] border border-[#9E743B]/25 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#9E743B] block">
                      III. THE PURPOSE
                    </span>
                    <p className="font-serif italic text-base text-[#6B1D1E] leading-snug font-medium">
                      A <em className="italic">Sabhā</em> ultimately exists not merely to sustain performance, but to sustain the conditions in which <em className="italic">Rasa</em> can arise.
                    </p>
                  </div>
                </div>

              </div>

              {/* Closing Paragraphs */}
              <div className="space-y-4 text-text-stone-grey font-sans font-light text-base leading-relaxed border-t border-[#9E743B]/20 pt-6">
                <p>
                  Each proposition will be examined through contrasting voices, followed by moderated exchange. The format is deliberately concise and dialogic: participants will be invited to speak from experience, conviction, and <em className="italic">svadharma</em> rather than deliver conventional papers.
                </p>
                <p>
                  The <em className="italic">Saṃvāda</em> seeks neither a single answer nor manufactured consensus. It seeks to create an assembly in which different artistic orientations can be heard, questioned, and placed in relation to one another—and to identify propositions that may contribute to the future ecology of <em className="italic">Nāṭya</em>.
                </p>
              </div>

              {/* Event Details Footer */}
              <div className="p-6 rounded-xl bg-[#6B1D1E] text-white space-y-2 shadow-md">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block">
                  EVENT DETAILS
                </span>
                <div className="font-serif text-lg font-normal">
                  27 December 2026 | Morning
                </div>
                <div className="font-sans text-xs text-[#FAF6F0]/90 tracking-wide font-light">
                  at Narada Gana Sabha under the auspices of Karthik Fine Arts, Chennai
                </div>
              </div>

            </ProspectusFrame>

          </div>
        </div>
      </Section>

      {/* 2. VISUAL PROGRESSION I: THE MĀRGA — INTERACTIVE MANDALA CYCLE */}
      <Section className="py-24 border-b border-accent-bronze/10 bg-[#F8F6F1] relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Caption className="text-accent-bronze tracking-[0.3em]">Foundational Framework</Caption>
            <HeadingLG className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              The <em className="italic">Mārga</em> & The Pedagogical Spiral
            </HeadingLG>
            <p className="font-sans text-xs sm:text-sm text-accent-bronze font-semibold uppercase tracking-[0.2em]">
              The Path that gives the Gurukulam its direction
            </p>
            <div className="w-16 h-[1px] bg-accent-bronze/40 mx-auto my-4" />
            <Body className="text-base text-text-stone-grey leading-relaxed font-light">
              The <em className="italic">Mārga</em> is the governing path of <em className="italic">Nāṭyaśāstra Gurukulam</em>. Click or hover on any node around the mandala to explore the dimensions of the pedagogical spiral.
            </Body>
          </div>

          {/* Interactive SVG Mandala Component & Detail Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Desktop SVG Interactive Mandala */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <svg width="440" height="440" viewBox="0 0 440 440" className="w-full max-w-[420px] h-auto select-none overflow-visible">
                {/* Outer subtle guide ring */}
                <circle
                  cx="210"
                  cy="210"
                  r="135"
                  fill="none"
                  stroke="var(--color-accent-bronze)"
                  strokeOpacity="0.15"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />

                {/* Spoke lines connecting Center (210, 210) to each outer node */}
                {MARGA_MANDALA_NODES.map((node, i) => {
                  const isActive = activeStep === i;
                  return (
                    <line
                      key={`spoke-${i}`}
                      x1="210"
                      y1="210"
                      x2={node.x}
                      y2={node.y}
                      stroke="var(--color-accent-bronze)"
                      strokeOpacity={isActive ? 0.7 : 0.2}
                      strokeWidth={isActive ? 1.5 : 1}
                      strokeDasharray="4 4"
                      className="transition-all duration-500"
                    />
                  );
                })}

                {/* Central Node (MĀRGA) */}
                <circle
                  cx="210"
                  cy="210"
                  r="44"
                  fill="#F3EEE6"
                  stroke="var(--color-accent-bronze)"
                  strokeWidth="1.2"
                  className="filter drop-shadow-md"
                />
                <text
                  x="210"
                  y="214"
                  textAnchor="middle"
                  className="font-serif text-[12px] font-medium tracking-[0.25em] fill-accent-bronze select-none italic"
                >
                  MĀRGA
                </text>

                {/* Outer Orbiting Nodes */}
                {MARGA_MANDALA_NODES.map((node, i) => {
                  const isActive = activeStep === i;
                  return (
                    <g
                      key={`node-${i}`}
                      className="cursor-pointer group"
                      onClick={() => setActiveStep(i)}
                      onMouseEnter={() => setActiveStep(i)}
                    >
                      {/* Expanded Hit Area */}
                      <circle cx={node.x} cy={node.y} r="32" fill="transparent" />
                      
                      {/* Outer Node Circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="22"
                        fill="#F3EEE6"
                        stroke="var(--color-accent-bronze)"
                        strokeWidth={isActive ? 2 : 1}
                        strokeOpacity={isActive ? 1 : 0.35}
                        className="transition-all duration-300 shadow-sm"
                      />

                      {/* Devanagari Syllable */}
                      <text
                        x={node.x}
                        y={node.y + 6}
                        textAnchor="middle"
                        className={`font-serif text-sm font-medium transition-all duration-300 ${
                          isActive ? 'fill-accent-bronze font-bold' : 'fill-text-stone-grey/80'
                        }`}
                      >
                        <em className="italic">{node.syllable}</em>
                      </text>

                      {/* Node Outer Name Label */}
                      <text
                        x={node.labelX}
                        y={node.labelY}
                        textAnchor={node.anchor}
                        className={`font-sans text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 italic ${
                          isActive ? 'fill-accent-bronze' : 'fill-[#757069]/70'
                        }`}
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Right: Selected Node Detail Panel */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-accent-bronze/20"
                >
                  <div className="space-y-2 border-b border-black/5 pb-6">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-serif italic text-4xl sm:text-5xl text-accent-bronze font-light">
                          {MARGA_MANDALA_NODES[activeStep].name}
                        </h3>
                        <span className="font-serif text-2xl text-[#757069]/70">
                          {MARGA_MANDALA_NODES[activeStep].sanskrit}
                        </span>
                      </div>
                      <span className="font-serif text-xs font-semibold px-3 py-1 bg-[#EFE8DC] text-accent-bronze rounded-full">
                        Phase 0{activeStep + 1}
                      </span>
                    </div>

                    <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent-bronze font-semibold pt-2">
                      {MARGA_MANDALA_NODES[activeStep].tagline}
                    </p>
                  </div>

                  <div className="w-12 h-[1px] bg-accent-bronze/30" />

                  <p className="font-sans text-base sm:text-lg text-text-stone-grey leading-relaxed font-light">
                    {MARGA_MANDALA_NODES[activeStep].desc}
                  </p>

                  <div className="p-5 rounded-xl bg-[#F8F6F1] border-l-2 border-accent-bronze space-y-1">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze font-bold block">
                      Inner Insight
                    </span>
                    <p className="font-serif italic text-sm md:text-base text-[#211F1D] leading-relaxed">
                      "{MARGA_MANDALA_NODES[activeStep].quote}"
                    </p>
                  </div>

                  {/* Node Step Selector Tabs for Easy Mobile & Desktop Navigation */}
                  <div className="pt-4 flex flex-wrap gap-2 border-t border-black/5">
                    {MARGA_MANDALA_NODES.map((n, idx) => (
                      <button
                        key={n.name}
                        onClick={() => setActiveStep(idx)}
                        className={`px-3 py-1.5 rounded text-xs font-sans uppercase tracking-widest transition-all ${
                          activeStep === idx
                            ? 'bg-accent-bronze text-white font-semibold shadow-sm'
                            : 'bg-[#F3EEE6] text-[#757069] hover:bg-[#EFE8DC] hover:text-[#211F1D]'
                        }`}
                      >
                        0{idx + 1}. {n.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border border-accent-bronze/20 max-w-4xl mx-auto text-center space-y-2 shadow-sm">
            <p className="font-serif text-base md:text-lg text-[#211F1D] italic leading-relaxed">
              "Each movement deepens the previous one, allowing knowledge to move from listening to understanding, from understanding to practice, and from practice to experience and stillness."
            </p>
          </div>

        </div>
      </Section>

      {/* 3. VISUAL PROGRESSION II: TWO OUTWARD MOVEMENTS (PROMINENT FEATURE SHOWCASES) */}
      <Section className="py-12 sm:py-16 lg:py-20 border-b border-accent-bronze/10 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] space-y-12 sm:space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Caption className="text-accent-bronze tracking-[0.3em] text-[11px]">Outward Expression</Caption>
            <HeadingLG className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-[#211F1D]">
              Two Outward Movements
            </HeadingLG>
            <BodyLG className="text-text-stone-grey font-light text-sm sm:text-base leading-relaxed">
              The Gurukulam's work extends beyond individual formation in two principal directions: cultural transmission through the Yātri and civilisational inquiry through the Centre for Civilisational Statecraft.
            </BodyLG>
          </div>

          {/* SHOWCASE 1: THE YĀTRI INITIATIVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-[#1E1C1A] text-[#F3EEE6] shadow-xl border border-accent-bronze/30 grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto"
          >
            {/* Left Photo & Highlight */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto lg:min-h-full overflow-hidden">
              <img
                src="/assets/images/sishyas_natya_seva_thumb.webp"
                alt="The Yātri Initiative - Cultural Transmission"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-[#1E1C1A]" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 space-y-0.5">
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-accent-bronze font-semibold block">
                  Cultural Custodians
                </span>
                <p className="font-serif text-xs sm:text-sm text-white font-light leading-snug">
                  Bridging sādhanā and society, art and Dharma, inner stillness and outer harmony.
                </p>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
                    Flagship Pathway
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                    The Yātri Initiative
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#E0D8CE]/75">
                    Carrying the Mārga into the World
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#E0D8CE]/90 font-light">
                  The Yātri Initiative is the Gurukulam's flagship pathway for cultural awakening. A Yātri is defined not by performance or acclaim, but by presence, alignment, service, and inner clarity—carrying the Mārga into a community as a cultural custodian, educator, and bearer of the Gurukulam's ethos.
                </p>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                  <span className="font-serif text-xs sm:text-sm italic text-accent-bronze block font-medium">
                    From Practitioner to Custodian
                  </span>
                  <p className="font-sans text-[11px] sm:text-xs text-[#E0D8CE]/80 font-light leading-relaxed">
                    Intended primarily for post-Arangetram practitioners and others who demonstrate commitment to classical training, sādhanā, teaching, community engagement, and ethical leadership.
                  </p>
                </div>

                {/* Pathway Steps: Auto-scrolling horizontal carousel on mobile, 2-col grid on sm+ */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between sm:hidden text-[10px] uppercase tracking-widest text-[#E0D8CE]/60">
                    <span>Pathway Steps</span>
                    <span className="text-accent-bronze">Auto-scrolling • Swipe →</span>
                  </div>
                  <AutoScrollContainer className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-3 pb-2 sm:pb-0">
                    {YATRI_PATHWAY.map((item) => (
                      <div key={item.title} className="flex-none w-[82%] sm:w-auto snap-start p-3 rounded-lg bg-white/5 border border-white/10 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="font-serif text-xs text-accent-bronze font-semibold">{item.num}.</span>
                          <h4 className="font-serif text-xs sm:text-sm font-medium text-white">{item.title}</h4>
                        </div>
                        <p className="font-sans text-[11px] sm:text-xs text-[#E0D8CE]/75 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </AutoScrollContainer>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="font-sans text-[11px] sm:text-xs text-[#E0D8CE]/60 italic">
                  Fidelity to the Mārga with room for organic local expression
                </span>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#9E743B] text-white font-sans text-xs uppercase tracking-[0.15em] font-semibold hover:bg-white hover:text-[#1E1C1A] transition-all duration-300 shadow-md text-center shrink-0"
                >
                  Explore Yātri Pathway →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* NEW: THE YĀTRI NETWORK DIYA RADIAL DIAGRAM (Inspired by PDF Page 8) */}
          <div className="my-8 max-w-5xl mx-auto">
            <ProspectusFrame innerClassName="p-6 sm:p-10 text-center bg-[#FAF6F0]">
              <div className="space-y-2 max-w-2xl mx-auto">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#9E743B] font-bold block">
                  DISTRIBUTED TRANSMISSION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#6B1D1E]">
                  The Yātri Network
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#7A5428]">
                  A living tradition grows not by replication, but by transmission.
                </p>
                <LotusDivider className="my-2" />
              </div>

              {/* Radial Lamp Visualizer - Full Bounds Unclipped */}
              <div className="relative w-full max-w-[440px] aspect-square mx-auto my-8 flex items-center justify-center p-2">
                {/* Connecting Ray Lines */}
                <div className="absolute inset-8 rounded-full border border-[#9E743B]/20 stroke-dasharray-[3_3]" />
                
                {/* Central Diya: NĀṬYAŚĀSTRA GURUKULAM */}
                <div className="relative z-20 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-[#FAF6F0] border-2 border-[#9E743B] shadow-xl flex flex-col items-center justify-center text-center p-2">
                  <BrassDiyaIcon className="w-7 sm:w-8 h-7 sm:h-8" />
                  <span className="font-serif text-[11px] sm:text-xs font-semibold text-[#6B1D1E] tracking-wider uppercase mt-0.5 leading-tight">
                    Nāṭyaśāstra<br />Gurukulam
                  </span>
                </div>

                {/* 10 Orbiting Lamps */}
                {[
                  { name: 'Dharma', angle: 0 },
                  { name: 'Sevā', angle: 36 },
                  { name: 'Śraddhā', angle: 72 },
                  { name: 'Tyāga', angle: 108 },
                  { name: 'Saṃvāda', angle: 144 },
                  { name: 'Karuṇā', angle: 180 },
                  { name: 'Maitrī', angle: 216 },
                  { name: 'Viveka', angle: 252 },
                  { name: 'Rasa', angle: 288 },
                  { name: 'Sādhanā', angle: 324 }
                ].map((lamp) => {
                  const radius = 145; // px radius for unclipped proportions
                  const rad = (lamp.angle - 90) * (Math.PI / 180);
                  const x = Math.round(radius * Math.cos(rad));
                  const y = Math.round(radius * Math.sin(rad));

                  return (
                    <div
                      key={lamp.name}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      className="absolute z-20 flex flex-col items-center justify-center group cursor-pointer"
                    >
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white border border-[#9E743B]/40 shadow-sm flex items-center justify-center group-hover:border-[#6B1D1E] group-hover:scale-110 transition-all">
                        <BrassDiyaIcon className="w-4 sm:w-5 h-4 sm:h-5" glow={true} />
                      </div>
                      <span className="font-serif italic text-[10px] sm:text-xs font-medium text-[#6B1D1E] mt-0.5 bg-white/90 px-1.5 py-0.2 rounded shadow-2xs border border-[#9E743B]/20 whitespace-nowrap">
                        <em className="italic">{lamp.name}</em>
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote Banner */}
              <div className="pt-6 border-t border-[#9E743B]/20 max-w-2xl mx-auto space-y-1.5">
                <h4 className="font-serif text-base sm:text-xl text-[#6B1D1E] tracking-wide uppercase font-light leading-snug">
                  ONE LAMP LIGHTS ANOTHER WITHOUT DIMINISHING ITS OWN FLAME.
                </h4>
                <p className="font-serif italic text-xs sm:text-sm text-[#7A5428]">
                  The measure of a lamp is not its brilliance, but the light it awakens in another.
                </p>
              </div>

            </ProspectusFrame>
          </div>

          {/* SHOWCASE 2: CENTRE FOR CIVILISATIONAL STATECRAFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-white text-[#211F1D] shadow-xl border border-black/10 grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto"
          >
            {/* Left Details */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold block">
                    Research & Public Inquiry
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#211F1D]">
                    Centre for Civilisational Statecraft
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#757069]">
                    Bringing Civilisational Knowledge into Public Life
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed text-text-stone-grey font-light">
                  Extends the Gurukulam's inquiry into governance, public policy, strategic affairs, institutional life, leadership, and cultural research—asking how principles from India's knowledge traditions illuminate contemporary questions of public order, power, and human flourishing.
                </p>

                {/* 5 Key Areas - All 5 Cards Fully Rendered */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.2em] text-accent-bronze font-semibold">
                    <span>Five Key Areas of Inquiry</span>
                    <span className="sm:hidden text-[10px] tracking-widest text-[#757069]">Auto-scrolling • Swipe →</span>
                  </div>
                  <AutoScrollContainer className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-3 pb-2 sm:pb-0">
                    {STATECRAFT_AREAS.map((area) => (
                      <div key={area.title} className="flex-none w-[82%] sm:w-auto snap-start p-3 rounded-lg bg-[#F8F6F1] border-l-2 border-accent-bronze space-y-0.5">
                        <span className="font-sans text-[9px] uppercase tracking-widest text-accent-bronze font-bold">{area.code}</span>
                        <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#211F1D]">{area.title}</h4>
                        <p className="font-sans text-[11px] text-text-stone-grey font-light leading-relaxed">{area.desc}</p>
                      </div>
                    ))}
                  </AutoScrollContainer>
                </div>
              </div>

              <div className="pt-3 border-t border-black/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="font-sans text-[11px] sm:text-xs text-text-stone-grey italic">
                  Expressed through research papers, working papers, and dialogues
                </span>
                <Link
                  to="/library"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#211F1D] text-[#211F1D] font-sans text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#211F1D] hover:text-white transition-all duration-300 text-center shrink-0"
                >
                  View Publications →
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto lg:min-h-full overflow-hidden order-1 lg:order-2">
              <img
                src="/assets/images/brochure_release_thumb.webp"
                alt="Centre for Civilisational Statecraft - Consecration & Brochure Release"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-white/10" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-lg bg-white/90 backdrop-blur-md border border-black/10 space-y-0.5 text-[#211F1D]">
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-accent-bronze font-semibold block">
                  Public Release & Consecration
                </span>
                <p className="font-serif text-xs sm:text-sm font-medium leading-snug">
                  Consecration of Gurukulam research & vision documents during Pratishtha Samaroham.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* 4. VISUAL PROGRESSION III: ENTER THE GURUKULAM (PROGRAMME FORMATS) */}
      <Section className="py-24 border-b border-accent-bronze/10 bg-[#F8F6F1]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px] space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Caption className="text-accent-bronze tracking-[0.3em]">Direct Engagement</Caption>
            <HeadingLG className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              Enter the Gurukulam
            </HeadingLG>
            <BodyLG className="text-text-stone-grey font-light">
              Alongside these two outward movements, the Gurukulam creates spaces for direct study, practice, and dialogue.
            </BodyLG>
          </div>

          {/* Programme Formats Grid: Horizontal auto-scroll on mobile, 3-col grid on md+ */}
          <div className="space-y-2">
            <div className="flex items-center justify-between md:hidden text-[10px] uppercase tracking-widest text-[#757069]">
              <span>Programme Formats</span>
              <span className="text-accent-bronze font-semibold">Auto-scrolling • Swipe →</span>
            </div>
            <AutoScrollContainer className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-3 md:pb-0">
              {DIRECT_ENGAGEMENTS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex-none w-[85%] md:w-auto snap-start bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group hover:border-accent-bronze/40"
                >
                {/* Thumbnail Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#1E1C1A]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${item.objectPos || 'object-center'} opacity-95 group-hover:opacity-100`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-accent-bronze font-sans text-[10px] uppercase tracking-widest font-semibold rounded-md shadow-sm border border-accent-bronze/20">
                      {item.mode}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-2xl font-normal text-[#211F1D] group-hover:text-accent-bronze transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-wider text-accent-bronze font-semibold">
                      {item.subtitle}
                    </p>
                    <p className="font-sans text-xs text-text-stone-grey leading-relaxed font-light pt-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze hover:text-[#211F1D] transition-colors"
                    >
                      Inquire Details <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            </AutoScrollContainer>
          </div>

        </div>
      </Section>

      {/* 5. VISUAL PROGRESSION IV: CIVILISATIONAL IMPACT */}
      <Section className="py-24 border-b border-accent-bronze/10 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Caption className="text-accent-bronze tracking-[0.3em]">Widening Impact</Caption>
            <HeadingLG className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              From Inner Refinement to Civilisational Renewal
            </HeadingLG>
            <BodyLG className="text-text-stone-grey font-light">
              The <em className="italic">Mārga</em> does not end with the individual. Its work unfolds through three widening realms of impact.
            </BodyLG>
          </div>

          {/* 3 Concentric Widening Impact Cards: Horizontal auto-scroll on mobile */}
          <div className="space-y-2">
            <div className="flex items-center justify-between md:hidden text-[10px] uppercase tracking-widest text-[#757069]">
              <span>Realms of Impact</span>
              <span className="text-accent-bronze font-semibold">Auto-scrolling • Swipe →</span>
            </div>
            <AutoScrollContainer className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 pb-3 md:pb-0">
              {REALMS_OF_IMPACT.map((realm, idx) => (
                <motion.div
                  key={realm.realm}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex-none w-[85%] md:w-auto snap-start bg-white p-6 sm:p-8 rounded-xl shadow-md border border-accent-bronze/30 flex flex-col justify-between relative overflow-hidden group hover:border-accent-bronze hover:shadow-xl transition-all duration-500"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-3xl text-accent-bronze/50 font-light">
                        {realm.num}
                      </span>
                      <span className="font-serif text-base text-accent-bronze/80 font-medium">
                        {realm.sanskrit}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#211F1D] italic">
                        {realm.realm}
                      </h3>
                      <p className="font-sans text-xs text-accent-bronze uppercase tracking-wider font-semibold mt-1">
                        {realm.title}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-text-stone-grey leading-relaxed font-light pt-3 border-t border-black/5">
                      {realm.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/5 text-[11px] font-sans uppercase tracking-widest text-[#757069] font-medium">
                    Realm: {realm.scope}
                  </div>
                </motion.div>
              ))}
            </AutoScrollContainer>
          </div>

          {/* Rāma Rājyam Quote Box */}
          <div className="bg-[#F8F6F1] p-8 sm:p-10 rounded-xl border border-accent-bronze/30 text-center space-y-3 shadow-sm max-w-4xl mx-auto">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-bronze font-bold block">
              Dhārmic Meaning
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#211F1D] italic leading-relaxed">
              "The Mārga understands this as the Dhārmic meaning of Rāma Rājyam: a civilisational condition arising through the refinement of the human being."
            </p>
          </div>

        </div>
      </Section>

      {/* 6. CLOSING: PROGRAMMES IN THE MAKING (LUMINOUS PARCHMENT & GOLD ELEGANCE) */}
      <Section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-b from-[#F8F6F1] via-[#F3EEE6] to-[#EFE8DC] text-[#211F1D] relative border-t border-accent-bronze/10 overflow-hidden">
        
        {/* Background Sacred Mandala Outline */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] select-none">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="text-accent-bronze">
            <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="300" cy="300" r="100" stroke="currentColor" strokeWidth="1" />
            <line x1="300" y1="20" x2="300" y2="580" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 px-6 sm:px-8 relative z-10">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="inline-block px-4 py-1 rounded-full bg-white/80 border border-accent-bronze/30 shadow-sm text-accent-bronze font-sans text-xs uppercase tracking-[0.3em] font-semibold">
              PHASE OF STHĀPANĀ
            </span>
            <HeadingLG className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#211F1D] tracking-tight">
              Programmes in the Making
            </HeadingLG>
          </div>

          <div className="w-16 h-[1px] bg-accent-bronze/40 mx-auto" />

          {/* Illuminated Parchment Quote Showcase Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-md border border-accent-bronze/30 space-y-4 max-w-3xl mx-auto relative overflow-hidden group hover:border-accent-bronze transition-all duration-500"
          >
            {/* Subtle corner flourish */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-bronze/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-bronze/40" />

            <p className="font-sans text-xs sm:text-sm text-text-stone-grey leading-relaxed font-light">
              Nāṭyaśāstra Gurukulam is presently consolidating its foundations, pedagogic relationships, research, and institutional capacity.
            </p>

            <div className="py-3 border-y border-accent-bronze/20 bg-[#F8F6F1]/80 px-5 sm:px-6 rounded-lg my-3">
              <p className="font-serif italic text-base sm:text-xl text-accent-bronze leading-relaxed">
                “Its programmes will grow deliberately rather than hurriedly—with depth before display, readiness before scale, and fidelity before expansion.”
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#211F1D] leading-relaxed font-light">
              The aim is not to offer more programmes, but to create the right spaces in which learning becomes <span className="font-serif italic font-semibold text-accent-bronze">sādhanā</span>, sādhanā becomes <span className="font-serif italic font-semibold text-accent-bronze">presence</span>, and presence becomes <span className="font-serif italic font-semibold text-accent-bronze">sevā</span>.
            </p>
          </motion.div>

          {/* Triad Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-accent-bronze/20 shadow-xs text-center space-y-1 hover:border-accent-bronze hover:shadow-md transition-all duration-300">
              <span className="font-serif text-xs text-accent-bronze font-bold block">01</span>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#211F1D]">Inner Refinement</h4>
              <p className="font-sans text-[11px] text-text-stone-grey font-light">Cultivation of the individual self</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-lg border border-accent-bronze/20 shadow-xs text-center space-y-1 hover:border-accent-bronze hover:shadow-md transition-all duration-300">
              <span className="font-serif text-xs text-accent-bronze font-bold block">02</span>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#211F1D]">Cultural Awakening</h4>
              <p className="font-sans text-[11px] text-text-stone-grey font-light">Stewardship of community ethos</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-lg border border-accent-bronze/20 shadow-xs text-center space-y-1 hover:border-accent-bronze hover:shadow-md transition-all duration-300">
              <span className="font-serif text-xs text-accent-bronze font-bold block">03</span>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#211F1D]">Civilisational Renewal</h4>
              <p className="font-sans text-[11px] text-[#757069] font-light">Fulfillment of Dhārmic purpose</p>
            </div>
          </div>

          {/* CTA Action */}
          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-bronze text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#211F1D] hover:text-white transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Inquire About Upcoming Programmes <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </Section>

    </div>
  );
};

export default ProgrammesDetail;
