import React from 'react';
import style from './Projects.module.css';
import Project from "./Project/Project";
import Title from "../Title/Title";

const Projects = () => {
    const projectData = [
        {id: 1, name: 'Название проекта', desc: 'Описание', img: 'img'},
        {id: 2, name: 'Название проекта', desc: 'Описание', img: 'img'}
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