import React, { createContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import './components/utils/theme.css';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <Header />
          <Home />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
