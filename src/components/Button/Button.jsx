import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    return (
            <button>{props.buttonName}</button>
    )
}

export default Button;