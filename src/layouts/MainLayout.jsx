import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PaperTexture from '../components/PaperTexture';
import { pageTransition } from '../animations/pageTransition';

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen relative bg-bg-ivory selection:bg-accent-bronze/10 selection:text-text-muted-black">
      {/* Handmade paper feel */}
      <PaperTexture />
      
      {/* Header Navigation */}
      <Navigation />
      
      {/* Animate Page Routes */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer Closing Invocation */}
      <Footer />
    </div>
  );
};

export default MainLayout;
