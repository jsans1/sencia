import React from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function DevicesPage({ onBack }) {
  return (
    <div className="profile-page">
      <TopLogo />
      
      {/* Header */}
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">‹</span>
          <span className="back-text">Retour</span>
        </button>
        <h1 className="profile-title">Appareils connectés</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="section-items">
          <div className="info-item">
            <div className="item-icon">⌚</div>
            <div className="item-content">
              <div className="item-label">Apple Watch Series 4</div>
              <div className="item-value">Connecté • Dernière synchronisation : il y a 2 minutes</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-icon">📱</div>
            <div className="item-content">
              <div className="item-label">iPhone 14 Pro</div>
              <div className="item-value">Connecté • Dernière synchronisation : maintenant</div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Ajouter un appareil</h3>
          <p className="confidentiality-text">
            Connectez vos appareils de santé pour synchroniser automatiquement vos données. 
            Assurez-vous que votre appareil est compatible avec notre application.
          </p>
          
          <div className="form-group">
            <label className="form-label">Type d'appareil</label>
            <select className="form-input">
              <option value="">Sélectionnez un type d'appareil</option>
              <option value="apple-watch">Apple Watch</option>
              <option value="fitbit">Fitbit</option>
              <option value="samsung-health">Samsung Health</option>
              <option value="google-fit">Google Fit</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Nom de l'appareil</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Ex: Apple Watch Series 4"
            />
          </div>
          
          <button className="save-button">
            Connecter l'appareil
          </button>
        </div>
      </div>
    </div>
  );
}

export default DevicesPage;