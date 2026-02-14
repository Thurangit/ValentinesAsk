import melancolioFr from './melancolio/fr.js'
import melancolioEn from './melancolio/en.js'
import homeFr from './home/fr.js'
import homeEn from './home/en.js'
import notreHistoireFr from './notre-histoire/fr.js'
import notreHistoireEn from './notre-histoire/en.js'

export const translations = {
  melancolio: { fr: melancolioFr, en: melancolioEn },
  home: { fr: homeFr, en: homeEn },
  'notre-histoire': { fr: notreHistoireFr, en: notreHistoireEn },
}

const LANG = ['fr', 'en']

export function getTranslations(app, lang) {
  const l = LANG.includes(lang) ? lang : 'fr'
  return translations[app]?.[l] || translations[app]?.fr || {}
}

export const langLabels = { fr: 'Français', en: 'English' }
