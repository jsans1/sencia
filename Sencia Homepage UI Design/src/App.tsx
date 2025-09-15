import { useState } from 'react';
import { MoodTracker } from './components/MoodTracker';
import { HealthCardDetail } from './components/HealthCardDetail';
import Frame6046 from './imports/Frame6046';
import Frame5999 from './imports/Frame5999';
import Frame6051 from './imports/Frame6051';

export default function App() {
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  console.log('App rendering', { showMoodTracker, selectedCard });

  const handleMoodTrackerOpen = () => {
    console.log('Opening mood tracker');
    setShowMoodTracker(true);
  };

  const handleCardClick = (cardType: string) => {
    console.log('Card clicked:', cardType);
    setSelectedCard(cardType);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sencia Health Dashboard */}
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-5 pt-12 pb-6">
          {/* Status indicator */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Bonjour, Loris !</h1>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <span>6 jours</span>
            </div>
          </div>

          {/* Mood tracking widget */}
          <div className="bg-white h-28 relative rounded-[20px] w-full" data-name="Widget Sencia">
            <div className="h-28 overflow-clip relative w-full">
              <div className="absolute h-[482.203px] left-[114.13px] top-[-29.96px] w-[376.632px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Ellipse 1437" opacity="0.7"></g>
                </svg>
              </div>
              
              {/* Text content */}
              <div className="absolute content-stretch flex flex-col gap-3 items-start justify-center leading-[0] not-italic top-1/2 translate-x-[-50%] translate-y-[-50%] w-[241px]" style={{ left: "calc(50% - 30px)" }}>
                <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[20px] to-[#0e7afe] w-full" style={{ WebkitTextFillColor: "transparent" }}>
                  <p className="leading-[1.2]">Comment vous sentez-vous ce matin ?</p>
                </div>
                <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#606060] text-[14px] w-full">
                  <p className="leading-[1.2]">0 remplissage /2, à toi de jouer !</p>
                </div>
              </div>
              
              {/* Black button */}
              <div className="absolute bg-black box-border content-stretch flex gap-[5.2px] items-center justify-center left-[283px] p-[19.76px] rounded-[255.738px] size-[52px] top-[42px]">
                <div className="relative shrink-0 size-[26px]" data-name="plus">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                    <g id="plus">
                      <path d="M13 5.41669V20.5834" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13115" />
                      <path d="M5.41703 13H20.5837" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13115" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[1.427px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_5.707px_77.038px_0px_rgba(0,0,0,0.06)]" />
          </div>
        </div>

        {/* Health Status Cards */}
        <div className="px-5 py-6 space-y-6">
          <Frame6051 />

          {/* Biomarkers Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Vos biomarqueurs</h3>
              <button className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                Voir plus
              </button>
            </div>
            
            {/* Blood Pressure Chart from Figma */}
            <div className="h-[200px]">
              <Frame5999 />
            </div>
          </div>
        </div>

        {/* Care Plan Articles Section */}
        <div className="px-5 py-6">
          <Frame6046 />
        </div>
      </div>

      {/* Mood Tracker Modal */}
      <MoodTracker 
        isOpen={showMoodTracker}
        onClose={() => setShowMoodTracker(false)}
      />

      {/* Health Card Detail Modal */}
      <HealthCardDetail
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        cardType={selectedCard}
      />
    </div>
  );
}