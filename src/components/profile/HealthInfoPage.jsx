import React from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function HealthInfoPage({ onBack }) {
  return (
    <div className="profile-page">
      <TopLogo />
      
      {/* Header */}
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">‹</span>
          <span className="back-text">Retour</span>
        </button>
        <h1 className="profile-title">Informations de santé</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="section-items">
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Âge</div>
              <div className="item-value">47 ans</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Sexe</div>
              <div className="item-value">Homme</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Taille</div>
              <div className="item-value">175 cm</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Poids</div>
              <div className="item-value">75 kg</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Conditions médicales</div>
              <div className="item-value">Hypertension artérielle</div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">Modifier les informations</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Entrez votre âge"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="text" 
              className="form-input" 
              placeholder="Entrez votre taille (cm)"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="text" 
              className="form-input" 
              placeholder="Entrez votre poids (kg)"
            />
          </div>
          
          <button className="save-button">
            Sauvegarder les modifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default HealthInfoPage;