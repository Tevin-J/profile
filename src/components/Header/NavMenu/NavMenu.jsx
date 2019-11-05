import React from 'react';
import style from './NavMenu.module.css';

const NavMenu = () => {
    return (
        <div className={style.navMenu}>
            <a href='' className={style.link}>Главная</a>
            <a href='' className={style.link}>Скиллы</a>
            <a href='' className={style.link}>Проекты</a>
            <a href='' className={style.link}>Контакты</a>
        </div>
    )
}

export default NavMenu;