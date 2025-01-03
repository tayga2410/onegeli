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
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav__container">
      <img className="nav__logo" src={logo} alt="Logo" />
      <div className={`burger-menu ${visible ? "visible" : "hidden"}`}>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          style={{ position: "relative" }}
        >
          <img
            className="menu-img-burger"
            src={burgerMenu}
            alt="Menu Icon"
            style={{ display: isOpen ? "none" : "block" }}
          />
          {isOpen && (
            <img
              className="menu-img-cross"
              src={cross}
              alt="Close Icon"
            />
          )}
        </button>
        <div className={`menu-nav ${isOpen ? "open" : "close"}`}>
          <ul
            className={`nav__list nav__list--burger ${
              isOpen ? "open" : "close"
            }`}
          >
            <li className="nav__item">
              <a
                className="nav__link"
                href="/#header"
                onClick={handleLinkClick}
              >
                {t("Главная")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about" onClick={handleLinkClick}>
                {t("О Нас")}
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="/#advantages"
                onClick={handleLinkClick}
              >
                {t("Особенности")}
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="/#services"
                onClick={handleLinkClick}
              >
                {t("Пакеты услуг")}
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="/#reviews"
                onClick={handleLinkClick}
              >
                {t("Отзывы")}
              </a>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/test" onClick={handleLinkClick}>
                {t("Тест для родителей")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="/hire/#hire-order"
                onClick={handleLinkClick}
              >
                {t("Условия найма")}
              </Link>
            </li>
            <li className="nav__item">
              <ul className="nav__list nav__list--contacts">
                <h3 className="nav__list-item-header">{t("Контакты")}</h3>
                <li className="nav__list-item nav__list-item--blue-modified">
                  <a
                    className="nav__link nav__link--blue"
                    href="https://wa.me/77780990422?text=Здравствуйте,%20хочу%20получить%20консультацию!"
                    onClick={handleLinkClick}
                  >
                    +77780990422
                  </a>
                </li>
                <li className="nav__list-item nav__list-item--modified">
                  <a
                    className="nav__link"
                    href="mailto:onegeli.kz@gmail.com"
                    onClick={handleLinkClick}
                  >
                    onegeli.kz@gmail.com
                  </a>
                </li>
                <li className="nav__list-item nav__list-item--modified">
                  {t("Туркестан 16, офис 3015")}
                </li>
              </ul>
              <a
                className="nav__link"
                href="https://wa.me/77780990422?text=Здравствуйте,%20хочу%20получить%20консультацию!"
                onClick={handleLinkClick}
              >
                <button className="nav__button">Перейти в Whatsapp</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <LanguageSelector />

      <ul className="nav__list nav__list--desktop">
        <li className="nav__item">
          <a className="nav__link" href="/#header">
            {t("Главная")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#about" onClick={handleLinkClick}>
            {t("О Нас")}
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link"
            href="/#advantages"
            onClick={handleLinkClick}
          >
            {t("Особенности")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#services" onClick={handleLinkClick}>
            {t("Пакеты услуг")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#reviews" onClick={handleLinkClick}>
            {t("Отзывы")}
          </a>
        </li>
      </ul>
      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
    </nav>
  );
}
