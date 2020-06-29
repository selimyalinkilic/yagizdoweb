import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './Home.css';
import Social from './Social/Social';


function Home() {
  return (
    <div className="homeSide" id="home">
      <Row>
        <Col xs={12} lg={8}>
          <div className="hsTextContent">
            <span className="hsText">Hi, my name is</span>
            <span className="hsUserName">Yılmaz Yağız Dokumacı</span>
            <span className="hsJob">I’m a Mobile Developer</span>
            <p className="hsParagh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi vestibulum sit justo in scelerisque etiam faucibus. Nec ut morbi viverra mi aenean nisi, nulla dictumst in.</p>
          </div>
          <Social />
        </Col>
        <Col xs={12} lg={4} className="hsImgSide">
          <img 
            src="./img/yagophoto.jpg"
            className="d-inline-block align-top homeYPhoto"
            alt="yagoophoto"
          />
        </Col>
      </Row>
    </div>
  )
}

export default Home;