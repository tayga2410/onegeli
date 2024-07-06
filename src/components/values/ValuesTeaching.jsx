import "./values.css";
import ellipseTemporary from '../../assets/values/ellipse-temporary.svg'

export default function ValuesTeaching() {
  return (
    <div className="values__wrapper">
      <h2 className="values__header">Обучаем у лучших</h2>
      <p className="values__description">
        Наши опытные врачи и тренеры обучают специалистов передовым методикам
        педиатрии и детского развития.
      </p>
      <ul className="values__card-list">
        <li className="values__card-item">
            <img className="values__card-item-image" src={ellipseTemporary} alt="" />
            <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">Имя Фамилия</h3>
            <p className="values__card-item-description">Должность</p>
            </div>
        </li>
        <li className="values__card-item">
            <img className="values__card-item-image" src={ellipseTemporary} alt="" />
            <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">Имя Фамилия</h3>
            <p className="values__card-item-description">Должность</p>
            </div>
        </li>
        <li className="values__card-item">
            <img className="values__card-item-image" src={ellipseTemporary} alt="" />
            <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">Имя Фамилия</h3>
            <p className="values__card-item-description">Должность</p>
            </div>
        </li>
        <li className="values__card-item">
            <img className="values__card-item-image" src={ellipseTemporary} alt="" />
            <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">Имя Фамилия</h3>
            <p className="values__card-item-description">Должность</p>
            </div>
        </li>
        <li className="values__card-item">
            <img className="values__card-item-image" src={ellipseTemporary} alt="" />
            <div className="values__card-text-wrapper">
            <h3 className="values__card-item-header">Имя Фамилия</h3>
            <p className="values__card-item-description">Должность</p>
            </div>
        </li>
      </ul>
    </div>
  );
}
