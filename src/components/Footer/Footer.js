import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={6} className="d-flex flex-column align-items-center contactSide">
            <span className="contactTitle">Bana Ulaşın</span>
            {/* <p className="contactText">Whether for a potential project or just to say hi, I'll try my best to answer your email!</p> */}
            <p className="contactText">Selam vermek için ya da bir proje için e-posta atabilirsiniz. E-postanızı cevaplamak için elimden geleni yapacağım.</p>
            <a href="mailto:dokumaciyagiz@gmail.com" className="contactBtn">E-posta Gönder</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;