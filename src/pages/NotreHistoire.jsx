import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslations } from '../locales'
import { LangSwitcher } from '../components/LanguagePicker'
import './NotreHistoire.css'

function NotreHistoire() {
  const { lang } = useLanguage()
  const t = getTranslations('notre-histoire', lang || 'fr')

  const [step, setStep] = useState('name') // 'name' | 'envelope' | 'letter'
  const [name, setName] = useState('')
  const [letter, setLetter] = useState('')

  const handleSubmitName = (e) => {
    e.preventDefault()
    const value = (name || 'a').trim() || 'a'
    setName(value)
    setStep('envelope')
  }

  const handleOpenEnvelope = () => {
    const letters = t.letters || []
    const chosen = letters.length
      ? letters[Math.floor(Math.random() * letters.length)]
      : ''
    const withName = chosen.replace(/\{\{name\}\}/g, name || 'a')
    setLetter(withName)
    setStep('letter')
  }

  if (step === 'name') {
    return (
      <div className="notre-histoire valentine-bg">
        <div className="hearts-bg" aria-hidden="true">
          {[
            [5, 10], [25, 70], [60, 20], [80, 50], [15, 40], [70, 80],
            [40, 5], [90, 15], [10, 85], [55, 55], [30, 30], [75, 35]
          ].map(([left, top], i) => (
            <span key={i} className="heart-float" style={{ left: `${left}%`, top: `${top}%` }}>❤</span>
          ))}
        </div>
        <main className="nh-content nh-name-step">
          <h1 className="nh-title">{t.title}</h1>
          <form onSubmit={handleSubmitName} className="nh-form">
            <label htmlFor="nh-name" className="nh-label">
              {t.askName}
            </label>
            <input
              id="nh-name"
              type="text"
              className="nh-input"
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="given-name"
              autoFocus
            />
            <button type="submit" className="nh-btn">
              {t.submit}
            </button>
          </form>
        </main>
        <footer className="tj-footer">
          by Thuran Junior <LangSwitcher />
        </footer>
      </div>
    )
  }

  if (step === 'envelope') {
    return (
      <div className="notre-histoire valentine-bg">
        <div className="hearts-bg" aria-hidden="true">
          {[
            [5, 10], [25, 70], [60, 20], [80, 50], [15, 40], [70, 80],
            [40, 5], [90, 15], [10, 85], [55, 55], [30, 30], [75, 35]
          ].map(([left, top], i) => (
            <span key={i} className="heart-float" style={{ left: `${left}%`, top: `${top}%` }}>❤</span>
          ))}
        </div>
        <main className="nh-content nh-envelope-step">
          <p className="nh-hint">{t.envelopeHint}</p>
          <button
            type="button"
            className="nh-envelope"
            onClick={handleOpenEnvelope}
            aria-label="Ouvrir la lettre"
          >
            <span className="nh-envelope-icon">💌</span>
          </button>
        </main>
        <footer className="tj-footer">
          by Thuran Junior <LangSwitcher />
        </footer>
      </div>
    )
  }

  // step === 'letter'
  return (
    <div className="notre-histoire valentine-bg">
      <div className="hearts-bg" aria-hidden="true">
        {[
          [5, 10], [25, 70], [60, 20], [80, 50], [15, 40], [70, 80],
          [40, 5], [90, 15], [10, 85], [55, 55], [30, 30], [75, 35]
        ].map(([left, top], i) => (
          <span key={i} className="heart-float" style={{ left: `${left}%`, top: `${top}%` }}>❤</span>
        ))}
      </div>
      <main className="nh-content nh-letter-step">
        <div className="nh-letter">
          <p className="nh-letter-text">{letter}</p>
        </div>
      </main>
      <footer className="tj-footer">
        by Thuran Junior <LangSwitcher />
      </footer>
    </div>
  )
}

export default NotreHistoire
