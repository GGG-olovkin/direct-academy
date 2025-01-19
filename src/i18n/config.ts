import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LANGUAGES } from '../constants/languages';

// Dil dosyalarını import edin
import translationEN from './locales/en.json';
import translationAZ from './locales/az.json';
import translationDE from './locales/de.json';

const resources = {
  [LANGUAGES.EN]: {
    translation: translationEN
  },
  [LANGUAGES.AZ]: {
    translation: translationAZ
  },
  [LANGUAGES.DE]: {
    translation: translationDE
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    load: 'languageOnly',
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n; 