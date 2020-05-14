import React from 'react';
import style from './MainInfo.module.css';
import profilePhoto from '../../assets/img/profilePhoto.PNG';

const MainInfo = () => {
    return (
        <div className={style.mainInfo}>
            <div className={style.content}>
                <div className={style.greeting}>
                    <span className={style.hi}>Привет!</span>
                    <span>Я <span className={style.name}>Антон</span> <span className={style.surname}>Ревта</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>
                        <img src={profilePhoto}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInfo;