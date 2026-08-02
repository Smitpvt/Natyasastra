import React from 'react';
import Section from '../../components/Section';
import { HeadingLG, BodyLG, Body, Caption, Quote } from '../../components/Typography';

export const Welcome = () => {
  return (
    <Section id="welcome" className="bg-bg-ivory border-b border-border-stone/20">
      <div className="max-w-3xl mx-auto text-center space-y-12 py-12">
        {/* Subtle Category */}
        <div className="space-y-4">
          <Caption>Our Genesis</Caption>
          <HeadingLG>
            The Architecture of Stillness
          </HeadingLG>
          <div className="w-12 h-[1px] bg-accent-bronze/30 mx-auto" />
        </div>

        {/* Narrative columns */}
        <div className="space-y-8">
          <BodyLG className="font-serif italic text-accent-bronze/90 leading-[1.6]">
            We bridge the chasm between ancient Indian wisdom and contemporary intellectual rigor. Here, the Nāṭyaśāstra is not merely a text, but a living ecosystem of body, sound, and consciousness.
          </BodyLG>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <Body>
              The Gurukulam is built on the philosophy that true civilisational renewal cannot occur through abstract analysis alone. It requires deep, embodied practice—Sādhanā—complemented by the rigorous study of Śāstra and the dialogue of Saṃvāda.
            </Body>
            <Body>
              Within these walls, we host students, scholars, and masters who seek to slow down, return to the origins, and reconstruct classical frameworks for the contemporary world.
            </Body>
          </div>
        </div>

        {/* Large classical quote */}
        <div className="pt-6">
          <Quote cite="Abhinaya Darpaṇa" className="border-l-0 pl-0 mx-auto max-w-xl text-center">
            "Yato hastas tato dṛṣṭir yato dṛṣṭis tato manaḥ |<br />
            Yato manas tato bhāvo yato bhāvas tato rasaḥ ||"
          </Quote>
        </div>
      </div>
    </Section>
  );
};

export default Welcome;
