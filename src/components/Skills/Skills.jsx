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
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            icon: htmlLogo
        },
        {
            id: 2,
            name: 'JavaScript',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquesseollit anim id est laborum.',
            icon: jsLogo
        },
        {
            id: 3,
            name: 'CSS',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            icon: cssLogo
        },
        {
            id: 4,
            name: 'Redux',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            icon: reduxLogo
        },
        {
            id: 5,
            name: 'React',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            icon: reactLogo
        },
        {
            id: 6,
            name: 'TypeScript',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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