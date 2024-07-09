import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/nav/logo-main.png";
import burgerMenu from "../../assets/nav/burger-menu.svg";
import cross from "../../assets/nav/cross.png";
import LanguageSelector from "../languageSelector/LanguageSelector";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className="nav__container">
      <img className="nav__logo" src={logo} alt="Logo" />
      <LanguageSelector />
      <div className={`burger-menu ${visible ? "visible" : "hidden"}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img
            className="menu-img"
            src={isOpen ? cross : burgerMenu}
            alt="Menu Icon"
          />
        </button>
        <div className={`menu-nav ${isOpen ? "open" : "close"}`}>
          <ul
            className={`nav__list nav__list--burger ${
              isOpen ? "open" : "close"
            }`}
          >
            <li className="nav__item">
              <a className="nav__link" href="/#header" onClick={handleLinkClick}>
                {t("Главная")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">
                {t("О Нас")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/#advantages">
                {t("Особенности")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/#services">
                {t("Пакеты услуг")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/#reviews">
                {t("Отзывы")}
              </a>
            </li>
            <li className="nav__item">
            <Link className="nav__link" to="/test">
                {t("Тест для родителей")}
              </Link>
            </li>
            <li className="nav__item">
            <Link className="nav__link" to="/hire/#hire-order">{t("Условия найма")}
          </Link>
            </li>
            <li className="nav__item">
              <ul className="nav__list nav__list--contacts">
                <h3 className="nav__list-item-header">{t("Контакты")}</h3>
                <li className="nav__list-item nav__list-item--blue-modified">
                  <a className="nav__link nav__link--blue" href="tel:+77780990422">
                    +77780990422
                  </a>
                </li>
                <li className="nav__list-item nav__list-item--modified">
                  <a
                    className="nav__link"
                    href="mailto:onegeli.kz@gmail.com"
                  >
                    onegeli.kz@gmail.com
                  </a>
                </li>
                <li className="nav__list-item nav__list-item--modified">
                  {t("Туркестан 16, офис 3015")}
                </li>
              </ul>
              <a className="nav__link" href="tel:+77780990422"><button className="nav__button">Перейти в Whatsapp</button></a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="nav__list nav__list--desktop">
        <li className="nav__item">
          <a className="nav__link" href="/#header">
            {t("Главная")}
          </a>
        </li>
        <li className="nav__item">
              <a className="nav__link" href="/#about">
                {t("О Нас")}
              </a>
            </li>
        <li className="nav__item">
        <a className="nav__link" href="/#advantages">
            {t("Особенности")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#services">
            {t("Пакеты услуг")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#reviews">
            {t("Отзывы")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
