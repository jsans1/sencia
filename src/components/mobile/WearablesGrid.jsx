import React from 'react';

const WearablesGrid = ({ selectedDevices = [], onToggleDevice, className = '' }) => {
  const devices = [
    { name: 'Apple Health', id: 'apple-health' },
    { name: 'Google Fit', id: 'google-fit' },
    { name: 'Samsung Health', id: 'samsung-health' },
    { name: 'Garmin', id: 'garmin' },
    { name: 'Withings', id: 'withings' },
    { name: 'Oura', id: 'oura' },
    { name: 'Fitbit', id: 'fitbit' },
    { name: 'Whoop', id: 'whoop' }
  ];

  const isSelected = (deviceId) => selectedDevices.includes(deviceId);

  return (
    <div className={`wearables-grid ${className}`}>
      {devices.map((device) => (
        <div
          key={device.id}
          className={`wearable-card ${isSelected(device.id) ? 'selected' : ''}`}
          onClick={() => onToggleDevice(device.id)}
        >
          <div className="wearable-content">
            <span className="wearable-name">{device.name}</span>
            {isSelected(device.id) && (
              <div className="check-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8.5 14L4.5 10L5.91 8.59L8.5 11.17L14.09 5.59L15.5 7L8.5 14Z" fill="currentColor"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WearablesGrid;