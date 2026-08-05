import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { OutlinedButton } from './Typography';

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
      setIsScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-in-out flex items-center h-[88px] ${
          isScrolled
            ? 'bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#DDD6C8]/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px] w-full flex justify-between items-center">
          {/* Logo - Left Aligned */}
          <Link to="/" className="flex flex-col group select-none">
            <span className="font-serif text-[22px] md:text-[26px] font-light tracking-[0.03em] text-[#1F1F1D] hover:text-[#8A6A45] transition-colors duration-500">
              Nāṭyaśāstra Gurukulam
            </span>
          </Link>

          {/* Desktop Links & Action - Right Aligned */}
          <div className="hidden xl:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative py-1 group"
                  >
                    <span className={`font-sans text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
                      isActive ? 'text-accent-bronze' : 'text-text-primary hover:text-accent-bronze'
                    }`}>
                      {item.name}
                    </span>
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-accent-bronze transition-all duration-500 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                );
              })}
            </div>

            <OutlinedButton to="/contact" className="!px-6 !py-2.5">
              Inquire
            </OutlinedButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-text-primary hover:text-accent-bronze transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.2} /> : <Menu size={24} strokeWidth={1.2} />}
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-35 bg-bg-ivory flex flex-col justify-center px-8 md:px-16"
          >
            <div className="flex flex-col gap-8 max-w-lg mx-auto w-full text-center">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      to={item.path}
                      className="inline-block py-2 relative group"
                    >
                      <span className={`font-serif text-3xl font-light tracking-wide ${
                        isActive ? 'text-accent-bronze' : 'text-text-primary hover:text-accent-bronze'
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
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-border-linen/60"
              >
                <OutlinedButton to="/contact" className="w-full">
                  Register Interest / Inquire
                </OutlinedButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

