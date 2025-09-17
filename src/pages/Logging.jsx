import React, { useState, useCallback, useRef, useEffect } from 'react'
import '../App.css'
import { LoggingGradientBackground } from '../components/mobile/LoggingGradientBackground'
import MobileFrame from '../components/mobile/MobileFrame'
import BottomActions from '../components/mobile/BottomActions'
import StatusBar from '../components/mobile/StatusBar'
import { 
  LoggingScreenHeader, 
  LoggingSlider, 
  LoggingSelectionButtons, 
  LoggingCustomInput,
  LoggingBloodPressureInput 
} from '../components/logging/LoggingScreen'
import { LoggingWheelPicker } from '../components/logging/LoggingWheelPicker'

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
      // Complete logging flow - only show success modal if completing all steps
      handleCompleteLogging()
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

  const handleCompleteLogging = () => {
    // Only call onSubmit if we're on the last step (stress screen)
    if (currentStep === LOGGING_STEPS.length - 1) {
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
    }
    
    // Reset and close
    resetModal()
    if (onClose) onClose()
  }

  const progress = ((currentStep + 1) / LOGGING_STEPS.length) * 100
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
        <LoggingGradientBackground />
        
        <MobileFrame showStatusBar={false}>

          {/* Progress Header */}
          <div style={{ padding: '32px 20px 8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={prevStep} disabled={currentStep === 0} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: currentStep > 0 ? 'pointer' : 'not-allowed', opacity: currentStep > 0 ? 1 : 0.3 }}>←</button>
            <div style={{ flex: 1 }}>
              <div style={{ width: '100%', height: '4px', background: 'rgba(0,0,0,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #A69BF8 0%, #0E7AFE 100%)' }} />
              </div>
            </div>
            <button onClick={handleModalClose} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>✕</button>
          </div>

          {/* Step Content */}
          <div className="step-content" style={{ 
            padding: '0 30px', 
            margin: '0 20px',
            marginTop: '32px',
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
      <LoggingScreenHeader 
        title="Comment vous sentez-vous ce matin Loris ?"
        subtitle="Remember to check in regularly to spot patterns."
      />

      <LoggingSlider
        value={value}
        onChange={onChange}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        sliderRef={sliderRef}
        isDragging={isDragging}
        topLabel="Très bien"
        bottomLabel="Très mal"
        height="250px"
      />

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
      <LoggingScreenHeader 
        title="Avez-vous eu les symptômes suivants aujourd'hui ?"
        subtitle="Sélectionnez les symptômes que vous avez ressenti aujourd'hui. Si vous n'en avez eu aucun, cliquez sur Suivant."
      />

      <LoggingSelectionButtons
        items={symptoms}
        selectedItems={selectedSymptoms}
        onToggle={toggleSymptom}
      />

      <LoggingCustomInput
        label="Ajoutez d'autres symptômes ressentis"
          placeholder="Stress, changements d'humeur..."
          value={customSymptoms}
        onChange={onCustomChange}
      />

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
      <LoggingScreenHeader 
        title="Quelle est votre dernière mesure de tension artérielle ?"
        subtitle="Entrez la dernière mesure que vous avez prise. Une prise actuelle permet des analyses plus exactes."
      />

      <LoggingBloodPressureInput 
        data={data}
        onChange={updateField}
        errors={errors}
      />

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

  const treatmentSectors = {
    true: [90, 270], // Left side (Oui)
    false: [270, 90] // Right side (Non) - wraps around
  }

  const treatmentLabels = [
    {
      value: true,
      text: 'Oui',
      position: { x: 25, y: 50 },
      width: '50px'
    },
    {
      value: false,
      text: 'Non',
      position: { x: 75, y: 50 },
      width: '50px'
    }
  ]

  return (
    <>
      <LoggingScreenHeader 
        title="Avez-vous pris votre traitement aujourd'hui ?"
        subtitle="Sélectionnez les traitements que vous avez pris jusqu'à présent. Fiez-vous toujours à votre ordonnance."
      />

      <LoggingWheelPicker
        value={value}
        onChange={(newValue) => {
          onChange(newValue)
          setHasInteracted(true)
        }}
        labels={treatmentLabels}
        sectors={treatmentSectors}
        onInteraction={() => setHasInteracted(true)}
      />

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
      <LoggingScreenHeader 
        title="Avez-vous consommé l'un des éléments suivants aujourd'hui ?"
        subtitle="Sélectionnez les symptômes que vous avez ressenti aujourd'hui."
      />

      <LoggingSelectionButtons
        items={items}
        selectedItems={selectedItems}
        onToggle={toggleItem}
      />

      <LoggingCustomInput
        label="D'autres aliments consommés ?"
          placeholder="Pâtisseries industrielles, viandes rouges..."
          value={customItems}
        onChange={onCustomChange}
      />

      <BottomActions 
        primaryLabel="Continuer"
        onPrimary={onContinue}
        solidBackground={true}
      />
    </>
  )
}

// Screen 6: Physical Activity (Figma-accurate 3-way wheel)
const ActivityScreen = ({ value, onChange, onContinue }) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectorPosition, setSelectorPosition] = useState({ x: 50, y: 50 })
  const wheelRef = useRef(null)
  const selectorRef = useRef(null)

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

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true)
    e.preventDefault()
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !wheelRef.current) return

    const rect = wheelRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate position relative to wheel center
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    
    // Convert to percentage within wheel bounds
    const wheelRadius = rect.width / 2 * 0.8 // 80% of wheel radius to keep selector inside
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance <= wheelRadius) {
      const newX = ((deltaX / rect.width) * 100) + 50
      const newY = ((deltaY / rect.height) * 100) + 50
      setSelectorPosition({ x: newX, y: newY })
      
      // Calculate angle for sector detection
      const angle = Math.atan2(-deltaY, deltaX) // Negative deltaY because screen coordinates are flipped
      const newSelection = getSelectionFromAngle(angle)
      
      if (newSelection !== value) {
        onChange(newSelection)
        setHasInteracted(true)
      }
    }
  }, [isDragging, value, onChange])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return (
    <>
      <LoggingScreenHeader 
        title="Avez-vous été physiquement actif(ve) aujourd'hui ?"
        subtitle="Glissez le cercle vers votre réponse et relâchez pour confirmer."
      />
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <div style={{ position: 'relative', width: '340px', height: '340px' }}>
          {/* Wheel SVG */}
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
            <svg width="340" height="340" viewBox="0 0 344 344" style={{ display: 'block', width: '100%', height: '100%' }}>
              <g>
                {/* Top-left sector */}
                <path d="M172 2C78.1116 2 2 78.1116 2 172L172 172L172 2Z" fill="white" />
                {/* Top-right sector */}
                <path d="M172 2C265.888 2 342 78.1116 342 172L172 172L172 2Z" fill="white" />
                {/* Bottom sector */}
                <path d="M2 172C2 265.888 78.1116 342 172 342C265.888 342 342 265.888 342 172L172 172L2 172Z" fill="white" />
                {/* Outer border */}
                <circle cx="172" cy="172" r="170" fill="none" stroke="#DADADA" strokeWidth="1" />
                {/* Divider lines */}
                <line x1="172" y1="2" x2="172" y2="342" stroke="#DADADA" strokeWidth="1" />
                <line x1="2" y1="172" x2="342" y2="172" stroke="#DADADA" strokeWidth="1" />
                
                {/* Visual feedback for selection */}
                {value === 'plus_30' && (
                  <path d="M172 2C78.1116 2 2 78.1116 2 172L172 172L172 2Z" fill="rgba(14, 122, 254, 0.1)" />
                )}
                {value === 'moins_30' && (
                  <path d="M172 2C265.888 2 342 78.1116 342 172L172 172L172 2Z" fill="rgba(14, 122, 254, 0.1)" />
                )}
                {value === 'non' && (
                  <path d="M2 172C2 265.888 78.1116 342 172 342C265.888 342 342 265.888 342 172L172 172L2 172Z" fill="rgba(14, 122, 254, 0.1)" />
                )}
              </g>
            </svg>
          </div>
          
          {/* Labels */}
          <div style={{
            position: 'absolute',
            left: '87px',
            top: '70px',
            transform: 'translateX(-50%)',
            width: '92px',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            pointerEvents: 'none',
            color: value === 'plus_30' ? '#0e7afe' : 'black',
            transition: 'color 0.2s ease'
          }}>
            Oui,<br />+ de 30 mins
          </div>
          
          <div style={{
            position: 'absolute',
            left: '253px',
            top: '70px',
            transform: 'translateX(-50%)',
            width: '92px',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            pointerEvents: 'none',
            color: value === 'moins_30' ? '#0e7afe' : 'black',
            transition: 'color 0.2s ease'
          }}>
            Oui,<br />- de 30 mins
          </div>
          
          <div style={{
            position: 'absolute',
            left: '170px',
            top: '250px',
            transform: 'translateX(-50%)',
            width: '92px',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            pointerEvents: 'none',
            color: value === 'non' ? '#0e7afe' : 'black',
            transition: 'color 0.2s ease'
          }}>
            Non
          </div>
          
          {/* Draggable Selector */}
          <div 
            ref={selectorRef}
            style={{
              position: 'absolute',
              left: `${selectorPosition.x}%`,
              top: `${selectorPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '43px',
              height: '43px',
              zIndex: 10,
              transition: 'all 0.2s ease-out',
              cursor: 'grab'
            }}
            onMouseDown={handleMouseDown}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: isDragging ? 'rgba(14, 122, 254, 0.9)' : 'white',
              border: `2px solid ${isDragging ? '#0e7afe' : '#DADADA'}`,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease'
            }} />
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
      <LoggingScreenHeader 
        title="Comment évalueriez-vous votre niveau de stress aujourd'hui ?"
        subtitle="Glissez le cercle vers votre réponse et relâchez pour confirmer."
      />

      <LoggingSlider
        value={value}
        onChange={onChange}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        sliderRef={sliderRef}
        isDragging={isDragging}
        topLabel="Aucun stress"
        bottomLabel="Stress extrême"
        height="250px"
      />

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