import React from 'react';

export const HeadingXL = ({ children, className = '', as: Component = 'h1', ...props }) => {
  return (
    <Component
      className={`font-serif text-4xl md:text-6xl lg:text-[72px] font-light tracking-wide text-text-charcoal leading-[1.1] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const HeadingLG = ({ children, className = '', as: Component = 'h2', ...props }) => {
  return (
    <Component
      className={`font-serif text-3xl md:text-[48px] font-light tracking-wide text-text-charcoal leading-[1.2] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const HeadingMD = ({ children, className = '', as: Component = 'h3', ...props }) => {
  return (
    <Component
      className={`font-serif text-xl md:text-[28px] font-light tracking-wide text-text-charcoal leading-snug ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const BodyLG = ({ children, className = '', as: Component = 'p', ...props }) => {
  return (
    <Component
      className={`font-sans text-lg md:text-[20px] font-light text-text-stone-grey leading-[1.7] tracking-wide ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Body = ({ children, className = '', as: Component = 'p', ...props }) => {
  return (
    <Component
      className={`font-sans text-[18px] font-light text-text-stone-grey leading-[1.7] tracking-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Caption = ({ children, className = '', as: Component = 'span', ...props }) => {
  return (
    <Component
      className={`font-sans text-xs uppercase tracking-[0.2em] text-accent-bronze font-medium ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Quote = ({ children, className = '', cite = '', ...props }) => {
  return (
    <div className={`my-12 border-l-2 border-accent-bronze/40 pl-8 ${className}`} {...props}>
      <blockquote className="font-serif text-lg md:text-2xl italic text-accent-bronze leading-[1.6] font-light">
        {children}
      </blockquote>
      {cite && (
        <cite className="block mt-3 font-sans text-xs tracking-widest uppercase text-text-stone-grey not-italic font-medium">
          — {cite}
        </cite>
      )}
    </div>
  );
};
