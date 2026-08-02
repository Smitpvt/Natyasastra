import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

export const Associate = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Patronage & Fellowship</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Associate With Us
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Sustaining a living tradition requires alignment of vision and quiet, uninterrupted support.
          </BodyLG>
        </div>
      </Section>

      {/* Pathways */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Pathway 1 */}
          <div className="border border-accent-bronze/10 bg-bg-paper p-8 flex flex-col justify-between h-[360px] relative">
            <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />
            <div className="space-y-4">
              <span className="font-serif text-3xl text-accent-bronze/40 block">01</span>
              <HeadingMD className="text-xl">Scholarly Fellowship</HeadingMD>
              <Body className="text-xs text-text-stone-grey leading-relaxed font-light">
                For researchers in Sanskrit classics, Dravidian temple architecture, or movement archaeology. We offer fully funded residential fellowships to translate texts and compile somatic research papers.
              </Body>
            </div>
            <Link
              to="/contact"
              className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze hover:text-text-muted-black transition-colors"
            >
              Submit Proposal →
            </Link>
          </div>

          {/* Pathway 2 */}
          <div className="border border-accent-bronze/10 bg-bg-paper p-8 flex flex-col justify-between h-[360px] relative">
            <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />
            <div className="space-y-4">
              <span className="font-serif text-3xl text-accent-bronze/40 block">02</span>
              <HeadingMD className="text-xl">Manuscript Patronage</HeadingMD>
              <Body className="text-xs text-text-stone-grey leading-relaxed font-light">
                Directly sponsor the digitisation, chemical preservation, and cataloging of palm-leaf bundles. Patrons receive monograph prints and high-resolution facsimile updates on sponsored scriptures.
              </Body>
            </div>
            <Link
              to="/contact"
              className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze hover:text-text-muted-black transition-colors"
            >
              Inquire for Sponsorship →
            </Link>
          </div>

          {/* Pathway 3 */}
          <div className="border border-accent-bronze/10 bg-bg-paper p-8 flex flex-col justify-between h-[360px] relative">
            <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />
            <div className="space-y-4">
              <span className="font-serif text-3xl text-accent-bronze/40 block">03</span>
              <HeadingMD className="text-xl">Residency Cohorts</HeadingMD>
              <Body className="text-xs text-text-stone-grey leading-relaxed font-light">
                Participate in intensive, silent study cohorts of 3 or 6 months. Designed for active practitioners and teachers who wish to deconstruct and reformulate their training methods from the root.
              </Body>
            </div>
            <Link
              to="/contact"
              className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze hover:text-text-muted-black transition-colors"
            >
              Register Interest →
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Associate;
