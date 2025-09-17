import React from 'react';
import './profile-styles.css';
import ProfileInfo from './ProfileInfo';
import ProfileSection from './ProfileSection';
import SectionItem from './SectionItem';
import TopLogo from '../TopLogo';

function ProfileMain({ 
  onNavigateToHealthInfo, 
  onNavigateToAccount, 
  onNavigateToTerms, 
  onNavigateToDevices, 
  onNavigateToResearch, 
  onNavigateToPremium 
}) {
  return (
    <div className="profile-page">
      <TopLogo />
    

      {/* Profile Info Section */}
      <ProfileInfo />

      {/* Medical Profile Section */}
      <ProfileSection title="Profil médical">
        <div className="section-items">
          <SectionItem 
            icon="❤️" 
            text="Informations de santé" 
            onClick={onNavigateToHealthInfo} 
          />
          <SectionItem icon="💼" text="Diagnostic" />
          <SectionItem icon="💊" text="Traitements" />
          <SectionItem icon="❤️" text="Care Plan" />
        </div>
      </ProfileSection>

      {/* Confidentiality Section */}
      <ProfileSection title="Confidentialité">
        <p className="confidentiality-text">
          Vos données sont chiffrées sur votre appareil et ne peuvent être partagée qu'avec votre permission.
        </p>
        <div className="section-items">
          <SectionItem 
            icon="⚙️" 
            text="Compte et mot de passe" 
            onClick={onNavigateToAccount} 
          />
        </div>
      </ProfileSection>

      {/* Additional Sections */}
      <ProfileSection>
        <div className="section-items">
          <SectionItem 
            icon="📄" 
            text="Conditions d'utilisation" 
            onClick={onNavigateToTerms} 
          />
          <SectionItem 
            icon="📱" 
            text="Appareils connectés" 
            onClick={onNavigateToDevices} 
          />
          <SectionItem 
            icon="🔬" 
            text="Études de recherche" 
            onClick={onNavigateToResearch} 
          />
          <SectionItem 
            icon="⭐" 
            text="Passer à Premium" 
            onClick={onNavigateToPremium} 
          />
        </div>
      </ProfileSection>
    </div>
  );
}

export default ProfileMain;