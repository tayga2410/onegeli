import "./booking.css";
import bookingDesktop from "../../assets/booking/booking-image-desktop.png";
import bookingTablet from "../../assets/booking/booking-image-tablet.png";
import bookingMobile from "../../assets/booking/booking-image-mobile.png";
import bookingEllipseDesktop from "../../assets/booking/booking-ellipse-desktop.svg";
import bookingEllipseTablet from "../../assets/booking/booking-ellipse-tablet.svg";
import bookingEllipseMobile from "../../assets/booking/booking-ellipse-mobile.svg";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function Booking() {
  const { t } = useTranslation();

  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value.trim();

    if (!email) {
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
    <section className="booking">
      <div className="booking__wrapper">
        <h2 className="booking__header">{t("booking header")}</h2>
        <p className="booking__description">{t("booking description")}</p>
        <form
          className="booking__form"
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          id="#form"
        >
          <input
            className="booking__input"
            type="email"
            placeholder={t('Ваша эл. почта')}
            name="user_email" 
          />
          <button className="booking__button" type="submit" value="Send">
            {t("Получить книгу")}
          </button>
        </form>
        {isFormSubmitted && (
              <p className="booking__form-message">{t("Спасибо, Мы отправим Вам книгу как можно быстрее!")}
                
              </p>
            )}
            {isFormError && (
              <p className="booking__form-message-error">{t("Пожалуйста, заполните поле!")}
                
              </p>
              )}
        <picture>
          <source srcSet={bookingMobile} media="(max-width: 767px)" />
          <source srcSet={bookingTablet} media="(max-width: 1439px)" />
          <img className="booking__image" src={bookingDesktop} alt="" />
        </picture>
      </div>
      <picture>
        <source srcSet={bookingEllipseMobile} media="(max-width: 767px)" />
        <source srcSet={bookingEllipseTablet} media="(max-width: 1439px)" />
        <img className="booking__ellipse" src={bookingEllipseDesktop} alt="" />
      </picture>
    </section>
  );
}
