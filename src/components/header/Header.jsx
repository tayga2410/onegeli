import "./header.css";
import Nav from "../nav/Nav";
import Contacts from "../contacts/HeaderContacts";

export default function Header() {
  return (
    <section className="header" id="header">
      <h1 className="visually-hidden">
        Профессиональное агенство по подготовке персонала по уходу за детьми
      </h1>
      <h2 className="visually-hidden">Найти няню в Астане</h2>
      <h3 className="visually-hidden">Лучшие няньки для вашего ребенка</h3>
      <h4 className="visually-hidden">Как нанять няню в Астане</h4>
      <Nav />
      <Contacts />
    </section>
  );
}
