// Date utility functions for the Sencia Healthcare App

export const formatCountdown = (days: number): string => {
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Demain";
  if (days < 0) return `Il y a ${Math.abs(days)} jour${Math.abs(days) > 1 ? 's' : ''}`;
  return `J-${days}`;
};

export const calculateDaysUntil = (dateString: string): number => {
  const targetDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatDateWithTime = (dateString: string, timeString: string): string => {
  const date = new Date(`${dateString}T${timeString}`);
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
