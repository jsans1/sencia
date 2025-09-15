interface ProfilProps {
  onBack: () => void;
}

export default function Profil({ onBack }: ProfilProps) {
  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden relative w-full max-w-[393px] mx-auto rounded-[44px]">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[30px] pt-[21px] px-0 relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full px-4">
            <div className="font-['SF_Pro:Semibold',_sans-serif] text-[17px] text-black">
              9:41
            </div>
            <div className="h-2.5 w-[124px]" />
            <div className="flex gap-[7px] items-center">
              <div className="w-[19px] h-[12px] bg-black/80 rounded-sm" />
              <div className="w-[17px] h-[12px] bg-black/80 rounded-sm" />
              <div className="w-6 h-3 border border-black/40 rounded-sm relative">
                <div className="absolute inset-[2px] bg-black rounded-[1px]" />
                <div className="absolute right-[-2px] top-[3px] w-[2px] h-[6px] bg-black/40 rounded-r-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button 
        onClick={onBack}
        className="absolute left-5 top-20 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[1040px] left-[-182px] top-[-43px] w-[723px]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-[264px] h-[306px] bg-gradient-to-br from-[#D4E7DC] to-transparent rounded-full blur-[125px] opacity-70" style={{ left: '456px', top: '848px' }} />
            <div className="absolute w-[368px] h-[264px] bg-gradient-to-br from-[#C4E1FF] to-transparent rounded-full blur-[125px] opacity-70" style={{ left: '250px', top: '250px' }} />
            <div className="absolute w-[445px] h-[309px] bg-gradient-to-br from-[#DFDBFE] to-transparent rounded-full blur-[85px] opacity-70" style={{ left: '206px', top: '524px' }} />
            <div className="absolute w-[264px] h-[359px] bg-gradient-to-br from-[#FFF6E5] to-transparent rounded-full blur-[25px] opacity-70" style={{ left: '231px', top: '890px' }} />
            <div className="absolute w-[264px] h-[338px] bg-gradient-to-br from-[#FFD1B7] to-transparent rounded-full blur-[125px] opacity-70" style={{ left: '618px', top: '279px' }} />
          </div>
        </div>
      </div>

      {/* Main content - scrollable */}
      <div className="flex-1 overflow-y-auto relative z-10 pt-24 pb-8">
        <div className="px-5">
          {/* Profile section */}
          <div className="flex flex-col items-center gap-3 mb-8">
            {/* Profile image */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
              <span className="text-2xl font-semibold text-white">LD</span>
            </div>
            
            {/* Profile details */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-center">
                <h1 className="font-['SF_Pro_Display:Semibold',_sans-serif] text-[20px] text-black">
                  Loris Duchamp
                </h1>
                <p className="font-['SF_Pro_Display:Regular',_sans-serif] text-[12px] text-[#606060]">
                  Homme, 47 ans
                </p>
              </div>
              
              {/* Health tags */}
              <div className="flex gap-2">
                <div className="bg-white border border-gray-300 rounded-full px-3 py-2">
                  <span className="font-['SF_Pro_Display:Regular',_sans-serif] text-[12px] text-[#606060]">
                    Hypertension artérielle
                  </span>
                </div>
                <div className="bg-white border border-gray-300 rounded-full px-3 py-2 flex items-center gap-1">
                  <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M1 1L6 5.5L1 10" stroke="#606060" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['SF_Pro_Display:Regular',_sans-serif] text-[12px] text-[#606060]">
                    Apple Watch Series 4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Medical profile section */}
          <div className="mb-8">
            <h2 className="font-['SF_Pro_Display:Bold',_sans-serif] text-[20px] text-[#212121] mb-4">
              Profil médical
            </h2>
            
            <div className="space-y-0">
              <ProfileMenuItem 
                icon={<HealthIcon />}
                title="Informations de santé"
              />
              <ProfileMenuItem 
                icon={<DiagnosticIcon />}
                title="Diagnostic"
              />
              <ProfileMenuItem 
                icon={<TreatmentIcon />}
                title="Traitements"
              />
              <ProfileMenuItem 
                icon={<CarePlanIcon />}
                title="Care Plan"
              />
            </div>
          </div>

          {/* Privacy section */}
          <div className="mb-8">
            <h2 className="font-['SF_Pro_Display:Bold',_sans-serif] text-[20px] text-[#212121] mb-2">
              Confidentialité
            </h2>
            <p className="font-['SF_Pro_Display:Light',_sans-serif] text-[14px] text-black leading-normal mb-4">
              Vos données sont chiffrées sur votre appareil et ne peuvent être partagée qu'avec votre permission.
            </p>
            
            <div className="space-y-0">
              <ProfileMenuItem 
                icon={<SettingsIcon />}
                title="Compte et mot de passe"
              />
              <ProfileMenuItem 
                icon={<TermsIcon />}
                title="CGU"
              />
              <ProfileMenuItem 
                icon={<ResearchIcon />}
                title="Études de recherche"
              />
              <ProfileMenuItem 
                icon={<DevicesIcon />}
                title="Appareils"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for menu items
function ProfileMenuItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-['SF_Pro_Display:Regular',_sans-serif] text-[16px] text-black">
          {title}
        </span>
      </div>
      <ChevronRight />
    </div>
  );
}

// Icon components
function HealthIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M13 8C13 8 11 6 8 6C5 6 3 8 3 8" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DiagnosticIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M8 1V15M1 8H15" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function TreatmentIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="black" strokeWidth="1.3"/>
        <path d="M8 6V10M6 8H10" stroke="black" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function CarePlanIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M8 1L10.5 6L16 6.5L11.5 10.5L13 16L8 13L3 16L4.5 10.5L0 6.5L5.5 6L8 1Z" stroke="black" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="3" stroke="black" strokeWidth="1.3"/>
        <path d="M8 1V3M8 13V15M3.05 3.05L4.46 4.46M11.54 11.54L12.95 12.95M1 8H3M13 8H15M3.05 12.95L4.46 11.54M11.54 4.46L12.95 3.05" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function TermsIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M3 1H13L15 3V15H3C2.5 15 2 14.5 2 14V2C2 1.5 2.5 1 3 1Z" stroke="black" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5 5H11M5 8H11M5 11H8" stroke="black" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function ResearchIcon() {
  return (
    <div className="w-3.5 h-3">
      <svg viewBox="0 0 14 12" fill="none">
        <path d="M1 6L5 2L9 6L13 2" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 10L5 6L9 10L13 6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DevicesIcon() {
  return (
    <div className="w-4 h-4">
      <svg viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="8" rx="2" stroke="black" strokeWidth="1.3"/>
        <path d="M6 13H10" stroke="black" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="w-[17px] h-[17px]">
      <svg viewBox="0 0 17 17" fill="none">
        <path d="M6 4L10 8.5L6 13" stroke="#212121" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}