import { useState } from 'react'
import svgPaths from '../utils/svgPaths'

const HomepageNoLog = ({ onPlusClick, onBackClick }) => {
  const [state, setState] = useState({
    activeTab: 'home',
    moodEntries: 0,
    currentPage: 'home',
    showTooltip: false
  })

  const currentTime = new Date().toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })

  // Fake article data with realistic content
  const fakeArticles = {
    nutrition: [
      {
        image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NTc4NTcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "10 astuces pour réduire le sodium au quotidien",
        source: "Nutrition Santé",
        excerpt: "Découvrez comment diminuer votre consommation de sel sans sacrifier le goût de vos plats préférés."
      },
      {
        image: "https://images.unsplash.com/photo-1621525434111-87a99d170b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMHByZXNzdXJlJTIwaGVhbHRofGVufDF8fHx8MTc1NzkyNTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "L'impact du sel sur la pression artérielle",
        source: "Cœur et Santé",
        excerpt: "Comprendre le lien entre sodium et hypertension pour mieux protéger votre système cardiovasculaire."
      }
    ],
    stress: [
      {
        image: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjBtYW5hZ2VtZW50JTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU3OTI1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "5 techniques de relaxation rapides",
        source: "Bien-être Mental",
        excerpt: "Des exercices simples à pratiquer partout pour gérer le stress du quotidien en quelques minutes."
      },
      {
        image: "https://images.unsplash.com/photo-1602713464923-b97ad228fcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3N8ZW58MXx8fHwxNzU3OTI1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Méditation : guide pour débutants",
        source: "Mindfulness France",
        excerpt: "Initiez-vous à la méditation avec ce guide pratique pour retrouver sérénité et équilibre."
      }
    ]
  }

  const handleOpenArticle = (article, category) => {
    console.log('Opening article:', article, 'Category:', category)
  }

  function BgLinear() {
    return (
      <div className="absolute h-[1416px] left-[-182px] top-[-43px] w-[611px]" data-name="bg-linear">
        <div className="absolute inset-[-17.66%_-40.92%_-4.6%_-26.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1732">
            <g id="bg-linear">
              <g filter="url(#filter0_gf_1_526)" id="Ellipse 1434" opacity="0.7">
                <ellipse cx="638" cy="1272.31" fill="var(--fill-0, #D4E7DC)" rx="132" ry="208.815" />
              </g>
              <g filter="url(#filter1_gf_1_526)" id="Ellipse 1435" opacity="0.7">
                <ellipse cx="434" cy="429.567" fill="var(--fill-0, #C4E1FF)" rx="184" ry="179.567" />
              </g>
              <g filter="url(#filter2_gf_1_526)" id="Ellipse 1436" opacity="0.7">
                <ellipse cx="428.5" cy="832.913" fill="var(--fill-0, #DFDBFE)" rx="222.5" ry="210.175" />
              </g>
              <g filter="url(#filter3_fg_1_526)" id="Ellipse 1438" opacity="0.7">
                <ellipse cx="145.358" cy="229.727" fill="var(--fill-0, #FFF6E5)" rx="145.358" ry="229.727" transform="matrix(0.786437 -0.61767 0.390681 0.920526 159 1243.06)" />
              </g>
              <foreignObject height="1867.02" width="1101" x="-13" y="-50">
                <div style={{ backdropFilter: "blur(177px)", clipPath: "url(#bgblur_0_1_526_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <rect data-figma-bg-blur-radius="354" fill="var(--fill-0, white)" fillOpacity="0.1" height="1159.02" id="Rectangle 6" width="393" x="341" y="304" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="917.63" id="filter0_gf_1_526" width="764" x="256" y="813.494">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_526">
                  <feMergeNode in="displacedImage" />
                </feMerge>
                <feGaussianBlur result="effect2_foregroundBlur_1_526" stdDeviation="125" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="859.134" id="filter1_gf_1_526" width="868" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_526">
                  <feMergeNode in="displacedImage" />
                </feMerge>
                <feGaussianBlur result="effect2_foregroundBlur_1_526" stdDeviation="125" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="760.35" id="filter2_gf_1_526" width="785" x="36" y="452.738">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_526">
                  <feMergeNode in="displacedImage" />
                </feMerge>
                <feGaussianBlur result="effect2_foregroundBlur_1_526" stdDeviation="85" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="659.599" id="filter3_fg_1_526" width="490.688" x="117.721" y="1034.95">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_526" stdDeviation="25" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
                <feDisplacementMap height="100%" in="effect1_foregroundBlur_1_526" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect2_texture_1_526">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
              <clipPath id="bgblur_0_1_526_clip_path" transform="translate(13 50)">
                <rect height="1159.02" width="393" x="341" y="304" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    )
  }

  function Time() {
    return (
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
            <div className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function DynamicIslandSpacer() {
    return <div className="h-2.5 shrink-0 w-[124px]" data-name="Dynamic Island spacer" />
  }

  function Battery() {
    return (
      <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
            <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
          </g>
        </svg>
      </div>
    )
  }

  function Levels() {
    return (
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-1.5 pr-4 py-0 relative w-full">
            <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
            <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                <path clipRule="evenodd" d={svgPaths.p1fac3f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
            <Battery />
          </div>
        </div>
      </div>
    )
  }

  function Frame() {
    return (
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
        <Time />
        <DynamicIslandSpacer />
        <Levels />
      </div>
    )
  }

  function StatusBarIPhone() {
    return (
      <div className="box-border content-stretch flex flex-col items-start justify-start pb-[30px] pt-[21px] px-0 relative shrink-0 w-full" data-name="Status Bar - iPhone">
        <Frame />
      </div>
    )
  }

  function Group7() {
    return (
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
    )
  }

  function Group8() {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <Group7 />
      </div>
    )
  }

  function ProgressBar() {
    return (
      <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[393px]" data-name="progress-bar">
        <StatusBarIPhone />
        <Group8 />
      </div>
    )
  }

  function Frame6150() {
    return (
      <div className="content-stretch flex flex-col gap-3 items-start justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[32px] to-[#0e7afe] w-full" style={{ WebkitTextFillColor: "transparent" }}>
          <p className="leading-[1.16]">
            <span className="text-[#212121]">Comment vous sentez-vous ce matin,</span>
            <span>{` Loris ?`}</span>
          </p>
        </div>
        <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#606060] text-[14px] w-full">
          <p className="leading-[1.2]">Remplis ton premier log et commence l'analyse !</p>
        </div>
      </div>
    )
  }

  function Plus1() {
    return (
      <div className="relative shrink-0 size-[26px]" data-name="plus">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="plus">
            <path d="M13 5.41669V20.5834" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13115" />
            <path d="M5.41703 13H20.5837" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13115" />
          </g>
        </svg>
      </div>
    )
  }

  function Frame6101() {
    return (
      <button 
        onClick={onPlusClick}
        className="absolute bg-black box-border content-stretch flex gap-[5.2px] items-center justify-center left-[283px] p-[19.76px] rounded-[255.738px] size-[52px] top-[42px] transition-transform hover:scale-105 active:scale-95"
      >
        <Plus1 />
      </button>
    )
  }

  function WidgetSencia() {
    return (
      <div className="bg-white h-28 relative rounded-[20px] shrink-0 w-full" data-name="Widget Sencia">
        <div className="h-28 overflow-clip relative w-full">
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
    )
  }

  function Frame6174() {
    return (
      <div className="content-stretch flex flex-col gap-5 items-start justify-start w-[353px]">
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black w-full">
          <p className="leading-[1.1]">Bonjour, Loris !</p>
        </div>
        <WidgetSencia />
      </div>
    )
  }

  // Health Status Card Component
  function HealthStatusCard({ icon, title, description, status, onClick }) {
    return (
      <button 
        onClick={onClick}
        className="bg-white relative rounded-[20px] shrink-0 w-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <div className="flex flex-row items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex gap-4 items-center justify-start p-[16px] relative w-full">
            <div className="basis-0 content-stretch flex gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
              {icon}
              <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                  <div className="basis-0 font-['SF_Pro_Display:Semibold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
                    <p className="leading-[1.2]">{title}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                  <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#45413e] text-[14px]">
                    <p className="leading-[1.2]">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg]">
                <div className="h-[9px] relative w-[4.5px]" data-name="Vector">
                  <div className="absolute inset-[-6.25%_-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
                      <path d="M5.5 10L1 5.5L5.5 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    )
  }

  function Frame6050() {
    return (
      <div className="relative shrink-0 size-8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path d={svgPaths.p2a19c8c0} fill="var(--fill-0, #09B65E)" id="Polygon 1" />
          </g>
        </svg>
      </div>
    )
  }

  function Frame6052() {
    return (
      <div className="relative shrink-0 size-8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path d={svgPaths.p28ffba00} fill="var(--fill-0, #FED557)" id="Polygon 1" />
          </g>
        </svg>
      </div>
    )
  }

  function Frame6055() {
    return (
      <div className="relative shrink-0 size-8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path d={svgPaths.pbb5f480} fill="var(--fill-0, #FE3C2E)" id="Polygon 1" />
          </g>
        </svg>
      </div>
    )
  }

  function HealthStatusSection() {
    return (
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-5 py-4 relative w-full">
            <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0">
                <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">
                  <p className="leading-[1.2] whitespace-pre">Votre état de santé</p>
                </div>
              </div>
              <HealthStatusCard
                icon={<Frame6050 />}
                title="Symptômes globaux"
                description="You're improving this month, Loris ! Your symptoms were overall less painful as February this year."
                status="good"
                onClick={() => console.log('Viewing global symptoms')}
              />
              <HealthStatusCard
                icon={<Frame6052 />}
                title="Pression artérielle"
                description="2-3 Moderate crises reported this month."
                status="warning"
                onClick={() => console.log('Viewing blood pressure')}
              />
              <HealthStatusCard
                icon={<Frame6055 />}
                title="Adhérence aux traitements"
                description="Try to stick to your prescription."
                status="error"
                onClick={() => console.log('Viewing treatment adherence')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  function BloodPressureChart() {
    return (
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-5 py-4 relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">
                <p className="leading-[1.2] whitespace-pre">Vos biomarqueurs</p>
              </div>
              <button className="box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-2.5 relative rounded-[11px] shrink-0 transition-colors hover:bg-gray-50" data-name="CTA Primaire">
                <div aria-hidden="true" className="absolute border border-[#212121] border-solid inset-0 pointer-events-none rounded-[11px]" />
                <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
                  <p className="leading-[normal] whitespace-pre">Voir plus</p>
                </div>
              </button>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col gap-4 items-center justify-center overflow-clip p-[16px] relative rounded-[20px] shrink-0 w-[353px]">
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
                  <p className="leading-[1.2]">Pression artérielle</p>
                </div>
                <div className="relative shrink-0 size-6" data-name="icons_utilitary_leftsm">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="icons_utilitary_leftsm">
                      <path d={svgPaths.p1fc81300} fill="var(--fill-0, #0F0F0F)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex h-[152px] items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['SF_Pro_Display:Regular',_sans-serif] h-[121px] items-start justify-between leading-[0] not-italic relative shrink-0 text-[#45413e] text-[10px] w-[42px]">
                  <div className="relative shrink-0 w-full">
                    <p className="leading-[1.2]">160/100</p>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <p className="leading-[1.2]">140/90</p>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <p className="leading-[1.2]">120/80</p>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <p className="leading-[1.2]">90/60</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-3 grow h-[152px] items-end justify-end min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#45413e] text-[11px] text-nowrap w-full">
                    <div className="font-['SF_Pro_Display:Light',_sans-serif] relative shrink-0">
                      <p className="leading-[1.2] text-nowrap whitespace-pre">Tue 27</p>
                    </div>
                    <div className="font-['SF_Pro_Display:Light',_sans-serif] relative shrink-0">
                      <p className="leading-[1.2] text-nowrap whitespace-pre">Tue 3</p>
                    </div>
                    <div className="font-['SF_Pro_Display:Light',_sans-serif] relative shrink-0">
                      <p className="leading-[1.2] text-nowrap whitespace-pre">Tue 10</p>
                    </div>
                    <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0">
                      <p className="leading-[1.2] text-nowrap whitespace-pre">Tue 17</p>
                    </div>
                  </div>
                  <div className="absolute h-[61.267px] left-0 top-[18.37px] w-[266px]">
                    <div className="absolute inset-[-1.63%_-0.31%_-1.63%_-0.28%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 64">
                        <path d={svgPaths.p1b77c900} id="Vector 14" stroke="var(--stroke-0, black)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <button className="absolute left-[319px] size-[9px] top-[97px] transition-transform hover:scale-125">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                  <circle cx="4.5" cy="4.5" fill="var(--fill-0, black)" id="Ellipse 1496" r="4.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function CarePlanInsight({ insightNumber, title, description, articles, category }) {
    return (
      <div className="bg-white relative rounded-[20px] shrink-0 w-[353px]" data-name="insights care plan">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip p-[16px] relative w-[353px]">
          <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
            <div className="relative shrink-0 size-3" data-name="Icons">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g clipPath="url(#clip0_1_1086)" id="Icons">
                  <path d={svgPaths.pd74a700} id="Vector" stroke="url(#paint0_linear_1_1086)" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Medium',_sans-serif] from-[#a69bf8] leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[1.2] whitespace-pre">Insight {insightNumber}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="basis-0 font-['SF_Pro_Display:Semibold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
                  <p className="leading-[1.2]">{title}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#45413e] text-[12px]">
                  <p className="leading-[1.2]">{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-8 items-center justify-start pl-0 pr-4 py-0 relative w-full">
                <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
                  <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="List">
                    {articles.map((article, index) => (
                      <button 
                        key={index}
                        onClick={() => handleOpenArticle(article, category)}
                        className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0 transition-transform hover:scale-105" 
                        data-name="Mini Card"
                      >
                        <div className="bg-center bg-cover bg-no-repeat h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image" style={{ backgroundImage: `url('${article.image}')` }} />
                        <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
                          <div className="relative size-full">
                            <div className="box-border content-stretch flex flex-col items-start justify-between leading-[0] not-italic p-[16px] relative size-full">
                              <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0" data-name="Title">
                                <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
                                  <p className="leading-[1.2]">{article.title}</p>
                                </div>
                                <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] w-[168px]">
                                  <p className="leading-[1.2]">{article.source}</p>
                                </div>
                              </div>
                              <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0f0f0f] text-[12px]" style={{ width: "min-content" }}>
                                <p className="[text-underline-position:from-font] decoration-solid leading-[1.2] underline">Lire l'article</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#a69bf8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    )
  }

  function CarePlanSection() {
    return (
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-5 py-4 relative w-full">
            <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">
              <p className="leading-[1.2] whitespace-pre">Votre Care Plan</p>
            </div>
            <CarePlanInsight
              insightNumber={1}
              title="Parce que vous avez mangé salé"
              description="You're improving this month, Loris! Your symptoms were overall less painful as February this year."
              articles={fakeArticles.nutrition}
              category="nutrition"
            />
            <CarePlanInsight
              insightNumber={2}
              title="Parce que vous étiez modérément stressé"
              description="You're improving this month, Loris! Your symptoms were overall less painful as February this year."
              articles={fakeArticles.stress}
              category="stress"
            />
          </div>
        </div>
      </div>
    )
  }

  // Bottom Navigation
  function BottomNavigation() {
    return (
      <div className="absolute bg-[#faf9f9] bottom-0 h-[120px] left-1/2 translate-x-[-50%] w-[393px]" data-name="nav">
        <div className="box-border content-stretch flex h-[120px] items-start justify-between overflow-clip pb-[26px] pt-[15px] px-7 relative w-[393px]">
          <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
            {/* Home */}
            <button
              className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-100"
            >
              <div className="relative shrink-0 size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path 
                      d={svgPaths.p3039c600} 
                      stroke="black" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                    />
                    <path d="M9 22V12H15V22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-black">
                <p className="leading-[1.2] whitespace-pre">Home</p>
              </div>
            </button>

            {/* Explore */}
            <button
              className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-60 hover:opacity-80"
            >
              <div className="relative shrink-0 size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path 
                      d={svgPaths.pace200} 
                      stroke="#A19F9E" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                    />
                    <path d={svgPaths.p3dd108f1} stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-[#a19f9e]">
                <p className="leading-[1.2] whitespace-pre">Explore</p>
              </div>
            </button>

            {/* Add button - positioned in the middle */}
            <button 
              onClick={onPlusClick}
              className="bg-black box-border content-stretch flex gap-[6.1px] items-center justify-center p-[23.18px] relative rounded-[300px] shrink-0 size-[61px] transition-transform hover:scale-105 active:scale-95"
            >
              <div className="relative shrink-0 size-[30.5px]" data-name="plus">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
                  <g id="plus">
                    <path d="M15.25 6.35422V24.1459" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d="M6.35437 15.25H24.146" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
            </button>

            {/* Care */}
            <button
              className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-60 hover:opacity-80"
            >
              <div className="relative shrink-0 size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path 
                      d={svgPaths.p3ee62280} 
                      stroke="#A19F9E" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                    />
                  </g>
                </svg>
              </div>
              <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-[#a19f9e]">
                <p className="leading-[1.2] whitespace-pre">Care</p>
              </div>
            </button>

            {/* Profile */}
            <button
              className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-60 hover:opacity-80"
            >
              <div className="relative shrink-0 size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path 
                      d={svgPaths.p82039c0} 
                      stroke="#A19F9E" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                    />
                    <path d={svgPaths.p2c19cb00} stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-[#a19f9e]">
                <p className="leading-[1.2] whitespace-pre">Loris</p>
              </div>
            </button>
          </div>
          <div className="absolute bottom-0 h-[27px] left-0 w-[393px]" data-name="Home Bar">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 27">
              <g id="Home Bar">
                <g id="Background">
                  <g id="background-secondary"></g>
                </g>
                <path clipRule="evenodd" d={svgPaths.p376c5d00} fill="var(--fill-0, black)" fillRule="evenodd" id="color" />
              </g>
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d7d7d7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    )
  }

  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden relative w-full max-w-[393px] mx-auto rounded-[44px]" data-name="Homepage">
      {/* Background elements remain fixed */}
      <BgLinear />
      <div className="absolute h-[338px] left-[277px] top-[-15px] w-[264px]">
        <div className="absolute inset-[-73.96%_-94.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 764 838">
            <g filter="url(#filter0_gf_1_504)" id="Ellipse 1437" opacity="0.7">
              <ellipse cx="382" cy="419" fill="var(--fill-0, #FFD1B7)" rx="132" ry="169" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="838" id="filter0_gf_1_504" width="764" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" seed="6586" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="38" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_504">
                  <feMergeNode in="displacedImage" />
                </feMerge>
                <feGaussianBlur result="effect2_foregroundBlur_1_504" stdDeviation="125" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Progress bar fixed at top */}
      <div className="sticky top-0 z-10 w-full">
        <ProgressBar />
      </div>
      
      {/* Main scrollable content */}
      <div className="flex-1 overflow-y-auto pt-[100px] pb-[140px]">
        {/* Greeting and mood widget */}
        <div className="px-5 mb-6">
          <Frame6174 />
        </div>
        
        {/* Health status section */}
        <HealthStatusSection />
        
        {/* Blood pressure chart section */}
        <BloodPressureChart />
        
        {/* Care plan section */}
        <CarePlanSection />
      </div>
      
      {/* Bottom navigation fixed at bottom */}
      <BottomNavigation />
    </div>
  )
}

export default HomepageNoLog