export default function CtaPrimaire() {
  return (
    <div className="bg-gradient-to-r from-[#a69bf8] relative rounded-[20px] shadow-[0px_-4px_15.4px_0px_rgba(0,0,0,0.06)] size-full to-[#0e7afe]" data-name="CTA Primaire">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-4 relative size-full">
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Créer un nouveau rapport</p>
          </div>
        </div>
      </div>
    </div>
  );
}