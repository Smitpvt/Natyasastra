import React from 'react';
import { Link } from 'react-router-dom';

export const HeadingXL = ({ children, className = '', as: Component = 'h1', ...props }) => {
  return (
    <Component
      className={`font-serif text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-light tracking-[0.01em] text-text-primary leading-[1.12] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const HeadingLG = ({ children, className = '', as: Component = 'h2', ...props }) => {
  return (
    <Component
      className={`font-serif text-[26px] sm:text-[32px] md:text-[42px] lg:text-[46px] font-light tracking-[0.01em] text-text-primary leading-[1.18] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const HeadingMD = ({ children, className = '', as: Component = 'h3', ...props }) => {
  return (
    <Component
      className={`font-serif text-[20px] sm:text-[22px] md:text-[26px] font-light tracking-wide text-text-primary leading-snug ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const BodyLG = ({ children, className = '', as: Component = 'p', ...props }) => {
  return (
    <Component
      className={`font-sans text-[18px] md:text-[20px] font-light text-text-secondary leading-[1.8] tracking-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Body = ({ children, className = '', as: Component = 'p', ...props }) => {
  return (
    <Component
      className={`font-sans text-[18px] font-light text-text-secondary leading-[1.8] tracking-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Caption = ({ children, className = '', as: Component = 'span', ...props }) => {
  return (
    <Component
      className={`font-sans text-[14px] uppercase tracking-[0.25em] text-accent-bronze font-medium ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const EditorialLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.2em] font-medium text-accent-bronze hover:text-text-primary transition-colors duration-500 py-1 ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="text-[11px] transform transition-transform duration-500 group-hover:translate-x-1">→</span>
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent-bronze group-hover:w-full transition-all duration-500 ease-out" />
    </Link>
  );
};

export const OutlinedButton = ({ to, children, className = '', ...props }) => {
  return (
    <Link
      to={to}
      className={`inline-block px-8 py-3.5 border border-accent-bronze/80 text-accent-bronze font-sans text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-accent-bronze hover:text-bg-ivory transition-all duration-500 ease-out text-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Quote = ({ children, className = '', cite = '', ...props }) => {
  return (
    <div className={`my-16 text-center max-w-4xl mx-auto px-6 ${className}`} {...props}>
      <blockquote className="font-serif text-2xl md:text-3xl lg:text-[34px] italic text-text-primary leading-[1.5] font-light">
        "{children}"
      </blockquote>
      {cite && (
        <cite className="block mt-6 font-sans text-xs tracking-[0.25em] uppercase text-accent-bronze not-italic font-medium">
          — {cite}
        </cite>
      )}
    </div>
  );
};

