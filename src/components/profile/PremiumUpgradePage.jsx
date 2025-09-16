import React from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function PremiumUpgradePage({ onBack }) {
  return (
    <div className="profile-page">
      <TopLogo />
      
      {/* Header */}
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">‹</span>
          <span className="back-text">Retour</span>
        </button>
        <h1 className="profile-title">Passer à Premium</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="confidentiality-text">
          <strong>Débloquez toutes les fonctionnalités</strong><br/>
          Accédez à des analyses avancées, des rapports détaillés et un support prioritaire.
        </div>

        <div className="pricing-section">
          <div className="pricing-card">
            <div className="pricing-title">Plan Gratuit</div>
            <div className="pricing-price">0€</div>
            <div className="pricing-period">pour toujours</div>
            <ul className="pricing-features">
              <li>Suivi de base de la tension</li>
              <li>Historique des 30 derniers jours</li>
              <li>Notifications de base</li>
            </ul>
            <button className="pricing-button" disabled>
              Plan actuel
            </button>
          </div>
          
          <div className="pricing-card featured">
            <div className="pricing-savings">Économisez 40%</div>
            <div className="pricing-title">Premium</div>
            <div className="pricing-price">9,99€</div>
            <div className="pricing-period">par mois</div>
            <ul className="pricing-features">
              <li>Tout du plan gratuit</li>
              <li>Analyses avancées et tendances</li>
              <li>Rapports détaillés pour votre médecin</li>
              <li>Export de données illimité</li>
              <li>Support prioritaire</li>
              <li>Fonctionnalités expérimentales</li>
            </ul>
            <button className="pricing-button featured">
              Choisir Premium
            </button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-title">Premium Annuel</div>
            <div className="pricing-price">79,99€</div>
            <div className="pricing-period">par an</div>
            <ul className="pricing-features">
              <li>Tout du plan Premium</li>
              <li>Économisez 2 mois</li>
              <li>Accès anticipé aux nouvelles fonctionnalités</li>
            </ul>
            <button className="pricing-button">
              Choisir Annuel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumUpgradePage;