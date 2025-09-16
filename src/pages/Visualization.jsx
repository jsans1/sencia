import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import fakeProfile from '../fakeProfile';
import MobileNav from '../components/MobileNav';
import TopLogo from '../components/TopLogo';
import '../App.css';

const formatDateRange = (data) => {
  if (!data.length) return '';
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

  return (
    <div className="viz-bg">
      <TopLogo />
      <div className="viz-gradient-ellipse" />
      <div className="viz-container">
        <div className="viz-filter-bar">
          {['Jour', 'Semaine', 'Mois', 'Trimestre', 'Année'].map((label) => (
            <button
              key={label}
              className={
                'viz-filter-btn' + (tab === label ? ' active' : '')
              }
              onClick={() => setTab(label)}
              style={{ flex: 1, minWidth: 0 }}
            >
              {label}
            </button>
          ))}
        </div>
        <h2 className="viz-title">Évolution de l'hypertension</h2>
        <div className="viz-date-range">{formatDateRange(data)}</div>
        <div className="viz-section viz-indicators">
          <div className="viz-indicator-title">Indicateurs généraux</div>
          <div className="viz-indicator-desc">Vos symptômes étaient moins douloureux ce {tab.toLowerCase()}, c'est une baisse de 34% en intensité comparé à la période précédente.</div>
        </div>
        <div className="viz-section">
          <div className="viz-section-title">Symptômes</div>
          <div className="viz-cards-row">
            <div className="viz-card">
              <div className="viz-card-label">Fatigue générale</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{fatigueLegere}</span>
                <span className="viz-card-sub">Sévérité légère</span>
              </div>
              <div className="viz-card-main viz-card-secondary">
                <span className="viz-card-num viz-card-num-modere">{fatigueModeree}</span>
                <span className="viz-card-sub">Modéré</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Gonflements mains et pieds</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{gonflementsAucun === data.length ? 'Aucun' : data.length - gonflementsAucun}</span>
                <span className="viz-card-sub">{gonflementsAucun === data.length ? '' : 'Jours concernés'}</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Palpitations</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{palpitationsAucune === data.length ? 'Aucunes' : data.length - palpitationsAucune}</span>
                <span className="viz-card-sub">{palpitationsAucune === data.length ? '' : 'Jours concernés'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="viz-section">
          <div className="viz-section-title">Traitement et adhérence</div>
          <div className="viz-cards-row">
            <div className="viz-card">
              <div className="viz-card-label">Adhérence au traitement</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{adherence}%</span>
                <span className="viz-card-sub">{adherence < 95 ? 'Moins suivi que d\'habitude' : 'Bonne adhérence'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="viz-section">
          <div className="viz-section-title">État mental</div>
          <div className="viz-cards-row">
            <div className="viz-card">
              <div className="viz-card-label">Stress</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{stressEvents}</span>
                <span className="viz-card-sub">Évènements</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Anxiété</div>
              <div className="viz-card-main">
                <span className="viz-card-num">0</span>
                <span className="viz-card-sub">Évènements</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Qualité du sommeil</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{qualiteSommeil}</span>
                <span className="viz-card-sub">{qualiteSommeil === 'Bonne' ? '▲' : ''}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="viz-section">
          <div className="viz-section-title">Comportements de santé</div>
          <div className="viz-cards-row">
            <div className="viz-card">
              <div className="viz-card-label">Activité physique</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{activitePhysique}</span>
                <span className="viz-card-sub">Workouts</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Consommation d'alcool</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{alcoolVerres}</span>
                <span className="viz-card-sub">Verres</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Hydratation</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{hydratationOk}/{data.length}</span>
                <span className="viz-card-sub">Consommation journalière</span>
              </div>
            </div>
            <div className="viz-card">
              <div className="viz-card-label">Consommation de sel</div>
              <div className="viz-card-main">
                <span className="viz-card-num">{selHauteConso}</span>
                <span className="viz-card-sub">Jours à risque</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav active="Explore" onNav={handleNav} onAdd={handleAdd} />
    </div>
  );
};

export default Visualization; 