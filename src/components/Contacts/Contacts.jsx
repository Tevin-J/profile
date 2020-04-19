import React from 'react';
import style from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';
import {Field, reduxForm, reset} from "redux-form";
import {emailValidator, requiredField} from "../../utilits/validators";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import * as axios from "axios";
import {connect} from "react-redux";

const ContactsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.flexform}>
            <Field component={Input} name={'name'} placeholder='Ваше имя, название компании'
                   validate={[requiredField]}/>
            <Field component={Input} name={'email'} placeholder='E-mail'
                   validate={[requiredField, emailValidator]}/>
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
        axios.post('http://localhost:3010/sendMessage', formData)
        props.clearForm()
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


let mdtp = (dispatch) => {
    return {
        clearForm: () => {
            dispatch(reset('contacts'))
        }
    }
}


export default connect(null, mdtp)(Contacts);