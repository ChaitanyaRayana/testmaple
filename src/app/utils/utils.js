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
