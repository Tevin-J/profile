import React from 'react';
import style from './Title.module.css';

const Title = (props) => {
    return (
        <div className={style.headerTitle}>
            <h2 className={style.containerTitle}>
                {props.titleName}
            </h2>
            <div className={style.line}></div>
        </div>
    )
}

export default Title;