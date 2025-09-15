function Frame6150() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 items-start justify-center leading-[0] not-italic top-1/2 translate-x-[-50%] translate-y-[-50%] w-[241px]" style={{ left: "calc(50% - 30px)" }}>
      <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[20px] to-[#0e7afe] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.2]">Comment vous sentez-vous ce matin ?</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#606060] text-[14px] w-full">
        <p className="leading-[1.2]">0 remplissage /2, à toi de jouer !</p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="plus">
          <path d="M13 5.41669V20.5834" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13115" />
          <path d="M5.41703 13H20.5837" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13115" />
        </g>
      </svg>
    </div>
  );
}

function Frame6101() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[5.2px] items-center justify-center left-[283px] p-[19.76px] rounded-[255.738px] size-[52px] top-[42px]">
      <Plus />
    </div>
  );
}

export default function WidgetSencia() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Widget Sencia">
      <div className="overflow-clip relative size-full">
        <div className="absolute h-[482.203px] left-[114.13px] top-[-29.96px] w-[376.632px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Ellipse 1437" opacity="0.7"></g>
          </svg>
        </div>
        <Frame6150 />
        <Frame6101 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.427px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_5.707px_77.038px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}