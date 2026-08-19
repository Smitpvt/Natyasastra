import React from 'react';

const SANSKRIT_WORDS = [
  'Nāṭyaśāstra',
  'Nāṭya',
  'Dharma Rājyam',
  'Dharma',
  'Dhārmic',
  'Gurukulam',
  'rasa',
  'Rasika',
  'Saṃskṛti',
  'Saṃvāda',
  'bhāva',
  'Śāstra',
  'Sādhanā',
  'Abhinavabhāratī',
  'Ācāryā',
  'Ācāryās',
  'yajña',
  'abhyāsa',
  'abhinaya',
  'Mārga',
  'Yātrī',
  'Sevā',
  'Pratiṣṭhā',
  'Samāroham',
  'sthāpanā'
];

export const formatSanskrit = (text) => {
  if (typeof text !== 'string') return text;
  
  const sortedWords = [...SANSKRIT_WORDS].sort((a, b) => b.length - a.length);
  const escapedWords = sortedWords.map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const pattern = new RegExp(`(${escapedWords.join('|')})`, 'g');
  
  const parts = text.split(pattern);
  return parts.map((part, index) => {
    const isMatched = sortedWords.some(w => w.toLowerCase() === part.toLowerCase());
    if (isMatched) {
      return <em key={index} className="italic">{part}</em>;
    }
    return part;
  });
};
