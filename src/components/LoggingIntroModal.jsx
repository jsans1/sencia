import React, { useEffect } from 'react';

const LoggingIntroModal = ({ isOpen, onClose, onStart }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="logging-intro-modal-overlay" onClick={onClose}>
      <div className="logging-intro-modal" onClick={e => e.stopPropagation()}>
        <button className="logging-intro-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <h2 className="modal-title">Réalisez votre premier check-in !</h2>
        <p className="modal-description">
          Suivez quotidiennement vos symptômes et vos ressentis pour des analyses plus précises.
        </p>
        
        <div className="modal-actions">
          <button 
            className="modal-button-primary"
            onClick={onStart}
          >
            Commencer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggingIntroModal;
