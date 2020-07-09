import React from 'react'
import Project from './Project/Project';

import {Row} from 'react-bootstrap';
import './Projects.css';

const projectsArray = [
  {id: 1, title: "3ToGo", text: "3ToGo android uygulaması", category: "Android", url: "https://3togo.co/home/"},
  {id: 2, title: "Twitch Chatbot", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "javascript", url: "https://github.com/yagizdo/yagoo-bot-twitch"},
  {id: 3, title: "Project 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "javascript", url: "/"}
]

const Projects = () => {
  return (
    <div className="projectsSide" id="projects">
      <h2 className="sectionTitle">Projeler</h2>
      <Row>
        <Project projects={projectsArray}/>
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
