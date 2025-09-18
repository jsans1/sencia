import React from 'react';
import logo from '../assets/logo.svg';

const TopLogo = ({ sticky = true }) => {
  return (
    <div className={`top-logo-container ${sticky ? 'sticky' : 'not-sticky'}`}>
      <img src={logo} alt="Sencia" className="top-logo" />
    </div>
  );
};

export default TopLogo;
