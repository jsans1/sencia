import React from 'react';
// Profile image is now in public directory, using direct path

function ProfileInfo() {
  return (
    <div className="profile-info-section">
      <div className="profile-avatar">
        <img src="/profile-initials.png" alt="Profile" className="profile-image" />
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
