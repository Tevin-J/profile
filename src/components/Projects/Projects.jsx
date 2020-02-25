import React from 'react';
import style from './Projects.module.css';
import Project from "./Project/Project";
import Title from "../Title/Title";


const Projects = () => {
    const projectData = [
        {id: 1, name: 'Социальная сеть', desc: 'Написана на React', img: 'https://media.istockphoto.com/vectors/social-network-scheme-which-contains-people-connected-to-each-other-vector-id640162840'},
        {id: 2, name: 'Счетчик', desc: 'Написан на React', img: 'https://www.projectcounter.org/wp-content/themes/project-counter-2016/images/logo.png'}
    ];
    const projectsElements = projectData.map(title => <Project name={title.name} desc={title.desc} img={title.img}/>)
    return (
        <div className={style.projects}>
            <div className={style.containerProjectInfo}>
                <Title titleName='Мои проекты'/>
                <div className={style.line}></div>
                <div className={style.containerProjects}>
                    {projectsElements}
                </div>
            </div>
        </div>
    );
}

export default Projects;