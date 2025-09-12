import { useNavigate } from 'react-router-dom'
import '../App.css'

const AuthChoice = () => {
  const navigate = useNavigate()
  return (
    <div className="splash-bg">
      <div className="splash-container">
        <h1 className="auth-title">sencia</h1>
        <p className="auth-desc">L'aventure commence ici...<br/>Suivez quotidiennement vos symptômes et vos ressentis.</p>
        <button
          className="splash-btn auth-btn"
          onClick={() => navigate('/app')}
        >
          Se connecter comme Loris
        </button>
        <button
          className="splash-btn auth-btn-secondary"
          onClick={() => navigate('/onboarding')}
        >
          Faire l'onboarding
        </button>
      </div>
    </div>
  )
}

export default AuthChoice 