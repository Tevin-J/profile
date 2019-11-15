import React from 'react';
import style from './../Skills.module.css';

const Skill = (props) => {

    return (
        <div className={style.containerSkill}>
            <div className={style.skill}>
                <div className={style.skillIcon}>
                    {props.icon}
                </div>
                <div className={style.skillNameContainer}>
                    <div className={style.skillName}>
                        {props.name}
                    </div>
                </div>
            </div>
            <div className={style.skillDesc}>
                {props.desc}
            </div>
        </div>
    )
}
export default Skill;