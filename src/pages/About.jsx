import React from 'react';
import Section from '../components/Section';
import EditorialImage from '../components/EditorialImage';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption, Quote } from '../components/Typography';

export const About = () => {
  return (
    <div className="bg-bg-ivory pt-24">
      {/* Editorial Header */}
      <Section className="pb-12">
        <div className="max-w-3xl space-y-6">
          <Caption>Our Roots & Lineage</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-6xl font-light">
            A Living Entrance to Civilisational Memory
          </HeadingLG>
          <div className="w-20 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Nāṭyaśāstra Gurukulam was established not as a commercial school or an academic department, but as a sanctuary for the preservation of classical Indian aesthetics.
          </BodyLG>
        </div>
      </Section>

      {/* Split Image & Text: The Sacred Space */}
      <Section className="py-12 border-t border-accent-bronze/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <HeadingMD>Architectural Proportions of Sādhanā</HeadingMD>
            <Body>
              Our campus design is inspired directly by the stone geometries of the Brihadīśvara Temple and the caves of Ellora. We believe that aesthetic study cannot take place in sterile modern offices; it requires the weight of stone, the play of daylight and shadows on columns, and the centering silence of courtyard spaces.
            </Body>
            <Body>
              Every practice mandapa is built using traditional wooden beams and limestone flooring, mimicking the acoustics of traditional sabha spaces. Here, the physical space itself teaches rhythm, weight, and timelessness.
            </Body>
            <Quote cite="Abhinaya Darpaṇa">
              "The dancer must become still like the temple pillar before the dynamic rhythm can unfold."
            </Quote>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              src="/assets/images/corridor_clean.png"
              alt="Temple Corridor Stone Pillars"
              aspectRatio="aspect-[4/3]"
              caption="The play of light and shadow in our central study hall"
              copyright="Gurukulam Architecture"
            />
          </div>
        </div>
      </Section>

      {/* The Lineage Block */}
      <Section className="py-20 border-t border-accent-bronze/10 bg-bg-paper">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <HeadingMD className="text-accent-bronze">The Custodians of Śāstra</HeadingMD>
          <Body className="italic text-base md:text-lg">
            "We do not own this knowledge; we serve it. The texts of Bharata Muni, the commentary of Abhinavagupta, and the sculptural friezes are our only guides. Our work is a silent somatic archaeology—translating paper and stone back into flesh and breath."
          </Body>
          <span className="block font-sans text-xs uppercase tracking-widest text-text-stone-grey">
            — Acharya V. Sastri & Guru Meera Devi
          </span>
        </div>
      </Section>
    </div>
  );
};

export default About;
