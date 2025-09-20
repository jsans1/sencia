import React, { useMemo, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
// Logo is now in public directory, using direct path
import MobileFrame from '../components/mobile/MobileFrame'
import OnboardingNavigation from '../components/mobile/OnboardingNavigation'
import CardSelection from '../components/mobile/CardSelection'
import WheelPicker from '../components/mobile/WheelPicker'
import BottomActions from '../components/mobile/BottomActions'
import LoginModal from '../components/mobile/LoginModal'
import WearablesGrid from '../components/mobile/WearablesGrid'
import TermsAndConditions from '../components/mobile/TermsAndConditions'
import MedicationPills from '../components/mobile/MedicationPills'
import GradientBackground from '../components/mobile/GradientBackground'
import MultiSelectChips from '../components/onboarding/MultiSelectChips'

// Medication Reminder Modal Component
const MedicationReminderModal = ({ isOpen, onClose, onConfirm }) => {
  const [reminderTimes, setReminderTimes] = useState({
    midi: '12:00',
    soir: '18:30'
  })

  const handleTimeChange = (period, time) => {
    setReminderTimes(prev => ({
      ...prev,
      [period]: time
    }))
  }

  if (!isOpen) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '24px',
          width: '100%',
          maxWidth: '400px',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#000',
            margin: 0,
            lineHeight: '1.3'
          }}>
            Souhaitez-vous que l'on vous rappelle ?
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              color: '#8E8E93',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            ×
          </button>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '14px',
          color: '#333',
          lineHeight: '1.4',
          marginBottom: '24px'
        }}>
          Le respect de la prise de médicaments à des heures constantes est essentielle à votre suivi.
        </p>

        {/* Time Selection Cards */}
        <div style={{ marginBottom: '32px' }}>
          {/* Midi Card */}
          <div className="care-time-card" style={{ marginBottom: '12px' }}>
            <div>
              <div className="care-time-title">Midi</div>
              <div className="care-time-value">{reminderTimes.midi}</div>
            </div>
            <button
              onClick={() => {
                const newTime = prompt('Entrez l\'heure (HH:MM):', reminderTimes.midi)
                if (newTime && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(newTime)) {
                  handleTimeChange('midi', newTime)
                }
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Modifier
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </button>
          </div>

          {/* Soir Card */}
          <div className="care-time-card">
            <div>
              <div className="care-time-title">Soir</div>
              <div className="care-time-value">{reminderTimes.soir}</div>
            </div>
            <button
              onClick={() => {
                const newTime = prompt('Entrez l\'heure (HH:MM):', reminderTimes.soir)
                if (newTime && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(newTime)) {
                  handleTimeChange('soir', newTime)
                }
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Modifier
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            onConfirm(reminderTimes)
            onClose()
          }}
          style={{
            width: '100%',
            padding: '16px 24px',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
        >
          Enregistrer mes rappels
        </button>
      </div>
    </div>
  )
}

const stepsOrder = [
  'welcome',
  'features',
  'login',
  'cguWelcome',
  'welcomeLoris',
  'genre',
  'age',
  'poids',
  'taille',
  'infosPerso',
  'checkinFrequency',
  'carePlanV2',
  'sync',
  'widget',
]

const genreOptions = ['Homme', 'Femme', 'Non-binaire', "Préfère ne pas préciser"]
const infosPersoOptions = ['Cardiovasculaire', 'Hypertension', 'Diabète', 'Asthme', 'Autre']

const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)
const ageOptions = range(18, 100)
const poidsOptions = range(30, 250)
const tailleOptions = range(120, 210)

export default function Onboarding() {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showMedicationReminderModal, setShowMedicationReminderModal] = useState(false)
  const timeInputsRef = useRef([])
  const [editingTimeIdx, setEditingTimeIdx] = useState(-1)
  const [tempTime, setTempTime] = useState('')
  const [data, setData] = useState({
    genre: '',
    age: 35,
    poids: 80,
    taille: 178,
    infosPerso: [],
    frequence: 3,
    heures: ['08:00', '12:00', '19:00'],
    notifications: true,
    cguAccepted: false,
    selectedDevices: [],
  })

  const stepKey = stepsOrder[stepIndex]
  const showHeader = useMemo(() => stepIndex > stepsOrder.indexOf('login'), [stepIndex])
  const progress = (stepIndex + 1) / stepsOrder.length

  // Auto-open modal on login step
  useEffect(() => {
    if (stepKey === 'login') {
      setShowLoginModal(true)
    }
  }, [stepKey])

  const next = () => {
    const currentStepKey = stepsOrder[stepIndex]
    
    // Check if we're on the infosPerso step and medications are selected
    if (currentStepKey === 'infosPerso' && data.medicaments && data.medicaments.length > 0) {
      setShowMedicationReminderModal(true)
    } else {
      setStepIndex((i) => Math.min(i + 1, stepsOrder.length - 1))
    }
  }
  const back = () => setStepIndex((i) => Math.max(i - 1, 0))

  const handleMedicationReminderConfirm = (reminderTimes) => {
    // Save the reminder times to data
    setData(prev => ({
      ...prev,
      medicationReminders: reminderTimes
    }))
    // Continue to next step
    setStepIndex((i) => Math.min(i + 1, stepsOrder.length - 1))
  }

  const handleMedicationReminderClose = () => {
    setShowMedicationReminderModal(false)
    // Don't advance step here - let the confirm handler do it
  }

  const toggleInfos = (value) => {
    setData((prev) => ({
      ...prev,
      infosPerso: prev.infosPerso.includes(value)
        ? prev.infosPerso.filter((v) => v !== value)
        : [...prev.infosPerso, value],
    }))
  }

  const updateField = (key, value) => setData((prev) => ({ ...prev, [key]: value }))
  
  // Force refresh to clear cache
  const isStepValid = (key) => {
    switch (key) {
      case 'cguWelcome':
        return !!data.cguAccepted
      case 'genre':
        return !!data.genre
      case 'age':
        return !!data.age
      case 'poids':
        return !!data.poids
      case 'taille':
        return !!data.taille
      case 'infosPerso': {
        const hasMaladie = !!data.maladie && String(data.maladie).trim().length > 0
        const hasDiagDate = !!data.diagDate && String(data.diagDate).trim().length > 0
        return hasMaladie && hasDiagDate
      }
      case 'checkinFrequency':
        return !!data.frequence
      case 'carePlanV2': {
        const heures = data.heures || []
        return heures.length === 3 && heures.every(v => /^(\d{2}):(\d{2})$/.test(v))
      }
      default:
        return true
    }
  }


  return (
    <>
      <GradientBackground />
      <MobileFrame showStatusBar={false}>
        {showHeader && (
          <OnboardingNavigation
            onBack={back}
            onClose={() => navigate('/')}
            progress={progress}
            currentStep={stepIndex + 1}
            totalSteps={stepsOrder.length}
          />
        )}

        {stepKey === 'welcomeLoris' && (
          <div className="step-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            <img className="onb-logo" src="/logo.svg" alt="Sencia" />
            <h1 className="step-title" style={{ marginTop: 8 }}>Bienvenue <span style={{ color: '#2563eb' }}>Loris</span></h1>
            <p className="step-subtitle" style={{ maxWidth: 320 }}>Suivez quotidiennement vos symptômes et vos ressentis.</p>
          </div>
        )}

        {stepKey === 'checkinFrequency' && (
          <div className="step-content">
            <div style={{ marginBottom: 4, textAlign: 'center', width: '100%' }}>
              <h1 className="step-title" style={{ marginTop: 8, marginBottom: 4 }}>Combien de fois souhaitez-vous <span className="brand-gradient-text">check-in</span> ?</h1>
              <p className="step-subtitle" style={{ maxWidth: 320, marginTop: 0, marginBottom: 0, margin: '0 auto' }}>
              Un check-in, c’est un moment pour faire le point. En quelques secondes, indiquez comment vous vous sentez, vos symptômes et les traitements pris.
              </p>
            </div>
            <div className="selection-grid grid-2x2" style={{ gap: '14px' }}>
              {[1,2,3,4].map((num) => (
                <div
                  key={num}
                  className={`selection-card circle ${data.frequence === num ? 'selected' : ''}`}
                  onClick={() => updateField('frequence', num)}
                >
                  <div className="card-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {num} fois par jour{num === 2 ? ' ' : ''}
                    {num === 2 && (
                      <div className="brand-gradient-text" style={{ fontSize: 12, marginTop: 6 }}>(recommandé)</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {stepKey === 'welcome' && (
          <div className="step-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            <img className="onb-logo centered" src="/logo.svg" alt="Sencia" />
            <p className="splash-tagline">Votre santé, <span className="splash-tagline-accent">en toute clarté.</span></p>
            
            {/* Custom button layout for welcome step */}
            <div style={{ 
              position: 'fixed', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              padding: '12px 24px calc(env(safe-area-inset-bottom) + 12px)',
              zIndex: 10,
              paddingBottom: 'max(12px, env(safe-area-inset-bottom) + 12px)'
            }}>
              <button 
                className="secondary-button" 
                onClick={() => setShowLoginModal(true)}
                style={{
                  background: '#FFFFFF',
                  color: '#111',
                  border: '1px solid #E5E5EA',
                  borderRadius: '12px',
                  padding: '12px 0',
                  fontSize: '17px',
                  fontWeight: '400',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  width: '100%'
                }}
              >
                Se connecter
              </button>
              <button 
                className="primary-button" 
                onClick={next}
                style={{
                  width: '100%',
                  background: '#000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  fontSize: '17px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Commencer
              </button>
            </div>
          </div>
        )}

        {stepKey === 'propoval' && (
          <div className="step-content"style={{height: '100%'}}>
            <img className="onb-logo" src="/logo.svg" alt="Sencia" />
            <p className="splash-tagline">Bienvenue sur <span className="splash-tagline-accent">Sencia</span></p>
            <ul className="features-list" style={{ textAlign: 'left' }}>
              <li className="feature-item"><div className="feature-dot"><img src="/feature-1.png" alt="" /></div><div><div className="feature-title">Suivez vos symptômes</div><p className="feature-desc">Suivez quotidiennement vos symptômes et vos ressentis.</p></div></li>
              <li className="feature-item"><div className="feature-dot"><img src="/feature-2.png" alt="" /></div><div><div className="feature-title">Visualisez votre progression</div><p className="feature-desc">Visualisez vos tendances en fonction le temps pour identifier vos symptômes.</p></div></li>
              <li className="feature-item"><div className="feature-dot"><img src="/feature-3.png" alt="" /></div><div><div className="feature-title">Communiquez avec votre médecin</div><p className="feature-desc">Exportez un résumé clair de vos données pour faciliter le dialogue avec vos praticiens.</p></div></li>
              <li className="feature-item"><div className="feature-dot"><img src="/feature-4.png" alt="" /></div><div><div className="feature-title">Vos données sont sécurisées</div><p className="feature-desc">Vos données sont hébergées et protégées selon les plus hauts standards de sécurité en France.</p></div></li>
            </ul>
          </div>
        )}

        {stepKey === 'welcomeText' && (
          <div className="step-content">
            <img className="onb-logo" src="/logo.svg" alt="Sencia" />
            <p className="welcome-subtitle">L'aventure commence ici...</p>
          </div>
        )}

        {stepKey === 'features' && (
          <div className="step-content" style={{ padding: '24px 20px', textAlign: 'left', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <img className="onb-logo" src="/logo.svg" alt="Sencia" style={{ width: '80px', marginBottom: '16px' }} />
            <h2 className="features-title" style={{ fontSize: '30px', marginBottom: '20px', fontWeight: '300', marginTop: '20px' }}>Bienvenue sur <span className="welcome-loris">Sencia</span></h2>
            <ul className="features-list" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <div className="feature-dot"><img src="/feature-1.png" alt="" style={{ width: '35px', height: '35px' }} /></div>
                <div>
                  <div className="feature-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Suivez vos symptômes</div>
                  <p className="feature-desc" style={{ fontSize: '12px', color: '#666', margin: '0', lineHeight: '1.3' }}>Suivez quotidiennement vos symptômes et vos ressentis.</p>
                </div>
              </li>
              <li className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <div className="feature-dot"><img src="/feature-2.png" alt="" style={{ width: '35px', height: '35px' }} /></div>
                <div>
                  <div className="feature-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Visualisez votre progression</div>
                  <p className="feature-desc" style={{ fontSize: '12px', color: '#666', margin: '0', lineHeight: '1.3' }}>Visualisez vos tendances pour identifier vos symptômes.</p>
                </div>
              </li>
              <li className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <div className="feature-dot"><img src="/feature-3.png" alt="" style={{ width: '35px', height: '35px' }} /></div>
                <div>
                  <div className="feature-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Communiquez avec votre médecin</div>
                  <p className="feature-desc" style={{ fontSize: '12px', color: '#666', margin: '0', lineHeight: '1.3' }}>Exportez vos données pour vos praticiens.</p>
                </div>
              </li>
              <li className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div className="feature-dot"><img src="/feature-4.png" alt="" style={{ width: '35px', height: '35px' }} /></div>
                <div>
                  <div className="feature-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Vos données sécurisées</div>
                  <p className="feature-desc" style={{ fontSize: '12px', color: '#666', margin: '0', lineHeight: '1.3' }}>Hébergées en France selon les plus hauts standards.</p>
                </div>
              </li>
            </ul>
          </div>
        )}

        {stepKey === 'login' && (
          <div className="step-content">
            <img className="onb-logo" src="/logo.svg" alt="Sencia" />
          </div>
        )}

        {stepKey === 'cguWelcome' && (
          <TermsAndConditions
            accepted={data.cguAccepted}
            onAcceptanceChange={(accepted) => updateField('cguAccepted', accepted)}
          />
        )}

        {stepKey === 'genre' && (
          <div className="step-content">
            <h1 className="step-title">Comment vous identifiez-vous ?</h1>
            <CardSelection
              options={genreOptions}
              selectedValue={data.genre}
              onSelect={(value) => updateField('genre', value)}
              gridLayout="grid-2x2"
            />
          </div>
        )}

        {stepKey === 'age' && (
          <div className="step-content">
            <h1 className="step-title">Quel âge avez-vous ?</h1>
            <WheelPicker
              options={ageOptions}
              selectedValue={data.age}
              onChange={(value) => updateField('age', value)}
            />
          </div>
        )}

        {stepKey === 'poids' && (
          <div className="step-content">
            <h1 className="step-title">Quel est votre poids ?</h1>
            <WheelPicker
              options={poidsOptions}
              selectedValue={data.poids}
              onChange={(value) => updateField('poids', value)}
            />
          </div>
        )}

        {stepKey === 'taille' && (
          <div className="step-content">
            <h1 className="step-title">Combien mesurez-vous ?</h1>
            <WheelPicker
              options={tailleOptions}
              selectedValue={data.taille}
              onChange={(value) => updateField('taille', value)}
            />
          </div>
        )}

        {stepKey === 'infosPerso' && (
          <div className="step-content">
            <h1 className="step-title">Informations personnelles</h1>
            <label className="onboarding-label">Maladie chronique</label>
            <select className="onboarding-input" value={data.maladie || ''} onChange={(e) => updateField('maladie', e.target.value)}>
              <option value="">Sélectionnez une maladie</option>
              <option value="Hypertension">Hypertension</option>
              <option value="Diabète">Diabète</option>
              <option value="Asthme">Asthme</option>
              <option value="Maladie cardiovasculaire">Maladie cardiovasculaire</option>
              <option value="Arthrite">Arthrite</option>
              <option value="Maladie de Crohn">Maladie de Crohn</option>
              <option value="Fibromyalgie">Fibromyalgie</option>
              <option value="Autre">Autre</option>
            </select>
            {data.maladie === 'Autre' && (
              <input type="text" className="onboarding-input" placeholder="Précisez votre maladie" value={data.maladieAutre || ''} onChange={(e) => updateField('maladieAutre', e.target.value)} />
            )}
            <label className="onboarding-label">Date de diagnostic</label>
            <input type="date" className="onboarding-input" value={data.diagDate || ''} onChange={(e)=>updateField('diagDate', e.target.value)} />
            <label className="onboarding-label">Médicaments</label>
            <MedicationPills
              selectedMedications={data.medicaments || []}
              onMedicationChange={(arr) => updateField('medicaments', arr)}
            />
          </div>
        )}

        {stepKey === 'carePlanV2' && (
          <div className="step-content">
            <h1 className="step-title" style={{ marginBottom: '32px' }}>Set up de votre care plan</h1>
            <div className="care-times">
              {[
                { label: 'Matin', idx: 0, defaultTime: '08:00' },
                { label: 'Midi', idx: 1, defaultTime: '12:00' },
                { label: 'Soir', idx: 2, defaultTime: '19:00' },
              ].map(({ label, idx, defaultTime }) => {
                const current = (data.heures && data.heures[idx]) || defaultTime
                return (
                  <div className="care-time-card" key={label}>
                    <div className="care-time-left">
                      <div className="care-time-title">{label}</div>
                      <div className="care-time-value">
                        {current}
                      </div>
                    </div>
                    <div className="care-time-right">
                      <button
                        type="button"
                        className="care-time-edit"
                        onClick={() => {
                          setEditingTimeIdx(idx)
                          setTempTime(current)
                        }}
                      >
                        Modifier
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            {editingTimeIdx !== -1 && (
              <div className="time-popover" role="dialog" aria-modal="true" onClick={() => setEditingTimeIdx(-1)}>
                <div className="time-popover-card" onClick={(e)=>e.stopPropagation()}>
                  <input
                    type="time"
                    value={tempTime}
                    step={60}
                    onChange={(e)=>setTempTime(e.target.value)}
                    className="time-popover-input"
                  />
                  <div className="time-popover-actions">
                    <button type="button" className="secondary-button" onClick={()=>setEditingTimeIdx(-1)}>Annuler</button>
                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => {
                        const nextHeures = [...(data.heures || ['08:00','12:00','19:00'])]
                        nextHeures[editingTimeIdx] = tempTime || nextHeures[editingTimeIdx]
                        updateField('heures', nextHeures)
                        setEditingTimeIdx(-1)
                      }}
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* notifs step removed */}

        {stepKey === 'sync' && (
          <div className="step-content">
            <h1 className="step-title">Synchronisez vos <span className="brand-gradient-text">appareils</span><br />et données de santé</h1>
            <WearablesGrid
              selectedDevices={data.selectedDevices}
              onToggleDevice={(deviceId) => {
                setData(prev => ({
                  ...prev,
                  selectedDevices: prev.selectedDevices.includes(deviceId)
                    ? prev.selectedDevices.filter(id => id !== deviceId)
                    : [...prev.selectedDevices, deviceId]
                }))
              }}
            />
          </div>
        )}

        {stepKey === 'widget' && (
          <div className="step-content">
            <img className="onb-logo" src="/logo.svg" alt="Sencia" />
            <h2 className="features-title">Ajoutez le widget</h2>
            <img src="/widget.png" alt="widget" style={{ height: '120%',width: '120%', borderRadius: '24px', marginBottom: '16px',rotate:'6deg' }} />
          </div>
        )}
        
        {stepKey !== 'welcome' && (
          <BottomActions
            primaryLabel={stepKey === 'widget' ? 'Commencer' : stepKey === 'cguWelcome' ? "J'accepte et je continue" : stepKey === 'login' ? 'Commencer' : 'Continuer'}
            onPrimary={stepKey === 'widget' ? () => navigate('/logging') : stepKey === 'login' ? () => setShowLoginModal(true) : next}
            disabled={!isStepValid(stepKey)}
            solidBackground={stepKey === 'cguWelcome'}
            showSecondary={stepKey === 'checkinFrequency'}
            secondaryLabel={stepKey === 'checkinFrequency' ? 'Plus tard' : undefined}
            onSecondary={stepKey === 'checkinFrequency' ? () => navigate('/logging') : undefined}
          />
        )}
      </MobileFrame>
      
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onEmailLogin={() => {
          setShowLoginModal(false)
          if (stepKey === 'welcome') {
            navigate('/app')
          } else {
            next()
          }
        }}
        onPhoneLogin={() => {
          setShowLoginModal(false)
          if (stepKey === 'welcome') {
            navigate('/app')
          } else {
            next()
          }
        }}
      />

      <MedicationReminderModal
        isOpen={showMedicationReminderModal}
        onClose={handleMedicationReminderClose}
        onConfirm={handleMedicationReminderConfirm}
      />
    </>
  )
}