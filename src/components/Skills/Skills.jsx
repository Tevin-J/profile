import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import jsLogo from '../../assets/img/js.svg';
import reactLogo from '../../assets/img/react.svg';
import reduxLogo from '../../assets/img/redux.svg'

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            name: 'React',
            desc: 'Подробное описание',
            icon: reactLogo
        },
        {
            id: 2,
            name: 'JavaScript',
            desc: 'Подробное описание',
            icon: jsLogo
        },
        {
            id: 3,
            name: 'Redux',
            desc: 'Подробное описание',
            icon: reduxLogo
        }
    ];
    const skillsElements = skillsData.map(item => <Skill name={item.name}
                                                         desc={item.desc} icon={item.icon}/>)
    return (
        <div className={style.skills}>
            <div className={style.containerSkillsInfo}>
                <Title titleName='Мои навыки'/>
                <div className={style.containerSkills}>
                    {skillsElements}
                </div>
            </div>
        </div>

    )
}

export default Skills;