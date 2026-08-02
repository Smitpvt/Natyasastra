import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Approach from './pages/Approach';
import ProgrammesDetail from './pages/ProgrammesDetail';
import MentorsDetail from './pages/MentorsDetail';
import Library from './pages/Library';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Associate from './pages/Associate';
import Contact from './pages/Contact';

// Scroll to top helper for page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/programmes" element={<ProgrammesDetail />} />
          <Route path="/mentors" element={<MentorsDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/associate" element={<Associate />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
