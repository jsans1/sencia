import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../App.css'

const Splash = () => {
  const navigate = useNavigate()
  return (
    <div className="splash-bg">
      <div className="splash-container">
        <img src={logo} alt="Sencia logo" className="splash-logo" />
        <p className="splash-tagline">Votre santé, <span className="splash-tagline-accent">en toute clarté.</span></p>
        <button
          className="splash-btn"
          onClick={() => navigate('/features')}
        >
          Commençons
        </button>
      </div>
    </div>
  )
}

export default Splash 