import "./values.css";
import heartIcon from "../../assets/values/values-icon-1.svg";
import childIcon from "../../assets/values/values-icon-2.svg";
import horseIcon from "../../assets/values/values-icon-3.svg";
import instagram from "../../assets/values/values-icon-button.svg";

export default function ValuesDescription() {
  return (
    <div className="values__wrapper">
      <h2 className="values__header">
        Профессионалы, которым можно доверить самое ценное
      </h2>
      <p className="values__description">
        <u>Каждый из наших наставников</u> проходит специализированную программу
        подготовки, что
        <br className="values__line-breaker" />
        обеспечивает их готовность к любой ситуации. Вы всегда можете положиться
        на их профессионализм.
      </p>
      <ul className="values__list">
        <li className="values__item">
          <div className="values__item-wrapper">
            <img className="values__icon" src={heartIcon} alt="" />
            <h3 className="values__item-header">
              Первая медицинская
              <br /> помощь
            </h3>
          </div>
          <p className="values__item-description">
            Не растеряются в экстренной ситуации и знают как помочь ребенку.
          </p>
          <ul className="values__sub-list">
            <li className="values__sub-item">Аллергии</li>
            <li className="values__sub-item">Травмы и ожоги</li>
            <li className="values__sub-item">ИВБДВ</li>
          </ul>
        </li>
        <li className="values__item">
          <div className="values__item-wrapper">
            <img className="values__icon" src={childIcon} alt="" />
            <h3 className="values__item-header">Профессиональный уход</h3>
          </div>
          <p className="values__item-description">
            Обучены всем аспектам ухода за детьми и правильного питания.
          </p>
          <ul className="values__sub-list">
            <li className="values__sub-item">Уход за младенцами</li>
            <li className="values__sub-item">Купание и кормление</li>
            <li className="values__sub-item">Нутрициология</li>
          </ul>
        </li>
        <li className="values__item">
          <div className="values__item-wrapper">
            <img className="values__icon" src={horseIcon} alt="" />
            <h3 className="values__item-header">Детская психология</h3>
          </div>
          <p className="values__item-description">
            Знают особенности воспитания и развития в каждом этапе жизни.
          </p>
          <ul className="values__sub-list">
            <li className="values__sub-item">Формирование детской психики</li>
            <li className="values__sub-item">Формирование самооценки</li>
            <li className="values__sub-item">Особенности каждого возраста</li>
          </ul>
        </li>
      </ul>
      <button className="values__button">
        <img src={instagram} alt="" />
        Подробнее по подготовке
      </button>
    </div>
  );
}
