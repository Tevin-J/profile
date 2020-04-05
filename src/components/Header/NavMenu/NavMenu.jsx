import React from 'react';
import style from './NavMenu.module.css';
import {Link, animateScroll} from "react-scroll";

const NavMenu = () => {
    return (
        <div className={style.navMenu}>
                <a onClick={animateScroll.scrollToTop} className={style.link}>Главная</a>
            <Link to="skills" spy={true} smooth={true} duration={1000}>
                <a className={style.link}>Навыки</a>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={1000}>
                <a className={style.link}>Проекты</a>
            </Link>
            <Link to="contacts" spy={true} smooth={true} duration={1000}>
                <a className={style.link}>Контакты</a>
            </Link>
        </div>
    )
}

export default NavMenu;