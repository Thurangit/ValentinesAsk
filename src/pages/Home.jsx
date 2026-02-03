import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home valentine-bg">
      <div className="hearts-bg" aria-hidden="true">
        {[
          [5, 10], [25, 70], [60, 20], [80, 50], [15, 40], [70, 80],
          [40, 5], [90, 15], [10, 85], [55, 55], [30, 30], [75, 35]
        ].map(([left, top], i) => (
          <span key={i} className="heart-float" style={{ left: `${left}%`, top: `${top}%` }}>❤</span>
        ))}
      </div>
      <main className="home-content">
        <h1>💕 St Valentin</h1>
        <p className="home-subtitle">Choisis une petite app</p>
        <nav className="app-links">
          <Link to="/melancolio" className="app-link card-valentine">
            <span className="app-link-icon">💌</span>
            <span className="app-link-title">Mélancolio</span>
            <span className="app-link-desc">Une question pour toi...</span>
          </Link>
        </nav>
      </main>
    </div>
  )
}

export default Home
