import React from 'react';
import style from './Skills.module.css';

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.containerSkillsInfo}>
                <div className={style.containerTittle}>
                    <div className={style.title}>
                        Мои навыки
                    </div>
                </div>
                <div className={style.containerSkills}>
                    <div className={style.skill}>
                        Skill 1
                    </div>
                    <div className={style.skill}>
                        Skill 2
                    </div>
                    <div className={style.skill}>
                        Skill 3
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;