import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import fakeProfile from '../fakeProfile';
import MobileNav from '../components/MobileNav';
import GradientBackground from '../components/mobile/GradientBackground';
import '../App.css';

const formatDateRange = (tab, dateRangeIndex = 0) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  const baseDate = new Date(2024, 0, 20); // January 20, 2024
  const startDate = new Date(baseDate);
  const endDate = new Date(baseDate);
  
  // Adjust date range based on period and index
  switch(tab) {
    case 'Jour':
      startDate.setDate(baseDate.getDate() + dateRangeIndex);
      return `${startDate.getDate()} ${months[startDate.getMonth()]}`;
    case 'Semaine':
      startDate.setDate(baseDate.getDate() + (dateRangeIndex * 7));
      endDate.setDate(baseDate.getDate() + (dateRangeIndex * 7) + 6);
      return `${startDate.getDate()} ${months[startDate.getMonth()]} — ${endDate.getDate()} ${months[endDate.getMonth()]}`;  
    case 'Trimestre':
      startDate.setMonth(baseDate.getMonth() + (dateRangeIndex * 3));
      endDate.setMonth(startDate.getMonth() + 2);
      endDate.setDate(new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate());
      return `${startDate.getDate()} ${months[startDate.getMonth()]} — ${endDate.getDate()} ${months[endDate.getMonth()]}`;
    case 'Année':
      startDate.setFullYear(baseDate.getFullYear() + dateRangeIndex);
      return `${startDate.getFullYear()}`;
    default: // Mois
      startDate.setMonth(baseDate.getMonth() + dateRangeIndex);
      endDate.setMonth(startDate.getMonth());
      endDate.setDate(new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate());
      return `${startDate.getDate()} ${months[startDate.getMonth()]} — ${endDate.getDate()} ${months[endDate.getMonth()]}`;
  }
};

const countBy = (arr, key, value) => arr.filter((d) => d[key] === value).length;
const sumBy = (arr, key) => arr.reduce((acc, d) => acc + (Number(d[key]) || 0), 0);
const percent = (num, denom) => denom === 0 ? 0 : Math.round((num / denom) * 100);

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
  const allData = fakeProfile.monthData || [];
  
  // Get filtered data based on current tab and date range
  let data = allData;
  switch(tab) {
    case 'Jour':
      data = getDayData(allData, dateRangeIndex);
      break;
    case 'Semaine':
      data = getWeekData(allData, dateRangeIndex);
      break;
    case 'Mois':
      data = getMonthData(allData, dateRangeIndex);
      break;
    case 'Trimestre':
      data = getQuarterData(allData, dateRangeIndex);
      break;
    case 'Année':
      data = getYearData(allData, dateRangeIndex);
      break;
    default:
      data = allData;
  }

  // Calculate dynamic metrics based on filtered data
  const adherence = data.length > 0 ? percent(countBy(data, 'traitement_suivi', true), data.length) : 88;
  const stressEvents = countBy(data, 'stress_event', true);
  const qualiteSommeil = data.filter(d => d.sommeil === 'bon').length > data.length / 2 ? 'Bonne' : 'Moyenne';
  const sommeilHeures = data.length > 0 ? Math.round(sumBy(data, 'sommeil_heures') / data.length * 10) / 10 : 6.5;
  
  // Health score calculation (simplified)
  const healthScore = Math.min(100, Math.max(0, 
    Math.round(85 + (adherence - 80) * 0.5 + (dateRangeIndex * -2))
  ));
  
  // Blood pressure simulation
  const systolic = 134 + (dateRangeIndex * 2) + (tab === 'Jour' ? Math.random() * 10 - 5 : 0);
  const diastolic = 110 + (dateRangeIndex * 1) + (tab === 'Jour' ? Math.random() * 5 - 2.5 : 0);
  const heartRate = 119 + (dateRangeIndex * 1) + (tab === 'Jour' ? Math.random() * 8 - 4 : 0);
  
  // BP variability percentage
  const bpVariability = Math.min(100, Math.max(0, 47 + (dateRangeIndex * 3)));

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
    setDateRangeIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextDateRange = () => {
    setDateRangeIndex(prev => prev + 1);
  };

  return (
    <div className="new-viz-container">
      <GradientBackground />
      
      {/* Header with Logo */}
      <div className="new-viz-header">
        <div className="new-viz-logo">sencia</div>
      </div>

      {/* Time Period Filter Chips */}
      <div className="new-viz-filter-bar">
        {['Jour', 'Semaine', 'Mois', 'Trimestre', 'Année'].map((label) => (
          <button
            key={label}
            className={`new-viz-filter-chip ${tab === label ? 'active' : ''}`}
            onClick={() => setTab(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Date Range Selector */}
      <div className="new-viz-date-selector">
        <button className="new-viz-date-arrow" onClick={handlePrevDateRange}>
          ‹
        </button>
        <div className="new-viz-date-range">
          {formatDateRange(tab, dateRangeIndex)}
        </div>
        <button className="new-viz-date-arrow" onClick={handleNextDateRange}>
          ›
        </button>
      </div>

      {/* Main Content */}
      <div className="new-viz-content">
        {/* Main Health Score */}
        <div className="new-viz-main-card">
          <h2 className="new-viz-main-title">Évolution de votre état général</h2>
          <div className="new-viz-score">
            <span className="new-viz-score-number">{healthScore}</span>
            <span className="new-viz-score-total">/100</span>
          </div>
          <p className="new-viz-description">
            {getPeriodDescription(tab, adherence, dateRangeIndex)}
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
      </div>

      <MobileNav active="Explore" onNav={handleNav} onAdd={handleAdd} />
    </div>
  );
};

export default Visualization; 