import React, { useEffect } from 'react';
import '../export/export-styles.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 300000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <div className="export-background" />
      
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        
        <h1 className="loading-title">Génération du rapport</h1>
        <p className="loading-subtitle">Votre rapport personnalisé est en cours de création...</p>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p className="progress-text">75% terminé</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
