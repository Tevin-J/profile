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
                <div className={style.projectItem}>
                    <div style={ProjectImgStyle} className={style.projectImg}>
                        <div className={style.projectButton}>
                            <Button buttonName='cмотреть'/>
                        </div>
                    </div>
                    <div className={style.projectInfo}>
                <span className={style.projectName}>
                {props.name}
                </span>
                        <span className={style.projectDesc} >
                {props.desc}
                </span>
                    </div>
                </div>
            </div>
        )
}
export default Project;