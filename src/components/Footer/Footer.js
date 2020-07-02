import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={6} className="d-flex flex-column align-items-center contactSide">
            <span className="contactTitle">Get In Touch</span>
            <p className="contactText">Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
            <a href="mailto:dokumaciyagiz@gmail.com" className="contactBtn">Get In Touch</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;