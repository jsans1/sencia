import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import fakeProfile from '../fakeProfile';
import MobileNav from '../components/MobileNav';
import GradientBackground from '../components/mobile/GradientBackground';
import TopLogo from '../components/TopLogo';
import { getDataForPeriod, getAvailableDateRanges } from '../services/dataService';
import '../App.css';

const formatDateRange = (tab, data, dateRangeIndex = 0) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  if (!data || data.length === 0) {
    return 'Aucune donnée';
  }
  
  // Use actual data dates for accurate labeling
  const startDateStr = data[0].date;
  const endDateStr = data[data.length - 1].date;
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  
  switch(tab) {
    case 'Jour':
      return `${startDate.getDate()} ${months[startDate.getMonth()]}`;
    case 'Semaine':
      return `${startDate.getDate()} ${months[startDate.getMonth()]} — ${endDate.getDate()} ${months[endDate.getMonth()]}`;
    case 'Trimestre':
      return `${startDate.getDate()} ${months[startDate.getMonth()]} — ${endDate.getDate()} ${months[endDate.getMonth()]}`;
    case 'Année':
      return `${startDate.getFullYear()}`;
    default: // Mois
      return `${startDate.getDate()} ${months[startDate.getMonth()]} — ${endDate.getDate()} ${months[endDate.getMonth()]}`;
  }
};

const countBy = (arr, key, value) => arr.filter((d) => d[key] === value).length;
const sumBy = (arr, key) => arr.reduce((acc, d) => acc + (Number(d[key]) || 0), 0);
const percent = (num, denom) => denom === 0 ? 0 : Math.round((num / denom) * 100);

// Navigation bounds computation functions
const getNavigationBounds = (dataLength, tab) => {
  let minIndex, maxIndex = 0;
  
  switch(tab) {
    case 'Jour':
      minIndex = -(dataLength - 1);
      break;
    case 'Semaine':
      minIndex = dataLength >= 7 ? -(Math.ceil(dataLength / 7) - 1) : 0;
      break;
    case 'Mois':
      minIndex = dataLength >= 30 ? -(Math.ceil(dataLength / 30) - 1) : 0;
      break;
    case 'Trimestre':
      minIndex = dataLength >= 90 ? -(Math.ceil(dataLength / 90) - 1) : 0;
      break;
    case 'Année':
      minIndex = dataLength >= 365 ? -(Math.ceil(dataLength / 365) - 1) : 0;
      break;
    default:
      minIndex = 0;
  }
  
  return { minIndex, maxIndex };
};

// Clamp dateRangeIndex to valid bounds
const clampDateRangeIndex = (index, bounds) => {
  return Math.max(bounds.minIndex, Math.min(bounds.maxIndex, index));
};

// Data filtering functions
const getDayData = (data, dateRangeIndex = 0) => {
  if (data.length === 0) return [];
  // Move forward in time: positive dateRangeIndex = future dates
  const targetIndex = Math.min(data.length - 1, Math.max(0, data.length - 1 + dateRangeIndex));
  return [data[targetIndex]];
};

const getWeekData = (data, dateRangeIndex = 0) => {
  if (data.length === 0) return [];
  // Move forward in time: positive dateRangeIndex = future weeks
  const startIndex = Math.max(0, Math.min(data.length - 7, data.length - 7 + (dateRangeIndex * 7)));
  const endIndex = Math.min(data.length, startIndex + 7);
  return data.slice(startIndex, endIndex);
};

const getMonthData = (data, dateRangeIndex = 0) => {
  if (data.length === 0) return [];
  // For months, assume 30 days per month on average
  const daysPerMonth = 30;
  const startIndex = Math.max(0, Math.min(data.length - daysPerMonth, data.length - daysPerMonth + (dateRangeIndex * daysPerMonth)));
  const endIndex = Math.min(data.length, startIndex + daysPerMonth);
  return data.slice(startIndex, endIndex);
};

const getQuarterData = (data, dateRangeIndex = 0) => {
  if (data.length === 0) return [];
  // For quarters, assume 90 days per quarter
  const daysPerQuarter = 90;
  const startIndex = Math.max(0, Math.min(data.length - daysPerQuarter, data.length - daysPerQuarter + (dateRangeIndex * daysPerQuarter)));
  const endIndex = Math.min(data.length, startIndex + daysPerQuarter);
  return data.slice(startIndex, endIndex);
};

const getYearData = (data, dateRangeIndex = 0) => {
  if (data.length === 0) return [];
  // For years, assume 365 days per year
  const daysPerYear = 365;
  const startIndex = Math.max(0, Math.min(data.length - daysPerYear, data.length - daysPerYear + (dateRangeIndex * daysPerYear)));
  const endIndex = Math.min(data.length, startIndex + daysPerYear);
  return data.slice(startIndex, endIndex);
};

// Dynamic period description function
function getPeriodDescription(tab, adherence, dateRangeIndex) {
  const periodText = {
    'Jour': dateRangeIndex === 0 ? 'Aujourd\'hui' : dateRangeIndex > 0 ? 'Ce jour-là' : 'Ce jour-là',
    'Semaine': dateRangeIndex === 0 ? 'Cette semaine' : dateRangeIndex > 0 ? 'Cette semaine-là' : 'Cette semaine-là',
    'Mois': dateRangeIndex === 0 ? 'Ce mois-ci' : dateRangeIndex > 0 ? 'Ce mois-là' : 'Ce mois-là',
    'Trimestre': dateRangeIndex === 0 ? 'Ce trimestre' : dateRangeIndex > 0 ? 'Ce trimestre-là' : 'Ce trimestre-là',
    'Année': dateRangeIndex === 0 ? 'Cette année' : dateRangeIndex > 0 ? 'Cette année-là' : 'Cette année-là'
  };
  
  const period = periodText[tab] || 'Cette période';
  
  if (adherence >= 85) {
    return `${period} vous avez maintenu une excellente adhérence au traitement et ressenti moins de symptômes douloureux.`;
  } else if (adherence >= 70) {
    return `${period} votre adhérence au traitement était bonne et vos symptômes sont restés contrôlés.`;
  } else {
    return `${period} votre adhérence au traitement pourrait être améliorée pour un meilleur contrôle des symptômes.`;
  }
}

const Visualization = () => {
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext() || {};
  const [tab, setTab] = useState('Mois');
  const [dateRangeIndex, setDateRangeIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bounds, setBounds] = useState({ minIndex: 0, maxIndex: 0 });
  
  // User ID - in a real app, this would come from authentication
  const userId = "1e8e1b2c-1234-4a5b-8cde-123456789abc";
  
  // Load data when tab or dateRangeIndex changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const newData = await getDataForPeriod(tab, dateRangeIndex, userId);
        setData(newData);
        
        // Update bounds based on available data ranges
        const availableRanges = getAvailableDateRanges(tab, userId);
        setBounds({
          minIndex: availableRanges.min,
          maxIndex: availableRanges.max
        });
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to fake data
        setData(fakeProfile.monthData || []);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [tab, dateRangeIndex, userId]);
  
  // Clamp the date range index to valid bounds
  const clampedDateRangeIndex = clampDateRangeIndex(dateRangeIndex, bounds);

  // Calculate dynamic metrics based on filtered data
  const adherence = data.length > 0 ? percent(countBy(data, 'traitement_suivi', true), data.length) : 88;
  const stressEvents = countBy(data, 'stress_event', true);
  const qualiteSommeil = data.filter(d => d.sommeil === 'bon').length > data.length / 2 ? 'Bonne' : 'Moyenne';
  const sommeilHeures = data.length > 0 ? Math.round(sumBy(data, 'activite_physique') / data.length * 2.5 + 4.5) / 10 * 10 : 6.5;
  
  // Health score calculation based on filtered data metrics
  const baseHealthScore = Math.round(85 + (adherence - 80) * 0.5 - (stressEvents * 2));
  const healthScore = Math.min(100, Math.max(0, baseHealthScore));
  
  // Determine card state based on health score
  const getCardState = (score) => {
    if (score >= 75) return 'good';
    if (score >= 40) return 'warning';
    return 'danger';
  };
  
  const cardState = getCardState(healthScore);
  
  // Blood pressure simulation based on filtered data characteristics
  const avgActivityLevel = data.length > 0 ? sumBy(data, 'activite_physique') / data.length : 2;
  const stressImpact = stressEvents > 0 ? stressEvents * 3 : 0;
  const adherenceImpact = (adherence - 80) * -0.3;
  
  const baseSystolic = 134 + stressImpact + adherenceImpact - (avgActivityLevel * 2);
  const baseDiastolic = 110 + (stressImpact * 0.6) + (adherenceImpact * 0.5) - avgActivityLevel;
  const baseHeartRate = 119 + (stressImpact * 0.8) + (adherenceImpact * 0.4) - (avgActivityLevel * 1.5);
  
  const systolic = Math.round(baseSystolic + (tab === 'Jour' ? Math.random() * 10 - 5 : 0));
  const diastolic = Math.round(baseDiastolic + (tab === 'Jour' ? Math.random() * 5 - 2.5 : 0));
  const heartRate = Math.round(baseHeartRate + (tab === 'Jour' ? Math.random() * 8 - 4 : 0));
  
  // BP variability based on stress events and adherence
  const baseVariability = 47 + (stressEvents * 8) + (adherence < 80 ? 15 : 0) - (avgActivityLevel * 3);
  const bpVariability = Math.min(100, Math.max(0, Math.round(baseVariability)));

  // Reset dateRangeIndex when tab changes to prevent invalid bounds
  const handleTabChange = (newTab) => {
    setTab(newTab);
    setDateRangeIndex(0); // Reset to current period when switching tabs
  };
  
  // Nav handler
  const handleNav = (page) => {
    switch (page) {
      case 'Home':
        navigate('/app');
        break;
      case 'Explore':
        navigate('/app/visualization');
        break;
      case 'Add':
        if (handleAdd) handleAdd();
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

  const handlePrevDateRange = () => {
    const newIndex = Math.max(bounds.minIndex, dateRangeIndex - 1);
    setDateRangeIndex(newIndex);
  };

  const handleNextDateRange = () => {
    const newIndex = Math.min(bounds.maxIndex, dateRangeIndex + 1);
    setDateRangeIndex(newIndex);
  };

  // Check if next date range would be in the future
  const isNextDateInFuture = () => {
    const nextIndex = dateRangeIndex + 1;
    if (nextIndex > bounds.maxIndex) return true;
    
    // Simple check: if we're at index 0 (current period) and trying to go forward, it's future
    return dateRangeIndex >= 0;
  };

  return (
    <div className="new-viz-container">
      <GradientBackground />
      
      <TopLogo sticky={false} />

      {/* Time Period Filter Chips */}
      <div className="new-viz-filter-bar">
        {['Jour', 'Semaine', 'Mois', 'Trimestre', 'Année'].map((label) => (
          <button
            key={label}
            className={`new-viz-filter-chip ${tab === label ? 'active' : ''}`}
            onClick={() => handleTabChange(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Date Range Selector */}
      <div className="new-viz-date-selector">
        <button 
          className="new-viz-date-arrow" 
          onClick={handlePrevDateRange}
          disabled={clampedDateRangeIndex <= bounds.minIndex}
          style={{opacity: clampedDateRangeIndex <= bounds.minIndex ? 0.5 : 1}}
        >
          ‹
        </button>
        <div className="new-viz-date-range">
          {formatDateRange(tab, data, clampedDateRangeIndex)}
        </div>
        <button 
          className="new-viz-date-arrow" 
          onClick={handleNextDateRange}
          disabled={clampedDateRangeIndex >= bounds.maxIndex || isNextDateInFuture()}
          style={{opacity: (clampedDateRangeIndex >= bounds.maxIndex || isNextDateInFuture()) ? 0.5 : 1}}
        >
          ›
        </button>
      </div>

      {/* Main Content */}
      <div className="new-viz-content">
        {loading && (
          <div className="new-viz-loading">
            <div className="new-viz-loading-spinner"></div>
            <p>Chargement des données...</p>
          </div>
        )}
        
        {!loading && (
          <>
            {/* Main Health Score */}
            <div className={`new-viz-main-card new-viz-main-card--${cardState}`}>
              <h2 className="new-viz-main-title">Évolution de votre état général</h2>
              <div className="new-viz-score">
                <span className="new-viz-score-number">{healthScore}</span>
                <span className="new-viz-score-total">/100</span>
              </div>
              <p className="new-viz-description">
                {getPeriodDescription(tab, adherence, clampedDateRangeIndex)}
              </p>
            </div>

        {/* Health Metrics Row */}
        <div className="new-viz-metrics-row">
          <div className="new-viz-metric-card">
            <div className="new-viz-metric-label">Tension artérielle</div>
            <div className="new-viz-metric-value">{Math.round(systolic)}/{Math.round(diastolic)} mmHg</div>
            <div className="new-viz-metric-arrow">›</div>
          </div>
          <div className="new-viz-metric-card">
            <div className="new-viz-metric-label">Rythme cardiaque</div>
            <div className="new-viz-metric-value">{Math.round(heartRate)} bpm</div>
            <div className="new-viz-metric-arrow">›</div>
          </div>
        </div>

        {/* Data Summary Section */}
        <div className="new-viz-data-section">
          <h3 className="new-viz-section-title">Vos données</h3>
          <div className="new-viz-data-row">
            <div className="new-viz-data-item">
              <div className="new-viz-data-label">Adhérence</div>
              <div className="new-viz-progress-bar">
                <div className="new-viz-progress-fill" style={{width: `${adherence}%`}}></div>
              </div>
              <div className="new-viz-data-value">{adherence}%</div>
            </div>
            <div className="new-viz-data-item">
              <div className="new-viz-data-label">Sommeil</div>
              <div className="new-viz-progress-bar">
                <div className="new-viz-progress-fill" style={{width: `${(sommeilHeures / 8) * 100}%`}}></div>
              </div>
              <div className="new-viz-data-value">env. {sommeilHeures}h</div>
            </div>
          </div>
          
          {/* Status Indicators */}
          <div className="new-viz-status-row">
            <div className="new-viz-status-item">
              <div className="new-viz-status-label">ALERTES</div>
              <div className="new-viz-status-value good">
                <span className="new-viz-status-icon">✓</span>
                Aucune
              </div>
            </div>
            <div className="new-viz-status-item">
              <div className="new-viz-status-label">PROGRESSION</div>
              <div className="new-viz-status-value stable">Stable</div>
            </div>
          </div>
        </div>

        {/* Blood Pressure Variability */}
        <div className="new-viz-variability-section">
          <h3 className="new-viz-variability-title">Variabilité de la tension artérielle</h3>
          <p className="new-viz-variability-desc">
            Votre tension artérielle varie en fonction du contexte dans laquelle vous la mesurez.
          </p>
          <div className="new-viz-variability-chart">
            <div className="new-viz-variability-labels">
              <span>Normal</span>
              <span>Élevée</span>
            </div>
            <div className="new-viz-variability-bar">
              <div className="new-viz-variability-fill" style={{width: `${bpVariability}%`}}></div>
            </div>
            <div className="new-viz-variability-percentage">{Math.round(bpVariability)}%</div>
            <div className="new-viz-variability-details">
              <span className="normal-percent">{Math.round(100 - bpVariability)}%</span>
            </div>
          </div>
        </div>
          </>
        )}
      </div>

      <MobileNav active="Explore" onNav={handleNav} onAdd={handleAdd} />
    </div>
  );
};

export default Visualization; 