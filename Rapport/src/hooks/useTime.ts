import { useState, useEffect } from 'react';
import { formatTime } from '../utils/dateUtils';
import { APP_CONFIG } from '../utils/constants';

/**
 * Custom hook for managing time display
 */
export const useTime = (updateInterval: number = APP_CONFIG.timeUpdateInterval) => {
  const [currentTime, setCurrentTime] = useState<string>(formatTime());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatTime());
    };

    // Update immediately
    updateTime();

    // Set up interval for updates
    const interval = setInterval(updateTime, updateInterval);

    // Cleanup function
    return () => clearInterval(interval);
  }, [updateInterval]);

  return currentTime;
};