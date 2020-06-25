import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { func, string } from 'prop-types';

import { Navbar, Nav } from 'react-bootstrap';

import './Menu.css'

const Menu = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="/">
          <img
            src={isLight ? "./img/icon/yagoo-logo.svg" : "./img/icon/yagoo-logo-light.svg"}
            width="32"
            height="32"
            className="d-inline-block align-top yLogo"
            alt="yagoo logo"
            />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey="#home">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
        <div className="menuButtons">
          <Router>
            <Link to="#" className="resumeLink">Resume</Link>
          </Router>
          <span className="siteMode" onClick={toggleTheme} />
          <span className="siteLang trLang" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
};

Menu.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Menu;