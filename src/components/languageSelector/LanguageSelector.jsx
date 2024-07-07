import React from "react";
import { useTranslation } from "react-i18next";
import "./languageSelector.css";

function LanguageSelector({ closeMenu }) {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    if (closeMenu) closeMenu();
  };

  return (
    <div className="language-selector__container">
      <div className="language-selector__wrapper">
        <select
          className="language-selector__select"
          value={i18n.language}
          onChange={changeLanguage}
        >
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="kz">KZ</option>
        </select>
      </div>
    </div>
  );
}

export default LanguageSelector;
