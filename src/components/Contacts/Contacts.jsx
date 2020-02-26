import React from 'react';
import style from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.containerContacts}>
                <Title titleName='Контакты'/>
                <div className={style.content}>
                    <div className={style.form}>
                        <input type="text" placeholder='имя'/>
                        <input type="text" placeholder='e-mail'/>
                        <textarea placeholder='сообщение'/>
                    </div>
                    <Button buttonName='Отправить'/>
                </div>

            </div>
        </div>
    )
}

export default Contacts;