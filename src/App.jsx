import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './MainPage';
import TestPage from './TestPage';
import HirePage from './HirePage';
import QuizPage from './components/quiz/QuizPage';
import { PopupProvider } from './components/hero/PopupContext';
import "./i18n";

function App() {
  return (
    <Router>
      <PopupProvider>
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/hire" element={<HirePage />} />
          </Routes>
          <Footer />
        </div>
      </PopupProvider>
    </Router>
  );
}

export default App;
