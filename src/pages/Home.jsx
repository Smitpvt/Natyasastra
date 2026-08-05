import React from 'react';
import Hero from './Home/Hero';
import Welcome from './Home/Welcome';
import Philosophy from './Home/Philosophy';
import Programmes from './Home/Programmes';
import QuoteSection from './Home/QuoteSection';
import Library from './Home/Library';
import Mentors from './Home/Mentors';
import Gallery from './Home/Gallery';
import Associate from './Home/Associate';
import ClosingInvocation from './Home/ClosingInvocation';

export const Home = () => {
  return (
    <div className="flex flex-col w-full bg-bg-ivory selection:bg-accent-bronze/20 selection:text-text-primary">
      {/* 1. Arrival (Full-screen Threshold Hero) */}
      <Hero />

      {/* 2. Orientation (Narrative Welcome) */}
      <Welcome />

      {/* 3. Philosophy (The Three Pillars & Architectural Interlude) */}
      <Philosophy />

      {/* 4. Practice (Editorial Curricula Blocks) */}
      <Programmes />

      {/* 5. Transition (Quiet Sanskrit Verse) */}
      <QuoteSection />

      {/* 6. Knowledge (Academic Museum Archive) */}
      <Library />

      {/* 7. People (Living Lineages & Acharyas) */}
      <Mentors />

      {/* 8. Environment (Documentary Photography Gallery) */}
      <Gallery />

      {/* 9. Invitation (Quiet Alignment & Associate) */}
      <Associate />

      {/* 10. Closing Invocation */}
      <ClosingInvocation />
    </div>
  );
};

export default Home;

