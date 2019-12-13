import React from 'react';
import style from './../Projects.module.css';
import Button from "../../Button/Button";

const Project = (props) => {

    return (
        <div className={style.containerProject}>
            <div className={style.projectImg}>
                {props.img}
                <Button buttonName='Смотреть'/>
            </div>
            <div className={style.projectInfo}>
                <div className={style.projectName}>
                    {props.name}
                </div>
                <div className={style.projectDesc}>
                    {props.desc}
                </div>
            </div>
        </div>
    )
}
export default Project;