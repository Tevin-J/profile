import React from 'react';
import style from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.containerContacts}>
                <Title titleName='Контакты'/>
                    <div className={style.form}>
                        <input type="text" placeholder='Имя'/>
                        <input type="text" placeholder='E-mail'/>
                        <textarea placeholder='Сообщение'/>
                    </div>
                    <Button buttonName='Отправить'/>

            </div>
        </div>
    )
}

export default Contacts;