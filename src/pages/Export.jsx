import React, { useState, useRef, useEffect } from 'react';
import MobileNav from '../components/MobileNav';
import { useNavigate, useOutletContext } from 'react-router-dom';
import fakeProfile from '../fakeProfile';
import illuExport1 from '../assets/illu-export-1.png';
import illuExport2 from '../assets/illu-export-2.png';
import illuExport3 from '../assets/illu-export-3.png';
import illuExport4 from '../assets/illu-export-4.png';
import '../App.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Chart from 'chart.js/auto';

const DOCTORS = [
  'Médecin généraliste',
  'Cardiologue',
  'Autre',
];
const PERIODS = [
  { label: 'Dernier trimestre', value: 'trimestre' },
  { label: 'Année en cours', value: 'annee' },
  { label: 'Période personnalisée', value: 'custom' },
];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const defaultDemoReport = {
  id: 1,
  date: '2025-06-04',
  doctor: 'cardiologue',
  description: 'Rapport créé dans le cadre du rendez-vous avec votre cardiologue le 12/06/2025',
  url: 'data:application/pdf;base64,JVBERi0xLjQKJcfs...',
  color: '#b6f0c6',
  icon: '📄',
};

const Export = () => {
  const navigate = useNavigate();
  const { handleAdd } = useOutletContext() || {};
  const [reports, setReports] = useState([]);
  const [step, setStep] = useState(1);
  const [doctor, setDoctor] = useState('');
  const [period, setPeriod] = useState('');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const reportId = useRef(1);

  // Data filtering
  const allData = fakeProfile.monthData;
  let filteredData = allData;
  let periodLabel = '';
  if (period === 'trimestre') {
    filteredData = allData.slice(-90);
    periodLabel = 'Dernier trimestre';
  } else if (period === 'annee') {
    filteredData = allData.slice(-365);
    periodLabel = 'Année en cours';
  } else if (period === 'custom' && customStart && customEnd) {
    filteredData = allData.filter(d => d.date >= customStart && d.date <= customEnd);
    periodLabel = `Du ${formatDate(customStart)} au ${formatDate(customEnd)}`;
  }

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

  // PDF generation logic
  const generatePDF = async () => {
    setIsExporting(true);
    try {
      const doc = new jsPDF();
      // Header
      doc.setFontSize(18);
      doc.text('Rapport de santé - Sencia', 14, 18);
      doc.setFontSize(12);
      doc.text(`Patient : ${fakeProfile.name}, Âge : ${fakeProfile.age}`, 14, 28);
      doc.text(`Condition : ${fakeProfile.maladie}`, 14, 36);
      doc.text(`Période : ${periodLabel}`, 14, 44);
      doc.text(`Médecin : ${doctor}`, 14, 52);
      let y = 60;
      // Symptoms summary
      doc.setFontSize(14);
      doc.text('Résumé des symptômes', 14, y);
      y += 6;
      autoTable(doc, {
        startY: y,
        head: [['Date', 'Fatigue', 'Gonflements', 'Palpitations']],
        body: filteredData.map(d => [d.date, d.fatigue, d.gonflements, d.palpitations]),
        styles: { fontSize: 10 },
        margin: { left: 14, right: 14 },
      });
      y = doc.lastAutoTable.finalY + 8;
      // Treatment summary
      doc.setFontSize(14);
      doc.text('Traitement et adhérence', 14, y);
      y += 6;
      const adherence = Math.round(filteredData.filter(d => d.traitement_suivi).length / filteredData.length * 100);
      doc.setFontSize(12);
      doc.text(`Adhérence au traitement : ${adherence}%`, 14, y);
      y += 8;
      // Mental state
      doc.setFontSize(14);
      doc.text('État mental', 14, y);
      y += 6;
      const stressEvents = filteredData.filter(d => d.stress_event).length;
      doc.setFontSize(12);
      doc.text(`Évènements de stress : ${stressEvents}`, 14, y);
      y += 8;
      // Health behaviors
      doc.setFontSize(14);
      doc.text('Comportements de santé', 14, y);
      y += 6;
      const activitePhysique = filteredData.reduce((acc, d) => acc + (Number(d.activite_physique) || 0), 0);
      const alcoolVerres = filteredData.reduce((acc, d) => acc + (Number(d.alcool_verres) || 0), 0);
      const hydratationOk = filteredData.filter(d => d.hydratation_ok).length;
      const selHauteConso = filteredData.filter(d => d.sel_haute_conso).length;
      doc.setFontSize(12);
      doc.text(`Activité physique (total séances) : ${activitePhysique}`, 14, y);
      y += 6;
      doc.text(`Consommation d'alcool (verres) : ${alcoolVerres}`, 14, y);
      y += 6;
      doc.text(`Hydratation correcte : ${hydratationOk} jours`, 14, y);
      y += 6;
      doc.text(`Consommation de sel élevée : ${selHauteConso} jours`, 14, y);
      y += 10;
      let chartImg = null;
      try {
        // Chart (mood/fatigue over time)
        const chartCanvas = document.createElement('canvas');
        chartCanvas.width = 400;
        chartCanvas.height = 120;
        const ctx = chartCanvas.getContext('2d');
        const fatigueData = filteredData.map(d => d.fatigue === 'modéré' ? 2 : 1);
        const labels = filteredData.map(d => d.date.slice(5));
        let chart;
        await new Promise((resolve) => {
          chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels,
              datasets: [{
                label: 'Fatigue (1=léger, 2=modéré)',
                data: fatigueData,
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76,175,80,0.1)',
                fill: true,
                tension: 0.3,
              }],
            },
            options: {
              animation: {
                onComplete: () => {
                  resolve();
                }
              },
              plugins: { legend: { display: false } },
              scales: { y: { min: 1, max: 2, ticks: { stepSize: 1 } } },
            },
          });
        });
        chartImg = chartCanvas.toDataURL('image/png');
        chart.destroy();
      } catch (chartErr) {
        console.error('Erreur lors de la génération du graphique:', chartErr);
        chartImg = null;
      }
      if (chartImg) {
        doc.addPage();
        doc.setFontSize(14);
        doc.text('Évolution de la fatigue', 14, 20);
        doc.addImage(chartImg, 'PNG', 14, 28, 180, 54);
      } else {
        doc.addPage();
        doc.setFontSize(14);
        doc.text('Aucun graphique disponible', 14, 20);
      }
      // Save as blob URL
      const pdfBlob = doc.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      // Add to reports array
      const today = new Date();
      const dateStr = today.toISOString().slice(0, 10);
      const desc = `Rapport créé dans le cadre du rendez-vous avec votre ${doctor || 'médecin'} le ${periodLabel || dateStr}`;
      setReports(prev => [
        {
          id: reportId.current++,
          date: dateStr,
          doctor,
          description: desc,
          url,
          color: '#b6f0c6',
          icon: '📄',
        },
        ...prev
      ]);
      setPdfUrl(url);
      setIsExporting(false);
      return true;
    } catch (e) {
      setIsExporting(false);
      alert("Erreur lors de la génération du PDF : " + e.message);
      console.error(e);
      return false;
    }
  };

  // On first load, generate a styled demo PDF synchronously (no async chart, but with all other branding)
  useEffect(() => {
    if (reports.length === 0) {
      // Generate a styled demo PDF synchronously (no async chart, but with all other branding)
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const green = '#b6f0c6';
      const purple = '#bcb8f8';
      // Header
      doc.setFillColor(green);
      doc.rect(0, 0, 595, 70, 'F');
      doc.setFontSize(24);
      doc.setTextColor('#222');
      doc.text('Rapport de santé Sencia', 32, 48);
      doc.setFontSize(12);
      doc.setTextColor('#444');
      doc.text('Patient : Loris   Âge : 49   Condition : Hypertension', 32, 68);
      // Stat blocks
      const stats = [
        { label: 'Adhérence', value: '85%', color: green },
        { label: 'Évènements de stress', value: '4', color: purple },
        { label: 'Activité physique', value: '30', color: green },
        { label: 'Hydratation correcte', value: '20j', color: purple },
      ];
      let statX = 32;
      let statY = 90;
      stats.forEach((s, i) => {
        doc.setFillColor(s.color);
        doc.roundedRect(statX, statY, 120, 60, 10, 10, 'F');
        doc.setFontSize(28);
        doc.setTextColor('#222');
        doc.text(s.value, statX + 60, statY + 38, { align: 'center' });
        doc.setFontSize(12);
        doc.setTextColor('#444');
        doc.text(s.label, statX + 60, statY + 54, { align: 'center' });
        statX += 135;
      });
      // Visual summary placeholder (draw a simple bar chart for 'aperçu graphique')
      let chartY = 170;
      doc.setFontSize(16);
      doc.setTextColor('#222');
      doc.text('Résumé visuel', 32, chartY);
      doc.setFontSize(12);
      doc.setTextColor('#888');
      doc.text("Aperçu graphique (démonstration)", 32, chartY + 24);
      // Draw a simple bar chart (fake data)
      const barBaseY = chartY + 50;
      const barX = 60;
      const barWidth = 30;
      const barGap = 40;
      const barHeights = [60, 100, 40, 80]; // fake values
      const barColors = ['#b6f0c6', '#bcb8f8', '#b6f0c6', '#bcb8f8'];
      barHeights.forEach((h, i) => {
        doc.setFillColor(barColors[i]);
        doc.rect(barX + i * barGap, barBaseY - h, barWidth, h, 'F');
      });
      doc.setTextColor('#444');
      doc.setFontSize(10);
      ['Fatigue', 'Stress', 'Activité', 'Hydratation'].forEach((label, i) => {
        doc.text(label, barX + i * barGap + barWidth / 2, barBaseY + 14, { align: 'center' });
      });
      // Section: Résumé des symptômes
      let y = barBaseY + 40;
      doc.setFontSize(16);
      doc.setTextColor('#222');
      doc.text('Résumé des symptômes', 32, y);
      y += 18;
      doc.setFontSize(11);
      doc.setTextColor('#444');
      doc.text('Fatigue : modéré/léger', 32, y); y += 18;
      doc.text('Gonflements : aucun/léger', 32, y); y += 18;
      doc.text('Palpitations : aucune/légère', 32, y); y += 24;
      doc.setFontSize(16);
      doc.setTextColor('#222');
      doc.text('Traitement et adhérence', 32, y); y += 18;
      doc.setFontSize(11);
      doc.setTextColor('#444');
      doc.text('Adhérence au traitement : 85%', 32, y); y += 24;
      doc.setFontSize(16);
      doc.setTextColor('#222');
      doc.text('État mental', 32, y); y += 18;
      doc.setFontSize(11);
      doc.setTextColor('#444');
      doc.text('Évènements de stress : 4', 32, y); y += 24;
      doc.setFontSize(16);
      doc.setTextColor('#222');
      doc.text('Comportements de santé', 32, y); y += 18;
      doc.setFontSize(11);
      doc.setTextColor('#444');
      doc.text('Activité physique (total séances) : 30', 32, y); y += 18;
      doc.text("Consommation d'alcool (verres) : 10", 32, y); y += 18;
      doc.text('Hydratation correcte : 20 jours', 32, y); y += 18;
      doc.text('Consommation de sel élevée : 5 jours', 32, y);
      const pdfBlob = doc.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      setReports([
        {
          id: 1,
          date: '2025-06-04',
          doctor: 'cardiologue',
          description: 'Rapport créé dans le cadre du rendez-vous avec votre cardiologue le 12/06/2025',
          url,
          color: green,
          icon: '📄',
        },
      ]);
    }
    // eslint-disable-next-line
  }, []);

  // Step 1: Dashboard
  if (step === 1) {
    const latest = reports[0];
    const previous = reports.slice(1);
    return (
      <div className="export-bg">
        <div className="viz-container" style={{paddingTop: 32, paddingBottom: 32}}>
          <h2 className="viz-title" style={{marginBottom: 24}}>Votre dernier rapport</h2>
          {latest ? (
            <div style={{background: '#fff', borderRadius: 20, boxShadow: '0 2px 12px #0001', padding: 20, marginBottom: 32}}>
              <div style={{fontWeight: 600, fontSize: 18, marginBottom: 6}}>Rapport du {latest.date.split('-').reverse().join('/')}</div>
              <div style={{color: '#444', fontSize: 15, marginBottom: 18}}>{latest.description}</div>
              <div style={{display: 'flex', gap: 12}}>
                <button className="logging-modal-btn" style={{flex: 1, margin: 0}} onClick={() => window.open(latest.url, '_blank')}>Voir</button>
                <a className="logging-modal-btn logging-modal-btn-secondary" style={{flex: 1, margin: 0, textAlign: 'center', textDecoration: 'none', lineHeight: '44px'}} href={latest.url} download> Télécharger</a>
              </div>
            </div>
          ) : (
            <div style={{color: '#888', marginBottom: 32}}>Aucun rapport généré pour le moment.</div>
          )}
          <h3 style={{fontWeight: 700, fontSize: 18, marginBottom: 18}}>Rapports précédents</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32}}>
            {previous.length === 0 && <div style={{color: '#aaa'}}>Aucun rapport précédent.</div>}
            {previous.map((r, i) => (
              <div key={r.id} style={{background: '#fff', borderRadius: 16, boxShadow: '0 1px 6px #0001', padding: 16, display: 'flex', alignItems: 'center', gap: 16}}>
                <div style={{width: 40, height: 40, borderRadius: 12, background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22}}>{r.icon || '📄'}</div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, fontSize: 16}}>Rapport {r.id}</div>
                  <div style={{color: '#666', fontSize: 14}}>{r.description}</div>
                </div>
                <button className="logging-modal-btn" style={{margin: 0, fontSize: 15, padding: '8px 14px'}} onClick={() => window.open(r.url, '_blank')}>Voir</button>
              </div>
            ))}
          </div>
          <button className="logging-modal-btn" style={{width: '100%', fontWeight: 700, fontSize: 18}} onClick={() => setStep(2)}>Créer un rapport</button>
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  // Step 2: Doctor selection
  if (step === 2) {
    return (
      <div className="export-bg">
        <div className="viz-container" style={{paddingTop: 32}}>
          <h2 className="viz-title">Quel médecin allez-vous voir à votre prochain rendez-vous ?</h2>
          <p className="viz-date-range">Choisissez un spécialiste</p>
          <div style={{margin: '32px 0'}}>
            <img src={illuExport1} alt="Médecin" style={{width: 180, display: 'block', margin: '0 auto 32px'}} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            {DOCTORS.map(d => (
              <button key={d} className="logging-modal-btn" style={{margin: 0}} onClick={() => { setDoctor(d); setStep(3); }}>{d}</button>
            ))}
          </div>
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  // Step 3: Period selection
  if (step === 3) {
    return (
      <div className="export-bg">
        <div className="viz-container" style={{paddingTop: 32}}>
          <h2 className="viz-title">Exportez vos données pour votre prochain rendez-vous médical</h2>
          <p className="viz-date-range">Indiquez la période à résumer dans votre document ci-dessous</p>
          <div style={{margin: '32px 0'}}>
            <img src={illuExport2} alt="Période" style={{width: 180, display: 'block', margin: '0 auto 32px'}} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            {PERIODS.map(p => (
              <button key={p.value} className="logging-modal-btn" style={{margin: 0}} onClick={() => { setPeriod(p.value); setStep(p.value === 'custom' ? 4 : 5); }}>{p.label}</button>
            ))}
          </div>
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  // Step 4: Custom period
  if (step === 4) {
    return (
      <div className="export-bg">
        <div className="viz-container" style={{paddingTop: 32}}>
          <h2 className="viz-title">Exportez vos données pour votre prochain rendez-vous médical</h2>
          <p className="viz-date-range">Indiquez la période à résumer dans votre document ci-dessous</p>
          <div style={{margin: '32px 0'}}>
            <img src={illuExport2} alt="Période" style={{width: 180, display: 'block', margin: '0 auto 32px'}} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <label style={{fontWeight: 500, marginBottom: 8}}>Du :</label>
            <input type="date" value={customStart} onChange={e => setCustomStart(e.target.value)} className="symptoms-input" style={{marginBottom: 16}} />
            <label style={{fontWeight: 500, marginBottom: 8}}>Au :</label>
            <input type="date" value={customEnd} onChange={e => setCustomEnd(e.target.value)} className="symptoms-input" style={{marginBottom: 24}} />
            <button className="logging-modal-btn" style={{margin: 0}} onClick={() => setStep(5)} disabled={!customStart || !customEnd}>Confirmer</button>
          </div>
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  // Step 5: Summary and export
  if (step === 5) {
    // List of symptoms/metrics to export (example)
    const summaryFields = [
      'Maux de tête', 'Vertiges', 'Douleurs', 'Fatigue', 'Toux', 'Bilans sanguins', 'Echographies'
    ];
    return (
      <div className="export-bg">
        <div className="viz-container" style={{paddingTop: 32}}>
          <h2 className="viz-title">Pour votre rendez-vous, nous allons résumer et exporter les données suivantes :</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, margin: '24px 0'}}>
            {summaryFields.map(f => (
              <div key={f} className="symptom-btn selected" style={{minWidth: 120, textAlign: 'center'}}>{f}</div>
            ))}
          </div>
          <div style={{margin: '32px 0'}}>
            <img src={illuExport3} alt="Résumé" style={{width: 180, display: 'block', margin: '0 auto 32px'}} />
          </div>
          <button className="logging-modal-btn" style={{margin: 0, width: '100%', fontWeight: 700, fontSize: 18}} onClick={async () => { const ok = await generatePDF(); if (ok) setStep(6); }} disabled={isExporting}>Démarrer l'export</button>
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  // Step 6: Confirmation and PDF link
  if (step === 6) {
    return (
      <div className="export-bg">
        <div className="viz-container" style={{paddingTop: 32}}>
          <h2 className="viz-title">Votre rapport personnalisé a bien été créé</h2>
          <div style={{margin: '32px 0'}}>
            <img src={illuExport4} alt="PDF créé" style={{width: 180, display: 'block', margin: '0 auto 32px'}} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <button className="logging-modal-btn" style={{margin: 0}} onClick={() => window.open(pdfUrl, '_blank')} disabled={!pdfUrl}>Voir le rapport</button>
            <button className="logging-modal-btn logging-modal-btn-secondary" style={{margin: 0}} onClick={() => { setStep(1); }}>Retour à l'accueil</button>
          </div>
        </div>
        <MobileNav active="Care" onNav={handleNav} onAdd={handleAdd} />
      </div>
    );
  }

  if (isExporting) {
    return (
      <div className="export-bg" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
          <div className="spinner" style={{width: 48, height: 48, border: '6px solid #e5e7eb', borderTop: '6px solid #b6f0c6', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></div>
          <div style={{fontSize: 18, fontWeight: 500, color: '#222'}}>Génération du rapport en cours...</div>
        </div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`}</style>
      </div>
    );
  }

  return null;
};

export default Export; 