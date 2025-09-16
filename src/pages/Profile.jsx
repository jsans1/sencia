import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import HealthInfoPage from '../components/profile/HealthInfoPage';
import AccountPasswordPage from '../components/profile/AccountPasswordPage';
import TermsPage from '../components/profile/TermsPage';
import DevicesPage from '../components/profile/DevicesPage';
import ResearchStudiesPage from '../components/profile/ResearchStudiesPage';
import PremiumUpgradePage from '../components/profile/PremiumUpgradePage';
import ProfileMain from '../components/profile/ProfileMain';
import MobileNav from '../components/MobileNav';

export default function Profile() {
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext() || {};
  const [currentPage, setCurrentPage] = useState('profile');

  const handleNavigateToHealthInfo = () => {
    setCurrentPage('health-info');
  };

  const handleNavigateToAccount = () => {
    setCurrentPage('account-password');
  };

  const handleNavigateToTerms = () => {
    setCurrentPage('terms');
  };

  const handleNavigateToDevices = () => {
    setCurrentPage('devices');
  };

  const handleNavigateToResearch = () => {
    setCurrentPage('research-studies');
  };

  const handleNavigateToPremium = () => {
    setCurrentPage('premium-upgrade');
  };

  const handleBackToProfile = () => {
    setCurrentPage('profile');
  };

  // Navigation handler for bottom nav
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

  if (currentPage === 'health-info') {
    return (
      <div className="profile-container">
        <HealthInfoPage onBack={handleBackToProfile} />
        <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'account-password') {
    return (
      <div className="profile-container">
        <AccountPasswordPage onBack={handleBackToProfile} />
        <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="profile-container">
        <TermsPage onBack={handleBackToProfile} />
        <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'devices') {
    return (
      <div className="profile-container">
        <DevicesPage onBack={handleBackToProfile} />
        <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'research-studies') {
    return (
      <div className="profile-container">
        <ResearchStudiesPage onBack={handleBackToProfile} />
        <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'premium-upgrade') {
    return (
      <div className="profile-container">
        <PremiumUpgradePage onBack={handleBackToProfile} />
        <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  return (
    <div className="profile-container">
      <ProfileMain
        onNavigateToHealthInfo={handleNavigateToHealthInfo}
        onNavigateToAccount={handleNavigateToAccount}
        onNavigateToTerms={handleNavigateToTerms}
        onNavigateToDevices={handleNavigateToDevices}
        onNavigateToResearch={handleNavigateToResearch}
        onNavigateToPremium={handleNavigateToPremium}
      />
      <MobileNav active="Loris" onNav={handleNav} onAdd={handleAdd} />
    </div>
  );
}
