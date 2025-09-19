// Constants and configuration for the Sencia Healthcare App

export const APP_CONFIG = {
  name: 'Sencia',
  version: '1.0.0',
  supportedLanguages: ['fr', 'en'] as const,
  defaultLanguage: 'fr' as const,
  timeUpdateInterval: 60000, // Update time every minute
} as const;

export const COLORS = {
  primary: {
    purple: '#a69bf8',
    blue: '#0e7afe',
  },
  text: {
    primary: '#212121',
    secondary: '#606060',
    tertiary: '#7a7a7a',
    muted: '#767676',
  },
  background: {
    white: '#ffffff',
    light: '#faf9f9',
  },
  gradients: {
    primary: 'linear-gradient(to right, #a69bf8, #0e7afe)',
    primaryReverse: 'linear-gradient(to left, #a69bf8, #0e7afe)',
  }
} as const;

export const NAVIGATION_TABS = [
  { id: 'home', label: 'Home' },
  { id: 'explore', label: 'Explore' },
  { id: 'care', label: 'Care' },
  { id: 'profile', label: 'Loris' },
] as const;

export const REPORT_TYPES = {
  GENERAL: 'general',
  CARDIOLOGY: 'cardiology',
  NEUROLOGY: 'neurology',
  OTHER: 'other',
} as const;

export const APPOINTMENT_STATUS = {
  UPCOMING: 'upcoming',
  PREPARING: 'preparing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const MOCK_DATA = {
  appointments: [
    {
      id: '1',
      date: '2025-12-14',
      time: '14:30',
      doctor: 'Dr. Martin',
      specialty: 'Cardiologue',
      status: 'preparing',
      daysUntil: 10,
    }
  ],
  reports: [
    {
      id: '1',
      title: 'Rapport du 11/11/2025',
      date: '2025-11-11',
      doctor: 'Dr. Garance',
      specialty: 'médecin généraliste',
      type: 'general',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Rapport du 11/10/2025',
      date: '2025-10-11',
      doctor: 'Dr. Garance',
      specialty: 'cardiologue',
      type: 'cardiology',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Rapport du 11/09/2025',
      date: '2025-09-11',
      doctor: 'Dr. Martin',
      specialty: 'cardiologue',
      type: 'cardiology',
      status: 'completed',
    }
  ]
} as const;

export const MESSAGES = {
  fr: {
    appointment: {
      modify: 'Modifier mon rendez-vous',
      preparing: 'Rapport en cours de préparation...',
      upcoming: 'Votre prochain rendez-vous',
      description: 'Votre rapport est en préparation et vous sera envoyé par mail 48h avant.',
    },
    reports: {
      title: 'Vos rapports exportés',
      filter: 'Filtrer',
      create: 'Créer un nouveau rapport',
    },
    navigation: {
      home: 'Home',
      explore: 'Explore',
      care: 'Care',
      profile: 'Loris',
    },
    alerts: {
      modifyAppointment: 'Modifier le rendez-vous - Cette fonctionnalité ouvrira un formulaire de modification',
      filterReports: 'Filtrer les rapports - Cette fonctionnalité ouvrira les options de filtrage',
      openReport: 'Cette fonctionnalité afficherait le rapport complet',
      createReport: 'Créer un nouveau rapport - Cette fonctionnalité ouvrira le formulaire de création',
      navigate: 'Cette fonctionnalité naviguerait vers la page',
    }
  }
} as const;