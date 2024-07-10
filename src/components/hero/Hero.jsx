import "./hero.css";
import { useState, useRef } from "react";
import desktopHero from "../../assets/hero/hero-image-desktop.png";
import tabletHero from "../../assets/hero/hero-image-tablet.png";
import mobileHero from "../../assets/hero/hero-image-mobile.png";
import desktopStars from "../../assets/hero/hero-stars-desktop.png";
import tabletStars from "../../assets/hero/hero-stars-tablet.png";
import mobileStars from "../../assets/hero/hero-stars-mobile.png";
import ellipse from "../../assets/hero/hero-ellipse.svg";
import ellipseMobile from "../../assets/hero/hero-ellipse-mobile.svg";
import mainLogoLightBlue from '../../assets/hero/logo-main-light-blue.png'
import HeroPopup from "./HeroPopup";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { usePopup } from "./PopupContext";
import { useTranslation } from "react-i18next";
import FadeIn from "../utils/FadeIn";
import RotateImage from "../utils/RotateImage";
import AnimatedImage from "../utils/AnimatedImage";

export default function Hero() {
  const containerRef = useRef();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/test");
  };

  const { showPopup, togglePopup } = usePopup();

  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const phone = form.current.user_phone.value.trim();
    const age = form.current.user_age.value.trim();
    const text = form.current.user_text.value.trim();

    if (!userName || !phone || !age || !text) {
      setIsFormError(true);
      setIsFormSubmitted(false);
      return;
    }

    emailjs
      .sendForm("service_ron3byc", "template_pnrn65z", form.current, {
        publicKey: "kR7E2o9Z4mUG3h6-E",
      })
      .then(
        () => {
          setIsFormSubmitted(true);
          setIsFormError(false);
          form.current.reset();
        },
        (error) => {
          setIsFormSubmitted(false);
          setIsFormError(true);
          form.current.reset();
        }
      );
  };

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero__text-wrapper">
      <img className="hero__logo" src={mainLogoLightBlue} alt="" />
        <h2 className="hero__header">
          {t("Безопасность и развитие вашего ребенка")}
        </h2>
        <p className="hero__description">
          {t(
            "Обучаем и предоставляем проверенных специалистов по уходу за детьми."
          )}
        </p>
        <div className="hero__button-group">
          <button
            onClick={togglePopup}
            className="hero__reservation-button hero__button"
          >
            {t("Бронь консультации")}
          </button>
          <HeroPopup show={showPopup} handleClose={togglePopup}>
            <h2 className="hero__form-header">{t("Запись на консультацию")}</h2>
            <form
              className="hero__form"
              ref={form}
              onSubmit={sendEmail}
              autoComplete="off"
              id="#form"
            >
              <input
                className="hero__input"
                type="text"
                placeholder={t("Ваше Имя")} 
                name="user_name"
              />
              <input
                className="hero__input"
                type="tel"
                placeholder={t("Ваш номер телефона")} 
                name="user_phone"
              />
              <input
                className="hero__input"
                type="text"
                placeholder={t("Возраст ребенка")} 
                name="user_age"
              />
              <textarea
                className="hero__input hero__input--textarea"
                type="text"
                placeholder={t("Ваши пожелания")} 
                name="user_text"
              />
              <div className="hero__button-group hero__form-button-group">
                <button
                  className="hero__form-button hero__button form__button"
                  type="submit"
                  value="Send"
                >{t("Отправить заявку")}
                  
                </button>
                <button
                  className="hero__form-button hero__cancel-button"
                  onClick={togglePopup}
                >{t("Отмена")}
                  
                </button>
              </div>
            </form>
            {isFormSubmitted && (
              <p className="hero__form-message">{t("Спасибо, Ваши пожелания отправлены!")}
              </p>
            )}
            {isFormError && (
              <p className="hero__form-message-error">{t("Пожалуйста, заполните все поля!")}
              </p>
            )}
          </HeroPopup>
          <FadeIn delay={0.7}>
          <button
            className="hero__test-button hero__button"
            onClick={handleButtonClick}
          >{t("Тест для родителей")}
           
          </button>
          </FadeIn>
        </div>
      </div>
      <picture>
        <source srcSet={mobileStars} media="(max-width: 767px)" />
        <source srcSet={tabletStars} media="(max-width: 1439px)" />
        <RotateImage className="hero__stars" src={desktopStars} alt="разнообразные звезды." />
      </picture>
      <picture>
        <source srcSet={mobileHero} media="(max-width: 767px)" />
        <source srcSet={tabletHero} media="(max-width: 1439px)" />
        <AnimatedImage
        src={desktopHero}
        alt="Девушка с ребенком читают книгу"
        className="hero__main-image"
        initialPosition={{ bottom: '-80px', right: '-40px' }}
        animatePosition={{ bottom: '0', right: '0' }}
      />
      </picture>
      <picture>
        <source srcSet={ellipseMobile} media="(max-width: 767px)" />
        <img className="hero__ellipse" src={ellipse} alt="эллипс" />
      </picture>
      
    </section>
  );
}
