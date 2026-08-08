import React, { useState } from 'react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

const PUBLICATIONS = [
  // I. Civilisational Statecraft Series
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper I',
    title: 'The Dharma of Middle Powers',
    desc: 'As the international system becomes increasingly multipolar, this paper explores how restraint, proportion, and responsibility can provide a more stable basis for statecraft. It argues that disciplined power—not merely accumulated power—is essential for sustaining long-term equilibrium.',
    file: '/assets/publications/WP I-The Dharma of the Middle Powers.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper II',
    title: 'Dharma and the Architecture of Liberty',
    desc: 'Examines the relationship between constitutional order and Dhārmic ethics, proposing a framework in which liberty, responsibility, and institutional legitimacy reinforce one another.',
    file: '/assets/publications/WP II- Dharma and the Architecture of Liberty.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper III',
    title: 'Good Governance for Growth in Africa',
    desc: 'Explores an alternative developmental framework rooted in ethical governance and institutional capacity, offering a Dhārmic perspective beyond prevailing geopolitical models.',
    file: '/assets/publications/WP III- Good Governance for Growth in Africa Beyond the Western-Chinese Binary.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper IV',
    title: 'Beyond Control: Alignment, Dharma and the Future of Intelligent Civilisation',
    desc: 'Examines Artificial Intelligence through the lens of Dharma, arguing that alignment requires ethical orientation rather than technological control alone.',
    file: '/assets/publications/WP IV- Beyond Control Alignment, Dharma and the Future of Intelligent Civilisation.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper V',
    title: 'Moral Legitimacy in War: From Justification to Dharmic Alignment',
    desc: 'Reconsiders the ethics of warfare by moving beyond traditional just war theory towards principles of Dhārmic legitimacy and restraint.',
    file: '/assets/publications/WP V- Moral Legitimacy in War From Justification to Dharmic Alignment.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper VI',
    title: 'A Systems Theory of Social Order',
    desc: 'Develops a systems-based understanding of social order through the integrating principles of Dharma, pluralism, and civilisational equilibrium.',
    file: '/assets/publications/WP VI- A Systems Theory of Social Order Rethinking Unity, Diversity, and Dharma.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper VII',
    title: 'Dharmic Ordering of the Cosmic Commons',
    desc: 'Explores outer space governance through a civilisational lens, proposing a Dhārmic framework for stewardship of the cosmic commons.',
    file: '/assets/publications/WP VII- Dharmic Ordering of the Cosmic Commons Statecraft, Legitimacy, and Equilibrium in the New Space Age.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper VIII',
    title: 'Making Democracy More Governable',
    desc: 'Examines the limitations of contemporary democratic models and proposes Dharma Rājyam as a framework for more resilient governance.',
    file: '/assets/publications/WP VIII- Making Democracy More Governable Dharma Rājyam and the Post-Liberal Crisis.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper IX',
    title: 'Order from Within: Dharma Rājyam and the Principles of Endogenous Governance',
    desc: 'Argues that sustainable governance emerges from internally cultivated ethical order rather than externally imposed systems.',
    file: '/assets/publications/WP IX- Order From Within Dharma Rājyam and the Principles of Endogenous Governance.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Statecraft Series',
    type: 'Working Paper X',
    title: 'Dharma: From Discipline to Participation',
    desc: 'Explores Dharma as a participatory principle that sustains individuals, institutions, and civilisation across time.',
    file: '/assets/publications/WP X- Dharma from Discipline to Participation – A Civilisational Theory of Sustenance.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },

  // II. Research Programme – Civilisational Governance
  {
    series: 'Civilisational Governance',
    type: 'CG-01',
    title: 'The Dharma Doctrine of Disciplined Equilibrium',
    desc: 'Introduces the foundational governance doctrine underpinning the Gurukulam\'s research programme, integrating public, corporate, institutional, and civic domains.',
    file: '/assets/publications/CG01 The Dharma Doctrine of Disciplined Equilibrium A Four-Domain Governance Framework.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Governance',
    type: 'CG-AG-01',
    title: 'From Doctrine to Practice',
    desc: 'Examines how the doctrine may be translated into civic culture, institutional design, and responsible public participation.',
    file: '/assets/publications/CG-AG-01 - From Doctrine to Practice.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Governance',
    type: 'CG-CDR-01',
    title: 'Beyond CSR and ESG',
    desc: 'Proposes Corporate Dharma Rājyam as a comprehensive framework integrating ethics, governance, and long-term organisational stewardship.',
    file: '/assets/publications/CG-CDR-01-Beyond CSR and ESG.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Governance',
    type: 'CG-CR-02',
    title: 'Executive Compensation in Corporate Dharma Rājyam',
    desc: 'Examines executive remuneration through principles of fiduciary responsibility, proportionality, and ethical stewardship.',
    file: '/assets/publications/CG-CDR-02 Executive Compensation in Corporate Dharma Rājyam The Dhārmic Principle of Fiduciary Proportionality.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Civilisational Governance',
    type: 'CG-EWP-01',
    title: 'Executive Compensation Beyond Market Benchmarks',
    desc: 'Provides practical guidance for boards seeking ethically grounded executive compensation frameworks.',
    file: '/assets/publications/CG-EWP01-Executive Compensation Beyond Market Benchmarks A Board Framework for Fiduciary Stewardship.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },

  // III. Civilisational Statecraft Series – Aesthetic Knowledge Systems
  {
    series: 'Aesthetic Knowledge Systems',
    type: 'Working Paper I',
    title: 'The Return of Nāṭya',
    desc: 'Examines Nāṭya as a civilisational knowledge system and argues that the challenge before our time is not merely preserving artistic traditions, but reintegrating knowledge, practice, and inner cultivation.',
    file: '/assets/publications/AKS-WP I - The Return of Natya.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Aesthetic Knowledge Systems',
    type: 'Working Paper II',
    title: 'Rasika–Saṃskṛti–Saṃvāda',
    desc: 'Explores the cultivation of the rasika and proposes a pedagogical framework centred on offering, reception, dialogue, and aesthetic refinement.',
    file: '/assets/publications/AKS-WP II- Rasika-Samskriti-Samvada.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },

  // IV. Rasa Reflection Series
  {
    series: 'Rasa Reflection Series',
    type: 'Reflection I',
    title: 'From Entitlement to Embodiment',
    desc: 'Reflects on the movement from consumption to cultivation, exploring how Nāṭya reshapes desire into disciplined aesthetic experience.',
    file: '/assets/publications/NG-RR-01From Entitlement to Embodiment A Nāṭyaśāstra Reflection on Desire, Dharma and Śṛṅgāra.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  },
  {
    series: 'Rasa Reflection Series',
    type: 'Reflection II',
    title: 'From Examinations to Education',
    desc: 'Reimagines education through the lens of Nāṭyaśāstra, emphasising character, perception, and human flourishing over examination-driven learning.',
    file: '/assets/publications/NG-RR-02 From Examinations to Education A Nāṭyaśāstra Reflection on Human Flourishing.pdf',
    theme: 'bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#F3EEE6] border border-[#3A0000] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]'
  }
];

export const Library = () => {
  const [filter, setFilter] = useState('All');

  const SERIES_TABS = [
    'All',
    'Civilisational Statecraft Series',
    'Civilisational Governance',
    'Aesthetic Knowledge Systems',
    'Rasa Reflection Series'
  ];

  const filtered = filter === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.series === filter);

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section spacing="none" className="pt-16 pb-8 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Publications</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Research & Reflections
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            A growing body of research and reflection emerging from the work of Nāṭyaśāstra Gurukulam, spanning aesthetics, pedagogy, civilisational studies, governance, leadership, and public life.
          </BodyLG>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section spacing="none" className="pt-6 pb-2 border-b border-accent-bronze/10">
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
          {SERIES_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-sans text-[11px] uppercase tracking-widest pb-2 border-b transition-colors whitespace-nowrap ${
                filter === tab
                  ? 'text-[#8B0000] border-[#8B0000] font-bold'
                  : 'text-text-stone-grey border-transparent hover:text-text-charcoal'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </Section>

      {/* Catalog Grid */}
      <Section spacing="none" className="py-16 bg-[#F8F6F1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {filtered.map((pub) => (
            <div
              key={pub.title}
              className="flex flex-col sm:flex-row gap-8 bg-white p-6 md:p-8 shadow-sm border border-black/5 hover:shadow-md transition-all duration-500 group relative items-start"
            >
              {/* Elegant CSS Book cover visual */}
              <div className={`w-[150px] h-[230px] mx-auto sm:mx-0 shrink-0 shadow-md flex flex-col p-5 relative border ${pub.theme}`}>
                {/* Binding Detail */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/10 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]"></div>
                
                <div className="pl-2 flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <span className="text-[7px] uppercase tracking-widest opacity-80 block font-sans">
                      {pub.series}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider opacity-90 block font-bold font-sans">
                      {pub.type}
                    </span>
                  </div>
                  
                  <span className="font-serif text-[12px] leading-snug block mt-3 pb-2 line-clamp-6">
                    {pub.title}
                  </span>
                  
                  <div className="mt-auto text-[7px] uppercase tracking-[0.2em] opacity-80 border-t border-current/20 pt-2 font-medium">
                    Nāṭyaśāstra Gurukulam
                  </div>
                </div>
              </div>

              {/* Publication Details */}
              <div className="flex flex-col flex-1 h-full pt-1 space-y-4">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8B0000] font-semibold">
                    {pub.series} • {pub.type}
                  </span>
                  <HeadingMD className="text-xl md:text-2xl text-text-charcoal leading-tight group-hover:text-[#8B0000] transition-colors duration-300">
                    {pub.title}
                  </HeadingMD>
                  <Body className="text-[13px] md:text-sm text-text-stone-grey leading-relaxed font-light pb-2">
                    {pub.desc}
                  </Body>
                </div>

                <div className="mt-auto pt-4 border-t border-black/5">
                  <a
                    href={pub.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8B0000] hover:text-[#211F1D] transition-colors"
                  >
                    📄 Download PDF
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Library;
