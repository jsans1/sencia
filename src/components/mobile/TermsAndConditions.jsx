import React, { useState, useEffect, useRef } from 'react';

const TermsAndConditions = ({ onAcceptanceChange, accepted = false }) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [isUserAccepted, setIsUserAccepted] = useState(accepted);
  const scrollContainerRef = useRef(null);

  // Check if content overflows and requires scrolling
  const checkScrollRequirement = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollHeight, clientHeight } = container;
      // If content doesn't overflow (no scrolling needed), auto-enable acceptance
      if (scrollHeight <= clientHeight + 10) { // 10px tolerance
        setHasScrolledToBottom(true);
        return true;
      }
      return false;
    }
    return false;
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // Check if user has scrolled to within 50px of the bottom
      const hasReachedBottom = scrollTop + clientHeight >= scrollHeight - 50;
      
      if (hasReachedBottom && !hasScrolledToBottom) {
        setHasScrolledToBottom(true);
      }
    }
  };

  const handleAcceptanceToggle = () => {
    const newAcceptance = !isUserAccepted;
    setIsUserAccepted(newAcceptance);
    onAcceptanceChange && onAcceptanceChange(newAcceptance);
  };

  useEffect(() => {
    setIsUserAccepted(accepted);
  }, [accepted]);

  // Check overflow on mount and when content changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkScrollRequirement();
    }, 100); // Small delay to ensure content is rendered

    return () => clearTimeout(timeoutId);
  }, []);

  // Use ResizeObserver to handle dynamic content/container size changes
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      // Reset hasScrolledToBottom and recheck overflow when size changes
      setHasScrolledToBottom(false);
      setTimeout(() => {
        checkScrollRequirement();
      }, 50);
    });

    resizeObserver.observe(container);
    
    // Also observe the content div for content changes
    const contentDiv = container.querySelector('.terms-content');
    if (contentDiv) {
      resizeObserver.observe(contentDiv);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1 className="step-title">Conditions Générales d'Utilisation</h1>
        <p className="terms-subtitle">
          Veuillez lire attentivement nos conditions d'utilisation avant de continuer
        </p>
      </div>

      <div 
        className="terms-scroll-area" 
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className="terms-content">
          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les modalités et conditions dans lesquelles vous pouvez utiliser l'application mobile Sencia.
          </p>

          <h2>2. Acceptation des conditions</h2>
          <p>
            L'utilisation de l'application Sencia implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser l'application.
          </p>

          <h2>3. Description du service</h2>
          <p>
            Sencia est une application de suivi de santé destinée aux patients atteints de maladies chroniques, notamment l'hypertension. L'application permet de :
          </p>
          <ul>
            <li>Suivre vos métriques de santé quotidiennes</li>
            <li>Gérer vos médicaments et traitements</li>
            <li>Recevoir des plans de soins personnalisés</li>
            <li>Synchroniser avec des appareils de santé connectés</li>
          </ul>

          <h2>4. Données personnelles et confidentialité</h2>
          <p>
            Vos données de santé sont traitées conformément à notre Politique de Confidentialité et au Règlement Général sur la Protection des Données (RGPD). Nous nous engageons à :
          </p>
          <ul>
            <li>Protéger la confidentialité de vos données</li>
            <li>Ne pas partager vos informations sans votre consentement</li>
            <li>Utiliser vos données uniquement pour améliorer votre suivi de santé</li>
            <li>Vous permettre d'exercer vos droits sur vos données</li>
          </ul>

          <h2>5. Responsabilités de l'utilisateur</h2>
          <p>
            En utilisant Sencia, vous vous engagez à :
          </p>
          <ul>
            <li>Fournir des informations exactes et complètes</li>
            <li>Maintenir la confidentialité de vos identifiants</li>
            <li>Ne pas utiliser l'application à des fins illégales</li>
            <li>Respecter les droits de propriété intellectuelle</li>
          </ul>

          <h2>6. Limitations de responsabilité</h2>
          <p>
            Sencia est un outil d'aide au suivi de santé et ne remplace pas l'avis médical professionnel. Vous devez toujours consulter un professionnel de santé pour toute question médicale.
          </p>

          <h2>7. Modification des conditions</h2>
          <p>
            Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les modifications entreront en vigueur dès leur publication dans l'application.
          </p>

          <h2>8. Droit applicable</h2>
          <p>
            Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux juridictions françaises compétentes.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter à l'adresse : support@sencia.health
          </p>

          <div className="terms-date">
            Dernière mise à jour : 12 septembre 2025
          </div>
        </div>
      </div>

      <div className="terms-acceptance">
        <div 
          className={`acceptance-checkbox ${isUserAccepted ? 'checked' : ''} ${hasScrolledToBottom ? 'enabled' : 'disabled'}`}
          onClick={hasScrolledToBottom ? handleAcceptanceToggle : undefined}
        >
          <div className="checkbox-icon">
            {isUserAccepted && <span>✓</span>}
          </div>
          <span className="acceptance-text">
            J'ai lu et j'accepte les Conditions Générales d'Utilisation
          </span>
        </div>
        
        {!hasScrolledToBottom && (
          <div className="scroll-hint">
            Faites défiler jusqu'en bas pour accepter les conditions
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;