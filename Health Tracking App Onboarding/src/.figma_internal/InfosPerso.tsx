import { imgBgLinear, imgHomeBar, imgBattery, imgCellularConnection, imgWifi, imgGroup7, imgChevronLeft, imgX, imgIcon, imgCalendar, imgPlusCircle, imgEllipse1437 } from "./svg-4mtuv";

function BgLinear() {
  return (
    <div className="absolute h-[1040.9px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
      <div className="absolute inset-[-24.02%_-40.92%_-10.96%_-26.02%]">
        <img className="block max-w-none size-full" src={imgBgLinear} />
      </div>
    </div>
  );
}

function HomeBar() {
  return (
    <div className="absolute bottom-0 h-[27px] left-0 w-[393px]" data-name="Home Bar">
      <img className="block max-w-none size-full" src={imgHomeBar} />
    </div>
  );
}

function CtaPrimaire() {
  return (
    <div className="absolute bg-[#212121] box-border content-stretch flex gap-2.5 items-center justify-center left-4 px-5 py-4 rounded-[20px] top-[756px] w-[361px]" data-name="CTA Primaire">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)]" />
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Continuer</p>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
          <div className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[0] relative shrink-0 text-[17px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">9:41</p>
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
      <img className="block max-w-none size-full" src={imgBattery} />
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-1.5 pr-4 py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <img className="block max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <img className="block max-w-none size-full" src={imgWifi} />
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
      <img className="block max-w-none size-full" src={imgGroup7} />
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

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-left">
      <img className="block max-w-none size-full" src={imgChevronLeft} />
    </div>
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

function X() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="x">
      <img className="block max-w-none size-full" src={imgX} />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="progress-bar">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-0 pt-5 px-4 relative w-full">
          <ChevronLeft />
          <Frame6158 />
          <X />
        </div>
      </div>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[393px]" data-name="progress-bar">
      <StatusBarIPhone />
      <Group8 />
      <ProgressBar />
    </div>
  );
}

function Frame6151() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-center justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#636363] text-[14px] w-full">
        <p className="leading-[normal]">Step 5 out of 6</p>
      </div>
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[24px] text-black w-full">
        <p className="leading-[1.2]">
          Quelle est votre maladie
          <br aria-hidden="true" />
          {`chronique ? `}
        </p>
      </div>
    </div>
  );
}

function DropdownItem() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Dropdown Item">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[normal] text-nowrap whitespace-pre">{`Cardiovasculaire `}</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[18px] text-black">
        <p className="leading-[normal] text-nowrap whitespace-pre">{`Hypertension `}</p>
      </div>
    </div>
  );
}

function DropdownContainer() {
  return (
    <div className="bg-white h-[70px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[70px] items-center justify-between p-[16px] relative w-full">
          <DropdownItem />
          <div className="h-1.5 relative shrink-0 w-3" data-name="Icon">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <img className="block max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6144() {
  return (
    <div className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[41px]">
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">JJ</p>
      </div>
    </div>
  );
}

function Frame6145() {
  return (
    <div className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">MM</p>
      </div>
    </div>
  );
}

function Frame6146() {
  return (
    <div className="bg-[rgba(202,202,202,0.12)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">AAAA</p>
      </div>
    </div>
  );
}

function Frame6147() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Frame6144 />
      <Frame6145 />
      <Frame6146 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-6" data-name="calendar">
      <img className="block max-w-none size-full" src={imgCalendar} />
    </div>
  );
}

function DropdownContainer1() {
  return (
    <div className="bg-white h-[70px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[70px] items-center justify-between p-[16px] relative w-full">
          <Frame6147 />
          <Calendar />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.2]">Quand avez-vous été diagnostiqué ?*</p>
      </div>
      <DropdownContainer1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(194,194,194,0.55)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Ramipril</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-center flex flex-wrap gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(194,194,194,0.55)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Lisinopril</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-center flex flex-wrap gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(194,194,194,0.55)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Amlodipine</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(194,194,194,0.55)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Bisoprolol</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(194,194,194,0.55)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Hydrochlorothiazide</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-[17px] py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(194,194,194,0.55)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Valsartan</p>
      </div>
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="plus-circle">
      <img className="block max-w-none size-full" src={imgPlusCircle} />
    </div>
  );
}

function Frame17() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-2 h-[45px] items-center justify-center pl-2.5 pr-4 py-[13px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#5980ff] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02)]" />
      <PlusCircle />
      <div className="bg-black bg-clip-text font-['SF_Pro_Display:Regular',_sans-serif] from-[#5980ff] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap to-[#9e94ea]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[normal] whitespace-pre">J’ajoute un médicament</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-start flex flex-wrap gap-[9px] items-start justify-start relative shrink-0 w-full">
      <Frame10 />
      <Frame13 />
      <Frame12 />
      <Frame11 />
      <Frame14 />
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.2]">Quels médicaments prenez-vous ?*</p>
      </div>
      <Frame31 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center px-4 py-0 relative w-full">
          <Frame6151 />
          <DropdownContainer />
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Frame6118() {
  return (
    <div className="absolute content-stretch flex flex-col gap-10 items-center justify-start left-1/2 top-0 translate-x-[-50%] w-[393px]">
      <ProgressBar1 />
      <Container2 />
    </div>
  );
}

export default function InfosPerso() {
  return (
    <div className="bg-white overflow-clip relative rounded-[44px] size-full" data-name="infos perso">
      <BgLinear />
      <HomeBar />
      <div className="absolute h-[338px] left-[277px] top-[-15px] w-[264px]">
        <div className="absolute inset-[-73.96%_-94.7%]">
          <img className="block max-w-none size-full" src={imgEllipse1437} />
        </div>
      </div>
      <CtaPrimaire />
      <Frame6118 />
    </div>
  );
}