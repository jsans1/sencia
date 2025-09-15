// Global type definitions for the Sencia Healthcare App

export type TabType = 'home' | 'explore' | 'care' | 'profile';

export interface AppointmentData {
  id: string;
  date: string;
  time: string;
  doctor: string;
  specialty: string;
  status: 'upcoming' | 'preparing' | 'completed' | 'cancelled';
  daysUntil: number;
}

export interface ReportData {
  id: string;
  title: string;
  date: string;
  doctor: string;
  specialty: string;
  type: 'general' | 'cardiology' | 'neurology' | 'other';
  status: 'completed' | 'pending' | 'processing';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface SVGPaths {
  [key: string]: string;
}

// Component prop interfaces
export interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export interface ReportItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}

// Event handler types
export interface AppHandlers {
  onModifyAppointment: () => void;
  onFilter: () => void;
  onReportClick: (reportTitle: string) => void;
  onCreateReport: () => void;
  onTabChange: (tab: TabType) => void;
}

// Utility types
export type Theme = 'light' | 'dark';
export type Language = 'fr' | 'en';

export interface AppConfig {
  theme: Theme;
  language: Language;
  notifications: boolean;
}