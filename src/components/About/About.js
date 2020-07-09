import React from 'react';

import { Row, Col } from 'react-bootstrap';
import './About.css';


const About = () => {
  return (
    <div className="aboutSide" id="about" >
      <Row>
        <Col xs={12} lg={7} className="asTextContent">
          <h2 className="sectionTitle">Hakkımda</h2>
          <div className="aboutText">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum pellentesque porttitor et, augue aliquam ut sollicitudin pellentesque eleifend.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum pellentesque porttitor et, augue aliquam ut sollicitudin pellentesque eleifend.</p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="whatIKList">
            <li>React.js</li>
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