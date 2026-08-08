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
          <Caption>Those Who Guide the Gurukulam</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Marga Darshak & Mentors
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            Nāṭyaśāstra Gurukulam is guided by mentors whose lives embody the integration of Dharma, Śāstra, lived wisdom, and inner discipline. Their role is not one of institutional authority, but of custodianship. Through the living continuity of paramparā, they help preserve the Gurukulam's rhythm, safeguard its ethos, and ensure that its work remains faithful to its consecrated purpose across time.
          </BodyLG>
        </div>
      </Section>

      {/* Dr. M. B. Athreya Profile */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 max-w-[300px] lg:max-w-none mx-auto w-full">
            <EditorialImage
              src="/assets/images/sastri_clean.png"
              alt="Padma Bhushan Dr. M. B. Athreya"
              aspectRatio="aspect-[3/4]"
              copyright="Marga Darshak"
              caption="Dr. M. B. Athreya"
            />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <Caption className="text-accent-bronze/80">Marga Darshak</Caption>
              <HeadingMD className="text-2xl md:text-3xl text-text-charcoal font-light">
                Padma Bhushan Dr. M. B. Athreya
              </HeadingMD>
            </div>
            
            <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
              "Providing Dhārmic, civilisational, and ethical guidance to the Gurukulam's vision and public orientation."
            </BodyLG>

            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                Dr. M. B. Athreya is widely regarded as the pioneer of the Indian Management Movement and a distinguished thinker who has consistently sought to integrate modern organisational thought with Dhārmic vision. He has taught at leading institutions in India and abroad, advised governments, corporations, and civil society organisations, and has made enduring contributions to leadership, governance, and philanthropy.
              </Body>
              <Body>
                Awarded the Padma Bhushan by the Government of India and honoured with the title of Dharma Pracharak by His Holiness the Jagadguru Śankarācārya of Śṛṅgeri, Dr. Athreya has long advocated the importance of grounding institutions in ethical clarity and civilisational consciousness.
              </Body>
              <Body>
                At the Gurukulam, his presence anchors the larger civilisational horizon, reminding us that aesthetics, education, and leadership are inseparable from responsibility towards society and public life.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Dr. Padmaja Suresh Profile */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 max-w-[300px] lg:max-w-none mx-auto w-full order-1 lg:order-2">
            <EditorialImage
              src="/assets/images/meera_clean.png"
              alt="Dr. Padmaja Suresh"
              aspectRatio="aspect-[3/4]"
              copyright="Ācāryā for Nāṭya Pedagogy"
              caption="Dr. Padmaja Suresh"
            />
          </div>
          <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <Caption className="text-accent-bronze/80">Ācāryā for Nāṭya Pedagogy</Caption>
              <HeadingMD className="text-2xl md:text-3xl text-text-charcoal font-light">
                Karnataka Kalashri Dr. Padmaja Suresh
              </HeadingMD>
            </div>
            
            <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
              "Shaping the Gurukulam's pedagogic vision through Nāṭya as Sādhanā."
            </BodyLG>

            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                Dr. Padmaja Suresh is an acclaimed danseuse, scholar, teacher, and author whose life's work bridges rigorous classical training with deep philosophical inquiry. Trained under Guru Padma Shri K. Kalyanasundaram and her father Śrī Chākyār Rajan, she has represented Indian classical arts internationally while pursuing sustained research into the relationship between Nāṭya, Tantra, and spiritual practice.
              </Body>
              <Body>
                Her pedagogy understands Nāṭya not merely as performance, but as Sādhanā, a path of inner refinement, ethical sensitivity, and contemplative awareness. Her work integrates Śāstra, lived practice, and disciplined inquiry into a single pedagogic vision.
              </Body>
              <Body>
                At the Gurukulam, she transmits not merely technique, but temperament; not merely repertoire, but responsibility, forming sahṛdayas and future custodians of India's aesthetic traditions.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Śrī K. V. Subrahmoṇyan Profile */}
      <Section className="py-20 border-b border-accent-bronze/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 max-w-[300px] lg:max-w-none mx-auto w-full">
            <EditorialImage
              src="/assets/images/sastri_clean.png"
              alt="Śrī K. V. Subrahmoṇyan"
              aspectRatio="aspect-[3/4]"
              copyright="Spiritual Elder"
              caption="Śrī K. V. Subrahmoṇyan"
            />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <Caption className="text-accent-bronze/80">Spiritual Elder</Caption>
              <HeadingMD className="text-2xl md:text-3xl text-text-charcoal font-light">
                Śrī K. V. Subrahmoṇyan
              </HeadingMD>
            </div>
            
            <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
              "A presence of sākṣitva and Vedāntic anchoring, offering blessings, inner orientation, and lived wisdom."
            </BodyLG>

            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                Śrī K. V. Subrahmoṇyan, a revered disciple in the lineage of Bhagavān Śrī Ramaṇa Maharṣi, has spent much of his life at Śrī Ramaṇāśramam, Tiruvaṇṇāmalai. His life reflects quiet abidance, simplicity, discernment, and lived Vedāntic clarity.
              </Body>
              <Body>
                Known for his gentle presence and directness, he embodies sākṣitva, the witnessing consciousness that steadies inquiry without assertion and guides without seeking prominence.
              </Body>
              <Body>
                For the Gurukulam, his blessings serve as a spiritual axis, affirming that Nāṭya as Sādhanā must ultimately rest in stillness, self-knowledge, and inner freedom.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Rohit Viswanath Profile */}
      <Section className="py-20 border-b border-accent-bronze/10 bg-bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 max-w-[300px] lg:max-w-none mx-auto w-full order-1 lg:order-2">
            <EditorialImage
              src="/assets/images/corridor_clean.png"
              alt="Rohit Viswanath"
              aspectRatio="aspect-[3/4]"
              copyright="Yajamāna & Yojaka"
              caption="Rohit Viswanath"
            />
          </div>
          <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <Caption className="text-accent-bronze/80">Yajamāna & Yojaka</Caption>
              <HeadingMD className="text-2xl md:text-3xl text-text-charcoal font-light">
                Rohit Viswanath
              </HeadingMD>
            </div>
            
            <BodyLG className="font-serif italic text-accent-bronze/90 leading-relaxed font-light">
              "Stewarding the Gurukulam's consecrated saṅkalpa with fidelity, humility, and care."
            </BodyLG>

            <div className="space-y-4 text-text-stone-grey font-light leading-relaxed text-sm md:text-base">
              <Body>
                Nāṭyaśāstra Gurukulam is understood not merely as an institution, but as a living Yajña dedicated to the transmission of Nāṭya, Dharma, and civilisational renewal. Within this understanding, the Yajamāna is not an owner or authority, but the one who bears responsibility for the consecration, continuity, and integrity of the yajña. The Yojaka brings people, ideas, and institutions into harmonious relationship, ensuring that the original saṅkalpa unfolds faithfully across time and is handed on to future generations.
              </Body>
              <Body>
                Rohit Viswanath serves the Gurukulam in this spirit as its Yajamāna & Yojaka. His journey took him through the study of Ancient Indian Culture and International Relations, followed by work in journalism, public policy, governance, yoga, agriculture, higher education, and civilisational studies. Rather than separate pursuits, these became successive stages in a single unfolding inquiry into Dharma, education, leadership, and Nāṭya.
              </Body>
              <Body>
                His role is therefore not that of a founder in the modern sense, but of a custodian of the Yajña and a facilitator of lineage. He seeks to ensure that Nāṭya remains Sādhanā, pedagogy remains presence, and institutional form never eclipses Dhārmic intent.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* A Living Paramparā */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <HeadingMD className="text-accent-bronze">A Living Paramparā</HeadingMD>
          <Body className="italic text-base md:text-lg">
            The Gurukulam understands mentorship not as designation, but as relationship. Its teachers, elders, scholars, practitioners, and well-wishers together participate in a living paramparā, one that honours the past, responds thoughtfully to the present, and prepares responsibly for the future.
          </Body>
          <Body className="text-text-stone-grey font-light">
            The Gurukulam remains committed to receiving knowledge with humility, cultivating it through Sādhanā, and transmitting it faithfully to future generations.
          </Body>
        </div>
      </Section>
    </div>
  );
};

export default MentorsDetail;
