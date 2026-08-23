import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { HeadingLG, HeadingMD, BodyLG, Caption } from '../components/Typography';
import { useSEO } from '../hooks/useSEO';

export const Contact = () => {
  useSEO({
    title: 'Enquire Now - Contact Us',
    description: 'Initiate a dialogue, register your interest, or submit a statement of intent to engage with the Nāṭyaśāstra Gurukulam.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact & Enquiry',
      'description': 'Contact page to register interest and submit statement of intent to engage with the Nāṭyaśāstra Gurukulam.',
      'url': typeof window !== 'undefined' ? window.location.origin + '/contact' : ''
    }
  });

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
    <div className="bg-[#F8F6F1] pt-24 min-h-screen text-[#211F1D] selection:bg-accent-bronze/20 selection:text-[#211F1D]">
      
      {/* HERO HEADER SECTION */}
      <Section spacing="compact" className="pt-12 pb-14 border-b border-accent-bronze/10 bg-[#F3EEE6] relative overflow-hidden">
        {/* Background Decorative Geometry */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] select-none">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="text-accent-bronze">
            <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1" />
            <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-accent-bronze/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-bronze animate-pulse" />
            <Caption className="text-accent-bronze tracking-[0.25em] text-[11px] font-semibold">Initiate a Dialogue</Caption>
          </div>

          <HeadingLG as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight">
            Contact & Enquiry
          </HeadingLG>

          <div className="w-16 h-[1px] bg-accent-bronze/40 mx-auto my-2" />

          <BodyLG className="text-text-stone-grey font-light leading-relaxed max-w-xl mx-auto">
            We welcome enquiries from researchers, artists, educators, scholars, and patrons who align with our mission.
          </BodyLG>
        </div>
      </Section>

      {/* CENTERED ENQUIRY FORM */}
      <Section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-12 md:p-14 rounded-2xl shadow-xl border border-accent-bronze/25 relative overflow-hidden"
          >
            {/* Corner flourishes */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-bronze/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-bronze/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-bronze/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-bronze/40" />

            <div className="space-y-8 relative z-10">
              <div className="text-center space-y-2">
                <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent-bronze font-bold block">
                  ALIGNMENT & ENQUIRY
                </span>
                <HeadingLG className="text-[#211F1D]">
                  Register Interest
                </HeadingLG>
                <p className="font-serif italic text-sm text-[#757069]">
                  Submit your statement of intent to engage with the <em className="italic">Gurukulam</em>
                </p>
              </div>

              <div className="w-16 h-[1px] bg-accent-bronze/30 mx-auto" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center space-y-4 rounded-xl bg-[#F8F6F1] border border-accent-bronze/30"
                >
                  <span className="font-serif italic text-xl text-accent-bronze block">
                    “<em className="italic">Samyak</em> <em className="italic">vicāritam</em> — We have received your intent.”
                  </span>
                  <p className="font-sans text-sm text-text-stone-grey font-light max-w-md mx-auto leading-relaxed">
                    Your enquiry has been logged in our archives. We will review your background and statement of intent, and reply within seven days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Devendra Sastri"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-black/10 focus:border-accent-bronze focus:bg-white rounded-xl px-4 py-3.5 outline-none font-serif text-base text-[#211F1D] placeholder:text-[#757069]/40 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., devendra@academy.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-black/10 focus:border-accent-bronze focus:bg-white rounded-xl px-4 py-3.5 outline-none font-serif text-base text-[#211F1D] placeholder:text-[#757069]/40 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Focus Domain */}
                  <div className="space-y-2">
                    <label className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze block">
                      Focus Domain
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-black/10 focus:border-accent-bronze focus:bg-white rounded-xl px-4 py-3.5 outline-none font-serif text-sm sm:text-base text-[#211F1D] transition-all duration-300 cursor-pointer shadow-inner"
                    >
                      <option value="study">Study (Textual Geometry & Śāstra)</option>
                      <option value="practice">Practice (Karaṇa Reconstruction & Sādhanā)</option>
                      <option value="pedagogy">Pedagogy (Teaching Transmission & Yātri)</option>
                      <option value="archive">Archive (Manuscript Preservation & Digital Library)</option>
                      <option value="samvada">Saṃvāda (Civilisational Statecraft & Patrons)</option>
                    </select>
                  </div>

                  {/* Statement of Intent */}
                  <div className="space-y-2">
                    <label className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent-bronze block">
                      Statement of Intent *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Detail your background, your study interests, and why you wish to align with the Gurukulam..."
                      value={formData.intent}
                      onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-black/10 focus:border-accent-bronze focus:bg-white rounded-xl px-4 py-3.5 outline-none font-serif text-sm sm:text-base text-[#211F1D] placeholder:text-[#757069]/40 transition-all duration-300 resize-none leading-relaxed shadow-inner"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-accent-bronze text-white font-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#211F1D] hover:shadow-lg transition-all duration-300 shadow-md cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Submit Enquiry →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
