import React from 'react';
import style from './NavMenu.module.css';
import {Link, animateScroll} from "react-scroll";


const NavMenu = () => {
    return (
        <div className={style.navMenu}>
            <Link>
                <span onClick={animateScroll.scrollToTop} className={style.link}>Главная</span>
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={1000}>
                <span className={style.link}>Навыки</span>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={1000}>
                <span className={style.link}>Проекты</span>
            </Link>
            <Link to="contacts" spy={true} smooth={true} duration={1000}>
                <span className={style.link}>Контакты</span>
            </Link>
        </div>
    )
}

export default NavMenu;