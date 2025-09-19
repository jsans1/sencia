import React from 'react';
// Logo is now in public directory, using direct path

const TopLogo = ({ sticky = true }) => {
  return (
    <div className={`top-logo-container ${sticky ? 'sticky' : 'not-sticky'}`}>
      <img src="/logo.svg" alt="Sencia" className="top-logo" />
    </div>
  );
};

export default TopLogo;
