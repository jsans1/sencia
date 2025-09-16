import React from 'react';
import profileImage from '../../assets/profile-initials.png';

function ProfileInfo() {
  return (
    <div className="profile-info-section">
      <div className="profile-avatar">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <h2 className="profile-name">Loris Duchamp</h2>
      <p className="profile-details">Homme, 47 ans</p>
      
      {/* Tags */}
      <div className="profile-tags">
        <span className="profile-tag health-tag">Hypertension artérielle</span>
        <span className="profile-tag device-tag">Apple Watch Series 4</span>
      </div>
    </div>
  );
}

export default ProfileInfo;
