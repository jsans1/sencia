import React, { useState } from 'react';
import '../export/export-styles.css';

interface ChoixDeLexportProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (type: 'practitioner' | 'personal') => void;
}

const ChoixDeLexport: React.FC<ChoixDeLexportProps> = ({
  onBack,
  onClose,
  onContinue
}) => {
  const [selectedType, setSelectedType] = useState<'practitioner' | 'personal' | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      onContinue(selectedType);
    }
  };

  return (
    <div className="export-choice-container">
      <div className="export-background" />
      
      {/* Header */}
      <div className="export-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="export-content">
        <h1 className="export-title">Choisissez le type de rapport</h1>
        <p className="export-subtitle">Sélectionnez l'utilisation prévue de votre rapport</p>
        
        <div className="export-options">
          <button 
            className={`export-option ${selectedType === 'practitioner' ? 'selected' : ''}`}
            onClick={() => setSelectedType('practitioner')}
          >
            <div className="export-option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="export-option-content">
              <h3 className="export-option-title">Communication avec un praticien</h3>
              <p className="export-option-description">Pour partager avec votre médecin ou spécialiste</p>
            </div>
          </button>
          
          <button 
            className={`export-option ${selectedType === 'personal' ? 'selected' : ''}`}
            onClick={() => setSelectedType('personal')}
          >
            <div className="export-option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="export-option-content">
              <h3 className="export-option-title">Utilisation personnelle</h3>
              <p className="export-option-description">Pour votre suivi personnel et votre bien-être</p>
            </div>
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <div className="export-footer">
        <button 
          className={`continue-button ${selectedType ? 'enabled' : 'disabled'}`}
          onClick={handleContinue}
          disabled={!selectedType}
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default ChoixDeLexport;