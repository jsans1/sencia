import React from 'react';

function SectionItem({ icon, text, onClick, className = "" }) {
  return (
    <button className={`section-item ${className}`} onClick={onClick}>
      <div className="item-icon">{icon}</div>
      <span className="item-text">{text}</span>
      <div className="item-arrow">›</div>
    </button>
  );
}

export default SectionItem;
