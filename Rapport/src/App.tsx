import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-qrcykgf9gb";
import { TabType, NavButtonProps, ReportItemProps } from './types';
import { useAppState } from './hooks/useAppState';
import { useTime } from './hooks/useTime';
import { COLORS, MESSAGES } from './utils/constants';
import { formatCountdown, calculateDaysUntil } from './utils/dateUtils';
import ChoixDeLexport from './components/ChoixDeLexport';
import Export2Specialiste from './components/Export2Specialiste';
import Export2SpecialisteNext from './components/Export2SpecialisteNext';
import LoadingScreen from './components/LoadingScreen';
import ChoixDeLexportPerso from './components/ChoixDeLexportPerso';
import ChoixDeLexportPerso2 from './components/ChoixDeLexportPerso2';
import LoadingScreenPersonal from './components/LoadingScreenPersonal';
import Nav from './components/Nav';

// Navigation state type
type CurrentPage = 'dashboard' | 'export-choice' | 'last-appointment' | 'next-appointment' | 'loading' | 'personal-choice' | 'personal-setup' | 'personal-loading';

// Type definitions
interface SVGPaths {
  [key: string]: string;
}

type TabType = 'home' | 'explore' | 'care' | 'profile';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

interface ReportItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}

interface AppHandlers {
  onModifyAppointment: () => void;
  onFilter: () => void;
  onReportClick: (reportTitle: string) => void;
  onCreateReport: () => void;
  onTabChange: (tab: TabType) => void;
}

function BgLinear() {
  return (
    <div className="absolute h-[1416px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
      <div className="absolute inset-[-17.66%_-40.92%_-4.6%_-26.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1732">
          <g id="bg-linear">
            <g filter="url(#filter0_gf_1_559)" id="Ellipse 1434" opacity="0.7">
              <ellipse cx="638" cy="1272.31" fill="var(--fill-0, #D4E7DC)" rx="132" ry="208.815" />
            </g>
            <g filter="url(#filter1_gf_1_559)" id="Ellipse 1435" opacity="0.7">
              <ellipse cx="434" cy="429.567" fill="var(--fill-0, #C4E1FF)" rx="184" ry="179.567" />
            </g>
            <g filter="url(#filter2_gf_1_559)" id="Ellipse 1436" opacity="0.7">
              <ellipse cx="428.5" cy="832.913" fill="var(--fill-0, #DFDBFE)" rx="222.5" ry="210.175" />
            </g>
            <g filter="url(#filter3_fg_1_559)" id="Ellipse 1438" opacity="0.7">
              <ellipse cx="145.358" cy="229.727" fill="var(--fill-0, #FFF6E5)" rx="145.358" ry="229.727" transform="matrix(0.786437 -0.61767 0.390681 0.920526 159 1243.06)" />
            </g>
            <foreignObject height="1867.02" width="1101" x="-13" y="-50">
              <div style={{ backdropFilter: "blur(177px)", clipPath: "url(#bgblur_0_1_559_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <rect data-figma-bg-blur-radius="354" fill="var(--fill-0, white)" fillOpacity="0.1" height="1159.02" id="Rectangle 6" width="393" x="341" y="304" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="917.63" id="filter0_gf_1_559" width="764" x="256" y="813.494">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_559">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_559" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="859.134" id="filter1_gf_1_559" width="868" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_559">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_559" stdDeviation="125" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="760.35" id="filter2_gf_1_559" width="785" x="36" y="452.738">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_559">
                <feMergeNode in="displacedImage" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_1_559" stdDeviation="85" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="659.599" id="filter3_fg_1_559" width="490.688" x="117.721" y="1034.95">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_559" stdDeviation="25" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
              <feDisplacementMap height="100%" in="effect1_foregroundBlur_1_559" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect2_texture_1_559">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <clipPath id="bgblur_0_1_559_clip_path" transform="translate(13 50)">
              <rect height="1159.02" width="393" x="341" y="304" />
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
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[30px] pt-[21px] px-0 relative shrink-0 w-full" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[20.991px] ml-0 mt-0 relative w-[77px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 21">
        <g id="Group 7">
          <path d={svgPaths.p152f4700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p20339a80} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p353d400} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p29985900} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p66fb400} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p273b1100} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p1f33adc0} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group7 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[393px]" data-name="progress-bar">
      <StatusBarIPhone />
      <Group8 />
    </div>
  );
}

function Frame6130() {
  return (
    <div className="bg-gradient-to-r from-[#a69bf8] h-[55px] relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[19px] rounded-tr-[19px] to-[#0e7afe] w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-[55px] items-center justify-center pb-[38px] pt-[18px] px-2.5 relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative text-[12px] text-nowrap text-white">
                <p className="leading-[1.2] whitespace-pre">Rapport en cours de préparation...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6150() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-center leading-[0] not-italic relative shrink-0 w-full">
      <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[20px] to-[#0e7afe] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.2]">
          <span>{`Rendez-vous le 14/12/2025 `}</span>
          <span className="text-[#212121]">avec votre Cardiologue</span>
        </p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#606060] text-[14px] w-full">
        <p className="leading-[1.2]">{`Votre rapport est en préparation et vous sera envoyé par mail 48h avant. `}</p>
      </div>
    </div>
  );
}

function Frame6194() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-[7px] relative rounded-[13px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#a69bf8] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.2] whitespace-pre">J-10</p>
      </div>
    </div>
  );
}

function Frame6193({ onModifyAppointment }: { onModifyAppointment: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <button 
        onClick={onModifyAppointment}
        className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-center text-nowrap hover:text-[#a69bf8] transition-colors cursor-pointer"
      >
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">Modifier mon rendez-vous</p>
      </button>
      <Frame6194 />
    </div>
  );
}

function Frame6192({ onModifyAppointment }: { onModifyAppointment: () => void }) {
  return (
    <div className="bg-white mb-[-10px] relative rounded-[20px] shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[20px] relative w-full">
          <Frame6150 />
          <Frame6193 onModifyAppointment={onModifyAppointment} />
        </div>
      </div>
    </div>
  );
}

function Frame6206({ onModifyAppointment }: { onModifyAppointment: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start mb-[-23px] pb-2.5 pt-0 px-0 relative shrink-0 w-full">
      <Frame6192 onModifyAppointment={onModifyAppointment} />
    </div>
  );
}

function Frame6207({ onModifyAppointment }: { onModifyAppointment: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[23px] pt-0 px-0 relative shrink-0 w-[361px]">
      <div className="flex items-center justify-center mb-[-23px] relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <Frame6130 />
        </div>
      </div>
      <Frame6206 onModifyAppointment={onModifyAppointment} />
    </div>
  );
}

function Frame6174({ onModifyAppointment }: { onModifyAppointment: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-black" style={{ width: "min-content" }}>
        <p className="leading-[1.1]">Votre prochain rendez-vous</p>
      </div>
      <Frame6207 onModifyAppointment={onModifyAppointment} />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icons">
          <path d={svgPaths.p39a28c00} id="Vector" stroke="var(--stroke-0, #7A7A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame6199({ onFilter }: { onFilter: () => void }) {
  return (
    <button 
      onClick={onFilter}
      className="content-stretch flex items-center justify-between relative shrink-0 w-[52.5px] hover:opacity-70 transition-opacity cursor-pointer"
    >
      <Icons />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Filtrer</p>
      </div>
    </button>
  );
}

function Frame6198({ onFilter }: { onFilter: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <p className="leading-[1.1] whitespace-pre">Vos rapports exportés (3)</p>
      </div>
      <Frame6199 onFilter={onFilter} />
    </div>
  );
}

function ReportItem({ 
  icon, 
  title, 
  subtitle, 
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string; 
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="bg-white relative rounded-[20px] shrink-0 w-full hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-end p-[16px] relative w-full">
          {icon}
          <div className="basis-0 content-stretch flex flex-col gap-[5px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
            <div className="font-['SF_Pro_Display:Semibold',_sans-serif] min-w-full relative shrink-0 text-[#212121] text-[16px]" style={{ width: "min-content" }}>
              <p className="leading-[normal]">{title}</p>
            </div>
            <div className="font-['SF_Pro_Display:Regular',_sans-serif] opacity-80 relative shrink-0 text-[#767676] text-[12px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="h-[9px] relative w-[4.5px]" data-name="Vector">
                <div className="absolute inset-[-6.25%_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
                    <path d="M5.5 10L1 5.5L5.5 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 56" opacity="0.6">
          <rect fill="url(#paint0_linear_1_514)" height="38" rx="19" width="38" />
          <path d={svgPaths.p1feb5500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.36843" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_514" x1="0" x2="38" y1="19" y2="19">
            <stop stopColor="#A69BF8" />
            <stop offset="1" stopColor="#0E7AFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 56" opacity="0.6">
          <rect fill="url(#paint0_linear_1_532)" height="38" rx="19" width="38" />
          <path d={svgPaths.p2b4bac80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_532" x1="0" x2="38" y1="19" y2="19">
            <stop stopColor="#A69BF8" />
            <stop offset="1" stopColor="#0E7AFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame6197({ onReportClick }: { onReportClick: (reportTitle: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
      <ReportItem
        icon={<Frame56 />}
        title="Rapport du 11/11/2025"
        subtitle="Avec votre médecin généraliste"
        onClick={() => onReportClick("Rapport du 11/11/2025")}
      />
      <ReportItem
        icon={<Frame58 />}
        title="Rapport du 11/10/2025"
        subtitle="Avec votre cardiologue"
        onClick={() => onReportClick("Rapport du 11/10/2025")}
      />
      <ReportItem
        icon={<Frame58 />}
        title="Rapport du 11/09/2025"
        subtitle="Avec votre cardiologue"
        onClick={() => onReportClick("Rapport du 11/09/2025")}
      />
    </div>
  );
}

function Frame6196({ onFilter, onReportClick }: { onFilter: () => void; onReportClick: (reportTitle: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <Frame6198 onFilter={onFilter} />
      <Frame6197 onReportClick={onReportClick} />
    </div>
  );
}

function Frame6200({ onModifyAppointment, onFilter, onReportClick }: { 
  onModifyAppointment: () => void; 
  onFilter: () => void; 
  onReportClick: (reportTitle: string) => void 
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-8 items-start justify-start left-1/2 top-[129px] translate-x-[-50%] w-[361px]">
      <Frame6174 onModifyAppointment={onModifyAppointment} />
      <Frame6196 onFilter={onFilter} onReportClick={onReportClick} />
    </div>
  );
}

function CtaPrimaire({ onCreateReport }: { onCreateReport: () => void }) {
  return (
    <button 
      onClick={onCreateReport}
      className="absolute bg-gradient-to-r box-border content-stretch flex from-[#a69bf8] gap-2.5 items-center justify-center left-1/2 px-5 py-4 rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)] to-[#0e7afe] bottom-[140px] translate-x-[-50%] w-[361px] hover:shadow-lg transition-shadow cursor-pointer z-10" 
      data-name="CTA Primaire"
    >
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Créer un nouveau rapport</p>
      </div>
    </button>
  );
}

function NavButton({ 
  icon, 
  label, 
  isActive = false, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  isActive?: boolean; 
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] cursor-pointer"
    >
      {icon}
      <div className={`font-['SF_Pro_Display:${isActive ? 'Regular' : 'Medium'}',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap`}>
        <p className={`leading-[1.2] whitespace-pre ${isActive ? 'text-black' : 'text-[rgba(0,0,0,0.35)]'}`}>{label}</p>
      </div>
    </button>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-6" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p3039c600} id="Vector" stroke="var(--stroke-0, #A19F9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 22V12H15V22" id="Vector_2" stroke="var(--stroke-0, #A19F9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Compass() {
  return (
    <div className="relative shrink-0 size-6" data-name="compass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="compass">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3dd108f1} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[30.5px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="plus">
          <path d="M15.25 6.35422V24.1459" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M6.35437 15.25H24.146" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-6" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart">
          <path d={svgPaths.p3ee62280} id="Vector" stroke="var(--stroke-0, #A19F9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-6" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <path d={svgPaths.p82039c0} id="Vector" stroke="var(--stroke-0, #A19F9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #A19F9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6106({ activeTab, onTabChange, onCreateReport }: { 
  activeTab: string; 
  onTabChange: (tab: string) => void; 
  onCreateReport: () => void 
}) {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
      <NavButton
        icon={<Home />}
        label="Home"
        onClick={() => onTabChange('home')}
      />
      <NavButton
        icon={<Compass />}
        label="Explore"
        isActive={activeTab === 'explore'}
        onClick={() => onTabChange('explore')}
      />
      <button 
        onClick={onCreateReport}
        className="bg-black box-border content-stretch flex gap-[6.1px] items-center justify-center p-[23.18px] relative rounded-[300px] shrink-0 size-[61px] hover:scale-105 transition-transform cursor-pointer"
      >
        <Plus />
      </button>
      <NavButton
        icon={<Heart />}
        label="Care"
        onClick={() => onTabChange('care')}
      />
      <NavButton
        icon={<User />}
        label="Loris"
        onClick={() => onTabChange('profile')}
      />
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

function Nav({ activeTab, onTabChange, onCreateReport }: { 
  activeTab: string; 
  onTabChange: (tab: string) => void; 
  onCreateReport: () => void 
}) {
  return (
    <div className="absolute bg-[#faf9f9] bottom-0 h-[120px] left-1/2 translate-x-[-50%] w-[393px]" data-name="nav">
      <div className="box-border content-stretch flex h-[120px] items-start justify-between overflow-clip pb-[26px] pt-[15px] px-7 relative w-[393px]">
        <Frame6106 activeTab={activeTab} onTabChange={onTabChange} onCreateReport={onCreateReport} />
        <HomeBar />
      </div>
      <div aria-hidden="true" className="absolute border-[#d7d7d7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');
  const appState = useAppState();

  const handleNavigateToExportChoice = () => {
    setCurrentPage('export-choice');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleExportContinue = (type: 'practitioner' | 'personal') => {
    if (type === 'practitioner') {
      setCurrentPage('last-appointment');
    } else {
      setCurrentPage('personal-choice');
    }
  };

  const handleLastAppointmentContinue = (data: { doctor: string; date: string }) => {
    console.log('Last appointment data:', data);
    setCurrentPage('next-appointment');
  };

  const handleNextAppointmentContinue = (data: { date: string }) => {
    console.log('Next appointment data:', data);
    setCurrentPage('loading');
  };

  const handleLoadingComplete = () => {
    setCurrentPage('dashboard');
  };

  const handleBackFromLastAppointment = () => {
    setCurrentPage('export-choice');
  };

  const handleBackFromNextAppointment = () => {
    setCurrentPage('last-appointment');
  };

  // Personal flow handlers
  const handlePersonalChoiceContinue = () => {
    setCurrentPage('personal-setup');
  };

  const handlePersonalSetupContinue = () => {
    setCurrentPage('personal-loading');
  };

  const handlePersonalLoadingComplete = () => {
    setCurrentPage('dashboard');
  };

  const handleBackFromPersonalChoice = () => {
    setCurrentPage('export-choice');
  };

  const handleBackFromPersonalSetup = () => {
    setCurrentPage('personal-choice');
  };

  // Override the create report handler to navigate to export choice
  const handleCreateReport = () => {
    setCurrentPage('export-choice');
  };

  // Separate handler for the navigation plus button (should not navigate)
  const handleNavPlusClick = () => {
    // This can show a menu or do nothing - it should not navigate to export choice
    console.log('Navigation plus button clicked');
  };

  const handleCloseExport = () => {
    setCurrentPage('dashboard');
  };
  
  if (currentPage === 'export-choice') {
    return (
      <ChoixDeLexport
        onBack={handleBackToDashboard}
        onClose={handleCloseExport}
        onContinue={handleExportContinue}
      />
    );
  }

  if (currentPage === 'last-appointment') {
    return (
      <Export2Specialiste
        onBack={handleBackFromLastAppointment}
        onClose={handleCloseExport}
        onContinue={handleLastAppointmentContinue}
      />
    );
  }

  if (currentPage === 'next-appointment') {
    return (
      <Export2SpecialisteNext
        onBack={handleBackFromNextAppointment}
        onClose={handleCloseExport}
        onContinue={handleNextAppointmentContinue}
      />
    );
  }

  if (currentPage === 'loading') {
    return (
      <LoadingScreen
        onComplete={handleLoadingComplete}
      />
    );
  }

  if (currentPage === 'personal-choice') {
    return (
      <ChoixDeLexportPerso
        onBack={handleBackFromPersonalChoice}
        onClose={handleCloseExport}
        onContinue={handlePersonalChoiceContinue}
      />
    );
  }

  if (currentPage === 'personal-setup') {
    return (
      <ChoixDeLexportPerso2
        onBack={handleBackFromPersonalSetup}
        onClose={handleCloseExport}
        onContinue={handlePersonalSetupContinue}
      />
    );
  }

  if (currentPage === 'personal-loading') {
    return (
      <LoadingScreenPersonal
        onComplete={handlePersonalLoadingComplete}
      />
    );
  }

  // Dashboard page
  return (
    <div className="bg-white flex flex-col relative rounded-[44px] size-full overflow-hidden" data-name="Rapport">
      <BgLinear />
      <ProgressBar />
      <div className="absolute h-[338px] left-[277px] top-[-15px] w-[264px]">
        <div className="absolute inset-[-73.96%_-94.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 764 838">
            <g filter="url(#filter0_gf_1_517)" id="Ellipse 1437" opacity="0.7">
              <ellipse cx="382" cy="419" fill="var(--fill-0, #FFD1B7)" rx="132" ry="169" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="838" id="filter0_gf_1_517" width="764" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_517">
                  <feMergeNode in="displacedImage" />
                </feMerge>
                <feGaussianBlur result="effect2_foregroundBlur_1_517" stdDeviation="125" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-[180px]">
        <div className="min-h-[900px] pb-[20px]">
          <Frame6200 
            onModifyAppointment={appState.handleModifyAppointment}
            onFilter={appState.handleFilter}
            onReportClick={appState.handleReportClick}
          />
        </div>
      </div>
      
      {/* Fixed Create Report Button */}
      <button 
        onClick={handleCreateReport}
        className="fixed bg-gradient-to-r box-border content-stretch flex from-[#a69bf8] gap-2.5 items-center justify-center left-1/2 px-5 py-4 rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)] to-[#0e7afe] bottom-[130px] translate-x-[-50%] w-[361px] hover:shadow-lg transition-shadow cursor-pointer z-20" 
        data-name="CTA Primaire"
      >
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre">Créer un nouveau rapport</p>
        </div>
      </button>
      
      {/* Fixed Navigation */}
      <Nav 
        activeTab={appState.activeTab} 
        onTabChange={appState.handleTabChange} 
        onCreateReport={handleNavPlusClick} 
      />
    </div>
  );
}