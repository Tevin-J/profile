import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    return (
        <a href={props.url}>
            <button>{props.buttonName}</button>
        </a>
    )
}

export default Button;

