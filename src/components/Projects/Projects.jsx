import React from 'react';
import style from './Projects.module.css';
import Project from "./Project/Project";
import Title from "../Title/Title";
import counter from '../../assets/img/counter.png';
import socialNetwork from '../../assets/img/social-network.PNG';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const projectData = [
        {id: 1, name: 'Социальная сеть', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: socialNetwork},
        {id: 2, name: 'Счетчик', desc: 'Написан на React', img: counter}
    ];
    const projectsElements = projectData.map(title => <Project name={title.name} desc={title.desc} img={title.img}
                                                        key={title.id}/>)
    return (
        <div className={style.projects} id={'projects'}>
            <div className={style.containerProjectInfo}>
                <Fade>
                    <Title titleName='Мои проекты'/>
                    <div className={style.containerProjects}>
                        {projectsElements}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;