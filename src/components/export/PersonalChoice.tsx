import React, { useState } from 'react';
import '../export/export-styles.css';

interface PersonalChoiceProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (type: 'health-summary' | 'detailed-report') => void;
}

const PersonalChoice: React.FC<PersonalChoiceProps> = ({
  onBack,
  onClose,
  onContinue
}) => {
  const [selectedType, setSelectedType] = useState<'health-summary' | 'detailed-report' | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      onContinue(selectedType);
    }
  };

  return (
    <div className="export-choice-container">
      <div className="export-background" />

      <div className="export-content export-content--with-fixed-footer">
        <h1 className="export-title">Quel type de rapport souhaitez-vous exporter ?</h1>
        <p className="export-subtitle">Vous pouvez créer des rapports pour en savoir plus sur votre santé mais également pour les communiquer à votre praticien.</p>
        
        <div className="export-options">
          <button 
            className={`export-option ${selectedType === 'health-summary' ? 'selected' : ''}`}
            onClick={() => setSelectedType('health-summary')}
          >
            <div className="export-option-content">
              <h3 className="export-option-title">Résumé de santé</h3>
              <p className="export-option-description">Un aperçu général de votre état de santé</p>
            </div>
          </button>
          
          <button 
            className={`export-option ${selectedType === 'detailed-report' ? 'selected' : ''}`}
            onClick={() => setSelectedType('detailed-report')}
          >
            <div className="export-option-content">
              <h3 className="export-option-title">Rapport détaillé</h3>
              <p className="export-option-description">Une analyse complète avec graphiques et tendances</p>
            </div>
          </button>
        </div>
      </div>

      <div className="export-footer fixed">
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

export default PersonalChoice;
