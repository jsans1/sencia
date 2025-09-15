interface HomepageNoLogToolTipProps {
  onClose: () => void;
}

export default function HomepageNoLogToolTip({ onClose }: HomepageNoLogToolTipProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative bg-white rounded-[20px] p-6 m-4 max-w-[320px] shadow-xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Tooltip content */}
        <div className="pr-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative shrink-0 size-3">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g clipPath="url(#clip0_1_1086)">
                  <path d="M6 11L10.3923 1H1.60769L6 11Z" stroke="url(#paint0_linear_1_1086)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1086" x1="1.00049" x2="11.0008" y1="6.00006" y2="6.00006">
                    <stop stopColor="#A69BF8" />
                    <stop offset="1" stopColor="#0E7AFE" />
                  </linearGradient>
                  <clipPath id="clip0_1_1086">
                    <rect fill="white" height="12" width="12" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Medium',_sans-serif] from-[#a69bf8] leading-[0] not-italic text-[12px] text-nowrap to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[1.2] whitespace-pre">Astuce</p>
            </div>
          </div>

          <h3 className="font-['SF_Pro_Display:Semibold',_sans-serif] text-[18px] text-black mb-2">
            Créer votre premier log
          </h3>

          <p className="font-['SF_Pro_Display:Regular',_sans-serif] text-[14px] text-[#45413e] leading-[1.4] mb-4">
            Commencez à suivre votre état de santé en créant votre premier log quotidien. Cela nous aidera à mieux comprendre votre bien-être.
          </p>

          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-[#a69bf8] to-[#0e7afe] text-white font-['SF_Pro_Display:Medium',_sans-serif] text-[14px] py-3 px-4 rounded-[12px] transition-transform hover:scale-105 active:scale-95"
            >
              Commencer
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-3 text-[#666] font-['SF_Pro_Display:Regular',_sans-serif] text-[14px] hover:bg-gray-50 rounded-[12px] transition-colors"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}