import React from 'react';
import style from './../Projects.module.css';
import Button from "../../Button/Button";

const Project = (props) => {
    const ProjectImgStyle = {
        backgroundImage: 'url(' + props.img + ')',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={style.containerProject}>
            <div className={style.containerProjectImg}>
                <div style={ProjectImgStyle} className={style.projectImg} >
                    <div className={style.containerProjectButton}>
                        <Button buttonName='cмотреть'/>
                    </div>
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