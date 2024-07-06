import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import MainPage from './MainPage';
import TestPage from './TestPage';
import HirePage from './HirePage';
import QuizPage from './components/quiz/QuizPage';


function App() {

  return (
    <Router>
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
   </Router>
  )
}

export default App
