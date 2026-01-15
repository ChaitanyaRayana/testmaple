import { useMemo } from 'react';

const PUBLIC_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.co.uk',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'mail.com',
].join('|');

// Regex pattern for corporate email validation

export const corporateEmailRegex = new RegExp(
  `^[a-zA-Z0-9._-]+@(?!(?:${PUBLIC_EMAIL_DOMAINS})$)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`
);

export const phoneRegex = /^\d{10}$/;

export const useUTMParams = (id) => {
  return useMemo(() => {
    if (!id) return {};

    // Decode the ID
    const decoded = decodeURIComponent(id);

    // Find and parse query params
    const queryIndex = decoded.indexOf('&');
    if (queryIndex === -1) return {};

    const queryParams = decoded.slice(queryIndex + 1);
    const params = new URLSearchParams(queryParams);

    return {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      location: params.get('location'),
      kwd: params.get('kwd'),
    };
  }, [id]);
};

export function toSentenceCase(text) {
  if (!text) return text;

  const SPECIAL_PHRASES = [
    'MR Forms',
    'MR Records',
    'MR Requests',
    'MR Workflows',
    'MapleRecord',
    'Maple Record',
    'GenAI',
    'eCommerce',
    'iOS',
    'B2B',
    'B2C',
    'NoSQL',
    'IoT',
    'DevOps',
    'CI/CD',
    'Low-Code',
    'AI-Powered',
    'Machine Learning',
    'Natural Language Processing',
    'Data Science',
    'Cloud Computing',
    'Edge Computing',
    'Quantum Computing',
    'Blockchain Technology',
    'Cybersecurity',
    'Augmented Reality',
    'Virtual Reality',
    'Mixed Reality',
    'Digital Transformation',
    'Customer Experience',
    'User Experience',
    'Content Management System',
  ];

  const SPECIAL_WORDS = new Set([
    'AI',
    'API',
    'UPI',
    'SaaS',
    'UI',
    'UX',
    'CRM',
    'ERP',
    'HRMS',
    'KPI',
    'OKR',
    'SQL',
    'VR',
    'AR',
    'ML',
    'PaaS',
    'IaaS',
    'DaaS',
    'SDK',
    'HTTP',
    'HTTPS',
    'URL',
    'HTML',
    'CSS',
    'JS',
    'JSON',
    'XML',
    'CSV',
    'PDF',
    'SEO',
    'SEM',
    'Android',
    'Maple',
  ]);

  // 1️⃣ Normalize everything to lowercase first
  let result = text.toLowerCase();

  // 2️⃣ Restore special multi-word phrases (case-insensitive)
  SPECIAL_PHRASES.forEach((phrase) => {
    const regex = new RegExp(`\\b${phrase.toLowerCase()}\\b`, 'gi');
    result = result.replace(regex, phrase);
  });

  // 3️⃣ Process individual words
  result = result
    .split(' ')
    .map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');

      // Preserve special single words
      for (const special of SPECIAL_WORDS) {
        if (cleanWord.toLowerCase() === special.toLowerCase()) {
          return word.replace(cleanWord, special);
        }
      }

      // Capitalize first word only
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      return word;
    })
    .join(' ');

  return result;
}
