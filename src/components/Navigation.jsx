import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const NAV_ITEMS = [
  { name: 'About', path: '/about' },
  { name: 'Programmes', path: '/programmes' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'Gallery', path: '/gallery' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-border-stone/20 flex items-center ${
          isScrolled
            ? 'bg-bg-ivory/95 backdrop-blur-md h-16 shadow-sm'
            : 'bg-transparent h-24'
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-8 md:px-16 w-full flex justify-between items-center">
          {/* Logo - Visually dominant, larger, high-contrast */}
          <Link to="/" className="flex flex-col group select-none">
            <span className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-light tracking-[0.05em] text-text-muted-black hover:text-accent-bronze transition-colors duration-500">
              Nāṭyaśāstra Gurukulam
            </span>
          </Link>

          {/* Desktop Links - Improved spacing, high contrast, medium weight */}
          <div className="hidden xl:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative py-1.5 group"
                >
                  <span className={`font-sans text-[11.5px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 ${
                    isActive ? 'text-accent-bronze' : 'text-text-charcoal hover:text-accent-bronze'
                  }`}>
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-accent-bronze transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* CTA Inquire Button - Increased padding, higher border contrast */}
          <div className="hidden xl:block">
            <Link
              to="/contact"
              className="px-9 py-3.5 border border-accent-bronze/70 text-accent-bronze font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-accent-bronze hover:text-bg-ivory hover:border-accent-bronze transition-all duration-500 ease-in-out"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-1.5 text-text-charcoal hover:text-accent-bronze transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
          </button>
        </div>
      </nav>

      {/* Mobile Screen-Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-35 bg-bg-paper flex flex-col justify-center px-8 md:px-16"
          >
            <div className="flex flex-col gap-6 md:gap-8 max-w-lg mx-auto w-full">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.6, ease: "easeOut" }}
                  >
                    <Link
                      to={item.path}
                      className="inline-block py-1 relative group"
                    >
                      <span className={`font-serif text-3xl md:text-4xl font-light tracking-wide ${
                        isActive ? 'text-accent-bronze' : 'text-text-charcoal hover:text-accent-bronze'
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.04, duration: 0.6 }}
                className="mt-6 border-t border-border-stone/40 pt-8"
              >
                <Link
                  to="/contact"
                  className="inline-block w-full text-center px-8 py-4 border border-accent-bronze/70 text-accent-bronze font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent-bronze hover:text-bg-ivory transition-colors duration-500"
                >
                  Register Interest / Inquire
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
