import { useState } from 'react';
import { imgBgLinear, imgHomeBar, imgBattery, imgCellularConnection, imgWifi, imgGroup7, imgChevronLeft, imgX, imgEdit, imgEllipse1437 } from "../../imports/svg-ef7dz";
import { Button } from '../ui/button';

interface NotificationTimeStepProps {
  notifications: {
    morning: string;
    evening: string;
  };
  onUpdate: (notifications: { morning: string; evening: string }) => void;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
}

export function NotificationTimeStep({ notifications, onUpdate, onNext, onBack, onClose }: NotificationTimeStepProps) {
  const [editingMorning, setEditingMorning] = useState(false);
  const [editingEvening, setEditingEvening] = useState(false);
  const [tempMorning, setTempMorning] = useState(notifications.morning);
  const [tempEvening, setTempEvening] = useState(notifications.evening);

  const handleFinalize = () => {
    onNext();
  };

  const saveMorningTime = () => {
    onUpdate({ ...notifications, morning: tempMorning });
    setEditingMorning(false);
  };

  const saveEveningTime = () => {
    onUpdate({ ...notifications, evening: tempEvening });
    setEditingEvening(false);
  };

  const cancelMorningEdit = () => {
    setTempMorning(notifications.morning);
    setEditingMorning(false);
  };

  const cancelEveningEdit = () => {
    setTempEvening(notifications.evening);
    setEditingEvening(false);
  };

  return (
    <div className="bg-white relative size-full" data-name="notifs">
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
      
      {/* Finalize Button */}
      <button
        onClick={handleFinalize}
        className="absolute bg-[#212121] box-border content-stretch flex gap-2.5 items-center justify-center left-4 px-5 py-4 rounded-[20px] top-[756px] w-[361px] cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)]" />
        <span className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic text-[18px] text-center text-nowrap text-white relative z-10">
          Finaliser mon Care Plan
        </span>
      </button>

      {/* Header with Progress */}
      <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-0 translate-x-[-50%] w-[393px]">
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
                  <div className="basis-0 bg-[#0e7afe] grow h-px min-h-px min-w-px shrink-0" />
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
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          {/* Header */}
          <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center leading-[0] not-italic px-[30px] py-10 relative shrink-0 text-center w-[393px]">
            <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[26px] text-black w-full">
              <p className="leading-[1.1]">
                What time do you want
                <br aria-hidden="true" />
                to be reminded ?
              </p>
            </div>
            <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#7a7a7a] text-[14px] w-full">
              <p className="leading-[normal]">Remember to check in regularly to spot patterns.</p>
            </div>
          </div>

          {/* Time Settings */}
          <div className="content-stretch flex flex-col gap-[52px] items-center justify-start relative shrink-0 w-[392px]">
            <div className="relative shrink-0 w-full">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-0 relative w-full">
                  
                  {/* Morning Time */}
                  <div className="bg-white h-[98px] relative rounded-[20px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-row items-center relative size-full">
                      <div className="box-border content-stretch flex h-[98px] items-center justify-between px-[25px] py-4 relative w-full">
                        <div className="content-stretch flex flex-col gap-[3px] items-start justify-start leading-[0] not-italic relative shrink-0 w-[113px]">
                          <div className="font-['SF_Pro_Display:Regular',_sans-serif] min-w-full relative shrink-0 text-[#212121] text-[16px]" style={{ width: "min-content" }}>
                            <p className="leading-[normal]">Matin</p>
                          </div>
                          {editingMorning ? (
                            <div className="flex gap-2 items-center">
                              <input
                                type="time"
                                value={tempMorning}
                                onChange={(e) => setTempMorning(e.target.value)}
                                className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] text-[32px] text-nowrap to-[#0e7afe] border-0 bg-transparent"
                              />
                              <div className="flex gap-1">
                                <Button onClick={saveMorningTime} size="sm" variant="outline">✓</Button>
                                <Button onClick={cancelMorningEdit} size="sm" variant="outline">✕</Button>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[32px] text-nowrap to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
                              <p className="leading-[normal] whitespace-pre">{notifications.morning}</p>
                            </div>
                          )}
                        </div>
                        {!editingMorning && (
                          <button 
                            onClick={() => setEditingMorning(true)}
                            className="content-stretch flex gap-2 items-center justify-start relative shrink-0"
                          >
                            <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                              <p className="leading-[normal] whitespace-pre">Modifier</p>
                            </div>
                            <div className="relative shrink-0 size-3">
                              <img className="block max-w-none size-full" src={imgEdit} />
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Evening Time */}
                  <div className="bg-white h-[98px] relative rounded-[20px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-row items-center relative size-full">
                      <div className="box-border content-stretch flex h-[98px] items-center justify-between px-[25px] py-4 relative w-full">
                        <div className="content-stretch flex flex-col gap-[3px] items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap w-[113px]">
                          <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#212121] text-[16px]">
                            <p className="leading-[normal] text-nowrap whitespace-pre">Soir</p>
                          </div>
                          {editingEvening ? (
                            <div className="flex gap-2 items-center">
                              <input
                                type="time"
                                value={tempEvening}
                                onChange={(e) => setTempEvening(e.target.value)}
                                className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] text-[32px] to-[#0e7afe] border-0 bg-transparent"
                              />
                              <div className="flex gap-1">
                                <Button onClick={saveEveningTime} size="sm" variant="outline">✓</Button>
                                <Button onClick={cancelEveningEdit} size="sm" variant="outline">✕</Button>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[32px] to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
                              <p className="leading-[normal] text-nowrap whitespace-pre">{notifications.evening}</p>
                            </div>
                          )}
                        </div>
                        {!editingEvening && (
                          <button 
                            onClick={() => setEditingEvening(true)}
                            className="content-stretch flex gap-2 items-center justify-start relative shrink-0"
                          >
                            <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                              <p className="leading-[normal] whitespace-pre">Modifier</p>
                            </div>
                            <div className="relative shrink-0 size-3">
                              <img className="block max-w-none size-full" src={imgEdit} />
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
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