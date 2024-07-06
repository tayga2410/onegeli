// src/components/Faq.js
import './faq.css';
import data from './data.js';
import { useState, useRef, useEffect } from 'react';
import plusIcon from '../../assets/faq/faq-plus-icon.svg';
import minusIcon from '../../assets/faq/faq-minus-icon.svg';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="faq__accordion-item">
      <div className="faq__accordion-question-wrapper" onClick={onClick}>
        <img src={isOpen ? minusIcon : plusIcon} alt={isOpen ? 'Minus' : 'Plus'} />
        <span className="faq__question">{question}</span>
      </div>
      <div
        ref={contentRef}
        className="faq__accordion-content"
        style={{ maxHeight: `${height}px` }}
      >
        <p className="faq__answer">{answer}</p>
      </div>
    </div>
  );
};

const AccordionSection = ({ header, items, openIndex, handleClick }) => (
  <div className="faq__accordion-section">
    <h3 className="faq__accordion-section-header">{header}</h3>
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

const Faq = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (sectionIndex, itemIndex) => {
    setOpenSection(sectionIndex);
    setOpenIndex(openSection === sectionIndex && openIndex === itemIndex ? null : itemIndex);
  };

  return (
    <section className="faq">
      <h2 className="faq__header">Часто задаваемые вопросы</h2>
      {data.map((section, sectionIndex) => (
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
