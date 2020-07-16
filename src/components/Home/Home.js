import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './Home.css';
import Social from './Social/Social';
// import { Link } from 'react-scroll';

import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();
  return (
    <div className="homeSide" id="home">
      <Row>
        <Col xs={12} lg={8}>
          <div className="hsTextContent">
            <span className="hsText"> {t('Hi.1')} </span>
            <span className="hsUserName">Yılmaz Yağız Dokumacı</span>
            <span className="hsJob">{t('Job.1')}</span>
            <p className="hsParagh">{t('HomeText.1')}</p>
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