import "./about.css";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <iframe className="about__iframe"></iframe>
        <div className="about__text-wrapper">
          <h2 className="about__header">
            Современные стандарты заботы о детях
          </h2>
          <p className="about__description">
            Наши специалисты проходят строгий отбор и обучение, включая
            медицинские и педагогические знания, что гарантирует надежный уход.
            Мы разрабатываем индивидуальные программы для каждого ребенка и
            тесно сотрудничаем с родителями. Наша цель – поднять стандарты ухода
            за детьми в Казахстане.
          </p>
        </div>
      </div>
    </div>
  );
}
