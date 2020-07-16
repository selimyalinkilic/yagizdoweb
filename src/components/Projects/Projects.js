import React from 'react'
import Project from './Project/Project';

import {Row} from 'react-bootstrap';
import './Projects.css';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Projects = () => {
  const {t} = useTranslation();
  const projectsArray = [
    {id: 1, title: i18next.t('ProjectTitle1.1'), text: i18next.t('ProjectText1.1'), category: "Android", url: "https://3togo.co/home/"},
    {id: 2, title: i18next.t('ProjectTitle2.1'), text: i18next.t('ProjectText2.1'), category: "Javascript", url: "https://github.com/yagizdo/yagoo-bot-twitch"},
    {id: 3, title: i18next.t('ProjectTitle3.1'), text: i18next.t('ProjectText3.1'), category: "Java", url: "https://github.com/yagizdo/firebasePraticeApp"}
  ];
  return (
    <div className="projectsSide" id="projects">
      <h2 className="sectionTitle"> {t('Projects.1')} </h2>
      <Row>
        <Project projects= {projectsArray}/>
      </Row>
      <a 
        href="https://github.com/yagizdo?tab=repositories" 
        rel="noopener noreferrer" 
        target="_blank" 
        className="showAllBtn"
      >
        {t('SeeAll.1')}
      </a>
    </div>
  )
}

export default Projects;
