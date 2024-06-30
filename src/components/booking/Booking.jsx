import "./booking.css";
import bookingDesktop from '../../assets/booking-image-desktop.png'
import bookingTablet from '../../assets/booking-image-tablet.png'
import bookingMobile from '../../assets/booking-image-mobile.png'
import bookingEllipseDesktop from '../../assets/booking-ellipse-desktop.svg'
import bookingEllipseTablet from '../../assets/booking-ellipse-tablet.svg'
import bookingEllipseMobile from '../../assets/booking-ellipse-mobile.svg'


export default function Booking() {
  return (
    <div className="booking__container">
      <div className="booking__wrapper">
      <h2 className="booking__header">
        Скачайте бесплатную электронную книгу 'Этапы развития ребёнка' от UNICEF
      </h2>
      <p className="booking__description">
        Ценные советы по уходу за детьми от рождения до 5 лет на основе
        рекомендаций Американской Академии Педиатрии и Национального Института
        Здоровья.
      </p>
      <form className="booking__form" action="">
        <input className="booking__input" type="email" placeholder="Ваша эл. почта" />
        <button className="booking__button" >Получить книгу</button>
      </form>
      <picture>
      <source srcSet={bookingMobile} media="(max-width: 767px)" />
      <source srcSet={bookingTablet} media="(max-width: 1439px)" />
        <img className="booking__image" src={bookingDesktop} alt="" /></picture>
      </div>
      <picture>
      <source srcSet={bookingEllipseMobile} media="(max-width: 767px)" />
      <source srcSet={bookingEllipseTablet} media="(max-width: 1439px)" />
        <img className="booking__ellipse" src={bookingEllipseDesktop} alt="" />
      </picture>
    </div>
  );
}
