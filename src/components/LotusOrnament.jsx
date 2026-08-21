import React from 'react';

// SVG Lotus Motif Icon
export const LotusIcon = ({ className = "w-6 h-6 text-[#9E743B]", fill = "none" }) => (
  <svg viewBox="0 0 32 32" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 4C16 4 13.5 9 13.5 13C13.5 15.5 14.6 17.5 16 18C17.4 17.5 18.5 15.5 18.5 13C18.5 9 16 4 16 4Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 18C13 17 9 14 7 10C6.5 13 8 17 11 19.5C13.5 21.5 16 21 16 21C16 21 18.5 21.5 21 19.5C24 17 25.5 13 25 10C23 14 19 17 16 18Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 19.5C7.5 19 4 16 3 13.5C3.5 17 6.5 20.5 10 22C13 23.3 16 22.5 16 22.5C16 22.5 19 23.3 22 22C25.5 20.5 28.5 17 29 13.5C28 16 24.5 19 21 19.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 22.5V27M13 27H19"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Horizontal Lotus Flourish Divider
export const LotusDivider = ({ className = "my-6", text = null }) => {
  const hasJustify = className.split(' ').some(c => c.startsWith('justify-') || c.includes(':justify-'));
  return (
    <div className={`flex items-center gap-4 ${hasJustify ? '' : 'justify-center'} ${className}`}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#9E743B]/40 to-[#9E743B]/60 flex-1 max-w-[140px]" />
      <div className="flex items-center gap-2 text-[#9E743B]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E743B]/60" />
        <LotusIcon className="w-5 h-5 text-[#9E743B]" fill="currentColor" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E743B]/60" />
      </div>
      {text && <span className="font-serif italic text-xs uppercase tracking-widest text-[#9E743B] px-2">{text}</span>}
      <div className="h-[1px] bg-gradient-to-l from-transparent via-[#9E743B]/40 to-[#9E743B]/60 flex-1 max-w-[140px]" />
    </div>
  );
};

// Corner Lotus Accent for Frame Corners
export const CornerLotus = ({ position = "top-left" }) => {
  const posClasses = {
    'top-left': 'top-1.5 left-1.5',
    'top-right': 'top-1.5 right-1.5 rotate-90',
    'bottom-left': 'bottom-1.5 left-1.5 -rotate-90',
    'bottom-right': 'bottom-1.5 right-1.5 rotate-180'
  };

  return (
    <div className={`absolute ${posClasses[position]} text-[#9E743B]/60 pointer-events-none z-10`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2H10M2 2V10M2 2L8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="4" cy="4" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

// Ornate Prospectus Double Gold Framed Container
export const ProspectusFrame = ({ children, className = "", innerClassName = "p-8 sm:p-12" }) => (
  <div className={`relative bg-[#F5F0E6] rounded-xl border-2 border-[#9E743B]/30 p-1.5 shadow-[0_10px_35px_rgba(158,116,59,0.08)] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#9E743B]/5 pointer-events-none rounded-xl" />
    
    {/* Inner double gold line boundary */}
    <div className={`relative border border-[#9E743B]/25 rounded-lg bg-[#FAF6F0]/90 backdrop-blur-xs ${innerClassName}`}>
      <CornerLotus position="top-left" />
      <CornerLotus position="top-right" />
      <CornerLotus position="bottom-left" />
      <CornerLotus position="bottom-right" />
      {children}
    </div>
  </div>
);

// SVG Brass Diya Lamp Icon with Flame
export const BrassDiyaIcon = ({ className = "w-8 h-8", glow = true }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    {glow && (
      <div className="absolute -top-1.5 w-4 h-5 bg-[#E69D35] rounded-full filter blur-[3px] opacity-70 animate-pulse" />
    )}
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Flame */}
      <path
        d="M18 3C18 3 14.5 9 14.5 12C14.5 14 16 15.5 18 15.5C20 15.5 21.5 14 21.5 12C21.5 9 18 3 18 3Z"
        fill="url(#flameGrad)"
      />
      <path
        d="M18 6C18 6 16 9.5 16 11.5C16 12.8 16.8 13.8 18 13.8C19.2 13.8 20 12.8 20 11.5C20 9.5 18 6 18 6Z"
        fill="#FFE699"
      />
      {/* Lamp Body */}
      <path
        d="M6 21C6 21 8 27 18 27C28 27 30 21 30 21C30 21 27 19.5 18 19.5C9 19.5 6 21 6 21Z"
        fill="url(#goldGrad)"
        stroke="#7A5428"
        strokeWidth="0.8"
      />
      {/* Lamp Base Stand */}
      <path
        d="M13 27L12 31H24L23 27H13Z"
        fill="url(#goldGrad)"
        stroke="#7A5428"
        strokeWidth="0.8"
      />
      <path
        d="M10 31H26V32.5H10V31Z"
        fill="#805335"
      />
      <defs>
        <linearGradient id="flameGrad" x1="18" y1="3" x2="18" y2="15.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF2A3" />
          <stop offset="0.5" stopColor="#FF9900" />
          <stop offset="1" stopColor="#CC3300" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="6" y1="19.5" x2="30" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AF37" />
          <stop offset="0.5" stopColor="#AA7A2B" />
          <stop offset="1" stopColor="#6E4A19" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Illuminated Drop Cap
export const DropCap = ({ letter = "D", className = "" }) => (
  <span className={`float-left font-serif text-5xl sm:text-6xl font-light text-[#9E743B] leading-none pr-3 pt-1 select-none ${className}`}>
    {letter}
  </span>
);

const LotusOrnament = {
  LotusIcon,
  LotusDivider,
  CornerLotus,
  ProspectusFrame,
  BrassDiyaIcon,
  DropCap
};

export default LotusOrnament;
