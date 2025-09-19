import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../export/export-styles.css';

interface Export2SpecialisteNextProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (data: { date: string }) => void;
}

const Export2SpecialisteNext: React.FC<Export2SpecialisteNextProps> = ({
  onBack,
  onClose,
  onContinue
}) => {
  const [day, setDay] = useState("14");
  const [month, setMonth] = useState("12");
  const [year, setYear] = useState("2025");
  const [showCalendar, setShowCalendar] = useState(false);

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
      if (!showCalendar) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  const handleContinue = () => {
    const dateString = `${day}/${month}/${year}`;
    onContinue({ date: dateString });
  };

  const isFormValid = day && month && year;

  return (
    <div className="export-form-container">
      <div className="export-background" />
      
      <div className="export-content export-content--with-fixed-footer" ref={containerRef}>
        <h1 className="export-title">Votre <span className="highlight-text">prochain</span> rendez-vous avec votre cardiologue</h1>
        <p className="export-subtitle">Entrez la date de ce prochain rendez-vous et vous recevrez un rapport 48h avant.</p>
        
        <div className="export-form">
          <div className="form-group">
            <label className="form-label">Entrez la date de votre prochain rendez-vous</label>
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
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => setShowCalendar((s) => !s)} style={{ cursor: 'pointer' }}>
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
                    fromYear={2010}
                    toYear={2030}
                  />
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
          Programmer mon rapport
        </button>
      </div>
    </div>
  );
};

export default Export2SpecialisteNext;
