import svgPaths from "./svg-zbsnf92p1y";
import imgImage from "figma:asset/0d64ffb24390a4385cd340bd54f3526d8771e89c.png";
import imgImage1 from "figma:asset/8bc36813a8de75db63afbf4213688594f51d6bc2.png";
import imgImage2 from "figma:asset/34337b21c669ec20146440d36afb40c61f3b6694.png";
import imgImage3 from "figma:asset/e3fb5175b3cd2b664aee5f501bd6292a0ccd069e.png";

function Icons() {
  return (
    <div className="relative shrink-0 size-3" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_550)" id="Icons">
          <path d={svgPaths.pd74a700} id="Vector" stroke="url(#paint0_linear_3_550)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_550" x1="1.00049" x2="11.0008" y1="6.00006" y2="6.00006">
            <stop stopColor="#A69BF8" />
            <stop offset="1" stopColor="#0E7AFE" />
          </linearGradient>
          <clipPath id="clip0_3_550">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6184() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icons />
      <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Medium',_sans-serif] from-[#a69bf8] leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.2] whitespace-pre">{`Insight 1 `}</p>
      </div>
    </div>
  );
}

function Frame6044() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
      <div className="basis-0 font-['SF_Pro_Display:Semibold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
        <p className="leading-[1.2]">Parce que vous avez mangé salé</p>
      </div>
    </div>
  );
}

function Frame6043() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
      <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#45413e] text-[12px]">
        <p className="leading-[1.2]">You’re improving this month, HLoris! Your symptoms were overall less painful as February this year.</p>
      </div>
    </div>
  );
}

function Frame6047() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <Frame6044 />
      <Frame6043 />
    </div>
  );
}

function Frame6181() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
      <Frame6047 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout() {
  return (
    <div className="relative w-[200px]" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 0">
        <g id="Aspect ratio keeper # Rotated Auto Layout">
          <g id="Dot # 0-pixel cheat"></g>
          <g id="Dot # 0-pixel cheat_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image" style={{ backgroundImage: `url('${imgImage}')` }}>
      <div className="absolute bottom-0 flex h-[112.494px] items-center justify-center right-[17.32px] w-[165.344px]">
        <div className="flex-none rotate-[325.77deg]">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0" data-name="Title">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
        <p className="leading-[1.2]">Un guide pour réduire son apport en sodium dans les repas</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] w-[168px]">
        <p className="leading-[1.2]">Nutrition.com</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between leading-[0] not-italic p-[16px] relative size-full">
          <Title />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0f0f0f] text-[12px]" style={{ width: "min-content" }}>
            <p className="[text-underline-position:from-font] decoration-solid leading-[1.2] underline">Lire l’article</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0" data-name="Mini Card">
      <Image />
      <Text />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout1() {
  return (
    <div className="relative w-[200px]" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 0">
        <g id="Aspect ratio keeper # Rotated Auto Layout">
          <g id="Dot # 0-pixel cheat"></g>
          <g id="Dot # 0-pixel cheat_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-left bg-no-repeat bg-size-[100%_118.52%] h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image" style={{ backgroundImage: `url('${imgImage1}')` }}>
      <div className="absolute bottom-0 flex h-[112.494px] items-center justify-center right-[17.32px] w-[165.344px]">
        <div className="flex-none rotate-[325.77deg]">
          <AspectRatioKeeperRotatedAutoLayout1 />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0" data-name="Title">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
        <p className="leading-[1.2]">Pourquoi manger saler est dangereux pour la santé ?</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] w-[168px]">
        <p className="leading-[1.2]">manger-sain.com</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between leading-[0] not-italic p-[16px] relative size-full">
          <Title1 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0f0f0f] text-[12px]" style={{ width: "min-content" }}>
            <p className="[text-underline-position:from-font] decoration-solid leading-[1.2] underline">Lire l’article</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0" data-name="Mini Card">
      <Image1 />
      <Text1 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout2() {
  return (
    <div className="relative w-[200px]" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 0">
        <g id="Aspect ratio keeper # Rotated Auto Layout">
          <g id="Dot # 0-pixel cheat"></g>
          <g id="Dot # 0-pixel cheat_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image">
      <div className="absolute bottom-0 flex h-[112.494px] items-center justify-center right-[17.32px] w-[165.344px]">
        <div className="flex-none rotate-[325.77deg]">
          <AspectRatioKeeperRotatedAutoLayout2 />
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0" data-name="Title">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] h-[60px] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
        <p className="leading-[1.2]">What Glucose Levels Reveal About Your Health</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[16px] relative w-full">
          <Title2 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[12px] w-full">
            <p className="leading-[1.2]">Tap to read →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0" data-name="Mini Card">
      <Image2 />
      <Text2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="List">
      <MiniCard />
      <MiniCard1 />
      <MiniCard2 />
    </div>
  );
}

function Frame3627() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
      <List />
    </div>
  );
}

function Frame3628() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-8 items-center justify-start pl-0 pr-4 py-0 relative w-full">
          <Frame3627 />
        </div>
      </div>
    </div>
  );
}

function InsightsCarePlan() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[353px]" data-name="insights care plan">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip p-[16px] relative w-[353px]">
        <Frame6184 />
        <Frame6181 />
        <Frame3628 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a69bf8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-3" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_550)" id="Icons">
          <path d={svgPaths.pd74a700} id="Vector" stroke="url(#paint0_linear_3_550)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_550" x1="1.00049" x2="11.0008" y1="6.00006" y2="6.00006">
            <stop stopColor="#A69BF8" />
            <stop offset="1" stopColor="#0E7AFE" />
          </linearGradient>
          <clipPath id="clip0_3_550">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6185() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icons1 />
      <div className="bg-clip-text bg-gradient-to-r font-['SF_Pro_Display:Medium',_sans-serif] from-[#a69bf8] leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap to-[#0e7afe]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.2] whitespace-pre">Insight 2</p>
      </div>
    </div>
  );
}

function Frame6045() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
      <div className="basis-0 font-['SF_Pro_Display:Semibold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
        <p className="leading-[1.2]">Parce que vous étiez modérément stressé</p>
      </div>
    </div>
  );
}

function Frame6048() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
      <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#45413e] text-[12px]">
        <p className="leading-[1.2]">You’re improving this month, HLoris! Your symptoms were overall less painful as February this year.</p>
      </div>
    </div>
  );
}

function Frame6049() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <Frame6045 />
      <Frame6048 />
    </div>
  );
}

function Frame6182() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
      <Frame6049 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout3() {
  return (
    <div className="relative w-[200px]" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 0">
        <g id="Aspect ratio keeper # Rotated Auto Layout">
          <g id="Dot # 0-pixel cheat"></g>
          <g id="Dot # 0-pixel cheat_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image" style={{ backgroundImage: `url('${imgImage2}')` }}>
      <div className="absolute bottom-0 flex h-[112.494px] items-center justify-center right-[17.32px] w-[165.344px]">
        <div className="flex-none rotate-[325.77deg]">
          <AspectRatioKeeperRotatedAutoLayout3 />
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0" data-name="Title">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
        <p className="leading-[1.2]">Un guide pour réduire son apport en sodium dans les repas</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] w-[168px]">
        <p className="leading-[1.2]">Nutrition.com</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between leading-[0] not-italic p-[16px] relative size-full">
          <Title3 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0f0f0f] text-[12px]" style={{ width: "min-content" }}>
            <p className="[text-underline-position:from-font] decoration-solid leading-[1.2] underline">Lire l’article</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0" data-name="Mini Card">
      <Image3 />
      <Text3 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout4() {
  return (
    <div className="relative w-[200px]" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 0">
        <g id="Aspect ratio keeper # Rotated Auto Layout">
          <g id="Dot # 0-pixel cheat"></g>
          <g id="Dot # 0-pixel cheat_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-left bg-no-repeat bg-size-[100%_118.52%] h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image" style={{ backgroundImage: `url('${imgImage3}')` }}>
      <div className="absolute bottom-0 flex h-[112.494px] items-center justify-center right-[17.32px] w-[165.344px]">
        <div className="flex-none rotate-[325.77deg]">
          <AspectRatioKeeperRotatedAutoLayout4 />
        </div>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0" data-name="Title">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
        <p className="leading-[1.2]">Pourquoi manger saler est dangereux pour la santé ?</p>
      </div>
      <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] w-[168px]">
        <p className="leading-[1.2]">manger-sain.com</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between leading-[0] not-italic p-[16px] relative size-full">
          <Title4 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0f0f0f] text-[12px]" style={{ width: "min-content" }}>
            <p className="[text-underline-position:from-font] decoration-solid leading-[1.2] underline">Lire l’article</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0" data-name="Mini Card">
      <Image4 />
      <Text4 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout5() {
  return (
    <div className="relative w-[200px]" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 0">
        <g id="Aspect ratio keeper # Rotated Auto Layout">
          <g id="Dot # 0-pixel cheat"></g>
          <g id="Dot # 0-pixel cheat_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[112.503px] overflow-clip relative shrink-0 w-full" data-name="image">
      <div className="absolute bottom-0 flex h-[112.494px] items-center justify-center right-[17.32px] w-[165.344px]">
        <div className="flex-none rotate-[325.77deg]">
          <AspectRatioKeeperRotatedAutoLayout5 />
        </div>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0" data-name="Title">
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] h-[60px] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] w-[168px]">
        <p className="leading-[1.2]">What Glucose Levels Reveal About Your Health</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[16px] relative w-full">
          <Title5 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[12px] w-full">
            <p className="leading-[1.2]">Tap to read →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[248.503px] items-start justify-start overflow-clip relative rounded-[12px] shrink-0" data-name="Mini Card">
      <Image5 />
      <Text5 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="List">
      <MiniCard3 />
      <MiniCard4 />
      <MiniCard5 />
    </div>
  );
}

function Frame3629() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
      <List1 />
    </div>
  );
}

function Frame3630() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-8 items-center justify-start pl-0 pr-4 py-0 relative w-full">
          <Frame3629 />
        </div>
      </div>
    </div>
  );
}

function InsightsCarePlan1() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[353px]" data-name="insights care plan">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip p-[16px] relative w-[353px]">
        <Frame6185 />
        <Frame6182 />
        <Frame3630 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a69bf8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

export default function Frame6046() {
  return (
    <div className="relative size-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-5 py-4 relative size-full">
          <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Votre Care Plan</p>
          </div>
          <InsightsCarePlan />
          <InsightsCarePlan1 />
        </div>
      </div>
    </div>
  );
}