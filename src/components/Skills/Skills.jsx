import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {
    const skillsData = [
        {id: 1, name: 'JS', desc: 'Подробное описание', icon: 'img'},
        {id: 2, name: 'React', desc: 'Подробное описание', icon: 'img'},
        {id: 3, name: 'Redux', desc: 'Подробное описание', icon: 'img'}
    ];
    const skillsElements = skillsData.map(item => <Skill name={item.name}
                                            desc={item.desc} icon={item.icon}/>)
    return (
        <div className={style.skills}>
            <div className={style.containerSkillsInfo}>
                <div className={style.containerTitle}>
                    <div className={style.title}>
                        Мои навыки
                    </div>
                </div>
                <div className={style.containerSkills}>
                    {skillsElements}
                </div>
            </div>
        </div>

    )
}

export default Skills;