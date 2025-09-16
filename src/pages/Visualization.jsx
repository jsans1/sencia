import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import fakeProfile from '../fakeProfile';
import MobileNav from '../components/MobileNav';
import TopLogo from '../components/TopLogo';
import GradientBackground from '../components/mobile/GradientBackground';
import '../App.css';

const formatDateRange = (data) => {
  if (!data.length) return '20 Janvier — 20 Février';
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  const start = new Date(data[0].date);
  const end = new Date(data[data.length - 1].date);
  return `${start.getDate()} ${months[start.getMonth()]} — ${end.getDate()} ${months[end.getMonth()]}`;
};

const countBy = (arr, key, value) => arr.filter((d) => d[key] === value).length;
const sumBy = (arr, key) => arr.reduce((acc, d) => acc + (Number(d[key]) || 0), 0);
const percent = (num, denom) => denom === 0 ? 0 : Math.round((num / denom) * 100);

// Simulated data for tabs
const getDayData = (data) => [data[data.length - 1]];
const getWeekData = (data) => data.slice(-7);
const getMonthData = (data) => data;

const Visualization = () => {
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext() || {};
  const [tab, setTab] = useState('Mois');
  const [dateRangeIndex, setDateRangeIndex] = useState(0);
  const allData = fakeProfile.monthData || [];
  let data = allData;
  if (tab === 'Jour') data = getDayData(allData);
  if (tab === 'Semaine') data = getWeekData(allData);
  if (tab === 'Mois') data = getMonthData(allData);

  // Symptoms
  const fatigueLegere = countBy(data, 'fatigue', 'léger');
  const fatigueModeree = countBy(data, 'fatigue', 'modéré');
  const gonflementsAucun = countBy(data, 'gonflements', 'aucun');
  const palpitationsAucune = countBy(data, 'palpitations', 'aucune');

  // Treatment adherence
  const adherence = percent(countBy(data, 'traitement_suivi', true), data.length);

  // Mental state
  const stressEvents = countBy(data, 'stress_event', true);
  const qualiteSommeil = data.filter(d => d.sommeil === 'bon').length > data.length / 2 ? 'Bonne' : 'Moyenne';

  // Health behaviors
  const activitePhysique = sumBy(data, 'activite_physique');
  const alcoolVerres = sumBy(data, 'alcool_verres');
  const hydratationOk = countBy(data, 'hydratation_ok', true);
  const selHauteConso = countBy(data, 'sel_haute_conso', true);

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
          {formatDateRange(data)}
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
            <span className="new-viz-score-number">87</span>
            <span className="new-viz-score-total">/100</span>
          </div>
          <p className="new-viz-description">
            Ce mois-ci vous avez ressenti moins de symptômes douloureux et votre adhérence au traitement a augmenté de 13%.
          </p>
        </div>

        {/* Health Metrics Row */}
        <div className="new-viz-metrics-row">
          <div className="new-viz-metric-card">
            <div className="new-viz-metric-label">Tension artérielle</div>
            <div className="new-viz-metric-value">134/110 mmHg</div>
            <div className="new-viz-metric-arrow">›</div>
          </div>
          <div className="new-viz-metric-card">
            <div className="new-viz-metric-label">Rythme cardiaque</div>
            <div className="new-viz-metric-value">119 bpm</div>
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
                <div className="new-viz-progress-fill" style={{width: '88%'}}></div>
              </div>
              <div className="new-viz-data-value">88%</div>
            </div>
            <div className="new-viz-data-item">
              <div className="new-viz-data-label">Sommeil</div>
              <div className="new-viz-progress-bar">
                <div className="new-viz-progress-fill" style={{width: '75%'}}></div>
              </div>
              <div className="new-viz-data-value">env. 6h33</div>
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
              <span>High</span>
            </div>
            <div className="new-viz-variability-bar">
              <div className="new-viz-variability-fill" style={{width: '47%'}}></div>
            </div>
            <div className="new-viz-variability-percentage">47%</div>
            <div className="new-viz-variability-details">
              <span className="normal-percent">36%</span>
            </div>
          </div>
        </div>
      </div>

      <MobileNav active="Explore" onNav={handleNav} onAdd={handleAdd} />
    </div>
  );
};

export default Visualization; 