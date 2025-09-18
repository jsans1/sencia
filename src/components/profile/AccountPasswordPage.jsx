import React, { useState } from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function AccountPasswordPage({ onBack }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    // Handle password change logic
    console.log('Password change requested');
  };

  return (
    <div className="profile-page">
      <TopLogo sticky={false} />
      
      {/* Header */}
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">‹</span>
          <span className="back-text">Retour</span>
        </button>
        <h1 className="profile-title">Compte et mot de passe</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="section-items">
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Email</div>
              <div className="item-value">loris.duchamp@example.com</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Dernière connexion</div>
              <div className="item-value">Aujourd'hui, 14:30</div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Changer le mot de passe</h3>
          
          <div className="form-group">
            <label className="form-label">Mot de passe actuel</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Entrez votre mot de passe actuel"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Nouveau mot de passe</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Entrez votre nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Confirmer le nouveau mot de passe</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Confirmez votre nouveau mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <button className="save-button" onClick={handleSave}>
            Changer le mot de passe
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountPasswordPage;