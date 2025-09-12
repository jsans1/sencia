import { useNavigate } from 'react-router-dom'
import '../App.css'

const Features = () => {
  const navigate = useNavigate()
  return (
    <div className="splash-bg">
      <div className="splash-container">
        <h2 className="features-title">Welcome siiiir</h2>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-dot" />
            <div>
              <p className="feature-title">Suivez vos symptômes</p>
              <p className="feature-desc">Suivez quotidiennement vos symptômes et vos ressentis.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-dot" />
            <div>
              <p className="feature-title">Visualisez votre progression</p>
              <p className="feature-desc">Visualisez vos tendances dans le temps pour identifier ce que vous ressentez vraiment.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-dot" />
            <div>
              <p className="feature-title">Communiquer avec votre médecin</p>
              <p className="feature-desc">Exportez un résumé clair de vos données pour faciliter le dialogue avec les professionnels de santé.</p>
            </div>
          </div>
        </div>
        <button
          className="splash-btn"
          onClick={() => navigate('/auth-choice')}
        >
          Commencer
        </button>
        <div className="features-pink">Mettre en avant les key features ?</div>
      </div>
    </div>
  )
}

export default Features 