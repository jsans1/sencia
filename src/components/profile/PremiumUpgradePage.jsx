import React, { useState } from 'react';
import './profile-styles.css';
import TopLogo from '../TopLogo';

function PremiumUpgradePage({ onBack }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Que se passe-t-il après mon essai de 3 mois ?",
      answer: "Après votre période d'essai de 3 mois, vous devrez souscrire à un abonnement Premium pour continuer à utiliser toutes les fonctionnalités de l'application. Sans abonnement, l'accès aux fonctionnalités avancées sera bloqué."
    },
    {
      id: 2,
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement Premium à tout moment depuis les paramètres de votre compte. L'annulation prendra effet à la fin de votre période de facturation en cours."
    },
    {
      id: 3,
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Vos données sont chiffrées de bout en bout, conformes au RGPD, et certifiées par des standards de sécurité internationaux. Nous ne partageons jamais vos informations personnelles avec des tiers."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
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
        <h1 className="profile-title">Sencia Premium</h1>
      </div>

      {/* Content */}
      <div className="profile-content">
        {/* Trial Status Section */}
        <div className="trial-status-section">
          <div className="trial-info-card">
            <div className="trial-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="trial-content">
              <h3 className="trial-title">Période d'essai Premium</h3>
              <div className="trial-progress">
                <span className="trial-days">45 jours restants sur 90</span>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                </div>
              </div>
              <p className="trial-description">
                Vous profitez actuellement de toutes les fonctionnalités Premium gratuitement. 
                Après expiration, les fonctionnalités de l'app seront bloquées.
              </p>
            </div>
          </div>
        </div>

        {/* Continue with Premium Section */}
        <div className="continue-premium-section">
          <h2 className="continue-title">Continuez avec Sencia Premium</h2>
          <p className="continue-description">
            Choisissez votre abonnement pour continuer à profiter de toutes les fonctionnalités après votre période d'essai.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-section">
          <div className="pricing-card monthly">
            <div className="pricing-title">Plan Mensuel</div>
            <div className="pricing-price">7,99€</div>
            <div className="pricing-period">/mois</div>
            <ul className="pricing-features">
              <li>Accès complet à l'application</li>
              <li>Journaux de santé illimités</li>
              <li>Rappels médicaments avancés</li>
              <li>Rapports de santé détaillés</li>
              <li>Check-In Vocal</li>
              <li>Support prioritaire</li>
            </ul>
            <button className="pricing-button monthly">
              Continuer avec ce plan
            </button>
          </div>

          <div className="pricing-card annual featured">
            <div className="recommended-badge">Recommandé</div>
            <div className="pricing-title">Plan Annuel - Économisez 15%</div>
            <div className="pricing-price">81,50€</div>
            <div className="pricing-period">/an</div>
            <ul className="pricing-features">
              <li>Toutes les fonctionnalités Premium</li>
              <li>2 mois offerts (soit 6,79€/mois)</li>
              <li>Analyse prédictive avancée</li>
              <li>CarePlan ultra-personnalisé</li>
              <li>Exports de données illimités</li>
              <li>Support prioritaire 24/7</li>
              <li>Accès anticipé aux nouvelles fonctionnalités</li>
            </ul>
            
            <div className="pricing-cta">
              <button className="pricing-button-gradient">
                Passer à Premium
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="feature-comparison-section">
          <h3 className="comparison-title">Que se passe-t-il après l'essai ?</h3>
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Fonctionnalités</div>
              <div className="header-cell trial">Essai 3 mois</div>
              <div className="header-cell expired">Après essai</div>
              <div className="header-cell premium">Premium</div>
            </div>
            <div className="table-row">
              <div className="row-cell">Journaux de santé illimités</div>
              <div className="row-cell trial">✓</div>
              <div className="row-cell expired">✗</div>
              <div className="row-cell premium">✓</div>
            </div>
            <div className="table-row">
              <div className="row-cell">Rappels de médicaments avancés</div>
              <div className="row-cell trial">✓</div>
              <div className="row-cell expired">✗</div>
              <div className="row-cell premium">✓</div>
            </div>
            <div className="table-row">
              <div className="row-cell">Rapports de santé illimités</div>
              <div className="row-cell trial">✓</div>
              <div className="row-cell expired">✗</div>
              <div className="row-cell premium">✓</div>
            </div>
            <div className="table-row">
              <div className="row-cell">Check-In Vocal</div>
              <div className="row-cell trial">✓</div>
              <div className="row-cell expired">✗</div>
              <div className="row-cell premium">✓</div>
            </div>
            <div className="table-row">
              <div className="row-cell">Analyse prédictive & conseils</div>
              <div className="row-cell trial">✓</div>
              <div className="row-cell expired">✗</div>
              <div className="row-cell premium">✓</div>
            </div>
            <div className="table-row">
              <div className="row-cell">CarePlan personnalisé</div>
              <div className="row-cell trial">✓</div>
              <div className="row-cell expired">✗</div>
              <div className="row-cell premium">✓</div>
            </div>
          </div>
        </div>

        {/* User Testimonials */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">Ce que disent nos utilisateurs</h3>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="avatar purple">M</div>
              <div className="user-info">
                <div className="user-name">Marie L.</div>
                <div className="user-condition">Hypertension</div>
              </div>
            </div>
            <p className="testimonial-quote">
              "Grâce à l'essai gratuit, j'ai pu tester toutes les fonctionnalités. Maintenant avec Premium, je ne peux plus m'en passer, c'est complètement rentré dans ma routine !"
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="avatar blue">J</div>
              <div className="user-info">
                <div className="user-name">Jean-Pierre D.</div>
                <div className="user-condition">Diabète Type 2</div>
              </div>
            </div>
            <p className="testimonial-quote">
              "L'essai m'a convaincu. Le suivi complet et les analyses de ma santé valent largement l'abonnement Premium."
            </p>
          </div>
        </div>

        {/* Data Security Section */}
        <div className="data-security-section">
          <h3 className="security-title">Vos données en sécurité</h3>
          <div className="security-features">
            <div className="security-item">
              <div className="security-icon shield">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Chiffré</span>
            </div>
            <div className="security-item">
              <div className="security-icon check">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span>RGPD</span>
            </div>
            <div className="security-item">
              <div className="security-icon cert">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Certifié</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3 className="faq-title">Questions fréquentes</h3>
          {faqData.map((faq) => (
            <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'open' : ''}`}>
              <div className="faq-question-container" onClick={() => toggleFAQ(faq.id)}>
                <div className="faq-question-section">
                  <p className="faq-question">{faq.question}</p>
                  {openFAQ === faq.id && (
                    <p className="faq-answer-text">{faq.answer}</p>
                  )}
                </div>
                <span className="faq-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PremiumUpgradePage;