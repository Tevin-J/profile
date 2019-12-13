import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    return (
        <div className={style.button}>
            <button>{props.buttonName}</button>
        </div>
    )
}

export default Button;