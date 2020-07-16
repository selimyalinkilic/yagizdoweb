import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import {useTranslation} from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer id="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={6} className="d-flex flex-column align-items-center contactSide">
            <span className="contactTitle">{t('contactTitle.1')}</span>
            <p className="contactText">{t('contactText.1')}</p>
            <a href="mailto:dokumaciyagiz@gmail.com" className="contactBtn">{t('contactBtn.1')}</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;