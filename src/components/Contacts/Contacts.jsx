import React from 'react';
import style from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.containerContacts}>
                <Title titleName='Контакты'/>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={style.form}>
                            <input/>
                            <input type="text"/>
                            <textarea/>
                    </div>
                    <Button buttonName='Отправить'/>
                </div>

            </div>
        </div>
    )
}

export default Contacts;