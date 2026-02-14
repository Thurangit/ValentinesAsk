import './HeartLoader.css'

function HeartLoader() {
  return (
    <div className="heart-loader" role="status" aria-label="Chargement">
      <div className="heart-loader-inner">
        <svg
          className="heart-loader-svg"
          viewBox="0 0 100 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            className="heart-loader-path"
            d="M50 82C20 58 5 35 15 18C22 8 35 5 50 15C65 5 78 8 85 18C95 35 80 58 50 82Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="heart-loader-pulse" aria-hidden="true" />
      </div>
    </div>
  )
}

export default HeartLoader
