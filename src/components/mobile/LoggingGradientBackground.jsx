import React from 'react';

export function LoggingGradientBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      {/* Base background - white */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#ffffff'
        }}
      />

      {/* Soft green ellipse */}
      <div 
        style={{
          position: 'absolute',
          opacity: 0.7,
          background: 'radial-gradient(ellipse 132px 153px, #D4E7DC 0%, transparent 70%)',
          filter: 'blur(60px)',
          width: '400px',
          height: '400px',
          left: '60%',
          top: '70%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Soft blue ellipse */}
      <div 
        style={{
          position: 'absolute',
          opacity: 0.7,
          background: 'radial-gradient(ellipse 184px 132px, #C4E1FF 0%, transparent 70%)',
          filter: 'blur(80px)',
          width: '500px',
          height: '350px',
          left: '40%',
          top: '25%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Soft purple ellipse */}
      <div 
        style={{
          position: 'absolute',
          opacity: 0.7,
          background: 'radial-gradient(ellipse 500px 350px, #DFDBFE 0%, transparent 70%)',
          filter: 'blur(50px)',
          width: '900px',
          height: '750px',
          left: '35%',
          top: '35%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Soft cream ellipse */}
      <div 
        style={{
          position: 'absolute',
          opacity: 0.7,
          background: 'radial-gradient(ellipse 132px 179px, #FFF6E5 0%, transparent 70%)',
          filter: 'blur(50px)',
          width: '400px',
          height: '450px',
          left: '30%',
          top: '80%',
          transform: 'translate(-50%, -50%) rotate(-30deg)'
        }}
      />
      
      {/* Subtle overlay for extra softness */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(1px)'
        }}
      />
    </div>
  );
}
