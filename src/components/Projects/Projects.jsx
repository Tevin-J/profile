import React from 'react';
import style from './Projects.module.css';

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={style.containerProjectInfo}>
                <div className={style.containerTitle}>
                    <div className={style.title}>Мои проекты</div>
                </div>
                <div className={style.containerProjects}>
                    <div className={style.project}>1</div>
                    <div className={style.project}>2</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;