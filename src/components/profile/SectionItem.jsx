import React from 'react';

function SectionItem({ icon, text, onClick, className = "" }) {
  return (
    <button className={`section-item ${className}`} onClick={onClick}>
      <div className="item-icon">
        {typeof icon === 'string' && (icon.startsWith('data:') || icon.includes('.svg')) ? (
          <img src={icon} alt={text} className="section-icon" />
        ) : (
          icon
        )}
      </div>
      <span className="item-text">{text}</span>
      <div className="item-arrow">›</div>
    </button>
  );
}

export default SectionItem;
