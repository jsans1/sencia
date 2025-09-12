import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import GradientBackground from '../components/mobile/GradientBackground'
import MobileFrame from '../components/mobile/MobileFrame'
import BottomActions from '../components/mobile/BottomActions'
import '../components/mobile/mobile-styles.css'

// Define the steps for the logging flow based on Figma designs
const LOGGING_STEPS = [
  'mood',      // Screen 1: How are you feeling this morning?
  'symptoms',  // Screen 2: Did you have these symptoms today?  
  'bloodPressure', // Screen 3: Blood pressure measurement
  'treatment', // Screen 4: Did you take your treatment today?
  'consumption', // Screen 5: Did you consume these items today?
  'activity',  // Screen 6: Were you physically active today?
  'stress',    // Screen 7: How would you rate your stress level?
]

export default function LoggingFlow() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [loggingData, setLoggingData] = useState({
    mood: 50, // 0-100 scale
    symptoms: [],
    customSymptoms: '',
    bloodPressure: { systolic: '', diastolic: '', notes: '' },
    treatment: null, // null, true, false
    consumption: [],
    customConsumption: '',
    activity: null, // null, 'plus_30', 'moins_30', 'non'
    stress: 50, // 0-100 scale
  })

  const stepKey = LOGGING_STEPS[currentStep]
  const progress = (currentStep + 1) / LOGGING_STEPS.length

  const nextStep = () => {
    if (currentStep < LOGGING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete logging flow
      console.log('Logging completed:', loggingData)
      navigate('/app')
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateData = (field, value) => {
    setLoggingData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <GradientBackground />
      <MobileFrame showStatusBar={true}>
        {/* Navigation Header */}
        <div className="onboarding-nav">
          <div className="nav-top">
            <button 
              className="nav-back" 
              onClick={prevStep} 
              disabled={currentStep === 0}
              style={{ opacity: currentStep > 0 ? 1 : 0.3 }}
            >
              ←
            </button>
            <div className="progress-indicator">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
            <button className="nav-close" onClick={() => navigate('/')}>
              ✕
            </button>
          </div>
          <div className="step-indicator">
            {currentStep + 1} sur {LOGGING_STEPS.length}
          </div>
        </div>

        {/* Step Content */}
        <div className="step-content">
          {stepKey === 'mood' && (
            <MoodScreen 
              value={loggingData.mood} 
              onChange={(value) => updateData('mood', value)}
              onContinue={nextStep}
            />
          )}
          
          {stepKey === 'symptoms' && (
            <SymptomsScreen 
              selectedSymptoms={loggingData.symptoms}
              customSymptoms={loggingData.customSymptoms}
              onSymptomsChange={(symptoms) => updateData('symptoms', symptoms)}
              onCustomChange={(custom) => updateData('customSymptoms', custom)}
              onContinue={nextStep}
            />
          )}

          {stepKey === 'bloodPressure' && (
            <BloodPressureScreen 
              data={loggingData.bloodPressure}
              onChange={(data) => updateData('bloodPressure', data)}
              onContinue={nextStep}
            />
          )}

          {stepKey === 'treatment' && (
            <TreatmentScreen 
              value={loggingData.treatment}
              onChange={(value) => updateData('treatment', value)}
              onContinue={nextStep}
            />
          )}

          {stepKey === 'consumption' && (
            <ConsumptionScreen 
              selectedItems={loggingData.consumption}
              customItems={loggingData.customConsumption}
              onItemsChange={(items) => updateData('consumption', items)}
              onCustomChange={(custom) => updateData('customConsumption', custom)}
              onContinue={nextStep}
            />
          )}

          {stepKey === 'activity' && (
            <ActivityScreen 
              value={loggingData.activity}
              onChange={(value) => updateData('activity', value)}
              onContinue={nextStep}
            />
          )}

          {stepKey === 'stress' && (
            <StressScreen 
              value={loggingData.stress}
              onChange={(value) => updateData('stress', value)}
              onContinue={nextStep}
            />
          )}
        </div>
      </MobileFrame>
    </>
  )
}

// Individual screen components based on Figma designs

// Screen 1: Mood Rating with gradient slider
const MoodScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  const updateValue = useCallback((clientY) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const y = clientY - rect.top
    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100))
    
    // Invert because top = 100% (very good), bottom = 0% (very bad)
    const newValue = 100 - percentage
    onChange(newValue)
    setHasInteracted(true)
  }, [onChange])

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updateValue(e.clientY)
  }, [updateValue])

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updateValue(e.clientY)
    }
  }, [isDragging, updateValue])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updateValue(e.touches[0].clientY)
  }, [updateValue])

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updateValue(e.touches[0].clientY)
    }
  }, [isDragging, updateValue])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add global event listeners for drag operations
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Comment vous sentez-vous ce matin Alima ?
        </h2>
        <p style={{ fontSize: '14px', color: '#7a7a7a', lineHeight: 'normal' }}>
          Remember to check in regularly to spot patterns.
        </p>
      </div>

      {/* Mood Slider */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        height: '450px',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '80px'
      }}>
        <div style={{ fontSize: '14px', marginBottom: '20px', color: 'black' }}>Très bien</div>
        
        <div 
          ref={sliderRef}
          style={{ 
            width: '38px', 
            height: '327px', 
            background: 'linear-gradient(to bottom, #62ffa4, #ffb48b, #ff5d5d)', 
            borderRadius: '19px',
            position: 'relative',
            cursor: 'pointer'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              top: `${(100 - value)}%`,
              width: '32px',
              height: '32px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: isDragging ? '0 4px 16px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.15)',
              border: '1px solid #e0e0e0',
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'box-shadow 0.2s ease'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
        </div>
        
        <div style={{ fontSize: '14px', marginTop: '20px', color: 'black' }}>Très mal</div>
      </div>

      {/* Continue Button */}
      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        primaryDisabled={!hasInteracted}
        solidBackground={true}
      />
    </>
  )
}

// Screen 2: Symptoms selection
const SymptomsScreen = ({ selectedSymptoms, customSymptoms, onSymptomsChange, onCustomChange, onContinue }) => {
  const symptoms = [
    'Maux de tête inhabituels',
    'Vertiges', 
    'Tension dans la nuque ou poitrine',
    'Bourdonnements d\'oreille',
    'Palpitations'
  ]

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      onSymptomsChange(selectedSymptoms.filter(s => s !== symptom))
    } else {
      onSymptomsChange([...selectedSymptoms, symptom])
    }
  }

  return (
    <>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Avez-vous eu les symptômes suivants aujourd'hui ?
        </h2>
        <p style={{ fontSize: '14px', color: '#7a7a7a', lineHeight: 'normal' }}>
          Sélectionnez les symptômes que vous avez ressenti aujourd'hui. Si vous n'en avez eu aucun, cliquez sur Suivant.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
        {symptoms.map((symptom, index) => (
          <button
            key={index}
            onClick={() => toggleSymptom(symptom)}
            style={{
              padding: '16px 20px',
              borderRadius: '25px',
              border: selectedSymptoms.includes(symptom) ? '2px solid #007AFF' : '1px solid #e0e0e0',
              backgroundColor: selectedSymptoms.includes(symptom) ? 'rgba(0, 122, 255, 0.05)' : 'white',
              color: selectedSymptoms.includes(symptom) ? '#007AFF' : 'black',
              fontSize: '16px',
              fontWeight: selectedSymptoms.includes(symptom) ? '600' : '400',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.2s',
              width: 'fit-content',
              minWidth: '250px'
            }}
          >
            {symptom}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', display: 'block' }}>
          Ajoutez d'autres symptômes ressentis
        </label>
        <input
          type="text"
          placeholder="Stress, changements d'humeur..."
          value={customSymptoms}
          onChange={(e) => onCustomChange(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '20px',
            border: '1px solid #e0e0e0',
            fontSize: '16px',
            backgroundColor: 'white'
          }}
        />
      </div>

      <button 
        onClick={onContinue}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '20px',
          border: '1px solid #ececec',
          backgroundColor: '#212121',
          color: 'white',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer'
        }}
      >
        Continuer
      </button>
    </>
  )
}

// Screen 3: Blood Pressure
const BloodPressureScreen = ({ data, onChange, onContinue }) => {
  const [errors, setErrors] = useState({ systolic: '', diastolic: '' })

  const validateBloodPressure = (type, value) => {
    if (!value || value === '') return ''
    
    const numValue = parseInt(value)
    if (isNaN(numValue)) return 'Valeur invalide'
    
    if (type === 'systolic') {
      if (numValue < 80) return 'Trop bas (min: 80)'
      if (numValue > 250) return 'Trop élevé (max: 250)'
    } else if (type === 'diastolic') {
      if (numValue < 40) return 'Trop bas (min: 40)'
      if (numValue > 150) return 'Trop élevé (max: 150)'
    }
    
    return ''
  }

  const updateField = (field, value) => {
    // Only allow numbers and limit to 3 digits
    const numericValue = value.replace(/[^\d]/g, '').slice(0, 3)
    
    // Update the field
    onChange({ ...data, [field]: numericValue })
    
    // Validate and set errors
    const error = validateBloodPressure(field, numericValue)
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const formatDisplayValue = (value) => {
    return value ? `${value} mmHg` : ''
  }

  const isValidData = () => {
    const systolicValid = data.systolic.trim() !== '' && !errors.systolic
    const diastolicValid = data.diastolic.trim() !== '' && !errors.diastolic
    return systolicValid && diastolicValid
  }

  const hasRequiredData = isValidData()

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Quelle est votre dernière mesure de tension artérielle ?
        </h2>
        <p style={{ fontSize: '14px', color: '#646464', lineHeight: 'normal' }}>
          Entrez la dernière mesure que vous avez prise. Une prise actuelle permet des analyses plus exactes.
        </p>
      </div>

      <div style={{
        backgroundColor: '#fffffe',
        borderRadius: '20px',
        border: '1px solid #f0f0f0',
        padding: '20px',
        marginBottom: '18px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '13px' }}>
          <span style={{ fontSize: '18px', fontWeight: '500' }}>Systolique</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="140"
              value={data.systolic}
              onChange={(e) => updateField('systolic', e.target.value)}
              style={{
                width: '80px',
                padding: '8px 12px',
                borderRadius: '84px',
                border: errors.systolic ? '1px solid #ff5d5d' : '1px solid rgba(228,228,228,0.55)',
                fontSize: '14px',
                textAlign: 'center',
                outline: 'none'
              }}
            />
            <span style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>mmHg</span>
            {errors.systolic && (
              <span style={{ fontSize: '11px', color: '#ff5d5d', marginTop: '2px' }}>
                {errors.systolic}
              </span>
            )}
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '0.5px solid #BCBCBC', margin: '13px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: '500' }}>Diastolique</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="90"
              value={data.diastolic}
              onChange={(e) => updateField('diastolic', e.target.value)}
              style={{
                width: '80px',
                padding: '8px 12px',
                borderRadius: '84px',
                border: errors.diastolic ? '1px solid #ff5d5d' : '1px solid rgba(228,228,228,0.55)',
                fontSize: '14px',
                textAlign: 'center',
                outline: 'none'
              }}
            />
            <span style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>mmHg</span>
            {errors.diastolic && (
              <span style={{ fontSize: '11px', color: '#ff5d5d', marginTop: '2px' }}>
                {errors.diastolic}
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#fffffe',
        borderRadius: '20px',
        border: '1px solid #f0f0f0',
        padding: '20px',
        marginBottom: '40px'
      }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '18px', color: '#A0A0A0', marginTop: '4px' }}>📄</div>
          <textarea
            placeholder="Notes..."
            value={data.notes}
            onChange={(e) => updateField('notes', e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              resize: 'none',
              minHeight: '100px',
              backgroundColor: 'transparent'
            }}
          />
        </div>
      </div>

      <button 
        onClick={onContinue}
        disabled={!hasRequiredData}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '20px',
          border: '1px solid #ececec',
          backgroundColor: hasRequiredData ? '#212121' : '#d9d9d9',
          color: hasRequiredData ? 'white' : '#a0a0a0',
          fontSize: '16px',
          fontWeight: '500',
          cursor: hasRequiredData ? 'pointer' : 'not-allowed'
        }}
      >
        Continuer
      </button>
    </>
  )
}

// Screen 4: Treatment (Figma-accurate wheel selector)
const TreatmentScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectorPosition, setSelectorPosition] = useState({ x: 50, y: 50 }) // Center position as percentage
  const wheelRef = useRef(null)

  const updatePositionAndValue = useCallback((clientX, clientY) => {
    if (!wheelRef.current) return
    
    const rect = wheelRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate position relative to wheel center
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    
    // Convert to percentage within wheel bounds
    const wheelRadius = rect.width / 2 * 0.8 // 80% of wheel radius to keep selector inside
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance <= wheelRadius) {
      const newX = ((deltaX / rect.width) * 100) + 50
      const newY = ((deltaY / rect.height) * 100) + 50
      setSelectorPosition({ x: newX, y: newY })
      
      // Determine selection based on position (left half = oui, right half = non)
      const newValue = deltaX < 0 ? true : false // left = oui (true), right = non (false)
      if (newValue !== value) {
        onChange(newValue)
        setHasInteracted(true)
      }
    }
  }, [value, onChange])

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updatePositionAndValue(e.clientX, e.clientY)
  }, [updatePositionAndValue])

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updatePositionAndValue(e.clientX, e.clientY)
    }
  }, [isDragging, updatePositionAndValue])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    const touch = e.touches[0]
    updatePositionAndValue(touch.clientX, touch.clientY)
  }, [updatePositionAndValue])

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      const touch = e.touches[0]
      updatePositionAndValue(touch.clientX, touch.clientY)
    }
  }, [isDragging, updatePositionAndValue])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Avez-vous pris votre traitement aujourd'hui ?
        </h2>
        <p style={{ fontSize: '14px', color: '#646464', lineHeight: 'normal' }}>
          Sélectionnez les traitements que vous avez pris jusqu'à présent. Fiez-vous toujours à votre ordonnance.
        </p>
      </div>

      {/* Figma-accurate Wheel */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
        position: 'relative'
      }}>
        <div 
          ref={wheelRef}
          style={{
            position: 'relative',
            width: '340px',
            height: '340px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          {/* Main wheel SVG */}
          <div style={{ position: 'absolute', inset: '-0.441%' }}>
            <svg width="344" height="344" viewBox="0 0 344 344" style={{ display: 'block', width: '100%', height: '100%' }}>
              {/* Center circle */}
              <circle cx="172" cy="172" r="20" fill="white" />
              
              {/* Outer circle */}
              <circle cx="172" cy="172" r="170" fill="white" stroke="#DADADA" strokeWidth="3" />
              
              {/* Vertical divider line */}
              <line x1="172" y1="3" x2="172" y2="151" stroke="#DADADA" strokeWidth="3" />
              <line x1="172" y1="193" x2="172" y2="341" stroke="#DADADA" strokeWidth="3" />
              
              {/* Visual feedback for selection */}
              {value === true && (
                <path 
                  d="M172 2C78.1116 2 2 78.1116 2 172C2 265.888 78.1116 342 172 342L172 2Z" 
                  fill="rgba(14, 122, 254, 0.1)" 
                />
              )}
              {value === false && (
                <path 
                  d="M172 2C265.888 2 342 78.1116 342 172C342 265.888 265.888 342 172 342L172 2Z" 
                  fill="rgba(14, 122, 254, 0.1)" 
                />
              )}
            </svg>
          </div>
          
          {/* Labels positioned exactly as in Figma */}
          <div style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '213px',
            height: '15px',
            left: '64px', // 16px margin from Figma
            top: '162px',
            fontFamily: 'SF Pro Display, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            color: 'black',
            pointerEvents: 'none'
          }}>
            <div style={{
              color: value === true ? '#0e7afe' : 'black',
              transition: 'color 0.2s'
            }}>Oui</div>
            <div style={{
              color: value === false ? '#0e7afe' : 'black',
              transition: 'color 0.2s'
            }}>Non</div>
          </div>
          
          {/* Draggable Selector */}
          <div
            style={{
              position: 'absolute',
              left: `${selectorPosition.x}%`,
              top: `${selectorPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '43px',
              height: '43px',
              zIndex: 10,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'all 0.2s ease-out'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div style={{ position: 'absolute', inset: '-45.12% -35.81% -26.51% -35.81%' }}>
              <svg width="75" height="75" viewBox="0 0 75 75" style={{ display: 'block', width: '100%', height: '100%' }}>
                <defs>
                  <filter id="selector-shadow" x="0.6" y="0.6" width="73.8" height="73.8">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="-4" />
                    <feGaussianBlur stdDeviation="7.7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
                <circle 
                  cx="37.5" 
                  cy="41.5" 
                  r="21.5" 
                  fill={isDragging ? "rgba(14, 122, 254, 0.9)" : "white"}
                  filter="url(#selector-shadow)"
                  style={{ transition: 'fill 0.2s' }}
                />
                <circle 
                  cx="37.5" 
                  cy="41.5" 
                  r="21" 
                  stroke={isDragging ? "#0e7afe" : "#DADADA"}
                  fill="none"
                  style={{ transition: 'stroke 0.2s' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        primaryDisabled={!hasInteracted}
        solidBackground={true}
      />
    </>
  )
}

// Screen 5: Consumption
const ConsumptionScreen = ({ selectedItems, customItems, onItemsChange, onCustomChange, onContinue }) => {
  const items = [
    'Aliments salés (charcuterie, plats préparés...)',
    'Alcool',
    'Café ou boissons énergisantes',
    'Aucun de ces éléments'
  ]

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      onItemsChange(selectedItems.filter(s => s !== item))
    } else {
      onItemsChange([...selectedItems, item])
    }
  }

  return (
    <>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Avez-vous consommé l'un des éléments suivants aujourd'hui ?
        </h2>
        <p style={{ fontSize: '14px', color: '#7a7a7a', lineHeight: 'normal' }}>
          Sélectionnez les symptômes que vous avez ressenti aujourd'hui.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleItem(item)}
            style={{
              padding: '16px 20px',
              borderRadius: '25px',
              border: selectedItems.includes(item) ? '2px solid #007AFF' : '1px solid #e0e0e0',
              backgroundColor: selectedItems.includes(item) ? 'rgba(0, 122, 255, 0.05)' : 'white',
              color: selectedItems.includes(item) ? '#007AFF' : 'black',
              fontSize: '16px',
              fontWeight: selectedItems.includes(item) ? '600' : '400',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.2s',
              width: 'fit-content',
              minWidth: '250px'
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', display: 'block' }}>
          D'autres aliments consommés ?
        </label>
        <input
          type="text"
          placeholder="Stress, changements d'humeur..."
          value={customItems}
          onChange={(e) => onCustomChange(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '20px',
            border: '1px solid #e0e0e0',
            fontSize: '16px',
            backgroundColor: 'white'
          }}
        />
      </div>

      <button 
        onClick={onContinue}
        style={{
          width: '100%',
          height: '52px',
          borderRadius: '20px',
          border: '1px solid #ececec',
          backgroundColor: '#212121',
          color: 'white',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer'
        }}
      >
        Continuer
      </button>
    </>
  )
}

// Screen 6: Physical Activity (Figma-accurate 3-way wheel)
const ActivityScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectorPosition, setSelectorPosition] = useState({ x: 50, y: 50 })
  const wheelRef = useRef(null)

  const getSelectionFromAngle = (angle) => {
    // Convert angle to degrees and normalize to 0-360
    let degrees = (angle * 180 / Math.PI + 360) % 360
    
    // Define sectors based on actual label positions:
    // "Oui, + de 30 mins" is top-left: 90-210 degrees
    // "Oui, - de 30 mins" is top-right: 330-90 degrees (wraps around 0)
    // "Non" is bottom: 210-330 degrees
    
    if (degrees >= 210 && degrees <= 330) {
      return 'non'
    } else if (degrees >= 90 && degrees <= 210) {
      return 'plus_30'
    } else {
      // This covers 330-360 and 0-90 degrees (top-right)
      return 'moins_30'
    }
  }

  const updatePositionAndValue = useCallback((clientX, clientY) => {
    if (!wheelRef.current) return
    
    const rect = wheelRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    
    const wheelRadius = rect.width / 2 * 0.8
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance <= wheelRadius) {
      const newX = ((deltaX / rect.width) * 100) + 50
      const newY = ((deltaY / rect.height) * 100) + 50
      setSelectorPosition({ x: newX, y: newY })
      
      // Calculate angle for sector detection
      const angle = Math.atan2(-deltaY, deltaX) // Negative deltaY because screen coordinates are flipped
      const newValue = getSelectionFromAngle(angle)
      
      if (newValue !== value) {
        onChange(newValue)
        setHasInteracted(true)
      }
    }
  }, [value, onChange])

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updatePositionAndValue(e.clientX, e.clientY)
  }, [updatePositionAndValue])

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updatePositionAndValue(e.clientX, e.clientY)
    }
  }, [isDragging, updatePositionAndValue])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    const touch = e.touches[0]
    updatePositionAndValue(touch.clientX, touch.clientY)
  }, [updatePositionAndValue])

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      const touch = e.touches[0]
      updatePositionAndValue(touch.clientX, touch.clientY)
    }
  }, [isDragging, updatePositionAndValue])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Avez-vous été physiquement actif(ve) aujourd'hui ?
        </h2>
        <p style={{ fontSize: '14px', color: '#7a7a7a', lineHeight: 'normal' }}>
          Glissez le cercle vers votre réponse et relâchez pour confirmer.
        </p>
      </div>

      {/* Figma-accurate 3-way wheel */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
        position: 'relative'
      }}>
        <div 
          ref={wheelRef}
          style={{
            position: 'relative',
            width: '340px',
            height: '340px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          {/* Main wheel SVG */}
          <div style={{ position: 'absolute', inset: '-0.441%' }}>
            <svg width="344" height="344" viewBox="0 0 344 344" style={{ display: 'block', width: '100%', height: '100%' }}>
              {/* Center circle */}
              <circle cx="172" cy="172" r="20" fill="white" />
              
              {/* Outer circle */}
              <circle cx="172" cy="172" r="170" fill="white" stroke="#DADADA" strokeWidth="3" />
              
              {/* Figma-accurate divider lines */}
              <path d="M327 241.923L190.5 175.587M17.0348 242L153.5 175.724M172.28 3L172.033 153" stroke="#DADADA" strokeWidth="3" />
              
              {/* Visual feedback for selection */}
              {value === 'plus_30' && (
                <path 
                  d="M172 2C78.1116 2 2 78.1116 2 172L172 172L172 2Z" 
                  fill="rgba(14, 122, 254, 0.1)" 
                />
              )}
              {value === 'moins_30' && (
                <path 
                  d="M172 2C265.888 2 342 78.1116 342 172L172 172L172 2Z" 
                  fill="rgba(14, 122, 254, 0.1)" 
                />
              )}
              {value === 'non' && (
                <path 
                  d="M2 172C2 265.888 78.1116 342 172 342C265.888 342 342 265.888 342 172L172 172L2 172Z" 
                  fill="rgba(14, 122, 254, 0.1)" 
                />
              )}
            </svg>
          </div>
          
          {/* Labels positioned exactly as in Figma */}
          <div style={{
            position: 'absolute',
            left: '87px',
            top: '98px',
            transform: 'translateX(-50%)',
            width: '92px',
            fontFamily: 'SF Pro Display, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            color: value === 'plus_30' ? '#0e7afe' : 'black',
            transition: 'color 0.2s',
            pointerEvents: 'none'
          }}>
            Oui,<br />+ de 30 mins
          </div>
          
          <div style={{
            position: 'absolute',
            left: '253px',
            top: '98px',
            transform: 'translateX(-50%)',
            width: '92px',
            fontFamily: 'SF Pro Display, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            color: value === 'moins_30' ? '#0e7afe' : 'black',
            transition: 'color 0.2s',
            pointerEvents: 'none'
          }}>
            Oui,<br />- de 30 mins
          </div>
          
          <div style={{
            position: 'absolute',
            left: '170px',
            top: '250px',
            transform: 'translateX(-50%)',
            width: '92px',
            fontFamily: 'SF Pro Display, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            color: value === 'non' ? '#0e7afe' : 'black',
            transition: 'color 0.2s',
            pointerEvents: 'none'
          }}>
            Non
          </div>
          
          {/* Draggable Selector */}
          <div
            style={{
              position: 'absolute',
              left: `${selectorPosition.x}%`,
              top: `${selectorPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '43px',
              height: '43px',
              zIndex: 10,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'all 0.2s ease-out'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div style={{ position: 'absolute', inset: '-45.12% -35.81% -26.51% -35.81%' }}>
              <svg width="75" height="75" viewBox="0 0 75 75" style={{ display: 'block', width: '100%', height: '100%' }}>
                <defs>
                  <filter id="activity-selector-shadow" x="0.6" y="0.6" width="73.8" height="73.8">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="-4" />
                    <feGaussianBlur stdDeviation="7.7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
                <circle 
                  cx="37.5" 
                  cy="41.5" 
                  r="21.5" 
                  fill={isDragging ? "rgba(14, 122, 254, 0.9)" : "white"}
                  filter="url(#activity-selector-shadow)"
                  style={{ transition: 'fill 0.2s' }}
                />
                <circle 
                  cx="37.5" 
                  cy="41.5" 
                  r="21" 
                  stroke={isDragging ? "#0e7afe" : "#DADADA"}
                  fill="none"
                  style={{ transition: 'stroke 0.2s' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        primaryDisabled={!hasInteracted}
        solidBackground={true}
      />
    </>
  )
}

// Screen 7: Stress Level
const StressScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  const updateValue = useCallback((clientY) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const y = clientY - rect.top
    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100))
    
    // Invert because top = 100% (no stress), bottom = 0% (extreme stress)
    const newValue = 100 - percentage
    onChange(newValue)
    setHasInteracted(true)
  }, [onChange])

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updateValue(e.clientY)
  }, [updateValue])

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updateValue(e.clientY)
    }
  }, [isDragging, updateValue])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updateValue(e.touches[0].clientY)
  }, [updateValue])

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updateValue(e.touches[0].clientY)
    }
  }, [isDragging, updateValue])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add global event listeners for drag operations
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', lineHeight: '1.1' }}>
          Comment évalueriez-vous votre niveau de stress aujourd'hui ?
        </h2>
        <p style={{ fontSize: '14px', color: '#7a7a7a', lineHeight: 'normal' }}>
          Glissez le cercle vers votre réponse et relâchez pour confirmer.
        </p>
      </div>

      {/* Stress Slider */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ fontSize: '14px', marginBottom: '20px', color: 'black' }}>Aucun stress</div>
        
        <div 
          ref={sliderRef}
          style={{ 
            width: '38px', 
            height: '327px', 
            background: 'linear-gradient(to bottom, #62ffa4, #ffb48b, #ff5d5d)', 
            borderRadius: '19px',
            position: 'relative',
            cursor: 'pointer'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              top: `${(100 - value)}%`,
              width: '32px',
              height: '32px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: isDragging ? '0 4px 16px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.15)',
              border: '1px solid #e0e0e0',
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'box-shadow 0.2s ease'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
        </div>
        
        <div style={{ fontSize: '14px', marginTop: '20px', color: 'black' }}>Stress extrême</div>
      </div>

      {/* Final button says "Terminer" */}
      <div style={{ padding: '16px 0' }}>
        <button 
          onClick={onContinue}
          disabled={!hasInteracted}
          style={{
            width: '100%',
            height: '52px',
            borderRadius: '20px',
            border: '1px solid #ececec',
            backgroundColor: hasInteracted ? '#212121' : '#d9d9d9',
            color: hasInteracted ? 'white' : '#a0a0a0',
            fontSize: '16px',
            fontWeight: '500',
            cursor: hasInteracted ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s'
          }}
        >
          Terminer
        </button>
      </div>
    </>
  )
}