import "./hero.css";
import { useState } from "react";
import desktopHero from "../../assets/hero-image-desktop.png";
import tabletHero from "../../assets/hero-image-tablet.png";
import mobileHero from "../../assets/hero-image-mobile.png";
import ellipse from "../../assets/hero-ellipse.svg";
import ellipseMobile from "../../assets/hero-ellipse-mobile.svg";
import HeroPopup from "./HeroPopup";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="hero">
      <div className="hero__text-wrapper">
        <h2 className="hero__header">Безопасность и развитие вашего ребенка</h2>
        <p className="hero__description">
          Обучаем и предоставляем проверенных специалистов по уходу за детьми.
        </p>
        <div className="hero__button-group">
          <button
            onClick={togglePopup}
            className="hero__reservation-button hero__button"
          >
            Бронь консультации
          </button>
          <HeroPopup show={showPopup} handleClose={togglePopup}>
            <h2 className="hero__header">Запись на консультацию</h2>
           <form className="hero__form" action="">
            <input className="hero__input" type="text" placeholder="Ваше Имя" />
            <input className="hero__input" type="tel" placeholder="Ваш номер телефона" />
            <input className="hero__input" type="text" placeholder="Возраст ребенка"/>
            <input className="hero__input" type="text" placeholder="Ваши пожелания" />
            <div className="hero__button-group">
            <button className="hero__form-button hero__cancel-button" onClick={togglePopup}>Отмена</button>
            <button className="hero__form-button hero__button form__button">Отправить заявку</button>
            </div>
           </form>
          </HeroPopup>
          <button className="hero__test-button hero__button">
            Тест для родителей
          </button>
        </div>
      </div>
      <picture>
        <source srcSet={mobileHero} media="(max-width: 767px)" />
        <source srcSet={tabletHero} media="(max-width: 1439px)" />
        <img className="hero__main-image" src={desktopHero} alt="" />
      </picture>
      <picture>
        <source srcSet={ellipseMobile} media="(max-width: 767px)" />
        <img className="hero__decor-image" src={ellipse} alt="" />
      </picture>
    </section>
  );
}
