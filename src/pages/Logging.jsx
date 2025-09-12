import React, { useState } from 'react';
import '../App.css';
import illuLogging from '../assets/illu-logging.png';

const MOOD_GRADIENTS = [
  'radial-gradient(ellipse at center, #b6f0c6 0%, #e8f5e9 60%, #fff 100%)', // very good
  'radial-gradient(ellipse at center, #eaf7c6 0%, #f7f5e9 60%, #fff 100%)', // neutral
  'radial-gradient(ellipse at center, #f7d6c6 0%, #f7f5e9 60%, #fff 100%)', // bad
  'radial-gradient(ellipse at center, #f7b6b6 0%, #f7e9e9 60%, #fff 100%)', // very bad
];

const SYMPTOMS = [
  'Maux de tête inhabituels',
  'Vertiges',
  'Palpitations',
  "Bourdonnements d'oreilles",
  'Tension dans la nuque ou poitrine',
  'Aucun de ces symptômes',
];

const TREATMENTS = [
  'Acébutolol Zydus',
  'Indapamide',
  'Ramipril',
  'Valsartan',
  'Valsartan',
  'Furosémide',
];

const FOODS = [
  'Aliments salés (charcuterie, plats préparés...)',
  'Alcool',
  'Café ou boissons énergisantes',
  'Aucun de ces éléments',
];

const PHYSICAL_ACTIVITY = [
  { label: 'Oui, + de 30 mins', value: 'plus_30' },
  { label: 'Oui, - de 30 mins', value: 'moins_30' },
  { label: 'Non', value: 'non' },
];

function getMoodGradient(value) {
  // value: 0 (top, good) to 1 (bottom, bad)
  if (value < 0.33) return MOOD_GRADIENTS[0];
  if (value < 0.66) return MOOD_GRADIENTS[1];
  if (value < 0.85) return MOOD_GRADIENTS[2];
  return MOOD_GRADIENTS[3];
}

export const LoggingModal = ({ open, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState(0); // 0 (good) to 1 (bad)
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptoms, setCustomSymptoms] = useState('');
  const [tension, setTension] = useState(null); // null, 'oui', 'non'
  const [tensionValue, setTensionValue] = useState('');
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [customTreatments, setCustomTreatments] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [customFoods, setCustomFoods] = useState('');
  const [physicalActivity, setPhysicalActivity] = useState(null); // 'plus_30', 'moins_30', 'non'
  const [stress, setStress] = useState(0.5); // 0 (aucun stress) to 1 (stress extrême)

  const handleSlider = (e) => setMood(1 - Number(e.target.value));
  const handleSymptomClick = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };
  const handleCustomSymptoms = (e) => setCustomSymptoms(e.target.value);

  const handleContinue = () => setStep(s => Math.min(s + 1, 8));
  const handlePhysicalActivity = (value) => setPhysicalActivity(value);
  const handleStressSlider = (e) => setStress(1 - Number(e.target.value));
  const handleValidate = () => {
    if (onSubmit) onSubmit({
      mood,
      symptoms: selectedSymptoms,
      customSymptoms,
      tension,
      tensionValue,
      treatments: selectedTreatments,
      customTreatments,
      foods: selectedFoods,
      customFoods,
      physicalActivity,
      stress,
    });
    if (onClose) onClose();
    setStep(1);
    setSelectedSymptoms([]);
    setCustomSymptoms('');
    setTension(null);
    setTensionValue('');
    setSelectedTreatments([]);
    setCustomTreatments('');
    setSelectedFoods([]);
    setCustomFoods('');
    setPhysicalActivity(null);
    setStress(0.5);
  };
  // Pie slider logic
  const pieAngle = tension === 'oui' ? 90 : -90;
  return (
    <div className={`logging-modal-bg${open ? ' open' : ''}`} onClick={onClose}>
      <div
        className="logging-modal"
        style={{
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          background: getMoodGradient(mood),
          maxWidth: 430,
          width: '100%',
          margin: '0 auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button className="logging-modal-close" onClick={onClose} aria-label="Fermer">×</button>
        <div className="logging-modal-content" style={{marginTop: 32, marginBottom: 16}}>
          {step === 1 && <>
            <h2 className="logging-modal-title">Comment vous sentez-vous ce matin ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="mood-slider-wrap">
              <span className="mood-label mood-label-top">Très bien</span>
              <div style={{height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={1 - mood}
                  onChange={handleSlider}
                  className="mood-slider mood-slider-vertical"
                  style={{ writingMode: 'vertical-lr', direction: 'rtl', height: 220, width: 48, background: 'linear-gradient(to bottom, #b6f0c6 0%, #f77 100%)' }}
                />
              </div>
              <span className="mood-label mood-label-bottom">Très mal</span>
            </div>
            <button className="logging-modal-btn" onClick={handleContinue}>Suivant</button>
          </>}
          {step === 2 && <>
            <h2 className="logging-modal-title">Avez-vous eu des symptômes suivants aujourd'hui ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="symptoms-btns-wrap">
              {SYMPTOMS.map(symptom => (
                <button
                  key={symptom}
                  className={
                    'symptom-btn' + (selectedSymptoms.includes(symptom) ? ' selected' : '')
                  }
                  onClick={() => handleSymptomClick(symptom)}
                  type="button"
                >
                  {symptom}
                </button>
              ))}
            </div>
            <div className="symptoms-input-wrap">
              <label className="symptoms-input-label">Ajoutez les autres symptômes ressentis :</label>
              <input
                className="symptoms-input"
                type="text"
                placeholder="Stress, changement d'humeurs..."
                value={customSymptoms}
                onChange={handleCustomSymptoms}
              />
            </div>
            <button className="logging-modal-btn" onClick={handleContinue}>Suivant</button>
          </>}
          {step === 3 && <>
            <h2 className="logging-modal-title">Avez-vous mesuré votre tension artérielle aujourd'hui ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="pie-slider" style={{marginBottom: 24}}>
              <svg width="260" height="260" viewBox="0 0 260 260" style={{position: 'absolute', left: 0, top: 0}}>
                <path d="M130,130 L130,10 A120,120 0 0,1 250,130 Z" fill="#fff" stroke="#f7bfa3" strokeWidth="2" />
                <path d="M130,130 L250,130 A120,120 0 0,1 130,10 Z" fill="#fff" stroke="#f7bfa3" strokeWidth="2" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="#f7bfa3" strokeWidth="2" />
              </svg>
              <div style={{position: 'absolute', left: 0, top: 0, width: 260, height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div
                  className="pie-slider-thumb"
                  style={{
                    left: `calc(50% + 90px * ${tension === 'oui' ? 1 : -1})`,
                    top: '50%',
                    background: '#ffbfa3',
                    border: '4px solid #fff',
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.3s',
                  }}
                  onClick={() => setTension(tension === 'oui' ? 'non' : 'oui')}
                />
                <span style={{position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)', fontWeight: 500, color: '#222'}}>Non</span>
                <span style={{position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', fontWeight: 500, color: '#222'}}>Oui</span>
              </div>
            </div>
            {tension === 'oui' && (
              <div className="symptoms-input-wrap">
                <label className="symptoms-input-label">Si oui, quelle était la dernière valeur ?</label>
                <input
                  className="symptoms-input"
                  type="text"
                  placeholder="ex : 140/90 mmHg"
                  value={tensionValue}
                  onChange={e => setTensionValue(e.target.value)}
                />
              </div>
            )}
            <button className="logging-modal-btn" onClick={handleContinue}>Suivant</button>
          </>}
          {step === 4 && <>
            <h2 className="logging-modal-title">Avez-vous pris tous vos traitements aujourd'hui ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="treatments-grid">
              {TREATMENTS.map((t, i) => (
                <button
                  key={t + i}
                  className={
                    'treatment-btn' + (selectedTreatments.includes(t) ? ' selected' : '')
                  }
                  onClick={() => setSelectedTreatments(selectedTreatments.includes(t) ? selectedTreatments.filter(x => x !== t) : [...selectedTreatments, t])}
                  type="button"
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="symptoms-input-wrap">
              <label className="symptoms-input-label">Avez-vous pris d'autres médicaments ?</label>
              <input
                className="symptoms-input"
                type="text"
                placeholder="ex : Doliprane, Izalgi"
                value={customTreatments}
                onChange={e => setCustomTreatments(e.target.value)}
              />
            </div>
            <button className="logging-modal-btn" onClick={handleContinue}>Suivant</button>
          </>}
          {step === 5 && <>
            <h2 className="logging-modal-title">Avez-vous consommé l'un des éléments suivants aujourd'hui ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="symptoms-btns-wrap">
              {FOODS.map(food => (
                <button
                  key={food}
                  className={
                    'symptom-btn' + (selectedFoods.includes(food) ? ' selected' : '')
                  }
                  onClick={() => setSelectedFoods(selectedFoods.includes(food) ? selectedFoods.filter(x => x !== food) : [...selectedFoods, food])}
                  type="button"
                >
                  {food}
                </button>
              ))}
            </div>
            <div className="symptoms-input-wrap">
              <label className="symptoms-input-label">Avez-vous d'autres aliments à signaler ?</label>
              <input
                className="symptoms-input"
                type="text"
                placeholder="ex : Réglisse"
                value={customFoods}
                onChange={e => setCustomFoods(e.target.value)}
              />
            </div>
            <button className="logging-modal-btn" onClick={handleContinue}>Suivant</button>
          </>}
          {step === 6 && <>
            <h2 className="logging-modal-title">Avez-vous été physiquement actif(ve) aujourd'hui ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="pie-slider-activity" style={{margin: '32px auto', position: 'relative', width: 260, height: 260}}>
              <svg width="260" height="260" viewBox="0 0 260 260">
                <g>
                  <path d="M130,130 L130,20 A110,110 0 0,1 236.6,195 Z" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
                  <path d="M130,130 L236.6,195 A110,110 0 0,1 23.4,195 Z" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
                  <path d="M130,130 L23.4,195 A110,110 0 0,1 130,20 Z" fill="#fff" stroke="#bbb" strokeWidth="1.5" />
                </g>
                <g>
                  <text x="60" y="110" textAnchor="middle" fontSize="16" fontWeight="bold">Oui, {'\n'}+ de 30 mins</text>
                  <text x="200" y="110" textAnchor="middle" fontSize="16" fontWeight="bold">Oui, {'\n'}- de 30 mins</text>
                  <text x="130" y="230" textAnchor="middle" fontSize="16" fontWeight="bold">Non</text>
                </g>
              </svg>
              {/* Thumb */}
              {PHYSICAL_ACTIVITY.map((opt, idx) => {
                const angle = [210, 330, 90][idx];
                const rad = (angle - 90) * Math.PI / 180;
                const x = 130 + 90 * Math.cos(rad);
                const y = 130 + 90 * Math.sin(rad);
                return (
                  <div
                    key={opt.value}
                    className={`pie-slider-thumb-activity${physicalActivity === opt.value ? ' selected' : ''}`}
                    style={{
                      position: 'absolute',
                      left: x - 20,
                      top: y - 20,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: physicalActivity === opt.value ? '#111' : '#fff',
                      border: '4px solid #bbb',
                      boxShadow: physicalActivity === opt.value ? '0 0 0 4px #b6f0c6' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s, box-shadow 0.2s',
                      zIndex: 2,
                    }}
                    onClick={() => handlePhysicalActivity(opt.value)}
                  />
                );
              })}
            </div>
            <button className="logging-modal-btn" onClick={handleContinue} disabled={!physicalActivity}>Suivant</button>
          </>}
          {step === 7 && <>
            <h2 className="logging-modal-title">Comment évalueriez-vous votre niveau de stress aujourd'hui ?</h2>
            <p className="logging-modal-desc">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
            <div className="mood-slider-wrap">
              <span className="mood-label mood-label-top">Aucun stress</span>
              <div style={{height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={1 - stress}
                  onChange={handleStressSlider}
                  className="mood-slider mood-slider-vertical"
                  style={{ writingMode: 'vertical-lr', direction: 'rtl', height: 220, width: 48, background: 'linear-gradient(to bottom, #b6f0c6 0%, #f77 100%)' }}
                />
              </div>
              <span className="mood-label mood-label-bottom">Stress extrême</span>
            </div>
            <button className="logging-modal-btn" onClick={handleContinue}>Suivant</button>
          </>}
          {step === 8 && <>
            <div className="logging-confirm-illu-wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400}}>
              <img src={illuLogging} alt="Bravo illustration" style={{width: 180, marginBottom: 24}} />
              <h2 className="logging-modal-title" style={{textAlign: 'center'}}>Votre informations sont bien prises en compte !</h2>
              <h3 style={{fontWeight: 700, fontSize: 24, margin: '16px 0 8px', textAlign: 'center'}}>BRAVO !</h3>
              <p style={{fontWeight: 500, fontSize: 18, margin: 0, textAlign: 'center'}}>Vous avez enregistré des informations 30 jours de suite</p>
              <p style={{marginTop: 12, color: '#444', textAlign: 'center', maxWidth: 320}}>En mettant vos symptômes quotidiens sur Sencia, vous contribuez à établir un parcours clair de votre santé, pour vous et pour vos praticiens.</p>
            </div>
            <button className="logging-modal-btn" onClick={onClose} style={{marginTop: 24}}>Fermer</button>
          </>}
        </div>
      </div>
    </div>
  );
};

export default LoggingModal; 