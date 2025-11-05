import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga4';
import './styles/variables.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Analytics from './components/Analytics';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Analytics />
      <div className="App" data-theme={theme}>
        <Navbar />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Portfolio />
                <Experience />
                <Skills />
                <Contact />
              </>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
