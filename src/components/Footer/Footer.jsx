import React from 'react';
import style from './Footer.module.css';
import Title from "../Title/Title";
import VKLogo from '../../assets/img/vk.svg';
import githubLogo from '../../assets/img/github.svg';
import telegramLogo from '../../assets/img/telegram.svg';
import whattsupLogo from '../../assets/img/whatsapp.svg'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.containerFooter}>
                <Title titleName='Антон Ревта'/>
                <div className={style.contacts}>
                    <div className={style.skillIcon}>
                        <img src={VKLogo} alt="vk"/>
                    </div>
                    <div className={style.skillIcon}>
                        <img src={whattsupLogo} alt="whatsapp"/>
                    </div>
                    <div className={style.skillIcon}>
                        <img src={telegramLogo} alt="telegram"/>
                    </div>
                    <div className={style.skillIcon}>
                        <img src={githubLogo} alt="github"/>
                    </div>
                </div>
                <div className={style.reserve}>
                    © 2020 Все права защищены
                </div>
            </div>
        </div>
    )
}

export default Footer;