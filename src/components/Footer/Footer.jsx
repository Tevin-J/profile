import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.title}>
                        Антон Ревта
                    </div>
                    <div className={style.contacts}>
                        <img src="" alt="vk"/>
                        <img src="" alt="github"/>
                        <img src="" alt="codewars"/>
                        <img src="" alt="instagram"/>
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