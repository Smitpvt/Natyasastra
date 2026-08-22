import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F3EEE6] flex items-center justify-center p-6 text-center font-serif">
          <div className="max-w-md p-8 bg-white/80 rounded-xl shadow-lg border border-[#9E743B]/30">
            <h2 className="text-2xl text-[#805335] font-semibold mb-3">Nāṭyaśāstra Gurukulam</h2>
            <p className="text-[#757069] text-sm mb-6">An unexpected error occurred while loading this page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#805335] text-white text-xs uppercase tracking-widest rounded-md hover:bg-[#6E4A19] transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<ProgrammesDetail />} />
          <Route path="/mentors" element={<MentorsDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/associate" element={<Associate />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;


