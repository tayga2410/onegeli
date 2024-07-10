import React, { useState, useRef } from "react";
import translatedData from "./questions.js";
import "./quizPage.css";
import "./../test/heroTest.css";
import badResult from "../../assets/test/test-poor-result.png";
import averageResult from "../../assets/test/test-average-result.png";
import goodResult from "../../assets/test/test-good-result.png";
import { useNavigate } from "react-router-dom";
import HeroPopup from "../hero/HeroPopup";
import { useTranslation } from "react-i18next";

const QuizPage = () => {
  const { t } = useTranslation();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < translatedData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const getResultMessage = (score) => {
    const percentage = Math.floor((score / translatedData.length) * 100);
    return `${percentage}%`;
  };

  const getResultText = (score) => {
    const percentage = (score / translatedData.length) * 100;
    if (percentage < 50) {
      return {
        text1: t(
          "Ваши результаты показывают, что вы нуждаетесь в значительном улучшении знаний по уходу и развитию детей раннего возраста."
        ),
        text2: t(
          "Запишитесь на консультацию с нашими специалистами, чтобы лучше понимать потребности вашего ребенка и обеспечивать ему оптимальные условия для роста и развития."
        ),
      };
    } else if (percentage < 85) {
      return {
        text1: t(
          "Ваши результаты показывают, что у вас есть базовые знания по уходу и развитию детей раннего возраста, но есть еще много аспектов, которые требуют внимания и усовершенствования."
        ),
        text2: t(
          "Свяжитесь с нашими специалистами, чтобы обсудить, как вы можете улучшить свои знания и навыки."
        ),
      };
    } else {
      return {
        text1: t(
          "Отличная работа! Ваши знания по уходу и развитию детей раннего возраста на высоком уровне."
        ),
        text2: t(
          "Продолжайте в том же духе и не забывайте делиться своими знаниями с другими родителями."
        ),
      };
    }
  };

  const resultText = getResultText(score);

  const getResultImage = (score) => {
    const percentage = (score / translatedData.length) * 100;
    if (percentage < 50) {
      return badResult;
    } else if (percentage < 85) {
      return averageResult;
    } else {
      return goodResult;
    }
  };

  const navigate = useNavigate();

  const handleMainPageButtonClick = () => {
    navigate("/");
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const phone = form.current.user_phone.value.trim();
    const age = form.current.user_age.value.trim();
    const text = form.current.user_text.value.trim();

    if (!userName || !phone || !age || !text) {
      setIsFormError(true);
      setIsFormSubmitted(false);
      return;
    }

    emailjs
      .sendForm("service_ron3byc", "template_pnrn65z", form.current, {
        publicKey: "kR7E2o9Z4mUG3h6-E",
      })
      .then(
        () => {
          setIsFormSubmitted(true);
          setIsFormError(false);
          form.current.reset();
        },
        (error) => {
          setIsFormSubmitted(false);
          setIsFormError(true);
          form.current.reset();
        }
      );
  };

  return (
    <div className="quiz-page">
      {showResult ? (
        <div className="result">
          <h2 className="result-header">{t("Ваш результат")}</h2>
          <div className="result-container">
            <picture>
              <img
                className="result-image"
                src={getResultImage(score)}
                alt="Result"
              />
            </picture>
            <p className="result-percentage">{getResultMessage(score)}</p>
          </div>
          <div className="result-text-container">
            <p className="result-description">{resultText.text1}</p>
            <p className="result-description">{resultText.text2}</p>
          </div>
          <div className="test-hero__button-group">
            <button
              className="test-hero__test-start-button hero__button"
              onClick={togglePopup}
            >
              {t("Записаться на разбор")}
            </button>
            <button
              className="test-hero__test-cancel-button hero__test-button hero__button"
              onClick={handleMainPageButtonClick}
            >
              {t("На главную страницу")}
            </button>
          </div>
          <HeroPopup show={showPopup} handleClose={togglePopup}>
            <h2 className="hero__form-header">Запись на консультацию</h2>
            <form
              className="hero__form"
              ref={form}
              onSubmit={sendEmail}
              autoComplete="off"
              id="#form"
            >
              <input
                className="hero__input"
                type="text"
                placeholder="Ваше Имя"
                name="user_name"
              />
              <input
                className="hero__input"
                type="tel"
                placeholder="Ваш номер телефона"
                name="user_phone"
              />
              <input
                className="hero__input"
                type="text"
                placeholder="Возраст ребенка"
                name="user_age"
              />
              <textarea
                className="hero__input hero__input--textarea"
                type="text"
                placeholder="Ваши пожелания"
                name="user_text"
              />
              <div className="hero__button-group hero__form-button-group">
                <button
                  className="hero__form-button hero__button form__button"
                  type="submit"
                  value="Send"
                >
                  Отправить заявку
                </button>
                <button
                  className="hero__form-button hero__cancel-button"
                  onClick={togglePopup}
                >
                  Отмена
                </button>
              </div>
            </form>
            {isFormSubmitted && (
              <p className="hero__form-message">
                Спасибо, Ваши пожелания отправлены!
              </p>
            )}
            {isFormError && (
              <p className="hero__form-message-error">
                Пожалуйста, заполните все поля!
              </p>
            )}
          </HeroPopup>
        </div>
      ) : (
        <div className="question">
          <span className="quiz-count">
            {t("Вопрос ")} {translatedData[currentQuestion].number}
          </span>
          <h2 className="quiz-header">
            {t(translatedData[currentQuestion].question)}
          </h2>
          <div className="answers">
            {translatedData[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className={`answer ${
                  selectedAnswer === index ? "selected" : ""
                }`}
                onClick={() => handleAnswerClick(answer.isCorrect)}
              >
                {t(answer.text)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
