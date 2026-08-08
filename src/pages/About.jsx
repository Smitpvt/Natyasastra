import React from 'react';
import Section from '../components/Section';
import EditorialImage from '../components/EditorialImage';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption, Quote } from '../components/Typography';

export const About = () => {
  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Editorial Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-4xl space-y-4">
          <Caption>About the Gurukulam</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            A Living Entrance to Civilisational Memory
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Nāṭyaśāstra Gurukulam traces its beginnings to a series of intense, quiet dialogues between practitioners, scholars, and a few dedicated students. It was born not from an ambition to create a new organisation, but from an undeniable necessity to recover the authentic discipline of Nāṭyaśāstra before it dissolved entirely into modern choreographic performance.
          </BodyLG>
        </div>
      </Section>

      {/* Pratiṣṭhā Samāroham & Vision */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 w-full mx-auto">
            <EditorialImage
              src="/assets/images/sthapatya.png"
              alt="Sacred Altar Geometry"
              aspectRatio="aspect-square"
              caption="The Gurukulam was formally consecrated on November 23, 2025."
              copyright="Pratiṣṭhā Samāroham"
            />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <HeadingMD className="text-3xl text-text-charcoal font-light">
                Our Vision
              </HeadingMD>
              <div className="space-y-4">
                <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
                  An institution contributing, in perpetuity, to the Dhārmic renewal of public life in India and beyond—through graduates who embody the spirit of Rāma Rājya, with a sātvic blend of Dharma, sevā, self-transcendence, and aesthetic leadership.
                </BodyLG>
                <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
                  Rooted in the Nāṭyaśāstra and its allied disciplines, the Gurukulam nurtures custodians of rasa, rhythm, and responsibility—where presence itself is pedagogy, and governance flows from inner rhythm.
                </BodyLG>
              </div>
            </div>
            
            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                This vision shapes the Gurukulam's understanding of education. Its purpose is not merely to preserve artistic traditions, but to cultivate human beings whose inner refinement naturally expresses itself in ethical action, thoughtful leadership, and service to society. Nāṭya is therefore understood not only as an art of performance, but as an art of becoming.
              </Body>
              <Body>
                The Gurukulam was formally consecrated through its Pratiṣṭhā Samāroham at Śrī Subrahmaṇya Sevā Samāj, Navi Mumbai. Conceived not as the launch of an organisation but as an act of consecration, the ceremony affirmed a shared commitment to restoring the pedagogic, philosophical, and spiritual essence of the Nāṭyaśāstra in contemporary life.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Philosophy Section */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6 bg-white p-8 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group rounded-md">
            <HeadingMD className="text-xl group-hover:text-accent-bronze transition-colors duration-300">Why Nāṭyaśāstra?</HeadingMD>
            <Body className="text-text-stone-grey font-light">
              It is one of India's great civilisational knowledge systems, bringing together aesthetics, philosophy, ethics, psychology, pedagogy, architecture, music, movement, literature, and social order into an integrated vision of human flourishing. It refines perception, emotion, attention, and conduct, cultivating refined perceivers capable of recognising truth, beauty, and proportion.
            </Body>
          </div>
          <div className="space-y-6 bg-white p-8 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group rounded-md">
            <HeadingMD className="text-xl group-hover:text-accent-bronze transition-colors duration-300">Why a Gurukulam?</HeadingMD>
            <Body className="text-text-stone-grey font-light">
              It is a place where knowledge is transmitted through relationship rather than information alone; where study is inseparable from practice; where dialogue is grounded in humility; and where education seeks to shape character as much as competence. Learning unfolds through śāstra, sādhanā, and saṃvāda.
            </Body>
          </div>
          <div className="space-y-6 bg-white p-8 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group rounded-md">
            <HeadingMD className="text-xl group-hover:text-accent-bronze transition-colors duration-300">Distinctiveness</HeadingMD>
            <Body className="text-text-stone-grey font-light">
              We approach Nāṭya as a complete civilisational discipline in which aesthetics, philosophy, pedagogy, ethics, leadership, and public life remain inseparable. Its work extends beyond artistic training to encompass research, publications, pedagogy, civilisational dialogue, archives, institutional consulting, and leadership formation rooted in Dhārmic values.
            </Body>
          </div>
        </div>
      </Section>

      {/* Pillars & Engagement */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-bg-paper">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Caption>Our Approach</Caption>
            <HeadingMD className="text-3xl md:text-4xl">The Six Pillars</HeadingMD>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {[
              { title: 'Śāstra', desc: 'Rigorous study of the Nāṭyaśāstra, the Abhinavabhāratī, and allied knowledge traditions.' },
              { title: 'Sādhanā', desc: 'Embodied learning through disciplined practice, contemplative inquiry, movement, silence, and the refinement of perception.' },
              { title: 'Saṃvāda', desc: 'Dialogue rooted in humility, attentive listening, and the shared pursuit of understanding rather than assertion.' },
              { title: 'Paramparā', desc: 'Learning through living lineages and the guidance of teachers whose lives embody the principles they transmit.' },
              { title: 'Rasa', desc: 'Cultivating refined aesthetic perception as the foundation of education, culture, and ethical life.' },
              { title: 'Dharma', desc: 'Orienting knowledge toward responsibility, stewardship, and service.' }
            ].map((pillar) => (
              <div key={pillar.title} className="space-y-3">
                <span className="font-serif italic text-accent-bronze text-xl block">{pillar.title}</span>
                <Body className="text-text-stone-grey font-light text-sm">{pillar.desc}</Body>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-accent-bronze/10">
            <HeadingMD className="text-2xl mb-8">Areas of Engagement</HeadingMD>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Study of the Nāṭyaśāstra and its commentarial traditions',
                'Embodied practice and Nāṭya as Sādhanā',
                'Pedagogy and curriculum design',
                'Civilisational research and publications',
                'Archives and intellectual custodianship',
                'Saṃvāda among scholars, artistes, educators, and institutions',
                'Leadership and institutional consulting rooted in Dhārmic principles'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent-bronze mt-1 text-xs">✦</span>
                  <Body className="text-text-stone-grey font-light text-sm">{item}</Body>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Our Ethos */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <Caption>Our Ethos</Caption>
            <HeadingMD className="text-3xl md:text-4xl">Enduring Principles</HeadingMD>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Inner Order before Outer Achievement', desc: 'Lasting excellence begins with inner discipline.' },
              { title: 'Truthfulness as Practice', desc: 'Learning begins with honest perception, careful discernment, and intellectual integrity.' },
              { title: 'Depth before Display', desc: 'Refinement precedes recognition.' },
              { title: 'Silence and Listening', desc: 'Deep attention is the foundation of learning.' },
              { title: 'Reverence for Lineage', desc: 'Knowledge is received with gratitude and transmitted with responsibility.' },
              { title: 'Patience before Expansion', desc: 'Growth follows readiness rather than urgency.' },
              { title: 'Education for Custodianship', desc: 'Students are formed not merely as practitioners, but as future custodians of Nāṭya and Dharma.' }
            ].map((ethos) => (
              <div key={ethos.title} className="space-y-2 p-6 bg-bg-paper border border-accent-bronze/10 rounded-sm">
                <HeadingMD className="text-lg text-text-charcoal">{ethos.title}</HeadingMD>
                <Body className="text-text-stone-grey font-light text-sm">{ethos.desc}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Looking Ahead & Closing */}
      <Section className="py-20 bg-bg-paper">
        <div className="max-w-3xl mx-auto space-y-16 text-center">
          <div className="space-y-6">
            <Caption>Looking Ahead</Caption>
            <Body className="text-text-stone-grey font-light leading-relaxed">
              Nāṭyaśāstra Gurukulam is presently in its phase of <strong>sthāpanā</strong>, carefully consolidating its foundations, archives, pedagogic vision, and institutional relationships before expanding its public programmes. Residential immersions, study circles, workshops, lecture series, publications, research dialogues, and collaborations with scholars, artistes, educational institutions, and cultural organisations will continue to emerge organically as the Gurukulam grows in depth and capacity.
            </Body>
            <Body className="text-text-stone-grey font-light italic">
              The aspiration is not rapid expansion, but enduring contribution; not institutional scale alone, but civilisational significance.
            </Body>
          </div>

          <div className="py-12 border-t border-b border-accent-bronze/20">
            <div className="space-y-4 font-serif italic text-xl md:text-2xl text-accent-bronze tracking-wide">
              <p>The journey begins with Śāstra.</p>
              <p>It deepens through Sādhanā.</p>
              <p>It flowers in Saṃvāda.</p>
              <p>It is offered in Sevā.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
