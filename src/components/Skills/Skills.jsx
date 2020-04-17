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
            name: 'HTML5',
            desc: 'Подробное описание',
            icon: htmlLogo
        },
        {
            id: 2,
            name: 'CSS3',
            desc: 'CSS-modules, grid, flexbox, adaptive',
            icon: cssLogo
        },
        {
            id: 3,
            name: 'React',
            desc: 'Class and functional components, state, props, hooks, styled components, component lifecycle methods, HOC, axios, fetch',
            icon: reactLogo
        },
        {
            id: 4,
            name: 'Redux',
            desc: 'store, reducers, actions, thunks, API calls, context API, connect, redux-form',
            icon: reduxLogo
        },
        {
            id: 5,
            name: 'JavaScript',
            desc: 'Подробное описание',
            icon: jsLogo
        },
        {
            id: 6,
            name: 'TypeScript',
            desc: 'Подробное описание',
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