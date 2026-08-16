import React from 'react';
import Hero from './Home/Hero';
import QuoteSection from './Home/QuoteSection';
import PillarsMandala from './Home/PillarsMandala';
import Publications from './Home/Publications';
import Mentors from './Home/Mentors';
import PratishthaSection from './Home/PratishthaSection';
import CTASection from './Home/CTASection';

export const Home = () => {
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

      {/* 6. Consecration Highlights */}
      <PratishthaSection />

      {/* 7. CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;

