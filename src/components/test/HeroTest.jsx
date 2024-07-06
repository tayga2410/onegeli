import "./heroTest.css";
import { useNavigate } from "react-router-dom";
import heroChildDesktop from "../../assets/hero/hero-child-desktop.png";
import heroChildTablet from "../../assets/hero/hero-child-tablet.png";
import heroChildMobile from "../../assets/hero/hero-child-mobile.png";
import ellipse from "../../assets/hero/hero-ellipse.svg";
import ellipseMobile from "../../assets/test/test-hero-ellipse-mobile.png";
import starsDesktop from '../../assets/test/test-hero-stars-image-desktop.png'
import starsTablet from '../../assets/test/test-hero-stars-image-tablet.png'
import starsMobile from '../../assets/test/test-hero-stars-image-mobile.png'

export default function HeroTest() {
  const navigate = useNavigate();

  const handleQuizButtonClick = () => {
    navigate("/quiz");
  };
  const handleMainPageButtonClick = () => {
    navigate("/");
  };

  return (
    <section className="test-hero">
      <div className="test-hero__text-wrapper">
        <h2 className="test-hero__header">Тест для родителей</h2>
        <p className="test-hero__description">
          Этот тест разработан на основе рекомендаций Американской Академии
          Педиатрии (AAP) и Национального Института Здоровья (NIH), чтобы помочь
          родителям оценить свои знания в области ухода и развития детей в
          раннем возрасте.
        </p>
        <div className="test-hero__button-group">
          <button className="test-hero__test-start-button hero__button" onClick={handleQuizButtonClick}>
            Начать тест
          </button>
          <button
            className="test-hero__test-cancel-button hero__test-button hero__button"
            onClick={handleMainPageButtonClick}
          >
            На главную страницу
          </button>
        </div>
      </div>
      <picture>
        <source srcSet={heroChildMobile} media="(max-width: 767px)" />
        <source srcSet={heroChildTablet} media="(max-width: 1439px)" />
        <img className="test-hero__image" src={heroChildDesktop} alt="" />
      </picture>
      <picture>
        <source srcSet={ellipseMobile} media="(max-width: 767px)" />
        <img className="test-hero__decor-image" src={ellipse} alt="" />
      </picture>
      <picture>
        <source srcSet={starsMobile} media="(max-width: 767px)" />
        <source srcSet={starsTablet} media="(max-width: 1439px)" />
        <img className="test-hero__stars-image" src={starsDesktop} alt="" />
      </picture>
    </section>
  );
}
