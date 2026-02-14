import { useState, useRef, useEffect } from 'react'
import './Envelope.css'

export default function Envelope({ onOpen, 'aria-label': ariaLabel }) {
  const [opening, setOpening] = useState(false)
  const wrapperRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleClick = () => {
    if (opening) return
    setOpening(true)
    wrapperRef.current?.classList.add('envelope--opening')
    timeoutRef.current = setTimeout(() => {
      onOpen?.()
    }, 1300)
  }

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  return (
    <button
      type="button"
      className="envelope-button"
      onClick={handleClick}
      disabled={opening}
      aria-label={ariaLabel}
    >
      <div
        ref={wrapperRef}
        className={`envelope ${opening ? 'envelope--opening' : ''}`}
        aria-hidden="true"
      >
        <svg
          className="envelope-svg"
          viewBox="0 0 200 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="env-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c92a3a" />
              <stop offset="40%" stopColor="#b91c3c" />
              <stop offset="100%" stopColor="#9a1632" />
            </linearGradient>
            <linearGradient id="env-flap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e63950" />
              <stop offset="60%" stopColor="#c41e5a" />
              <stop offset="100%" stopColor="#a61a45" />
            </linearGradient>
            <linearGradient id="env-seal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e63950" />
              <stop offset="50%" stopColor="#c41e5a" />
              <stop offset="100%" stopColor="#9a1632" />
            </linearGradient>
            <filter id="env-shadow" x="-30%" y="-20%" width="160%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.28" />
            </filter>
            <filter id="env-seal-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
            </filter>
          </defs>
          {/* Corps : rectangle avec bords arrondis */}
          <path
            className="envelope-body"
            d="M 20 52 Q 20 42 30 42 L 170 42 Q 180 42 180 52 L 180 118 Q 180 128 170 128 L 30 128 Q 20 128 20 118 Z"
            fill="url(#env-body)"
            filter="url(#env-shadow)"
          />
          {/* Rabat : triangle classique (pointe en haut) */}
          <path
            className="envelope-flap"
            d="M 20 52 L 100 18 L 180 52 L 100 52 Z"
            fill="url(#env-flap)"
            filter="url(#env-shadow)"
          />
          {/* Trait de pli discret */}
          <line
            className="envelope-fold-line"
            x1="100"
            y1="18"
            x2="100"
            y2="52"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="1"
          />
          {/* Sceau cœur au centre du rabat */}
          <path
            className="envelope-seal"
            d="M 100 32 C 92 24 82 28 82 36 C 82 44 100 52 100 52 C 100 52 118 44 118 36 C 118 28 108 24 100 32 Z"
            fill="url(#env-seal)"
            filter="url(#env-seal-shadow)"
          />
        </svg>
      </div>
    </button>
  )
}
