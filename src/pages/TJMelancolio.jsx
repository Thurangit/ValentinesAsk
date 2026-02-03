import { useRef, useCallback, useState, useEffect } from 'react'
import HeartLoader from '../components/HeartLoader'
import kissGif from '../components/image/kiss1.gif'
import './TJMelancolio.css'

function TJMelancolio() {
  const [saidYes, setSaidYes] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hasTriedNo, setHasTriedNo] = useState(false)
  const noBtnRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(t)
  }, [])

  const moveNoButton = useCallback(() => {
    const btn = noBtnRef.current
    if (!btn) return

    setHasTriedNo(true)

    const btnRect = btn.getBoundingClientRect()
    const padding = 20
    const w = window.innerWidth
    const h = window.innerHeight
    const minX = padding
    const minY = padding
    const maxX = w - btnRect.width - padding
    const maxY = h - btnRect.height - padding

    if (maxX <= minX || maxY <= minY) return

    const x = Math.random() * (maxX - minX) + minX
    const y = Math.random() * (maxY - minY) + minY

    const isFirstMove = btn.style.position !== 'fixed'
    if (isFirstMove) {
      btn.style.position = 'fixed'
      btn.style.transform = 'none'
      btn.style.left = `${btnRect.left}px`
      btn.style.top = `${btnRect.top}px`
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          btn.style.left = `${x}px`
          btn.style.top = `${y}px`
        })
      })
    } else {
      btn.style.left = `${x}px`
      btn.style.top = `${y}px`
    }
  }, [])

  const handleYes = () => {
    setSaidYes(true)
  }

  if (loading) {
    return <HeartLoader />
  }

  if (saidYes) {
    return (
      <div className="tj-melancolio valentine-bg tj-result-page">
        <div className="hearts-bg" aria-hidden="true">
          {[
            [5, 10], [25, 70], [60, 20], [80, 50], [15, 40], [70, 80],
            [40, 5], [90, 15], [10, 85], [55, 55], [30, 30], [75, 35], [20, 60], [85, 25]
          ].map(([left, top], i) => (
            <span key={i} className="heart-float" style={{ left: `${left}%`, top: `${top}%` }}>❤</span>
          ))}
        </div>

        {/* Ballons cœurs qui s'envolent */}
        <div className="festive-balloons" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="balloon-heart"
              style={{
                '--i': i,
                left: `${8 + (i * 6.5) + (i % 3) * 2}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${8 + (i % 4)}s`,
              }}
            >
              ❤
            </span>
          ))}
        </div>

        {/* Petits feux d'artifice en bas */}
        <div className="festive-fireworks" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((burst) => (
            <div
              key={burst}
              className="firework-burst"
              style={{
                left: `${15 + burst * 18}%`,
                animationDelay: `${burst * 0.7}s`,
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30) + (burst * 17)
                const rad = (angle * Math.PI) / 180
                const dist = 70
                const tx = Math.cos(rad) * dist
                const ty = Math.sin(rad) * dist
                return (
                  <span
                    key={i}
                    className="firework-particle"
                    style={{
                      '--tx': `${tx}px`,
                      '--ty': `${ty}px`,
                      '--delay': `${i * 0.025}s`,
                    }}
                  />
                )
              })}
            </div>
          ))}
        </div>

        <div className="tj-result">
          <img src={kissGif} alt="" className="tj-result-kiss" />
          <p className="tj-result-hearts">💕 ❤️ 💕</p>
          <h2>Merci !</h2>
          <p className="tj-result-text">À très bientôt…</p>
        </div>
        <footer className="tj-footer">by Thuran Junior</footer>
      </div>
    )
  }

  return (
    <div className="tj-melancolio valentine-bg">
      <div className="hearts-bg" aria-hidden="true">
        {[
          [5, 10], [25, 70], [60, 20], [80, 50], [15, 40], [70, 80],
          [40, 5], [90, 15], [10, 85], [55, 55], [30, 30], [75, 35], [20, 60], [85, 25]
        ].map(([left, top], i) => (
          <span key={i} className="heart-float" style={{ left: `${left}%`, top: `${top}%` }}>❤</span>
        ))}
      </div>

      <div className="tj-content">
        <h1 className="tj-title">Veux-tu être ma Valentine ?</h1>
        {hasTriedNo && <p className="tj-question">Dis oui… 💌</p>}

        <div className="tj-buttons">
          <button
            type="button"
            className="tj-btn tj-btn-yes"
            onClick={handleYes}
          >
            Oui
          </button>
          <button
            ref={noBtnRef}
            type="button"
            className="tj-btn tj-btn-no"
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault()
              moveNoButton()
            }}
            onFocus={moveNoButton}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            tabIndex={-1}
            aria-hidden="true"
          >
            Non
          </button>
        </div>
      </div>
      <footer className="tj-footer">by Thuran Junior</footer>
    </div>
  )
}

export default TJMelancolio
