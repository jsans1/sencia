import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../App.css'

const WelcomeLoris = () => {
  const navigate = useNavigate()
  return (
    <div className="splash-bg">
      <div className="splash-container">
        <img src={logo} alt="Sencia logo" className="splash-logo" />
        <h2 className="welcome-title">Bienvenue <span className="welcome-loris">Loris</span></h2>
        <p className="welcome-subtitle">Suivez quotidiennement vos symptômes et vos ressentis.</p>
        <button
          className="splash-btn"
          onClick={() => navigate('/app')}
        >
          Commençons
        </button>
      </div>
    </div>
  )
}

export default WelcomeLoris 