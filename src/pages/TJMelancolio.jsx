import { useRef, useCallback, useState, useEffect } from 'react'
import HeartLoader from '../components/HeartLoader'
import './TJMelancolio.css'

function TJMelancolio() {
  const [saidYes, setSaidYes] = useState(false)
  const [loading, setLoading] = useState(true)
  const noBtnRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(t)
  }, [])

  const moveNoButton = useCallback(() => {
    const btn = noBtnRef.current
    if (!btn) return

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

    btn.style.position = 'fixed'
    btn.style.transform = 'none'
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
  }, [])

  const handleYes = () => {
    setSaidYes(true)
  }

  if (loading) {
    return <HeartLoader />
  }

  if (saidYes) {
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
        <div className="tj-result">
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
        <p className="tj-question">Dis oui… 💌</p>

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
