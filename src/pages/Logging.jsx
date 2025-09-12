import React, { useState, useCallback, useRef, useEffect } from 'react'
import '../App.css'
import GradientBackground from '../components/mobile/GradientBackground'
import MobileFrame from '../components/mobile/MobileFrame'
import BottomActions from '../components/mobile/BottomActions'
import StatusBar from '../components/mobile/StatusBar'
import illuLogging from '../assets/illu-logging.png'

// Define the same 7 steps as LoggingFlow
const LOGGING_STEPS = [
  'mood',      // Screen 1: How are you feeling this morning?
  'symptoms',  // Screen 2: Did you have these symptoms today?  
  'bloodPressure', // Screen 3: Blood pressure measurement
  'treatment', // Screen 4: Did you take your treatment today?
  'consumption', // Screen 5: Did you consume these items today?
  'activity',  // Screen 6: Were you physically active today?
  'stress',    // Screen 7: How would you rate your stress level?
]

export const LoggingModal = ({ open, onClose, onSubmit }) => {
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

  const nextStep = () => {
    if (currentStep < LOGGING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete logging flow
      if (onSubmit) onSubmit({
        mood: loggingData.mood / 100, // Convert to 0-1 range for compatibility
        symptoms: loggingData.symptoms,
        customSymptoms: loggingData.customSymptoms,
        tension: loggingData.treatment === true ? 'oui' : loggingData.treatment === false ? 'non' : null,
        tensionValue: `${loggingData.bloodPressure.systolic}/${loggingData.bloodPressure.diastolic}`,
        treatments: [], // Keep empty for now
        customTreatments: '',
        foods: loggingData.consumption,
        customFoods: loggingData.customConsumption,
        physicalActivity: loggingData.activity,
        stress: loggingData.stress / 100, // Convert to 0-1 range for compatibility
      })
      
      // Reset and close
      resetModal()
      if (onClose) onClose()
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

  const resetModal = () => {
    setCurrentStep(0)
    setLoggingData({
      mood: 50,
      symptoms: [],
      customSymptoms: '',
      bloodPressure: { systolic: '', diastolic: '', notes: '' },
      treatment: null,
      consumption: [],
      customConsumption: '',
      activity: null,
      stress: 50,
    })
  }

  const handleModalClose = () => {
    resetModal()
    if (onClose) onClose()
  }

  return (
    <div className={`logging-modal-bg${open ? ' open' : ''}`} onClick={handleModalClose}>
      <div
        className="logging-modal"
        style={{
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          maxWidth: 430,
          width: '100%',
          margin: '0 auto',
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          borderRadius: '0',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()}
      >
        <GradientBackground />
        
        <MobileFrame>
          {/* Status Bar */}
          <StatusBar />

          {/* Progress Bar */}
          <div className="progress-bar" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <button onClick={prevStep} disabled={currentStep === 0} style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: currentStep > 0 ? 'pointer' : 'not-allowed',
              opacity: currentStep > 0 ? 1 : 0.3
            }}>
              ←
            </button>
            <div style={{ display: 'flex', gap: '2px', flex: 1, margin: '0 20px' }}>
              {LOGGING_STEPS.map((_, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    height: '1px',
                    backgroundColor: index <= currentStep ? '#0e7afe' : '#d9d9d9'
                  }}
                />
              ))}
            </div>
            <button onClick={handleModalClose} style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer'
            }}>
              ✕
            </button>
          </div>

          {/* Step Content */}
          <div className="step-content" style={{ 
            padding: '0 30px', 
            height: 'calc(100vh - 200px)',
            display: 'flex',
            flexDirection: 'column'
          }}>
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
      </div>
    </div>
  )
}

// Individual screen components - identical to LoggingFlow
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

      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        solidBackground={true}
      />
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
    if (field === 'notes') {
      onChange({ ...data, [field]: value })
      return
    }
    
    // Only allow numbers and limit to 3 digits
    const numericValue = value.replace(/[^\d]/g, '').slice(0, 3)
    
    // Update the field
    onChange({ ...data, [field]: numericValue })
    
    // Validate and set errors
    const error = validateBloodPressure(field, numericValue)
    setErrors(prev => ({ ...prev, [field]: error }))
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

      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        primaryDisabled={!hasRequiredData}
        solidBackground={true}
      />
    </>
  )
}

// Screen 4: Treatment (Figma-accurate wheel selector)
const TreatmentScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectorPosition, setSelectorPosition] = useState({ x: 50, y: 50 })
  const wheelRef = useRef(null)

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
      
      const newValue = deltaX < 0 ? true : false
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
          <div style={{ position: 'absolute', inset: '-0.441%' }}>
            <svg width="344" height="344" viewBox="0 0 344 344" style={{ display: 'block', width: '100%', height: '100%' }}>
              <circle cx="172" cy="172" r="20" fill="white" />
              <circle cx="172" cy="172" r="170" fill="white" stroke="#DADADA" strokeWidth="3" />
              <line x1="172" y1="3" x2="172" y2="151" stroke="#DADADA" strokeWidth="3" />
              <line x1="172" y1="193" x2="172" y2="341" stroke="#DADADA" strokeWidth="3" />
              
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
          
          <div style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '213px',
            height: '15px',
            left: '64px',
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

      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        solidBackground={true}
      />
    </>
  )
}

// Screen 6: Physical Activity (3-way draggable wheel)
const ActivityScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectorAngle, setSelectorAngle] = useState(() => {
    if (value === 'plus_30') return -60
    if (value === 'moins_30') return 180
    if (value === 'non') return 60
    return 0
  })
  const wheelRef = useRef(null)

  const getValueFromAngle = (angle) => {
    const normalizedAngle = ((angle % 360) + 360) % 360
    
    if ((normalizedAngle >= 300 && normalizedAngle <= 360) || (normalizedAngle >= 0 && normalizedAngle <= 60)) {
      return 'plus_30'
    } else if (normalizedAngle >= 120 && normalizedAngle <= 240) {
      return 'moins_30'
    } else {
      return 'non'
    }
  }

  const updateAngleAndValue = useCallback((clientX, clientY) => {
    if (!wheelRef.current) return
    
    const rect = wheelRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI)
    setSelectorAngle(angle)
    
    const newValue = getValueFromAngle(angle)
    if (newValue !== value) {
      onChange(newValue)
      setHasInteracted(true)
    }
  }, [value, onChange])

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updateAngleAndValue(e.clientX, e.clientY)
  }, [updateAngleAndValue])

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updateAngleAndValue(e.clientX, e.clientY)
    }
  }, [isDragging, updateAngleAndValue])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    const touch = e.touches[0]
    updateAngleAndValue(touch.clientX, touch.clientY)
  }, [updateAngleAndValue])

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      const touch = e.touches[0]
      updateAngleAndValue(touch.clientX, touch.clientY)
    }
  }, [isDragging, updateAngleAndValue])

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

  const selectorRadius = 80
  const selectorX = 130 + selectorRadius * Math.cos(selectorAngle * Math.PI / 180)
  const selectorY = 130 + selectorRadius * Math.sin(selectorAngle * Math.PI / 180)

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

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
        position: 'relative'
      }}>
        <svg width="260" height="260" viewBox="0 0 260 260" ref={wheelRef}>
          <circle
            cx="130"
            cy="130"
            r="110"
            fill="white"
            stroke="#e0e0e0"
            strokeWidth="2"
          />
          
          <line x1="130" y1="20" x2="130" y2="130" stroke="#e0e0e0" strokeWidth="1" />
          <line x1="35" y1="85" x2="130" y2="130" stroke="#e0e0e0" strokeWidth="1" />
          <line x1="225" y1="175" x2="130" y2="130" stroke="#e0e0e0" strokeWidth="1" />
          
          <text x="178" y="60" textAnchor="middle" fontSize="12" fontWeight="bold">Oui,</text>
          <text x="178" y="75" textAnchor="middle" fontSize="12" fontWeight="bold">+ de 30 mins</text>
          
          <text x="82" y="60" textAnchor="middle" fontSize="12" fontWeight="bold">Oui,</text>
          <text x="82" y="75" textAnchor="middle" fontSize="12" fontWeight="bold">- de 30 mins</text>
          
          <text x="130" y="200" textAnchor="middle" fontSize="12" fontWeight="bold">Non</text>
          
          <circle
            cx={selectorX}
            cy={selectorY}
            r="16"
            fill={hasInteracted ? '#007AFF' : '#d9d9d9'}
            stroke="white"
            strokeWidth="3"
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              filter: isDragging ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
          
          <circle
            cx="130"
            cy="130"
            r="8"
            fill="#e0e0e0"
          />
        </svg>
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

      <BottomActions 
        primaryLabel="Terminer"
        onPrimary={onContinue}
        primaryDisabled={!hasInteracted}
        solidBackground={true}
      />
    </>
  )
}

export default LoggingModal