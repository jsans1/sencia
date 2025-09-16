import { useState } from 'react';
import { useTime } from '../hooks/useTime';
import svgPaths from "../imports/svg-ay4lxks0f4";

function BgLinear() {
  return (
    <div className="absolute h-[1040.9px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
      <div className="absolute inset-[-24.02%_-40.92%_-10.96%_-26.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1405">
          <g id="bg-linear">
            <g filter="url(#filter0_gf_1_733)" id="Ellipse 1434" opacity="0.7">
              <ellipse cx="638" cy="1001.5" fill="var(--fill-0, #D4E7DC)" rx="132" ry="153.5" />
            </g>
            <g filter="url(#filter1_gf_1_733)" id="Ellipse 1435" opacity="0.7">
              <ellipse cx="434" cy="382" fill="var(--fill-0, #C4E1FF)" rx="184" ry="132" />
            </g>
            <g filter="url(#filter2_gf_1_733)" id="Ellipse 1436" opacity="0.7">
              <ellipse cx="428.5" cy="678.5" fill="var(--fill-0, #DFDBFE)" rx="222.5" ry="154.5" />
            </g>
            <g filter="url(#filter3_fg_1_733)" id="Ellipse 1438" opacity="0.7">
              <ellipse cx="363.065" cy="1069.45" fill="var(--fill-0, #FFF6E5)" rx="132" ry="179.5" transform="rotate(-30 363.065 1069.45)" />
            </g>
            <foreignObject height="1560" width="1101" x="-13" y="-61">
              <div style={{ backdropFilter: "blur(177px)", clipPath: "url(#bgblur_0_1_733_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <rect data-figma-bg-blur-radius="354" fill="var(--fill-0, white)" fillOpacity="0.1" height="852" id="Rectangle 6" width="393" x="341" y="293" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="807" id="filter0_gf_1_733" width="764" x="256" y="598">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_733">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_733" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="764" id="filter1_gf_1_733" width="868" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_733">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_733" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="649" id="filter2_gf_1_733" width="785" x="36" y="354">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_733">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_733" stdDeviation="85" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="537.852" id="filter3_fg_1_733" width="490.688" x="117.721" y="800.526">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_733" stdDeviation="25" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="effect1_foregroundBlur_1_733" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect2_texture_1_733">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <clipPath id="bgblur_0_1_733_clip_path" transform="translate(13 61)">
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
          <g id="🎨Background">
            <g id="background-secondary"></g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p376c5d00} fill="var(--fill-0, black)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function CtaPrimaire({ onContinue, isEnabled }: { onContinue: () => void; isEnabled: boolean }) {
  return (
    <button 
      onClick={onContinue}
      disabled={!isEnabled}
      className={`absolute box-border content-stretch flex gap-2.5 items-center justify-center left-4 px-5 py-4 rounded-[20px] top-[756px] w-[361px] transition-opacity ${
        isEnabled 
          ? 'bg-[#212121] hover:bg-[#333] cursor-pointer' 
          : 'bg-[#ccc] cursor-not-allowed opacity-50'
      }`} 
      data-name="CTA Primaire"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)]" />
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Continuer</p>
      </div>
    </button>
  );
}

function Time() {
  const currentTime = useTime();

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
          <div className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap">
            <p className="leading-[22px] whitespace-pre">{currentTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-2.5 shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
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
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="box-border content-stretch flex flex-col h-[50px] items-start justify-start pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function ChevronLeft({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-left">
          <path d="M11.25 13.5L6.75 9L11.25 4.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </button>
  );
}

function Frame6158() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0 w-[261px]">
      <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function X({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="x">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </button>
  );
}

function ProgressBar({ onBack, onClose }: { onBack: () => void; onClose: () => void }) {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-5 px-4 relative shrink-0 w-[393px]" data-name="progress-bar">
      <ChevronLeft onClick={onBack} />
      <Frame6158 />
      <X onClick={onClose} />
    </div>
  );
}

function Frame6078({ onBack, onClose }: { onBack: () => void; onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-0 translate-x-[-50%] w-[393px]">
      <StatusBarIPhone />
      <ProgressBar onBack={onBack} onClose={onClose} />
    </div>
  );
}

function Frame6153() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[26px] text-black w-full">
        <p className="leading-[1.1]">Quel type de rapport souhaitez-vous exporter ?</p>
      </div>
    </div>
  );
}

function Frame6154() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-[333px]">
      <Frame6153 />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] w-[333px]">
        <p className="leading-[normal]">Vous pouvez créer des rapports pour en savoir plus sur votre santé mais également pour les communiquer à votre praticien.</p>
      </div>
    </div>
  );
}

function Medicament({ 
  isSelected, 
  onClick, 
  children 
}: { 
  isSelected: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}) {
  return (
    <button 
      onClick={onClick}
      className={`basis-0 bg-white grow h-[116px] min-h-px min-w-px relative rounded-[10px] shrink-0 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'shadow-md' : ''
      }`} 
      data-name="médicament"
    >
      <div 
        aria-hidden="true" 
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[10px] ${
          isSelected ? 'border-[#a69bf8]' : 'border-[#e4e4e4]'
        }`} 
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-[116px] items-center justify-center px-3.5 py-2.5 relative w-full">
          <div className={`basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center ${
            isSelected 
              ? 'bg-clip-text bg-gradient-to-r font-["SF_Pro_Display:Bold",_sans-serif] from-[#a69bf8] to-[#0e7afe]' 
              : 'font-["SF_Pro_Display:Regular",_sans-serif] text-[#636363]'
          }`} style={isSelected ? { WebkitTextFillColor: "transparent" } : {}}>
            {children}
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame6203({ 
  selectedType, 
  onTypeSelect 
}: { 
  selectedType: 'practitioner' | 'personal' | null; 
  onTypeSelect: (type: 'practitioner' | 'personal') => void;
}) {
  return (
    <div className="content-stretch flex gap-1.5 items-start justify-start relative shrink-0 w-full">
      <Medicament 
        isSelected={selectedType === 'practitioner'} 
        onClick={() => onTypeSelect('practitioner')}
      >
        <p className="leading-[normal]">Communication avec un praticien</p>
      </Medicament>
      <Medicament 
        isSelected={selectedType === 'personal'} 
        onClick={() => onTypeSelect('personal')}
      >
        <p className="leading-[normal]">Utilisation personnelle</p>
      </Medicament>
    </div>
  );
}

function Container({ 
  selectedType, 
  onTypeSelect 
}: { 
  selectedType: 'practitioner' | 'personal' | null; 
  onTypeSelect: (type: 'practitioner' | 'personal') => void;
}) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[30px] items-center justify-center left-0 px-[30px] py-0 top-[125px] w-[393px]" data-name="Container">
      <Frame6154 />
      <Frame6203 selectedType={selectedType} onTypeSelect={onTypeSelect} />
    </div>
  );
}

export default function ChoixDeLexport({
  onBack,
  onClose,
  onContinue
}: {
  onBack: () => void;
  onClose: () => void;
  onContinue: (type: 'practitioner' | 'personal') => void;
}) {
  const [selectedType, setSelectedType] = useState<'practitioner' | 'personal' | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      onContinue(selectedType);
    }
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[44px] size-full" data-name="choix de l'export">
      <BgLinear />
      <HomeBar />
      <CtaPrimaire onContinue={handleContinue} isEnabled={selectedType !== null} />
      <Frame6078 onBack={onBack} onClose={onClose} />
      <Container selectedType={selectedType} onTypeSelect={setSelectedType} />
    </div>
  );
}