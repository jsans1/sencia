import React from 'react';
import '../export/export-styles.css';

interface ExportDashboardProps {
  onCreateReport: () => void;
  onModifyAppointment: () => void;
  onFilter: () => void;
  onReportClick: (reportTitle: string) => void;
}

const ExportDashboard: React.FC<ExportDashboardProps> = ({
  onCreateReport,
  onModifyAppointment,
  onFilter,
  onReportClick
}) => {
  return (
    <div className="export-dashboard">
      <div className="export-background" />
      
      <div className="export-dashboard-content">
        {/* Next Appointment Section */}
        <div className="export-section">
          <h2 className="export-section-title">Votre prochain rendez-vous</h2>
          
          <div className="next-appointment-card">
            <div className="next-appointment-header">
              <span className="next-appointment-header-text">
                Rapport en cours de préparation...
              </span>
            </div>
            
            <div className="next-appointment-content">
              <div>
                <h3 className="next-appointment-title">
                  Rendez-vous le 14/12/2025 avec votre Cardiologue
                </h3>
                <p className="next-appointment-subtitle">
                  Votre rapport est en préparation et vous sera envoyé par mail 48h avant.
                </p>
              </div>
              
              <div className="next-appointment-actions">
                <button 
                  className="modify-appointment-link"
                  onClick={onModifyAppointment}
                >
                  Modifier mon rendez-vous
                </button>
                <div className="countdown-badge">
                  <span className="countdown-text">J-10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="export-section">
          <div className="reports-section-header">
            <h2 className="reports-section-title">Vos rapports exportés (3)</h2>
            <button className="filter-button" onClick={onFilter}>
              <svg className="filter-icon" viewBox="0 0 15 15" fill="none">
                <path 
                  d="M7.5 1.25V13.75M1.25 4.375H13.75M3.75 7.5H11.25" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.25"
                />
              </svg>
              <span className="filter-text">Filtrer</span>
            </button>
          </div>
          
          <div className="reports-list">
            <div 
              className="report-item"
              onClick={() => onReportClick("Rapport du 11/11/2025")}
            >
              <div className="report-icon">
                <svg viewBox="0 0 20 20" fill="none">
                  <path 
                    d="M10 1L13.09 6.26L19 7L14.5 11.74L15.18 17.64L10 15.27L4.82 17.64L5.5 11.74L1 7L6.91 6.26L10 1Z" 
                    stroke="currentColor" 
                    strokeWidth="0.37" 
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="report-content">
                <h4 className="report-title">Rapport du 11/11/2025</h4>
                <p className="report-subtitle">Avec votre médecin généraliste</p>
              </div>
              <svg className="report-arrow" viewBox="0 0 7 11" fill="none">
                <path d="M5.5 10L1 5.5L5.5 1" />
              </svg>
            </div>
            
            <div 
              className="report-item"
              onClick={() => onReportClick("Rapport du 11/10/2025")}
            >
              <div className="report-icon">
                <svg viewBox="0 0 20 20" fill="none">
                  <path 
                    d="M10 1L13.09 6.26L19 7L14.5 11.74L15.18 17.64L10 15.27L4.82 17.64L5.5 11.74L1 7L6.91 6.26L10 1Z" 
                    stroke="currentColor" 
                    strokeWidth="1.36" 
                    fill="none"
                  />
                </svg>
              </div>
              <div className="report-content">
                <h4 className="report-title">Rapport du 11/10/2025</h4>
                <p className="report-subtitle">Avec votre cardiologue</p>
              </div>
              <svg className="report-arrow" viewBox="0 0 7 11" fill="none">
                <path d="M5.5 10L1 5.5L5.5 1" />
              </svg>
            </div>
            
            <div 
              className="report-item"
              onClick={() => onReportClick("Rapport du 11/09/2025")}
            >
              <div className="report-icon">
                <svg viewBox="0 0 20 20" fill="none">
                  <path 
                    d="M10 1L13.09 6.26L19 7L14.5 11.74L15.18 17.64L10 15.27L4.82 17.64L5.5 11.74L1 7L6.91 6.26L10 1Z" 
                    stroke="currentColor" 
                    strokeWidth="1.36" 
                    fill="none"
                  />
                </svg>
              </div>
              <div className="report-content">
                <h4 className="report-title">Rapport du 11/09/2025</h4>
                <p className="report-subtitle">Avec votre cardiologue</p>
              </div>
              <svg className="report-arrow" viewBox="0 0 7 11" fill="none">
                <path d="M5.5 10L1 5.5L5.5 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Create Report Button - positioned for mobile nav */}
      <button 
        className="create-report-button"
        onClick={onCreateReport}
      >
        <span className="create-report-button-text">
          Créer un nouveau rapport
        </span>
      </button>
    </div>
  );
};

export default ExportDashboard;