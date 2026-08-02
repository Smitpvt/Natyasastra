import React, { useState } from 'react';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Body, Caption } from '../components/Typography';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'study',
    intent: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.intent) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-bg-ivory pt-24 min-h-screen">
      {/* Header */}
      <Section className="pb-12 border-b border-accent-bronze/10">
        <div className="max-w-3xl space-y-4">
          <Caption>Initiate a Dialogue</Caption>
          <HeadingLG as="h1" className="text-4xl md:text-5xl font-light">
            Contact & Inquiry
          </HeadingLG>
          <div className="w-16 h-[1px] bg-accent-bronze/30" />
          <BodyLG>
            We welcome inquiries from researchers, artists, and patrons who align with our mission.
          </BodyLG>
        </div>
      </Section>

      {/* Grid: Details & Form */}
      <Section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <HeadingMD className="text-accent-bronze">Gurukulam Space</HeadingMD>
              <div className="space-y-2">
                <Caption className="text-[10px] text-text-stone-grey/70">Location</Caption>
                <Body className="text-sm font-light text-text-stone-grey leading-relaxed">
                  Near Brihadīśvara Temple Area,<br />
                  Tanjavur, Tamil Nadu, India
                </Body>
              </div>
              <div className="space-y-2">
                <Caption className="text-[10px] text-text-stone-grey/70">Visiting Hours</Caption>
                <Body className="text-sm font-light text-text-stone-grey leading-relaxed italic">
                  Visits are strictly by prior appointment only to maintain the contemplative silence of our research and practice spaces.
                </Body>
              </div>
            </div>

            <div className="space-y-4">
              <HeadingMD className="text-accent-bronze">Electronic Dialogue</HeadingMD>
              <div className="space-y-2">
                <Caption className="text-[10px] text-text-stone-grey/70">Email Address</Caption>
                <Body className="text-sm font-light text-text-stone-grey font-mono">
                  dialogue@natyasastragurukulam.org
                </Body>
              </div>
              <div className="space-y-2">
                <Caption className="text-[10px] text-text-stone-grey/70">Sanskrit Library Registry</Caption>
                <Body className="text-sm font-light text-text-stone-grey font-mono">
                  library@natyasastragurukulam.org
                </Body>
              </div>
            </div>
          </div>

          {/* Right Column: Register Interest Form */}
          <div className="lg:col-span-7 bg-bg-paper p-8 md:p-12 border border-accent-bronze/10 relative">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <HeadingMD>Register Interest</HeadingMD>
              <div className="w-12 h-[1px] bg-accent-bronze/30" />
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <span className="font-serif italic text-lg text-accent-bronze">
                    "Samyak vicāritam — We have received your intent."
                  </span>
                  <Body className="text-sm text-text-stone-grey/90 font-light max-w-md mx-auto">
                    Your inquiry has been logged in our archives. We will review your background and statement of intent, and reply within seven days.
                  </Body>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-text-stone-grey">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Devendra Sastri"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border-b border-accent-bronze/20 focus:border-accent-bronze pb-2 outline-none font-serif text-base text-text-charcoal placeholder-text-stone-grey/40 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-text-stone-grey">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., devendra@academy.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-transparent border-b border-accent-bronze/20 focus:border-accent-bronze pb-2 outline-none font-serif text-base text-text-charcoal placeholder-text-stone-grey/40 transition-colors"
                    />
                  </div>

                  {/* Focus Domain */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-text-stone-grey">Focus Domain</label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="bg-transparent border-b border-accent-bronze/20 focus:border-accent-bronze pb-2 outline-none font-serif text-sm text-text-charcoal transition-colors cursor-pointer"
                    >
                      <option value="study" className="bg-bg-paper text-text-charcoal">Study (Textual Geometry)</option>
                      <option value="practice" className="bg-bg-paper text-text-charcoal">Practice (Karana Reconstruction)</option>
                      <option value="pedagogy" className="bg-bg-paper text-text-charcoal">Pedagogy (Teaching Transmission)</option>
                      <option value="archive" className="bg-bg-paper text-text-charcoal">Archive (Manuscript Preservation)</option>
                      <option value="samvada" className="bg-bg-paper text-text-charcoal">Saṃvāda (Intellectual Patrons)</option>
                    </select>
                  </div>

                  {/* Statement of Intent */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-text-stone-grey">Statement of Intent</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Detail your background, your study interests, and why you wish to align with the Gurukulam..."
                      value={formData.intent}
                      onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                      className="bg-transparent border-b border-accent-bronze/20 focus:border-accent-bronze pb-2 outline-none font-serif text-sm text-text-charcoal placeholder-text-stone-grey/40 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-bronze text-bg-ivory font-sans text-xs uppercase tracking-widest font-semibold hover:bg-text-muted-black transition-colors duration-500 ease-out cursor-pointer"
                  >
                    Submit Intention
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Contact;
