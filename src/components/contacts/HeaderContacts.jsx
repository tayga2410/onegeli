import "./headerContacts.css";
import phone from "../../assets/header/phone-icon.svg";
import instagram from "../../assets/header/instagram-icon.svg";
import whatsapp from "../../assets/header/whatsapp-icon.svg";
import { useTranslation } from "react-i18next";

export default function headerContacts() {
  const { t } = useTranslation();

  return (
    <section className="contacts">
      <div className="contacts__group">
        <img src={phone} alt="" />
        <div className="contacts__text-group">
          <p className="contacts__header">{t("Работаем с 10:00 до 19:00")}</p>
          <a className="contacts__phone" href="https://wa.me/77780990422?text=Здравствуйте,%20хочу%20получить%20консультацию!">
            +7 (778) 099-04-22
          </a>
        </div>
      </div>
      <div className="contacts__socials">
        <a href="https://wa.me/77780990422?text=Здравствуйте,%20хочу%20получить%20консультацию!">
          {" "}
          <img src={whatsapp} alt="иконка ватсаппа" />
        </a>
        <a href="https://www.instagram.com/onegeli.kz/" target="_blank">
          {" "}
          <img src={instagram} alt="иконка инстаграмма" />
        </a>
      </div>
    </section>
  );
}
