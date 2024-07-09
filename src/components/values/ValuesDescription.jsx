import "./values.css";
import heartIcon from "../../assets/values/values-icon-1.svg";
import childIcon from "../../assets/values/values-icon-2.svg";
import horseIcon from "../../assets/values/values-icon-3.svg";
import instagram from "../../assets/values/values-icon-button.svg";
import { useTranslation } from "react-i18next";

export default function ValuesDescription() {
  const { t } = useTranslation();

  return (
    <div className="values__wrapper">
      <h2 className="values__header">
        {t("Профессионалы, которым можно доверить самое ценное")}
      </h2>
      <p className="values__description">{t("values description")}</p>
      <ul className="values__list">
        <li className="values__item">
          <div className="values__item-wrapper">
            <img className="values__icon" src={heartIcon} alt="" />
            <h3 className="values__item-header">
              {t("Первая медицинская помощь")}
            </h3>
          </div>
          <p className="values__item-description">
            {t(
              "Не растеряются в экстренной ситуации и знают как помочь ребенку."
            )}
          </p>
          <ul className="values__sub-list">
            <li className="values__sub-item">{t("Аллергии")}</li>
            <li className="values__sub-item"> {t("Травмы и ожоги")}</li>
            <li className="values__sub-item">{t("ИВБДВ")}</li>
          </ul>
        </li>
        <li className="values__item">
          <div className="values__item-wrapper">
            <img className="values__icon" src={childIcon} alt="" />
            <h3 className="values__item-header">
              {t("Профессиональный уход")}
            </h3>
          </div>
          <p className="values__item-description">
            {t("Обучены всем аспектам ухода за детьми и правильного питания.")}
          </p>
          <ul className="values__sub-list">
            <li className="values__sub-item">{t("Уход за младенцами")}</li>
            <li className="values__sub-item">{t("Купание и кормление")}</li>
            <li className="values__sub-item">{t("Нутрициология")}</li>
          </ul>
        </li>
        <li className="values__item">
          <div className="values__item-wrapper">
            <img className="values__icon" src={horseIcon} alt="" />
            <h3 className="values__item-header">{t("Детская психология")}</h3>
          </div>
          <p className="values__item-description">
            {t("Знают особенности воспитания и развития в каждом этапе жизни.")}
          </p>
          <ul className="values__sub-list">
            <li className="values__sub-item">{t("Формирование детской психики")}</li>
            <li className="values__sub-item">{t("Формирование самооценки")}</li>
            <li className="values__sub-item">{t("Особенности каждого возраста")}</li>
          </ul>
        </li>
      </ul>
      <a href="https://www.instagram.com/onegeli.kz/" target="_blank">
      <button className="values__button">
        <img src={instagram} alt="" />{t("Подробнее по подготовке")}
      </button>
        </a>
       
    </div>
  );
}
