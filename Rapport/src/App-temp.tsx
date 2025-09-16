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
import Nav from './components/Nav';

// Navigation state type
type CurrentPage = 'dashboard' | 'export-choice' | 'last-appointment' | 'next-appointment' | 'loading';

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');
  const appState = useAppState();
  
  // Create report handler that opens export choice
  const handleCreateReport = () => {
    setCurrentPage('export-choice');
  };

  // Navigation plus button handler
  const handleNavPlusClick = () => {
    handleCreateReport();
  };

  // Handler for going back to dashboard from export choice
  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  // Handler for starting export to specialist flow
  const handleExportToSpecialist = () => {
    setCurrentPage('last-appointment');
  };

  // Handler for continuing from last appointment to next appointment
  const handleContinueToNextAppointment = (data: { doctor: string; date: string }) => {
    console.log('Last appointment data:', data);
    setCurrentPage('next-appointment');
  };

  // Handler for continuing from next appointment to loading
  const handleProgramReport = (data: { date: string }) => {
    console.log('Next appointment data:', data);
    setCurrentPage('loading');
  };

  // Handler for returning to dashboard from loading
  const handleReturnToDashboard = () => {
    setCurrentPage('dashboard');
  };

  // Export Choice page
  if (currentPage === 'export-choice') {
    return (
      <ChoixDeLexport 
        onBack={handleBackToDashboard}
        onExportToSpecialist={handleExportToSpecialist}
      />
    );
  }

  // Last Appointment page
  if (currentPage === 'last-appointment') {
    return (
      <Export2Specialiste 
        onBack={handleBackToDashboard}
        onClose={handleBackToDashboard}
        onContinue={handleContinueToNextAppointment}
      />
    );
  }

  // Next Appointment page
  if (currentPage === 'next-appointment') {
    return (
      <Export2SpecialisteNext 
        onBack={() => setCurrentPage('last-appointment')}
        onClose={handleBackToDashboard}
        onContinue={handleProgramReport}
      />
    );
  }

  // Loading page
  if (currentPage === 'loading') {
    return (
      <LoadingScreen 
        onComplete={handleReturnToDashboard}
      />
    );
  }

  // Dashboard - Fixed layout with proper nav
  return (
    <div className="bg-white flex flex-col h-full relative rounded-[44px] w-[393px] mx-auto overflow-hidden" data-name="Rapport">
      <BgLinear />
      
      {/* Status bar and logo - fixed at top */}
      <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[393px] z-10" data-name="progress-bar">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[30px] pt-[21px] px-0 relative shrink-0 w-full" data-name="Status Bar - iPhone">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
            {/* Time */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
                  <div className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap">
                    <p className="leading-[22px] whitespace-pre">{useTime()}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dynamic Island Spacer */}
            <div className="h-2.5 shrink-0 w-[124px]" data-name="Dynamic Island spacer" />
            
            {/* Levels (Battery, Wifi, etc.) */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-1.5 pr-4 py-0 relative w-full">
                  {/* Battery, Wifi icons etc. */}
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
        
        {/* Sencia Logo */}
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
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
        </div>
      </div>

      {/* Background overlay ellipse */}
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
      
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto pt-[129px] pb-[180px]">
        <div className="px-4">
          {/* Main content will go here */}
          <div className="text-center py-8">
            <h1 className="text-2xl mb-4">Dashboard Content</h1>
            <p>This is where the main dashboard content would go.</p>
          </div>
        </div>
      </div>

      {/* Create Report Button - Fixed position */}
      <button 
        onClick={handleCreateReport}
        className="fixed bg-gradient-to-r box-border content-stretch flex from-[#a69bf8] gap-2.5 items-center justify-center left-1/2 px-5 py-4 rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)] to-[#0e7afe] bottom-[130px] translate-x-[-50%] w-[361px] hover:shadow-lg transition-shadow cursor-pointer z-20" 
        data-name="CTA Primaire"
      >
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre">Créer un nouveau rapport</p>
        </div>
      </button>

      {/* Navigation - Fixed at bottom */}
      <Nav 
        activeTab={appState.activeTab} 
        onTabChange={appState.handleTabChange} 
        onCreateReport={handleNavPlusClick} 
      />
    </div>
  );
}