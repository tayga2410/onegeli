import './heroPopup.css'
import React from 'react'

const HeroPopup = ({ show, children }) => {
  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-inner">
        {children}
      </div>
    </div>
  );
};

export default HeroPopup;