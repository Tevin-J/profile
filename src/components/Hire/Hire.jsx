import React from 'react';
import style from './Hire.module.css'
import Title from "../Title/Title";
import Fade from 'react-reveal/Fade';

const Hire = () => {
    return (
        <div className={style.hire}>
            <div className={style.containerHire}>
                <Fade>
                    <Title titleName='Являюсь выпускником IT-INCUBATOR.BY'/>
                </Fade>
            </div>
        </div>
    )
}

export default Hire;