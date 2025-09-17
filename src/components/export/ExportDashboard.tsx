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
                <div 
                  className="modify-appointment-link"
                  onClick={onModifyAppointment}
                >
                  Modifier mon rendez-vous
                </div>
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
             
              <span className="filter-text">Filtrer</span>
            </button>
          </div>
          
          <div className="reports-list">
            <div 
              className="report-item"
              onClick={() => onReportClick("Rapport du 11/11/2025")}
            >
              <div className="report-icon">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.8418 0.816406V0.817383C2.91425 0.816657 2.98646 0.829422 3.05371 0.856445C3.1215 0.88375 3.18331 0.924276 3.23535 0.975586C3.2874 1.02694 3.32919 1.08783 3.35742 1.15527C3.38569 1.22283 3.40039 1.29591 3.40039 1.36914C3.40035 1.44221 3.3856 1.51462 3.35742 1.58203C3.32916 1.64959 3.2875 1.71128 3.23535 1.7627C3.18329 1.81399 3.12152 1.85456 3.05371 1.88184C2.98646 1.90886 2.91425 1.92162 2.8418 1.9209L1.9209 1.92188V7.44824C1.92115 9.39366 3.47544 10.9482 5.4209 10.9482C7.36643 10.9482 8.92065 9.39371 8.9209 7.44824V1.92188H8V1.9209C7.92778 1.92158 7.85611 1.90872 7.78906 1.88184C7.72111 1.85453 7.65859 1.81411 7.60645 1.7627C7.55432 1.7113 7.51362 1.64957 7.48535 1.58203C7.45713 1.51457 7.44242 1.44227 7.44238 1.36914C7.44238 1.2959 7.45709 1.22283 7.48535 1.15527C7.51356 1.08799 7.55454 1.02685 7.60645 0.975586C7.65859 0.924168 7.72111 0.883753 7.78906 0.856445C7.85617 0.829499 7.9277 0.8167 8 0.817383V0.816406H9.47363C9.62019 0.816421 9.76062 0.874884 9.86426 0.978516C9.96781 1.08214 10.0264 1.22264 10.0264 1.36914V7.44824C10.0261 9.80632 8.25824 11.7448 5.97363 12.0166V12.79C5.97372 14.7356 7.52803 16.29 9.47363 16.29C11.4193 16.29 12.9735 14.7356 12.9736 12.79V10.8467C12.3338 10.6179 11.8682 10.0085 11.8682 9.29004C11.8682 8.37877 12.6151 7.63184 13.5264 7.63184C14.4376 7.63186 15.1846 8.37879 15.1846 9.29004C15.1845 10.0085 14.7189 10.6179 14.0791 10.8467V12.79C14.079 15.3346 12.0182 17.3955 9.47363 17.3955C6.92908 17.3955 4.86825 15.3346 4.86816 12.79V12.0166C2.5837 11.7446 0.815665 9.80621 0.81543 7.44824V1.36914L0.825195 1.26758C0.843638 1.16705 0.889454 1.07282 0.958984 0.996094C1.05161 0.893904 1.1791 0.83038 1.31641 0.817383L1.3252 0.816406H2.8418ZM13.5264 8.7373C13.2168 8.7373 12.9736 8.98047 12.9736 9.29004C12.9737 9.59953 13.2169 9.84277 13.5264 9.84277C13.8359 9.84275 14.079 9.59952 14.0791 9.29004C14.0791 8.98049 13.8359 8.73733 13.5264 8.7373Z" fill="white" stroke="white" stroke-width="0.36843"/>
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
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.97598 8.50002H6.99998L7.39998 7.65558L8.99998 11.4556L10.6 5.54447L11.8 8.50002H16.016M14.6 10.1889C15.792 8.95602 17 7.47825 17 5.54447C17 4.31269 16.5364 3.13135 15.7113 2.26035C14.8861 1.38935 13.767 0.900024 12.6 0.900024C11.192 0.900024 10.2 1.32225 9 2.58891C7.8 1.32225 6.808 0.900024 5.4 0.900024C4.23305 0.900024 3.11389 1.38935 2.28873 2.26035C1.46357 3.13135 1 4.31269 1 5.54447C1 7.48669 2.2 8.96447 3.4 10.1889L9 16.1L14.6 10.1889Z" stroke="white" stroke-width="1.36" stroke-linecap="round" stroke-linejoin="round"/>
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
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.97598 8.50002H6.99998L7.39998 7.65558L8.99998 11.4556L10.6 5.54447L11.8 8.50002H16.016M14.6 10.1889C15.792 8.95602 17 7.47825 17 5.54447C17 4.31269 16.5364 3.13135 15.7113 2.26035C14.8861 1.38935 13.767 0.900024 12.6 0.900024C11.192 0.900024 10.2 1.32225 9 2.58891C7.8 1.32225 6.808 0.900024 5.4 0.900024C4.23305 0.900024 3.11389 1.38935 2.28873 2.26035C1.46357 3.13135 1 4.31269 1 5.54447C1 7.48669 2.2 8.96447 3.4 10.1889L9 16.1L14.6 10.1889Z" stroke="white" stroke-width="1.36" stroke-linecap="round" stroke-linejoin="round"/>
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