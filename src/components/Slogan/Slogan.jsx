import React from 'react';
import style from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <div className={style.container}>
                <div className={style.mySlogan}>
                    Терпенье и труд все перетрут!
                </div>
            </div>
        </div>
    )
}

export default Slogan;