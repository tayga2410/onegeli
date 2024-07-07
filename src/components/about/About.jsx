import "./about.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__wrapper">
        <iframe className="about__iframe"></iframe>
        <div className="about__text-wrapper">
          <h2 className="about__header">{t("Современные стандарты заботы о детях")}
            
          </h2>
          <p className="about__description">{t("about description")}
           
          </p>
        </div>
      </div>
    </section>
  );
}
