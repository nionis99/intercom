import { initReactI18next } from 'react-i18next';
import i18n, { ResourceLanguage } from 'i18next';
import Constants from 'Constants';

import en from './translations/en.json';
import lt from './translations/lt.json';

type Translations = { [key: string]: ResourceLanguage };
const translations: Translations = { en, lt };

const availableLanguages = Object.keys(translations);

let lng = localStorage.getItem('lng');
if (!lng || !translations.hasOwnProperty(lng)) lng = Constants.DEFAULT_LANGUAGE;

i18n.use(initReactI18next).init({
  resources: translations,
  lng,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export { translations, availableLanguages };
export default i18n;
