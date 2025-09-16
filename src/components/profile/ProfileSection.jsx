import React from 'react';

function ProfileSection({ title, children, className = "" }) {
  return (
    <div className={`profile-section ${className}`}>
      {title && <h3 className="section-title">{title}</h3>}
      {children}
    </div>
  );
}

export default ProfileSection;
