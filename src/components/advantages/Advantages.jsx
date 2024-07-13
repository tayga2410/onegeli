import "./advantages.css";
import orangeIconOne from "../../assets/advantages/advantages-orange-icon-1.svg";
import orangeIconTwo from "../../assets/advantages/advantages-orange-icon-2.svg";
import orangeIconThree from "../../assets/advantages/advantages-orange-icon-3.svg";
import orangeIconFour from "../../assets/advantages/advantages-orange-icon-4.svg";
import orangeIconFive from "../../assets/advantages/advantages-orange-icon-5.svg";
import greenIconOne from "../../assets/advantages/advantages-green-icon-1.svg";
import greenIconTwo from "../../assets/advantages/advantages-green-icon-2.svg";
import greenIconThree from "../../assets/advantages/advantages-green-icon-3.svg";
import blueIconOne from "../../assets/advantages/advantages-blue-icon-1.svg";
import blueIconTwo from "../../assets/advantages/advantages-blue-icon-2.svg";
import blueIconThree from "../../assets/advantages/advantages-blue-icon-3.svg";
import orangeEllipseLeftDesktop from "../../assets/advantages/advantages-ellipse-orange-left-desktop.png";
import orangeEllipseRightDesktop from "../../assets/advantages/advantages-ellipse-orange-right-desktop.png";
import orangeEllipseLeftTablet from "../../assets/advantages/advantages-ellipse-orange-left-tablet.png";
import orangeEllipseRightTablet from "../../assets/advantages/advantages-ellipse-orange-right-tablet.png";
import orangeEllipseRightMobile from "../../assets/advantages/advantages-ellipse-orange-right-mobile.png";
import orangeEllipseLeftSemitablet from "../../assets/advantages/advantages-ellipse-orange-left-semitablet.png";
import orangeEllipseRightSemitablet from "../../assets/advantages/advantages-ellipse-orange-right-semitablet.png";
import greenEllipseLeftDesktop from "../../assets/advantages/advantages-ellipse-green-left-desktop.png";
import greenEllipseLeftSemitablet from "../../assets/advantages/advantages-ellipse-green-left-semitablet.png";
import greenEllipseLeftMobile from "../../assets/advantages/advantages-ellipse-green-left-mobile.png";
import medalDesktop from "../../assets/advantages/advantages-medal-desktop.png";
import medalTablet from "../../assets/advantages/advantages-medal-tablet.png";
import certificateWide from "../../assets/advantages/advantages-certificate-wide.png";
import certificateDesktop from "../../assets/advantages/advantages-certificate-desktop.png";
import certificateMobile from "../../assets/advantages/advantages-certificate-mobile.png";
import childDesktop from "../../assets/advantages/advantages-child-image-desktop.png";
import childTablet from "../../assets/advantages/advantages-child-image-tablet.png";
import childSemitablet from "../../assets/advantages/advantages-child-image-semitablet.png";
import childMobile from "../../assets/advantages/advantages-child-image-mobile.png";
import greenDecorDesktop from "../../assets/advantages/advantages-green-decor-desktop.png";
import greenDecorTablet from "../../assets/advantages/advantages-green-decor-tablet.png";
import greenDecorMobile from "../../assets/advantages/advantages-green-decor-mobile.png";
import womanImageDesktop from "../../assets/advantages/advantages-woman-image-desktop.png";
import womanImageTablet from "../../assets/advantages/advantages-woman-image-tablet.png";
import womanImageSemitablet from "../../assets/advantages/advantages-woman-image-semitablet.png";
import womanImageMobile from "../../assets/advantages/advantages-woman-image-mobile.png";
import blueEllipseRightDesktop from "../../assets/advantages/advantages-ellipse-blue-right-desktop.png";
import blueEllipseRightSemitablet from "../../assets/advantages/advantages-ellipse-blue-right-semitablet.png";
import blueEllipseRightMobile from "../../assets/advantages/advantages-ellipse-blue-right-mobile.png";
import blueVisualFirst from "../../assets/advantages/advantages-blue-visual-1.png";
import blueVisualSecond from "../../assets/advantages/advantages-blue-visual-2.png";
import { useTranslation } from "react-i18next";
import AnimatedImage from "../utils/AnimatedImage";
import { useRef } from "react";

export default function Advantages() {
  const containerRef = useRef();

  const { t } = useTranslation();
  return (
    <section className="advantages" id="advantages">
      <ul className="advantages__list">
        <li
          className="advantages__item advantages__item--orange"
          ref={containerRef}
        >
          <h2 className="advantages__header advantages__header--orange">
            {t("Ответственность и гарантии")}
          </h2>
          <p className="advantages__description  advantages__description--orange">
            {t(
              "Мы уверенны в профессионализме наших сотрудников, ведь проводим строгий отбор и берем за них полную ответственность."
            )}
          </p>
          <ul className="advantages__sub-list">
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconOne} alt="" />
              <p className="advantages__title advantages__title--orange">
                {t("Специалисты с опытом работы")}
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconTwo} alt="" />
              <p className="advantages__title advantages__title--orange">
                {t("Педагогическое или медицинское образование")}
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconThree} alt="" />
              <p className="advantages__title advantages__title--orange">
                {t("Оценка психологического состояния")}
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconFour} alt="" />
              <p className="advantages__title advantages__title--orange">
                {t("Проверка всех документов и сертификатов")}
              </p>
            </li>
            <li className="advantages__sub-item">
              <img className="advantages__icon" src={orangeIconFive} alt="" />
              <p className="advantages__title advantages__title--orange">
                {t("Постоянное повышение квалификации")}
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
          <picture>
            <source srcSet={medalTablet} media="(max-width: 1439px)" />
            <AnimatedImage
              src={medalDesktop}
              alt=""
              className="advantages__medal"
              initialPosition={{ top: "-80px", left: "-40px" }}
              animatePosition={{ top: "38px", left: "0" }}
              tabletInitialPosition={{ top: "280px", left: "-80px" }}
              tabletAnimatePosition={{ top: "290px", left: "0" }}
              semiTabletInitialPosition={{ top: "510px", left: "-80px" }}
              semiTabletAnimatePosition={{ top: "500px", left: "0" }}
            />
          </picture>
          <picture>
            <source srcSet={certificateMobile} media="(max-width: 767px)" />
            <source srcSet={certificateDesktop} media="(max-width: 1919px)" />
            <AnimatedImage
              className="advantages__certificate"
              src={certificateWide}
              alt=""
              initialPosition={{ bottom: "-100px", right: "-47px" }}
              animatePosition={{ bottom: "-67px", right: "27px" }}
              desktopInitialPosition={{ bottom: "-100px", right: "-88px" }}
              desktopAnimatePosition={{ bottom: "-67px", right: "-51px" }}
              semiTabletInitialPosition={{ bottom: "-100px", right: "-88px" }}
              semiTabletAnimatePosition={{ bottom: "-24px", right: "-64px" }}
              mobileInitialPosition={{ bottom: "-100px", right: "-88px" }}
              mobileAnimatePosition={{ bottom: "9px", right: "-17px" }}
            />
          </picture>
        </li>
        <li
          className="advantages__item advantages__item--green"
          ref={containerRef}
        >
          <h2 className="advantages__header advantages__header--green">
            {t("Индивидуальное развитие детей")}
          </h2>
          <p className="advantages__description  advantages__description--green">
            {t("Помогаем детям раскрыться.")}
          </p>
          <ul className="advantages__sub-list">
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={greenIconOne} alt="" />
              <p className="advantages__title advantages__title--green">
                {t("Персонализированные планы развития")}
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={greenIconTwo} alt="" />
              <p className="advantages__title advantages__title--green">
                {t("Адаптация к потребностям ребенка")}
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={greenIconThree} alt="" />
              <p className="advantages__title advantages__title--green">
                {t("Развитие природных талантов")}
              </p>
            </li>
          </ul>
          <picture>
            <source srcSet={childMobile} media="(max-width: 767px)" />
            <source srcSet={childSemitablet} media="(max-width: 1019px)" />
            <source srcSet={childTablet} media="(max-width: 1439px)" />
            <AnimatedImage
              className="advantages__child-image"
              src={childDesktop}
              alt=""
              initialPosition={{ bottom: "-80px", left: "50px" }}
              animatePosition={{ bottom: "0", left: "71px" }}
              tabletInitialPosition={{ bottom: "-80px", left: "30px" }}
              tabletAnimatePosition={{ bottom: "0", left: "41px" }}
              mobileInitialPosition={{ bottom: "-80px", right: "30px" }}
              mobileAnimatePosition={{ bottom: "0", right: "41px" }}
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
            <AnimatedImage
              className="advantages__green-decor"
              src={greenDecorDesktop}
              alt=""
              initialPosition={{ bottom: "-80px", right: "-20px" }}
              animatePosition={{ bottom: "0", right: "0" }}
            />
          </picture>
        </li>
        <li
          className="advantages__item advantages__item--blue"
          ref={containerRef}
        >
          <h2 className="advantages__header advantages__header--blue">
            {t("Полное доверие")}
          </h2>
          <p className="advantages__description  advantages__description--blue">
            {t(
              "Все процессы нашей работы крайне прозрачны, чтобы вы были спокойны за своего ребенка."
            )}
          </p>
          <ul className="advantages__sub-list">
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={blueIconOne} alt="" />
              <p className="advantages__title advantages__title--blue">
                {t("Полная прозрачность.")}
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={blueIconTwo} alt="" />
              <p className="advantages__title advantages__title--blue">
                {t("Регулярные обновления и отчетность.")}
              </p>
            </li>
            <li className="advantages__sub-item advantages__sub-item--stretched">
              <img className="advantages__icon" src={blueIconThree} alt="" />
              <p className="advantages__title advantages__title--blue">
                {t("Консультации для родителей.")}
              </p>
            </li>
          </ul>
          <picture>
            <source srcSet={womanImageMobile} media="(max-width: 767px)" />
            <source srcSet={womanImageSemitablet} media="(max-width: 1019px)" />
            <source srcSet={womanImageTablet} media="(max-width: 1439px)" />
            <AnimatedImage
              className="advantages__woman-image"
              src={womanImageDesktop}
              alt=""
              initialPosition={{ bottom: "-80px", right: "-20px" }}
              animatePosition={{ bottom: "0", right: "0" }}
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
          <AnimatedImage
            className="advantages__visual-1"
            src={blueVisualFirst}
            alt=""
            initialPosition={{ bottom: "-80px", left: "37px" }}
            animatePosition={{ bottom: "116px", left: "37px" }}
            tabletInitialPosition={{ bottom: "-80px", left: "-10px" }}
            tabletAnimatePosition={{ bottom: "116px", left: "-10px" }}
            mobileInitialPosition={{ bottom: "-80px", left: "-10px" }}
            mobileAnimatePosition={{ bottom: "116px", left: "-10px" }}
          />
          <AnimatedImage
            className="advantages__visual-2"
            src={blueVisualSecond}
            alt=""
            initialPosition={{ bottom: "-80px", left: "141px" }}
            animatePosition={{ bottom: "40px", left: "141px" }}
            tabletInitialPosition={{ bottom: "-80px", left: "82px" }}
            tabletAnimatePosition={{ bottom: "40px", left: "82px" }}
            mobileInitialPosition={{ bottom: "-80px", left: "-10px" }}
            mobileAnimatePosition={{ bottom: "65px", left: "-10px" }}
          />
        </li>
      </ul>
    </section>
  );
}
