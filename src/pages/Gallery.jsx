import React from 'react';
import GlimpsesAndMedia from '../components/GlimpsesAndMedia';
import { useSEO } from '../hooks/useSEO';

export const Gallery = () => {
  useSEO({
    title: 'Glimpses & Media — Visual & Media Archive',
    description: 'Explore the curated visual and media archive documenting the inaugural Pratiṣṭhā Samāroham, research immersions, video recordings, and press highlights of Nāṭyaśāstra Gurukulam.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Glimpses & Media',
      'description': 'Curated visual and media archive of the Nāṭyaśāstra Gurukulam.',
      'url': typeof window !== 'undefined' ? window.location.origin + '/gallery' : ''
    }
  });

  return (
    <div className="bg-[#F5F0E6] pt-20 min-h-screen">
      <GlimpsesAndMedia />
    </div>
  );
};

export default Gallery;
