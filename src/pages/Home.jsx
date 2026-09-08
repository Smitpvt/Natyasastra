import React from 'react';
import Hero from './Home/Hero';
import QuoteSection from './Home/QuoteSection';
import PillarsMandala from './Home/PillarsMandala';
import Publications from './Home/Publications';
import Mentors from './Home/Mentors';
import GlimpsesAndMedia from '../components/GlimpsesAndMedia';
import CTASection from './Home/CTASection';
import { useSEO } from '../hooks/useSEO';

export const Home = () => {
  useSEO({
    title: 'Custodians of Rasa, Rhythm & Dhārmic Responsibility',
    description: 'A living institution dedicated to the study, practice, and renewal of Nāṭya as a civilisational knowledge system.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': 'Nāṭyaśāstra Gurukulam',
      'alternateName': 'Natyasastra Gurukulam',
      'description': 'A living institution dedicated to the study, practice, and renewal of Nāṭya as a civilisational knowledge system.',
      'url': typeof window !== 'undefined' ? window.location.origin : '',
      'logo': typeof window !== 'undefined' ? `${window.location.origin}/favicon.png` : '',
      'foundingDate': '2025-11-23',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Navi Mumbai',
        'addressRegion': 'Maharashtra',
        'addressCountry': 'IN'
      },
      'founders': [
        {
          '@type': 'Person',
          'name': 'Smt. Charanya Gurusathya'
        },
        {
          '@type': 'Person',
          'name': 'Dr. Padmaja Suresh'
        }
      ]
    }
  });

  return (
    <div className="flex flex-col w-full bg-[#F3EEE6] selection:bg-accent-bronze/20 selection:text-[#211F1D]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Sanskrit Quote Section */}
      <QuoteSection />

      {/* 3. Foundational Pillars Mandala */}
      <PillarsMandala />

      {/* 4. Our Publications */}
      <Publications />

      {/* 5. Mentors & Living Lineages */}
      <Mentors />

      {/* 6. Curated Glimpses & Media Archive */}
      <GlimpsesAndMedia />

      {/* 7. CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;

