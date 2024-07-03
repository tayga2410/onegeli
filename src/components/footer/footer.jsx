import "./footer.css";
import footerLogo from "../../assets/footer-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text-group">
        <img className="footer__logo" src={footerLogo} alt="" />
        <p className="footer__text-group-description">
          В "Өнегелі" мы предлагаем высококачественный уход и развитие для детей
          с индивидуальными программами и строгим контролем безопасности.
        </p>
        <div className="footer__socials">
          <img className="footer__socials-logo" src={twitterLogo} alt="" />
          <img className="footer__socials-logo" src={facebookLogo} alt="" />
          <img className="footer__socials-logo" src={instagramLogo} alt="" />
        </div>
      </div>
      <ul className="footer__list">
        <h3 className="footer__list-header">МЕНТОРСТВО</h3>
        <li className="footer__list-item">Услуги</li>
        <li className="footer__list-item">Тест на _______</li>
        <li className="footer__list-item">Пресса о нас</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list-item">Сотрудничество</li>
        <li className="footer__list-item">Вакансии</li>
        <li className="footer__list-item">Условия найма</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list-item">Контакты</li>
        <li className="footer__list-item">
          <a className="footer__link" href="tel:+77780990422">
            +77780990422
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="mailto:onegeli.kz@gmail.com">
            onegeli.kz@gmail.com
          </a>
        </li>
        <li className="footer__list-item">Туркестан 16, офис 3015</li>
      </ul>
    </footer>
  );
}
