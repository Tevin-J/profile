import React from 'react';
import style from './../Projects.module.css';

const Project = (props) => {

    return (
        <div className={style.containerProject}>
            <div className={style.projectImg}>
                {props.img}
                <div className={style.projectButton}>
                    <button>Смотреть</button>
                </div>
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