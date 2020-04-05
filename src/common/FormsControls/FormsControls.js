import React from 'react'
import style from './../../components/Contacts/Contacts.module.css'
export const Input  = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={style.form + ' ' + (hasError ? style.error : '')}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea  = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={style.form + ' ' + style.textareaForm + ' ' + (hasError ? style.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}