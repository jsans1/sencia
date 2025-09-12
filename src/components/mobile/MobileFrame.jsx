import React from 'react';
import StatusBar from './StatusBar';

const MobileFrame = ({ children, showStatusBar = true, className = '' }) => {
  return (
    <div className={`mobile-frame ${className}`}>
      {showStatusBar && <StatusBar />}
      <div className="mobile-content">
        {children}
      </div>
      <div className="home-indicator"></div>
    </div>
  );
};

export default MobileFrame;