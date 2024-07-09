import "./hireOrder.css";
import ellipseDesktop from "../../assets/hire-order/hire-order-ellipse-desktop.png";
import ellipseTablet from "../../assets/hire-order/hire-order-ellipse-tablet.png";
import ellipseMobile from "../../assets/hire-order/hire-order-ellipse-mobile.png";
import polygonDesktop1 from '../../assets/hire-order/hire-order-polygon-1-desktop.png';
import polygonDesktop2 from '../../assets/hire-order/hire-order-polygon-2-desktop.png';
import polygonDesktop3 from '../../assets/hire-order/hire-order-polygon-3-desktop.png';
import polygonTablet1 from '../../assets/hire-order/hire-order-polygon-1-tablet.png';
import polygonTablet2 from '../../assets/hire-order/hire-order-polygon-2-tablet.png';
import polygonTablet3 from '../../assets/hire-order/hire-order-polygon-3-tablet.png';

export default function HireOrder() {
  return (
    <section className="hire-order" id="hire-order">
      <h2 className="hire-order__header">Порядок найма</h2>
      <picture>
        <source srcSet={ellipseMobile} media="(max-width: 767px)" />
        <source srcSet={ellipseTablet} media="(max-width: 1439px)" />
        <img className="hire-order__ellipse" src={ellipseDesktop} alt="" />
        <ul className="hire-order__list">
          <li className="hire-order__item hire-order__item--first-item">
            <div className="hire-order__item-wrapper">
              <h3 className="hire-order__item-title">Первичный отбор</h3>
              <p className="hire-order__item-description">
                Анализ резюме и собеседование
              </p>
            </div>
            <picture>
              <source srcSet={polygonTablet1} media="(max-width: 1439px)" />
              <img className="hire-order__polygon" src={polygonDesktop1} alt="" />
            </picture>
          </li>
          <li className="hire-order__item hire-order__item--second-item">
            <div className="hire-order__item-wrapper">
              <h3 className="hire-order__item-title">⁠Проверка документов</h3>
              <p className="hire-order__item-description">
                Проверка рекомендаций, документов, медицинское освидетельствова
                <br className="hire-oder__word-breaker"></br>ние
              </p>
            </div>
            <picture>
              <source srcSet={polygonTablet2} media="(max-width: 1439px)" />
              <img className="hire-order__polygon" src={polygonDesktop2} alt="" />
            </picture>
          </li>
          <li className="hire-order__item hire-order__item--third-item">
            <div className="hire-order__item-wrapper">
              <h3 className="hire-order__item-title">Обучение</h3>
              <p className="hire-order__item-description">
                Прохождение обязательных курсов, тестирование, психологическая
                оценка
              </p>
            </div>
            <picture>
              <source srcSet={polygonTablet3} media="(max-width: 1439px)" />
              <img className="hire-order__polygon" src={polygonDesktop3} alt="" />
            </picture>
          </li>
          <li className="hire-order__item hire-order__item--fourth-item">
            <div className="hire-order__item-wrapper">
              <h3 className="hire-order__item-title">⁠Заключение договора</h3>
              <p className="hire-order__item-description">
                Подписание трудового договора, юридическая защита
              </p>
            </div>
          </li>
        </ul>
      </picture>
    </section>
  );
}
