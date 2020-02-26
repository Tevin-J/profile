import React from 'react';
import style from './Hire.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";

const Hire = () => {
    return (
        <div className={style.hire}>
            <div className={style.containerHire}>
                <Title titleName='Ищу работу в Краснодаре || Сочи'/>
                <Button buttonName='Нанять меня!'/>
            </div>
        </div>
    )
}

export default Hire;