import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, Body, Caption, EditorialLink } from '../../components/Typography';

export const Welcome = () => {
  return (
    <Section id="welcome" background="ivory" divider={true}>
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <Caption>Orientation</Caption>
          <HeadingLG>
            A Sanctuary for Sacred Arts, Intellectual Rigor & Civilisational Memory
          </HeadingLG>
        </div>

        <div className="space-y-8 text-left md:text-center max-w-3xl mx-auto">
          <Body className="text-xl md:text-[21px] font-serif leading-[1.85] italic text-text-primary/90">
            Nāṭyaśāstra Gurukulam is an institution dedicated to the preservation, practice, and scholarly revitalization of India's classical performative and metaphysical arts.
          </Body>

          <Body>
            Here, the Nāṭyaśāstra is not merely an ancient treatise, but a living ecosystem of body, sound, and consciousness. We bridge traditional Gurukulam pedagogy with rigorous modern scholarship—nurturing practitioners who carry deep civilisational awareness alongside artistic mastery.
          </Body>

          <div className="pt-4 flex justify-center">
            <EditorialLink to="/about">
              Explore Our Vision & Heritage
            </EditorialLink>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Welcome;

