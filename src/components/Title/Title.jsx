import React from 'react';
import style from './Title.module.css';
import Fade from 'react-reveal/Fade';

const Title = (props) => {
    return (
        <div className={style.headerTitle}>
            <Fade cascade>
            <h2 className={style.containerTitle}>
                {props.titleName}
            </h2>
            </Fade>
            <div className={style.line}></div>
        </div>
    )
}

export default Title;