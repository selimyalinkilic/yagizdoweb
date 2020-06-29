import React, { Component } from 'react';

import { func, string } from 'prop-types';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './Menu.css'

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      showClass : false
    }
  }
  render() {
    const addClass = () => {
      this.setState({
        showClass : true
      });
    };
    const removeClass = () => {
      this.setState({
        showClass : false
      });
    };
    const { theme, toggleTheme } = this.props;
    const { showClass } = this.state;
    const isLight = theme === 'light';
    return (
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={isLight ? "./img/icon/yagoo-logo.svg" : "./img/icon/yagoo-logo-light.svg"}
            width="32"
            height="32"
            className="d-inline-block align-top yLogo"
            alt="yagoologo"
            />
        </Navbar.Brand>
        <button className="show-navbar ml-auto d-block d-lg-none d-xl-none" onClick={addClass}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33325 8H26.6666M5.33325 16H26.6666M5.33325 24H26.6666" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={showClass ? "navbar-collapse collapse show" : "navbar-collapse collapse"}>
          <Nav className="ml-auto" activeKey="home">
            <Link href="#home" className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={-200} duration={500}>
              Anasayfa
            </Link>
            <Link href="#about" className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-10} duration={500}>
              Hakkımda
            </Link>
            <Link href="#projects" className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500}>
              Projeler
            </Link>
            <Link href="#blog" className="nav-link" activeClass="active" to="blog" spy={true} smooth={true} offset={-10} duration={500}>
              Blog
            </Link>
            <a href="/" className="nav-link d-block d-lg-none d-xl-none">Özgeçmiş</a>
          </Nav>
          <div className="menuOther">
              <a href="/" className="resumeLink d-none d-lg-block d-xl-block">Özgeçmiş</a>
              <span className="siteMode" onClick={toggleTheme} />
              <div className="changeLang">
                <p className="d-block d-lg-none d-xl-none changeLangText">Dili Değiştir</p>
                <span className="siteLang trLang" />
                <p className="d-block d-lg-none d-xl-none mblCopyright">© 2020 Yagizdo</p>
              </div>
              <button className="close-navbar d-block d-lg-none d-xl-none" onClick={removeClass}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8798 11.9999L24.5998 2.27986C24.8182 2.02479 24.9324 1.69669 24.9194 1.36112C24.9065 1.02555 24.7673 0.707236 24.5299 0.469776C24.2924 0.232317 23.9741 0.0932063 23.6385 0.0802447C23.303 0.0672832 22.9749 0.181425 22.7198 0.39986L12.9998 10.1199L3.2798 0.386527C3.02473 0.168092 2.69663 0.0539508 2.36106 0.0669123C2.0255 0.0798739 1.70718 0.218983 1.46972 0.456443C1.23226 0.693902 1.09315 1.01222 1.08019 1.34779C1.06723 1.68336 1.18137 2.01146 1.3998 2.26653L11.1198 11.9999L1.38647 21.7199C1.24689 21.8394 1.13353 21.9865 1.0535 22.1519C0.973471 22.3173 0.928496 22.4975 0.921404 22.6811C0.914311 22.8648 0.945252 23.0479 1.01229 23.219C1.07932 23.3901 1.181 23.5455 1.31094 23.6754C1.44087 23.8053 1.59627 23.907 1.76737 23.974C1.93847 24.0411 2.12158 24.072 2.30521 24.0649C2.48883 24.0578 2.66901 24.0129 2.83443 23.9328C2.99985 23.8528 3.14694 23.7394 3.26647 23.5999L12.9998 13.8799L22.7198 23.5999C22.9749 23.8183 23.303 23.9324 23.6385 23.9195C23.9741 23.9065 24.2924 23.7674 24.5299 23.53C24.7673 23.2925 24.9065 22.9742 24.9194 22.6386C24.9324 22.303 24.8182 21.9749 24.5998 21.7199L14.8798 11.9999Z" fill="#191A1E"/>
                </svg>
              </button>
            </div>
        </div>
      </Navbar>
    )
  }
}

Menu.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Menu;