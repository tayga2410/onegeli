import "./about.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <iframe
         className="about__iframe"
          src="https://www.youtube.com/embed/jHFtK_H80M0?si=K3p-ZMifTxmc5ZbB"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="about__text-wrapper">
          <h2 className="about__header">
            {t("Современные стандарты заботы о детях")}
          </h2>
          <p className="about__description">{t("about description")}</p>
        </div>
      </div>
    </section>
  );
}
