import React, { useState, useEffect } from "react";
import "./header.css";
import Nav from "../nav/Nav";
import Contacts from "../contacts/HeaderContacts";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1220);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const headerVisible = prevScrollPos > currentScrollPos;
    setVisible(headerVisible);
    setPrevScrollPos(currentScrollPos);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1220);
  };

  useEffect(() => {
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, visible, isMobile]);

  return (
    <section className={`header ${visible ? "visible" : "hidden"}`} id="header">
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
