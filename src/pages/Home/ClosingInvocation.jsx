import React from 'react';
import { Caption, HeadingLG, OutlinedButton } from '../../components/Typography';

export const ClosingInvocation = () => {
  return (
    <section className="relative py-28 md:py-36 bg-bg-ivory border-t border-border-linen/60 text-center select-none">
      <div className="max-w-3xl mx-auto px-8 space-y-8 flex flex-col items-center">
        <Caption>Begin the Journey</Caption>
        
        <HeadingLG className="max-w-2xl mx-auto leading-snug">
          Join our residential or digital programmes to re-engage with the living roots of Indian aesthetic wisdom.
        </HeadingLG>

        <div className="pt-4">
          <OutlinedButton to="/contact">
            Register Interest / Inquire
          </OutlinedButton>
        </div>
      </div>
    </section>
  );
};

export default ClosingInvocation;

