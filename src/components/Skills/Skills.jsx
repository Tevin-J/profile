import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import jsLogo from '../../assets/img/js.svg';
import reactLogo from '../../assets/img/react.svg';
import reduxLogo from '../../assets/img/redux.svg';
import typeScriptLogo from '../../assets/img/typescript.svg';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            name: 'React',
            desc: 'Работал с функциональными и классовыми компонентами, styled components, использовал в работе хуки, ' +
                'локальный стейт, local storage, запросы на сервер. Знаю как использовать жизненные циклы компонент.',
            icon: reactLogo
        },
        {
            id: 2,
            name: 'Redux',
            desc: 'Применял в работе High order components. Использовал mapStateToProps, mapDispatchToProps, thunks. Работал с Redux-form, context API. Знаю REST API.',
            icon: reduxLogo
        },
        {
            id: 3,
            name: 'JavaScript',
            desc: 'Знаю стрелочные функции, замыкания, промисы, контекст вызова, прототипы, глубокое копирование, -spread -rest-операторы, деструктуризацию.',
            icon: jsLogo
        },
        {
            id: 4,
            name: 'TypeScript',
            desc: 'Знаю TypeScript в связке с React и Redux. Умею типизировать reducers, thunks, actions, api, components.',
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