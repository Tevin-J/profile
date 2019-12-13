import React from 'react';
import style from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <div className={style.mainInfo}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.greeting}>
                        <span>Привет!</span>
                        <span>Я <span>Антон</span> <span>Ревта</span></span>
                        <h1>Я front-end разработчик</h1>
                    </div>
                    <div className={style.photo}>
                        <div className={style.image}>
                            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInfo;