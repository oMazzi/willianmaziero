import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import styles from './App.module.css';
import Footer from './components/Footer';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Buttons />
        <Routes>
          <Route path="/willmaziero" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
