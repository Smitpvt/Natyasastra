import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import interimEmblem from '../assets/Interim emblem1-Photoroom.png';


const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Publications', path: '/library' },
  { name: 'Programmes', path: '/programmes' },
  { name: 'Associate With Us', path: '/associate' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHeroPage = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-700 ease-in-out flex items-center h-[96px] ${
          isScrolled
            ? 'bg-[#F3EEE6]/90 backdrop-blur-md border-b border-[#E0D8CE]/40 shadow-[0_4px_30px_rgba(0,0,0,0.015)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] w-full flex justify-between items-center xl:grid xl:grid-cols-3">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center gap-3 group select-none">
              <img
                src={interimEmblem}
                alt="Nāṭyaśāstra Gurukulam Emblem"
                className="h-10 sm:h-11 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className={`font-serif text-[16px] xs:text-[18px] md:text-[21px] font-medium tracking-[0.03em] transition-colors duration-500 ${
                  isScrolled ? 'text-[#211F1D] group-hover:text-accent-bronze' : isHeroPage ? 'text-white group-hover:text-[#E0D8CE]' : 'text-[#211F1D] group-hover:text-accent-bronze'
                }`}>
                  <span className="italic">Nāṭyaśāstra Gurukulam</span>
                </span>
                <span className={`font-sans text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] tracking-[0.16em] uppercase transition-colors duration-500 font-medium ${
                  isScrolled ? 'text-accent-bronze' : isHeroPage ? 'text-[#D4AF37]' : 'text-accent-bronze'
                }`}>
                  A Centre of Civilisational Statecraft
                </span>
              </div>
            </Link>
          </div>

          {/* Links - Center */}
          <div className="hidden xl:flex justify-center items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative py-1 group"
                >
                  <span className={`font-sans text-[12px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
                    isActive
                      ? 'text-accent-bronze'
                      : isScrolled
                      ? 'text-[#211F1D] hover:text-accent-bronze'
                      : isHeroPage
                      ? 'text-white/80 hover:text-white'
                      : 'text-[#211F1D] hover:text-accent-bronze'
                  }`}>
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-bronze transition-all duration-500 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Action - Right */}
          <div className="hidden xl:flex justify-end items-center">
            <Link
              to="/contact"
              className={`inline-block px-6 py-2.5 rounded-full border font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 ease-out text-center ${
                isScrolled
                  ? 'border-[#211F1D] text-[#211F1D] hover:bg-[#211F1D] hover:text-[#F3EEE6]'
                  : isHeroPage
                  ? 'border-white/80 text-white hover:bg-white hover:text-[#211F1D]'
                  : 'border-[#211F1D] text-[#211F1D] hover:bg-[#211F1D] hover:text-[#F3EEE6]'
              }`}
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 transition-colors focus:outline-none z-50"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={24} strokeWidth={1.2} className="text-[#211F1D]" />
            ) : (
              <Menu
                size={24}
                strokeWidth={1.2}
                className={isScrolled ? 'text-[#211F1D]' : isHeroPage ? 'text-white' : 'text-[#211F1D]'}
              />
            )}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F3EEE6] flex flex-col justify-center px-6 sm:px-12 overflow-y-auto pt-20 pb-10"
          >
            <div className="flex flex-col gap-6 max-w-lg mx-auto w-full text-center">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      to={item.path}
                      className="inline-block py-1.5 relative group"
                    >
                      <span className={`font-serif text-2xl sm:text-3xl font-light tracking-wide transition-colors ${
                        isActive ? 'text-accent-bronze' : 'text-[#211F1D] hover:text-accent-bronze'
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.04, duration: 0.4 }}
                className="mt-6 pt-6 border-t border-[#E0D8CE]/60 flex flex-col items-center"
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-full border border-[#211F1D] text-[#211F1D] hover:bg-[#211F1D] hover:text-[#F3EEE6] font-sans text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-500 text-center w-full max-w-xs"
                >
                  Inquire Now
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
