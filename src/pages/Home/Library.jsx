import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, Caption, EditorialLink } from '../../components/Typography';

const PUBLICATIONS = [
  {
    catalogNo: 'MS-MONO-01',
    title: 'The Reconstruction of Karaṇas: Somatics of Nāṭyaśāstra',
    authors: 'Acharya V. Sastri & Guru Meera Devi',
    category: 'Critical Treatise Study',
    date: '2024 Edition'
  },
  {
    catalogNo: 'MS-MONO-02',
    title: 'Dhvani & Rasa Aesthetics: Metaphysics of Sound & Emotion',
    authors: 'Acharya V. Sastri',
    category: 'Aesthetic Philosophy',
    date: '2023 Edition'
  },
  {
    catalogNo: 'MS-MONO-03',
    title: 'Sthāpatya: Proportions & Geometry of Classical Mandapas',
    authors: 'Gurukulam Research Group',
    category: 'Sacred Architecture',
    date: '2023 Edition'
  },
  {
    catalogNo: 'MS-MONO-04',
    title: 'Vācika: Phonetics and Intonation of Vedic Chanting',
    authors: 'Guru Meera Devi',
    category: 'Vocal Hermeneutics',
    date: '2022 Edition'
  }
];

export const Library = () => {
  return (
    <Section id="library" background="ivory" divider={true}>
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-linen/80 pb-6">
          <div className="space-y-3 max-w-2xl">
            <Caption>Academic Archive</Caption>
            <HeadingLG>Gurukulam Monographs & Publications</HeadingLG>
          </div>
          <EditorialLink to="/library">
            Browse Full Archive
          </EditorialLink>
        </div>

        {/* Museum Catalog Archive Table / Grid */}
        <div className="divide-y divide-border-linen/60">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.catalogNo}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-bg-parchment/50 transition-colors duration-500 px-4 -mx-4"
            >
              <div className="md:col-span-2 font-serif text-sm italic text-accent-bronze">
                {pub.catalogNo}
              </div>

              <div className="md:col-span-6 space-y-1">
                <h3 className="font-serif text-xl md:text-2xl font-light text-text-primary group-hover:text-accent-bronze transition-colors duration-500">
                  {pub.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-text-secondary">
                  Authors: {pub.authors}
                </p>
              </div>

              <div className="md:col-span-3 font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">
                {pub.category}
              </div>

              <div className="md:col-span-1 text-right">
                <EditorialLink to="/library">
                  View
                </EditorialLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Library;

