import React from 'react'
import Project from './Project/Project';

import {Row} from 'react-bootstrap';
import './Projects.css';

const projectsArray = [
  {id: 1, title: "Project 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "javascript", url: "/"},
  {id: 2, title: "Project 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "javascript", url: "/"},
  {id: 3, title: "Project 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "javascript", url: "/"}
]

const Projects = () => {
  return (
    <div className="projectsSide" id="projects">
      <h2 className="sectionTitle">Projeler</h2>
      <Row>
        {projectsArray.map((project) => 
          <Project
            key={project.id}
            title={project.title} 
            text={project.text} 
            category={project.category}
            url={project.url}
          />
        )}
      </Row>
      <a 
        href="https://github.com/yagizdo?tab=repositories" 
        rel="noopener noreferrer" 
        target="_blank" 
        className="showAllBtn"
      >
        Tümünü Gör
      </a>
    </div>
  )
}

export default Projects;
