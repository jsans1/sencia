import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// SVG Paths - extracted from reference design
const svgPaths = {
  // Sencia logo parts
  senciaS: "M0.239935 15.5507H2.32427C2.4485 15.5507 2.55562 15.6455 2.56257 15.7696C2.67093 17.704 4.22578 18.6986 6.37715 18.6986C8.57775 18.6986 9.9533 17.9652 9.9533 16.4676C9.9533 15.4283 9.25018 14.6031 7.5692 14.2363L4.4517 13.6555C1.8843 13.1359 0.478258 11.5772 0.478258 9.28477C0.478258 6.68689 2.70934 4.8224 6.16316 4.8224C9.58487 4.8224 12.0507 6.64721 12.1791 9.6199C12.1849 9.75423 12.0736 9.86555 11.9391 9.86555H9.90031C9.77983 9.86555 9.67494 9.77628 9.66306 9.65639C9.48081 7.8166 8.04926 6.99251 6.16316 6.99251C4.26819 6.99251 2.95401 7.7566 2.95401 9.28477C2.95401 10.5075 3.96256 11.2104 5.67423 11.4856L8.1193 11.944C11.0535 12.6165 12.5512 13.7778 12.5512 16.4676C12.5512 19.3406 9.73932 20.9911 6.37715 20.9911C2.77013 20.9911 0.209869 19.0721 0.000478931 15.8015C-0.00824525 15.6652 0.103387 15.5507 0.239935 15.5507Z",
  senciaE: "M12.7956 12.9221C12.7956 8.39856 15.0269 4.8224 19.856 4.8224C24.2575 4.8224 26.6109 8.09271 26.6109 12.433V13.447C26.6109 13.5791 26.5038 13.6862 26.3717 13.6862H15.7289C15.5951 13.6862 15.485 13.7966 15.4888 13.9303C15.5693 16.7627 17.0634 18.6986 19.8867 18.6986C21.8618 18.6986 23.2966 17.9026 23.78 16.3652C23.8119 16.2638 23.9026 16.1924 24.0089 16.1924H26.1109C26.2647 16.1924 26.3759 16.335 26.3445 16.4856C25.7789 19.1957 23.1036 20.9911 19.8867 20.9911C15.2713 20.9911 12.7956 17.5068 12.7956 12.9221ZM23.7073 11.5465C23.8414 11.5465 23.9523 11.4357 23.9475 11.3016C23.8629 8.94297 22.545 7.11465 19.856 7.11465C17.024 7.11465 15.7011 8.96556 15.5299 11.2929C15.5198 11.4302 15.6319 11.5465 15.7695 11.5465H23.7073Z",
  senciaN: "M28.3168 5.09755H30.0896C30.2136 5.09755 30.317 5.19233 30.3278 5.31586L30.5227 7.54262H30.6451C31.4703 5.95328 33.0596 4.8224 35.4742 4.8224C38.928 4.8224 40.9454 6.99252 40.9454 10.5685V20.4768C40.9454 20.6089 40.8383 20.7159 40.7062 20.7159H38.6169C38.4848 20.7159 38.3777 20.6089 38.3777 20.4768V10.966C38.3777 8.52068 37.2469 7.11465 34.7713 7.11465C32.1732 7.11465 30.6451 8.94865 30.6451 12.0968V20.4768C30.6451 20.6089 30.538 20.7159 30.4059 20.7159H28.3168C28.1847 20.7159 28.0777 20.6089 28.0777 20.4768V5.33671C28.0777 5.20463 28.1847 5.09755 28.3168 5.09755Z",
  senciaC: "M42.1064 12.9221C42.1064 8.06224 44.521 4.8224 49.1669 4.8224C53.238 4.8224 55.2578 7.16247 55.5634 10.1855C55.5775 10.3252 55.4644 10.4463 55.324 10.4463H53.2343C53.1115 10.4463 53.0118 10.3525 52.9972 10.2306C52.7633 8.28146 51.3493 7.11465 49.1669 7.11465C45.9577 7.11465 44.7045 9.71274 44.7045 12.9221C44.7045 16.1924 45.9577 18.7293 49.1669 18.7293C51.4107 18.7293 52.7703 17.6171 53.0532 15.6682C53.0705 15.5491 53.1693 15.4588 53.2896 15.4588H55.3795C55.522 15.4588 55.6354 15.5832 55.6178 15.7246C55.2269 18.879 53.1526 20.9911 49.1976 20.9911C44.521 20.9911 42.1064 17.8429 42.1064 12.9221Z",
  senciaI: "M56.625 1.77281C56.625 0.703092 57.2058 -2.64773e-05 58.3978 -2.64773e-05C59.5592 -2.64773e-05 60.1705 0.703092 60.1705 1.77281C60.1705 2.87301 59.5592 3.57613 58.3978 3.57613C57.2058 3.57613 56.625 2.87301 56.625 1.77281ZM57.3533 5.09762H59.4424C59.5745 5.09762 59.6815 5.2047 59.6815 5.33678V20.4769C59.6815 20.609 59.5745 20.716 59.4424 20.716H57.3533C57.2212 20.716 57.1141 20.609 57.1141 20.4769V5.33678C57.1141 5.2047 57.2212 5.09762 57.3533 5.09762Z",
  senciaA: "M60.8428 16.1619C60.8428 13.5334 62.7073 11.2716 67.292 11.2716C68.7788 11.2716 69.9183 11.4947 70.8447 11.7401C70.9959 11.7802 71.1431 11.6652 71.1431 11.5087V10.2628C71.1431 8.52068 70.0734 7.023 67.5364 7.023C65.3532 7.023 64.2235 8.18754 64.0945 9.59234C64.0833 9.71336 63.9791 9.80438 63.8576 9.80438H61.8524C61.7178 9.80438 61.6063 9.69304 61.6126 9.55864C61.7459 6.70084 64.2078 4.8224 67.5364 4.8224C71.5406 4.8224 73.6495 7.23699 73.6495 10.2017V20.4768C73.6495 20.6089 73.5424 20.7159 73.4104 20.7159H71.6994C71.5751 20.7159 71.4714 20.6206 71.4611 20.4967L71.2959 18.5153H71.1738C70.2262 20.1047 68.484 20.9911 66.2834 20.9911C62.8908 20.9911 60.8428 18.8821 60.8428 16.1619ZM71.1431 14.6642V14.0487C71.1431 13.9425 71.0724 13.8474 70.9705 13.8174C69.7518 13.4588 68.6055 13.3194 67.292 13.3194C64.755 13.3194 63.4409 14.2974 63.4409 16.1312C63.4409 17.6901 64.4801 18.8515 66.7419 18.8515C69.4009 18.8515 71.1431 16.926 71.1431 14.6642Z",
  // Navigation icons
  homeIcon: "M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z",
  exploreIcon: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
  heartIcon: "M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.90831 3.57831 8.50903 2.99871 7.05 2.99871C5.59097 2.99871 4.19169 3.57831 3.16 4.61C2.12831 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.12831 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72719 21.351 5.12076 20.84 4.61Z",
  userIcon: "M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",
  userCircle: "M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",
  homeBar: "M121 13.5C121 12.1193 122.119 11 123.5 11H270.5C271.881 11 273 12.1193 273 13.5V13.5C273 14.8807 271.881 16 270.5 16H123.5C122.119 16 121 14.8807 121 13.5V13.5Z",
  // Battery icon
  batteryBorder: "M26 4.78113V8.8566C26.8047 8.51143 27.328 7.70847 27.328 6.81886C27.328 5.92926 26.8047 5.1263 26 4.78113",
  // Chart line
  chartLine: "M1 48.1638C4.00558 51.5547 8.08066 56.6794 14.4095 58.9145C23.928 62.276 29.7614 53.7483 39.8414 54.2905C50.4073 54.8588 59.4932 62.2669 65.7356 62.2669C83.1911 62.2669 80.0053 41.3679 94.173 38.8002C102.395 37.3102 107.196 42.4508 115.443 41.1122C132.23 38.3878 130.809 12.3537 147.811 11.9812C157.22 11.775 161.06 20.4084 170.469 20.1887C184.076 19.871 186.27 3.35226 199.715 1.23044C223.807 -2.57167 224.812 41.9686 249.076 39.4938C260.153 38.3641 267 27.8989 267 27.8989"
}

const SenciaHomepage = ({ handleAdd }) => {
  const navigate = useNavigate()

  const currentTime = new Date().toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })

  // Status Bar Component
  const StatusBar = () => (
    <div className="flex items-center justify-between px-4 pt-2 pb-1 w-full">
      <div className="font-semibold text-[17px]">
        {currentTime}
      </div>
      <div className="w-[124px]"></div> {/* Dynamic Island spacer */}
      <div className="flex items-center gap-2">
        {/* Signal bars */}
        <div className="flex items-end gap-1 h-3">
          <div className="w-1 h-1 bg-black rounded-sm"></div>
          <div className="w-1 h-2 bg-black rounded-sm"></div>
          <div className="w-1 h-3 bg-black rounded-sm"></div>
          <div className="w-1 h-3 bg-black rounded-sm"></div>
        </div>
        {/* WiFi */}
        <svg className="w-4 h-3" fill="none" viewBox="0 0 18 13">
          <path d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.536C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63366 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.2877 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" fill="black" fillRule="evenodd"/>
        </svg>
        {/* Battery */}
        <div className="relative w-7 h-3">
          <rect className="w-6 h-3 border border-black border-opacity-35 rounded-sm" />
          <path d={svgPaths.batteryBorder} fill="black" opacity="0.4" />
          <rect className="w-5 h-2 bg-black rounded-sm ml-0.5 mt-0.5" />
        </div>
      </div>
    </div>
  )

  // Sencia Logo
  const SenciaLogo = () => (
    <div className="flex justify-center py-2">
      <svg className="w-[77px] h-[21px]" fill="none" viewBox="0 0 77 21">
        <g>
          <path d={svgPaths.senciaS} fill="black" />
          <path d={svgPaths.senciaE} fill="black" />
          <path d={svgPaths.senciaN} fill="black" />
          <path d={svgPaths.senciaC} fill="black" />
          <path d={svgPaths.senciaI} fill="black" />
          <path d={svgPaths.senciaA} fill="black" />
        </g>
      </svg>
    </div>
  )

  // Main greeting section
  const GreetingSection = () => (
    <div className="px-5 mb-6">
      <h1 className="text-2xl font-medium text-black mb-5">
        Bonjour, Loris !
      </h1>
      
      {/* Main check-in widget */}
      <div className="bg-white rounded-[20px] p-4 relative shadow-sm">
        <div className="text-center">
          <h2 className="text-[32px] font-bold mb-3">
            <span className="text-gray-800">Comment te sens-tu ce matin,</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> Loris ?</span>
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Remplis ton premier log et commence l'analyse !
          </p>
          
          {/* Check-in button with gradient background */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-64 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
              <div className="absolute top-0 left-16 w-32 h-64 bg-white rounded-full"></div>
              <button 
                onClick={handleAdd}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-16 h-16 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <path d="M15.9098 6.62908V25.1902" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
                  <path d="M6.62959 15.9095H25.1907" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
                </svg>
              </button>
              <p className="text-center mt-2 text-sm text-gray-600">Check-in</p>
            </div>
          </div>
        </div>
        
        {/* Info card */}
        <div className="mt-8 bg-white border border-gray-100 rounded-[20px] p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">À quoi ça sert ?</h3>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-[15px] flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 17 17">
                <circle cx="8.25" cy="8.25" r="6.875" stroke="white" strokeWidth="1.375" />
                <path d="M6.24902 6.18753C6.41066 5.72805 6.72969 5.3406 7.14962 5.0938C7.56954 4.84701 8.06326 4.7568 8.54333 4.83914C9.0234 4.92148 9.45883 5.17107 9.77251 5.5437C10.0862 5.91633 10.2579 6.38795 10.2571 6.87503C10.2571 8.25003 8.19465 8.93753 8.19465 8.93753" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
                <path d="M8.25 11.6874H8.2575" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Ça t'aidera à avoir des informations précise sur ton état de santé afin de mieux le comprendre et pouvoir en parler aisément à ton médecin traitant !
          </p>
        </div>
      </div>
    </div>
  )

  // Health Status Card Component
  const HealthStatusCard = ({ icon, title, description, status }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'good': return 'bg-green-500'
        case 'warning': return 'bg-yellow-500'
        case 'error': return 'bg-red-500'
        default: return 'bg-gray-500'
      }
    }

    return (
      <div className="bg-white rounded-[20px] p-4 mb-2 hover:scale-[1.02] transition-transform cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor()}`}>
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          <svg className="w-6 h-6 transform rotate-180" fill="none" viewBox="0 0 24 24">
            <path d="M5.5 10L1 5.5L5.5 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    )
  }

  // Health Status Section
  const HealthStatusSection = () => (
    <div className="px-5 mb-6">
      <h2 className="text-2xl font-semibold text-black mb-4">Votre état de santé</h2>
      
      <HealthStatusCard
        icon={<div className="w-4 h-4 bg-white rounded-sm"></div>}
        title="Symptômes globaux"
        description="You're improving this month, Loris ! Your symptoms were overall less painful as February this year."
        status="good"
      />
      
      <HealthStatusCard
        icon={<div className="w-4 h-4 bg-white rounded-sm"></div>}
        title="Pression artérielle"
        description="2-3 Moderate crises reported this month."
        status="warning"
      />
      
      <HealthStatusCard
        icon={<div className="w-4 h-4 bg-white rounded-sm"></div>}
        title="Adhérence aux traitements"
        description="Try to stick to your prescription."
        status="error"
      />
    </div>
  )

  // Biomarkers Section with Chart
  const BiomarkersSection = () => {
    const chartData = {
      labels: ['Tue 27', 'Tue 3', 'Tue 10', 'Tue 17'],
      datasets: [
        {
          label: 'Pression artérielle',
          data: [145, 138, 142, 136],
          borderColor: 'black',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointBackgroundColor: 'black',
          pointBorderColor: 'black',
          pointRadius: 4,
          tension: 0.4,
        },
      ],
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 90,
          max: 160,
          ticks: {
            stepSize: 20,
            callback: function(value) {
              const systolic = Math.round(value)
              const diastolic = Math.round(value * 0.6)
              return `${systolic}/${diastolic}`
            },
          },
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    }

    return (
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-black">Vos biomarqueurs</h2>
          <button className="border border-gray-800 rounded-[11px] px-4 py-2 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-800">Voir plus</span>
          </button>
        </div>
        
        <div className="bg-white rounded-[20px] p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800">Pression artérielle</h3>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d="M11.265 7.93501C11.1238 7.79379 10.9322 7.71445 10.7325 7.71445C10.5328 7.71445 10.3412 7.79379 10.2 7.93501C10.0588 8.07624 9.97943 8.26779 9.97943 8.46751C9.97943 8.66724 10.0588 8.85879 10.2 9.00001L13.2 12L10.2 15C10.0608 15.1413 9.9827 15.3317 9.9827 15.53C9.9827 15.7284 10.0608 15.9187 10.2 16.06C10.3415 16.2008 10.5329 16.2798 10.7325 16.2798C10.9321 16.2798 11.1235 16.2008 11.265 16.06L14.8 12.525C14.9392 12.3837 15.0173 12.1934 15.0173 11.995C15.0173 11.7967 14.9392 11.6063 14.8 11.465L11.265 7.93501Z" fill="black" />
            </svg>
          </div>
          
          <div className="h-40 mb-4">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    )
  }

  // Care Plan Article Card
  const ArticleCard = ({ image, title, source, category }) => (
    <div className="bg-white rounded-[12px] w-48 overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-sm">
      <div 
        className="h-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 bg-gray-100">
        <h4 className="font-medium text-gray-900 text-sm mb-2">{title}</h4>
        <p className="text-xs text-gray-600 mb-3">{source}</p>
        <p className="text-xs font-medium text-gray-900 underline">Lire l'article</p>
      </div>
    </div>
  )

  // Care Plan Insight Component
  const CarePlanInsight = ({ insightNumber, title, description, articles, category }) => (
    <div className="bg-white rounded-[20px] p-4 mb-4 border border-purple-300">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3">
          <svg viewBox="0 0 12 12" fill="none">
            <path d="M9.99976 1.50006V3.50006M10.9998 2.50006H8.99976M1.99976 8.50006V9.50006M2.49976 9.00006H1.49976M4.96823 7.75006C4.92359 7.57703 4.8334 7.41912 4.70703 7.29275C4.58067 7.16639 4.42276 7.0762 4.24973 7.03156L1.18223 6.24056C1.12989 6.22571 1.08383 6.19419 1.05103 6.15079C1.01823 6.10738 1.00049 6.05447 1.00049 6.00006C1.00049 5.94566 1.01823 5.89274 1.05103 5.84934C1.08383 5.80594 1.12989 5.77442 1.18223 5.75956L4.24973 4.96806C4.4227 4.92347 4.58057 4.83335 4.70693 4.70708C4.83328 4.58082 4.92351 4.42301 4.96823 4.25006L5.75923 1.18256C5.77393 1.13002 5.80542 1.08373 5.84889 1.05076C5.89235 1.01779 5.94542 0.999939 5.99998 0.999939C6.05454 0.999939 6.1076 1.01779 6.15107 1.05076C6.19453 1.08373 6.22602 1.13002 6.24073 1.18256L7.03123 4.25006C7.07586 4.4231 7.16606 4.58101 7.29242 4.70737C7.41878 4.83373 7.57669 4.92392 7.74973 4.96856L10.8172 5.75906C10.87 5.77361 10.9165 5.80507 10.9496 5.8486C10.9828 5.89214 11.0008 5.94534 11.0008 6.00006C11.0008 6.05478 10.9828 6.10799 10.9496 6.15153C10.9165 6.19506 10.87 6.22651 10.8172 6.24106L7.74973 7.03156C7.57669 7.0762 7.41878 7.16639 7.29242 7.29275C7.16606 7.41912 7.07586 7.57703 7.03123 7.75006L6.24023 10.8176C6.22552 10.8701 6.19403 10.9164 6.15057 10.9494C6.1071 10.9823 6.05404 11.0002 5.99948 11.0002C5.94492 11.0002 5.89185 10.9823 5.84839 10.9494C5.80492 10.9164 5.77343 10.8701 5.75873 10.8176L4.96823 7.75006Z" stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="1.00049" y1="6.00006" x2="11.0008" y2="6.00006" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A69BF8" />
                <stop offset="1" stopColor="#0E7AFE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="text-xs font-medium bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Insight {insightNumber}
        </span>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      <div className="flex gap-4 overflow-x-auto">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} category={category} />
        ))}
      </div>
    </div>
  )

  // Care Plan Section
  const CarePlanSection = () => {
    const fakeArticles = {
      nutrition: [
        {
          image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?w=300&h=200&fit=crop",
          title: "10 astuces pour réduire le sodium au quotidien",
          source: "Nutrition Santé"
        },
        {
          image: "https://images.unsplash.com/photo-1621525434111-87a99d170b0e?w=300&h=200&fit=crop",
          title: "L'impact du sel sur la pression artérielle",
          source: "Cœur et Santé"
        }
      ],
      stress: [
        {
          image: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?w=300&h=200&fit=crop",
          title: "5 techniques de relaxation rapides",
          source: "Bien-être Mental"
        },
        {
          image: "https://images.unsplash.com/photo-1602713464923-b97ad228fcd0?w=300&h=200&fit=crop",
          title: "Méditation : guide pour débutants",
          source: "Mindfulness France"
        }
      ]
    }

    return (
      <div className="px-5 mb-6">
        <h2 className="text-2xl font-semibold text-black mb-4">Votre Care Plan</h2>
        
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
    )
  }

  // Bottom Navigation
  const BottomNavigation = () => {
    const handleNav = (page) => {
      switch (page) {
        case 'Home':
          navigate('/app')
          break
        case 'Explore':
          navigate('/app/visualization')
          break
        case 'Add':
          if (handleAdd) handleAdd()
          break
        case 'Care':
          navigate('/app/export')
          break
        case 'Loris':
          navigate('/app/profile')
          break
      }
    }

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 max-w-md mx-auto">
        <div className="flex items-center justify-around px-6 py-3 h-20">
          {/* Home */}
          <button 
            onClick={() => handleNav('Home')}
            className="flex flex-col items-center gap-1"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.homeIcon} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M9 22V12H15V22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="text-xs font-medium text-black">Home</span>
          </button>

          {/* Explore */}
          <button 
            onClick={() => handleNav('Explore')}
            className="flex flex-col items-center gap-1"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.exploreIcon} stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-500">Explore</span>
          </button>

          {/* Add button */}
          <button 
            onClick={() => handleNav('Add')}
            className="bg-black rounded-full w-15 h-15 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 31 31">
              <path d="M15.25 6.35422V24.1459" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              <path d="M6.35437 15.25H24.146" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </button>

          {/* Care */}
          <button 
            onClick={() => handleNav('Care')}
            className="flex flex-col items-center gap-1"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.heartIcon} stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-500">Care</span>
          </button>

          {/* Profile */}
          <button 
            onClick={() => handleNav('Loris')}
            className="flex flex-col items-center gap-1"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.userIcon} stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.userCircle} stroke="#A19F9E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-500">Loris</span>
          </button>
        </div>
        
        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen w-full max-w-md mx-auto relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 -top-10 w-96 h-96 bg-gradient-to-r from-green-200 to-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -right-32 top-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-72 h-72 bg-gradient-to-r from-purple-200 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 w-80 h-80 bg-gradient-to-r from-orange-200 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <StatusBar />
        <SenciaLogo />
        <GreetingSection />
        <HealthStatusSection />
        <BiomarkersSection />
        <CarePlanSection />
        <div className="h-24"></div> {/* Bottom navigation spacer */}
      </div>

      <BottomNavigation />
    </div>
  )
}

export default SenciaHomepage