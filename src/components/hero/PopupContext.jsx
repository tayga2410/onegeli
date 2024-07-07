import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <PopupContext.Provider value={{ showPopup, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
