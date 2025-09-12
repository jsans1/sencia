import { imgBgLinear, imgHomeBar, imgBattery, imgCellularConnection, imgWifi, imgGroup7, imgChevronLeft, imgX, imgEllipse1437 } from "../../imports/svg-14q4q";
import { Button } from '../ui/button';

interface CheckInFrequencyStepProps {
  frequency: '1' | '2' | '3' | '4';
  onUpdate: (frequency: '1' | '2' | '3' | '4') => void;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
}

const frequencyOptions = [
  { value: '1' as const, label: '1 fois par jour', recommended: false },
  { value: '2' as const, label: '2 fois par jour', recommended: true },
  { value: '3' as const, label: '3 fois par jour', recommended: false },
  { value: '4' as const, label: '4 fois par jour', recommended: false },
];

export function CheckInFrequencyStep({ frequency, onUpdate, onNext, onBack, onClose }: CheckInFrequencyStepProps) {
  const handleContinue = () => {
    onNext();
  };

  const handleSkip = () => {
    onNext();
  };

  return (
    <div className="bg-white relative size-full" data-name="V2- Care Plan">
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
      
      {/* Bottom Actions */}
      <div className="absolute content-stretch flex flex-col gap-4 items-center justify-start left-4 top-[727px] w-[361px]">
        <div className="bg-[#212121] h-[53px] relative rounded-[20px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)]" />
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex gap-2.5 h-[53px] items-center justify-center px-5 py-4 relative w-full">
              <Button 
                className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic text-[18px] text-center text-nowrap text-white bg-transparent border-0 p-0 hover:bg-transparent"
                onClick={handleContinue}
              >
                Continuer
              </Button>
            </div>
          </div>
        </div>
        <button 
          onClick={handleSkip}
          className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic text-[#636363] text-[14px] text-center w-full"
        >
          Plus tard
        </button>
      </div>

      {/* Header with Progress */}
      <div className="absolute content-stretch flex flex-col gap-10 items-center justify-start top-0 translate-x-[-50%] w-[392px]" style={{ left: "calc(50% + 0.5px)" }}>
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
                  <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
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
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center relative size-full">
              <div className="box-border content-stretch flex flex-col font-['SF_Pro_Display:Regular',_sans-serif] gap-3 items-center justify-start leading-[0] not-italic px-5 py-0 relative text-center w-full">
                <div className="relative shrink-0 text-[#636363] text-[14px] w-full">
                  <p className="leading-[normal]">Step 6 out of 6</p>
                </div>
                <div className="relative shrink-0 text-[24px] text-black w-full">
                  <p className="leading-[26px]">
                    <span className="font-['SF_Pro_Display:Medium',_sans-serif] not-italic">
                      How often do you
                      <br aria-hidden="true" />
                      want to
                    </span>{" "}
                    <span className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] not-italic to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
                      check-in
                    </span>{" "}
                    <span className="font-['SF_Pro_Display:Medium',_sans-serif] not-italic">?</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-[16px] text-[rgba(0,0,0,0.65)] w-full">
                  <p className="leading-[1.2]">By creating repetition with your check-ins, you can uncover more about your emotional self.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Frequency Options */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row justify-center relative size-full">
              <div className="box-border content-start flex flex-wrap gap-3 items-start justify-center px-5 py-0 relative w-full">
                {frequencyOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onUpdate(option.value)}
                    className={`box-border content-stretch flex flex-col items-center justify-center p-[14.787px] relative rounded-[196.317px] shrink-0 size-[162.663px] transition-all ${
                      frequency === option.value
                        ? 'bg-white border-[#a69bf8] border-[1.402px] border-solid'
                        : 'border-[#bcbcbc] border-[1.402px] border-solid'
                    }`}
                  >
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[196.317px]" />
                    <div className={`leading-[0] not-italic relative shrink-0 text-[19.012px] text-center w-full ${
                      frequency === option.value
                        ? `bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Medium',_sans-serif] from-[#a69bf8] to-[#0e7afe]`
                        : `font-['SF_Pro_Display:Regular',_sans-serif] text-[#636363]`
                    }`} style={frequency === option.value ? { WebkitTextFillColor: "transparent" } : {}}>
                      <p className="leading-[normal]">{option.label}</p>
                    </div>
                    {option.recommended && frequency === option.value && (
                      <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Medium',_sans-serif] from-[#a69bf8] leading-[0] not-italic relative shrink-0 text-[14.787px] text-center to-[#0e7afe] w-full mt-2" style={{ WebkitTextFillColor: "transparent" }}>
                        <p className="leading-[normal]">(recommandé)</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}