import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import svgPaths from '../utils/svgPaths'
import GradientBackground from './mobile/GradientBackground'
import MobileFrame from './mobile/MobileFrame'
import MobileNav from './MobileNav'

const HomepageNoLog = ({ onPlusClick, onBackClick }) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    activeTab: 'home',
    moodEntries: 0,
    currentPage: 'home',
    showTooltip: false,
    selectedArticle: null,
    showArticleModal: false,
    showTestModal: false
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
      },
      {
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZWF0aW5nJTIwZGlldHxlbnwxfHx8fDE3NTc5MjU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Les bienfaits du régime méditerranéen",
        source: "Santé & Nutrition",
        excerpt: "Découvrez pourquoi le régime méditerranéen est considéré comme l'un des plus sains au monde."
      },
      {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwaGVhbHRofGVufDF8fHx8MTc1NzkyNTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Comment manger plus de légumes verts",
        source: "Végétal & Co",
        excerpt: "Des conseils pratiques pour intégrer plus de légumes verts dans votre alimentation quotidienne."
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
      },
      {
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcmVsYXhhdGlvbnxlbnwxfHx8fDE3NTc5MjU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Yoga pour réduire le stress",
        source: "Yoga & Zen",
        excerpt: "Apprenez des postures de yoga simples pour apaiser votre esprit et réduire le stress."
      },
      {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhdGhpbmclMjBleGVyY2lzZXN8ZW58MXx8fHwxNzU3OTI1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Exercices de respiration anti-stress",
        source: "Respiration & Bien-être",
        excerpt: "Découvrez des techniques de respiration efficaces pour gérer le stress et l'anxiété."
      }
    ]
  }

  const handleOpenArticle = (article, category) => {
    console.log('Article clicked:', article.title)
    setState(prev => ({ 
      ...prev, 
      selectedArticle: article,
      showArticleModal: true 
    }))
  }

  const handleCloseArticle = () => {
    console.log('Closing article modal')
    setState(prev => ({ 
      ...prev, 
      selectedArticle: null,
      showArticleModal: false,
      showTestModal: false
    }))
  }

  // Navigation handlers for bottom nav
  const handleNavigation = (section) => {
    switch(section) {
      case 'home':
        // Navigate to homepage (current page)
        navigate('/app')
        break
      case 'explore':
        navigate('/app/visualization')
        break
      case 'care':
        // Navigate to reports/rapports page
        navigate('/app/export')
        break
      case 'profile':
        // Navigate to profile when implemented  
        alert('Profil sera disponible dans une future version')
        break
      default:
        break
    }
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
      <button 
        onClick={onPlusClick}
        className="absolute bg-black box-border content-stretch flex gap-[5.2px] items-center justify-center left-[283px] p-[19.76px] rounded-[255.738px] size-[52px] top-[42px] hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <Plus />
      </button>
    );
  }

  function SenciaWidget() {
    return (
      <div className="homepage-daily-checkin">
        <div className="homepage-checkin-content">
          <div className="homepage-checkin-text">
            <div className="homepage-checkin-question brand-gradient-text">
              Comment vous sentez-vous ce matin ?
            </div>
            <div className="homepage-checkin-subtitle">
              0 remplissage /2, à toi de jouer !
            </div>
          </div>
          <button onClick={onPlusClick} className="homepage-plus-button">
            <Plus />
          </button>
        </div>
      </div>
    );
  }

  function Frame6174() {
    return (
      <div className="homepage-header">
        <div className="homepage-greeting">
          <div className="step-title" style={{ fontSize: '24px', margin: '0' }}>
            Bonjour, Loris !
          </div>
          <div className="homepage-streak-badge">
            <div className="homepage-streak-icon">
              <svg width="16" height="16" fill="none" viewBox="0 0 18 18">
                <g id="Icons">
                  <path d={svgPaths.p12ae2400} fill="url(#paint0_linear_1_862)" stroke="#0E7AFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_862" x1="3.75" x2="14.25" y1="9.375" y2="9.375">
                    <stop stopColor="#A69BF8" />
                    <stop offset="1" stopColor="#0E7AFE" />
                  </linearGradient>
                </defs>
            </svg>
            </div>
            <div className="homepage-streak-text">
              6 jours
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Health Status Card Component
  function HealthStatusCard({ icon, title, description, status, onClick }) {
    return (
      <button onClick={onClick} className="homepage-status-card">
        <div className="homepage-status-icon">
              {icon}
                  </div>
        <div className="homepage-status-content">
          <div className="homepage-status-title">
            {title}
                </div>
          <div className="homepage-status-description">
            {description}
                  </div>
                </div>
        <div className="homepage-chevron">
          <svg width="16" height="16" fill="none" viewBox="0 0 7 11">
            <path d="M5.5 10L1 5.5L5.5 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                    </svg>
        </div>
      </button>
    )
  }

  function Frame6050() {
    return (
      <div className="relative shrink-0 w-6 h-6">
        <svg width="24" height="24" className="block" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path d={svgPaths.p2a19c8c0} fill="var(--fill-0, #10B981)" id="Polygon 1" />
          </g>
        </svg>
      </div>
    )
  }

  function Frame6052() {
    return (
      <div className="relative shrink-0 w-6 h-6">
        <svg width="24" height="24" className="block" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path d={svgPaths.p28ffba00} fill="var(--fill-0, #F59E0B)" id="Polygon 1" />
          </g>
        </svg>
      </div>
    )
  }

  function Frame6055() {
    return (
      <div className="relative shrink-0 w-6 h-6">
        <svg width="24" height="24" className="block" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path d={svgPaths.pbb5f480} fill="var(--fill-0, #EF4444)" id="Polygon 1" />
          </g>
        </svg>
      </div>
    )
  }

  function HealthStatusSection() {
    return (
      <div className="homepage-section">
        <div className="homepage-section-title">
          Votre état de santé
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
    )
  }

  function BloodPressureChart() {
    return (
      <div className="homepage-section">
        <div className="homepage-biomarkers-header">
          <div className="homepage-section-title">
            Vos biomarqueurs
              </div>
          <button className="homepage-see-more-button">
            Voir plus
              </button>
            </div>
        <div className="bg-white rounded-[20px] p-4 w-full">
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
                  <p className="leading-[1.2]">Pression artérielle</p>
                </div>
            <div className="relative shrink-0 w-4 h-4" data-name="icons_utilitary_leftsm">
              <svg width="16" height="16" className="block" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
    )
  }

  function CarePlanInsight({ insightNumber, title, description, articles, category }) {
    return (
      <div 
        className="shrink-0 w-full max-w-[353px]" 
        data-name="insights care plan"
        style={{
          display: 'flex',
          padding: '16px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '16px',
          borderRadius: '20px',
          border: '1px solid #A69BF8',
          background: '#FFF'
        }}
      >
        <>
          <div className="content-stretch flex flex-col gap-4 items-start justify-center relative w-full">
          <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
            <div className="relative shrink-0 size-3" data-name="Icons">
              <svg width="12" height="12" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
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
            <div className="article-cards-scroll">
              <div className="article-cards-container" data-name="List">
                    {articles.map((article, index) => (
                      <button 
                        key={index}
                        onClick={() => handleOpenArticle(article, category)}
                        className="article-card bg-[#f6f6f6] flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] transition-transform hover:scale-105 cursor-pointer" 
                        data-name="Mini Card"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <div className="bg-center bg-cover bg-no-repeat h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image" style={{ backgroundImage: `url('${article.image}')` }} />
                        <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
                          <div className="relative size-full">
                        <div className="box-border flex flex-col items-start justify-between leading-[0] not-italic p-[16px] relative size-full">
                          <div className="flex flex-col gap-1.5 items-start justify-start relative shrink-0" data-name="Title">
                            <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#0f0f0f] text-[16px] w-full">
                                  <p className="leading-[1.2]">{article.title}</p>
                                </div>
                            <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] w-full">
                                  <p className="leading-[1.2]">{article.source}</p>
                                </div>
                              </div>
                          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center relative shrink-0 text-[#0f0f0f] text-[12px]">
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
        </>
      </div>
    )
  }

  function CarePlanSection() {
    return (
      <div className="homepage-section">
        <div className="homepage-section-title">
          Votre Care Plan
            </div>
        <div>
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
              onClick={() => handleNavigation('explore')}
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
              onClick={() => handleNavigation('care')}
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
              onClick={() => handleNavigation('profile')}
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

  // Article Modal Component
  function ArticleModal({ article, onClose }) {
    if (!article) return null

    const getArticleContent = (title) => {
      const contentMap = {
        "10 astuces pour réduire le sodium au quotidien": {
          content: `
            <h2>Introduction</h2>
            <p>La réduction du sodium dans votre alimentation est essentielle pour maintenir une pression artérielle saine et prévenir les maladies cardiovasculaires. Voici 10 conseils pratiques pour y parvenir.</p>
            
            <h3>1. Lisez les étiquettes nutritionnelles</h3>
            <p>Vérifiez toujours la teneur en sodium des produits emballés. Choisissez des aliments contenant moins de 140mg de sodium par portion.</p>
            
            <h3>2. Cuisinez plus à la maison</h3>
            <p>Les plats préparés contiennent souvent des quantités excessives de sel. En cuisinant vous-même, vous contrôlez exactement la quantité de sodium ajoutée.</p>
            
            <h3>3. Utilisez des herbes et épices</h3>
            <p>Remplacez le sel par des herbes fraîches, de l'ail, du citron, du vinaigre balsamique ou des épices pour rehausser le goût de vos plats.</p>
            
            <h3>4. Rincez les légumes en conserve</h3>
            <p>Rincez toujours les légumes en conserve sous l'eau froide pour éliminer une partie du sodium ajouté.</p>
            
            <h3>5. Choisissez des alternatives</h3>
            <p>Optez pour des versions "sans sel ajouté" ou "faible en sodium" de vos aliments préférés.</p>
          `,
          author: "Dr. Marie Dubois, Nutritionniste",
          readTime: "5 min de lecture"
        },
        "L'impact du sel sur la pression artérielle": {
          content: `
            <h2>Comprendre le mécanisme</h2>
            <p>Le sodium, principal composant du sel, joue un rôle crucial dans la régulation de la pression artérielle. Voici comment il affecte votre système cardiovasculaire.</p>
            
            <h3>Le processus physiologique</h3>
            <p>Lorsque vous consommez trop de sodium, votre corps retient plus d'eau pour diluer cette concentration. Cette rétention d'eau augmente le volume sanguin, ce qui force le cœur à travailler plus fort.</p>
            
            <h3>Les effets à long terme</h3>
            <p>Une consommation excessive de sel peut entraîner une hypertension artérielle, un facteur de risque majeur pour les maladies cardiaques, les accidents vasculaires cérébraux et les problèmes rénaux.</p>
            
            <h3>Recommandations</h3>
            <p>L'Organisation Mondiale de la Santé recommande de ne pas dépasser 5g de sel par jour (soit environ 2g de sodium).</p>
            
            <h3>Signes d'alerte</h3>
            <p>Soyez attentif aux symptômes comme les maux de tête, la fatigue, les gonflements et les palpitations qui peuvent indiquer une consommation excessive de sodium.</p>
          `,
          author: "Dr. Pierre Martin, Cardiologue",
          readTime: "7 min de lecture"
        },
        "5 techniques de relaxation rapides": {
          content: `
            <h2>Gérer le stress au quotidien</h2>
            <p>Le stress chronique peut avoir des effets néfastes sur votre santé. Voici 5 techniques simples que vous pouvez pratiquer n'importe où, n'importe quand.</p>
            
            <h3>1. Respiration 4-7-8</h3>
            <p>Inspirez par le nez pendant 4 secondes, retenez votre souffle pendant 7 secondes, puis expirez par la bouche pendant 8 secondes. Répétez 4 cycles.</p>
            
            <h3>2. Relaxation musculaire progressive</h3>
            <p>Tendez et relâchez chaque groupe musculaire, en commençant par les orteils et en remontant jusqu'au visage. Maintenez la tension pendant 5 secondes, puis relâchez.</p>
            
            <h3>3. Visualisation guidée</h3>
            <p>Fermez les yeux et imaginez un endroit paisible. Concentrez-vous sur tous les détails sensoriels : les sons, les odeurs, les textures.</p>
            
            <h3>4. Méditation de pleine conscience</h3>
            <p>Asseyez-vous confortablement et concentrez-vous sur votre respiration. Quand votre esprit vagabonde, ramenez doucement votre attention sur votre souffle.</p>
            
            <h3>5. Auto-massage des tempes</h3>
            <p>Utilisez vos index pour faire de petits cercles sur vos tempes, en appliquant une pression douce. Cela peut aider à réduire les tensions et les maux de tête.</p>
          `,
          author: "Sophie Laurent, Psychologue",
          readTime: "6 min de lecture"
        },
        "Méditation : guide pour débutants": {
          content: `
            <h2>Votre premier pas vers la méditation</h2>
            <p>La méditation n'est pas réservée aux moines bouddhistes. C'est une pratique accessible à tous qui peut transformer votre bien-être mental et physique.</p>
            
            <h3>Qu'est-ce que la méditation ?</h3>
            <p>La méditation est une pratique qui consiste à entraîner votre attention et votre conscience. Elle vous aide à développer une meilleure compréhension de vous-même et de votre environnement.</p>
            
            <h3>Les bienfaits scientifiquement prouvés</h3>
            <p>Des études montrent que la méditation régulière peut réduire le stress, améliorer la concentration, renforcer le système immunitaire et même ralentir le vieillissement cérébral.</p>
            
            <h3>Comment commencer</h3>
            <p>Commencez par seulement 5 minutes par jour. Trouvez un endroit calme, asseyez-vous confortablement, fermez les yeux et concentrez-vous sur votre respiration.</p>
            
            <h3>Techniques pour débutants</h3>
            <p>• Méditation de respiration : concentrez-vous sur l'air qui entre et sort de vos narines<br/>
            • Méditation de scan corporel : portez votre attention sur chaque partie de votre corps<br/>
            • Méditation de gratitude : pensez à trois choses pour lesquelles vous êtes reconnaissant</p>
            
            <h3>Conseils pratiques</h3>
            <p>Il est normal que votre esprit vagabonde. L'important est de remarquer ces pensées et de ramener doucement votre attention sur votre objet de méditation.</p>
          `,
          author: "Marc Rousseau, Instructeur de méditation",
          readTime: "8 min de lecture"
        }
      }
      
      return contentMap[title] || {
        content: `
          <h2>Article en cours de développement</h2>
          <p>Cet article est actuellement en cours de rédaction. Le contenu complet sera bientôt disponible.</p>
          <p>En attendant, vous pouvez explorer nos autres articles sur la santé et le bien-être.</p>
        `,
        author: "Équipe Sencia",
        readTime: "2 min de lecture"
      }
    }

    const articleData = getArticleContent(article.title)

    return (
      <div className="w-full h-full overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url('${article.image}')` }}
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{article.source}</span>
              <span>•</span>
              <span>{articleData.readTime}</span>
              <span>•</span>
              <span>{articleData.author}</span>
            </div>
          </div>
          
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />
        </div>
        
        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Fermer
            </button>
            <button 
              onClick={() => window.open(article.image, '_blank')}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Partager
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Article Modal - Rendered at top level like logging modal */}
      {state.showArticleModal && state.selectedArticle && (
        <div className="article-modal-bg" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '16px'
        }} onClick={handleCloseArticle}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            maxWidth: '400px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'hidden',
            transform: 'translateY(0)'
          }} onClick={e => e.stopPropagation()}>
            <ArticleModal 
              article={state.selectedArticle} 
              onClose={handleCloseArticle} 
            />
          </div>
        </div>
      )}

      {/* Simple Test Modal */}
      {state.showTestModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '400px',
            width: '90%'
          }}>
            <h2>Test Modal</h2>
            <p>This is a simple test modal to check if modals work at all.</p>
            <button 
              onClick={handleCloseArticle}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <GradientBackground />
      <MobileFrame showStatusBar={false}>
        <div className="homepage-content w-full max-w-[393px] mx-auto" style={{ padding: '0', minHeight: '100vh' }}>
          <Group8 />
          <Frame6174 />
          <div className="content-sections w-full" style={{ paddingBottom: '80px' }}>
            <SenciaWidget />
        <HealthStatusSection />
        <BloodPressureChart />
        <CarePlanSection />
        
        {/* Test button for debugging */}
        <div className="p-4">
          <button 
            onClick={() => {
              console.log('Test button clicked')
              setState(prev => ({ 
                ...prev, 
                showTestModal: true 
              }))
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Test Modal
          </button>
        </div>
          </div>
        </div>
      
        {/* Bottom navigation fixed at bottom */}
      <div className="mobile-nav-wrapper">
        <MobileNav
          active={'Home'}
          onNav={(page) => {
            const map = { Home: 'home', Explore: 'explore', Care: 'care', Loris: 'profile' }
            handleNavigation(map[page])
          }}
          onAdd={onPlusClick}
        />
      </div>
      </MobileFrame>
    </>
  )
}

export default HomepageNoLog