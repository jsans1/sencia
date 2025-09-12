import React from 'react';

const StatusBar = ({ time = '9:41' }) => {
  return (
    <div className="status-bar">
      <div className="status-time">{time}</div>
      <div className="status-indicators">
        <div className="signal-strength">
          <span className="signal-dot"></span>
          <span className="signal-dot"></span>
          <span className="signal-dot"></span>
          <span className="signal-dot"></span>
        </div>
        <div className="wifi-icon">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M1.5 7.5C3.5 5.5 6 4.5 7.5 4.5C9 4.5 11.5 5.5 13.5 7.5M3.5 9.5C4.5 8.5 6 8 7.5 8C9 8 10.5 8.5 11.5 9.5" 
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="battery">
          <div className="battery-level"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;