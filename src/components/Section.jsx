import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  children,
  className = '',
  id = '',
  delay = 0,
  yOffset = 15,
  ...props
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.0, delay, ease: 'easeOut' }}
      className={`max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 relative ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default Section;
