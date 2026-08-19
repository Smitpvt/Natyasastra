import { useEffect } from 'react';

/**
 * Custom hook to dynamically set document title, description, and JSON-LD structured data.
 * Handles insertion, updates, and cleanup on route changes.
 * 
 * @param {Object} seoOptions
 * @param {string} seoOptions.title - The page title
 * @param {string} seoOptions.description - The page description for search engines
 * @param {Object} seoOptions.jsonLd - The JSON-LD schema object
 */
export const useSEO = ({ title, description, jsonLd }) => {
  useEffect(() => {
    // 1. Update Document Title
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} | Nāṭyaśāstra Gurukulam`;
    } else {
      document.title = 'Nāṭyaśāstra Gurukulam — Custodians of Rasa, Rhythm & Dhārmic Responsibility';
    }

    // 2. Update Meta Description Tag
    let metaDescription = document.querySelector('meta[name="description"]');
    let previousDescription = '';
    if (metaDescription) {
      previousDescription = metaDescription.getAttribute('content') || '';
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // 3. Inject/Update JSON-LD Script Tag
    let jsonLdScript = document.getElementById('jsonLdSchema');
    if (jsonLdScript) {
      jsonLdScript.remove();
    }

    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'jsonLdSchema';
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    // Cleanup on unmount/re-run
    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        if (previousDescription) {
          metaDescription.setAttribute('content', previousDescription);
        } else {
          metaDescription.removeAttribute('content');
        }
      }
      const scriptToRemove = document.getElementById('jsonLdSchema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, jsonLd]);
};

export default useSEO;
