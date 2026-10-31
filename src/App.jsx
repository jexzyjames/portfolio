import React, { useState } from 'react';
import Main from './Portfolio/Components/Main/Main';
import About from './Portfolio/Components/About/About';
import Projects from './Portfolio/Components/Projects/Projects';
import Contact from './Portfolio/Contact/Contact';
import Works from './Portfolio/Components/Works/Works';
import Footer from './Portfolio/Components/Footer/Footer';
import { FaSun, FaMoon } from 'react-icons/fa';
import ScrollProgress from './Portfolio/Components/ScrollProgress';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-shell ${theme}`}>
      <ScrollProgress />
      <Main theme={theme} />
      <button
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        className="theme-toggle"
        onClick={toggleTheme}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        type="button"
      >
        {theme === 'dark' ? (
          <FaSun aria-hidden="true" />
        ) : (
          <FaMoon aria-hidden="true" />
        )}
      </button>
      <About />
      <Projects theme={theme} />
      <Works theme={theme} />
      <Contact theme={theme} />
      <Footer />
    </div>
  );
};

export default App;
