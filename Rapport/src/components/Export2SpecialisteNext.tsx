import { useState } from 'react';
import svgPaths from "../imports/svg-ejy37zvlt";
import { useTime } from '../hooks/useTime';
import CalendarPicker from './Calendar';

interface Export2SpecialisteNextProps {
  onBack: () => void;
  onClose: () => void;
  onContinue: (data: { date: string }) => void;
}

function BgLinear() {
  return (
    <div className="absolute h-[1040.9px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
      <div className="absolute inset-[-24.02%_-40.92%_-10.96%_-26.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1405">
          <g id="bg-linear" opacity="0.9">
            <g filter="url(#filter0_gf_1_1322)" id="Ellipse 1434" opacity="0.7">
              <ellipse cx="638" cy="1001.5" fill="var(--fill-0, #D4E7DC)" rx="132" ry="153.5" />
            </g>
            <g filter="url(#filter1_gf_1_1322)" id="Ellipse 1435" opacity="0.7">
              <ellipse cx="434" cy="382" fill="var(--fill-0, #C4E1FF)" rx="184" ry="132" />
            </g>
            <g filter="url(#filter2_gf_1_1322)" id="Ellipse 1436" opacity="0.7">
              <ellipse cx="428.5" cy="678.5" fill="var(--fill-0, #DFDBFE)" rx="222.5" ry="154.5" />
            </g>
            <g filter="url(#filter3_fg_1_1322)" id="Ellipse 1438" opacity="0.7">
              <ellipse cx="363.065" cy="1069.45" fill="var(--fill-0, #FFF6E5)" rx="132" ry="179.5" transform="rotate(-30 363.065 1069.45)" />
            </g>
            <foreignObject height="1560" width="1101" x="-13" y="-61">
              <div style={{ backdropFilter: "blur(177px)", clipPath: "url(#bgblur_0_1_1322_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <rect data-figma-bg-blur-radius="354" fill="var(--fill-0, white)" fillOpacity="0.1" height="852" id="Rectangle 6" width="393" x="341" y="293" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="807" id="filter0_gf_1_1322" width="764" x="256" y="598">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_1322">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_1322" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="764" id="filter1_gf_1_1322" width="868" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_1322">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_1322" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="649" id="filter2_gf_1_1322" width="785" x="36" y="354">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_1322">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_1322" stdDeviation="85" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="537.852" id="filter3_fg_1_1322" width="490.688" x="117.721" y="800.526">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_1322" stdDeviation="25" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="effect1_foregroundBlur_1_1322" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect2_texture_1_1322">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <clipPath id="bgblur_0_1_1322_clip_path" transform="translate(13 61)">
              <rect height="852" width="393" x="341" y="293" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
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

function StatusBarIPhone() {
  return (
    <div className="box-border content-stretch flex flex-col h-[50px] items-start justify-start pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Status Bar - iPhone">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
        <Time />
        <DynamicIslandSpacer />
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
      </div>
    </div>
  );
}

function ChevronLeft({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[18px] cursor-pointer" data-name="chevron-left">
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
      <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function X({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[18px] cursor-pointer" data-name="x">
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
    <div className="absolute content-stretch flex flex-col items-start justify-start left-0 top-0 w-[393px]">
      <StatusBarIPhone />
      <ProgressBar onBack={onBack} onClose={onClose} />
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
          <path clipRule="evenodd" d={svgPaths.p376c5d00} fill="var(--fill-0, #212121)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function CtaPrimaire({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2 items-center justify-center left-0 p-[16px] top-[756px] w-[393px]">
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`bg-gradient-to-r box-border content-stretch flex from-[#a69bf8] gap-2.5 items-center justify-center px-5 py-4 relative rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)] shrink-0 to-[#0e7afe] w-[361px] transition-opacity ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 cursor-pointer'
        }`}
        data-name="CTA Primaire"
      >
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre">Programmer mon rapport</p>
        </div>
      </button>
    </div>
  );
}

function Frame6153() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[26px] text-black w-full">
        <p className="leading-[1.1]">
          <span>{`Votre `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#a69bf8] to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
            prochain
          </span>
          <span>{` rendez-vous avec votre cardiologue`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame6154() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-[333px]">
      <Frame6153 />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] h-[34px] leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] w-[333px]">
        <p className="leading-[normal]">Entrez la date de ce prochain rendez-vous et vous recevrez un rapport 48h avant.</p>
      </div>
    </div>
  );
}

function DateSelector({ day, month, year, onDateChange }: { 
  day: string; 
  month: string; 
  year: string; 
  onDateChange: (field: 'day' | 'month' | 'year', value: string) => void 
}) {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <div className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[41px]">
        <input
          type="text"
          value={day}
          onChange={(e) => onDateChange('day', e.target.value)}
          className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] bg-transparent border-none outline-none text-[18px] text-black text-center w-full"
          placeholder="30"
          maxLength={2}
        />
      </div>
      <div className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
        <input
          type="text"
          value={month}
          onChange={(e) => onDateChange('month', e.target.value)}
          className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] bg-transparent border-none outline-none text-[18px] text-black text-center w-full"
          placeholder="09"
          maxLength={2}
        />
      </div>
      <div className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
        <input
          type="text"
          value={year}
          onChange={(e) => onDateChange('year', e.target.value)}
          className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] bg-transparent border-none outline-none text-[18px] text-black text-center w-full"
          placeholder="2025"
          maxLength={4}
        />
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d={svgPaths.p32f12c00} id="Vector" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 2V6" id="Vector_3" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DropdownContainer({ day, month, year, onDateChange }: { 
  day: string; 
  month: string; 
  year: string; 
  onDateChange: (field: 'day' | 'month' | 'year', value: string) => void 
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleCalendarChange = (dateString: string) => {
    const [d, m, y] = dateString.split('/');
    onDateChange('day', d);
    onDateChange('month', m);
    onDateChange('year', y);
    setShowCalendar(false);
  };

  return (
    <div className="relative bg-white h-[70px] rounded-[16px] shrink-0 w-full" data-name="Dropdown Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[70px] items-center justify-between p-[16px] relative w-full">
          <DateSelector day={day} month={month} year={year} onDateChange={onDateChange} />
          <button onClick={() => setShowCalendar(!showCalendar)} className="cursor-pointer">
            <CalendarIcon />
          </button>
        </div>
      </div>
      
      {showCalendar && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50">
          <CalendarPicker 
            value={`${day}/${month}/${year}`}
            onChange={handleCalendarChange}
            onClose={() => setShowCalendar(false)}
          />
        </div>
      )}
    </div>
  );
}

function Frame6201({ day, month, year, onDateChange }: { 
  day: string; 
  month: string; 
  year: string; 
  onDateChange: (field: 'day' | 'month' | 'year', value: string) => void 
}) {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[1.2]">Entrez la date de votre prochain rendez-vous</p>
      </div>
      <DropdownContainer day={day} month={month} year={year} onDateChange={onDateChange} />
    </div>
  );
}

function Container({ day, month, year, onDateChange }: {
  day: string;
  month: string;
  year: string;
  onDateChange: (field: 'day' | 'month' | 'year', value: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame6201 day={day} month={month} year={year} onDateChange={onDateChange} />
    </div>
  );
}

function Container1({ day, month, year, onDateChange }: {
  day: string;
  month: string;
  year: string;
  onDateChange: (field: 'day' | 'month' | 'year', value: string) => void;
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-center px-[30px] py-0 relative w-full">
          <Container day={day} month={month} year={year} onDateChange={onDateChange} />
        </div>
      </div>
    </div>
  );
}

function Frame6200({ day, month, year, onDateChange }: {
  day: string;
  month: string;
  year: string;
  onDateChange: (field: 'day' | 'month' | 'year', value: string) => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-10 items-center justify-start left-0 top-[115px] w-[393px]">
      <Frame6154 />
      <Container1 day={day} month={month} year={year} onDateChange={onDateChange} />
    </div>
  );
}

export default function Export2SpecialisteNext({ onBack, onClose, onContinue }: Export2SpecialisteNextProps) {
  const [day, setDay] = useState("30");
  const [month, setMonth] = useState("09");
  const [year, setYear] = useState("2025");

  const handleDateChange = (field: 'day' | 'month' | 'year', value: string) => {
    if (field === 'day') setDay(value);
    else if (field === 'month') setMonth(value);
    else if (field === 'year') setYear(value);
  };

  const handleContinue = () => {
    const dateString = `${day}/${month}/${year}`;
    onContinue({ date: dateString });
  };

  const isFormValid = day && month && year;

  return (
    <div className="bg-white overflow-clip relative rounded-[44px] size-full" data-name="Export2 - Spécialiste">
      <BgLinear />
      <Frame6078 onBack={onBack} onClose={onClose} />
      <HomeBar />
      <CtaPrimaire onClick={handleContinue} disabled={!isFormValid} />
      <Frame6200 day={day} month={month} year={year} onDateChange={handleDateChange} />
    </div>
  );
}