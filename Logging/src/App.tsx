import { useState } from 'react';
import { MoodRatingScreen } from './components/MoodRatingScreen';
import { SymptomsScreen } from './components/SymptomsScreen';
import { BloodPressureScreen } from './components/BloodPressureScreen';
import { TreatmentScreen } from './components/TreatmentScreen';
import { ConsumptionScreen } from './components/ConsumptionScreen';
import { PhysicalActivityScreen } from './components/PhysicalActivityScreen';
import { StressLevelScreen } from './components/StressLevelScreen';
import { CompletionPopup } from './components/CompletionPopup';

type ScreenType = 'mood' | 'symptoms' | 'bloodPressure' | 'treatment' | 'consumption' | 'physicalActivity' | 'stressLevel';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('mood');
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [moodValue, setMoodValue] = useState(50); // 0-100 scale
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [customSymptoms, setCustomSymptoms] = useState<string[]>([]);
  const [bloodPressure, setBloodPressure] = useState({ systolic: '', diastolic: '', notes: '' });
  const [treatmentTaken, setTreatmentTaken] = useState<boolean | null>(null); // null = middle, true = yes, false = no
  const [selectedConsumption, setSelectedConsumption] = useState<string[]>([]);
  const [customConsumption, setCustomConsumption] = useState<string[]>([]);
  const [physicalActivity, setPhysicalActivity] = useState<'yes_30_plus' | 'yes_30_minus' | 'no' | null>(null);
  const [stressLevel, setStressLevel] = useState(50);

  const handleContinueFromMood = (mood: number) => {
    setMoodValue(mood);
    setCurrentScreen('symptoms');
  };

  const handleBackToMood = () => {
    setCurrentScreen('mood');
  };

  const handleContinueFromSymptoms = () => {
    setCurrentScreen('bloodPressure');
  };

  const handleBackToSymptoms = () => {
    setCurrentScreen('symptoms');
  };

  const handleContinueFromBloodPressure = (data: { systolic: string; diastolic: string; notes: string }) => {
    setBloodPressure(data);
    setCurrentScreen('treatment');
  };

  const handleBackToBloodPressure = () => {
    setCurrentScreen('bloodPressure');
  };

  const handleContinueFromTreatment = (taken: boolean | null) => {
    setTreatmentTaken(taken);
    setCurrentScreen('consumption');
  };

  const handleBackToTreatment = () => {
    setCurrentScreen('treatment');
  };

  const handleContinueFromConsumption = () => {
    setCurrentScreen('physicalActivity');
  };

  const handleBackToConsumption = () => {
    setCurrentScreen('consumption');
  };

  const handleContinueFromPhysicalActivity = (activity: 'yes_30_plus' | 'yes_30_minus' | 'no' | null) => {
    setPhysicalActivity(activity);
    setCurrentScreen('stressLevel');
  };

  const handleBackToPhysicalActivity = () => {
    setCurrentScreen('physicalActivity');
  };

  const handleContinueFromStressLevel = (stress: number) => {
    setStressLevel(stress);
    // Final screen - log all data
    console.log('All data collected:');
    console.log('Mood:', moodValue);
    console.log('Selected symptoms:', selectedSymptoms);
    console.log('Custom symptoms:', customSymptoms);
    console.log('Blood pressure:', bloodPressure);
    console.log('Treatment taken:', treatmentTaken);
    console.log('Selected consumption:', selectedConsumption);
    console.log('Custom consumption:', customConsumption);
    console.log('Physical activity:', physicalActivity);
    console.log('Stress level:', stress);
    // Show completion popup
    setShowCompletionPopup(true);
  };

  const handleClosePopup = () => {
    setShowCompletionPopup(false);
    // Reset to beginning or handle as needed
    setCurrentScreen('mood');
  };

  const handleConsultData = () => {
    setShowCompletionPopup(false);
    // Navigate to data view or external link
    console.log('Navigate to exports/data view');
  };

  return (
    <div className="size-full bg-white overflow-hidden relative">
      {currentScreen === 'mood' && (
        <MoodRatingScreen
          initialValue={moodValue}
          onContinue={handleContinueFromMood}
        />
      )}
      {currentScreen === 'symptoms' && (
        <SymptomsScreen
          selectedSymptoms={selectedSymptoms}
          customSymptoms={customSymptoms}
          onSymptomsChange={setSelectedSymptoms}
          onCustomSymptomsChange={setCustomSymptoms}
          onBack={handleBackToMood}
          onContinue={handleContinueFromSymptoms}
        />
      )}
      {currentScreen === 'bloodPressure' && (
        <BloodPressureScreen
          initialData={bloodPressure}
          onBack={handleBackToSymptoms}
          onContinue={handleContinueFromBloodPressure}
        />
      )}
      {currentScreen === 'treatment' && (
        <TreatmentScreen
          initialValue={treatmentTaken}
          onBack={handleBackToBloodPressure}
          onContinue={handleContinueFromTreatment}
        />
      )}
      {currentScreen === 'consumption' && (
        <ConsumptionScreen
          selectedConsumption={selectedConsumption}
          customConsumption={customConsumption}
          onConsumptionChange={setSelectedConsumption}
          onCustomConsumptionChange={setCustomConsumption}
          onBack={handleBackToTreatment}
          onContinue={handleContinueFromConsumption}
        />
      )}
      {currentScreen === 'physicalActivity' && (
        <PhysicalActivityScreen
          initialValue={physicalActivity}
          onBack={handleBackToConsumption}
          onContinue={handleContinueFromPhysicalActivity}
        />
      )}
      {currentScreen === 'stressLevel' && (
        <StressLevelScreen
          initialValue={stressLevel}
          onBack={handleBackToPhysicalActivity}
          onContinue={handleContinueFromStressLevel}
        />
      )}
      
      {/* Completion Popup Overlay */}
      {showCompletionPopup && (
        <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm flex items-end justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="w-full max-w-md h-auto animate-in slide-in-from-bottom-4 duration-500">
            <CompletionPopup 
              onClose={handleClosePopup}
              onConsultData={handleConsultData}
            />
          </div>
        </div>
      )}
    </div>
  );
}