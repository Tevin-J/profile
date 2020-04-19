export const requiredField = (value) => {
    if (!value) return 'Поле обязательно для заполнения'
}
export const emailValidator = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Введите корректный e-mail'  : undefined
