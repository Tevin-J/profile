import React from 'react';
import style from './Skills.module.css';

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.containerSkillsInfo}>
                <div className={style.containerTitle}>
                    <div className={style.title}>
                        Мои навыки
                    </div>
                </div>
                <div className={style.containerSkills}>

                    <div className={style.containerSkill}>
                        <div className={style.skill}>
                            <div className={style.skillIcon}>
                            </div>
                            <div className={style.skillNameContainer}>
                                <div className={style.skillName}>
                                    JavaScript
                                </div>
                            </div>
                        </div>
                        <div className={style.skillDesc}>
                            Подробное описание скилла
                        </div>
                    </div>
                    <div className={style.containerSkill}>
                        <div className={style.skill}>
                            <div className={style.skillIcon}>
                            </div>
                            <div className={style.skillNameContainer}>
                                <div className={style.skillName}>
                                    React
                                </div>
                            </div>
                        </div>
                        <div className={style.skillDesc}>
                            Подробное описание скилла
                        </div>
                    </div>
                    <div className={style.containerSkill}>
                        <div className={style.skill}>
                            <div className={style.skillIcon}>
                            </div>
                            <div className={style.skillNameContainer}>
                                <div className={style.skillName}>
                                    Redux
                                </div>
                            </div>
                        </div>
                        <div className={style.skillDesc}>
                            Подробное описание скилла
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Skills;