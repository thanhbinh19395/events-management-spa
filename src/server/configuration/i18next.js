import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload: ['en', 'es'],

    // debug: true,

    interpolation: {
      escapeValue: false,
    },

    // ns: ['home', 'channel', 'common'],
    // defaultNS: 'home',

    backend: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
    },
  });

export default i18n;
