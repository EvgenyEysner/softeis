import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default.
    },

    lng: 'de',

    resources: {
      de: translationDE,
      en: translationEN,
    },
  });

export default i18n;
