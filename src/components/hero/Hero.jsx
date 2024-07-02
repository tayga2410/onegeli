import "./hero.css";
import desktopHero from '../../assets/hero-image-desktop.png'
import tabletHero from '../../assets/hero-image-tablet.png'
import mobileHero from '../../assets/hero-image-mobile.png'
import ellipse from '../../assets/hero-ellipse.svg'
import ellipseMobile  from  '../../assets/hero-ellipse-mobile.svg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text-wrapper">
        <h2 className="hero__header">Безопасность и развитие вашего ребенка</h2>
        <p className="hero__description">
          Обучаем и предоставляем проверенных специалистов по уходу за детьми.
        </p>
        <div className="hero__button-group">
          <button className="hero__reservation-button hero__button">
            Бронь консультации
          </button>
          <button className="hero__test-button hero__button">Тест для родителей</button>
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
