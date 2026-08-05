import React from 'react';
import Section from '../../components/Section';
import { Quote } from '../../components/Typography';

export const QuoteSection = () => {
  return (
    <Section id="quote-transition" background="parchment" divider={true} className="py-28 md:py-40">
      <Quote cite="Nāṭyaśāstra (Chapter I, Verse 117)">
        Yato hastas tato dṛṣṭir yato dṛṣṭis tato manaḥ |<br />
        Yato manas tato bhāvo yato bhāvas tato rasaḥ ||
      </Quote>
      <p className="text-center font-sans text-xs uppercase tracking-[0.25em] text-text-secondary mt-4">
        Where the hand goes, the eyes follow; where the eyes go, the mind follows;<br className="hidden md:inline" />
        where the mind goes, expression arises; where expression arises, aesthetic bliss is born.
      </p>
    </Section>
  );
};

export default QuoteSection;
