import React from 'react';
import Menu from './Menu/Menu';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/theme';
import { GlobalStyles } from '../themes/global';
import { useDarkMode } from '../themes/useDarkMode';

import { Container } from 'react-bootstrap';
import Home from './Home/Home';

import './App.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';
import ScrollTop from './ScrollTop/ScrollTop';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeClass = theme === 'light' ? "lightContent" : "darkContent";
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className={themeClass} id="main">
        <Container>
          <Menu theme={theme} toggleTheme={toggleTheme} />
          <section>
            <Home />
            <About theme={theme}/>
            <Projects />
            <Blog />
          </section>
        </Container>
        <Footer/>
        <ScrollTop />
      </div>
    </ThemeProvider> 
  )
}

export default App;