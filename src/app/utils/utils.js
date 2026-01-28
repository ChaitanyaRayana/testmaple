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

  // 🚫 Skip if text starts with numbering like "1.", "2)", "3 -", etc.
  const startsWithNumbering = /^\s*\d+\s*[\.\)\-:]/.test(text);
  const textWithFullStop = /[.!?]$/?.test(text);

  if (startsWithNumbering) return text;
  if (textWithFullStop) return text;

  // 🚫 Skip if text contains an email address
  const containsEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
    text
  );

  if (containsEmail) return text;

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
    'AI-Driven',
    'Machine Learning',
    'Natural Language Processing',
    '102 California Drive, Whitby, ON, CA',
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
    'Multi-Department',
    'Enterprise-grade',
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
  let capitalized = false;

  result = result
    .split(' ')
    .map((word) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');

      for (const special of SPECIAL_WORDS) {
        if (cleanWord.toLowerCase() === special.toLowerCase()) {
          return word.replace(cleanWord, special);
        }
      }

      if (!capitalized && cleanWord) {
        capitalized = true;
        return word.replace(
          cleanWord,
          cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1)
        );
      }

      return word;
    })
    .join(' ');

  return result;
}
