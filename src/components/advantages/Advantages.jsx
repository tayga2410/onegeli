import "./advantages.css";
import orangeIconOne from "../../assets/advantages-orange-icon-1.svg";
import orangeIconTwo from "../../assets/advantages-orange-icon-2.svg";
import orangeIconThree from "../../assets/advantages-orange-icon-3.svg";
import orangeIconFour from "../../assets/advantages-orange-icon-4.svg";
import orangeIconFive from "../../assets/advantages-orange-icon-5.svg";
import greenIconOne from "../../assets/advantages-green-icon-1.svg";
import greenIconTwo from "../../assets/advantages-green-icon-2.svg";
import greenIconThree from "../../assets/advantages-green-icon-3.svg";
import blueIconOne from "../../assets/advantages-blue-icon-1.svg";
import blueIconTwo from "../../assets/advantages-blue-icon-2.svg";
import blueIconThree from "../../assets/advantages-blue-icon-3.svg";
import orangeEllipseLeftDesktop from "../../assets/advantages-ellipse-orange-left-desktop.png";
import orangeEllipseRightDesktop from "../../assets/advantages-ellipse-orange-right-desktop.png";
import orangeEllipseLeftTablet from "../../assets/advantages-ellipse-orange-left-tablet.png";
import orangeEllipseRightTablet from "../../assets/advantages-ellipse-orange-right-tablet.png";
import orangeEllipseRightMobile from "../../assets/advantages-ellipse-orange-right-mobile.png";
import orangeEllipseLeftSemitablet from "../../assets/advantages-ellipse-orange-left-semitablet.png";
import orangeEllipseRightSemitablet from "../../assets/advantages-ellipse-orange-right-semitablet.png";
import greenEllipseLeftDesktop from "../../assets/advantages-ellipse-green-left-desktop.png";
import greenEllipseLeftSemitablet from "../../assets/advantages-ellipse-green-left-semitablet.png";
import greenEllipseLeftMobile from "../../assets/advantages-ellipse-green-left-mobile.png";
import medalMobile from "../../assets/advantages-medal-mobile.png";
import childDesktop from "../../assets/advantages-child-image-desktop.png";
import childTablet from "../../assets/advantages-child-image-tablet.png";
import childSemitablet from "../../assets/advantages-child-image-semitablet.png";
import childMobile from "../../assets/advantages-child-image-mobile.png";
import greenDecorDesktop from "../../assets/advantages-green-decor-desktop.png";
import greenDecorTablet from "../../assets/advantages-green-decor-tablet.png";
import greenDecorMobile from "../../assets/advantages-green-decor-mobile.png";
import womanImageDesktop from "../../assets/advantages-woman-image-desktop.png";
import womanImageTablet from "../../assets/advantages-woman-image-tablet.png";
import womanImageSemitablet from "../../assets/advantages-woman-image-semitablet.png";
import womanImageMobile from "../../assets/advantages-woman-image-mobile.png";
import blueEllipseRightDesktop from "../../assets/advantages-ellipse-blue-right-desktop.png";
import blueEllipseRightSemitablet from "../../assets/advantages-ellipse-blue-right-semitablet.png";
import blueEllipseRightMobile from "../../assets/advantages-ellipse-blue-right-mobile.png";
import blueVisualFirst from '../../assets/advantages-blue-visual-1.png';
import blueVisualSecond from '../../assets/advantages-blue-visual-2.png';


export default function Advantages() {
  return (
    <section className="advantages">
      <ul className="advantages__list">
        <li className="advantages__item advantages__item--orange">
          <h2 className="advantages__header advantages__header--orange">
            Ответственность и гарантии
          </h2>
          <p className="advantages__description  advantages__description--orange">
            Мы уверенны в профессионализме наших сотрудников, ведь проводим
            строгий отбор и берем за них полную ответственность.
          </p>
          <ul className="advantages__sub-list">
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconOne} alt="" />
              <p className="advantages__title advantages__title--orange">
                Специалисты с опытом работы
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconTwo} alt="" />
              <p className="advantages__title advantages__title--orange">
                Педагогическое или медицинское образование
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconThree} alt="" />
              <p className="advantages__title advantages__title--orange">
                Оценка психологического состояния
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconFour} alt="" />
              <p className="advantages__title advantages__title--orange">
                Проверка всех документов и сертификатов
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconFive} alt="" />
              <p className="advantages__title advantages__title--orange">
                Постоянное повышение квалификации
              </p>
            </li>
          </ul>
          <picture>
          <source
              srcSet={orangeEllipseLeftSemitablet}
              media="(max-width: 1019px)"
            />
            <source
              srcSet={orangeEllipseLeftTablet}
              media="(max-width: 1439px)"
            />
            <img
              className="advantages__orange-ellipse-left"
              src={orangeEllipseLeftDesktop}
              alt=""
            />
          </picture>
          <picture>
            <source
              srcSet={orangeEllipseRightMobile}
              media="(max-width: 767px)"
            />
            <source
              srcSet={orangeEllipseRightSemitablet}
              media="(max-width: 1019px)"
            />
            <source
              srcSet={orangeEllipseRightTablet}
              media="(max-width: 1439px)"
            />
            <img
              className="advantages__orange-ellipse-right"
              src={orangeEllipseRightDesktop}
              alt=""
            />
          </picture>
          <img className="advantages__decor-item" src={medalMobile} alt="" />
        </li>
        <li className="advantages__item advantages__item--green">
          <h2 className="advantages__header advantages__header--green">
            Индивидуальное развитие детей
          </h2>
          <p className="advantages__description  advantages__description--green">
            Помогаем детям раскрыться.
          </p>
          <ul className="advantages__sub-list">
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={greenIconOne} alt="" />
              <p className="advantages__title advantages__title--green">
                Персонализирован<br className="advantages__word-breaker" />ные планы развития
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={greenIconTwo} alt="" />
              <p className="advantages__title advantages__title--green">
                Адаптация к потребностям ребенка
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={greenIconThree} alt="" />
              <p className="advantages__title advantages__title--green">
                Развитие природных талантов
              </p>
            </li>
          </ul>
          <picture>
            <source srcSet={childMobile} media="(max-width: 767px)" />
            <source srcSet={childSemitablet} media="(max-width: 1019px)" />
            <source srcSet={childTablet} media="(max-width: 1439px)" />
            <img
              className="advantages__child-image"
              src={childDesktop}
              alt=""
            />
          </picture>
          <picture>
            <source
              srcSet={greenEllipseLeftMobile}
              media="(max-width: 767px)"
            />
            <source
              srcSet={greenEllipseLeftSemitablet}
              media="(max-width: 1019px)"
            />

            <img
              className="advantages__green-ellipse-left"
              src={greenEllipseLeftDesktop}
              alt=""
            />
          </picture>
          <picture>
            <source srcSet={greenDecorMobile} media="(max-width: 1019px)" />
            <source srcSet={greenDecorTablet} media="(max-width: 1439px)" />
            <img
              className="advantages__green-decor"
              src={greenDecorDesktop}
              alt=""
            />
          </picture>
        </li>
        <li className="advantages__item advantages__item--blue">
          <h2 className="advantages__header advantages__header--blue">
            Полное доверие
          </h2>
          <p className="advantages__description  advantages__description--blue">
            Все процессы нашей работы крайне прозрачны, чтобы вы были спокойны
            за своего ребенка.
          </p>
          <ul className="advantages__sub-list">
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={blueIconOne} alt="" />
              <p className="advantages__title advantages__title--blue">
                Полная прозрачность.
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={blueIconTwo} alt="" />
              <p className="advantages__title advantages__title--blue">
                Регулярные обновления и отчетность.
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={blueIconThree} alt="" />
              <p className="advantages__title advantages__title--blue">
                Консультации для родителей.
              </p>
            </li>
          </ul>
          <picture>
            <source srcSet={womanImageMobile} media="(max-width: 767px)" />
            <source srcSet={womanImageSemitablet} media="(max-width: 1019px)" />
            <source srcSet={womanImageTablet} media="(max-width: 1439px)" />
            <img
              className="advantages__woman-image"
              src={womanImageDesktop}
              alt=""
            />
          </picture>
          <picture>
            <source
              srcSet={blueEllipseRightMobile}
              media="(max-width: 767px)"
            />
              <source
              srcSet={blueEllipseRightSemitablet}
              media="(max-width: 1019px)"
            />
            <img
              className="advantages__blue-ellipse-right"
              src={blueEllipseRightDesktop}
              alt=""
            />
          </picture>
          <img
              className="advantages__visual-1"
              src={blueVisualFirst}
              alt=""
            />
            <img
              className="advantages__visual-2"
              src={blueVisualSecond}
              alt=""
            />
        </li>
      </ul>
    </section>
  );
}
