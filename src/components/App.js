import React from 'react';
import Menu from './Menu/Menu';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/theme';
import { GlobalStyles } from '../themes/global';
import { useDarkMode } from '../themes/useDarkMode';

import { Container } from 'react-bootstrap';
import Home from './Home/Home';

import './App.css';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeClass = theme === 'light' ? "lightContent" : "darkContent";
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className={themeClass}>
        <Container>
          <Menu theme={theme} toggleTheme={toggleTheme} />
          <section>
            <Home />
          </section>
        </Container>
      </div>
    </ThemeProvider> 
  )
}

export default App;