import React from 'react';

const BottomActions = ({ 
  primaryLabel = 'Continuer',
  onPrimary,
  primaryDisabled = false,
  secondaryLabel,
  onSecondary,
  showSecondary = false,
  solidBackground = false
}) => {
  return (
    <div className={`bottom-actions${solidBackground ? ' solid' : ''}`}>
      <button 
        className="primary-button" 
        onClick={onPrimary}
        disabled={primaryDisabled}
      >
        {primaryLabel}
      </button>
      {showSecondary && secondaryLabel && (
        <button className="secondary-button" onClick={onSecondary}>
          {secondaryLabel}
        </button>
      )}
    </div>
  );
};

export default BottomActions;