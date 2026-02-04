import { useLanguage } from '../contexts/LanguageContext'
import './LanguagePicker.css'

const CHOOSE_FR = 'Choisis ta langue'
const CHOOSE_EN = 'Choose your language'

export default function LanguagePicker() {
  const { lang, setLang } = useLanguage()

  if (lang) return null

  return (
    <div className="language-picker-overlay">
      <div className="language-picker">
        <p className="language-picker-label">{CHOOSE_FR} / {CHOOSE_EN}</p>
        <div className="language-picker-buttons">
          <button type="button" className="language-picker-btn" onClick={() => setLang('fr')}>
            Français
          </button>
          <button type="button" className="language-picker-btn" onClick={() => setLang('en')}>
            English
          </button>
        </div>
      </div>
    </div>
  )
}

export function LangSwitcher() {
  const { lang, setLang } = useLanguage()
  if (!lang) return null

  return (
    <span className="lang-switcher">
      <button
        type="button"
        className={`lang-switcher-btn ${lang === 'fr' ? 'active' : ''}`}
        onClick={() => setLang('fr')}
        aria-label="Français"
      >
        FR
      </button>
      <span className="lang-switcher-sep">|</span>
      <button
        type="button"
        className={`lang-switcher-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-label="English"
      >
        EN
      </button>
    </span>
  )
}
