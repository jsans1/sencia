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
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
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
    <div className="size-full">
      {renderStep()}
    </div>
  );
}