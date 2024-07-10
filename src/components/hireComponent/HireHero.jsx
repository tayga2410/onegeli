import React, { useState, useRef } from "react";
import "./hireHero.css";
import "../hero/hero.css";
import emailjs from "@emailjs/browser";
import heroChildDesktop from "../../assets/hero/hero-child-desktop.png";
import heroChildTablet from "../../assets/hero/hero-child-tablet.png";
import heroChildMobile from "../../assets/hero/hero-child-mobile.png";
import ellipse from "../../assets/hero/hero-ellipse.svg";
import ellipseMobile from "../../assets/test/test-hero-ellipse-mobile.png";
import starsDesktop from '../../assets/test/test-hero-stars-image-desktop.png'
import starsTablet from '../../assets/test/test-hero-stars-image-tablet.png'
import starsMobile from '../../assets/test/test-hero-stars-image-mobile.png'
import { useTranslation } from "react-i18next";

export default function HireHero() {
  const { t } = useTranslation();

  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const phone = form.current.user_phone.value.trim();
    const email = form.current.user_email.value.trim();

    if (!userName || !phone || !email) {
      setIsFormError(true);
      setIsFormSubmitted(false);
      return;
    }

    emailjs
      .sendForm("service_ron3byc", "template_kiai0ni", form.current, {
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
    <section className="hire-hero hero">
      <div className="hire-hero__wrapper">
      <h2 className="hire-hero__header hero__header">{t("Присоединитесь к семье Онегели")}</h2>
      <p className="hire-hero__description hero__description">{t("Оставьте свои контакты для дальнейшей связи с HR")}
      </p>
      <form
        className="hire-hero__form hero__form"
        ref={form}
        onSubmit={sendEmail}
        autoComplete="off"
        id="#form"
      >
        <input
          className="hire-hero__input hero__input"
          type="text"
          placeholder={t("Ваше Имя")} 
          name="user_name"
        />
        <input
          className="hire-hero__input hero__input"
          type="tel"
          placeholder={t("Ваш номер телефона")}
          name="user_phone"
        />
        <input
          className="hire-hero__input hero__input"
          type="text"
          placeholder={t("Ваша электронная почта")} 
          name="user_email"
        />
        <button
          className="hero__form-button hero__button form__button"
          type="submit"
          value="Send"
        >{t("Отправить заявку")}
          
        </button>
      </form>
      {isFormSubmitted && (
        <p className="hero__form-message">{t("Спасибо, Ваши контактные данные отправлены!")}
        </p>
      )}
      {isFormError && (
        <p className="hero__form-message-error">{t("Пожалуйста, заполните все поля!")}
        </p>
      )}
      <picture>
        <source srcSet={heroChildMobile} media="(max-width: 767px)" />
        <source srcSet={heroChildTablet} media="(max-width: 1439px)" />
        <img className="hire-hero__image" src={heroChildDesktop} alt="" />
      </picture>
      <picture>
        <source srcSet={ellipseMobile} media="(max-width: 767px)" />
        <img className="hire-hero__decor-image" src={ellipse} alt="" />
      </picture>
      <picture>
        <source srcSet={starsMobile} media="(max-width: 767px)" />
        <source srcSet={starsTablet} media="(max-width: 1439px)" />
        <img className="hire-hero__stars-image" src={starsDesktop} alt="" />
      </picture>
      </div>
    </section>
  );
}
