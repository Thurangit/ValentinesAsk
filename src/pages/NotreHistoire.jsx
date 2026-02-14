import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslations } from '../locales'
import { LangSwitcher } from '../components/LanguagePicker'
import Envelope from '../components/Envelope'
import './NotreHistoire.css'

const ALLOWED_GIRLS = [
  {
    name: 'Ophelie',
    message: 'Tu connais déjà la vérité de mon coeur, il se trouve dans chaque parole échangée. Alors je me limiterai à te souhaiter une heureuse Saint Valentin mon unique en ce monde.',
  },
  {
    name: 'Martinette',
    message: "Mon coeur t'a choisi et ni le temps ni les hommes ne pourront ébranler cet amour. Joyeuse Saint Valentin Ma Tinette d'amour.",
  },
  {
    name: 'Milenna',
    message: 'Una sola giornata con te e vorrei passarne mille altre. Avrei tante cose da dirti ma mi fermerò ad augurarti un Buon San Valentino My snowflake !',
  },
  {
    name: 'Erica',
    message: "Ni les années, ni les 7000km qui nous séparent n'auront raison de mon amour pour toi. Joyeuse Saint Valentin mon amour !",
  },
]

function findGirl(input) {
  const normalized = (input || '').trim().toLowerCase()
  if (!normalized) return null
  return ALLOWED_GIRLS.find((g) => g.name.toLowerCase() === normalized) || null
}

function NotreHistoire() {
  const { lang } = useLanguage()
  const t = getTranslations('notre-histoire', lang || 'fr')

  const [step, setStep] = useState('name')
  const [name, setName] = useState('')
  const [letter, setLetter] = useState('')
  const [nameError, setNameError] = useState('')

  const displayName = name || ''

  const handleSubmitName = (e) => {
    e.preventDefault()
    const girl = findGirl(name)
    if (!girl) {
      setNameError(t.nameNotAllowed || 'Ce nom n\'est pas reconnu.')
      return
    }
    setNameError('')
    setName(girl.name)
    setStep('scenario1')
  }

  const handleOpenEnvelope = () => {
    const girl = findGirl(name) || ALLOWED_GIRLS.find((g) => g.name === name)
    const message = girl ? girl.message : ''
    setLetter(message)
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
              className={`nh-input ${nameError ? 'nh-input-error' : ''}`}
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => { setName(e.target.value); setNameError('') }}
              autoComplete="off"
              autoFocus
            />
            {nameError && <p className="nh-name-error" role="alert">{nameError}</p>}
            <button type="submit" className="nh-btn">
              {t.submit}
            </button>
          </form>
        </main>
        <footer className="tj-footer">
          <LangSwitcher />
        </footer>
      </div>
    )
  }

  /* Étape 1 du scénario */
  if (step === 'scenario1') {
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
        <main className="nh-content nh-scenario-step">
          <div className="nh-step-card nh-step-enter" key="step1">
            <span className="nh-step-badge">{t.stepLabel || 'Étape'} 1/3</span>
            <p className="nh-step-for">{(t.forName || 'Pour {{name}}').replace(/\{\{name\}\}/g, displayName)}</p>
            <p className="nh-scenario-text">
              {(t.scenario1Text || '').replace(/\{\{name\}\}/g, displayName)}
            </p>
            <button type="button" className="nh-btn" onClick={() => setStep('scenario2')}>
              {t.scenario1Btn}
            </button>
          </div>
        </main>
        <footer className="tj-footer">
          <LangSwitcher />
        </footer>
      </div>
    )
  }

  /* Étape 2 du scénario */
  if (step === 'scenario2') {
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
        <main className="nh-content nh-scenario-step">
          <div className="nh-step-card nh-step-enter" key="step2">
            <span className="nh-step-badge">{t.stepLabel || 'Étape'} 2/3</span>
            <p className="nh-step-for">{(t.forName || 'Pour {{name}}').replace(/\{\{name\}\}/g, displayName)}</p>
            <p className="nh-scenario-text">{t.scenario2Text}</p>
            <button type="button" className="nh-btn" onClick={() => setStep('envelope')}>
              {t.scenario2Btn}
            </button>
          </div>
        </main>
        <footer className="tj-footer">
          <LangSwitcher />
        </footer>
      </div>
    )
  }

  /* Étape 3 : enveloppe → clic ouvre le message */
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
          <div className="nh-step-card nh-step-enter nh-step-envelope" key="step3">
            <span className="nh-step-badge">{t.stepLabel || 'Étape'} 3/3</span>
            <p className="nh-step-for">{(t.forName || 'Pour {{name}}').replace(/\{\{name\}\}/g, displayName)}</p>
            <p className="nh-hint">{t.envelopeHint}</p>
            <Envelope onOpen={handleOpenEnvelope} aria-label={t.envelopeHint} />
          </div>
        </main>
        <footer className="tj-footer">
          <LangSwitcher />
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
          {displayName && <p className="nh-letter-signature">— {displayName}</p>}
        </div>
      </main>
      <footer className="tj-footer">
        <LangSwitcher />
      </footer>
    </div>
  )
}

export default NotreHistoire
