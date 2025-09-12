import { useState } from 'react';
import { ChronicIllnessStep } from './onboarding/ChronicIllnessStep';
import { CheckInFrequencyStep } from './onboarding/CheckInFrequencyStep';
import { NotificationTimeStep } from './onboarding/NotificationTimeStep';
import { CompletionStep } from './onboarding/CompletionStep';

export interface OnboardingData {
  chronicIllness: {
    condition: string;
    category: string;
    diagnosisDate: {
      day: string;
      month: string;
      year: string;
    };
    medications: string[];
  };
  checkInFrequency: '1' | '2' | '3' | '4';
  notifications: {
    morning: string;
    evening: string;
  };
}

const initialData: OnboardingData = {
  chronicIllness: {
    condition: '',
    category: '',
    diagnosisDate: {
      day: '',
      month: '',
      year: ''
    },
    medications: []
  },
  checkInFrequency: '2',
  notifications: {
    morning: '9:45',
    evening: '18:30'
  }
};

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialData);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    console.log('Next step called, current:', currentStep);
    setCurrentStep(prev => {
      const newStep = Math.min(prev + 1, 4);
      console.log('Moving to step:', newStep);
      return newStep;
    });
  };

  const prevStep = () => {
    console.log('Previous step called, current:', currentStep);
    setCurrentStep(prev => {
      const newStep = Math.max(prev - 1, 1);
      console.log('Moving to step:', newStep);
      return newStep;
    });
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChronicIllnessStep
            data={data.chronicIllness}
            onUpdate={(chronicIllness) => updateData({ chronicIllness })}
            onNext={nextStep}
            onBack={prevStep}
            onClose={() => goToStep(1)}
          />
        );
      case 2:
        return (
          <CheckInFrequencyStep
            frequency={data.checkInFrequency}
            onUpdate={(checkInFrequency) => updateData({ checkInFrequency })}
            onNext={nextStep}
            onBack={prevStep}
            onClose={() => goToStep(1)}
          />
        );
      case 3:
        return (
          <NotificationTimeStep
            notifications={data.notifications}
            onUpdate={(notifications) => updateData({ notifications })}
            onNext={nextStep}
            onBack={prevStep}
            onClose={() => goToStep(1)}
          />
        );
      case 4:
        return (
          <CompletionStep
            data={data}
            onRestart={() => {
              setCurrentStep(1);
              setData(initialData);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="size-full relative">
      {/* Debug step indicator - remove in production */}
      <div className="absolute top-2 left-2 z-50 bg-black text-white px-2 py-1 rounded text-sm">
        Step: {currentStep}/4
      </div>
      {renderStep()}
    </div>
  );
}