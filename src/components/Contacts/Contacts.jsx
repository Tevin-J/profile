import React from 'react';
import style from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.title}>
                        Контакты
                    </div>
                    <div className={style.form}>
                            <input/>
                            <input type="text"/>
                            <textarea/>
                    </div>
                    <div className={style.button}>
                        <button>Отправить</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contacts;