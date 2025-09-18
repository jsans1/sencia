import React from 'react';
import './profile-styles.css';
import ProfileInfo from './ProfileInfo';
import ProfileSection from './ProfileSection';
import SectionItem from './SectionItem';
import TopLogo from '../TopLogo';
import infosSanteIcon from '../../assets/infos-sante.svg';
import diagnosticIcon from '../../assets/diagnostic.svg';
import traitementsIcon from '../../assets/traitements.svg';
import careplanIcon from '../../assets/careplan.svg';
import settingsIcon from '../../assets/Settings.svg';
import cguIcon from '../../assets/cgu.svg';
import appareilsIcon from '../../assets/appareils.svg';
import etudesIcon from '../../assets/etudes.svg';
import premiumIcon from '../../assets/premium.svg';

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
            icon={infosSanteIcon} 
            text="Informations de santé" 
            onClick={onNavigateToHealthInfo} 
          />
          <SectionItem icon={diagnosticIcon} text="Diagnostic" />
          <SectionItem icon={traitementsIcon} text="Traitements" />
          <SectionItem icon={careplanIcon} text="Care Plan" />
        </div>
      </ProfileSection>

      {/* Confidentiality Section */}
      <ProfileSection title="Confidentialité">
        <p className="confidentiality-text">
          Vos données sont chiffrées sur votre appareil et ne peuvent être partagée qu'avec votre permission.
        </p>
        <div className="section-items">
          <SectionItem 
            icon={settingsIcon} 
            text="Compte et mot de passe" 
            onClick={onNavigateToAccount} 
          />
        </div>
      </ProfileSection>

      {/* Additional Sections */}
      <ProfileSection>
        <div className="section-items">
          <SectionItem 
            icon={cguIcon} 
            text="Conditions d'utilisation" 
            onClick={onNavigateToTerms} 
          />
          <SectionItem 
            icon={appareilsIcon} 
            text="Appareils connectés" 
            onClick={onNavigateToDevices} 
          />
          <SectionItem 
            icon={etudesIcon} 
            text="Études de recherche" 
            onClick={onNavigateToResearch} 
          />
          <SectionItem 
            icon={premiumIcon} 
            text="Passer à Premium" 
            onClick={onNavigateToPremium} 
          />
        </div>
      </ProfileSection>
    </div>
  );
}

export default ProfileMain;