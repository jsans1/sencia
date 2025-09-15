// Constants for the Sencia Healthcare App

export const COLORS = {
  primary: '#a69bf8',
  secondary: '#0e7afe',
  success: '#b6f0c6',
  warning: '#fff6e5',
  error: '#ff6b6b',
  text: {
    primary: '#212121',
    secondary: '#7a7a7a',
    muted: '#636363',
  },
  background: {
    primary: '#ffffff',
    secondary: '#faf9f9',
    tertiary: '#e4e4e4',
  },
} as const;

export const MESSAGES = {
  fr: {
    alerts: {
      navigate: 'Navigation vers',
      modifyAppointment: 'Modifier le rendez-vous',
      filterReports: 'Filtrer les rapports',
      openReport: 'Ouvrir le rapport',
      createReport: 'Créer un nouveau rapport',
    },
    buttons: {
      continue: 'Continuer',
      back: 'Retour',
      close: 'Fermer',
      create: 'Créer',
      modify: 'Modifier',
      filter: 'Filtrer',
    },
    labels: {
      doctor: 'Médecin',
      date: 'Date',
      appointment: 'Rendez-vous',
      report: 'Rapport',
      export: 'Export',
    },
  },
} as const;

export const MOCK_DATA = {
  appointments: [
    {
      id: '1',
      date: '2025-12-14',
      time: '14:30',
      doctor: 'Dr. Martin',
      specialty: 'Cardiologue',
      status: 'upcoming' as const,
      daysUntil: 10,
    },
  ],
  reports: [
    {
      id: '1',
      title: 'Rapport du 11/11/2025',
      date: '2025-11-11',
      doctor: 'Dr. Martin',
      specialty: 'Médecin généraliste',
      type: 'general' as const,
      status: 'completed' as const,
    },
    {
      id: '2',
      title: 'Rapport du 11/10/2025',
      date: '2025-10-11',
      doctor: 'Dr. Dubois',
      specialty: 'Cardiologue',
      type: 'cardiology' as const,
      status: 'completed' as const,
    },
    {
      id: '3',
      title: 'Rapport du 11/09/2025',
      date: '2025-09-11',
      doctor: 'Dr. Dubois',
      specialty: 'Cardiologue',
      type: 'cardiology' as const,
      status: 'completed' as const,
    },
  ],
} as const;
