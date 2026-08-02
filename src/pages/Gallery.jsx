import React from 'react';
import Section from '../components/Section';
import EditorialImage from '../components/EditorialImage';
import { HeadingLG, BodyLG, Caption } from '../components/Typography';

const ARCHIVE_IMAGES = [
  {
    src: '/assets/images/corridor_clean.png',
    alt: 'Temple corridor pillars',
    aspect: 'aspect-[3/2]',
    title: 'Brihadīśvara Sabha Corridors',
    desc: 'Photographed during the winter research residency. The structural geometry of the columns directly mirrors the rhythm cycles of the first two chapters of the Nāṭyaśāstra.',
    date: 'MCMXXIV'
  },
  {
    src: '/assets/images/sculpture_clean.png',
    alt: 'Stone dancer sculpture',
    aspect: 'aspect-[3/4]',
    title: 'Karana Stone Friezes, Chidambaram',
    desc: 'Detailed detail of a dancer executing a classical Karana (posture transition). Our scholars analyze these 12th-century stone carvings to map kinetic paths.',
    date: 'MCMXXIII'
  },
  {
    src: '/assets/images/banyan_clean.png',
    alt: 'Banyan tree classroom circle',
    aspect: 'aspect-[16/10]',
    title: 'Sabha Under the Banyan Tree',
    desc: 'Traditional evening assembly where students recite the metred verses (chandas) of Sanskrit manuals under the gaze of the gurukulam masters.',
    date: 'MCMXXIV'
  },
  {
    src: '/assets/images/sastri_clean.png',
    alt: 'Acharya V. Sastri writing in library',
    aspect: 'aspect-[3/4]',
    title: 'The Sanskrit Library Desk',
    desc: 'Acharya V. Sastri cross-referencing handwritten palm leaf facsimiles with the standard Baroda Sanskrit series of the Nāṭyaśāstra.',
    date: 'MCMXXIV'
  },
  {
    src: '/assets/images/meera_clean.png',
    alt: 'Guru Meera Devi mudra demo',
    aspect: 'aspect-[3/4]',
    title: 'Abhinaya Mudra Somatics',
    desc: 'Guru Meera Devi demonstrating the precise geometric position of hand gestures (hastas) to convey transcendental aesthetic moods (Bhāva).',
    date: 'MCMXXIII'
  }
];

export const Gallery = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Documentary Archives</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            The Photographic Journal
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Visual evidence from our somatic research residencies, manuscript cataloging projects, and courtyard assemblies.
          </BodyLG>
        </div>
      </Section>

      {/* Masonry Columns */}
      <Section className="py-12">
        <div className="columns-1 md:columns-2 gap-12 space-y-12">
          {ARCHIVE_IMAGES.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid bg-bg-paper p-6 border border-accent-bronze/10 shadow-sm inline-block w-full group"
            >
              {/* Photo component */}
              <EditorialImage
                src={item.src}
                alt={item.alt}
                aspectRatio={item.aspect}
              />
              
              {/* Journal Notes */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-baseline gap-4 border-b border-accent-bronze/5 pb-2">
                  <span className="font-serif text-lg text-text-charcoal font-light">
                    {item.title}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent-bronze">
                    {item.date}
                  </span>
                </div>
                <p className="font-sans text-xs text-text-stone-grey leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
