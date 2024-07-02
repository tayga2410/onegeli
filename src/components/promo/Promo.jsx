import './promo.css'
import promoDesktop from '../../assets/promo-image-desktop.png'
import promoMobile from '../../assets/promo-image-mobile.png'
import promoEllipseDesktop from '../../assets/promo-ellipse-desktop.png'
import promoEllipseMobile from '../../assets/promo-ellipse-mobile.png'
import promoBlueEllipseDesktop from '../../assets/promo-blue-ellipse-desktop.svg'
import promoBlueEllipseTablet from '../../assets/promo-blue-ellipse-tablet.svg'
import promoBlueEllipseMobile from '../../assets/promo-blue-ellipse-mobile.svg'

export default function Promo() {
    return (
        <section className="promo">
          <div className="promo__wrapper">
          <h2 className="promo__header">
          Как раскрыть потенциал ребенка?
          </h2>
          <p className="promo__description">
          Запишитесь чтобы получить подробную индивидуальную консультацию
          </p>
            <button className="promo__button" >Записаться</button>
          <picture>
          <source srcSet={promoMobile} media="(max-width: 767px)" />
            <img className="promo__image" src={promoDesktop} alt="" /></picture>
            <picture>
          <source srcSet={promoEllipseMobile} media="(max-width: 767px)" />
            <img className="promo__ellipse" src={promoEllipseDesktop} alt="" />
          </picture>
          </div>
          <picture>
          <source srcSet={promoBlueEllipseMobile} media="(max-width: 767px)" />
          <source srcSet={promoBlueEllipseTablet} media="(max-width: 1439px)" />
            <img className="promo__blue-ellipse" src={promoBlueEllipseDesktop} alt="" />
          </picture>
        </section>
      );
}