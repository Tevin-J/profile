import React from 'react';
import style from './Hire.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';

const Hire = () => {
    return (
        <div className={style.hire}>
            <div className={style.containerHire}>
                <Title titleName='Ищу работу в Краснодаре || Сочи'/>
                <Fade>
                    <Button buttonName='Откликнуться'/>
                </Fade>
            </div>
        </div>
    )
}

export default Hire;