import React from 'react';
import style from './Hire.module.css'

const Hire = () => {
    return (
        <div className={style.hire}>
            <div className={style.container}>
                <div className={style.hireText}>
                    Рассматриваю варианты удаленной работы
                </div>
                <div className={style.button}>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )
}

export default Hire;