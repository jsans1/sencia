import { useState } from "react";
import { useNavigate } from "react-router-dom";
import svgPaths from "../utils/svgPaths";
import GradientBackground from "./mobile/GradientBackground";
import MobileFrame from "./mobile/MobileFrame";
import MobileNav from "./MobileNav";
import TopLogo from "./TopLogo";

const HomepageNoLog = ({ onPlusClick, onBackClick }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    activeTab: "home",
    moodEntries: 0,
    currentPage: "home",
    showTooltip: false,
    selectedArticle: null,
    showArticleModal: false,
  });

  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Fake article data with realistic content
  const fakeArticles = {
    nutrition: [
      {
        image:
          "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NTc4NTcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "10 astuces pour réduire le sodium au quotidien",
        source: "Nutrition Santé",
        excerpt:
          "Découvrez comment diminuer votre consommation de sel sans sacrifier le goût de vos plats préférés.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1621525434111-87a99d170b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMHByZXNzdXJlJTIwaGVhbHRofGVufDF8fHx8MTc1NzkyNTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "L'impact du sel sur la pression artérielle",
        source: "Cœur et Santé",
        excerpt:
          "Comprendre le lien entre sodium et hypertension pour mieux protéger votre système cardiovasculaire.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZWF0aW5nJTIwZGlldHxlbnwxfHx8fDE3NTc5MjU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Les bienfaits du régime méditerranéen",
        source: "Santé & Nutrition",
        excerpt:
          "Découvrez pourquoi le régime méditerranéen est considéré comme l'un des plus sains au monde.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwaGVhbHRofGVufDF8fHx8MTc1NzkyNTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Comment manger plus de légumes verts",
        source: "Végétal & Co",
        excerpt:
          "Des conseils pratiques pour intégrer plus de légumes verts dans votre alimentation quotidienne.",
      },
    ],
    stress: [
      {
        image:
          "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjBtYW5hZ2VtZW50JTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU3OTI1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "5 techniques de relaxation rapides",
        source: "Bien-être Mental",
        excerpt:
          "Des exercices simples à pratiquer partout pour gérer le stress du quotidien en quelques minutes.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1602713464923-b97ad228fcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3N8ZW58MXx8fHwxNzU3OTI1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Méditation : guide pour débutants",
        source: "Mindfulness France",
        excerpt:
          "Initiez-vous à la méditation avec ce guide pratique pour retrouver sérénité et équilibre.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcmVsYXhhdGlvbnxlbnwxfHx8fDE3NTc5MjU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Yoga pour réduire le stress",
        source: "Yoga & Zen",
        excerpt:
          "Apprenez des postures de yoga simples pour apaiser votre esprit et réduire le stress.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhdGhpbmclMjBleGVyY2lzZXN8ZW58MXx8fHwxNzU3OTI1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Exercices de respiration anti-stress",
        source: "Respiration & Bien-être",
        excerpt:
          "Découvrez des techniques de respiration efficaces pour gérer le stress et l'anxiété.",
      },
    ],
  };

  const handleOpenArticle = (article, category) => {
    console.log("Article clicked:", article.title);
    setState((prev) => ({
      ...prev,
      selectedArticle: article,
      showArticleModal: true,
    }));
  };

  const handleCloseArticle = () => {
    console.log("Closing article modal");
    setState((prev) => ({
      ...prev,
      selectedArticle: null,
      showArticleModal: false,
    }));
  };

  // Navigation handlers for bottom nav
  const handleNavigation = (section) => {
    switch (section) {
      case "home":
        // Navigate to homepage (current page)
        navigate("/app");
        break;
      case "explore":
        navigate("/app/visualization");
        break;
      case "care":
        // Navigate to reports/rapports page
        navigate("/app/export");
        break;
      case "profile":
        navigate("/app/profile");
        break;
      default:
        break;
    }
  };

  function Time() {
    return (
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0"
        data-name="Time"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-4 pr-1.5 py-0 relative w-full">
            <div className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function DynamicIslandSpacer() {
    return (
      <div
        className="h-2.5 shrink-0 w-[124px]"
        data-name="Dynamic Island spacer"
      />
    );
  }

  function Battery() {
    return (
      <div
        className="h-[13px] relative shrink-0 w-[27.328px]"
        data-name="Battery"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 13"
        >
          <g id="Battery">
            <rect
              height="12"
              id="Border"
              opacity="0.35"
              rx="3.8"
              stroke="var(--stroke-0, black)"
              width="24"
              x="0.5"
              y="0.5"
            />
            <path
              d={svgPaths.p3bbd9700}
              fill="var(--fill-0, black)"
              id="Cap"
              opacity="0.4"
            />
            <rect
              fill="var(--fill-0, black)"
              height="9"
              id="Capacity"
              rx="2.5"
              width="21"
              x="2"
              y="2"
            />
          </g>
        </svg>
      </div>
    );
  }

  function Levels() {
    return (
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0"
        data-name="Levels"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-1.5 pr-4 py-0 relative w-full">
            <div
              className="h-[12.226px] relative shrink-0 w-[19.2px]"
              data-name="Cellular Connection"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 13"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1e09e400}
                  fill="var(--fill-0, black)"
                  fillRule="evenodd"
                  id="Cellular Connection"
                />
              </svg>
            </div>
            <div
              className="h-[12.328px] relative shrink-0 w-[17.142px]"
              data-name="Wifi"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 13"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1fac3f80}
                  fill="var(--fill-0, black)"
                  fillRule="evenodd"
                  id="Wifi"
                />
              </svg>
            </div>
            <Battery />
          </div>
        </div>
      </div>
    );
  }

  function Frame() {
    return (
      <div
        className="content-stretch flex items-center justify-between relative shrink-0 w-full"
        data-name="Frame"
      >
        <Time />
        <DynamicIslandSpacer />
        <Levels />
      </div>
    );
  }

  function StatusBarIPhone() {
    return (
      <div
        className="box-border content-stretch flex flex-col items-start justify-start pb-[30px] pt-[21px] px-0 relative shrink-0 w-full"
        data-name="Status Bar - iPhone"
      >
        <Frame />
      </div>
    );
  }


  function Group8() {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        {/* Group7 component removed */}
      </div>
    );
  }

  function ProgressBar() {
    return (
      <div
        className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[393px]"
        data-name="progress-bar"
      >
        <StatusBarIPhone />
        <Group8 />
      </div>
    );
  }

  function Frame6150() {
    return (
      <div
        className="absolute content-stretch flex flex-col gap-3 items-start justify-center leading-[0] not-italic top-1/2 translate-x-[-50%] translate-y-[-50%] w-[241px]"
        style={{ left: "calc(50% - 30px)" }}
      >
        <div
          className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Bold',_sans-serif] from-[#a69bf8] relative shrink-0 text-[20px] to-[#0e7afe] w-full"
          style={{ WebkitTextFillColor: "transparent" }}
        >
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
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26 26"
        >
          <g id="plus">
            <path
              d="M13 5.41669V20.5834"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.13115"
            />
            <path
              d="M5.41703 13H20.5837"
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.13115"
            />
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
          <div className="step-title" style={{ fontSize: "24px", margin: "0" }}>
            Bonjour, Loris !
          </div>
          <div className="homepage-streak-badge">
            <div className="homepage-streak-icon">
              <svg width="16" height="16" fill="none" viewBox="0 0 18 18">
                <g id="Icons">
                  <path
                    d={svgPaths.p12ae2400}
                    fill="url(#paint0_linear_1_862)"
                    stroke="#0E7AFE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                  />
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1_862"
                    x1="3.75"
                    x2="14.25"
                    y1="9.375"
                    y2="9.375"
                  >
                    <stop stopColor="#A69BF8" />
                    <stop offset="1" stopColor="#0E7AFE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="homepage-streak-text">6 jours</div>
          </div>
        </div>
      </div>
    );
  }

  // Health Status Card Component
  function HealthStatusCard({ icon, title, description, status, onClick }) {
    const getStatusClass = (status) => {
      switch (status) {
        case "good":
          return "homepage-status-card-good";
        case "warning":
          return "homepage-status-card-warning";
        case "error":
          return "homepage-status-card-error";
        default:
          return "";
      }
    };

    return (
      <button
        onClick={onClick}
        className={`homepage-status-card ${getStatusClass(status)}`}
      >
        <div className="homepage-status-icon">{icon}</div>
        <div className="homepage-status-content">
          <div className="homepage-status-title">{title}</div>
          <div className="homepage-status-description">{description}</div>
        </div>
        <div className="homepage-chevron">
          <svg width="16" height="16" fill="none" viewBox="0 0 7 11">
            <path
              d="M5.5 10L1 5.5L5.5 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.125"
            />
          </svg>
        </div>
      </button>
    );
  }

  function Frame6050() {
    return (
      <div className="relative shrink-0 w-6 h-6">
        <svg
          width="24"
          height="24"
          className="block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path
              d={svgPaths.p2a19c8c0}
              fill="var(--fill-0, #10B981)"
              id="Polygon 1"
            />
          </g>
        </svg>
      </div>
    );
  }

  function Frame6052() {
    return (
      <div className="relative shrink-0 w-6 h-6">
        <svg
          width="24"
          height="24"
          className="block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path
              d={svgPaths.p28ffba00}
              fill="var(--fill-0, #F59E0B)"
              id="Polygon 1"
            />
          </g>
        </svg>
      </div>
    );
  }

  function Frame6055() {
    return (
      <div className="relative shrink-0 w-6 h-6">
        <svg
          width="24"
          height="24"
          className="block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Frame 6050">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" />
            <path
              d={svgPaths.pbb5f480}
              fill="var(--fill-0, #EF4444)"
              id="Polygon 1"
            />
          </g>
        </svg>
      </div>
    );
  }

  function HealthStatusSection() {
    return (
      <div className="homepage-section">
        <div className="homepage-section-title">Votre état de santé</div>
        <HealthStatusCard
          icon={<Frame6050 />}
          title="Symptômes globaux"
          description="You're improving this month, Loris ! Your symptoms were overall less painful as February this year."
          status="good"
          onClick={() => console.log("Viewing global symptoms")}
        />
        <HealthStatusCard
          icon={<Frame6052 />}
          title="Pression artérielle"
          description="2-3 Moderate crises reported this month."
          status="warning"
          onClick={() => console.log("Viewing blood pressure")}
        />
        <HealthStatusCard
          icon={<Frame6055 />}
          title="Adhérence aux traitements"
          description="Try to stick to your prescription."
          status="error"
          onClick={() => console.log("Viewing treatment adherence")}
        />
      </div>
    );
  }

  function BloodPressureChart() {
    return (
      <div className="homepage-section">
        <div className="homepage-biomarkers-header">
          <div className="homepage-section-title">Vos biomarqueurs</div>
          <button className="homepage-see-more-button">Voir plus</button>
        </div>
        <div className="homepage-chart-card-simple w-full">
          <div className="flex gap-3 items-center justify-start w-full mb-4">
            <div className="font-['SF_Pro_Display:Medium',_sans-serif] text-[16px] text-black flex-1">
              <p className="leading-[1.2]">Pression artérielle</p>
            </div>
            <div className="w-4 h-4 flex-shrink-0">
              <svg
                width="16"
                height="16"
                className="block"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <g id="icons_utilitary_leftsm">
                  <path
                    d={svgPaths.p1fc81300}
                    fill="var(--fill-0, #0F0F0F)"
                    id="Vector"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="homepage-chart-simple w-full">
            <img 
              src="/src/assets/chart.svg" 
              alt="Blood pressure chart" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  }

  function CarePlanInsight({
    insightNumber,
    title,
    description,
    articles,
    category,
  }) {
    return (
      <div className="homepage-insight-card w-full">
        <div className="homepage-insight-header">
          <div className="homepage-insight-icon">
            <svg
              width="12"
              height="12"
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12 12"
            >
              <g clipPath="url(#clip0_1_1086)" id="Icons">
                <path
                  d={svgPaths.pd74a700}
                  id="Vector"
                  stroke="url(#paint0_linear_1_1086)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1_1086"
                  x1="1.00049"
                  x2="11.0008"
                  y1="6.00006"
                  y2="6.00006"
                >
                  <stop stopColor="#A69BF8" />
                  <stop offset="1" stopColor="#0E7AFE" />
                </linearGradient>
                <clipPath id="clip0_1_1086">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="homepage-insight-badge">Insight {insightNumber}</div>
        </div>

        <div className="homepage-insight-title-container">
          <div className="homepage-insight-title">{title}</div>

          <div className="homepage-insight-description">{description}</div>
        </div>

        <div className="article-cards-scroll">
          <div className="article-cards-container">
            {articles.map((article, index) => (
              <button
                key={index}
                onClick={() => handleOpenArticle(article, category)}
                className="article-card"
                style={{ pointerEvents: "auto" }}
              >
                <div
                  className="article-card-image"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="article-card-content">
                  <div className="article-card-title">{article.title}</div>
                  <div className="article-card-source">{article.source}</div>
                  <div className="article-card-link">Lire l'article</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function CarePlanSection() {
    return (
      <div className="homepage-section">
        <div className="homepage-section-title">Votre Care Plan</div>
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
    );
  }

  // Bottom Navigation
  function BottomNavigation() {
    return (
      <div
        className="absolute bg-[#faf9f9] bottom-0 h-[120px] left-1/2 translate-x-[-50%] w-[393px]"
        data-name="nav"
      >
        <div className="box-border content-stretch flex h-[120px] items-start justify-between overflow-clip pb-[26px] pt-[15px] px-7 relative w-[393px]">
          <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
            {/* Home */}
            <button className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-100">
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d={svgPaths.p3039c600}
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 22V12H15V22"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-black">
                <p className="leading-[1.2] whitespace-pre">Home</p>
              </div>
            </button>

            {/* Explore */}
            <button className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-60 hover:opacity-80">
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d={svgPaths.pace200}
                      stroke="#A19F9E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d={svgPaths.p3dd108f1}
                      stroke="#A19F9E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
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
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 31 31"
                >
                  <g id="plus">
                    <path
                      d="M15.25 6.35422V24.1459"
                      id="Vector"
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M6.35437 15.25H24.146"
                      id="Vector_2"
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </g>
                </svg>
              </div>
            </button>

            {/* Care */}
            <button className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-60 hover:opacity-80">
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
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
            <button className="content-stretch flex flex-col gap-[7px] items-center justify-center relative shrink-0 w-[45px] transition-colors opacity-60 hover:opacity-80">
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d={svgPaths.p82039c0}
                      stroke="#A19F9E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d={svgPaths.p2c19cb00}
                      stroke="#A19F9E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-[#a19f9e]">
                <p className="leading-[1.2] whitespace-pre">Loris</p>
              </div>
            </button>
          </div>
          <div
            className="absolute bottom-0 h-[27px] left-0 w-[393px]"
            data-name="Home Bar"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 393 27"
            >
              <g id="Home Bar">
                <g id="Background">
                  <g id="background-secondary"></g>
                </g>
                <path
                  clipRule="evenodd"
                  d={svgPaths.p376c5d00}
                  fill="var(--fill-0, black)"
                  fillRule="evenodd"
                  id="color"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#d7d7d7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
        />
      </div>
    );
  }

  // Article Modal Component
  function ArticleModal({ article, onClose }) {
    if (!article) return null;

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
          readTime: "5 min de lecture",
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
          readTime: "7 min de lecture",
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
          readTime: "6 min de lecture",
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
          readTime: "8 min de lecture",
        },
      };

      return (
        contentMap[title] || {
          content: `
          <h2>Article en cours de développement</h2>
          <p>Cet article est actuellement en cours de rédaction. Le contenu complet sera bientôt disponible.</p>
          <p>En attendant, vous pouvez explorer nos autres articles sur la santé et le bien-être.</p>
        `,
          author: "Équipe Sencia",
          readTime: "2 min de lecture",
        }
      );
    };

    const articleData = getArticleContent(article.title);

    return (
      <div className="article-modal-container">
        {/* Header with Image */}
        <div
          className="article-modal-header"
          style={{ backgroundImage: `url('${article.image}')` }}
        >
          <button onClick={onClose} className="article-modal-close">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="article-modal-content">
          <h1 className="article-modal-title">{article.title}</h1>

          <div className="article-modal-meta">
            <div className="article-modal-meta-item">
              <span>{article.source}</span>
            </div>
            <div className="article-modal-meta-item">
              <span>•</span>
            </div>
            <div className="article-modal-meta-item">
              <span>{articleData.readTime}</span>
            </div>
            <div className="article-modal-meta-item">
              <span>•</span>
            </div>
            <div className="article-modal-meta-item">
              <span>{articleData.author}</span>
            </div>
          </div>

          <div
            className="article-modal-body"
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />
        </div>

        {/* Footer */}
        <div className="article-modal-footer">
          <button
            onClick={onClose}
            className="article-modal-button article-modal-button-secondary"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: article.title,
                  text: article.excerpt,
                  url: window.location.href,
                });
              } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href);
                alert("Lien copié dans le presse-papiers");
              }
            }}
            className="article-modal-button article-modal-button-primary"
          >
            Partager
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Article Modal - Rendered at top level like logging modal */}
      {state.showArticleModal && state.selectedArticle && (
        <div className="article-modal-overlay" onClick={handleCloseArticle}>
          <ArticleModal
            article={state.selectedArticle}
            onClose={handleCloseArticle}
          />
        </div>
      )}


      <GradientBackground />
      <MobileFrame showStatusBar={false}>
        <TopLogo />
        <div
          className="homepage-content w-full max-w-[393px] mx-auto"
          style={{ padding: "0", minHeight: "100vh" }}
        >
          <Group8 />
          <Frame6174 />
          <div
            className="content-sections w-full text-left"
            style={{ paddingBottom: "80px" }}
          >
            <SenciaWidget />
            <HealthStatusSection />
            <BloodPressureChart />
            <CarePlanSection />

          </div>
        </div>

        {/* Bottom navigation fixed at bottom */}
        <div className="mobile-nav-wrapper">
          <MobileNav
            active={"Home"}
            onNav={(page) => {
              const map = {
                Home: "home",
                Explore: "explore",
                Care: "care",
                Loris: "profile",
              };
              handleNavigation(map[page]);
            }}
            onAdd={onPlusClick}
          />
        </div>
      </MobileFrame>
    </>
  );
};

export default HomepageNoLog;
