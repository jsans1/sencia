import React, { useState } from 'react';
import '../export/export-styles.css';

interface PersonalSetupProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (data: { startDate: string; endDate: string; period?: string }) => void;
}

const PersonalSetup: React.FC<PersonalSetupProps> = ({
  onBack,
  onClose,
  onContinue
}) => {
  const [startDay, setStartDay] = useState("08");
  const [startMonth, setStartMonth] = useState("09");
  const [startYear, setStartYear] = useState("2025");
  const [endDay, setEndDay] = useState("08");
  const [endMonth, setEndMonth] = useState("09");
  const [endYear, setEndYear] = useState("2025");
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const handleContinue = () => {
    const startDate = `${startDay}/${startMonth}/${startYear}`;
    const endDate = `${endDay}/${endMonth}/${endYear}`;
    onContinue({ startDate, endDate, period: selectedPeriod || undefined });
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
    // Clear date inputs when period is selected
    setStartDay("");
    setStartMonth("");
    setStartYear("");
    setEndDay("");
    setEndMonth("");
    setEndYear("");
  };

  const isFormValid = selectedPeriod || (startDay && startMonth && startYear && endDay && endMonth && endYear);

  return (
    <div className="export-form-container">
      <div className="export-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="export-content">
        <h1 className="export-title">Votre rapport personnel est bientôt prêt...</h1>
        <p className="export-subtitle">Entrez les dates entre lesquelles vous souhaitez un récapitulatif de votre état.</p>
        
        <div className="export-form">
          {/* Date Range Selection */}
          <div className="form-group">
            <label className="form-label">Entrez une date de début</label>
            <div className="date-inputs">
              <input
                type="text"
                className="date-input"
                placeholder="JJ"
                value={startDay}
                onChange={(e) => {
                  setStartDay(e.target.value);
                  setSelectedPeriod(null); // Clear period selection
                }}
                maxLength={2}
              />
              <span className="date-separator">/</span>
              <input
                type="text"
                className="date-input"
                placeholder="MM"
                value={startMonth}
                onChange={(e) => {
                  setStartMonth(e.target.value);
                  setSelectedPeriod(null);
                }}
                maxLength={2}
              />
              <span className="date-separator">/</span>
              <input
                type="text"
                className="date-input"
                placeholder="AAAA"
                value={startYear}
                onChange={(e) => {
                  setStartYear(e.target.value);
                  setSelectedPeriod(null);
                }}
                maxLength={4}
              />
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Entrez une date de fin</label>
            <div className="date-inputs">
              <input
                type="text"
                className="date-input"
                placeholder="JJ"
                value={endDay}
                onChange={(e) => {
                  setEndDay(e.target.value);
                  setSelectedPeriod(null);
                }}
                maxLength={2}
              />
              <span className="date-separator">/</span>
              <input
                type="text"
                className="date-input"
                placeholder="MM"
                value={endMonth}
                onChange={(e) => {
                  setEndMonth(e.target.value);
                  setSelectedPeriod(null);
                }}
                maxLength={2}
              />
              <span className="date-separator">/</span>
              <input
                type="text"
                className="date-input"
                placeholder="AAAA"
                value={endYear}
                onChange={(e) => {
                  setEndYear(e.target.value);
                  setSelectedPeriod(null);
                }}
                maxLength={4}
              />
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Predefined Periods */}
          <div className="form-group">
            <label className="form-label">Ou via les périodes suivantes</label>
            <div className="period-options">
              <button 
                className={`period-button ${selectedPeriod === 'last-month' ? 'selected' : ''}`}
                onClick={() => handlePeriodSelect('last-month')}
              >
                Dernier mois
              </button>
              <button 
                className={`period-button ${selectedPeriod === 'last-quarter' ? 'selected' : ''}`}
                onClick={() => handlePeriodSelect('last-quarter')}
              >
                Dernier trimestre
              </button>
              <button 
                className={`period-button premium ${selectedPeriod === 'current-year' ? 'selected' : ''}`}
                onClick={() => handlePeriodSelect('current-year')}
              >
                Année en cours
                <span className="premium-badge">Fonctionnalité Premium</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="export-footer">
        <button 
          className={`continue-button ${isFormValid ? 'enabled' : 'disabled'}`}
          onClick={handleContinue}
          disabled={!isFormValid}
        >
          Exporter mon rapport
        </button>
      </div>
    </div>
  );
};

export default PersonalSetup;
