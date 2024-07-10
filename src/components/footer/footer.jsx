import "./footer.css";
import footerLogo from "../../assets/footer/footer-logo.svg";
import instagramLogo from "../../assets/footer/instagram-logo.svg";
import facebookLogo from "../../assets/footer/facebook-logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer__text-group">
        <img className="footer__logo" src={footerLogo} alt="" />
        <p className="footer__text-group-description">{t("В «Өнегелі» мы предлагаем высококачественный уход и развитие для детей с индивидуальными программами и строгим контролем безопасности.")}
        </p>
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100016356660375" target="_blank">
            <img className="footer__socials-logo" src={facebookLogo} alt="иконка фейсбука" />
          </a>
          <a href="https://www.instagram.com/onegeli.kz/" target="_blank"> <img className="footer__socials-logo" src={instagramLogo} alt="иконка инстаграмма" /></a>
        </div>
      </div>
      <ul className="footer__list">
        <li className="footer__list-header">{t("Менторство")}</li>
        <li className="footer__list-item"><a className="footer__link" href="#services">{t("Услуги")}</a></li>
        <li className="footer__list-item"><Link className="footer__link" to="/test">{t("Тест для родителей")}</Link></li>
        <li className="footer__list-item">{t("Пресса о нас")}</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link className="footer__link" to="/hire">
           {t("Сотрудничество")}
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/hire">{t("Вакансии")}
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/hire#hire-order">{t("Условия найма")}
          </Link>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list-item">{t("Контакты")}</li>
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
        <li className="footer__list-item">{t("Туркестан 16, офис 3015")}</li>
      </ul>
    </footer>
  );
}
