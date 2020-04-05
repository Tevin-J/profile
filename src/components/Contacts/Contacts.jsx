import React from 'react';
import style from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utilits/validators";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)
const minLength5 = minLengthCreator(5)
const ContactsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.flexform}>
            <Field component={Input} name={'name'} placeholder='Ваше имя, название компании'
                   validate={[requiredField, maxLength50, minLength5]}/>
            <Field component={Input} name={'email'} placeholder='E-mail'
                   validate={[requiredField]}/>
            <Field component={Textarea} name={'message'} placeholder='Сообщение'
                   validate={[requiredField]}/>
            <Button buttonName='Отправить'/>
        </form>
    )
}
const ContactsReduxForm = reduxForm({
    form: 'contacts'
})(ContactsForm)
const Contacts = (props) => {
    const sendForm = (formData) => {
        console.log(formData.name, formData.email, formData.message)
        /*api.sendForm(formData.name, formData.email, formData.message)*/
    }
    return (
        <div className={style.contacts} id={'contacts'}>
            <div className={style.containerContacts}>
                <Fade>
                    <Title titleName='Свяжитесь со мной'/>
                    <div className={style.f}>
                        <ContactsReduxForm onSubmit={sendForm}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts;