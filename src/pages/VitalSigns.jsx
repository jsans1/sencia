import React from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '../components/mobile/GradientBackground';
import MobileFrame from '../components/mobile/MobileFrame';
import TopLogo from '../components/TopLogo';
import MobileNav from '../components/MobileNav';

const VitalSigns = ({ handleAdd }) => {
  const navigate = useNavigate();

  // Navigation handler for bottom nav
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

  const handleBackToHome = () => {
    navigate('/app');
  };

  // Latest Measurements Card Component
  function LatestMeasurementsCard() {
    return (
      <div className="vital-signs-card">
        <div className="vital-signs-card-title">Dernières mesures</div>
        <div className="latest-measurements-content">
          <div className="measurement-section">
            <div className="measurement-value">
              <span className="systolic">130</span>
              <span className="diastolic">/79</span>
            </div>
            <div className="measurement-label">Pression artérielle</div>
            <div className="measurement-status">
              <div className="status-indicator status-good"></div>
              <span className="status-text">Normal</span>
            </div>
          </div>
          <div className="measurement-section">
            <div className="measurement-value">
              <span className="heart-rate">72</span>
              <span className="unit">bpm</span>
            </div>
            <div className="measurement-label">Fréquence cardiaque</div>
            <div className="measurement-status">
              <div className="status-indicator status-good"></div>
              <span className="status-text">Optimal</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blood Pressure Chart Card Component
  function BloodPressureChartCard() {
    return (
      <div className="vital-signs-card">
        <div className="vital-signs-card-title">Pression artérielle (7 jours)</div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-line legend-systolic"></div>
            <span className="legend-text">Systolique</span>
          </div>
          <div className="legend-item">
            <div className="legend-line legend-diastolic"></div>
            <span className="legend-text">Diastolique</span>
          </div>
        </div>
        <div className="blood-pressure-chart">
          <div className="chart-y-axis">
            <div className="y-label">160</div>
            <div className="y-label">140</div>
            <div className="y-label">120</div>
            <div className="y-label">100</div>
            <div className="y-label">80</div>
            <div className="y-label">60</div>
          </div>
          <div className="chart-content">
            <div className="chart-grid">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
            </div>
            <div className="chart-lines">
              {/* Systolic line (red) */}
              <svg className="chart-svg" viewBox="0 0 300 120">
                <path
                  d="M20,45 L60,25 L100,35 L140,20 L180,30 L220,25 L260,35"
                  stroke="#EF4444"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="45" r="3" fill="#EF4444" />
                <circle cx="60" cy="25" r="3" fill="#EF4444" />
                <circle cx="100" cy="35" r="3" fill="#EF4444" />
                <circle cx="140" cy="20" r="3" fill="#EF4444" />
                <circle cx="180" cy="30" r="3" fill="#EF4444" />
                <circle cx="220" cy="25" r="3" fill="#EF4444" />
                <circle cx="260" cy="35" r="3" fill="#EF4444" />
              </svg>
              {/* Diastolic line (blue) */}
              <svg className="chart-svg" viewBox="0 0 300 120">
                <path
                  d="M20,85 L60,80 L100,75 L140,85 L180,80 L220,75 L260,80"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="85" r="3" fill="#3B82F6" />
                <circle cx="60" cy="80" r="3" fill="#3B82F6" />
                <circle cx="100" cy="75" r="3" fill="#3B82F6" />
                <circle cx="140" cy="85" r="3" fill="#3B82F6" />
                <circle cx="180" cy="80" r="3" fill="#3B82F6" />
                <circle cx="220" cy="75" r="3" fill="#3B82F6" />
                <circle cx="260" cy="80" r="3" fill="#3B82F6" />
              </svg>
            </div>
            <div className="chart-x-axis">
              <div className="x-label">Lun 13</div>
              <div className="x-label">Mar 14</div>
              <div className="x-label">Mer 15</div>
              <div className="x-label">Jeu 16</div>
              <div className="x-label">Ven 17</div>
              <div className="x-label">Sam 18</div>
              <div className="x-label">Dim 19</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Heart Rate Chart Card Component
  function HeartRateChartCard() {
    return (
      <div className="vital-signs-card">
        <div className="vital-signs-card-title">Fréquence cardiaque (aujourd'hui)</div>
        <div className="heart-rate-chart">
          <div className="chart-y-axis">
            <div className="y-label">100</div>
            <div className="y-label">80</div>
            <div className="y-label">60</div>
            <div className="y-label">40</div>
          </div>
          <div className="chart-content">
            <div className="chart-grid">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
            </div>
            <div className="chart-lines">
              <svg className="chart-svg" viewBox="0 0 300 120">
                <path
                  d="M20,80 L60,75 L100,65 L140,70 L180,75 L220,80"
                  stroke="#EF4444"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="80" r="3" fill="#EF4444" />
                <circle cx="60" cy="75" r="3" fill="#EF4444" />
                <circle cx="100" cy="65" r="3" fill="#EF4444" />
                <circle cx="140" cy="70" r="3" fill="#EF4444" />
                <circle cx="180" cy="75" r="3" fill="#EF4444" />
                <circle cx="220" cy="80" r="3" fill="#EF4444" />
              </svg>
            </div>
            <div className="chart-x-axis">
              <div className="x-label">6:00</div>
              <div className="x-label">9:00</div>
              <div className="x-label">12:00</div>
              <div className="x-label">15:00</div>
              <div className="x-label">18:00</div>
              <div className="x-label">21:00</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Trend Analysis Card Component
  function TrendAnalysisCard() {
    return (
      <div className="vital-signs-card">
        <div className="trend-analysis-header">
          <div className="trend-analysis-icon">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <path
                d="M1 6L4.5 2.5L7.5 5.5L11 2"
                stroke="#0E7AFE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="trend-analysis-title">Analyse des tendances</div>
        </div>
        
        <div className="trend-insights">
          <div className="trend-insight">
            <div className="insight-indicator insight-good"></div>
            <div className="insight-content">
              <div className="insight-title">Amélioration notable</div>
              <div className="insight-description">
                Votre pression artérielle s'est stabilisée cette semaine. Continuez vos efforts !
              </div>
            </div>
          </div>
          
          <div className="trend-insight">
            <div className="insight-indicator insight-warning"></div>
            <div className="insight-content">
              <div className="insight-title">Zone de vigilance</div>
              <div className="insight-description">
                Pics de tension en début de semaine. Pensez à vos exercices de relaxation.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Weekly Summary Card Component
  function WeeklySummaryCard() {
    return (
      <div className="vital-signs-card">
        <div className="vital-signs-card-title">Résumé de la semaine</div>
        <div className="weekly-summary-grid">
          <div className="summary-metric">
            <div className="metric-value">132/81</div>
            <div className="metric-label">Moyenne TA</div>
          </div>
          <div className="summary-metric">
            <div className="metric-value">74 bpm</div>
            <div className="metric-label">FC moyenne</div>
          </div>
          <div className="summary-metric">
            <div className="metric-value">5/7</div>
            <div className="metric-label">Jours dans la cible</div>
          </div>
          <div className="summary-metric">
            <div className="metric-value evolution-positive">
              <span className="evolution-arrow">↓</span>
              <span>8 mmHg</span>
            </div>
            <div className="metric-label">Évolution</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <GradientBackground />
      <MobileFrame showStatusBar={false}>
        <TopLogo />
        
        {/* Header with Back Arrow */}
        <div className="vital-signs-header">
          <button className="back-button" onClick={handleBackToHome}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 18l-6-6 6-6"
              />
            </svg>
          </button>
          <div className="vital-signs-title-section">
            <h1 className="vital-signs-title">Vos constantes vitales</h1>
            <p className="vital-signs-subtitle">Suivi détaillé de votre santé cardiovasculaire</p>
          </div>
        </div>

        {/* Content */}
        <div className="vital-signs-content">
          <LatestMeasurementsCard />
          <BloodPressureChartCard />
          <HeartRateChartCard />
          <TrendAnalysisCard />
          <WeeklySummaryCard />
        </div>

        {/* Bottom Navigation */}
        <div className="mobile-nav-wrapper">
          <MobileNav
            active="Home"
            onNav={handleNav}
            onAdd={handleAdd}
          />
        </div>
      </MobileFrame>
    </>
  );
};

export default VitalSigns;
