import { useState } from 'react';
import { imgBgLinear, imgHomeBar, imgBattery, imgCellularConnection, imgWifi, imgGroup7, imgChevronLeft, imgX, imgIcon, imgCalendar, imgPlusCircle, imgEllipse1437 } from "../../imports/svg-4mtuv";
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ChronicIllnessData {
  condition: string;
  category: string;
  diagnosisDate: {
    day: string;
    month: string;
    year: string;
  };
  medications: string[];
}

interface ChronicIllnessStepProps {
  data: ChronicIllnessData;
  onUpdate: (data: ChronicIllnessData) => void;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
}

const commonMedications = [
  'Ramipril',
  'Lisinopril', 
  'Amlodipine',
  'Bisoprolol',
  'Hydrochlorothiazide',
  'Valsartan'
];

const conditions = [
  { category: 'Cardiovasculaire', conditions: ['Hypertension', 'Insuffisance cardiaque', 'Arythmie'] },
  { category: 'Diabète', conditions: ['Diabète type 1', 'Diabète type 2', 'Diabète gestationnel'] },
  { category: 'Respiratoire', conditions: ['Asthme', 'BPCO', 'Apnée du sommeil'] },
];

export function ChronicIllnessStep({ data, onUpdate, onNext, onBack, onClose }: ChronicIllnessStepProps) {
  const [showMedicationInput, setShowMedicationInput] = useState(false);
  const [newMedication, setNewMedication] = useState('');

  const updateField = (field: keyof ChronicIllnessData, value: any) => {
    onUpdate({ ...data, [field]: value });
  };

  const updateDiagnosisDate = (field: keyof ChronicIllnessData['diagnosisDate'], value: string) => {
    onUpdate({
      ...data,
      diagnosisDate: { ...data.diagnosisDate, [field]: value }
    });
  };

  const addMedication = (medication: string) => {
    if (!data.medications.includes(medication)) {
      onUpdate({
        ...data,
        medications: [...data.medications, medication]
      });
    }
  };

  const removeMedication = (medication: string) => {
    onUpdate({
      ...data,
      medications: data.medications.filter(m => m !== medication)
    });
  };

  const handleAddCustomMedication = () => {
    if (newMedication.trim()) {
      addMedication(newMedication.trim());
      setNewMedication('');
      setShowMedicationInput(false);
    }
  };

  // Allow navigation without validation for testing - you can add strict validation later
  const isValid = true;

  return (
    <div className="bg-white overflow-clip relative rounded-[44px] size-full" data-name="infos perso">
      {/* Background */}
      <div className="absolute h-[1040.9px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
        <div className="absolute inset-[-24.02%_-40.92%_-10.96%_-26.02%]">
          <img className="block max-w-none size-full" src={imgBgLinear} />
        </div>
      </div>
      
      {/* Home Bar */}
      <div className="absolute bottom-0 h-[27px] left-0 w-[393px]" data-name="Home Bar">
        <img className="block max-w-none size-full" src={imgHomeBar} />
      </div>
      
      {/* Decorative Ellipse */}
      <div className="absolute h-[338px] left-[277px] top-[-15px] w-[264px]">
        <div className="absolute inset-[-73.96%_-94.7%]">
          <img className="block max-w-none size-full" src={imgEllipse1437} />
        </div>
      </div>
      
      {/* Continue Button */}
      <button
        onClick={onNext}
        disabled={!isValid}
        className="absolute bg-[#212121] box-border content-stretch flex gap-2.5 items-center justify-center left-4 px-5 py-4 rounded-[20px] top-[756px] w-[361px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)]" />
        <span className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic text-[18px] text-center text-nowrap text-white relative z-10">
          Continuer
        </span>
      </button>

      {/* Header with Progress */}
      <div className="absolute content-stretch flex flex-col gap-10 items-center justify-start left-1/2 top-0 translate-x-[-50%] w-[393px]">
        {/* Status Bar and Progress */}
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[393px]">
          {/* Status Bar */}
          <div className="box-border content-stretch flex flex-col items-start justify-start pb-[30px] pt-[21px] px-0 relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
                    <div className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[0] relative shrink-0 text-[17px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[22px] whitespace-pre">9:41</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-2.5 shrink-0 w-[124px]" />
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-1.5 pr-4 py-0 relative w-full">
                    <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
                      <img className="block max-w-none size-full" src={imgCellularConnection} />
                    </div>
                    <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
                      <img className="block max-w-none size-full" src={imgWifi} />
                    </div>
                    <div className="h-[13px] relative shrink-0 w-[27.328px]">
                      <img className="block max-w-none size-full" src={imgBattery} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] h-[20.991px] ml-0 mt-0 relative w-[77px]">
              <img className="block max-w-none size-full" src={imgGroup7} />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center justify-between pb-0 pt-5 px-4 relative w-full">
                <button onClick={onBack} className="relative shrink-0 size-[18px]">
                  <img className="block max-w-none size-full" src={imgChevronLeft} />
                </button>
                <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0 w-[261px]">
                  <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
                  <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
                  <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
                  <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
                  <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
                  <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
                  <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
                </div>
                <button onClick={onClose} className="relative shrink-0 size-[18px]">
                  <img className="block max-w-none size-full" src={imgX} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center px-4 py-0 relative w-full">
              {/* Header */}
              <div className="content-stretch flex flex-col gap-1.5 items-center justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
                <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#636363] text-[14px] w-full">
                  <p className="leading-[normal]">Step 5 out of 6</p>
                </div>
                <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[24px] text-black w-full">
                  <p className="leading-[1.2]">
                    Quelle est votre maladie
                    <br aria-hidden="true" />
                    chronique ?
                  </p>
                </div>
              </div>

              {/* Condition Dropdown */}
              <div className="bg-white h-[70px] relative rounded-[16px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex h-[70px] items-center justify-between p-[16px] relative w-full">
                    <Select onValueChange={(value) => {
                      const [category, condition] = value.split('|');
                      updateField('category', category);
                      updateField('condition', condition);
                    }}>
                      <SelectTrigger className="border-0 bg-transparent p-0 text-left justify-between w-full">
                        <div className="content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic text-nowrap">
                          <div className="font-['SF_Pro_Display:Medium',_sans-serif] text-[14px] text-[rgba(0,0,0,0.4)]">
                            <p className="leading-[normal] text-nowrap whitespace-pre">{data.category || 'Cardiovasculaire'}</p>
                          </div>
                          <div className="font-['SF_Pro_Display:Regular',_sans-serif] text-[18px] text-black">
                            <p className="leading-[normal] text-nowrap whitespace-pre">{data.condition || 'Sélectionnez votre condition'}</p>
                          </div>
                        </div>
                        <div className="h-1.5 relative shrink-0 w-3">
                          <div className="absolute inset-[-16.67%_-8.33%]">
                            <img className="block max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((cat) =>
                          cat.conditions.map((condition) => (
                            <SelectItem key={`${cat.category}|${condition}`} value={`${cat.category}|${condition}`}>
                              {condition}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Diagnosis Date */}
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
                  <p className="leading-[1.2]">Quand avez-vous été diagnostiqué ?*</p>
                </div>
                <div className="bg-white h-[70px] relative rounded-[16px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex h-[70px] items-center justify-between p-[16px] relative w-full">
                      <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                        <input
                          type="text"
                          placeholder="JJ"
                          maxLength={2}
                          value={data.diagnosisDate.day}
                          onChange={(e) => updateDiagnosisDate('day', e.target.value)}
                          className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] rounded-[8px] shrink-0 w-[41px] border-0 text-center font-['SF_Pro_Display:Regular',_sans-serif] text-[18px] text-black"
                        />
                        <input
                          type="text"
                          placeholder="MM"
                          maxLength={2}
                          value={data.diagnosisDate.month}
                          onChange={(e) => updateDiagnosisDate('month', e.target.value)}
                          className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] rounded-[8px] shrink-0 border-0 text-center font-['SF_Pro_Display:Regular',_sans-serif] text-[18px] text-black"
                        />
                        <input
                          type="text"
                          placeholder="AAAA"
                          maxLength={4}
                          value={data.diagnosisDate.year}
                          onChange={(e) => updateDiagnosisDate('year', e.target.value)}
                          className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] rounded-[8px] shrink-0 border-0 text-center font-['SF_Pro_Display:Regular',_sans-serif] text-[18px] text-black"
                        />
                      </div>
                      <div className="relative shrink-0 size-6">
                        <img className="block max-w-none size-full" src={imgCalendar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medications */}
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
                  <p className="leading-[1.2]">Quels médicaments prenez-vous ?*</p>
                </div>
                <div className="content-start flex flex-wrap gap-[9px] items-start justify-start relative shrink-0 w-full">
                  {commonMedications.map((med) => (
                    <button
                      key={med}
                      onClick={() => data.medications.includes(med) ? removeMedication(med) : addMedication(med)}
                      className={`backdrop-blur-[2px] backdrop-filter box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0 ${
                        data.medications.includes(med) 
                          ? 'bg-blue-100 border-blue-500 border-2' 
                          : 'bg-white border-[rgba(194,194,194,0.55)] border'
                      }`}
                    >
                      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                        <p className="leading-[normal] whitespace-pre">{med}</p>
                      </div>
                    </button>
                  ))}
                  
                  {showMedicationInput ? (
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={newMedication}
                        onChange={(e) => setNewMedication(e.target.value)}
                        placeholder="Nom du médicament"
                        className="px-3 py-2 border rounded-lg text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddCustomMedication()}
                      />
                      <Button onClick={handleAddCustomMedication} size="sm">Ajouter</Button>
                      <Button onClick={() => setShowMedicationInput(false)} variant="outline" size="sm">Annuler</Button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowMedicationInput(true)}
                      className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-2 h-[45px] items-center justify-center pl-2.5 pr-4 py-[13px] relative rounded-[50px] shrink-0 border border-[#5980ff]"
                    >
                      <div className="relative shrink-0 size-6">
                        <img className="block max-w-none size-full" src={imgPlusCircle} />
                      </div>
                      <div className="bg-black bg-clip-text font-['SF_Pro_Display:Regular',_sans-serif] from-[#5980ff] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap to-[#9e94ea]" style={{ WebkitTextFillColor: "transparent" }}>
                        <p className="leading-[normal] whitespace-pre">J'ajoute un médicament</p>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}