// Date and time utilities for the Sencia Healthcare App

/**
 * Formats a date string to French format (DD/MM/YYYY)
 */
export const formatDateToFrench = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(dateObj);
};

/**
 * Formats time to HH:MM format
 */
export const formatTime = (date: Date = new Date()): string => {
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

/**
 * Calculates days until a future date
 */
export const calculateDaysUntil = (targetDate: Date | string): number => {
  const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  const today = new Date();
  const diffTime = target.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Formats a countdown display (J-X format)
 */
export const formatCountdown = (days: number): string => {
  if (days === 0) return 'Aujourd\'hui';
  if (days === 1) return 'Demain';
  if (days > 0) return `J-${days}`;
  return `J+${Math.abs(days)}`;
};

/**
 * Checks if a date is in the past
 */
export const isDatePast = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dateObj < today;
};

/**
 * Gets the current date and time as an ISO string
 */
export const getCurrentDateTime = (): string => {
  return new Date().toISOString();
};