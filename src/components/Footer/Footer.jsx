import React from 'react';
import style from './Footer.module.css';
import Title from "../Title/Title";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.containerFooter}>
                <Title titleName='Антон Ревта'/>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={style.contacts}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1024px-Vk_Logo.svg.png" alt="vk"/>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
                        <img src="https://www.cj-innovations.com/images/codewars.png" alt="codewars"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/294px-WhatsApp_logo-color-vertical.svg.png" alt="whatsapp"/>
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