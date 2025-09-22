import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enGBTranslations from './locales/en-GB.json'
import zhCNTranslations from './locales/zh-CN.json'

const resources = {
  'en-GB': {
    translation: enGBTranslations as Record<string, unknown>
  },
  'zh-CN': {
    translation: zhCNTranslations as Record<string, unknown>
  }
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-GB',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false // React already does escaping
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n