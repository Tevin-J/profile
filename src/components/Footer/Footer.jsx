import React from 'react';
import style from './Footer.module.css';
import Title from "../Title/Title";
import VKLogo from '../../assets/img/vk.svg';
import githubLogo from '../../assets/img/github.svg';
import telegramLogo from '../../assets/img/telegram.svg';
import linkedinLogo from '../../assets/img/linkedin.svg'
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.containerFooter}>
                <Fade>
                    <Title titleName='Антон Ревта'/>
                    <div className={style.contacts}>
                        <a href="https://vk.com/tevin_j">
                            <div className={style.skillIcon}>
                                <img src={VKLogo} alt="vk"/>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D1%80%D0%B5%D0%B2%D1%82%D0%B0-866aa71a4/">
                            <div className={style.skillIcon}>
                                <img src={linkedinLogo} alt="linkedin"/>
                            </div>
                        </a>
                        <a href="https://t.me/antonrevta">
                            <div className={style.skillIcon}>
                                <img src={telegramLogo} alt="telegram"/>
                            </div>
                        </a>
                        <a href="https://github.com/Tevin-J">
                            <div className={style.skillIcon}>
                                <img src={githubLogo} alt="github"/>
                            </div>
                        </a>
                    </div>
                    <div className={style.reserve}>
                        © 2020 Все права защищены
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Footer;