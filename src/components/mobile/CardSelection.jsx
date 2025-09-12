import React from 'react';

const CardSelection = ({ 
  options, 
  selectedValue, 
  onSelect, 
  gridLayout = 'grid-2x2',
  className = '' 
}) => {
  return (
    <div className={`selection-grid ${gridLayout} ${className}`}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`selection-card ${selectedValue === option ? 'selected' : ''}`}
          onClick={() => onSelect(option)}
        >
          <span className="card-text">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CardSelection;