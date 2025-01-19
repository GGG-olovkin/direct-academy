export const LANGUAGES = {
  EN: 'en',
  AZ: 'az',
  DE: 'de'
} as const;

export const LANGUAGE_LABELS = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.AZ]: 'Azərbaycan',
  [LANGUAGES.DE]: 'Deutsch'
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES]; 