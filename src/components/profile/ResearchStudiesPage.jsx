import React from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function ResearchStudiesPage({ onBack }) {
  return (
    <div className="profile-page">
      <TopLogo sticky={false} />
      
      {/* Header */}
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">‹</span>
          <span className="back-text">Retour</span>
        </button>
        <h1 className="profile-title">Études de recherche</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="confidentiality-text">
          <strong>Participez à la recherche médicale</strong><br/>
          Vos données anonymisées peuvent contribuer à faire avancer la recherche médicale et améliorer les soins de santé pour tous.
        </div>

        <div className="section-items">
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Participation actuelle</div>
              <div className="item-value">Aucune étude en cours</div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="item-content">
              <div className="item-label">Données partagées</div>
              <div className="item-value">Aucune donnée partagée</div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Études disponibles</h3>
          
          <div className="pricing-card">
            <div className="pricing-title">Étude sur l'hypertension artérielle</div>
            <p className="terms-text">
              Cette étude vise à mieux comprendre les facteurs qui influencent la tension artérielle chez les patients de 40-60 ans.
            </p>
            <p className="terms-text">
              <strong>Durée :</strong> 6 mois<br/>
              <strong>Données collectées :</strong> Tension artérielle, activité physique, sommeil
            </p>
            <button className="pricing-button">
              Participer à l'étude
            </button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-title">Étude sur l'activité physique</div>
            <p className="terms-text">
              Recherche sur l'impact de l'activité physique sur la santé cardiovasculaire.
            </p>
            <p className="terms-text">
              <strong>Durée :</strong> 3 mois<br/>
              <strong>Données collectées :</strong> Fréquence cardiaque, pas, calories brûlées
            </p>
            <button className="pricing-button">
              Participer à l'étude
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchStudiesPage;