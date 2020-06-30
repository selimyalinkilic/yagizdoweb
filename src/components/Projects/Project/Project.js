import React from 'react';

import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';
import './Project.css';

const Project = (props) => {
  return (
    <Col xs={12} lg={4}>
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="project d-flex flex-wrap">
        <span className="projectTitle">{props.title}</span>
        <span className="projectText">{props.text}</span>
        <span className="projectCategory">{props.category}</span>
      </a>
    </Col>
  )
}

Project.propTypes = {
  title : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
  category : PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Project;