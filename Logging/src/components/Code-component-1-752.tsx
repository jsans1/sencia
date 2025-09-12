import { useState } from 'react';
import svgPaths from "../imports/svg-ro456j84dg";

interface BloodPressureScreenProps {
  initialData: { systolic: string; diastolic: string; notes: string };
  onBack: () => void;
  onContinue: (data: { systolic: string; diastolic: string; notes: string }) => void;
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
        <p className="leading-[1.1]">Quelle est votre dernière mesure de tension artérielle ?</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#646464] text-[14px] w-full">
        <p className="leading-[normal]">Entrez la dernière mesure que vous avez prise. Une prise actuelle permet des analyses plus exactes.</p>
      </div>
    </div>
  );
}

interface BloodPressureInputsProps {
  systolic: string;
  diastolic: string;
  onSystolicChange: (value: string) => void;
  onDiastolicChange: (value: string) => void;
}

function BloodPressureInputs({ systolic, diastolic, onSystolicChange, onDiastolicChange }: BloodPressureInputsProps) {
  return (
    <div className="bg-[#fffffe] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start p-[20px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap">
              <p className="leading-[normal] whitespace-pre">Systolique</p>
            </div>
            <div className="relative shrink-0 w-[120px]">
              <div className="bg-white border border-[rgba(228,228,228,0.55)] rounded-[84px] relative w-full">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-start px-4 py-2 relative w-full">
                    <input
                      type="text"
                      value={systolic}
                      onChange={(e) => onSystolicChange(e.target.value)}
                      placeholder="ex : 140 mmHg"
                      className="w-full bg-transparent font-['SF_Pro_Display:Regular',_sans-serif] text-[14px] text-black placeholder-[#bcbcbc] outline-none leading-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 1">
                    <line id="Line 7" stroke="var(--stroke-0, #BCBCBC)" strokeWidth="0.5" x2="321" y1="0.75" y2="0.75" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap">
              <p className="leading-[normal] whitespace-pre">Diastolique</p>
            </div>
            <div className="relative shrink-0 w-[120px]">
              <div className="bg-white border border-[rgba(228,228,228,0.55)] rounded-[84px] relative w-full">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-start px-4 py-2 relative w-full">
                    <input
                      type="text"
                      value={diastolic}
                      onChange={(e) => onDiastolicChange(e.target.value)}
                      placeholder="ex : 90 mmHg"
                      className="w-full bg-transparent font-['SF_Pro_Display:Regular',_sans-serif] text-[14px] text-black placeholder-[#bcbcbc] outline-none leading-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NotesInputProps {
  notes: string;
  onNotesChange: (value: string) => void;
}

function NotesInput({ notes, onNotesChange }: NotesInputProps) {
  return (
    <div className="bg-[#fffffe] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start p-[20px] relative w-full">
          <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[18px]" data-name="file-text">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g id="file-text">
                  <path d={svgPaths.p1a3bbb00} id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                  <path d="M10.5 1.5V6H15" id="Vector_2" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                  <path d="M12 9.75H6" id="Vector_3" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                  <path d="M12 12.75H6" id="Vector_4" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                  <path d="M7.5 6.75H6.75H6" id="Vector_5" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                </g>
              </svg>
            </div>
            <textarea
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
              placeholder="Notes..."
              className="w-full bg-transparent font-['SF_Pro_Display:Regular',_sans-serif] text-[18px] text-black placeholder-[#a0a0a0] outline-none resize-none min-h-[24px]"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BloodPressureScreen({ initialData, onBack, onContinue }: BloodPressureScreenProps) {
  const [systolic, setSystolic] = useState(initialData.systolic);
  const [diastolic, setDiastolic] = useState(initialData.diastolic);
  const [notes, setNotes] = useState(initialData.notes);

  const handleContinue = () => {
    onContinue({ systolic, diastolic, notes });
  };

  return (
    <div className="bg-white relative size-full" data-name="Logging1-ressenti">
      <BgLinear />
      <HomeBar />
      
      <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-0 translate-x-[-50%] w-[393px]">
        <StatusBar />
        <ProgressBar onBack={onBack} />
        <div className="box-border content-stretch flex flex-col gap-[50px] items-center justify-center px-[30px] py-10 relative shrink-0 w-[393px]">
          <Header />
          <div className="box-border content-stretch flex flex-col gap-[18px] items-center justify-center px-4 py-0 relative shrink-0 w-[393px]">
            <BloodPressureInputs
              systolic={systolic}
              diastolic={diastolic}
              onSystolicChange={setSystolic}
              onDiastolicChange={setDiastolic}
            />
            <NotesInput notes={notes} onNotesChange={setNotes} />
          </div>
        </div>
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
                <p className="leading-[normal] whitespace-pre">Continuer</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}