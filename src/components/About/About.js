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
            <p>Öğrenmeye ve kendime meydan okumaya devam etmeyi tercih ediyorum.</p>
            <p>Bol enerjim ve pozitif kişiliğim sayesinde birçok teknolojiyle başa çıkabilirim. Hızlı öğrenen biriyim, yeni beceriler kazanabiliyorum. Benimle iletişim kurmak istiyorsan, sadece buraya tıkla.</p>
            <p>İşte son zamanlarda üzerinde çalıştığım birkaç teknoloji:</p>
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