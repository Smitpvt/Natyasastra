import React from 'react';
import Hero from './Home/Hero';
import Welcome from './Home/Welcome';
import Philosophy from './Home/Philosophy';
import Programmes from './Home/Programmes';
import Library from './Home/Library';
import Mentors from './Home/Mentors';
import Gallery from './Home/Gallery';
import Associate from './Home/Associate';
import ClosingInvocation from './Home/ClosingInvocation';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Full Screen Hero */}
      <Hero />

      {/* 2. Welcome Story ("Architecture of Stillness") */}
      <Welcome />

      {/* 3. Three Pillars (Śāstra, Sādhanā, Saṃvāda) */}
      <Philosophy />

      {/* 4. Programmes Areas (Study, Practice, Pedagogy, Archive, Saṃvāda) */}
      <Programmes />

      {/* 5. Publications monographs */}
      <Library />

      {/* 6. Mentors biographies */}
      <Mentors />

      {/* 7. Gallery Grid preview */}
      <Gallery />

      {/* 8. Associate invitations */}
      <Associate />

      {/* 9. Closing Sanskrit Invocation CTA */}
      <ClosingInvocation />
    </div>
  );
};

export default Home;
