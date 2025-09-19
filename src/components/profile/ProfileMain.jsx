import React from 'react';
import './profile-styles.css';
import ProfileInfo from './ProfileInfo';
import ProfileSection from './ProfileSection';
import SectionItem from './SectionItem';
import TopLogo from '../TopLogo';
// Icons are now in public directory, using direct paths

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
      <TopLogo sticky={false} />
    

      {/* Profile Info Section */}
      <ProfileInfo />

      {/* Medical Profile Section */}
      <ProfileSection title="Profil médical">
        <div className="section-items">
          <SectionItem 
            icon="/infos-sante.svg" 
            text="Informations de santé" 
            onClick={onNavigateToHealthInfo} 
          />
          <SectionItem icon="/diagnostic.svg" text="Diagnostic" />
          <SectionItem icon="/traitements.svg" text="Traitements" />
          <SectionItem icon="/careplan.svg" text="Care Plan" />
        </div>
      </ProfileSection>

      {/* Confidentiality Section */}
      <ProfileSection title="Confidentialité">
        <p className="confidentiality-text">
          Vos données sont chiffrées sur votre appareil et ne peuvent être partagée qu'avec votre permission.
        </p>
        <div className="section-items">
          <SectionItem 
            icon="/Settings.svg" 
            text="Compte et mot de passe" 
            onClick={onNavigateToAccount} 
          />
        </div>
      </ProfileSection>

      {/* Additional Sections */}
      <ProfileSection>
        <div className="section-items">
          <SectionItem 
            icon="/cgu.svg" 
            text="Conditions d'utilisation" 
            onClick={onNavigateToTerms} 
          />
          <SectionItem 
            icon="/appareils.svg" 
            text="Appareils connectés" 
            onClick={onNavigateToDevices} 
          />
          <SectionItem 
            icon="/etudes.svg" 
            text="Études de recherche" 
            onClick={onNavigateToResearch} 
          />
          <SectionItem 
            icon="/premium.svg" 
            text="Passer à Premium" 
            onClick={onNavigateToPremium} 
          />
        </div>
      </ProfileSection>
    </div>
  );
}

export default ProfileMain;