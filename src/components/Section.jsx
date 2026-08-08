import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  children,
  className = '',
  id = '',
  delay = 0,
  yOffset = 20,
  background = 'ivory', // 'ivory' | 'parchment' | 'none'
  divider = false,
  container = true,
  spacing = 'large', // 'large' | 'medium' | 'compact' | 'none'
  ...props
}) => {
  const bgClass =
    background === 'parchment'
      ? 'bg-[#EAE4D9]'
      : background === 'ivory'
      ? 'bg-[#F3EEE6]'
      : '';

  const borderClass = divider ? 'border-t border-[#E0D8CE]/60' : '';

  // Disabled massive default paddings to rely on manual Tailwind classes
  const spacingClass = '';

  return (
    <section id={id} className={`w-full ${bgClass} ${borderClass} ${spacingClass} relative select-none`} {...props}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={container ? `max-w-[1440px] mx-auto px-8 md:px-16 ${className}` : className}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
