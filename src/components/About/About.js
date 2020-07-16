import React from 'react';

import { Row, Col } from 'react-bootstrap';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation();
  return (
    <div className="aboutSide" id="about" >
      <Row>
        <Col xs={12} lg={7} className="asTextContent">
          <h2 className="sectionTitle"> {t('About.1')} </h2>
          <div className="aboutText">
            <p>{t('AboutText1.1')}</p>
            <p>{t('AboutText2.1')}</p>
            <p>{t('AboutText3.1')}</p>
          </div>
          <ul className="whatIKList">
            <li>Android</li>
            <li>Java</li>
            <li>C#</li>
          </ul>
        </Col>
        <Col xs={12} lg={5} className="asImgContent">
          <div className="asImg"></div>
        </Col>
      </Row>
    </div>
  )
}

export default About;