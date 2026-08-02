import React from 'react';
import Section from '../components/Section';
import EditorialImage from '../components/EditorialImage';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

export const MentorsDetail = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Editorial Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Our Mentors & Linage</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Living Lineages
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Transmission in the Gurukulam is deeply human, passed down individually from master to student.
          </BodyLG>
        </div>
      </Section>

      {/* Acharya V. Sastri Profile */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 max-w-[300px] lg:max-w-none mx-auto w-full">
            <EditorialImage
              src="/assets/images/sastri_clean.png"
              alt="Acharya V. Sastri"
              aspectRatio="aspect-[3/4]"
              copyright="Gurukulam Portrait"
              caption="Acharya V. Sastri, Mahopadhyaya"
            />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <Caption className="text-accent-bronze/80">Mahopadhyaya</Caption>
              <HeadingMD className="text-2xl md:text-3xl text-text-charcoal font-light">
                Acharya V. Sastri
              </HeadingMD>
            </div>
            
            <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
              Custodian of Abhinavagupta’s aesthetic philosophy and Kashmirian Tantric texts.
            </BodyLG>

            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                Acharya V. Sastri is a revered scholar who has dedicated over forty years to translating and interpreting the aesthetic treatises of Kashmir Shaivism, specifically the work of Abhinavagupta. Holding a traditional Mahopadhyaya degree, his expertise lies in the integration of Sanskrit grammar, metaphysics, and performative theory.
              </Body>
              <Body>
                At the Gurukulam, he oversees the translation of palm leaf manuscripts and runs daily seminars on the Abhinavabhāratī (the only surviving commentary on the Nāṭyaśāstra). His lectures connect the metaphysical concepts of Spanda (vibration) and Pratibhā (creative intuition) with the kinetic rhythm of the performer.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Guru Meera Devi Profile */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 max-w-[300px] lg:max-w-none mx-auto w-full order-1 lg:order-2">
            <EditorialImage
              src="/assets/images/meera_clean.png"
              alt="Guru Meera Devi"
              aspectRatio="aspect-[3/4]"
              copyright="Gurukulam Portrait"
              caption="Guru Meera Devi, Nritya-Kalanidhi"
            />
          </div>
          <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <Caption className="text-accent-bronze/80">Nritya-Kalanidhi</Caption>
              <HeadingMD className="text-2xl md:text-3xl text-text-charcoal font-light">
                Guru Meera Devi
              </HeadingMD>
            </div>
            
            <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
              Master practitioner and pioneer of Karana somatic reconstruction.
            </BodyLG>

            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                Guru Meera Devi is a highly acclaimed classical dancer and somatic researcher. Trained under ancient traditional systems in South India, she has spent decades decoding the 108 Karanas—classical movement postures carved on the gateways of Tanjore and Chidambaram temples.
              </Body>
              <Body>
                Her teaching methodology is deeply physical, focusing on reconstruction, alignment, breath flow (Prāṇa), and dramatic expression (Abhinaya). She helps students move beyond modern commercial choreography to find the sacred geometric postures detailed in Sanskrit treatises.
              </Body>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MentorsDetail;
