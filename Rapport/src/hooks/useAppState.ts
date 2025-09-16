import { useState, useCallback } from 'react';
import { TabType, AppConfig } from '../types';
import { MOCK_DATA, MESSAGES } from '../utils/constants';

/**
 * Custom hook for managing application state
 */
export const useAppState = () => {
  const [activeTab, setActiveTab] = useState<TabType>('explore');
  const [config, setConfig] = useState<AppConfig>({
    theme: 'light',
    language: 'fr',
    notifications: true,
  });

  // Navigation handler
  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    if (tab !== 'explore') {
      alert(`${MESSAGES.fr.alerts.navigate} ${tab}`);
    }
  }, []);

  // Appointment handlers
  const handleModifyAppointment = useCallback(() => {
    alert(MESSAGES.fr.alerts.modifyAppointment);
  }, []);

  // Report handlers
  const handleFilter = useCallback(() => {
    alert(MESSAGES.fr.alerts.filterReports);
  }, []);

  const handleReportClick = useCallback((reportTitle: string) => {
    alert(`Ouvrir ${reportTitle} - ${MESSAGES.fr.alerts.openReport}`);
  }, []);

  const handleCreateReport = useCallback(() => {
    alert(MESSAGES.fr.alerts.createReport);
  }, []);

  // Configuration handlers
  const updateConfig = useCallback((newConfig: Partial<AppConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  return {
    // State
    activeTab,
    config,
    appointments: MOCK_DATA.appointments,
    reports: MOCK_DATA.reports,
    
    // Handlers
    handleTabChange,
    handleModifyAppointment,
    handleFilter,
    handleReportClick,
    handleCreateReport,
    updateConfig,
    
    // Utilities
    setActiveTab,
  };
};