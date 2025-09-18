import React from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function TermsPage({ onBack }) {
  return (
    <div className="profile-page">
      <TopLogo sticky={false} />
      
      {/* Header */}
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">‹</span>
          <span className="back-text">Retour</span>
        </button>
        <h1 className="profile-title">Conditions d'utilisation</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="terms-content">
          <p className="terms-text">
            Dernière mise à jour : 15 janvier 2024
          </p>
          
          <p className="terms-text">
            Bienvenue dans l'application Sencia. Ces conditions d'utilisation régissent votre utilisation de notre service de suivi de santé.
          </p>
          
          <p className="terms-text">
            En utilisant notre application, vous acceptez de respecter ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
          </p>
          
          <h3 className="section-title">1. Utilisation du service</h3>
          <p className="terms-text">
            Notre application est conçue pour vous aider à suivre votre santé et vos données médicales. Vous êtes responsable de l'exactitude des informations que vous fournissez.
          </p>
          
          <h3 className="section-title">2. Confidentialité des données</h3>
          <p className="terms-text">
            Nous nous engageons à protéger votre vie privée. Vos données de santé sont chiffrées et stockées de manière sécurisée. Nous ne partageons vos informations qu'avec votre consentement explicite.
          </p>
          
          <h3 className="section-title">3. Responsabilité médicale</h3>
          <p className="terms-text">
            Cette application ne remplace pas les conseils médicaux professionnels. Consultez toujours votre médecin pour toute question concernant votre santé.
          </p>
          
          <h3 className="section-title">4. Modifications des conditions</h3>
          <p className="terms-text">
            Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication dans l'application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;