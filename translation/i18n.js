import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import formatHandler from './formatHandler'

export const settings = {
  nsSeparator: '^',
  resources: {
    en: {
      translation: en
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
    format: formatHandler
  }
}

i18n.use(initReactI18next).init(settings)

export default i18n
