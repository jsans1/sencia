import MobileNav from '../components/MobileNav'
import '../App.css'
import { useNavigate, useOutletContext } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext() || {};
  const handleNav = (page) => {
    switch (page) {
      case 'Home':
        navigate('/app');
        break;
      case 'Explore':
        navigate('/app/visualization');
        break;
      case 'Add':
        if (handleAdd) handleAdd();
        break;
      case 'Care':
        navigate('/app/export');
        break;
      case 'Loris':
        navigate('/app/profile');
        break;
      default:
        break;
    }
  };
  return (
    <div className="dashboard-overview">
      <h1 className="dashboard-title">Bienvenue sur Sencia</h1>
      <p className="dashboard-subtitle">Accédez à toutes les fonctionnalités principales :</p>
      <div className="dashboard-links">
        <a href="/onboarding" className="dashboard-card">
          <span className="dashboard-card-title">Onboarding</span>
          <span className="dashboard-card-desc">Tester le parcours d'inscription</span>
        </a>
        <a href="/app/visualization" className="dashboard-card">
          <span className="dashboard-card-title">Données & Visualisation</span>
          <span className="dashboard-card-desc">Voir l'évolution de l'hypertension</span>
        </a>
        <a href="/app/logging" className="dashboard-card">
          <span className="dashboard-card-title">Logs</span>
          <span className="dashboard-card-desc">Enregistrer de nouvelles données</span>
        </a>
        <a href="/app/profile" className="dashboard-card">
          <span className="dashboard-card-title">Profil</span>
          <span className="dashboard-card-desc">Voir le profil utilisateur</span>
        </a>
      </div>
      <MobileNav active="Home" onNav={handleNav} onAdd={handleAdd} />
    </div>
  )
}

export default Dashboard 