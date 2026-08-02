import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
import EditorialImage from '../../components/EditorialImage';
import { HeadingLG, Caption } from '../../components/Typography';

const GALLERY_PREVIEW_IMAGES = [
  {
    src: '/assets/images/corridor_clean.png',
    alt: 'Temple Corridor Stone Pillars',
    aspect: 'aspect-[3/2]',
    caption: 'Mandapa spatial geometry, Brihadīśvara residency study',
    copyright: '2024'
  },
  {
    src: '/assets/images/sculpture_clean.png',
    alt: 'Dancer sculpture stone carving',
    aspect: 'aspect-[3/4]',
    caption: 'Karana sculpture reconstruction, temple friezes study',
    copyright: '2023'
  },
  {
    src: '/assets/images/banyan_clean.png',
    alt: 'Traditional classroom under banyan tree',
    aspect: 'aspect-[16/10]',
    caption: 'Evening recitation and instruction in the temple courtyard',
    copyright: '2024'
  },
  {
    src: '/assets/images/sastri_clean.png',
    alt: 'Scholar writing at desk in library',
    aspect: 'aspect-[3/4]',
    caption: 'Acharya V. Sastri translating palm leaf codices',
    copyright: '2024'
  },
  {
    src: '/assets/images/meera_clean.png',
    alt: 'Dancer performing hand abhinaya mudra',
    aspect: 'aspect-[3/4]',
    caption: 'Guru Meera Devi demonstrating Karana mudras',
    copyright: '2023'
  }
];

export const Gallery = () => {
  return (
    <Section id="gallery" className="bg-bg-paper border-b border-border-stone/20">
      <div className="space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-border-stone pb-8">
          <div className="space-y-3">
            <Caption>Documentary Records</Caption>
            <HeadingLG>Gurukulam Gallery</HeadingLG>
          </div>
          <Link
            to="/gallery"
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent-bronze hover:text-accent-gold transition-colors border-b border-accent-bronze/20 hover:border-accent-gold pb-1.5 duration-500"
          >
            View Full Gallery →
          </Link>
        </div>

        {/* Masonry-like Column Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_PREVIEW_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid bg-bg-ivory p-5 border border-border-stone shadow-sm inline-block w-full hover:border-accent-bronze/25 transition-colors duration-500">
              <EditorialImage
                src={img.src}
                alt={img.alt}
                aspectRatio={img.aspect}
                caption={img.caption}
                copyright={img.copyright}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
