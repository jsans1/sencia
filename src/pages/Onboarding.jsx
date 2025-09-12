import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo.svg'
import WheelPicker from '../components/onboarding/WheelPicker'
import OnboardingHeader from '../components/onboarding/OnboardingHeader'
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

  const NextButton = (
    <div className="onb-bottom-fixed">
      <button type="button" className="splash-btn onboarding-btn" onClick={next}>Continuer</button>
    </div>
  )

  return (
    <div className="splash-bg" style={{ backgroundImage: 'url(/src/assets/Gradient.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="splash-container onboarding-form">
        {showHeader && (
          <div className="onb-top-fixed">
            <div className="onb-topbar">
              <img className="onb-logo small" src={logo} alt="Sencia" />
            </div>
            <OnboardingHeader showNav={showHeader} onBack={back} onClose={() => navigate('/')} progress={progress} />
          </div>
        )}

        {stepKey === 'welcome' && (
          <>
            <img className="onb-logo" src={logo} alt="Sencia" />
            <p className="splash-tagline">Votre santé, <span className="splash-tagline-accent">en toute clarté.</span></p>
            {NextButton}
          </>
        )}

        {stepKey === 'propoval' && (
          <>
            <img className="onb-logo" src={logo} alt="Sencia" />
            <p className="splash-tagline">Bienvenue sur <span className="splash-tagline-accent">Sencia</span></p>
            <ul className="features-list" style={{ textAlign: 'left' }}>
              <li className="feature-item"><div className="feature-dot"><img src="/src/assets/feature-1.png" alt="" /></div><div><div className="feature-title">Suivez vos symptômes</div><p className="feature-desc">Suivez quotidiennement vos symptômes et vos ressentis.</p></div></li>
              <li className="feature-item"><div className="feature-dot"><img src="/src/assets/feature-2.png" alt="" /></div><div><div className="feature-title">Visualisez votre progression</div><p className="feature-desc">Visualisez vos tendances en fonction le temps pour identifier vos symptômes.</p></div></li>
              <li className="feature-item"><div className="feature-dot"><img src="/src/assets/feature-3.png" alt="" /></div><div><div className="feature-title">Communiquez avec votre médecin</div><p className="feature-desc">Exportez un résumé clair de vos données pour faciliter le dialogue avec vos praticiens.</p></div></li>
              <li className="feature-item"><div className="feature-dot"><img src="/src/assets/feature-4.png" alt="" /></div><div><div className="feature-title">Vos données sont sécurisées</div><p className="feature-desc">Vos données sont hébergées et protégées selon les plus hauts standards de sécurité en France.</p></div></li>
            </ul>
            {NextButton}
          </>
        )}

        {stepKey === 'welcomeText' && (
          <>
            <img className="onb-logo" src={logo} alt="Sencia" />
            <p className="welcome-subtitle">L'aventure commence ici...</p>
            {NextButton}
          </>
        )}

        {stepKey === 'features' && (
          <>
            <h2 className="features-title">Bienvenue sur <span className="welcome-loris">Sencia</span></h2>
            <ul className="features-list">
              <li className="feature-item"><div className="feature-dot" /><div><div className="feature-title">Vos données sécurisées</div><p className="feature-desc">Hébergées en France.</p></div></li>
            </ul>
            {NextButton}
          </>
        )}

        {stepKey === 'login' && (
          <>
            <img className="onb-logo" src={logo} alt="Sencia" />
            <div className="login-card">
              <h3 className="feature-title" style={{ marginBottom: '8px' }}>L'aventure commence ici…</h3>
              <p className="feature-desc" style={{ marginBottom: '14px' }}>Suivez quotidiennement vos symptômes et vos ressentis.</p>
              <button type="button" className="splash-btn auth-btn" onClick={next}>Via E-mail</button>
              <button type="button" className="splash-btn auth-btn-secondary" onClick={next}>Via Téléphone</button>
            </div>
            {NextButton}
          </>
        )}

        {stepKey === 'cguWelcome' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <h2 className="welcome-title">Bienvenue <span className="welcome-loris">Loris</span></h2>
            <div className="cgu-wrap">
              <div className="cgu-scroll">
                <p><strong>Conditions générales d'utilisation</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, risus non pharetra finibus, urna tellus varius elit, a pulvinar odio neque sit amet odio. Mauris eget condimentum enim. Curabitur suscipit quam quis aliquet cursus. Proin luctus luctus arcu, vel efficitur odio luctus non. Donec id ultricies sem. Cras a arcu id sem scelerisque molestie. Suspendisse nec consectetur enim. Mauris mattis purus id nisl hendrerit, sed efficitur arcu ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. (texte factice)</p>
                <p>…</p>
              </div>
            </div>
            <div className="onb-bottom-fixed"><button type="button" className="splash-btn onboarding-btn" onClick={next}>J'ai compris</button></div>
          </>
        )}

        {stepKey === 'genre' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Comment vous identifiez-vous ?</p>
            <div className="chips-grid four">
              {genreOptions.map((g) => (
                <button
                  type="button"
                  key={g}
                  className={`chip ${data.genre === g ? 'selected' : ''}`}
                  onClick={() => updateField('genre', g)}
                >{g}</button>
              ))}
            </div>
            {NextButton}
          </>
        )}

        {stepKey === 'age' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Quel âge avez-vous ?</p>
            <WheelPicker value={data.age} options={ageOptions} onChange={(v) => updateField('age', v)} ariaLabel="Âge" />
            {NextButton}
          </>
        )}

        {stepKey === 'poids' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Quel est votre poids ?</p>
            <WheelPicker value={data.poids} options={poidsOptions} onChange={(v) => updateField('poids', v)} ariaLabel="Poids" />
            {NextButton}
          </>
        )}

        {stepKey === 'taille' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Combien mesurez-vous ?</p>
            <WheelPicker value={data.taille} options={tailleOptions} onChange={(v) => updateField('taille', v)} ariaLabel="Taille" />
            {NextButton}
          </>
        )}

        {stepKey === 'infosPerso' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Informations personnelles</p>
            <label className="onboarding-label">Maladie chronique</label>
            <select className="onboarding-input" value={data.maladie || ''} onChange={(e) => updateField('maladie', e.target.value)}>
              <option value="">Sélectionner…</option>
              {infosPersoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <label className="onboarding-label">Date de diagnostic</label>
            <input type="date" className="onboarding-input" value={data.diagDate || ''} onChange={(e)=>updateField('diagDate', e.target.value)} />
            <label className="onboarding-label">Médicaments</label>
            <MultiSelectChips options={["Ramipril","Lisinopril","Amlodipine","Bisoprolol","Hydrochlorothiazide","Valsartan"]} selected={data.medicaments || []} onToggle={(v)=>updateField('medicaments', (data.medicaments||[]).includes(v)?(data.medicaments||[]).filter(x=>x!==v):[...(data.medicaments||[]), v])} />
            <div style={{ width:'100%', marginTop:'8px' }}>
              <input className="onboarding-input" placeholder="J'ajoute un nouveau médicament" value={data.newMed || ''} onChange={(e)=>updateField('newMed', e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter' && data.newMed){ updateField('medicaments', [ ...(data.medicaments||[]), data.newMed ]); updateField('newMed',''); e.preventDefault(); } }} />
            </div>
            {NextButton}
          </>
        )}

        {stepKey === 'carePlanV2' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Set up de votre care plan</p>
            <div className="toggle-row"><span>Matin - 8h</span><div className={`switch ${data.matin!==false?'on':''}`} onClick={()=>updateField('matin', !(data.matin!==false))} /></div>
            <div className="toggle-row"><span>Midi - 12h</span><div className={`switch ${data.midi? 'on':''}`} onClick={()=>updateField('midi', !data.midi)} /></div>
            <div className="toggle-row"><span>Soir - 19h</span><div className={`switch ${data.soir!==false?'on':''}`} onClick={()=>updateField('soir', !(data.soir!==false))} /></div>
            {NextButton}
          </>
        )}

        {stepKey === 'notifs' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Autoriser les notifs push</p>
            <div className="toggle-row"><span>Rappel du matin</span><div className={`switch ${data.notifMorning? 'on':''}`} onClick={()=>updateField('notifMorning', !data.notifMorning)} /></div>
            <div className="toggle-row"><span>Rappel du soir</span><div className={`switch ${data.notifEvening? 'on':''}`} onClick={()=>updateField('notifEvening', !data.notifEvening)} /></div>
            {NextButton}
          </>
        )}

        {stepKey === 'sync' && (
          <>
            <img className="onb-logo small" src={logo} alt="Sencia" />
            <p className="onboarding-title">Synchronisez vos appareils</p>
            <div className="grid-devices">
              {['Apple Health','Google Fit','Samsung Health','Garmin','Withings','Oura','Fitbit','Whoop'].map((d) => (
                <button key={d} type="button" className="device-tile" onClick={() => {}}>{d}</button>
              ))}
            </div>
            {NextButton}
          </>
        )}

        {stepKey === 'widget' && (
          <>
            <img className="onb-logo" src={logo} alt="Sencia" />
            <h2 className="features-title">Ajoutez le widget</h2>
            <img src="/src/assets/widget.png" alt="widget" style={{ width: '220px', borderRadius: '24px', marginBottom: '16px' }} />
            <button type="button" className="splash-btn onboarding-btn" onClick={() => navigate('/app')}>Commencer</button>
          </>
        )}
      </div>
    </div>
  )
}