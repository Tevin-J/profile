import React from 'react';
import style from './../Skills.module.css';

const Skill = (props) => {

    return (
        <div className={style.containerSkill}>
            <div className={style.skill}>
                <div className={style.skillIcon}>
                    <img src={props.icon} alt=""/>
                </div>
                <div className={style.skillNameContainer}>
                        {props.name}
                </div>
            </div>
            <div className={style.skillDesc}>
                {props.desc}
            </div>
        </div>
    )
}
export default Skill;