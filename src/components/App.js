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
import { motion } from 'framer-motion';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeClass = theme === 'light' ? "lightContent" : "darkContent";
  const variants = {
    hidden: { opacity: 0},
    show: { 
            opacity: 1,
            transition: {
              duration: 1
            }
    }};
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <motion.div className={themeClass} id="main" initial="hidden" animate="show" variants={variants}>
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
      </motion.div>
    </ThemeProvider> 
  )
}

export default App;