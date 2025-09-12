import { useState, useRef, useCallback, useEffect } from 'react';
import svgPaths from "../imports/svg-9lf3uce22o";

interface StressLevelScreenProps {
  initialValue: number;
  onBack: () => void;
  onContinue: (value: number) => void;
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
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
        <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
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
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center leading-[0] not-italic px-[30px] py-10 relative w-full">
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[26px] text-black w-full">
            <p className="leading-[1.1]">Comment évalueriez-vous votre niveau de stress aujourd'hui ?</p>
          </div>
          <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#7a7a7a] text-[14px] w-full">
            <p className="leading-[normal]">Glissez le cercle vers votre réponse et relâchez pour confirmer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StressSliderProps {
  value: number;
  onChange: (value: number) => void;
}

function StressSlider({ value, onChange }: StressSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateValue = useCallback((clientY: number) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const y = clientY - rect.top;
    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
    
    // Invert because top = 0% (no stress), bottom = 100% (extreme stress)
    const newValue = percentage;
    onChange(newValue);
  }, [onChange]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateValue(e.clientY);
  }, [updateValue]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateValue(e.touches[0].clientY);
  }, [updateValue]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateValue(e.clientY);
  }, [isDragging, updateValue]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateValue(e.touches[0].clientY);
  }, [isDragging, updateValue]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  const sliderHeight = 327;
  const handlePosition = (value / 100) * sliderHeight;

  return (
    <div className="flex h-[327px] items-center justify-center w-[38px]">
      <div className="flex-none rotate-[90deg]">
        <div 
          ref={sliderRef}
          className="bg-gradient-to-r from-[#62ffa4] h-[38px] rounded-[80px] to-[#ff5d5d] via-[#ffb48b] via-[51.923%] w-[327px] cursor-pointer"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
      </div>
      
      {/* Slider handle */}
      <div 
        className="absolute flex h-[32px] items-center justify-center w-[32px] cursor-pointer"
        style={{ top: `${handlePosition}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex-none rotate-[90deg]">
          <div className="bg-white rounded-[16px] size-8 shadow-lg border border-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function StressLevelScreen({ initialValue, onBack, onContinue }: StressLevelScreenProps) {
  const [stressValue, setStressValue] = useState(initialValue);

  const handleContinue = () => {
    onContinue(stressValue);
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[44px] size-full" data-name="Logging1-ressenti">
      <BgLinear />
      <HomeBar />
      
      <div className="absolute content-stretch flex flex-col items-start justify-start left-0 top-0 w-[393px]">
        <StatusBar />
        <ProgressBar onBack={onBack} />
        <div className="content-stretch flex flex-col gap-10 items-center justify-start relative shrink-0 w-full">
          <Header />
        </div>
      </div>
      
      <div className="absolute left-[177px] top-[330px]">
        <StressSlider value={stressValue} onChange={setStressValue} />
      </div>
      
      <div className="absolute font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] left-[196px] not-italic text-[14px] text-black text-center text-nowrap top-[296px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Aucun stress</p>
      </div>
      
      <div className="absolute font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] left-[195px] not-italic text-[14px] text-black text-center text-nowrap top-[673px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Stress extrême</p>
      </div>
      
      <div className="absolute box-border content-stretch flex flex-col gap-2 items-center justify-center left-[-1px] p-[16px] top-[747px] w-[393px]">
        <button 
          onClick={handleContinue}
          className="bg-[#212121] h-[52px] relative rounded-[20px] shrink-0 w-full" 
          data-name="CTA Primaire"
        >
          <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex gap-2.5 h-[52px] items-center justify-center p-[20px] relative w-full">
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[normal] whitespace-pre">Terminer</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}