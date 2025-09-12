import { useState } from 'react';
import svgPaths from "../imports/svg-mk27dt2qly";

interface SymptomsScreenProps {
  selectedSymptoms: string[];
  customSymptoms: string[];
  onSymptomsChange: (symptoms: string[]) => void;
  onCustomSymptomsChange: (symptoms: string[]) => void;
  onBack: () => void;
  onContinue: () => void;
}

function BgLinear() {
  return (
    <div className="absolute h-[1040.9px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
      <div className="absolute inset-[-24.02%_-40.92%_-10.96%_-26.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1405">
          <g id="bg-linear" opacity="0.9">
            <g filter="url(#filter0_gf_1_215)" id="Ellipse 1434" opacity="0.7">
              <ellipse cx="638" cy="1001.5" fill="var(--fill-0, #D4E7DC)" rx="132" ry="153.5" />
            </g>
            <g filter="url(#filter1_gf_1_215)" id="Ellipse 1435" opacity="0.7">
              <ellipse cx="434" cy="382" fill="var(--fill-0, #C4E1FF)" rx="184" ry="132" />
            </g>
            <g filter="url(#filter2_gf_1_215)" id="Ellipse 1436" opacity="0.7">
              <ellipse cx="428.5" cy="678.5" fill="var(--fill-0, #DFDBFE)" rx="222.5" ry="154.5" />
            </g>
            <g filter="url(#filter3_fg_1_215)" id="Ellipse 1438" opacity="0.7">
              <ellipse cx="363.065" cy="1069.45" fill="var(--fill-0, #FFF6E5)" rx="132" ry="179.5" transform="rotate(-30 363.065 1069.45)" />
            </g>
            <foreignObject height="1560" width="1101" x="-13" y="-61">
              <div style={{ backdropFilter: "blur(177px)", clipPath: "url(#bgblur_0_1_215_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <rect data-figma-bg-blur-radius="354" fill="var(--fill-0, white)" fillOpacity="0.1" height="852" id="Rectangle 6" width="393" x="341" y="293" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="807" id="filter0_gf_1_215" width="764" x="256" y="598">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_215">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_215" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="764" id="filter1_gf_1_215" width="868" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_215">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_215" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="649" id="filter2_gf_1_215" width="785" x="36" y="354">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_215">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_215" stdDeviation="85" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="537.852" id="filter3_fg_1_215" width="490.688" x="117.721" y="800.526">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_215" stdDeviation="25" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="effect1_foregroundBlur_1_215" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect2_texture_1_215">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <clipPath id="bgblur_0_1_215_clip_path" transform="translate(13 61)">
              <rect height="852" width="393" x="341" y="293" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HomeBar() {
  return (
    <div className="absolute bottom-0 h-[27px] left-0 w-[393px]" data-name="Home Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 27">
        <g id="Home Bar">
          <g id="ð¨Background">
            <g id="background-secondary"></g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p376c5d00} fill="var(--fill-0, black)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="box-border content-stretch flex flex-col h-[50px] items-start justify-start pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Status Bar - iPhone">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
              <div className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap">
                <p className="leading-[22px] whitespace-pre">9:41</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2.5 shrink-0 w-[124px]" data-name="Dynamic Island spacer" />
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-1.5 pr-4 py-0 relative w-full">
              <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                  <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
                </svg>
              </div>
              <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                  <path clipRule="evenodd" d={svgPaths.p1fac3f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
                </svg>
              </div>
              <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
                  <g id="Battery">
                    <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
                    <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                    <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProgressBarProps {
  onBack: () => void;
}

function ProgressBar({ onBack }: ProgressBarProps) {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-5 px-4 relative shrink-0 w-[393px]" data-name="progress-bar">
      <button onClick={onBack} className="relative shrink-0 size-[18px]" data-name="chevron-left">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="chevron-left">
            <path d="M11.25 13.5L6.75 9L11.25 4.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </g>
        </svg>
      </button>
      <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0 w-[261px]">
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="x">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="x">
            <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
            <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[26px] text-black w-full">
        <p className="leading-[1.1]">Avez-vous eu les symptômes suivants aujourd'hui ?</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#7a7a7a] text-[14px] w-full">
        <p className="leading-[normal]">Sélectionnez les symptômes que vous avez ressenti aujourd'hui. Si vous n'en avez eu aucun, cliquez sur Suivant.</p>
      </div>
    </div>
  );
}

interface SymptomTagProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function SymptomTag({ label, isSelected, onClick }: SymptomTagProps) {
  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-[2px] backdrop-filter box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0 transition-all duration-200 ${
        isSelected 
          ? 'bg-[#0e7afe] text-white' 
          : 'bg-white text-black hover:bg-gray-50'
      }`}
    >
      <div 
        aria-hidden="true" 
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)] ${
          isSelected ? 'border-[#0e7afe]' : 'border-[rgba(194,194,194,0.55)]'
        }`} 
      />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">{label}</p>
      </div>
    </button>
  );
}

interface SymptomsSectionProps {
  selectedSymptoms: string[];
  onSymptomToggle: (symptom: string) => void;
}

function SymptomsSection({ selectedSymptoms, onSymptomToggle }: SymptomsSectionProps) {
  const predefinedSymptoms = [
    "Maux de tête inhabituels",
    "Vertiges",
    "Tension dans la nuque ou poitrine",
    "Bourdonnements d'oreille",
    "Palpitations"
  ];

  return (
    <div className="content-start flex flex-wrap gap-[9px] items-start justify-start relative shrink-0 w-[353px]">
      {predefinedSymptoms.map((symptom, index) => (
        <SymptomTag
          key={index}
          label={symptom}
          isSelected={selectedSymptoms.includes(symptom)}
          onClick={() => onSymptomToggle(symptom)}
        />
      ))}
    </div>
  );
}

interface CustomSymptomsSectionProps {
  customSymptoms: string[];
  onAddCustomSymptom: (symptom: string) => void;
  onRemoveCustomSymptom: (index: number) => void;
}

function CustomSymptomsSection({ customSymptoms, onAddCustomSymptom, onRemoveCustomSymptom }: CustomSymptomsSectionProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddCustomSymptom(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      onAddCustomSymptom(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          <p className="leading-[normal] whitespace-pre">Ajoutez d'autres symptômes ressentis</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="relative shrink-0 w-full">
        <div className="bg-white box-border border border-[#e4e4e4] border-solid rounded-[84px] relative w-full">
          <div className="flex flex-row items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex items-center justify-start px-4 py-2 relative w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Stress, changements d'humeur..."
                className="w-full bg-transparent font-['SF_Pro_Display:Regular',_sans-serif] text-[14px] text-black placeholder-[#bcbcbc] outline-none leading-[24px]"
              />
            </div>
          </div>
        </div>
      </form>

      {/* Display custom symptoms */}
      {customSymptoms.length > 0 && (
        <div className="content-start flex flex-wrap gap-[9px] items-start justify-start relative shrink-0 w-full mt-2">
          {customSymptoms.map((symptom, index) => (
            <div
              key={index}
              className="backdrop-blur-[2px] backdrop-filter bg-[#0e7afe] box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0"
            >
              <div aria-hidden="true" className="absolute border border-[#0e7afe] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
              <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[normal] whitespace-pre">{symptom}</p>
              </div>
              <button
                onClick={() => onRemoveCustomSymptom(index)}
                className="ml-2 text-white hover:text-gray-300 text-lg leading-none"
                type="button"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SymptomsScreen({ 
  selectedSymptoms, 
  customSymptoms, 
  onSymptomsChange, 
  onCustomSymptomsChange, 
  onBack, 
  onContinue 
}: SymptomsScreenProps) {
  const handleSymptomToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      onSymptomsChange(selectedSymptoms.filter(s => s !== symptom));
    } else {
      onSymptomsChange([...selectedSymptoms, symptom]);
    }
  };

  const handleAddCustomSymptom = (symptom: string) => {
    if (!customSymptoms.includes(symptom)) {
      onCustomSymptomsChange([...customSymptoms, symptom]);
    }
  };

  const handleRemoveCustomSymptom = (index: number) => {
    onCustomSymptomsChange(customSymptoms.filter((_, i) => i !== index));
  };

  const hasSelectedSymptoms = selectedSymptoms.length > 0 || customSymptoms.length > 0;

  const handleContinue = () => {
    if (hasSelectedSymptoms) {
      onContinue();
    }
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[44px] size-full" data-name="Logging1-ressenti">
      <BgLinear />
      <HomeBar />
      
      <div className="absolute content-stretch flex flex-col items-start justify-start left-0 top-0 w-[393px]">
        <StatusBar />
        <ProgressBar onBack={onBack} />
        
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[50px] items-center justify-center px-[30px] py-10 relative w-full">
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <Header />
              </div>
              
              <SymptomsSection 
                selectedSymptoms={selectedSymptoms}
                onSymptomToggle={handleSymptomToggle}
              />
              
              <div className="content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 w-[353px]">
                <CustomSymptomsSection
                  customSymptoms={customSymptoms}
                  onAddCustomSymptom={handleAddCustomSymptom}
                  onRemoveCustomSymptom={handleRemoveCustomSymptom}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute box-border content-stretch flex flex-col gap-2 items-center justify-center left-[-1px] p-[16px] top-[747px] w-[393px]">
        <button 
          onClick={handleContinue}
          disabled={!hasSelectedSymptoms}
          className={`h-[52px] relative rounded-[20px] shrink-0 w-full transition-all ${
            hasSelectedSymptoms 
              ? 'bg-[#212121] cursor-pointer' 
              : 'bg-[#d9d9d9] cursor-not-allowed'
          }`}
          data-name="CTA Primaire"
        >
          <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex gap-2.5 h-[52px] items-center justify-center p-[20px] relative w-full">
              <div className={`font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap ${
                hasSelectedSymptoms ? 'text-white' : 'text-[#a0a0a0]'
              }`}>
                <p className="leading-[normal] whitespace-pre">Continuer</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}