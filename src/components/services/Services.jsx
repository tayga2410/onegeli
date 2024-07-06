import "./services.css";
import checkbox from "../../assets/services/services-checkbox.svg";
import { useState } from "react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="services">
      <h2 className="services__header">Наши услуги</h2>
      <ul className="services__list">
        <li
          className={`services__item ${
            openIndex === 0 ? "services__item--opened" : ""
          }`}
        >
          <h3 className="services__title">Пакет "Младенец" (0-1 год)</h3>
          <span className="services__info">Кому подходит:</span>
          <p className="services__description">
            Этот пакет подходит для семей, которым требуется специализированная
            поддержка в уходе за младенцами в первые месяцы жизни.
          </p>
          {openIndex !== 0 && (
            <button
              className="services__button"
              onClick={() => handleToggleDetails(0)}
            >
              Подробнее
            </button>
          )}
          <div
            className={`services__details ${
              openIndex === 0 ? "services__details--visible" : ""
            }`}
          >
            {openIndex === 0 && (
              <div className="services__details-content">
                <ul className="services__sub-list">
                  <span className="services__info">Включает:</span>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Ежедневный уход и наблюдение за детьми
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Образовательные и развивающие занятия
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Основные медицинские знания (первая помощь, базовые
                    медицинские наблюдения)
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Ежедневные отчеты для родителей
                  </li>
                </ul>
                <ul className="services__sub-list">
                  <span className="services__info">Преимущества:</span>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Доступная стоимость
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Профессиональные и заботливые специалисты
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Основной набор услуг для безопасности и развития ребенка
                  </li>
                </ul>
                <div className="services__price-wrapper">
                  <span className="services__price-text">Цена:</span>
                  <span className="services__price-tag">от 400 000 тенге</span>
                </div>
                <p className="services__sub-description">
                  Запишитесь на консультацию, чтобы узнать, подходит ли вам этот
                  план, и подробный разбор вопросов
                </p>
                <button className="services__button">Записаться</button>
                <button
                  className="services__button services__button--transparent"
                  onClick={() => handleToggleDetails(0)}
                >
                  Свернуть
                </button>
              </div>
            )}
          </div>
        </li>

        <li
          className={`services__item ${
            openIndex === 1 ? "services__item--opened" : ""
          }`}
        >
          <h3 className="services__title">Пакет "Малыш" (1-3 года)</h3>
          <span className="services__info">Кому подходит:</span>
          <p className="services__description">
            Этот пакет предназначен для семей, которые хотят обеспечить своим
            детям уход и развитие на этапе раннего детства.
          </p>
          {openIndex !== 1 && (
            <button
              className="services__button"
              onClick={() => handleToggleDetails(1)}
            >
              Подробнее
            </button>
          )}
          <div
            className={`services__details ${
              openIndex === 1 ? "services__details--visible" : ""
            }`}
          >
            {openIndex === 1 && (
              <div className="services__details-content">
                <ul className="services__sub-list">
                  <span className="services__info">Включает:</span>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Ежедневный уход и наблюдение за детьми
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Образовательные и развивающие занятия
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Основные медицинские знания (первая помощь, базовые
                    медицинские наблюдения)
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Ежедневные отчеты для родителей
                  </li>
                </ul>
                <ul className="services__sub-list">
                  <span className="services__info">Преимущества:</span>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Доступная стоимость
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Профессиональные и заботливые специалисты
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Основной набор услуг для безопасности и развития ребенка
                  </li>
                </ul>
                <div className="services__price-wrapper">
                  <span className="services__price-text">Цена:</span>
                  <span className="services__price-tag">от 400 000 тенге</span>
                </div>
                <p className="services__sub-description">
                  Запишитесь на консультацию, чтобы узнать, подходит ли вам этот
                  план, и подробный разбор вопросов
                </p>
                <button className="services__button">Записаться</button>
                <button
                  className="services__button services__button--transparent"
                  onClick={() => handleToggleDetails(1)}
                >
                  Свернуть
                </button>
              </div>
            )}
          </div>
        </li>

        <li
          className={`services__item ${
            openIndex === 2 ? "services__item--opened" : ""
          }`}
        >
          <h3 className="services__title">Пакет "Дошкольник" (3-5 лет)</h3>
          <span className="services__info">Кому подходит:</span>
          <p className="services__description">
            Этот пакет разработан для семей, которые хотят обеспечить своим
            детям максимальный уровень заботы и подготовки к дошкольному
            образованию.
          </p>
          {openIndex !== 2 && (
            <button
              className="services__button"
              onClick={() => handleToggleDetails(2)}
            >
              Подробнее
            </button>
          )}
          <div
            className={`services__details ${
              openIndex === 2 ? "services__details--visible" : ""
            }`}
          >
            {openIndex === 2 && (
              <div className="services__details-content">
                <ul className="services__sub-list">
                  <span className="services__info">Включает:</span>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Ежедневный уход и наблюдение за детьми
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Образовательные и развивающие занятия
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Основные медицинские знания (первая помощь, базовые
                    медицинские наблюдения)
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Ежедневные отчеты для родителей
                  </li>
                </ul>
                <ul className="services__sub-list">
                  <span className="services__info">Преимущества:</span>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Доступная стоимость
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Профессиональные и заботливые специалисты
                  </li>
                  <li className="services__sub-item">
                    <img src={checkbox} alt="" />
                    Основной набор услуг для безопасности и развития ребенка
                  </li>
                </ul>
                <div className="services__price-wrapper">
                  <span className="services__price-text">Цена:</span>
                  <span className="services__price-tag">от 400 000 тенге</span>
                </div>
                <p className="services__sub-description">
                  Запишитесь на консультацию, чтобы узнать, подходит ли вам этот
                  план, и подробный разбор вопросов
                </p>
                <button className="services__button">Записаться</button>
                <button
                  className="services__button services__button--transparent"
                  onClick={() => handleToggleDetails(2)}
                >
                  Свернуть
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </section>
  );
}
