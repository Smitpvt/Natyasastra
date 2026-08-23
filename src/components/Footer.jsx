import React from 'react';
import { Link } from 'react-router-dom';
import interimEmblem from '../assets/Interim emblem1-Photoroom.png';


export const Footer = () => {
  return (
    <footer className="bg-[#F3EEE6] border-t border-[#E0D8CE]/40 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Four Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 pb-16 sm:pb-24">
          {/* Column 1: Logo & Brief Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group select-none">
              <img
                src={interimEmblem}
                alt="Nāṭyaśāstra Gurukulam Emblem"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-[22px] tracking-wide text-[#211F1D] block italic leading-tight">
                  Nāṭyaśāstra Gurukulam
                </span>
                <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-accent-bronze font-medium mt-1">
                  A Centre of Civilisational Statecraft
                </span>
              </div>
            </Link>
            <p className="font-sans text-[14px] leading-relaxed text-[#757069] font-light max-w-xs">
              A living institution dedicated to the study, practice, and renewal of <em className="italic">Nāṭya</em> as a civilisational knowledge system.
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
              <Link to="/library" className="hover:text-accent-bronze transition-colors duration-300">Publications</Link>
              <Link to="/programmes" className="hover:text-accent-bronze transition-colors duration-300">Programmes</Link>
              <Link to="/gallery" className="hover:text-accent-bronze transition-colors duration-300">Gallery</Link>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold">
              Contact Us
            </span>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-[#757069] font-light">
              <p>
                Ms. Darafsha Shaikh / Ms. Vasanti Choudhary
              </p>
              <a href="mailto:info.natyasastra@gmail.com" className="hover:text-accent-bronze transition-colors duration-300">
                Email: info.natyasastra@gmail.com
              </a>
              <a href="tel:+917715969599" className="hover:text-accent-bronze transition-colors duration-300">
                Phone: +91 77159 69599
              </a>
              <p className="leading-relaxed">
                F7, 2/2, Aishwarya, Sector 7,<br />
                Sanpada, Navi Mumbai 400705
              </p>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-semibold">
              Social Links
            </span>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-[#757069]">
              <a href="https://www.instagram.com/natyashastragurukulam/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">YouTube</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">Twitter / X</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bronze transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Thin Divider above copyright */}
        <div className="border-t border-[#E0D8CE]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[11px] text-[#757069]/60 uppercase tracking-widest">
            © {new Date().getFullYear()} <span className="italic">Nāṭyaśāstra Gurukulam</span>. All rights reserved.
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
