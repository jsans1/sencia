export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Gradient overlays to recreate the Figma design */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 368px 264px at 47% 15%, rgba(196, 225, 255, 0.7) 0%, transparent 70%),
            radial-gradient(ellipse 264px 338px at 100% 20%, rgba(255, 209, 183, 0.7) 0%, transparent 70%),
            radial-gradient(ellipse 445px 309px at 57% 51%, rgba(223, 219, 254, 0.7) 0%, transparent 70%),
            radial-gradient(ellipse 264px 359px at 52% 93%, rgba(255, 246, 229, 0.7) 0%, transparent 70%),
            radial-gradient(ellipse 264px 307px at 100% 85%, rgba(212, 231, 220, 0.7) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Additional blur overlay for extra softness */}
      <div 
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(1px)',
          background: 'rgba(255, 255, 255, 0.1)'
        }}
      />
    </div>
  );
}