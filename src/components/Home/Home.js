import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './Home.css';
import Social from './Social/Social';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div className="homeSide" id="home">
      <Row>
        <Col xs={12} lg={8}>
          <div className="hsTextContent">
            <span className="hsText">Merhaba, ben</span>
            <span className="hsUserName">Yılmaz Yağız Dokumacı</span>
            <span className="hsJob">Android Developer'ım.</span>
            <p className="hsParagh">Hevesli bir Android Uygulama Geliştiricisi ve araştırmacısıyım. Şık ve kullanıcı dostu uygulamaları kodlarım. Motivasyon, yazılım ve yemek hakkında Türkçe yazılar da yazıyorum. Beni işe almak istiyorsan,
            <Link to="footer" spy={true} smooth={true} offset={-10} duration={500}> buraya tıkla.</Link></p>
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