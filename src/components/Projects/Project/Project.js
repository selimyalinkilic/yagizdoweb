import React from 'react';

import { Col } from 'react-bootstrap';

import './Project.css';

const Project = ({projects}) => {
  return (
    projects.map(project => (
      <Col xs={12} lg={4} key={project.id}>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project d-flex flex-wrap">
          <span className="projectTitle">{project.title}</span>
          <span className="projectText">{project.text}</span>
          <span className="projectCategory">{project.category}</span>
        </a>
      </Col>  
    ))
  )
}

export default Project;