import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo.svg'
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

const stepsOrder = [
  'welcome',
  'propoval',
  'welcomeText',
  'features',
  'login',
  'cguWelcome',
  'genre',
  'age',
  'poids',
  'taille',
  'infosPerso',
  'carePlanV2',
  'notifs',
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

  const next = () => setStepIndex((i) => Math.min(i + 1, stepsOrder.length - 1))
  const back = () => setStepIndex((i) => Math.max(i - 1, 0))

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


  return (
    <>
      <GradientBackground />
      <MobileFrame showStatusBar={!showHeader}>
        {showHeader && (
          <OnboardingNavigation
            onBack={back}
            onClose={() => navigate('/')}
            progress={progress}
            currentStep={stepIndex + 1}
            totalSteps={stepsOrder.length}
          />
        )}

        {stepKey === 'welcome' && (
          <div className="step-content">
            <img className="onb-logo" src={logo} alt="Sencia" />
            <p className="splash-tagline">Votre santé, <span className="splash-tagline-accent">en toute clarté.</span></p>
          </div>
        )}

        {stepKey === 'propoval' && (
          <div className="step-content">
            <img className="onb-logo" src={logo} alt="Sencia" />
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
            <img className="onb-logo" src={logo} alt="Sencia" />
            <p className="welcome-subtitle">L'aventure commence ici...</p>
          </div>
        )}

        {stepKey === 'features' && (
          <div className="step-content">
            <h2 className="features-title">Bienvenue sur <span className="welcome-loris">Sencia</span></h2>
            <ul className="features-list">
              <li className="feature-item"><div className="feature-dot" /><div><div className="feature-title">Vos données sécurisées</div><p className="feature-desc">Hébergées en France.</p></div></li>
            </ul>
          </div>
        )}

        {stepKey === 'login' && (
          <div className="step-content">
            <img className="onb-logo" src={logo} alt="Sencia" />
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
            <img className="onb-logo small" src={logo} alt="Sencia" />
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
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h1 className="step-title">Quel âge avez-vous ?</h1>
            <WheelPicker
              options={ageOptions}
              selectedValue={data.age}
              onChange={(value) => updateField('age', value)}
              unit="ans"
            />
          </div>
        )}

        {stepKey === 'poids' && (
          <div className="step-content">
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h1 className="step-title">Quel est votre poids ?</h1>
            <WheelPicker
              options={poidsOptions}
              selectedValue={data.poids}
              onChange={(value) => updateField('poids', value)}
              unit="kg"
            />
          </div>
        )}

        {stepKey === 'taille' && (
          <div className="step-content">
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h1 className="step-title">Combien mesurez-vous ?</h1>
            <WheelPicker
              options={tailleOptions}
              selectedValue={data.taille}
              onChange={(value) => updateField('taille', value)}
              unit="cm"
            />
          </div>
        )}

        {stepKey === 'infosPerso' && (
          <div className="step-content">
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h1 className="step-title">Informations personnelles</h1>
            <label className="onboarding-label">Maladie chronique</label>
            <input type="text" className="onboarding-input" placeholder="Ex: Hypertension" value={data.maladie || ''} onChange={(e) => updateField('maladie', e.target.value)} />
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
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h1 className="step-title">Set up de votre care plan</h1>
            <div className="toggle-row"><span>Matin - 8h</span><div className={`switch ${data.matin!==false?'on':''}`} onClick={()=>updateField('matin', !(data.matin!==false))} /></div>
            <div className="toggle-row"><span>Midi - 12h</span><div className={`switch ${data.midi? 'on':''}`} onClick={()=>updateField('midi', !data.midi)} /></div>
            <div className="toggle-row"><span>Soir - 19h</span><div className={`switch ${data.soir!==false?'on':''}`} onClick={()=>updateField('soir', !(data.soir!==false))} /></div>
          </div>
        )}

        {stepKey === 'notifs' && (
          <div className="step-content">
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h1 className="step-title">Autoriser les notifs push</h1>
            <div className="toggle-row"><span>Rappel du matin</span><div className={`switch ${data.notifMorning? 'on':''}`} onClick={()=>updateField('notifMorning', !data.notifMorning)} /></div>
            <div className="toggle-row"><span>Rappel du soir</span><div className={`switch ${data.notifEvening? 'on':''}`} onClick={()=>updateField('notifEvening', !data.notifEvening)} /></div>
          </div>
        )}

        {stepKey === 'sync' && (
          <div className="step-content">
            <h1 className="step-title">Synchronisez vos <span style={{color: '#007AFF'}}>appareils</span><br />et données de santé</h1>
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
            <img className="onb-logo" src={logo} alt="Sencia" />
            <h2 className="features-title">Ajoutez le widget</h2>
            <img src="/widget.png" alt="widget" style={{ width: '220px', borderRadius: '24px', marginBottom: '16px' }} />
          </div>
        )}
        
        <BottomActions
          primaryLabel={stepKey === 'widget' ? 'Commencer' : stepKey === 'cguWelcome' ? "J'accepte et je continue" : stepKey === 'login' ? 'Commencer' : 'Continuer'}
          onPrimary={stepKey === 'widget' ? () => navigate('/app') : stepKey === 'login' ? () => setShowLoginModal(true) : next}
          disabled={stepKey === 'cguWelcome' && !data.cguAccepted}
        />
      </MobileFrame>
      
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onEmailLogin={() => {
          setShowLoginModal(false)
          next()
        }}
        onPhoneLogin={() => {
          setShowLoginModal(false)
          next()
        }}
      />
    </>
  )
}