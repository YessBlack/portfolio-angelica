import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from './locales/es.json'
import en from './locales/en.json'

export const LANGUAGES = {
  ES: 'es',
  EN: 'en'
} as const

export const LANGUAGE_LABELS: Record<string, string> = {
  es: 'Español',
  en: 'English'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    fallbackLng: LANGUAGES.ES,
    supportedLngs: Object.values(LANGUAGES),

    keySeparator: false,
    nsSeparator: false,

    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },

    returnNull: false
  })

export default i18n
