import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, Body, Caption, OutlinedButton, EditorialLink } from '../../components/Typography';

export const Associate = () => {
  return (
    <Section id="associate" background="parchment" divider={true}>
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <Caption>An Alignment of Vision</Caption>
          <HeadingLG>Associate With the Gurukulam</HeadingLG>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto text-left md:text-center">
          <Body className="font-serif italic text-xl md:text-[22px] text-text-primary/90 leading-relaxed">
            "We seek intellectual and spiritual alignment, not commercial transaction."
          </Body>

          <Body>
            Nāṭyaśāstra Gurukulam is sustained by those who recognize the vital imperative of uninterrupted scholarship. We invite scholars of Sanskrit treatises, practitioners of classical Indian arts, temple architects, and patrons of culture to participate in our mission of civilisational renewal.
          </Body>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <OutlinedButton to="/associate">
            Participate in Our Vision
          </OutlinedButton>
          <EditorialLink to="/contact">
            Initiate a Dialogue
          </EditorialLink>
        </div>
      </div>
    </Section>
  );
};

export default Associate;

