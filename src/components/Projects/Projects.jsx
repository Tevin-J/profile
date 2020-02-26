import React from 'react';
import style from './Projects.module.css';
import Project from "./Project/Project";
import Title from "../Title/Title";
import counter from '../../assets/img/counter.png';
import socialNetwork from '../../assets/img/social-network.PNG'

const Projects = () => {
    const projectData = [
        {id: 1, name: 'Социальная сеть', desc: 'Написана на React', img: socialNetwork},
        {id: 2, name: 'Счетчик', desc: 'Написан на React', img: counter}
    ];
    const projectsElements = projectData.map(title => <Project name={title.name} desc={title.desc} img={title.img}/>)
    return (
        <div className={style.projects}>
            <div className={style.containerProjectInfo}>
                <Title titleName='Мои проекты'/>
                <div className={style.containerProjects}>
                    {projectsElements}
                </div>
            </div>
        </div>
    );
}

export default Projects;