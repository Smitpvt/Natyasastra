import React from 'react';
import { motion } from 'framer-motion';

export const EditorialImage = ({
  src,
  alt,
  caption = '',
  copyright = '',
  aspectRatio = 'aspect-[3/2]',
  className = '',
  imageClassName = '',
  delay = 0,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full group ${className}`} {...props}>
      <div className={`overflow-hidden relative bg-bg-limestone ${aspectRatio} border border-accent-bronze/10`}>
        {/* Animated and filtered image */}
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className={`w-full h-full object-cover filter contrast-[1.05] transition-all duration-[1200ms] ease-out ${imageClassName}`}
        />
        
        {/* Subtle architectural amber-bronze tone overlay */}
        <div className="absolute inset-0 bg-accent-bronze/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-1000 ease-out" />
      </div>
      
      {(caption || copyright) && (
        <div className="mt-2.5 flex justify-between items-baseline gap-4 px-1">
          {caption && (
            <p className="font-serif italic text-[13px] text-text-stone-grey leading-tight">
              {caption}
            </p>
          )}
          {copyright && (
            <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze/70 whitespace-nowrap ml-auto">
              {copyright}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default EditorialImage;
