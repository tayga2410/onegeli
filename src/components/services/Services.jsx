import "./services.css";
import checkbox from "../../assets/services/services-checkbox.svg";
import { useState } from "react";
import { usePopup } from "../hero/PopupContext";
import { useTranslation } from "react-i18next";
import { useOnScreen } from "../utils/useOnScreen";
import { useRef } from "react";
import { useSequenceAnimation } from "../utils/useSequenceAnimation";
import AnimatedListItem from "../utils/AnimatedListItem";

export default function Services() {
  const { t } = useTranslation();

  const containerRef = useRef();
  const isVisible = useOnScreen(containerRef);
  const triggerIndex = useSequenceAnimation(isVisible);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { togglePopup } = usePopup();

  return (
    <section className="services" id="services">
      <h2 className="services__header">{t("Наши услуги")}</h2>
      <ul className="services__list" ref={containerRef}>
        <AnimatedListItem
          index={0}
          triggerIndex={triggerIndex}
          className={`services__item ${
            openIndex === 0 ? "services__item--opened" : ""
          }`}
        >
          <div className="services__title-wrapper">
            <h3 className="services__title">
              {t("Пакет «Младенец» (0-1 год)")}
            </h3>
            <span className="services__price-tag">{t("от 400 000 тенге")}</span>
          </div>
          <span className="services__info">{t("Кому подходит:")}</span>
          <p className="services__description">
            {t(
              "Этот пакет подходит для семей, которым требуется специализированная поддержка в уходе за младенцами в первые месяцы жизни."
            )}
          </p>
          {openIndex !== 0 && (
            <button
              className="services__button services__button--details"
              onClick={() => handleToggleDetails(0)}
            >
              {t("Подробнее")}
            </button>
          )}
          <div
            className={`services__details ${
              openIndex === 0 ? "services__details--visible" : ""
            }`}
          >
            {openIndex === 0 && (
              <div className="services__details-content">
                <div className="services__list-wrapper">
                  <ul className="services__sub-list">
                    <span className="services__info">{t("Включает:")}</span>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />{" "}
                      {t(
                        "Полный уход за младенцами: купание, кормление, смена подгузников"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img src={checkbox} alt="" />
                      {t(
                        "Мониторинг здоровья и наблюдение за физическим развитием"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Основные медицинские знания (первая помощь, базовые медицинские наблюдения)"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Консультации по грудному вскармливанию")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Ежедневные отчеты для родителей")}
                    </li>
                  </ul>
                  <ul className="services__sub-list">
                    <span className="services__info">{t("Преимущества:")}</span>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Специалисты с медицинским образованием")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Безопасность и комфорт для младенца")}
                    </li>
                    <li className="services__sub-item">
                      <img src={checkbox} alt="" />
                      {t("Поддержка в установлении режима сна и питания")}
                    </li>
                  </ul>
                </div>
                <p className="services__sub-description">
                  {t(
                    "Запишитесь на консультацию, чтобы узнать, подходит ли вам этот план, и подробный разбор вопросов"
                  )}
                </p>
                <div className="services__button-group">
                  <button className="services__button" onClick={togglePopup}>
                    {t("Записаться")}
                  </button>
                  <button
                    className="services__button services__button--transparent"
                    onClick={() => handleToggleDetails(0)}
                  >
                    {t("Свернуть")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </AnimatedListItem>

        <AnimatedListItem
          index={1}
          triggerIndex={triggerIndex}
          className={`services__item ${
            openIndex === 1 ? "services__item--opened" : ""
          }`}
        >
          <div className="services__title-wrapper">
            <h3 className="services__title">{t("Пакет «Малыш» (1-3 года)")}</h3>
            <span className="services__price-tag">
              {t("от 400 000 тенге")}{" "}
            </span>
          </div>
          <span className="services__info">{t("Кому подходит:")} </span>
          <p className="services__description">
            {t(
              "Этот пакет предназначен для семей, которые хотят обеспечить своим детям уход и развитие на этапе раннего детства."
            )}
          </p>
          {openIndex !== 1 && (
            <button
              className="services__button services__button--details"
              onClick={() => handleToggleDetails(1)}
            >
              {t("Подробнее")}
            </button>
          )}
          <div
            className={`services__details ${
              openIndex === 1 ? "services__details--visible" : ""
            }`}
          >
            {openIndex === 1 && (
              <div className="services__details-content">
                <div className="services__list-wrapper">
                  <ul className="services__sub-list">
                    <span className="services__info">{t("Включает:")}</span>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Уход и наблюдение за детьми в возрасте от 1 до 3 лет"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Индивидуальные программы раннего развития")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Образовательные и развивающие занятия, направленные на развитие моторных и когнитивных навыков"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Поддержка в формировании привычек гигиены и самообслуживания"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Медицинское наблюдение и первая помощь")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Ежемесячные отчеты и консультации с родителями")}
                    </li>
                  </ul>
                  <ul className="services__sub-list">
                    <span className="services__info">{t("Преимущества:")}</span>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Специалисты с медицинским и педагогическим образованием"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Индивидуальный подход к развитию ребенка")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Постоянная связь с родителями и регулярные консультации"
                      )}
                    </li>
                  </ul>
                </div>
                <p className="services__sub-description">
                  {t(
                    "Запишитесь на консультацию, чтобы узнать, подходит ли вам этот план, и подробный разбор вопросов"
                  )}
                </p>
                <div className="services__button-group">
                  <button className="services__button" onClick={togglePopup}>
                    {t("Записаться")}
                  </button>
                  <button
                    className="services__button services__button--transparent"
                    onClick={() => handleToggleDetails(1)}
                  >
                    {t("Свернуть")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </AnimatedListItem>

        <AnimatedListItem
          index={2}
          triggerIndex={triggerIndex}
          className={`services__item ${
            openIndex === 2 ? "services__item--opened" : ""
          }`}
        >
          <div className="services__title-wrapper">
            <h3 className="services__title">
              {t("Пакет «Дошкольник» (3-5 лет)")}
            </h3>
            <span className="services__price-tag">
              {t("от 400 000 тенге")}{" "}
            </span>
          </div>
          <span className="services__info">{t("Кому подходит:")} </span>
          <p className="services__description">
            {t(
              "Этот пакет разработан для семей, которые хотят обеспечить своим детям максимальный уровень заботы и подготовки к дошкольному образованию."
            )}
          </p>
          {openIndex !== 2 && (
            <button
              className="services__button services__button--details"
              onClick={() => handleToggleDetails(2)}
            >
              {t("Подробнее")}
            </button>
          )}
          <div
            className={`services__details ${
              openIndex === 2 ? "services__details--visible" : ""
            }`}
          >
            {openIndex === 2 && (
              <div className="services__details-content">
                <div className="services__list-wrapper">
                  <ul className="services__sub-list">
                    <span className="services__info">Включает:</span>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Полный уход и наблюдение за детьми в возрасте от 3 до 5 лет"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Индивидуальные образовательные программы, подготовка к детскому саду и школе"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Развивающие занятия и игры, направленные на развитие социальных и когнитивных навыков"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Регулярные физические активности и занятия спортом")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Медицинское наблюдение, консультирование по питанию и здоровью"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Еженедельные отчеты и консультации с родителями")}
                    </li>
                  </ul>
                  <ul className="services__sub-list">
                    <span className="services__info">
                      {t("Преимущества:")}{" "}
                    </span>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t(
                        "Специалисты с медицинским и педагогическим образованием"
                      )}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Комплексный подход к развитию и подготовке к школе")}
                    </li>
                    <li className="services__sub-item">
                      <img
                        className="services__checkbox"
                        src={checkbox}
                        alt=""
                      />
                      {t("Постоянная обратная связь и поддержка для родителей")}
                    </li>
                  </ul>
                </div>
                <p className="services__sub-description">
                  {t(
                    "Запишитесь на консультацию, чтобы узнать, подходит ли вам этот план, и подробный разбор вопросов"
                  )}
                </p>
                <div className="services__button-group">
                  <button className="services__button" onClick={togglePopup}>
                    {t("Записаться")}
                  </button>
                  <button
                    className="services__button services__button--transparent"
                    onClick={() => handleToggleDetails(2)}
                  >
                    {t("Свернуть")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </AnimatedListItem>
      </ul>
    </section>
  );
}
