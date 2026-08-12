import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#F3EEE6] border-t border-[#E0D8CE]/40 pt-32 pb-16 mt-auto">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[80px]">
        {/* Four Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-24">
          {/* Column 1: Logo & Brief Description */}
          <div className="space-y-6">
            <span className="font-serif text-[22px] tracking-wide text-[#211F1D] block">
              Nāṭyaśāstra Gurukulam
            </span>
            <p className="font-sans text-[14px] leading-relaxed text-[#757069] font-light max-w-xs">
              A heritage institution dedicated to the study, somatic reconstruction, and preservation of classical Indian performing arts and aesthetic systems.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold">
              Navigation
            </span>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-[#757069]">
              <Link to="/" className="hover:text-accent-bronze transition-colors duration-300">Home</Link>
              <Link to="/about" className="hover:text-accent-bronze transition-colors duration-300">About</Link>
              <Link to="/approach" className="hover:text-accent-bronze transition-colors duration-300">Approaches</Link>
              <Link to="/library" className="hover:text-accent-bronze transition-colors duration-300">Publications</Link>
              <Link to="/gallery" className="hover:text-accent-bronze transition-colors duration-300">Gallery</Link>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold">
              Contact Us
            </span>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-[#757069] font-light">
              <p>Email: academic@natyasastra.org</p>
              <p>Phone: +91 44 2491 0000</p>
              <p className="leading-relaxed">
                Gurukulam Road, Near Banyan Temple,<br />
                Vellore District, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold">
              Social Links
            </span>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-[#757069]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">YouTube</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">Twitter / X</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Thin Divider above copyright */}
        <div className="border-t border-[#E0D8CE]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[11px] text-[#757069]/60 uppercase tracking-widest">
            © {new Date().getFullYear()} Nāṭyaśāstra Gurukulam. All rights reserved.
          </span>
          <span className="font-serif text-[12px] text-accent-bronze/70 italic tracking-widest">
            Śāstra • Sādhanā • Saṃvāda
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
