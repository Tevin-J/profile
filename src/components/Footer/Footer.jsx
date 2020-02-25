import React from 'react';
import style from './Footer.module.css';
import Title from "../Title/Title";
import VKLogo from '../../assets/img/VKLogo.png';
import githubLogo from '../../assets/img/GitHubLogo.png';
import codewarsLogo from '../../assets/img/codewarsLogo.jpeg';
import whattsupLogo from '../../assets/img/whattsupLogo.png'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.containerFooter}>
                <Title titleName='Антон Ревта'/>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={style.contacts}>
                        <img src={VKLogo} alt="vk"/>
                        <img src={githubLogo} alt="github"/>
                        <img src={codewarsLogo} alt="codewars"/>
                        <img src={whattsupLogo} alt="whatsapp"/>
                    </div>
                    <div className={style.reserve}>
                        © 2019 Все права защищены
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;