import React, { useState } from 'react';
import '../export/export-styles.css';

interface Export2SpecialisteProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (data: { doctor: string; date: string }) => void;
}

const Export2Specialiste: React.FC<Export2SpecialisteProps> = ({
  onBack,
  onClose,
  onContinue
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState("Cardiologue");
  const [day, setDay] = useState("08");
  const [month, setMonth] = useState("09");
  const [year, setYear] = useState("2025");

  const doctors = [
    "Cardiologue",
    "Médecin généraliste", 
    "Neurologue",
    "Endocrinologue",
    "Pneumologue",
    "Néphrologue"
  ];

  const handleContinue = () => {
    const dateString = `${day}/${month}/${year}`;
    onContinue({ doctor: selectedDoctor, date: dateString });
  };

  const isFormValid = selectedDoctor && day && month && year;

  return (
    <div className="export-form-container">
      <div className="export-background" />
      
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
        <h1 className="export-title">Votre <span className="highlight-text">dernier</span> rendez-vous avec votre praticien</h1>
        <p className="export-subtitle">Entrez le spécialiste que vous avez consulté et la date de ce dernier rendez-vous.</p>
        
        <div className="export-form">
          <div className="form-group">
            <label className="form-label">Votre médecin</label>
            <select 
              className="form-select"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              {doctors.map(doctor => (
                <option key={doctor} value={doctor}>{doctor}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Entrez la date de ce dernier rendez-vous</label>
            <div className="date-inputs">
              <input
                type="text"
                className="date-input"
                placeholder="JJ"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                maxLength={2}
              />
              <span className="date-separator">/</span>
              <input
                type="text"
                className="date-input"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                maxLength={2}
              />
              <span className="date-separator">/</span>
              <input
                type="text"
                className="date-input"
                placeholder="AAAA"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                maxLength={4}
              />
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
          Continuer
        </button>
      </div>
    </div>
  );
};

export default Export2Specialiste;
