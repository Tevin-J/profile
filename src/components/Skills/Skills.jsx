import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import jsLogo from '../../assets/img/js.svg';
import reactLogo from '../../assets/img/react.svg';
import reduxLogo from '../../assets/img/redux.svg';
import typeScriptLogo from '../../assets/img/typescript.svg';
import htmlLogo from '../../assets/img/html-5.svg';
import cssLogo from '../../assets/img/css.svg'
import Fade from 'react-reveal/Fade';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            name: 'HTML',
            desc: 'Адаптивная верстка, верстка на гридах и флексах.',
            icon: htmlLogo
        },
        {
            id: 2,
            name: 'JavaScript',
            desc: 'Стрелочные функции, замыкания, промисы, контекст вызова, прототипы.',
            icon: jsLogo
        },
        {
            id: 3,
            name: 'CSS',
            desc: 'Основные возможности CSS3',
            icon: cssLogo
        },
        {
            id: 4,
            name: 'Redux',
            desc: 'HOC, connect, withRouter, reselect, compose, thunk, dispatch, action',
            icon: reduxLogo
        },
        {
            id: 5,
            name: 'React',
            desc: 'Работал с функциональными и классовыми компонентами, использовал в работе хуки, локальный стейт, local storage, запросы на сервер',
            icon: reactLogo
        },
        {
            id: 6,
            name: 'TypeScript',
            desc: 'Знаю TypeScript в связке с Redux. Знаю как типизировать reducer, api, component',
            icon: typeScriptLogo
        },

    ];
    const skillsElements = skillsData.map(item => <Skill name={item.name} key={item.id}
                                                         desc={item.desc} icon={item.icon}/>)
    return (
        <div className={style.skills} id={'skills'}>
            <div className={style.containerSkillsInfo}>
                <Fade>
                    <Title titleName='Мои навыки'/>
                    <div className={style.containerSkills}>
                        {skillsElements}
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default Skills;