import React from 'react';
import style from './../Skills.module.css';

const Skill = (props) => {
    const skillIconStyle = {
        backgroundImage: 'url(' + props.icon + ')',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={style.containerSkill}>
            <div style={skillIconStyle} className={style.skillIcon}>
            </div>
            <div className={style.skillNameContainer}>
                {props.name}
            </div>
            <div className={style.skillDesc}>
                {props.desc}
            </div>
        </div>
    )
}
export default Skill;