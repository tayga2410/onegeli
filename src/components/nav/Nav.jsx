import "./nav.css";
import logo from "../../assets/nav/logo-main.png";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t } = useTranslation();


  return (
    <section className="nav__container">
      <img className="nav__logo" src={logo} alt="" />
      <LanguageSelector />
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#header">
            {t("Главная")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">
          {t("Особенности")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">
          {t("Пакеты услуг")}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="">
          {t("Отзывы")}
          </a>
        </li>
      </ul>
    </section>
  );
}
