import './faq.css';
import translatedData from './data.js';
import { useState, useRef, useEffect } from 'react';
import plusIcon from '../../assets/faq/faq-plus-icon.svg';
import minusIcon from '../../assets/faq/faq-minus-icon.svg';
import { useTranslation } from "react-i18next";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  

  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  const { t } = useTranslation();


  return (
    <div className="faq__accordion-item">
      <div className="faq__accordion-question-wrapper" onClick={onClick}>
        <img src={isOpen ? minusIcon : plusIcon} alt={isOpen ? 'Minus' : 'Plus'} />
        <span className="faq__question">{t(question)}</span>
      </div>
      <div
        ref={contentRef}
        className="faq__accordion-content"
        style={{ maxHeight: `${height}px` }}
      >
        <p className="faq__answer">{t(answer)}</p>
      </div>
    </div>
  );
};

const AccordionSection = ({ header, items, openIndex, handleClick }) => {
  const { t } = useTranslation();
  
  return (
    <div className="faq__accordion-section">
      <h3 className="faq__accordion-section-header">{t(header)}</h3>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

const Faq = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (sectionIndex, itemIndex) => {
    setOpenSection(sectionIndex);
    setOpenIndex(openSection === sectionIndex && openIndex === itemIndex ? null : itemIndex);
  };

  const { t } = useTranslation();

  return (
    <section className="faq">
      <h2 className="faq__header">{t("Часто задаваемые вопросы")}</h2>
      {translatedData.map((section, sectionIndex) => (
        <AccordionSection
          key={sectionIndex}
          header={section.header}
          items={section.items}
          openIndex={openSection === sectionIndex ? openIndex : null}
          handleClick={(itemIndex) => handleClick(sectionIndex, itemIndex)}
        />
      ))}
    </section>
  );
};

export default Faq;
