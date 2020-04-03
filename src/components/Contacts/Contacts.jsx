import React from 'react';
import style from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.containerContacts}>
                <Title titleName='Форма для обратной связи'/>
                <Fade>
                    <div className={style.form}>
                        <input type="text" placeholder='Имя'/>
                        <input type="text" placeholder='E-mail'/>
                        <textarea placeholder='Сообщение'/>
                    </div>
                    <Button buttonName='Отправить'/>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts;