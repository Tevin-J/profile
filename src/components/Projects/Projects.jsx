import React from 'react';
import style from './Projects.module.css';
import Project from "./Project/Project";
import Title from "../Title/Title";
import socialNetwork from '../../assets/img/social-network.PNG';
import balcony from '../../assets/img/balcony.PNG'
import cats from '../../assets/img/cats.jpg'
import todolist from '../../assets/img/todolist.jpg'
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const projectData = [
        {id: 1, name: 'Социальная сеть', desc: 'Большой учебный проект социальной сети на React. В проекте применены как' +
                ' функциональные, так и классовые компоненты. State management осуществляется посредством Redux, а так' +
                ' же хуков. Взаимодействие с сервером при помощи библиотеки axios. Архитектура приложения четко разделена на три блока: UI, BLL, DAL.', img: socialNetwork, url: 'https://github.com/Tevin-J/React-app'},
        {id: 2, name: 'Cats app', desc: 'Небольшое приложение о кошках, написанное в связке React-Redux-TypeScript. State management реализован посредством хуков', img: cats, url: 'https://github.com/Tevin-J/cat-test'},
        {id: 3, name: 'Landing page на чистом JS', desc: 'Проведена работа с табами, модальными окнами, формами, таймером. Весь функционал реализован на чистом JavaScript.', img: balcony, url: 'https://github.com/Tevin-J/balconySite'},
        {id: 4, name: 'TodoList', desc: 'Реализован с помощью React, Redux, TypeScript, есть взаимодействие с сервером. Написан на классовых компонентах с применением методов жизненного цикла.', img: todolist, url: 'https://github.com/Tevin-J/todoList'},
    ];
    const projectsElements = projectData.map(title => <Project name={title.name} desc={title.desc} img={title.img}
                                                        key={title.id} url={title.url}/>)
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