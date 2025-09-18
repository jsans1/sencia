import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
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
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const startSelectedDate: Date | undefined = useMemo(() => {
    const d = parseInt(startDay, 10);
    const m = parseInt(startMonth, 10);
    const y = parseInt(startYear, 10);
    if (Number.isFinite(d) && Number.isFinite(m) && Number.isFinite(y) && m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      const date = new Date(y, m - 1, d);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }, [startDay, startMonth, startYear]);

  const endSelectedDate: Date | undefined = useMemo(() => {
    const d = parseInt(endDay, 10);
    const m = parseInt(endMonth, 10);
    const y = parseInt(endYear, 10);
    if (Number.isFinite(d) && Number.isFinite(m) && Number.isFinite(y) && m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      const date = new Date(y, m - 1, d);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }, [endDay, endMonth, endYear]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowStartCalendar(false);
        setShowEndCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <div className="export-background" />
    

      <div className="export-content export-content--with-sticky-footer" ref={containerRef}>
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
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => setShowStartCalendar((s) => !s)} style={{ cursor: 'pointer' }}>
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {showStartCalendar && (
                <div className="date-picker-popover">
                  <DayPicker
                    mode="single"
                    selected={startSelectedDate}
                    onSelect={(date) => {
                      if (!date) return;
                      const dd = String(date.getDate()).padStart(2, '0');
                      const mm = String(date.getMonth() + 1).padStart(2, '0');
                      const yy = String(date.getFullYear());
                      setStartDay(dd);
                      setStartMonth(mm);
                      setStartYear(yy);
                      setSelectedPeriod(null);
                      setShowStartCalendar(false);
                    }}
                    captionLayout="dropdown"
                    fromYear={2010}
                    toYear={2030}
                  />
                </div>
              )}
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
              <svg className="calendar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => setShowEndCalendar((s) => !s)} style={{ cursor: 'pointer' }}>
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7002H15.7037M15.6947 16.7002H15.7037M11.9955 13.7002H12.0045M11.9955 16.7002H12.0045M8.29431 13.7002H8.30329M8.29431 16.7002H8.30329" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {showEndCalendar && (
                <div className="date-picker-popover">
                  <DayPicker
                    mode="single"
                    selected={endSelectedDate}
                    onSelect={(date) => {
                      if (!date) return;
                      const dd = String(date.getDate()).padStart(2, '0');
                      const mm = String(date.getMonth() + 1).padStart(2, '0');
                      const yy = String(date.getFullYear());
                      setEndDay(dd);
                      setEndMonth(mm);
                      setEndYear(yy);
                      setSelectedPeriod(null);
                      setShowEndCalendar(false);
                    }}
                    captionLayout="dropdown"
                    fromYear={2010}
                    toYear={2030}
                  />
                </div>
              )}
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

      <div className="export-footer sticky">
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
