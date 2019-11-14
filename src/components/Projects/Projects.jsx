import React from 'react';
import style from './Projects.module.css';

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={style.containerProjectInfo}>
                <div className={style.containerTitle}>
                    <div className={style.title}>
                        Мои проекты
                    </div>
                </div>
                <div className={style.containerProjects}>
                    <div className={style.containerProject}>
                        <div className={style.projectImg}>
                            img
                            <div className={style.projec2Button}>
                                <button>Смотреть</button>
                            </div>
                        </div>
                        <div className={style.projectInfo}>
                            <div className={style.projectName}>
                                Название проекта
                            </div>
                            <div className={style.projectDesc}>
                                Описание
                            </div>
                        </div>
                    </div>
                    <div className={style.containerProject}>
                        <div className={style.projectImg}>
                            img
                            <div className={style.projec2Button}>
                                <button>Смотреть</button>
                            </div>
                        </div>
                        <div className={style.projectInfo}>
                            <div className={style.projectName}>
                                Название проекта
                            </div>
                            <div className={style.projectDesc}>
                                Описание
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;