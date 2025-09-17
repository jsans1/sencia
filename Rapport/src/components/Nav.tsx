import React from "react";
import svgPaths from "../imports/svg-qrcykgf9gb";

type TabType = 'home' | 'explore' | 'care' | 'profile';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

function NavButton({ 
  icon, 
  label, 
  isActive = false, 
  onClick 
}: NavButtonProps) {
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
          <g id="🔨Background">
            <g id="background-secondary"></g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p376c5d00} fill="var(--fill-0, #212121)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

export default function Nav({ activeTab, onTabChange, onCreateReport }: { 
  activeTab: string; 
  onTabChange: (tab: string) => void; 
  onCreateReport: () => void 
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white w-[393px] mx-auto rounded-bl-[44px] rounded-br-[44px] z-30" data-name="Nav">
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="box-border content-stretch flex flex-col gap-[27px] h-[113px] items-center justify-start pb-0 pt-[23.18px] px-[22px] relative w-full">
          <Frame6106 activeTab={activeTab} onTabChange={onTabChange} onCreateReport={onCreateReport} />
        </div>
      </div>
      <HomeBar />
    </div>
  );
}