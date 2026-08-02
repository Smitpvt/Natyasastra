import React from 'react';
import { Link } from 'react-router-dom';
import { HeadingMD, Caption, Body } from './Typography';

export const Footer = () => {
  return (
    <footer className="bg-bg-paper border-t border-accent-bronze/10 pt-24 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Sanskrit Closing Invocation */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <HeadingMD className="text-accent-bronze/90 text-xl md:text-2xl mb-4 italic tracking-wider leading-relaxed">
            यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः ।<br />
            यतो मनस्ततो भावो यतो भावस्ततो रसः ॥
          </HeadingMD>
          <p className="font-serif italic text-sm text-text-stone-grey tracking-wide leading-relaxed">
            "Yato hastas tato dṛṣṭir yato dṛṣṭis tato manaḥ |<br />
            Yato manas tato bhāvo yato bhāvas tato rasaḥ ||"
          </p>
          <span className="block mt-3 font-sans text-[10px] uppercase tracking-widest text-accent-bronze/60">
            Abhinaya Darpaṇa
          </span>
        </div>

        {/* Footnotes / Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-accent-bronze/10 pt-16 pb-12">
          {/* Col 1: Gurukulam Name and core focus */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-lg tracking-wide text-text-muted-black">
              Nāṭyaśāstra Gurukulam
            </span>
            <Body className="text-sm text-text-stone-grey/85 max-w-xs font-light">
              An institution dedicated to the preservation, study, and physical reconstruction of classical Indian aesthetic systems.
            </Body>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <Caption className="mb-2">Gurukulam</Caption>
            <Link to="/about" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">About the Lineage</Link>
            <Link to="/approach" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">Our Approach</Link>
            <Link to="/mentors" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">Acharyas & Gurus</Link>
            <Link to="/programmes" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">Sacred Curricula</Link>
          </div>

          {/* Col 3: Research & Support */}
          <div className="flex flex-col gap-3">
            <Caption className="mb-2">Archives</Caption>
            <Link to="/library" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">Manuscripts & Publications</Link>
            <Link to="/gallery" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">Documentary Gallery</Link>
            <Link to="/news" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">News & Events</Link>
            <Link to="/associate" className="font-sans text-xs text-text-stone-grey hover:text-accent-bronze transition-colors">Associate With Us</Link>
          </div>

          {/* Col 4: Inquiry */}
          <div className="flex flex-col gap-3">
            <Caption className="mb-2">Dialogue</Caption>
            <Body className="text-xs text-text-stone-grey/85 font-light mb-1">
              For registrations, academic visits, or supporting the archives, initiate a dialogue.
            </Body>
            <Link to="/contact" className="inline-block text-left text-xs uppercase tracking-widest text-accent-bronze hover:text-text-muted-black transition-colors font-medium">
              Inquire & Contact →
            </Link>
          </div>
        </div>

        {/* Copyright and Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-accent-bronze/5 pt-8 text-center md:text-left">
          <span className="font-sans text-[10px] text-text-stone-grey/60 uppercase tracking-wider">
            © {new Date().getFullYear()} Nāṭyaśāstra Gurukulam. All rights reserved.
          </span>
          <span className="font-serif text-[11px] text-accent-bronze/60 uppercase tracking-widest">
            Śāstra • Sādhanā • Saṃvāda
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
