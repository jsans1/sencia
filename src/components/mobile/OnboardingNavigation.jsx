import React from 'react';

const OnboardingNavigation = ({ 
  onBack, 
  onClose, 
  progress, 
  currentStep, 
  totalSteps, 
  showProgress = true,
  showClose = true 
}) => {
  return (
    <div className="onboarding-nav">
      <div className="nav-top">
        <button className="nav-back" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {showProgress && (
          <div className="progress-indicator">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(progress || 0) * 100}%` }}
              />
            </div>
          </div>
        )}
        
        {showClose && (
          <button className="nav-close" onClick={onClose} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {showProgress && currentStep && totalSteps && (
        <div className="step-indicator">
          Step {currentStep} out of {totalSteps}
        </div>
      )}
    </div>
  );
};

export default OnboardingNavigation;