import React from 'react';
import style from './../Projects.module.css';
import Button from "../../Button/Button";

const Project = (props) => {
    const ProjectImgStyle = {
        backgroundImage: 'url(' + props.img + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={style.containerProject}>
            <div style={ProjectImgStyle} className={style.projectImg} >
                <Button buttonName='cмотреть'/>
            </div>
            <span className={style.projectName}>
                {props.name}
            </span>
            <span className={style.projectDesc}>
                {props.desc}
            </span>
        </div>
    )
}
export default Project;