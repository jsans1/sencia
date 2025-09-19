import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../export/export-styles.css';

interface ModifyAppointmentProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (data: { doctor: string; date: string; time: string }) => void;
  initialData?: {
    doctor: string;
    date: string;
    time: string;
  };
}

const ModifyAppointment: React.FC<ModifyAppointmentProps> = ({
  onBack,
  onClose,
  onContinue,
  initialData
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState(initialData?.doctor || "Dr. Martin - Cardiologue");
  const [day, setDay] = useState(initialData?.date?.split('/')[0] || "14");
  const [month, setMonth] = useState(initialData?.date?.split('/')[1] || "12");
  const [year, setYear] = useState(initialData?.date?.split('/')[2] || "2025");
  const [time, setTime] = useState(initialData?.time || "14:30");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDoctorPicker, setShowDoctorPicker] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectedDate: Date | undefined = useMemo(() => {
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);
    if (Number.isFinite(d) && Number.isFinite(m) && Number.isFinite(y) && m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      const date = new Date(y, m - 1, d);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }, [day, month, year]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!showCalendar && !showTimePicker && !showDoctorPicker) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
        setShowTimePicker(false);
        setShowDoctorPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar, showTimePicker, showDoctorPicker]);

  const doctors = [
    "Dr. Martin - Cardiologue",
    "Dr. Dubois - Médecin généraliste", 
    "Dr. Leroy - Neurologue",
    "Dr. Moreau - Endocrinologue",
    "Dr. Petit - Pneumologue",
    "Dr. Bernard - Néphrologue"
  ];

  const handleContinue = () => {
    const dateString = `${day}/${month}/${year}`;
    onContinue({ doctor: selectedDoctor, date: dateString, time });
  };

  const isFormValid = selectedDoctor && day && month && year && time;

  return (
    <div className="export-form-container">
      <div className="export-background" />
      
      <div className="export-content export-content--with-fixed-footer" ref={containerRef}>
        <h1 className="export-title">Modifier votre <span className="highlight-text">rendez-vous</span></h1>
        <p className="export-subtitle">Choisissez une nouvelle date et heure pour votre consultation.</p>
        
        <div className="export-form">
          <div className="form-group">
            <label className="form-label">Date du rendez-vous</label>
            <div className="date-inputs-container">
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
              </div>
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => {
                setShowCalendar(true);
                setShowTimePicker(false);
                setShowDoctorPicker(false);
              }} style={{ cursor: 'pointer' }}>
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {showCalendar && (
                <div className="date-picker-popover">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      if (!date) return;
                      const dd = String(date.getDate()).padStart(2, '0');
                      const mm = String(date.getMonth() + 1).padStart(2, '0');
                      const yy = String(date.getFullYear());
                      setDay(dd);
                      setMonth(mm);
                      setYear(yy);
                      setShowCalendar(false);
                    }}
                    captionLayout="dropdown"
                    fromYear={2024}
                    toYear={2030}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Heure du rendez-vous</label>
            <div className="time-input-container">
              <input
                type="text"
                className="time-input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={() => {
                  setShowTimePicker(true);
                  setShowCalendar(false);
                  setShowDoctorPicker(false);
                }}
                readOnly
                placeholder="HH:MM"
              />
              <svg className="time-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => {
                setShowTimePicker(true);
                setShowCalendar(false);
                setShowDoctorPicker(false);
              }} style={{ cursor: 'pointer' }}>
                <path d="M12 7V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {showTimePicker && (
                <div className="time-picker-popover">
                  <div className="time-picker-content">
                    <div className="time-picker-title">Sélectionner l'heure</div>
                    <div className="time-slots">
                      {Array.from({ length: 24 }, (_, i) => {
                        const hour = i.toString().padStart(2, '0');
                        return (
                          <div key={i} className="time-slot-row">
                            <div 
                              className={`time-slot ${time.startsWith(hour + ':00') ? 'selected' : ''}`}
                              onClick={() => {
                                setTime(`${hour}:00`);
                                setShowTimePicker(false);
                              }}
                            >
                              {hour}:00
                            </div>
                            <div 
                              className={`time-slot ${time.startsWith(hour + ':30') ? 'selected' : ''}`}
                              onClick={() => {
                                setTime(`${hour}:30`);
                                setShowTimePicker(false);
                              }}
                            >
                              {hour}:30
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Praticien</label>
            <div className="doctor-input-container">
              <input
                type="text"
                className="doctor-input"
                value={selectedDoctor}
                onClick={() => {
                  setShowDoctorPicker(true);
                  setShowCalendar(false);
                  setShowTimePicker(false);
                }}
                readOnly
                placeholder="Sélectionner un praticien"
              />
              <svg className="doctor-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => {
                setShowDoctorPicker(true);
                setShowCalendar(false);
                setShowTimePicker(false);
              }} style={{ cursor: 'pointer' }}>
                <path d="M8 9L12 13L16 9" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {showDoctorPicker && (
                <div className="doctor-picker-popover">
                  <div className="doctor-picker-content">
                    <div className="doctor-picker-title">Sélectionner le praticien</div>
                    <div className="doctor-list">
                      {doctors.map((doctor, index) => (
                        <div 
                          key={index}
                          className={`doctor-option ${selectedDoctor === doctor ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedDoctor(doctor);
                            setShowDoctorPicker(false);
                          }}
                        >
                          {doctor}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="export-footer fixed">
        <button 
          className={`continue-button ${isFormValid ? 'enabled' : 'disabled'}`}
          onClick={handleContinue}
          disabled={!isFormValid}
        >
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
};

export default ModifyAppointment;
