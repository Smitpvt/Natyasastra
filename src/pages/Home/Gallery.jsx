import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, Caption, EditorialLink } from '../../components/Typography';

const GALLERY_PREVIEW_IMAGES = [
  {
    src: '/assets/images/corridor_clean.png',
    alt: 'Temple Corridor Stone Pillars',
    aspect: 'aspect-[3/2]',
    caption: 'Mandapa spatial geometry, Brihadīśvara residency study'
  },
  {
    src: '/assets/images/sculpture_clean.png',
    alt: 'Dancer sculpture stone carving',
    aspect: 'aspect-[3/4]',
    caption: 'Karana sculpture reconstruction, temple friezes study'
  },
  {
    src: '/assets/images/banyan.png',
    alt: 'Traditional classroom under banyan tree',
    aspect: 'aspect-[16/10]',
    caption: 'Recitation and instruction in the temple courtyard'
  },
  {
    src: '/assets/images/sastri_clean.png',
    alt: 'Scholar writing at desk in library',
    aspect: 'aspect-[3/4]',
    caption: 'Acharya V. Sastri translating palm-leaf manuscripts'
  },
  {
    src: '/assets/images/meera_clean.png',
    alt: 'Dancer performing hand abhinaya mudra',
    aspect: 'aspect-[3/4]',
    caption: 'Guru Meera Devi demonstrating Karaṇa mudras'
  }
];

export const Gallery = () => {
  return (
    <Section id="gallery" background="ivory" divider={true}>
      <div className="space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-linen/80 pb-6">
          <div className="space-y-3 max-w-2xl">
            <Caption>Visual Records</Caption>
            <HeadingLG>Gurukulam Gallery</HeadingLG>
          </div>
          <EditorialLink to="/gallery">
            View Complete Gallery
          </EditorialLink>
        </div>

        {/* Clean Unboxed Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_PREVIEW_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid inline-block w-full space-y-2 group">
              <div className={`w-full overflow-hidden border border-border-linen/40 ${img.aspect}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-[0.98] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>
              <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">
                {img.caption}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;

