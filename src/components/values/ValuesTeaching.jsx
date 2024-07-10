import "./values.css";
import photo1 from "../../assets/values/values-photo-1.png";
import photo2 from "../../assets/values/values-photo-2.png";
import photo3 from "../../assets/values/values-photo-3.png";
import photo4 from "../../assets/values/values-photo-4.png";
import photo5 from "../../assets/values/values-photo-5.png";
import { useTranslation } from "react-i18next";
import AnimatedListItem from "../utils/AnimatedListItem";
import { useRef } from "react";
import { useSequenceAnimation } from "../utils/useSequenceAnimation";
import { useOnScreen } from "../utils/useOnScreen";

export default function ValuesTeaching() {
  const containerRef = useRef();
  const isVisible = useOnScreen(containerRef);
  const triggerIndex = useSequenceAnimation(isVisible);

  const { t } = useTranslation();

  return (
    <div className="values__wrapper">
      <h2 className="values__header">{t("Обучаем у лучших")}</h2>
      <p className="values__description">{t("values sub-description")}</p>
      <ul className="values__card-list" ref={containerRef}>
      <AnimatedListItem index={2} triggerIndex={triggerIndex} className="values__card-item">
          <img className="values__card-item-image" src={photo1} alt="" />
          <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">{t("Акбарова Акнур")}</h3>
            <p className="values__card-item-description">
              {t("Специалист по уходу за младенцами")}
            </p>
            <p className="values__card-item-description">{t("Стаж 14 лет")}</p>
          </div>
        </AnimatedListItem>
        <AnimatedListItem index={1} triggerIndex={triggerIndex} className="values__card-item">
          <img className="values__card-item-image" src={photo2} alt="" />
          <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">
              {t("Бальмухамедов Нуртас")}
            </h3>
            <p className="values__card-item-description">
              {t("Менеджер здравоохранения")}
            </p>
            <p className="values__card-item-description">{t("Стаж 15 лет")}</p>
          </div>
        </AnimatedListItem>
        <AnimatedListItem index={0} triggerIndex={triggerIndex} className="values__card-item">
          <img className="values__card-item-image" src={photo3} alt="" />
          <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">{t("Советова Алима")}</h3>
            <p className="values__card-item-description">{t("Детский психолог")}</p>
            <p className="values__card-item-description">{t("Стаж 6 лет")}</p>
          </div>
        </AnimatedListItem>
        <AnimatedListItem index={1} triggerIndex={triggerIndex} className="values__card-item">
          <img className="values__card-item-image" src={photo4} alt="" />
          <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">{t("Билькенов Газиз")}</h3>
            <p className="values__card-item-description">{t("Педиатр")}</p>
            <p className="values__card-item-description">{t("Стаж 7 лет")}</p>
          </div>
        </AnimatedListItem>
        <AnimatedListItem index={2} triggerIndex={triggerIndex} className="values__card-item">
          <img className="values__card-item-image" src={photo5} alt="" />
          <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">{t("Мендешева Джамиля")}</h3>
            <p className="values__card-item-description">{t("Нутрициолог")}</p>
            <p className="values__card-item-description">{t("Стаж 7 лет")}</p>
          </div>
        </AnimatedListItem>
      </ul>
    </div>
  );
}
