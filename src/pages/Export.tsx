import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TabType } from '../types';
import MobileNav from '../components/MobileNav';
import TopLogo from '../components/TopLogo';
import ExportDashboard from '../components/export/ExportDashboard';
import ChoixDeLexport from '../components/export/ChoixDeLexport';
import Export2Specialiste from '../components/export/Export2Specialiste';
import Export2SpecialisteNext from '../components/export/Export2SpecialisteNext';
import PersonalChoice from '../components/export/PersonalChoice';
import PersonalSetup from '../components/export/PersonalSetup';
import LoadingScreen from '../components/export/LoadingScreen';

// Navigation state type
type CurrentPage = 'dashboard' | 'export-choice' | 'last-appointment' | 'next-appointment' | 'loading' | 'personal-choice' | 'personal-setup' | 'personal-loading';

const Export = () => {
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext() || {};
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');

  // Helper function to open PDF report in new tab
  const openReportPDF = () => {
    const pdfPath = '/src/assets/Rapport-Loris-Duchamp.pdf';
    window.open(pdfPath, '_blank');
  };

  const handleNav = (page: string) => {
    switch (page) {
      case 'Home':
        navigate('/app');
        break;
      case 'Explore':
        navigate('/app/visualization');
        break;
      case 'Add':
        // Handle add functionality
        break;
      case 'Care':
        navigate('/app/export');
        break;
      case 'Loris':
        navigate('/app/profile');
        break;
      default:
        break;
    }
  };


  const handleNavigateToExportChoice = () => {
    setCurrentPage('export-choice');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleExportContinue = (type: 'practitioner' | 'personal') => {
    if (type === 'practitioner') {
      setCurrentPage('last-appointment');
    } else {
      setCurrentPage('personal-choice');
    }
  };

  const handleLastAppointmentContinue = (data: { doctor: string; date: string }) => {
    console.log('Last appointment data:', data);
    setCurrentPage('next-appointment');
  };

  const handleNextAppointmentContinue = (data: { date: string }) => {
    console.log('Next appointment data:', data);
    setCurrentPage('loading');
  };

  const handleLoadingComplete = () => {
    setCurrentPage('dashboard');
    openReportPDF();
  };

  const handleBackFromLastAppointment = () => {
    setCurrentPage('export-choice');
  };

  const handleBackFromNextAppointment = () => {
    setCurrentPage('last-appointment');
  };

  const handleCloseExport = () => {
    setCurrentPage('dashboard');
  };

  const handleCreateReport = () => {
    setCurrentPage('export-choice');
  };

  const handleModifyAppointment = () => {
    // Handle modify appointment
    console.log('Modify appointment clicked');
  };

  const handleFilter = () => {
    // Handle filter
    console.log('Filter clicked');
  };

  const handleReportClick = (reportTitle: string) => {
    // Handle report click
    console.log('Report clicked:', reportTitle);
    openReportPDF();
  };

  const handlePersonalChoiceContinue = (type: 'health-summary' | 'detailed-report') => {
    console.log('Personal choice type:', type);
    setCurrentPage('personal-setup');
  };

  const handlePersonalSetupContinue = (data: { startDate: string; endDate: string; period?: string }) => {
    console.log('Personal setup data:', data);
    setCurrentPage('personal-loading');
  };

  const handleBackFromPersonalChoice = () => {
    setCurrentPage('export-choice');
  };

  const handleBackFromPersonalSetup = () => {
    setCurrentPage('personal-choice');
  };

  const handlePersonalLoadingComplete = () => {
    setCurrentPage('dashboard');
    openReportPDF();
  };

  // Render different pages based on current state
  if (currentPage === 'export-choice') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <ChoixDeLexport
            onBack={handleBackToDashboard}
            onClose={handleCloseExport}
            onContinue={handleExportContinue}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'last-appointment') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <Export2Specialiste
            onBack={handleBackFromLastAppointment}
            onClose={handleCloseExport}
            onContinue={handleLastAppointmentContinue}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'next-appointment') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <Export2SpecialisteNext
            onBack={handleBackFromNextAppointment}
            onClose={handleCloseExport}
            onContinue={handleNextAppointmentContinue}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'loading') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <LoadingScreen
            onComplete={handleLoadingComplete}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'personal-choice') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <PersonalChoice
            onBack={handleBackFromPersonalChoice}
            onClose={handleCloseExport}
            onContinue={handlePersonalChoiceContinue}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'personal-setup') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <PersonalSetup
            onBack={handleBackFromPersonalSetup}
            onClose={handleCloseExport}
            onContinue={handlePersonalSetupContinue}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (currentPage === 'personal-loading') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <TopLogo />
        <div className="w-full max-w-[393px] min-h-screen relative">
          <LoadingScreen
            onComplete={handlePersonalLoadingComplete}
          />
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  // Default dashboard view
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
      <TopLogo />
      <div className="w-full max-w-[393px] min-h-screen relative">
        <ExportDashboard
          onCreateReport={handleCreateReport}
          onModifyAppointment={handleModifyAppointment}
          onFilter={handleFilter}
          onReportClick={handleReportClick}
        />
      </div>
      <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
    </div>
  );
};

export default Export;
