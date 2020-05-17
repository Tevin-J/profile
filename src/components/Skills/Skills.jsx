import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import jsLogo from '../../assets/img/js.svg';
import reactLogo from '../../assets/img/react.svg';
import reduxLogo from '../../assets/img/redux.svg';
import typeScriptLogo from '../../assets/img/typescript.svg';
import htmlCss from '../../assets/img/htmlCss.svg'
import git from '../../assets/img/git.svg'
import Fade from 'react-reveal/Fade';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            name: 'HTML / CSS',
            desc: 'Умею верстать на гридах и флексах, работать с медиа-запросами. Имею опыт верстки макетов с Figma.',
            icon: htmlCss
        },
        {
            id: 2,
            name: 'React',
            desc: 'Работал с функциональными и классовыми компонентами, styled components, использовал в работе хуки, ' +
                'локальный стейт, local storage, AJAX запросы. Знаю как использовать жизненные циклы компонент.',
            icon: reactLogo
        },
        {
            id: 3,
            name: 'Redux',
            desc: 'Применял в работе High order components. Использовал mapStateToProps, mapDispatchToProps, thunks. Работал с Redux-form, context API. Знаю REST API.',
            icon: reduxLogo
        },
        {
            id: 4,
            name: 'JavaScript',
            desc: 'Знаю и применяю на практике современные возможности JavaScript. Знаю стрелочные функции, методы массивов, замыкания, промисы, контекст вызова, прототипы, глубокое копирование, -spread -rest-операторы, деструктуризацию.',
            icon: jsLogo
        },
        {
            id: 5,
            name: 'TypeScript',
            desc: 'Обладаю навыками работы с TypeScript в связке с React и Redux. Умею типизировать reducers, thunks, actions, api, components.',
            icon: typeScriptLogo
        },
        {
            id: 6,
            name: 'Git',
            desc: 'Знаю и применяю на практике основные команды git, имею опыт командной работы над проектом в Github.',
            icon: git
        }
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