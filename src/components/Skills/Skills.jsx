import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            name: 'JavaScript',
            desc: 'Подробное описание',
            icon: 'https://www.seekclipart.com/clipng/big/110-1106837_proj4js-by-proj4js-javascript-icon-logo-png-clipart.png'
        },
        {
            id: 2,
            name: 'React',
            desc: 'Подробное описание',
            icon: 'https://cdn.worldvectorlogo.com/logos/react.svg'
        },
        {
            id: 3,
            name: 'Redux',
            desc: 'Подробное описание',
            icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
        }
    ];
    const skillsElements = skillsData.map(item => <Skill name={item.name}
                                                         desc={item.desc} icon={item.icon}/>)
    return (
        <div className={style.skills}>
            <div className={style.containerSkillsInfo}>
                <Title titleName='Мои Навыки'/>
                <div className={style.line}></div>
                <div className={style.containerSkills}>
                    {skillsElements}
                </div>
            </div>
        </div>

    )
}

export default Skills;