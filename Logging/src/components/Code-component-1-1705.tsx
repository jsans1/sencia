import svgPaths from "../imports/svg-mkfck6m8qu";

interface CompletionPopupProps {
  onClose: () => void;
  onConsultData: () => void;
}

function Frame6116() {
  return (
    <div className="relative shrink-0 size-10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame 6116">
          <rect fill="url(#paint0_linear_1_1693)" height="40" rx="20" width="40" />
          <path d={svgPaths.p2aaf2000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1693" x1="0" x2="40" y1="20" y2="20">
            <stop stopColor="#A69BF8" />
            <stop offset="1" stopColor="#0E7AFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame6159() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[0px] text-black w-full">
        <p className="leading-[1.1]">
          <span className="bg-black bg-clip-text from-[#5980ff] text-[26px] text-black to-[#9e94ea]" style={{ WebkitTextFillColor: "transparent" }}>
            Félicitations !
          </span>
          <span className="text-[26px]">
            <br aria-hidden="true" />
          </span>
          <span className="text-[24px]">Vos informations ont bien été prises en compte.</span>
        </p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#7a7a7a] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">
          {`Rendez-vous dans votre espace  "Exports"`}
          <br aria-hidden="true" />
          pour en savoir plus.
        </p>
      </div>
    </div>
  );
}

interface XProps {
  onClick: () => void;
}

function X({ onClick }: XProps) {
  return (
    <button 
      onClick={onClick}
      className="absolute right-3.5 size-5 top-3.5 cursor-pointer" 
      data-name="x"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="x">
          <rect fill="var(--fill-0, #F6F6F6)" height="20" rx="5" width="20" />
          <path d="M14.0001 6L6.00006 14" id="Vector" stroke="var(--stroke-0, #B9B9B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d="M6.00006 6L14.0001 14" id="Vector_2" stroke="var(--stroke-0, #B9B9B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </button>
  );
}

interface CtaPrimaireProps {
  onClick: () => void;
}

function CtaPrimaire({ onClick }: CtaPrimaireProps) {
  return (
    <button 
      onClick={onClick}
      className="h-[52px] relative rounded-[20px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="CTA Primaire"
    >
      <div aria-hidden="true" className="absolute border border-[#212121] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-[52px] items-center justify-center p-[20px] relative w-full">
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Consulter mes données</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export function CompletionPopup({ onClose, onConsultData }: CompletionPopupProps) {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Finito loggin">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(161,161,161,0.06)]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center pb-6 pt-8 px-6 relative size-full">
          <Frame6116 />
          <Frame6159 />
          <X onClick={onClose} />
          <CtaPrimaire onClick={onConsultData} />
        </div>
      </div>
    </div>
  );
}