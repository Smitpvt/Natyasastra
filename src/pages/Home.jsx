import React from 'react';
import Hero from './Home/Hero';
import QuoteSection from './Home/QuoteSection';
import Approaches from './Home/Approaches';
import Publications from './Home/Publications';
import Mentors from './Home/Mentors';
import CTASection from './Home/CTASection';

export const Home = () => {
  return (
    <div className="flex flex-col w-full bg-[#F3EEE6] selection:bg-[#8B0000]/20 selection:text-[#211F1D]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Sanskrit Quote Section */}
      <QuoteSection />

      {/* 3. Our Publications */}
      <Publications />

      {/* 4. Our Approaches */}
      <Approaches />

      {/* 5. Mentors */}
      <Mentors />

      {/* 6. CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
