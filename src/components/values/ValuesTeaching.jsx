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
  
  const isDesktop = window.innerWidth > 1020;
  const maxIndex = isDesktop ? 4 : 5;
  const triggerIndex = useSequenceAnimation(isVisible, 300, maxIndex);

  const { t } = useTranslation();

  const desktopItems = [
    {
      index: 2,
      photo: photo1,
      name: t("Акбарова Акнур"),
      description1: t("Специалист по уходу за младенцами"),
      description2: t("Стаж 14 лет")
    },
    {
      index: 1,
      photo: photo2,
      name: t("Бальмухамедов Нуртас"),
      description1: t("Менеджер здравоохранения"),
      description2: t("Стаж 15 лет")
    },
    {
      index: 0,
      photo: photo3,
      name: t("Советова Алима"),
      description1: t("Детский психолог"),
      description2: t("Стаж 6 лет")
    },
    {
      index: 1,
      photo: photo4,
      name: t("Билькенов Газиз"),
      description1: t("Педиатр"),
      description2: t("Стаж 7 лет")
    },
    {
      index: 2,
      photo: photo5,
      name: t("Мендешева Джамиля"),
      description1: t("Нутрициолог"),
      description2: t("Стаж 7 лет")
    },
  ];

  const mobileItems = [
    {
      index: 1,
      photo: photo1,
      name: t("Акбарова Акнур"),
      description1: t("Специалист по уходу за младенцами"),
      description2: t("Стаж 14 лет")
    },
    {
      index: 2,
      photo: photo2,
      name: t("Бальмухамедов Нуртас"),
      description1: t("Менеджер здравоохранения"),
      description2: t("Стаж 15 лет")
    },
    {
      index: 3,
      photo: photo3,
      name: t("Советова Алима"),
      description1: t("Детский психолог"),
      description2: t("Стаж 6 лет")
    },
    {
      index: 4,
      photo: photo4,
      name: t("Билькенов Газиз"),
      description1: t("Педиатр"),
      description2: t("Стаж 7 лет")
    },
    {
      index: 5,
      photo: photo5,
      name: t("Мендешева Джамиля"),
      description1: t("Нутрициолог"),
      description2: t("Стаж 7 лет")
    },
  ];

  const items = isDesktop ? desktopItems : mobileItems;

  return (
    <div className="values__wrapper">
      <h2 className="values__header">{t("Обучаем у лучших")}</h2>
      <p className="values__description">{t("values sub-description")}</p>
      <ul className="values__card-list" ref={containerRef}>
        {items.map((item, idx) => (
          <AnimatedListItem key={idx} index={item.index} triggerIndex={triggerIndex} className="values__card-item">
            <img className="values__card-item-image" src={item.photo} alt="" />
            <div className="values__card-text-wrapper">
              <h3 className="values__card-item-header">{item.name}</h3>
              <p className="values__card-item-description">{item.description1}</p>
              <p className="values__card-item-description">{item.description2}</p>
            </div>
          </AnimatedListItem>
        ))}
      </ul>
    </div>
  );
}
