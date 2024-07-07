import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales/translations.json'
import './i18n';


i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: translations,
  });

export default i18n;
