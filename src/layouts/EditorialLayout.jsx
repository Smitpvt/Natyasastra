import React from 'react';
import { Outlet } from 'react-router-dom';

export const EditorialLayout = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-28 md:py-36 relative">
      {/* Editorial Side Margins for Large Screens */}
      <div className="absolute top-28 left-6 md:left-12 hidden xl:block pointer-events-none">
        <span className="font-sans text-[9px] uppercase tracking-widest text-accent-bronze/70 border-b border-accent-bronze/10 pb-2">
          Ārcival Serīs • Archive Series
        </span>
      </div>
      
      <div className="absolute top-28 right-6 md:right-12 hidden xl:block pointer-events-none text-right">
        <span className="font-sans text-[9px] uppercase tracking-widest text-accent-bronze/70 border-b border-accent-bronze/10 pb-2">
          MCMXXIV
        </span>
      </div>

      {/* Main Scholarly Reading Body */}
      <article className="prose prose-stone max-w-prose mx-auto">
        <Outlet />
      </article>
    </div>
  );
};

export default EditorialLayout;
