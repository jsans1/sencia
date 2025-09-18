import React from 'react';

const LoggingSuccessModal = ({ isOpen, onClose, onViewData }) => {
  if (!isOpen) return null;

  return (
    <div className="logging-success-modal-overlay" onClick={onClose}>
      <div 
        className="logging-success-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="logging-success-close"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Success Icon */}
        <div className="logging-success-icon">
          <div className="logging-success-icon-circle">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="logging-success-title">
          Félicitations !
        </h1>

        {/* Main Message */}
        <p className="logging-success-message">
          Vos informations ont bien été prises en compte.
        </p>

        {/* Secondary Message */}
        <p className="logging-success-subtitle">
          Rendez-vous dans votre espace "Exports" pour en savoir plus.
        </p>

        {/* Action Button */}
        <button 
          className="logging-success-button"
          onClick={onViewData}
        >
          Consulter mes données
        </button>
      </div>
    </div>
  );
};

export default LoggingSuccessModal;
