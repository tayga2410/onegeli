import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import MainPage from './MainPage';
import TestPage from './TestPage';


function App() {

  return (
    <Router>
   <div className='container'>
    <Header />
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/test" element={<TestPage />} />
    </Routes>
   <Footer />
   </div>
   </Router>
  )
}

export default App
