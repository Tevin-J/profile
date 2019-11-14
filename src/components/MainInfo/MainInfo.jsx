import React from 'react';
import style from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <div className={style.mainInfo}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.greeting}>
                        <span>Привет!</span>
                        <span>Меня зовут Антон Ревта</span>
                        <span>Я front-end разработчик</span>
                    </div>
                    <div className={style.photo}>
                        <img src="" alt="MyPhoto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInfo;